import { useParams } from "react-router-dom";
import posts from "@/json/posts.json";
import PostModelo from "@/componentes/PostModelo";
import ReactMarkdown from "react-markdown";

const Post = () => {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    return (
        <div>
            <PostModelo 
                fotoCapa={`/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

            </PostModelo>
        </div>
    );
};

export default Post;
