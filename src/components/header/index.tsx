import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Container } from './styles'
import { ThemeContext } from 'styled-components'

interface Props {
 toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
 const { colors, title } = useContext(ThemeContext)
 return (
  <>
   <Container>
    Hello, Header!

    <Switch
     onChange={toggleTheme}
     checked={title === 'dark'}
     checkedIcon={false}
     uncheckedIcon={false}
     offColor={colors.secondary}
     onColor={colors.secondary}
    />

   </Container>
  </>
 )
}

export default Header;