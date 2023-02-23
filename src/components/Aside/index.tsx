import React, { useState } from 'react';

import {
  MdArrowDownward,
  MdArrowUpward,
  MdClose,
  MdDashboard,
  MdExitToApp,
  MdMenu,
} from 'react-icons/md';

import logoImg from '../../assets/icons/logo.svg';

import { useAuth } from '../../hooks/auth';

import * as S from './styles';

const Aside: React.FC = () => {
  const { signOut } = useAuth();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  return (
    <S.Container menuIsOpen={toggleMenuIsOpened}>
      <S.Header>
        <S.ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </S.ToggleMenu>

        <S.LogImg src={logoImg} alt="Logo Travel" />
        <S.Title>Travel</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>

        <S.MenuItemLink href="/estados">
          <MdArrowUpward />
          Estados
        </S.MenuItemLink>

        <S.MenuItemLink href="/cidades">
          <MdArrowDownward />
          Cidades
        </S.MenuItemLink>

        <S.MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </S.MenuItemButton>
      </S.MenuContainer>
    </S.Container>
  );
};

export default Aside;
