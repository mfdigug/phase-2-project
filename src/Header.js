import Nav from './Nav'
import './styles/Header.css'
function Header() {
  return (
    <div className="header-component">
        <h1>Welcome</h1>
        <h3>What do you need to do?</h3>
        <Nav />
    </div>
  )
}

export default Header