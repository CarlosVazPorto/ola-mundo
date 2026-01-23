import styles from './Menu.module.css';

const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <a className={styles.link} href="/">
                    Início
                </a>
                <a className={styles.link} href="/sobremim">
                    Sobre Mim
                </a>
            </nav>
        </header>
    );
};

export default Menu;
