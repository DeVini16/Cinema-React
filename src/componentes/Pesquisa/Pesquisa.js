import { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../Input/Input'
import { filmes } from './dadosPesquisa'

  const PesquisaContainer = styled.section`
  color: #FFF;
  text-align: center;
  padding: 30px 0;
  height: 270px;
  width: 100%;
  `

  const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
  `

export const Pesquisa = () => {
  const [filmesPesquisados, setFilmesPesquisados] = useState([])

  return (
    <PesquisaContainer>
      <Titulo>Seja bem vindo ao Portal !</Titulo>
      <h3>Por que não assistir um filme hoje?</h3>
          <Input 
          placeholder='O que quer ver?'
          onBlur={ evento => {
            const textoDigitado = evento.target.value
            const resultadoPesquisa = filmes.filter( filmes => filmes.nome.includes(textoDigitado) )
            setFilmesPesquisados(resultadoPesquisa)
          }}
          />
        { filmesPesquisados.map(filmes => (
          <div>
            <img src={filmes.src} alt=''/>
            <p>{filmes.nome}</p>
          </div>
        ))}
    </PesquisaContainer>
  )
}