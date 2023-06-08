import { BigNumber } from "ethers";
import { ITransactionInfoItem } from "./common";
import { SettingsList, SettingsListItem } from "./settingsList";

export interface ITransactionInfoProps {
  items: ITransactionInfoItem[];
}

export function TransactionInfo({ items }: ITransactionInfoProps) {
  return (
    <SettingsList className="tx-info">
      {items.map((it) => {
        const value = BigNumber.isBigNumber(it.value)
          ? it.value.toString()
          : it.value;
        return <SettingsListItem key={it.name} name={it.name} value={value} />;
      })}
    </SettingsList>
  );
}
