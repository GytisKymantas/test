import { createSlice, PayloadAction } from '@reduxjs/toolkit';



export interface QuizState {
  answers?: { [key: string]: string | number | boolean | string[] };
  gender?: any;
  email?: any;
  units?: any;
  isCompleting?: any;
  questions: any[];
}

const INITIAL_STATE: QuizState = {
  answers: {},
  units: 'imperial',
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: INITIAL_STATE,
  reducers: {
    setUnits: (state, action: PayloadAction<QuizState['units']>) => {
      state.units = action.payload;
    },
    setGender: (state, action: PayloadAction<QuizState['gender']>) => {
      state.gender = action.payload;
      state.answers = {};
      state.email = '';
      state.units = 'imperial';
    },
    setAnswer: (
      state,
      action: PayloadAction<{ value: string | number | boolean; key: string }>,
    ) => {
      const { value, key } = action.payload;
      state.answers[key] = value;
    },
    setMultipleAnswer: (
      state,
      action: PayloadAction<{ value: string | number | boolean; key: string }>,
    ) => {
      const { key } = action.payload;
      const value = action.payload.value as string;
      let answer = (state.answers[key] as string[]) || [];
      answer = answer.includes(value)
        ? answer.filter(str => str !== value)
        : [...answer, value];
      state.answers[key] = answer;
    },
  },
 
});

export const { setUnits, setGender, setAnswer, setMultipleAnswer } =
  quizSlice.actions;
export const quizReducer = quizSlice.reducer;
