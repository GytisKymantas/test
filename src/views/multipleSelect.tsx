import { Button } from "@/components/button";
import { NavigationPaths } from "@/config/navigationPaths";
import { quizState, setMultipleAnswer } from "@/store/quiz";
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

export const MultipleSelect: React.FC<Props> = ({
  question,
  questionKey,
  isLastStep,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { answers, gender } = useSelector(quizState);

  const nextQuestion = useGetNextQuestionNr();

  const onContinue = () => {
    if (isLastStep) return router.push(NavigationPaths.home);
    setTimeout(() => {
      router.push(NavigationPaths.questions(gender, nextQuestion));
    }, 500);
  };
  const selectedAnswer = answers[questionKey];

  return (
    <SelectedAnswerContainer>
      <h2>{question?.title}</h2>
      <div>
        {question?.options?.map((opt, i) => {
          const isSelected =
            Array.isArray(selectedAnswer) && selectedAnswer.includes(opt.value);
          const value = opt.value as string;

          return (
            <SelectedAnswer
              key={i + Math.random()}
              bam={isSelected}
              onClick={() =>
                dispatch(setMultipleAnswer({ value, key: questionKey }))
              }
            >
              <p>{opt.label}</p>
              {isSelected ? (
                <Image
                  src="/images/checkmarkChecked.svg"
                  alt="checked"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/images/checkmark.svg"
                  alt="not checked"
                  width={20}
                  height={20}
                />
              )}
            </SelectedAnswer>
          );
        })}
      </div>
      <Button onClick={onContinue}>Continue</Button>
    </SelectedAnswerContainer>
  );
};
const SelectedAnswerContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const SelectedAnswer = styled.div<{ bam?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({ bam }) =>
    bam ? `1px solid #AA00FF` : `1px solid rgba(33, 33, 33, 0.16)`};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
`;
