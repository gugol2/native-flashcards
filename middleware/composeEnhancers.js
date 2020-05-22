import { compose } from "redux";
import { buildMiddleware } from ".";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const buildComposeEnhancers = () => composeEnhancers(buildMiddleware());
