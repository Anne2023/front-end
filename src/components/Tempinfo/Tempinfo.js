import React from "react";
import './TempInfo.css'
function Tempinfo(){
  return(
    <div className="TempContainer">
      <span>
        <div className="Cidade">
          <h1>Sorocaba</h1>
          <h1>30ºC</h1>
        </div>

        <div className="Condicao">
          <p>Nublado</p>
          <h4>Vento: X km/h</h4>
          <h4>Umidade: Y%</h4>
        </div>
      </span>
    </div>
    
  )
}

export default Tempinfo