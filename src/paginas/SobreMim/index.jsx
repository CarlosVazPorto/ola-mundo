import styles from './SobreMim.module.css';
import PostModelo from "@/componentes/PostModelo";
import fotoCapa from '@/assets/imagens/sobre_mim_capa.png';
import fotoSobreMim from '@/assets/imagens/minha_foto_sobre_mim.png';

const SobreMim = () => {
    return (

        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Carlos!
            </h3>

            <img 
                className={styles.fotoSobreMim}
                src={fotoSobreMim} 
                alt="Foto do Carlos" 
            />

            <p className={styles.paragrafo}>
                Olá! Sejam todos bem vindos a este espaço dedicado a compartilhar um pouco sobre mim e minha jornada como desenvolvedor front-end. 
            </p>
            <p className={styles.paragrafo}>
                Desde cedo, sempre tive uma paixão por tecnologia, programação e design, o que me levou a explorar o mundo do desenvolvimento web. 

            </p>
            <p className={styles.paragrafo}>
                Com uma sólida formação em HTML, CSS e JavaScript, estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
                Neste momento, estou focado em me aprofundar em frameworks como React, Angular e Vue.js, além de explorar as melhores práticas de desenvolvimento para criar interfaces intuitivas e responsivas. 
                Também estou me aprimorando no estudo da linguagem TypeScript, que tem se tornado cada vez mais essencial para o desenvolvimento front-end moderno.
            </p>
            <p className={styles.paragrafo}>
                O mercado de desenvolvimento front-end está em constante evolução, com novas tecnologias surgindo a cada dia. 
                É essencial estar sempre atualizado e adaptável para se manter competitivo e oferecer soluções inovadoras aos clientes.
            </p>
            <p className={styles.paragrafo}>
                E uma das stacks mais importantes e cujo o conhecimento é fundamental atualmente é o uso de Inteligência Artificial (IA) no desenvolvimento front-end. 
                A IA tem o potencial de transformar a forma como criamos e interagimos com as interfaces digitais, permitindo experiências mais personalizadas, eficientes e inteligentes para os usuários. 
                Estou entusiasmado em explorar as possibilidades que a IA oferece para o desenvolvimento front-end e estou comprometido em me manter atualizado sobre as últimas tendências e avanços nessa área.
            </p>
            <p className={styles.paragrafo}>
                Estou animado para compartilhar minha jornada, aprendizados e projetos relacionados ao desenvolvimento front-end, especialmente nos contextos da IA, da segurança e da acessibilidade. 
                Espero que este espaço seja uma fonte de inspiração e conhecimento para outros desenvolvedores e entusiastas da tecnologia. 
                Acredito que a troca de experiências e o compartilhamento de conhecimentos são fundamentais para o crescimento e desenvolvimento de todos nós na comunidade de desenvolvimento front-end.
            </p>

        </PostModelo>

    );
};

export default SobreMim;
