import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink>
                    Início
                </MenuLink>
                <MenuLink>
                   Sobre Mim
                </MenuLink>
            </nav>
        </header>
    );
};

export default Menu;
