import React from 'react';
import './App.css';
import Text from './componentes/basico/Text';
import Dados from './componentes/Dados'
import Sbm from './componentes/basico/Sbm'
import Habilidades from './componentes/basico/Habilidades'




function App() {
  return (
    <> {/*Cabecalho*/}
      <div class = 'cabecalho'>
      <div class='nome'><Text></Text></div>
      <div class = 'dd'><Dados></Dados></div>
      <div class = 'fig1'></div>
      </div>
     
     
       {/*Corpo*/}
      
      <div class = 'fig2'></div>
      <div class ='sbm'><Sbm></Sbm></div>

      <div><Habilidades></Habilidades></div>
      
        {/*Rodape*/}
    
      
      <div class='rodape'>
      
      <div class='fig3'></div>
      <div class = 'fig4'></div>
      <div class ='css'></div>
      <div class ='html'></div>
     
        



      </div>
       

    </>
  )
}

export default App;
