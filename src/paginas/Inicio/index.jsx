import Banner from "@/componentes/Banner";
import styles from "./Inicio.module.css";
import posts from "@/json/posts.json";

const Inicio = () => {
    return (
        <>
            <main>
                <Banner />
        
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        
                    </li>
                ))}
            </ul>

            </main>
        </>
    );
};

export default Inicio;
