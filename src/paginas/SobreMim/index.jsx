import PostModelo from "@/componentes/PostModelo";
import fotoCapa from '@/assets/imagens/sobre_mim_capa.png';

const SobreMim = () => {
    return (

        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            conteúdo...
        </PostModelo>

    );
};

export default SobreMim;
