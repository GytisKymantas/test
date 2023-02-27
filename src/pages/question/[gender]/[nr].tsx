import React from "react";
import { QUESTIONS } from "@/constants/questions";
import { QuestionView } from "@/views";

export default function Questions() {
  return (
    <div>
      <QuestionView questions={QUESTIONS} />
    </div>
  );
}
