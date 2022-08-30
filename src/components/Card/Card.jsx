import Paragrafo from '../Paragrafo/Paragrafo'
import image from '../img/biab.jpeg' // Bio/fotoanab.jpeg
import '../Card/card.styles.css'

function Card(){
    return (
        <div className="sobre">
            <img className="imagem" src={image} alt="foto do arquivo pessoal de Ana Santos"/>

            <div className="sobre textinho">
                <h2>Prazer, AnaB</h2>
                <p>Entusiasta das relações entre raça, gênero e tecnologia. Dev full stack em formação pela PretaLab e Generation Brasil.</p>
            </div>
            <div>
                <p>A noveleira mexicana que habita em mim saúda a que habita em você: dramastê 🙏🏼</p>
            </div>
        </div>
    )
}


export default Card