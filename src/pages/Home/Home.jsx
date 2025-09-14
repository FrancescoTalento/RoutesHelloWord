import Banner from 'components/Banner/Banner';
import './home.css'

import postsList from 'assets/json/posts.json'
import PostCard from 'components/PostCard/PostCard';

const Home = () => {
    return(
            <ul className='posts'>
                {postsList.map((value) => {
                return (
                    <li key={value.id}>
                        <PostCard post={value}/>
                    </li>

                )})}
            </ul>
    );
}

export default Home