import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "@/assets/imagens/marca_registrada.svg";

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
        </footer>
    );
};

export default Rodape;
