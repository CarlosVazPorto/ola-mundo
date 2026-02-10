import Banner from "@/componentes/Banner";
import styles from "./Inicio.module.css";
import posts from "@/json/posts.json";
import Post from "@/componentes/Post";

const Inicio = () => {
    return (
        <div>
            <main>
                <Banner />
        
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>

            </main>
        </div>
    );
};

export default Inicio;
