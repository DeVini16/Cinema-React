import styled from 'styled-components'

const opcoesLista= ["Categorias", "Coleção", "Favoritos", "Sobre"]

const Listagem = styled.ul`
  display: flex;
`

const ListaTexto = styled.li`  
  font-size: 18px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`
export const Lista = () => {
  return(
    <Listagem>
          { opcoesLista.map( (texto) => (
            <ListaTexto>
              <p>{texto}</p>
            </ListaTexto>
          ) ) }
    </Listagem>
  )
}