
// export const fetchQuizQuestions = createAsyncThunk(
//   'quiz/fetchQuizQuestions',
//   async () => {
//     try {
//       const data = await rndApi.fetchQuiz<QuizQuestions>();

//       return data?.questions ?? [];
//     } catch (e) {
//       handleAxiosError(e);

//       return [];
//     }
//   },
// );

// export const createLead = createAsyncThunk(
//   'quiz/createLead',
//   async (
//     {
//       email,
//       privacy_policy_agreement,
//       email_marketing_agreement,
//       callback,
//     }: {
//       email: string;
//       privacy_policy_agreement?: boolean;
//       email_marketing_agreement?: boolean;
//       callback?: (code?: string) => void;
//     },
//     { getState },
//   ) => {
//     const {
//       quiz: { answers, gender },
//       app: { experiments, lang },
//     } = getState() as RootState;

//     const flow = Object.keys(experiments)?.[0];

//     const body: LeadPayload = {
//       quiz_answers: { ...answers, gender },
//       email,
//       privacy_policy_agreement,
//       email_marketing_agreement,
//       language: lang,
//       funnel: flow || Variants.Main,
//     };

//     try {
//       const { code } = await rndApi.createLead(body);

//       try {
//         const purchased_at = new Date();
//         const web_channel = window.location.hostname;

//         await rndApi.createSubscriber(code, { web_channel, purchased_at });
//       } catch (e) {
//         handleAxiosError(e);
//       }

//       try {
//         if (callback && typeof callback === 'function') {
//           callback(code);
//         }
//       } catch (e) {
//         handleAxiosError(e);
//       }

//       GTMDataLayer.addQuizAnswers(body);
//       customApi.trackFacebookLead(code);

//       return code;
//     } catch (e) {
//       handleAxiosError(e, {
//         extra: {
//           function: 'createLead',
//           message: 'Could not create lead',
//         },
//       });

//       return '';
//     }
//   },
// );
