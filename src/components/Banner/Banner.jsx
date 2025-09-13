import "./banner.css"

import circuloColoridoSrc from "assets/circulo_colorido.png"
import myPictureSrc from "assets/minha_foto.png"


export default function Banner(){
    return(
        <div className="banner">
            <div className="apresentacao">
                <h1 className="titulo">
                    Hello Word!
                </h1>

                <p className="paragrafo"> 
                    Hi, my name is Francesco and I am practicing React Router by building small projects with multiple pages, where I focus on using BrowserRouter, Routes, and NavLink to create clean navigation menus and highlight the active page, helping me gain confidence to later build real-world applications like portfolios, blogs, or dashboards.
                </p>
            </div>
            <div className="imagens">
                <img 
                    className="circuloColorido"
                    src={circuloColoridoSrc}
                    aria-hidden={true}
                />
                <img 
                    className="minhaFoto"
                    src={myPictureSrc}
                    alt="A picture of Snoopy representing my caracter"
                />

            </div>
        </div>
    )
}