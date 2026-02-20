import PostModelo from "@/componentes/PostModelo";
import fotoCapa from '@/assets/imagens/sobre_mim_capa.png';
import styles from './SobreMim.module.css';

const SobreMim = () => {
    return (

        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>

            </h3>
        </PostModelo>

    );
};

export default SobreMim;
