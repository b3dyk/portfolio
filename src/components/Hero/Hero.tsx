"use client";
import { Container } from "@/styles/Container.styled";
import * as SC from "./Hero.styled";
import { useTitleRef } from "./hooks/useTitleRef";

export function Hero() {
  const { titleLength, titleRef } = useTitleRef();

  return (
    <SC.HeroSection $length={titleLength}>
      <Container>
        <SC.MainTitle ref={titleRef}>Hello, my name is Oleksandr.</SC.MainTitle>
        <SC.Subtitle>Welcome to my website!</SC.Subtitle>
      </Container>
    </SC.HeroSection>
  );
}
