import { CardRecomenda } from "../CardRecomenda/CardRecomenda"
import { Titulo } from "../Titulo/Titulo"
import { filmes } from "./DadosNovos"
import styled from "styled-components"
import ddb from '../../imagens/ddb.jpeg'

const FilmeNovosContainers = styled.section`
  background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosFilmesContainer= styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export const FilmesNovos = () => {
    return(
      <FilmeNovosContainers>
        <Titulo 
        cor="#000"
        tamanhoFonte="36px"
        >
          Últimos lançamentos
        </Titulo>
          <NovosFilmesContainer>
            {filmes.map( filme => (
                <img src={filme.src} alt=""/>
            ))}
          </NovosFilmesContainer>
        <CardRecomenda
          titulo="talvez você se interesse por..."
          subtitulo="Debi e Loide"
          descricao="Dois amigos de bom coração, 
          mas incrivelmente estúpidos, 
          tropeçam em uma maleta. 
          Desconhecido para eles, 
          contém dinheiro..."
          img={ddb}
        />
        
      </FilmeNovosContainers>
      )
}