import { configureStore } from "@reduxjs/toolkit";

import { restApiReducer } from "./slices";

export const store = configureStore({
    reducer: {
        restApi: restApiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
