import { Link } from 'react-router';
import './Post.css';
import BotaoPrincipal from 'components/BotaoPrincipal/BotaoPrincipal';


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

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}

export default PostCard;