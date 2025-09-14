import { Link } from 'react-router';
import './Post.css';


const PostCard = ({post})=>{
    console.log(post);
    return(
        <Link to={"/post/"+post.id}>
            <div className='post'>
                <img 
                    className='capa'
                    src={`src/assets/posts/${post.id}/capa.png`}
                    alt='imagem de capa do post'
                />
                <h2 className='titulo'>{post.titulo}</h2>

                <button className='botaoLer'>Ler</button>
            </div>
        </Link>
    )
}

export default PostCard;