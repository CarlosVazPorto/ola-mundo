import styles from './BotaoPrincipal.module.css';

const BotaoPrincipal = ({ children, tamanho, ...props }) => {
    return (
        <button
            type="button"
            className={`
            ${styles.botaoPrincipal}
            ${styles[tamanho]}
        `}
            {...props}
        >
            {children}
        </button>
    );
};

export default BotaoPrincipal;
