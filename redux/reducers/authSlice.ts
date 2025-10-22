import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// registration data type
export interface IRegistrationData {
  mobile: string | null;
  firstName: string | null;
  lastName: string | null;
  birthDate: string | null;
  gender: string | null;
  username: string | null;
}

// registration steps
interface IRegistrationSteps {
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
}

interface InitialState {
  registrationData: IRegistrationData | null;
  registrationSteps: IRegistrationSteps;
}

const initialState: InitialState = {
  registrationData: null,
  registrationSteps: {
    stepOne: false,
    stepTwo: false,
    stepThree: false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegistrationData: (state, action) => {
      state.registrationData = action.payload;
    },
    clearRegistrationData: (state) => {
      state.registrationData = null;
    },
    setStepOne: (state, action: PayloadAction<boolean>) => {
      state.registrationSteps.stepOne = action.payload;
    },
    setStepTwo: (state, action: PayloadAction<boolean>) => {
      state.registrationSteps.stepTwo = action.payload;
    },
    setStepThree: (state, action: PayloadAction<boolean>) => {
      state.registrationSteps.stepThree = action.payload;
    },
  },
});

export const {
  setRegistrationData,
  clearRegistrationData,
  setStepOne,
  setStepTwo,
  setStepThree,
} = authSlice.actions;

export default authSlice.reducer;
