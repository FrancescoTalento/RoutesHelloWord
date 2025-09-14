import { useParams } from 'react-router';
import './Post.css';
import postDataJson from 'assets/json/posts.json'
import PostModel from 'components/PostModel/PostModel';
import Markdown from 'react-markdown';

export default function Post(){
    const parameters = useParams();

    const post = postDataJson.find((value) => {
        return value.id === Number(parameters.id)
    })
    return(
        <PostModel
            titulo={post.titulo}
            fotoCapaUrl={`/src/assets/posts/${post.id}/capa.png`}
        >
            <div className='post-markdown-container'>
                <Markdown>
                    {post.texto}
                </Markdown>
            </div>
        </PostModel>
    )
}