import styles from './Banner.module.css';
import circuloColorido from "@/assets/imagens/circulo_colorido.png";
import minhaFoto from "@/assets/imagens/minha_foto.png";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou o Carlos Vaz Porto, um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. Aqui compartilho meus projetos, aprendizados e um pouco da minha jornada no mundo do desenvolvimento web. Sinta-se à vontade para explorar e conhecer mais sobre mim e meu trabalho!
                </p>

            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido} 
                    aria-hidden="true"
                />

                <img 
                    className={styles.minhaFoto} 
                    src={minhaFoto}
                    alt="Foto do Carlos Vaz Porto"
                />

            </div>

        </div>
    )
};

export default Banner;
