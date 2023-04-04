import './App.css';
import { Logo } from './componentes/Logo';
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

const opcoesLista= ["Categorias", "Coleção", "Favoritos", "Sobre"]
const icones = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='lista'>
          { opcoesLista.map( (texto) => (
            <li className='listados'>
              <p>{texto}</p>
            </li>
          ) ) }

        </ul>
        
        <ul className='icon'>
          {icones.map( (icon) => (
            <li className='icone'>
              <img src={icon} alt='icones'></img>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
