export const QUESTIONS = [
  {
    type: "select",
    key: "goal-type",
    question: {
      title: "What is your primary goal??",
      options: [
        {
          label: "Losing Weight",
          value: "Losing Weight",
        },
        {
          label: "Improve specific body areas",
          value: "Improve specific body areas",
        },
        {
          label: "Gain Muscle",
          value: "Gain Muscle",
        },
        {
          label: "Develop Healthy Habits",
          value: "Develop Healthy Habits",
        },
      ],
    },
  },
  {
    key: "structure",
    type: "multiple",
    question: {
      title: "Select body areas you would like to improve:?",
      options: [
        {
          label: "Breast Form",
          value: "Breast Form",
        },
        {
          label: "Arms",
          value: "Arms",
        },
        {
          label: "Belly",
          value: "Belly",
        },
        {
          label: "Buttocks",
          value: "Buttocks",
        },
        {
          label: "Legs and Thighs",
          value: "Legs and Thighs",
        },
      ],
    },
  },
  {
    type: "select",
    key: "scalp",
    question: {
      title: "Do you suffer from back pain?",
      options: [
        {
          label: "Yes",
          value: "Yes",
        },
        {
          label: "No",
          value: "No",
        },
      ],
    },
  },
  {
    type: "multiple",
    key: "length",
    question: {
      title: "Concerns you have faced after pregnancy:",
      options: [
        {
          label: "Anxiety or depression",
          value: "Anxiety or depression",
        },
        {
          label: "Face skin problems",
          value: "Face skin problems",
        },
        {
          label: "Weak hair or hair loss",
          value: "Weak hair or hair loss",
        },
        {
          label: "Weak nails",
          value: "Weak nails",
        },
        {
          label: "Loose skin or strech marks",
          value: "Loose skin or strech marks",
        },
      ],
    },
  },
  {
    type: "select",
    key: "using-dry-shampoo",
    question: {
      title: "How do you feel about excercising with your baby?",
      options: [
        {
          label: "I would love to!",
          value: "I would love to!",
        },
        {
          label: "I would like to try",
          value: " would like to try",
        },
        {
          label: "I am better on my own",
          value: "I am better on my own",
        },
      ],
    },
  },
  {
    type: "select",
    key: "interval",
    question: {
      title: "Do you suffer from DIASTASIS RECTI",
      options: [
        {
          label: "Yes",
          value: "Yes",
        },
        {
          label: "No",
          value: "No",
        },
        {
          label: "Not sure",
          value: "Not sure",
        },
      ],
    },
  },
  {
    type: "multiple",
    key: "chemicals",
    question: {
      title: "Select type of workouts you like?",
      options: [
        {
          label: "Flexibility",
          value: "Flexibility",
        },
        {
          label: "Aerobic",
          value: "Aerobic",
        },
        {
          label: "Strength",
          value: "Strength",
        },
        {
          label: "Others",
          value: "Others",
        },
        {
          label: "I don’t like workouts",
          value: "I don’t like workouts",
        },
      ],
    },
  },
  {
    type: "select",
    key: "services",
    question: {
      title: "Are you currently breasfeeding?",
      options: [
        {
          label: "Yes",
          value: "Yes",
        },
        {
          label: "No",
          value: "No",
        },
      ],
    },
  },
  {
    type: "intermission",
    key: "menopause",
    question: {
      title: "Did you know?",
      fact1:
        "Low impact exercises are completely safe during breastfeeding and do not affect the milk supply or taste.",
      fact2:
        "Keep in mind that it only takes 15 minutes of focused daily physical activity to give long-lasting results.",
    },
  },
  {
    type: "multiple",
    key: "more-loss",
    question: {
      title: "What foods is your breasfed baby sensitive to?",
      options: [
        {
          label: "Lactose",
          value: "Lactose",
        },
        {
          label: "Eggs",
          value: "Eggs",
        },
        {
          label: "Nuts",
          value: "Nuts",
        },
        {
          label: "Soy",
          value: "Soy",
        },
        {
          label: "Gluten",
          value: "Gluten",
        },
        {
          label: "Fish",
          value: "Fish",
        },
        {
          label: "Shellfish",
          value: "Shellfish",
        },
        {
          label: "None of the above",
          value: "None of the above",
        },
      ],
    },
  },
  {
    type: "typed",
    key: "stress",
    question: {
      title: "How young are you?",
    },
  },
];

export const test = typeof QUESTIONS;
