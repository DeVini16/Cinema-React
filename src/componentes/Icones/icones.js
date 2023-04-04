import './icones.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icones = [perfil, sacola]

export const Icones = () => {
  return(
    <ul className='icon'>
          {icones.map( (icon) => (
            <li className='icone'>
              <img src={icon} alt='icones'></img>
            </li>
          ))}
        </ul>
  )
}