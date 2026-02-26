import { useParams } from "react-router-dom";

const Post = () => {
    const parametros = useParams();

    console.log(parametros);
    
    return (
        <div>
            <h1>Post nº {parametros.id}</h1>
        </div>
    );
};

export default Post;
