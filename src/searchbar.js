import './App.css';
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        day: this.props.day,
        month: this.props.month,
        year: this.props.year,
    }

    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  minus(e) {
    let downArrows = Array.from(document.getElementsByClassName('arrow up'));
    let whichToDecrement = downArrows.indexOf(e.target);

    if (whichToDecrement === 0) {
        let newMonthIndex = this.props.months.indexOf(this.state.month) - 1 < 0 ? 11 : this.props.months.indexOf(this.state.month) - 1;
        let month = this.props.months[newMonthIndex];
        this.props.updatedob(this.state.day, month, this.state.year);

        this.setState({ month });;
    }
    else if (whichToDecrement === 1) {
        let day = this.state.day -1 < 1 ? 31 : this.state.day - 1;
        this.props.updatedob(day, this.state.month, this.state.year);

        this.setState({ day });
    }
    else if (whichToDecrement === 2) {
        let year = this.state.year-1;
        this.props.updatedob(this.state.day, this.state.month, year);

        this.setState({ year });
    }
  }

  plus(e) {
    let downArrows = Array.from(document.getElementsByClassName('arrow down'));
    let whichToDecrement = downArrows.indexOf(e.target);

    if (whichToDecrement === 0) {
        let newMonthIndex = this.props.months.indexOf(this.state.month) + 1 > 11 ? 0 : this.props.months.indexOf(this.state.month) + 1;
        let month = this.props.months[newMonthIndex];
        this.props.updatedob(this.state.day, month, this.state.year);


        this.setState({ month });;
    }
    else if (whichToDecrement === 1) {
        let day = this.state.day + 1 > 31 ? 1 : this.state.day+1;
        this.props.updatedob(day, this.state.month, this.state.year);
        
        this.setState({ day });
    }
    else if (whichToDecrement === 2) {
        let year = this.state.year + 1 > new Date().getFullYear() ? this.state.year : this.state.year+1;
        this.props.updatedob(this.state.day, this.state.month, year);
        
        this.setState({ year });
    }
  }

  render() {
    return (
      <div id="searchBar">
          <table>
              <tbody>
              <tr>
                  <th onClick={this.minus}><div id="test"><i className="arrow up"></i></div></th>
                  <th onClick={this.minus}><i className="arrow up"></i></th>
                  <th onClick={this.minus}><i className="arrow up"></i></th>
              </tr>
              <tr>
                  <th>{this.state.month}</th>
                  <th>{(this.state.day < 10 ? '0' + this.state.day + '' : this.state.day)}</th>
                  <th>{this.state.year}</th>
              </tr>
              <tr>
                  <th onClick={this.plus}><i className="arrow down"></i></th>
                  <th onClick={this.plus}><i className="arrow down"></i></th>
                  <th onClick={this.plus}><i className="arrow down"></i></th>
              </tr>
              </tbody>
          </table>
      </div>
    );
  }
}
export default SearchBar;
