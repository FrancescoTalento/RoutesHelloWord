import './PostModel.css'


const PostModel = ({children, titulo, fotoCapaUrl})=>{
    return(
        <article className='postModeloContainer'>
            <div 
                className='fotoCapa'
                style={{backgroundImage: `url(${fotoCapaUrl})`}}
                ></div>
            <h2 className='titulo'>
                {titulo}
            </h2>
            <div className='postConteudoContainer'>
                {children}
            </div>
        </article>
    )
}

export default PostModel