import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  addUser = event => {
    event.preventDefault();
    let url = "https://academlo-api-users.herokuapp.com/users";
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state.form)
    };

    fetch(url, options)
      .then(response => {
        return response.json;
      })
      .then(myJson => {
        this.props.getUsersFn();
        console.log("Registro exitoso");
        alert("Registro exitoso");
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInput = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <label className="label">REGISTRO</label>
        <form onInput={this.handleInput} onSubmit={this.addUser.bind(this)}>
          <input name="name" type="text" placeholder="Nombre" />
          <input name="lastname" type="text" placeholder="Apellido" />
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Contraseña" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
