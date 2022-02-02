import React, {Component} from 'react';
import './App.css';
import Search from './components/search/Search';
import './components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component{
  render(){
    return (
      <MuiThemeProvider>
        <div className="App">
          <Search className="searchText" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
