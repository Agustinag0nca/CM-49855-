import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa tu componente principal
import './index.css'; // Importa tu archivo de estilos

ReactDOM.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
  document.getElementById('root') // Renderiza tu componente App en el elemento con el ID 'root'
);

import './App.css';
import NavBar from '•/components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer ItemListContainer';
import ItemCount from './ components/ItemCount/ItemCount';
function App() {
return(
<div className="App" >
< NavBar />
< ItemListContainer greeting={'Bienvenidos'}/>
< ItemCount initial={1} stock={10} onAdd={ (quantity) => console.log('Cantidad agregada ',quantity)}/>
</ div>
);
}

export default App;