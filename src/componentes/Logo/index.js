import logo from '../../imagens/logo.svg'
import './logo.css'

export const Logo = () => {
  return (
      <div className='logo'>
        <img src={logo}
          alt='logo da página'
          className='logo-img'>
        </img>
        <p>Portal dos Filmes</p> 
        
      </div>
  )
}