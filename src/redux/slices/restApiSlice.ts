import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface RestRequest {
    requestName: string;
    method: string;
    url: string;
    response: {
        data: string;
        headers: string;
    };
}

export interface RestApiState {
    activeRequests: RestRequest[];
    selectedTab: number;
}

const initialState: RestApiState = {
    activeRequests: [
        {
            requestName: "",
            method: "GET",
            url: "",
            response: {
                data: "",
                headers: "",
            },
        },
    ],
    selectedTab: 0,
};

export const restApiSlice = createSlice({
    name: "restApi",
    initialState,
    reducers: {
        addNewRequest: (state) => {
            state.activeRequests.push({
                requestName: "",
                method: "GET",
                url: "",
                response: {
                    data: "",
                    headers: "",
                },
            });
        },
        closeRequestTab: (state, action: PayloadAction<number>) => {
            state.activeRequests?.splice(action.payload, 1);
        },
        setSelectedTab: (state, action: PayloadAction<number>) => {
            state.selectedTab = action.payload;
        },
        handleRequestDataChange: (state, action: PayloadAction<any>) => {
            const { name, value }: any = action.payload;
            type RequestKey = keyof (typeof state.activeRequests)[0];
            if (
                state.selectedTab >= 0 &&
                state.activeRequests[state.selectedTab]
            ) {
                state.activeRequests[state.selectedTab][name as RequestKey] =
                    value;
            }
        },
        setRestResponse: (state, action) => {
            if (state.activeRequests[state.selectedTab]) {
                state.activeRequests[state.selectedTab].response = {
                    data: action.payload?.data,
                    headers: action.payload?.headers,
                };
            }
        },
    },
});

export const {
    addNewRequest,
    closeRequestTab,
    setSelectedTab,
    handleRequestDataChange,
} = restApiSlice.actions;

export default restApiSlice.reducer;
