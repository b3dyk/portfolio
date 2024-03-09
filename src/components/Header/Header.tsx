"use client";

import Image from "next/image";
import Link from "next/link";

import { Navigation } from "../Navigation/Navigation";
import logo from "../../../public/images/logo.png";

import * as SC from "./Header.styled";

export function Header() {
  return (
    <SC.StyledHeader>
      <SC.HeaderContainer>
        <Link href="/">
          <Image src={logo} alt="logo" width={100} />
        </Link>
        <Navigation />
      </SC.HeaderContainer>
    </SC.StyledHeader>
  );
}
