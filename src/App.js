import { Header } from './componentes/Header/Header';
import styled from 'styled-components'
import { Pesquisa } from './componentes/Pesquisa/Pesquisa';
import { FilmesNovos } from './componentes/FilmesNovos/FilmesNovos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <FilmesNovos />
    </AppContainer>
  )
}

export default App;
