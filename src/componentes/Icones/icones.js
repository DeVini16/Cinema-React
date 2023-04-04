import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
margin-right: 40px;
width: 25px;
list-style: none;
`

const Icon = styled.ul`
display: flex;
align-items: center;
`

const icones = [perfil, sacola]

export const Icones = () => {
  return(
    <Icon>
      {icones.map( (icon) => (
        <Icone> 
          <img src={icon} alt='icones'></img>
        </Icone>
      ))}
    </Icon>
  )
}