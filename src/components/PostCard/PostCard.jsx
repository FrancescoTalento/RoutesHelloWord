import { Link } from 'react-router';
import './Post.css';
import BotaoPrincipal from 'components/BotaoPrincipal/BotaoPrincipal';


const PostCard = ({post})=>{
    const capaUrl = new URL(`../../assets/posts/${post.id}/capa.png`, import.meta.url).href;

    // console.log(post);
    return(
        <Link to={"/post/"+post.id}>
            <div className='post'>
                <img 
                    className='capa'
                    src={capaUrl}
                    alt='imagem de capa do post'
                />
                <h2 className='titulo'>{post.titulo}</h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}

export default PostCard;