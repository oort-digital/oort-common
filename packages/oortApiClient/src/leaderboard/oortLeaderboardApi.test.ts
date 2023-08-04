/* eslint-disable import/named */
import { OortLeaderboardApi } from "./oortLeaderboardApi";
import axios, { AxiosRequestConfig } from "axios";
import * as https from "https";
import { IAPIConfig, OortApiInterceptors } from "../common";
import { ConsoleLogger, LogLevel } from "@oort-digital/logger";

const abortController = new AbortController();
export const EMPTY_ABORT_SIGNAL = abortController.signal;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setTokenHeader = (token: string, curRequest: AxiosRequestConfig<any>) => {
  if (token && curRequest.headers) {
    curRequest.headers["token"] = token;
  }
};

//set actual oort token here manualy
const OORT_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwIiwic3ViIjoiIiwiaWF0IjoxNjcyMDc4NDU3LCJleHAiOjE2NzI2ODMyNTcsIndhbGxldEFkZHJlc3MiOiIweDBkYjRhNzZkMTViODE5ZjA2NDk5ZDQ5MzhlMTYxNDZjNDU4YmU5NzcifQ.8_j-S8hwcwMelt1l4soo4mDMhSITkLleaivxARhlFYY";

axios.interceptors.request.use(async (request) => {
  request.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  console.log("interceptor!!!");
  console.log(request.url);
  setTokenHeader(OORT_TOKEN, request);
  return request;
});

const logger = new ConsoleLogger(LogLevel.Debug);

const oortClientSettings: IAPIConfig = {
  baseURL: "https://api-test.oort.digital/minting",
  logger,
  interceptors: OortApiInterceptors.createInstance(logger),
};

test.skip("debug only getLeaderboardInfo", async () => {
  const client = OortLeaderboardApi.createSingleton(oortClientSettings);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  await client.getLeaderboardInfo(EMPTY_ABORT_SIGNAL);
  // console.log(JSON.stringify(response));
});
