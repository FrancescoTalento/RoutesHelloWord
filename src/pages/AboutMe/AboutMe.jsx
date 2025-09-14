import './AboutMe.css'
import fotoCapa from 'assets/sobre_mim_capa.png'
import PostModel from 'components/PostModel/PostModel';
import fotoSobreMim from 'assets/sobre_mim_foto.jpeg';

const AboutMe = ()=>{
    return(
        <PostModel
            fotoCapaUrl={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className='subtitulo'>
                Olá, eu sou Francesco
            </h3>
            <img 
                src={fotoSobreMim}
                alt='foto do snnopy com o seu passarinho'
                className='fotoSobreMim '
            />

         <p className={"paragrafo"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus ut sem tristique sagittis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus ut sem tristique sagittis.
        </p>
        <p className={"paragrafo"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer at justo sed lorem tincidunt luctus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer at justo sed lorem tincidunt luctus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer at justo sed lorem tincidunt luctus.
        </p>
        <p className={"paragrafo"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula orci vel neque cursus, nec facilisis nunc porta.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula orci vel neque cursus, nec facilisis nunc porta.
        </p>
        <p className={"paragrafo"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Ut fringilla purus sed lorem iaculis, et fermentum eros ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Ut fringilla purus sed lorem iaculis, et fermentum eros ullamcorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Ut fringilla purus sed lorem iaculis, et fermentum eros ullamcorper.
        </p>
        <p className={"paragrafo"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut nibh id erat efficitur mattis sed in sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut nibh id erat efficitur mattis sed in sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut nibh id erat efficitur mattis sed in sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut nibh id erat efficitur mattis sed in sem.
        </p>
        <p className={"paragrafo"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa vel felis bibendum tincidunt vitae vitae velit.
            Lorem Xipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa vel felis bibendum tincidunt vitae vitae velit.
            Lorem Xipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa vel felis bibendum tincidunt vitae vitae velit.
            Lorem   
        </p>

        </PostModel>
        
    );
}

export default AboutMe;