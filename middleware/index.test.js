import { buildMiddleware } from ".";
import { applyMiddleware as mockedApplyMiddleware } from "redux";
import { logger as mockedLogger } from "./logger";

jest.mock("redux", () => {
  return {
    ...jest.requireActual("redux"),
    applyMiddleware: jest.fn(() => {}),
  };
});

jest.mock("./logger", () => {
  return {
    logger: jest.fn(),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

test("should call applyMiddleware with thunk and logger", () => {
  buildMiddleware();
  expect(mockedApplyMiddleware).toHaveBeenCalledTimes(1);
  expect(mockedApplyMiddleware).toHaveBeenCalledWith(mockedLogger);
});
