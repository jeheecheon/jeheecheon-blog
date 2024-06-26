import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/_redux/store";

export interface CoverState {
    coverImageUrl: string;
    titleOnCover: string;
}

const initialState: CoverState = {
    coverImageUrl: "",
    titleOnCover: "",
};

export const coverSlice = createSlice({
    name: "cover",
    initialState,
    reducers: {
        setCoverImageUrl: (state, action: PayloadAction<string>) => {
            state.coverImageUrl = action.payload;
        },
        setTitleOnCover: (state, action: PayloadAction<string>) => {
            state.titleOnCover = action.payload;
        },
        setCover: (state, action: PayloadAction<CoverState>) => {
            state.coverImageUrl = action.payload.coverImageUrl;
            state.titleOnCover = action.payload.titleOnCover;
        },
    },
});

export function selectCoverImageUrl(state: RootState) {
    return state.cover.coverImageUrl;
}

export function selectTitleOnCover(state: RootState) {
    return state.cover.titleOnCover;
}

export function selectCover(state: RootState) {
    return state.cover;
}

// Action creators are generated for each case reducer function
export const { setCoverImageUrl, setTitleOnCover, setCover } =
    coverSlice.actions;

export default coverSlice.reducer;
