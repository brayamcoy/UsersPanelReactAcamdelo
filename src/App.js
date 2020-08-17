import React from "react";
import "./App.css";
import Panel from "./components/panel"
import Loading from "./components/loading";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      open: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div className="App">
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="App">
          < Panel />
        </div>
      );
    }
  }
}

export default App;