import { applyMiddleware } from "redux";
import { logger } from "./logger";

export const buildMiddleware = () => applyMiddleware(logger);
