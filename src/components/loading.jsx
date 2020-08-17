import React from "react";
import { CircleLoader} from "react-spinners";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="loading">
        <CircleLoader color="#2c7eb4" />
        <h2 className="mt-4">Cargando</h2>
      </div>
    );
  }
}
