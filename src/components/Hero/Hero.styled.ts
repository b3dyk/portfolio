import styled, { keyframes } from "styled-components";

type SectionProps = {
  $length: number;
};

const typeWriter = keyframes`
to {
    left: 100%;
}
 `;

const blink = keyframes`
 0% {
    background: transparent;
 }
 40% {
  background: transparent;
 }
 50%{
  background: var(--color-accent)
 }
 100%{
background: var(--color-accent)
 }
 `;

const fadeIn = keyframes`
 to {
  opacity: 1;
  transform: translateY(0);
 }
 `;

export const HeroSection = styled.section<SectionProps>`
  --_tw-characters: ${(p) => p.$length};
  --_tw-speed: calc((var(--_tw-characters) / 12) * 1000ms);
  --_tw-delay: 1000ms;
  padding-top: 250px;
  padding-bottom: 250px;
  text-align: center;
`;

export const MainTitle = styled.h1`
  position: relative;
  display: inline-block;
  font-weight: 900;
  font-size: 64px;
  line-height: 1.285;
  text-align: center;
  margin-bottom: 64px;
  color: var(--color-text-main);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &::before {
    background: var(--color-bg);
    animation: ${typeWriter} var(--_tw-speed) steps(var(--_tw-characters))
      forwards var(--_tw-delay);
  }

  &::after {
    width: 3px;
    background: var(--color-accent);
    animation: ${typeWriter} var(--_tw-speed) steps(var(--_tw-characters))
        forwards var(--_tw-delay),
      ${blink} 500ms infinite alternate;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(-150%);

  animation: ${fadeIn} 1000ms ease calc(var(--_tw-speed) + var(--_tw-delay))
    forwards;
`;
