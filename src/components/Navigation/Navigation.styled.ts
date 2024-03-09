import Link from "next/link";
import styled from "styled-components";

type LinkType = {
  $active: boolean;
};

export const NavList = styled.ul`
  --_gap: 16px;

  display: flex;
`;

export const ListItem = styled.li`
  position: relative;
  overflow: hidden;
  padding: calc(var(--_gap) / 2);

  transition: color var(--anim);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: var(--color-accent);

    translate: var(--_translate, 0);
    scale: var(--_width, 0) 1;

    transition: scale var(--anim) var(--_scale-delay, 0ms),
      translate var(--anim-long) var(--_translate-delay, 0ms);
  }

  &:hover {
    --_width: 1;
  }

  @supports selector(:has(h1)) {
    &:hover + & {
      --_translate: -100%;
      --_scale-delay: 250ms;
      --_translate-delay: 200ms;
    }

    &:has(+ :hover) {
      --_translate: 100%;
      --_scale-delay: 250ms;
      --_translate-delay: 200ms;
    }
  }
`;

export const StyledLink = styled(Link)<LinkType>`
  display: block;
  font-size: 24px;
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;

  color: ${(p) =>
    p.$active ? "var(--color-accent-sec)" : "var(--color-main-text)"};

  &:hover {
    color: #fff;
  }
`;
