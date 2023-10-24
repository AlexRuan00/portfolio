import { useState } from 'react'
import Lista from './components/Lista'
import './App.css'

function App() {
  const habilidades = ["Javascript","Node.js","HTML + CSS","React", "SQL", "MongoDB", "Git e Github"];
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
        <img src='https://i.pinimg.com/736x/d5/96/a0/d596a0b84cb5081a514755ef867924a1.jpg'></img>
        <div className='infos-pessoal'>
          <h1>Olá, meu nome é Álex</h1>
          <p>Desenvolvedor Full stack</p>
          <p>Santa Catarina - SC</p>
          <p>(48) 98451-6306</p>
          <p>alex.ruan.ribeiro@gmail.com</p>
          <a href='https://github.com/AlexRuan00'> GitHub</a>
        </div>
      </div>
      <Lista title={"Habilidades"} children={habilidades}/>
    </div>
  )
}

export default App
