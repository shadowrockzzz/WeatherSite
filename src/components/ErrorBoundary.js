import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state ={hasError :false,error:null};
    }

    componentDidCatch(error,errorinfo){
        this.setState({hasError:true,error:error});
        console.log(error)
        console.log(errorinfo)
    }
  render() {
    if(this.state.hasError===true){
        console.log(this.state.error)
        return(
            <div>
                Got the Error !!!!!
            </div>
        )
    }
    else{
        return(
            this.props.children
        )
    }
  }
}
