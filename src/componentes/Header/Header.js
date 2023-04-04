import { Icones } from "../Icones/icones"
import { Lista } from "../Lista/lista"
import { Logo } from "../Logo"
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  space-around: middle;
  padding: 0px 230px ;
`

export const Header = () => {
    return (
      <HeaderContainer>
        <Logo/>
        <Lista/>
        <Icones/>
      </HeaderContainer>
    )
}