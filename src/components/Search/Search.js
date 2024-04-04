import React from "react";
import './Search.css'
//React Hooh - Memorizar os estados
import { useState } from "react";

const APIkey = 'd322e21ec86010d0aa7e8bdd6b423e59'


function Search(){
  //Lógica
  const [valor, setValor]  = useState ("")
  const [cidade, setCidade] = useState ("")

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIkey}&units=metric`


  const pegaInput = (evento) =>{
    setValor(evento.target.value)
  }

  const pesquisar = () =>{
    setValor(valor)
    setCidade(valor)
    request()
    //console.log(cidade)
    //console.log(url)
  }

  const request = ()=> {
    //vou gerar requisição para o OpenWeather API e ver o que acontece
    fetch(url).then(res => res.json()).then((json)=>{
      console.log(json)
    }).catch((erro)=>{
      console.log(erro)
    })
  }



  return(
    <div className="SearchContainer">
      <span>
        <input type="text" onChange = {pegaInput} value={valor} className="SearcInput"></input>
        <input type="button" onClick={pesquisar} value={"Buscar"} className="SearchButton"></input>
      </span>

    </div>


  )
}

export default Search