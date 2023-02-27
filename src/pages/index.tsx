import { Button } from "@/components/button";
import { NavigationPaths } from "@/config/navigationPaths";
import { setGender } from "@/store/quiz";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onSelect = (gender: "male" | "female") => {
    dispatch(setGender(gender));
    return router.push(NavigationPaths.questions(gender, 1));
  };

  return (
    <SelectedAnswerContainer>
      <HeroHeaderContainer>
        <StyledHeader>Get back in shape.</StyledHeader>
        <p>Selected Your Gender!</p>
        <ButtonContainer>
          <Button onClick={() => onSelect("male")}>Male</Button>
          <Button onClick={() => onSelect("female")}>Female</Button>
        </ButtonContainer>
      </HeroHeaderContainer>
      <div>
        <Image
          src="/images/hero.png"
          alt="hero image"
          width={640}
          height={499}
        />
      </div>
    </SelectedAnswerContainer>
  );
};

export default Home;

const SelectedAnswerContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const StyledHeader = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
`;
const HeroHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
