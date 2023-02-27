import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useGetNextQuestionNr } from "@/utils/useGetNextQuestionNr";
import { NavigationPaths } from "@/config/navigationPaths";
import { useDispatch, useSelector } from "react-redux";
import { quizState, setAnswer } from "@/store/quiz";
import styled from "styled-components";
import { Button } from "@/components/button";
import { Question } from "@/types";

interface Props {
  questionKey: string;
  isLastStep: boolean;
  question: Question;
}

export const Typed: React.FC<Props> = ({
  questionKey,
  question,
  isLastStep,
}) => {
  const [value, setValue] = useState("");
  const [error] = useState("");
  const { answers, gender } = useSelector(quizState);
  const dispatch = useDispatch();
  const router = useRouter();
  const nextQuestion = useGetNextQuestionNr();
  const selectedAnswer = answers[questionKey];

  useEffect(() => {
    if (selectedAnswer) setValue(selectedAnswer as string);
  }, []);

  const onContinue = () => {
    if (!value) return;
    dispatch(setAnswer({ value, key: questionKey }));
    setTimeout(() => {
      router.push(
        isLastStep
          ? NavigationPaths.loading
          : NavigationPaths.questions(gender, nextQuestion)
      );
    }, 500);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <SelectedAnswerContainer>
      <div>
        <h2>{question.title}</h2>
      </div>
      <InputContainer>
        <StyledInput
          onChange={handleChange}
          type="text"
          value={value}
          placeholder="Age"
        />
        {error && <p>{error}</p>}
        <Button onClick={onContinue}>Continue</Button>
      </InputContainer>
    </SelectedAnswerContainer>
  );
};

const SelectedAnswerContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  width: 500px;
  margin: 0 auto 10px auto; ;
`;

const StyledInput = styled.input`
  border: 1px solid #aa00ff;
  box-shadow: 0px 0px 16px rgba(170, 0, 255, 0.16);
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;
