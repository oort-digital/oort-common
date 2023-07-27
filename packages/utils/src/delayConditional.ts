/* eslint-disable no-await-in-loop */
import { delay } from "./delay";

export type ConditionFunc = () => boolean;
export type AsyncConditionFunc = () => Promise<boolean>;

export interface IDelayConditionSettings {
  attemptDelayMs?: number;
  condition?: ConditionFunc;
  asyncCondition?: AsyncConditionFunc;
  maxAttemptCount?: number;
}

function isSettings(
  args: IDelayConditionSettings | ConditionFunc
): args is IDelayConditionSettings {
  return (args as IDelayConditionSettings).attemptDelayMs !== undefined;
}

function createInternalCondition(
  condition?: ConditionFunc,
  asyncCondition?: AsyncConditionFunc
): AsyncConditionFunc {
  return async () => {
    const conditionResult = condition ? condition() : true;
    const asyncConditionResult = asyncCondition ? await asyncCondition() : true;
    return conditionResult && asyncConditionResult;
  };
}

async function delayConditionalInternal({
  condition,
  asyncCondition,
  attemptDelayMs = 100,
  maxAttemptCount = -1,
}: IDelayConditionSettings): Promise<boolean> {
  const cond = createInternalCondition(condition, asyncCondition);

  if (maxAttemptCount === -1) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (await cond()) {
        return true;
      }
      await delay(attemptDelayMs);
    }
  }

  let curAttempt = 0;
  while (curAttempt < maxAttemptCount) {
    if (await cond()) {
      return true;
    }
    await delay(attemptDelayMs);
    curAttempt += 1;
  }

  return false;
}

export function delayConditional(
  args: IDelayConditionSettings | ConditionFunc
): Promise<boolean> {
  if (isSettings(args)) {
    if (!args.condition && !args.asyncCondition) {
      throw new Error("Set condition or conditionAsync");
    }
    return delayConditionalInternal(args);
  }
  return delayConditionalInternal({
    condition: args,
  });
}
