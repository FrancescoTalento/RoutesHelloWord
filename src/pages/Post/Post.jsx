import { useParams } from 'react-router';
import './Post.css';

export default function Post(){
    const parameters = useParams();

    return(
        <h1>Post {parameters.id}</h1>
    )
}