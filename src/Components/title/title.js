import React from 'react';
import './title.css';



class Title extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            title: 'This is dummy title',
            isInput: false
            
        }
    }

    texthandle(){
        this.setState ({
            ...this.state,

            isInput: true
        })
    }


    inputChange(event){
        this.setState({
            ...this.state,

            title: event.target.value
        })
    }


    keyHandle(event){
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput: false
            })
        }
    }

    blurHandle(event){
        this.setState({
            ...this.state,
            isInput: false
        })
    }


    render() {

        let output = null

        if(this.state.isInput){
           output= (
                <div className="mt-5 mb-4 title">
                   <input 
                
                   type="text" 
                   className="form-control" 
                   onChange= { event => this.inputChange(event)}
                   onKeyPress= { event => this.keyHandle(event)}
                   onBlur= { event => this.blurHandle(event)}
                   
                   value={this.state.title}/>
                </div>
           )

        }else{
            output = (
                <div className="d-flex mt-5 title mb-3">
                    <h1 className="display-4 text-success">{this.state.title}</h1>
                    <span onClick= {  () => this.texthandle()} className="edit ml-auto float-left text-success pt-4"><i class="fa fa-pencil-alt "></i></span>
                </div>
            )

        }

        return(
          <div>
              {output}
          </div>
        )
    }
}

export default Title