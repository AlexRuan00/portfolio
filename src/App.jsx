import { useState } from 'react'
import Lista from './components/Lista'
import { BsWhatsapp, BsLaptop, BsFillGeoAltFill, BsFillEnvelopeAtFill, BsGithub} from "react-icons/bs";
import './App.css'


function App() {
  const habilidades = ["Javascript","Node.js","SQL", "MongoDB", "HTML + CSS","React", "Git e Github"];
  const projetos = ["https://rick-and-morty-app-rosy-psi.vercel.app"]
  const mostrarHabilidades = () => {
    return (
      <div>
        {habilidades.map((habilidade, index) => (
          <p key={index}>{habilidade}</p>
        ))}
      </div>
    );
  }
  return (
    <div className='card-infos'>
      <div className='topo-infos'>
        <img src="https://lh3.googleusercontent.com/u/1/drive-viewer/AK7aPaD0kxlZd8vluHPKb0Owtzq3ahvyI1JiXxcCKqY2LUi7ZFEFs_7AZS-EF-APHaNNiI7pKXauVcZAMyoKUezRNz0F0-UY_A=w1879-h931"></img>
        <div className='infos-pessoal'>
          <h1>Olá, meu nome é Álex</h1>
          <p className='icon'><BsLaptop/>Desenvolvedor Full stack</p>
          <p className='icon'><BsFillGeoAltFill/>Santa Catarina - SC</p>
          <p className='icon'><BsWhatsapp/>(48) 98451-6306</p>
          <p className='icon'><BsFillEnvelopeAtFill/>alex.ruan.ribeiro@gmail.com</p>
          <a className='icon' href='https://github.com/AlexRuan00'><BsGithub/>GitHub</a>
        </div>
      </div>
   
      <Lista title={"Habilidades"} children={habilidades}/>
      <Lista title={"Projetos"} children={projetos}/>
    </div>
  )
}

export default App
