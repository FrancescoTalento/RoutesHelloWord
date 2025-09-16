import { Route, Routes, useLocation, useParams } from "react-router";
import "./Post.css";
import postDataJson from "assets/json/posts.json";
import PostModel from "components/PostModel/PostModel";
import Markdown from "react-markdown";
import NotFound from "pages/NotFound/NotFound";
import DefaultPage from "pages/DefaultPage/DefaultPage";
import PostCard from "components/PostCard/PostCard";
import { useEffect } from "react";

export default function Post() {
  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  

  const parameters = useParams();

  const post = postDataJson.find((value) => {
    return value.id === Number(parameters.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const suggestedPosts = postDataJson
    .filter((value) =>  Number(value.id) !== Number(post.id))
    .sort((a,b) => b.id - a.id)
    .slice(0,4);

  return (
    <DefaultPage>
      <PostModel
        titulo={post.titulo}
        fotoCapaUrl={`/src/assets/posts/${post.id}/capa.png`}
      >
        <div className="post-markdown-container">
          <Markdown>{post.texto}</Markdown>
        </div>

        <h2 className="tituloOutrosPosts">
            Outros post que voce possa gostar
        </h2>
        <ul className="postsRecomendados">
            {suggestedPosts.map((value) => {
                return(
                     <li key={value.id}>
                        <PostCard post={value}/>
                    </li>
                )                
            })}
        </ul>
      </PostModel>
    </DefaultPage>
  );
}
