import React from "react";
import { useRouter } from "next/router";
import { useGetNextQuestionNr } from "@/utils/useGetNextQuestionNr";
import { NavigationPaths } from "@/config/navigationPaths";
import { Button } from "@/components/button";
import { useSelector } from "react-redux";
import { quizState } from "@/store/quiz";
import styled from "styled-components";
import Image from "next/image";
import { Question } from "@/types";

interface Props {
  question?: Question;
  isLastStep?: boolean;
}

export const Intro: React.FC<Props> = ({ question, isLastStep }) => {
  const router = useRouter();
  const { gender } = useSelector(quizState);
  const nextQuestion = useGetNextQuestionNr();

  const onContinue = () => {
    router.push(
      isLastStep
        ? NavigationPaths.loading
        : NavigationPaths.questions(gender, nextQuestion)
    );
  };

  return (
    <SelectedAnswerContainer>
      <p>{question?.fact1}</p>
      <ImageContainer>
        <Image
          src="/images/intermission.png"
          width={396}
          height={234}
          alt="mother"
        />
      </ImageContainer>
      <p>{question?.fact2}</p>
      <p>Let’s continue with creating your personalized meal plan portfolio!</p>
      <Button onClick={onContinue}>OK, let's do it!</Button>
    </SelectedAnswerContainer>
  );
};

const SelectedAnswerContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
