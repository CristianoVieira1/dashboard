import React, { useMemo, useState } from 'react';

import { useTheme } from '../../hooks/theme';

import emojis from '../../utils/emojis';
import { Container, Profile, UserName, Welcome } from './styles';

export const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() => (theme.title === 'dark' ? true : false));

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Travel</UserName>
      </Profile>
    </Container>
  );
};
