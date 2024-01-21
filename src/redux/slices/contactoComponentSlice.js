import { createSlice } from "@reduxjs/toolkit";

const contactoComponentSlice = createSlice({
    name: 'contactoComponentSlice',
    initialState: {
        step: 1
    },
    reducers : {
        setStepContactoComponentAction : (state, action) => {
            return {
                ...state,
                step: action.payload
            }
        }
    }
});

export const {setStepContactoComponentAction} = contactoComponentSlice.actions;

export default contactoComponentSlice.reducer;