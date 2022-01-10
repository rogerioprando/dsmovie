import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'

// o componente Navbar é uma função que retorna um código jsx 
// essa função é exportada (export default Navbar) e depois será chamada pelo App.tsx
function Navbar(){

    return (
        <header>
        <nav className="container"> 
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/rogerioprando/dsmovie">
              <div className="dsmovie-contact-container">
                <GithubIcon />
                <p className="dsmovie-contact-link">/rogerioprando</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;