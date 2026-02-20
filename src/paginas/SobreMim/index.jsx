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
        </PostModelo>

    );
};

export default SobreMim;
