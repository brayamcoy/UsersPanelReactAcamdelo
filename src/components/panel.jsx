import React from "react";
import FormUser from "./form";
import EditForm from "./edit-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Navbaruser from "./navbar"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class Panel extends React.Component {
    constructor() {
      super();
      this.state = {
        users: [],
        userEdited: { name: "", lastname: "", email: "", password: "" },
        showView: "Add"
      };
    }
  
    toastSucces = () => {
      toast.warn("Exitoso!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    };
  
    toastErrorRegister = () => {
      toast.error("Usuario existente!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    };
    toastError = () => {
      toast.error("Ha ocurrido un error!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
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
        .then(results => {
          this.toastSucces();
          this.getUsers();
        })
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
        .then(results => { 
          this.toastSucces()
          return this.getUsers()
        })
        .catch(error => {
          console.log(error)
          this.toastError();
        });
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
      this.setState({ showView: "Edit"})
      this.setState({ userEdited: user });
      this.toastSucces();
    };
  
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
          if (response.status === 200 || response.status === 201) {
            this.toastSucces();
          } else {
            this.toastErrorRegister();
          }
          return response.json;
        })
        .then(myJson => {
          this.getUsers();
        })
        .catch(error => {
          this.toastError();
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

    changeForm = () => {
        this.setState({ showView: "Add"})
    }

    showFormRender = () => {
        switch (this.state.showView) {
            case "Add": return <FormUser 
                addUser={this.addUser}
                 handleInput={this.handleInput}
                />
                
            case "Edit": return <EditForm
                 user={this.state.userEdited}
                 editInput={this.editInput}
                 updateUser={this.updateUser}
                 changeForm ={this.changeForm}
               />
                
            default: return ""
                
        }
    }
  
    render() {
      return (
        <div className="App">
          <Container>
          <Row>
            <Col className="mb-4 mt-4"> < Navbaruser /> </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
            {this.showFormRender()}
            </Col>
            <Col xs={4} md={8}>
            <Table striped bordered hover responsive="md" size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Contraseña</th>
                    <th  colSpan="2" >Opciones</th>
                  </tr>
                </thead>
                {this.state.users.map((user, i) => {
              return (
                <tbody className="table-hover">
                  <tr key={user.id}>
                    <td >{i +1}</td>
                    <td >{user.name}</td>
                    <td >{user.lastname}</td>
                    <td >{user.email}</td>
                    <td >{user.password}</td>
                    <td>
                    <Button variant="danger" onClick={this.deleteUser.bind(this, user.id)} >
                      Eliminar
                    </Button>
                    </td>
                    <td><Button variant="warning" onClick={this.setUser.bind(this, user)}>
                      Editar
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
              </Table>
            </Col>
          </Row>
          </Container>
        </div>
      );
    }
  }
  
  export default Panel;
  