import React from "react";
import "./App.css";
import Form from "./components/form";
import EditForm from "./components/edit-form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      userEdited: { name: "", lastname: "", email: "", password: "" }
    };
  }

  //Se ejecuta cuando se renderiza este componente
  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch("https://academlo-api-users.herokuapp.com/users")
      .then(response => response.json())
      .then(results => this.setState({ users: results.data }))
      .catch(error => console.log(error));
  }

  deleteUser(id) {
    fetch(" https://academlo-api-users.herokuapp.com/user/" + id, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(results => this.getUsers())
      .catch(error => console.log(error));
  }

  updateUser = event => {
    event.preventDefault();
    fetch(
      "https://academlo-api-users.herokuapp.com/user/" +
        this.state.userEdited.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.userEdited)
      }
    )
      .then(response => response.json())
      .then(results => this.getUsers())
      .catch(error => console.log(error));
  };

  editInput = event => {
    this.setState({
      userEdited: {
        ...this.state.userEdited,
        [event.target.name]: event.target.value
      }
    });
  };

  setUser = user => {
    this.setState({ userEdited: user });
  };


  render() {
    return (
      <div className="App">
        <label className="label">BRAYAN DAVID</label>
        <div className="forms-container">
          <Form getUsersFn={this.getUsers} />
          <EditForm
            user={this.state.userEdited}
            editInput={this.editInput}
            updateUser={this.updateUser}
          />
        </div>
        <div className="table-title">
          <h3>Usuarios</h3>
        </div>
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-center">Id</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Apellido</th>
              <th className="text-center">Email</th>
              <th className="text-center">Password</th>
              <th>Opciones</th>
            </tr>
          </thead>
          {this.state.users.map((user, i) => {
            return (
              <tbody className="table-hover">
                <tr>
                  <td key={i}>{i}</td>
                  <td className="text-left">{user.name}</td>
                  <td className="text-left">{user.lastname}</td>
                  <td className="text-left">{user.email}</td>
                  <td className="text-left">{user.password}</td>
                  <td>
                    <button
                      onClick={this.deleteUser.bind(this, user.id)}
                      className="btn-danger"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={this.setUser.bind(this, user)}
                      className="btn-edit"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
