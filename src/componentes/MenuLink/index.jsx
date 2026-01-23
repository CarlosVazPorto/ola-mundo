import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = ({ children, to }) => {
    const localizacao = useLocation();

    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === '/' ? styles.linkDestacado : ''}
        `} to="/">
            Início
        </Link>
    );
};

export default MenuLink;
