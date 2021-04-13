import SearchBar from './searchbar';

import './App.css';
import React from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      day: (new Date().getDate()),
      month: months[new Date().getMonth()],
      year: (new Date().getFullYear()),
    }

    this.doblookup = this.doblookup.bind(this);
    this.updatedob = this.updatedob.bind(this);
  }

  doblookup(e) {
    if (e.target === document.querySelector('.body') && e.target !== document.querySelector('.App')) {
      if (document.getElementById('searchBar')) document.getElementById('searchBar').style.display = "none";
      this.setState({ focused: false });
    }
    else {
      this.setState({ focused: true });
      document.getElementById('number').setAttribute('disabled', true);
    }
  }

  updatedob(day, month, year) {
    this.setState({ day, month, year });
  }


  render() {
    let focused = this.state.focused;
    let search; 

    if (focused) {
      search = <SearchBar day={this.state.day} month={this.state.month} year={this.state.year} id="searchBar" updatedob={this.updatedob} months={months}></SearchBar>
    }
    else {
      if (document.getElementById('searchBar')) document.getElementById('searchBar').style.display = "none";
    }
    
    return (
      <div onClick={this.doblookup} className="body">
        <div className="App">
            <p id="phone">
              Date of birth
            </p>
            <div id="number">{this.state.month + " " + (this.state.day < 10 ? '0' + this.state.day + '' : this.state.day) + ", " + this.state.year}</div>
            {search}
        </div>
      </div>
    );
  }
}
export default App;
