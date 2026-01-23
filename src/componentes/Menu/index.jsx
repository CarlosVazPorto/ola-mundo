import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
    const localizacao = useLocation();
    
    console.log(localizacao);

    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to="/">
                    Início
                </Link>
                <Link className={styles.link} to="/sobremim">
                    Sobre Mim
                </Link>
            </nav>
        </header>
    );
};

export default Menu;
