import Banner from 'components/Banner/Banner';
import './home.css'

import postsList from 'assets/json/posts.json'
import Post from 'components/Post/Post';

const Home = () => {
    return(
            <ul className='posts'>
                {postsList.map((value) => {
                return (
                    <li key={value.id}>
                        <Post post={value}/>
                    </li>

                )})}
            </ul>
    );
}

export default Home