"use client";

import { usePathname } from "next/navigation";
import { ROUTES } from "@/helpers/routes";
import * as SC from "./Navigation.styled";

export function Navigation() {
  const pathname = usePathname();
  const routes = Object.keys(ROUTES);

  return (
    <nav>
      <SC.NavList>
        {routes.map((route) => (
          <SC.ListItem key={route}>
            <SC.StyledLink
              href={ROUTES[route]}
              $active={pathname === ROUTES[route]}
            >
              {route}
            </SC.StyledLink>
          </SC.ListItem>
        ))}
      </SC.NavList>
    </nav>
  );
}
