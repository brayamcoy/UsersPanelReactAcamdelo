import React from 'react'

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

 addUser(event){
    event.preventDefault();
    fetch('https://academlo-api-users.herokuapp.com/users',{
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(
        this.state
      )
    })
  }
  
 deleteUser(id) {
    fetch(" https://academlo-api-users.herokuapp.com/user/" + id, {
      method: "DELETE"
    })
  } 

handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

render (){
    return(
        <div>
            <label className="label">BRAYAN DAVID</label>
            <label className="label">REGISTRO</label>
            <form onInput={this.handleInput} onSubmit={this.addUser.bind(this)}>
                <input name="name" type="text" placeholder="Nombre" />
                <input name="lastname" type="text" placeholder="Apellido" />
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Contraseña" />
                <input type="submit" />
            </form>
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
                {this.props.usuarios.map((user, i) => {
                    return (
                        <tbody className="table-hover">
                            <tr>
                                <td key={i}>{i}</td>
                                <td className="text-left">{user.name}</td>
                                <td className="text-left">{user.lastname}</td>
                                <td className="text-left">{user.email}</td>
                                <td className="text-left">{user.password}</td>
                                <td>
                                    <button onClick={this.deleteUser.bind(this, user.id)} className="btn-form">
                                       Eliminar
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
