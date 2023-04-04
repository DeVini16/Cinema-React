import './lista.css'

const opcoesLista= ["Categorias", "Coleção", "Favoritos", "Sobre"]

export const Lista = () => {
  return(
    <ul className='lista'>
          { opcoesLista.map( (texto) => (
            <li className='listados'>
              <p>{texto}</p>
            </li>
          ) ) }

    </ul>
  )
}