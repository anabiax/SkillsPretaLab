
/*
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Body from './components/Body/Body'
import Icones from './components/Icones/Icones'
import Footer from './components/Footer/Footer' */
import './App.css'
import React from 'react'

/*****       
 * <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
          <g className="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
    </div> *****/  

function App() {
  return (
    <div className="App">

        <div className="header">
            <h1 className="titulo-header">Meu diário da PretaLab</h1>
        </div>

        <div className="sobre">
          <img src="src/components/Bio/fotoanab.jpeg" alt="meu gif" />
          <div className="sobre-texto">
            <h1><span>Prazer, AnaB</span></h1>
            <p>Entusiasta das relações entre raça, gênero e tecnologia. <br></br>Dev Full Stack em formação pela PretaLab e Generation Brasil.</p>
            <hr></hr>
            <p>A noveleira mexicana que habita em mim saúda a que habita em você: dramastê 🙏🏼</p>
          </div>
          
        </div>
          
        <div >
          <div className="section">
            <p>Devo confessar que grande parte da minha empolgação se deve ao fato de ter tido a oportunidade de conhecer instrutoras e facilitadoras maravilhosas.<br></br> Serei eternamente grata pela formação e pelo afeto transmitido durante as aulas.</p>
          </div>

          <h2 className="habilidades">Pérolas de aprendizagem na PretaLab</h2>

          <div className="secao-container">
            <div className="secao">
              <h2>Git</h2>
              <img src="https://c.tenor.com/WX3VBM7OdaMAAAAd/jane-the-virgin-three-two-one.gif" alt="gif-Petra e Jane"/> 

              <p>O sistema de versionamento de códigos configurou o início da minha aventura na web, assim pude compreender como os repositórios operam e a facilidade que o git traz para as equipes de desenvolvimento, uma vez que possibilita o controle de atualizações no projeto.</p>
            </div>
            <div className="secao">
              <h2>HTML</h2>
              <img src="https://c.tenor.com/k0TVJmOaUSAAAAAC/jane-the-virgin-jane-villanueva.gif" alt="gif-Jane digitando"/>
              <p>O primeiro "Hello, World!" a gente nunca esquece, né? Reza a lenda que iniciar os estudos em programação sem esse comando acarreta em consequências gravíssimas para o futuro dev. Como não sou boba, já iniciei no HTML (Hyper Text Markup Language) passando pra lá essa superstição (vai quê). Aprender sobre semântica, conexões e a quantidade de TAGs que o bloco de construção é capaz de comportar possibilitou uma compreensão instigante acerca de layouts.</p>
            </div>
            <div className="secao">
              <h2>CSS</h2>
              <img src="https://c.tenor.com/mWInyGBJCy8AAAAC/jane-the-virgin-jane-villanueva.gif" alt="gif-JaneBrava"/>
              <p>Descobri que o CSS (Cascading Style Sheets) também pode ser referenciado como "máquina de destruição em massa" na mão dos desavisados (me inclui neste limbo nas primeiras experimentações rs), mas nada que um estudo dedicado não resolvesse. Brincadeiras à parte, a linguagem de estilização tem como característica determinante seu efeito cascata, isto é, a ordenação dos elementos obedece à hierarquia de seletores e esquematizações estruturadas.</p>
            </div>
            <div className="secao">
              <h2>JavaScript</h2>
              <img src="https://c.tenor.com/OeDp-_oKzmEAAAAC/jane-the-virgin-jane-villanueva.gif" alt="gif-JaneFeliz"/>
              <p>Para fechar a santíssima trindade do front-end nada como ver as interações operando em tempo real nas aplicações web. Nesta parte do curso a noção de algoritmos, paradigmas e API foram implementadas atrelado aos desafios de lógica de programação. Inalar e exalar nunca foram tão cruciais para entender o fluxo lógico da operação, apesar da sintaxe estar certa. No entanto, nada é mais gratificante do que ver o código rodando.</p>
            </div>
          </div>
          
        </div>

        <footer className="section">
          <div class="contatos">
              <a href="https://www.linkedin.com/in/anabsantoss/"><i class="devicon-linkedin-plain" target="_blank"></i></a>
              <a href="https://github.com/anabiax"><i class="devicon-github-original" target="_blank"></i></a>
          </div>
        </footer>

        <hr></hr>

        <div>
          <p className="footer-texto">Copyright © 2022 • Desenvolvido por Ana Beatriz dos Santos • Ciclo Formativo Básico PretaLab</p>
        </div>
    </div>
    

  )
}


export default App

/* <div>
      <Header />
      <Card />
      <hr></hr>

      <Body />
      <hr></hr>
      <Icones />
      <hr></hr>

      <Footer /> 
      
    </div>
   https://c.tenor.com/mWInyGBJCy8AAAAC/jane-the-virgin-jane-villanueva.gif jane brava cabelo
https://c.tenor.com/OeDp-_oKzmEAAAAC/jane-the-virgin-jane-villanueva.gif teta saindo leite
https://c.tenor.com/Y_KoPNaER5sAAAAC/jane-the-virgin-jane-villanueva.gif cabeça explodindo
    */
