import BotaoPrincipal from '@/componentes/BotaoPrincipal';
import styles from './NaoEncontrada.module.css';
import erro404 from '@/assets/imagens/erro_404.png';

const NaoEncontrada = () => {
    return (
        <>
            <div className={styles.conteudoContainer}> 
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso o que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página ou volte para a página inicial.
                </p>

                <div className={styles.botaoContainer}>
                    <BotaoPrincipal>Voltar</BotaoPrincipal>
                </div>

                <img 
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Imagem de um cachorro de óculos e vestido como um humano"
                />

            </div>

            <div className={styles.espacoEmBranco}></div>

        </>
    );
};

export default NaoEncontrada;
