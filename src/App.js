import React, { Component } from 'react';
import Skiers from './components/skiers';
import Header from './components/header';
import axios from 'axios';
import './App.css';
import { resolve } from 'q';

class App extends Component {
  constructor (){
    super()

    this.state = {
      skiers: [],
      name: '',
      type: '',
      status: '',
    };
    this.deleteSkiers = this.deleteSkiers.bind(this);
    this.updateSkiers = this.updateSkiers.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }

  handleName(val) {
    this.setState({
      name: val
    });
  }

  handleType(val) {
    this.setState({
      type: val
    });
  }

  handleStatus(val) {
    this.setState({
      status: val
    });
  }

componentDidMount() {
axios.get('/api/skiers').then(res => {
  console.log(res.data)
  this.setState({
    skiers: res.data
  });
});
}

createSkier(name, type, status) {
  axios.post('/api/skiers', {name, type, status}).then(res => {
    console.log(res)
    this.setState({
      skiers: res.data,
      name: '',
      type:'',
      status: '',
    });
  });
}

deleteSkiers(id) {
  console.log(id)
  axios.delete(`/api/skiers/${id}`).then(res => {
    this.setState({
      skiers: res.data
    });
  });
}

setEdit(name, type, status) {
  this.setState({
    name,
    type,
    status
  });
}

updateSkiers(id) {
  console.log(id)
  const { name, type, status } = this.state;
  axios.put(`/api/skiers/${id}`, { name, type, status})
  .then(res => {
    this.setState({
      skiers: res.data,
      name: '',
      type: '',
      status: ''
    });
  });
}

  render() {
    const mappedSkiers = this.state.skiers.map(skier => {
      return (
        <Skiers 
          skier={skier}
          deleteSkiers={this.deleteSkiers}
          updateSkiers={this.updateSkiers}
        />
      );
    });
    return (
      <div className="App">
        <Header/>
        
  <input
    type="text"
    placeholder="Enter Guest Name"
    onChange={e => this.handleName(e.target.value)}
    value={this.state.name}
    />
    <input
    type="text"
    placeholder="Type of Skier"
    onChange={e => this.handleType(e.target.value)}
    value={this.state.type}
    />
    <input
    type="text"
    placeholder="Level of Expertise"
    onChange={e => this.handleStatus(e.target.value)}
    value={this.state.status}
    />

    <button onClick={() => this.createSkier(this.state.name, this.state.type, this.state.status)}>Add Guest</button>
{mappedSkiers}
      </div>
      
    );
  }
}

export default App;