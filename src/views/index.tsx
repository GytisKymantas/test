import React, { FC } from "react";
import { useRouter } from "next/router";
import { Selectable } from "./selectable";
import { MultipleSelect } from "./multipleSelect";
import { NavigationPaths } from "@/config/navigationPaths";
import { Intro } from "./intro";
import { Typed } from "./typed";
import Image from "next/image";

import styled from "styled-components";
import { SelectQuestion } from "@/types";

interface Props {
  questions: any;
}

export const QuestionView: FC<Props> = ({ questions }) => {
  const router = useRouter();

  const query = router.query;
  const current = parseFloat(query.nr as string);

  if (!questions) return null;

  const currentQuestion = questions[current - 1];

  const renderStep = () => {
    if (!currentQuestion) return null;
    const isLastStep = questions?.length === current;

    const { type } = currentQuestion;
    if (type === "select") {
      return (
        <Selectable
          isLastStep={isLastStep}
          questionKey={currentQuestion.key}
          question={currentQuestion.question}
        />
      );
    }

    if (type === "multiple") {
      return (
        <MultipleSelect
          isLastStep={isLastStep}
          questionKey={currentQuestion.key}
          question={currentQuestion.question}
        />
      );
    }

    if (type === "intermission") {
      return (
        <Intro isLastStep={isLastStep} question={currentQuestion.question} />
      );
    }

    if (type === "typed") {
      return (
        <Typed
          isLastStep={isLastStep}
          question={currentQuestion.question}
          questionKey={currentQuestion.key}
        />
      );
    }
  };

  const goBackLink =
    current - 1 !== 0
      ? NavigationPaths.questions("male", current - 1)
      : NavigationPaths.home;

  const progress = current / Object.keys(questions).length;
  return (
    <div>
      <QuestionViewContainer>
        <div>
          <QuestionViewContainerGoBack onClick={() => router.push(goBackLink)}>
            <Image
              src="/images/arrowLeft.svg"
              alt="arrow"
              width={20}
              height={20}
            />
            <p>GO BACK </p>
          </QuestionViewContainerGoBack>
        </div>
        <QuestionViewContainerGoBackPagination>
          {current} of {questions.length}
        </QuestionViewContainerGoBackPagination>
      </QuestionViewContainer>

      {renderStep()}
    </div>
  );
};
const QuestionViewContainerGoBackPagination = styled.div`
  display: flex;
  align-items: Center;
  margin-right: 50px;
`;

const QuestionViewContainerGoBack = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  gap: 10px;
  align-items: center;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
`;

const QuestionViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
`;
