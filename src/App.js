import React from 'react';
import './App.css';
import Form from './components/form';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
     users: [],
     form: {}
    }
  
  }

  //Se ejecuta cuando se renderiza este componente
  componentDidMount(){
    //Primer argumento -> url de la petición que queremos realizar
    //Segundo argumento -> opciones para la petición (headers, body, method)
    let url = 'https://academlo-api-users.herokuapp.com/users';
    fetch(url)
    .then((response) => {
      return response.json(); //Regresa una promesa para poder transformar/interpretar esos datos en formato json      
    })
    .then((myJson) => {
      this.setState({users: myJson.data}); //Respuesta de la petición que ya podremos manejar con javascript
    })
    .catch(error => console.log(error));
  }

  render(){
    return (
      <div className="App">
      < Form usuarios={this.state.users}/>
      </div>
    );
  }
}

export default App;