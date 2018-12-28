import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      memesList:null
    }
  }

  componentDidMount =()=>{
    this.getMemeList()
  }

 getMemeList =()=>{
   return axios.get('https://apieasy.azurewebsites.net/api/meme')
   .then(resultado =>this.setState(
     {memesList:resultado.data}
   ))
 }

  render() {
    const{memesList} = this.state;

    return (
      <div className="App">
        {memesList && memesList.length > 0 ?
          memesList.map((meme,i) => {
            return(
              <div key = {i}>
              <h3>{meme.nome}</h3>
              <img src={meme.url} width="500" alt=""/>
              </div>
           ) 
          }
        ):null
          }
      </div>);
  }
}

export default App;
