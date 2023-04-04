import './Header.css'
import { Icones } from "../Icones/icones"
import { Lista } from "../Lista/lista"
import { Logo } from "../Logo"

export const Header = () => {
    return (
      <header className='App-header'>
        <Logo/>
        <Lista/>
        <Icones/>
    </header>
    )
}