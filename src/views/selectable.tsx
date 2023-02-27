import { NavigationPaths } from "@/config/navigationPaths";
import { quizState, setAnswer } from "@/store/quiz";
import { useGetNextQuestionNr } from "@/utils/useGetNextQuestionNr";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Image from "next/image";
import { Question } from "@/types";

interface Props {
  question: Question;
  questionKey: string;
  isLastStep?: boolean;
}

export const Selectable: React.FC<Props> = ({
  question,
  questionKey,
  isLastStep,
}) => {
  const nextQuestion = useGetNextQuestionNr();
  const router = useRouter();
  const dispatch = useDispatch();
  const { gender } = useSelector(quizState);

  const onSelect = (value: string | number | boolean) => {
    if (isLastStep) {
      router.push(NavigationPaths.home);

      return;
    }

    dispatch(setAnswer({ value, key: questionKey }));
    setTimeout(() => {
      router.push(NavigationPaths.questions(gender, nextQuestion));
    }, 500);
  };

  return (
    <SelectedAnswerContainer>
      <h2>{question.title}</h2>
      <div>
        {question.options.map((opt, i) => (
          <SelectedAnswer
            key={i + Math.random()}
            onClick={() => onSelect(opt.value)}
          >
            <p>{opt.value}</p>
            <Image
              src="/images/arrowRight.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </SelectedAnswer>
        ))}
      </div>
    </SelectedAnswerContainer>
  );
};

const SelectedAnswerContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const SelectedAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(33, 33, 33, 0.16);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
`;
