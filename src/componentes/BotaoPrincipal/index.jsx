import styles from './BotaoPrincipal.module.css';

const BotaoPrincipal = ( { children }) => {
    return (
        <button className={styles.botaoPrincipal}>
            {children}
        </button>
    );
};

export default BotaoPrincipal;
