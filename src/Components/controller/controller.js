import React from 'react';



class Controller extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            start: true,
            pause: false,
            lap: false,
            reset: false
        }
    }

    startHandler(){
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap:true,
            reset:false
        })
        this.props.start()

    }

    pauseHandler(){
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            lap:false,
            reset:true
        })
        this.props.pause()
    }
    lapHandler(){
    this.props.lap()        
    
    }
    resetHandler(){
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            lap:false,
            reset:false
        })
        this.props.reset()
    }

    getcontroller(){
        let output =null
        if(this.state.start && !this.state.reset){
            output = (
                <div>
                    <button 
                    onClick={event => this.startHandler()} 
                    className="btn btn-success btn-lg px-4 mt-5">Start</button>
                </div>
            )
        } else if(this.state.pause && this.state.lap){
            output= (
                <div>
                    <button 
                    className="btn btn-primary btn-lg px-4 mt-5 mr-3"
                    onClick={event => this.pauseHandler()}
                    >Pasuse</button>

                    <button 
                    className="btn btn-warning btn-lg px-4 mt-5 mr-3"
                    onClick={event => this.lapHandler()}
                    >Lap</button>
                </div>
            )
        } else if(this.state.start && this.state.reset){

            output =(
            <div>
                <button 
                onClick={ event => this.startHandler()}
                className="btn btn-success btn-lg mt-5 mr-3 px-4"
                >Start</button>


                <button
                 onClick={event => this.resetHandler()} 
                 className="btn btn-danger btn-lg mt-5 mr-3 px-4"
                 >Reset</button>
            </div>)
        }



        return output
    }

    render(){
        return this.getcontroller()
    }
}

export default Controller;
