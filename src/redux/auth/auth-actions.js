import { createAction } from "@reduxjs/toolkit";

const errorReset = createAction("registrationError/reset");

const actions = { errorReset };
export default actions;
