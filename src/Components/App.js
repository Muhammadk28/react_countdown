import React, { Component } from 'react';
import './App.css';
import Title from './title/title';
import Countdown from './countdown/countdown';
import Controller from './controller/controller';
import Laps from './laps/laps';

class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      time: {
        min: 0,
        sec:0,
        mili:0
      },
      laps :[]
    }
  }
  getStart(){
   this.intervalID = setInterval( () =>{
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili
    
    
    if( mili >= 10){
      sec = sec + 1
      mili = 0
    }

    if(sec >= 60){
      min = min+1
      sec = 0
    }

    this.setState({
      ...this.state,
      time:{
        min,
        sec,
        mili: mili+1
      }
      
    })
  }, 100)
  


}

  getPause(){
    clearInterval(this.intervalID)
    
  }
  getLap(){

    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps :[time, ...this.state.laps]
    })
    console.log(this.state.laps)

  }


  getReset(){
    this.setState({
      time:{
        min:0,
        sec:0,
        mili :0
      },
      laps : []
    })

  }



  render() {
    return (
      <div className="App">
          <div className="container">
            <div className="col-md-8 offset-md-2">
              <Title />
              <Countdown time={this.state.time}/>
              <Controller
              start={this.getStart.bind(this)}
              pause={this.getPause.bind(this)}
              reset={this.getReset.bind(this)}
              lap={this.getLap.bind(this)}
              />
              <Laps className="mt-5" laps={this.state.laps}/>

            </div>
           
          </div>

      </div>
    );
  }
}

export default App
