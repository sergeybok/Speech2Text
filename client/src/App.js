import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


// Internal Modules
import Routes from './routing/Routes';
// Styled components
import AppComponentWrapper from './styledComponents/AppComponentWrapper';
import GlobalTheme from './styledComponents/GlobalTheme';

class App extends Component {
  
  // For now, application is set up to have authenticated in local component state 
  // Might be changed later if we implement some authentication, etc. 
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    }
  }
 

  render () {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
    };

    return (
      <AppComponentWrapper GlobalTheme={GlobalTheme}>
        <Routes childProps={childProps} />
      </AppComponentWrapper>
    );
  }


}


class NotApp extends React.Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data 
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
