import React from "react";
import styled, { css } from "styled-components";
/* import Logo from "../../public/logo_knarent.svg"; */
/* import Phone from "../../public/phone1.svg"; */
import info from "../../theme/info";

type NavProps = {
  sticky?: boolean;
};

const NavWrapper = styled.nav<NavProps>`
  height: ${({ theme }) => theme.dimensions.navbarHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ sticky }) =>
    sticky &&
    css`
      position: sticky;
      top: 0;
      z-index: 10;
    `}
`;
const LogoWrapperStyles = styled.div`
  height: 32px;
`;
const PhoneLogoStyles = styled.div`
  height: 16px;
`;
const PhoneWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Nav = ({ sticky }: NavProps) => {
  const [firstPhoneNumber] = info.telephones;
  return (
    <NavWrapper sticky={sticky}>
      <LogoWrapperStyles>{/* <Logo /> */}</LogoWrapperStyles>
      <p>Menu Items</p>
      <PhoneWrapperStyles>
        <PhoneLogoStyles>{/* <Phone /> */}</PhoneLogoStyles>
        {firstPhoneNumber}
      </PhoneWrapperStyles>
    </NavWrapper>
  );
};

export default Nav;
