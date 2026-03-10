import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "@/json/posts.json";
import PostModelo from "@/componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "../NaoEncontrada/indesx";
import PaginaPadrao from "@/componentes/PaginaPadrao";

const Post = () => {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return (
            <NaoEncontrada />
        );
    };

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
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
                } />
            </Route>
        </Routes>
    );
};

export default Post;
