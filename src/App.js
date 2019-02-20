import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }


class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = this.state.name;
    this.props.handleSubmit(name);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
      </form>
    )
  }
}

class NameListItem extends Component {
  render() {
    // console.log(this.props);
    return(
      <div>{this.props.name}</div>
    )
  }
}

class NameList extends Component {
  render() {
    console.log('props', this.props);
    // let names = this.props.names.map(function(name, index){
    //   return (
    //     <div key={index}>{name}</div>
    //   )
    // })
    let names = this.props.names.map(function(name, index) {
      return <NameListItem key={index} name={name}/>
    })
    return (
      <div>{names}</div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({names: ['Isaiah', 'Jeff', 'Jessica', 'Christina']});
  }

  handleSubmit(name) {
    let names = this.state.names.slice();
    names.push(name);
    this.setState({names: names});
  }

  render() {
    return (
      <div className="App">
        <NameForm handleSubmit={this.handleSubmit}/>
        <NameList names={this.state.names} number='3'/>
      </div>
    );
  }
}

export default App;
