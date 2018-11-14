import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition'
import '../css/App.css';

class TransitionComp extends Component{
    state = {
        show:true
    }
    toggleShow=()=>{
        // console.log(this.state)
        this.setState({
            show:!this.state.show?true:false
        });
    }
    render(){
        return(
            <div>
                <Transition 
                in={this.state.show}
                unmountOnExit
                timeout={500}>
                { 
                    state => 
                    <div className={`square square-${state}`}>
                        {`square square-${state}`}
                    </div>
                }
                </Transition>

                <div className="showDiv" onClick={this.toggleShow}>
                    Show Or Hide
                </div>
            </div>

        )
    }
}


export default TransitionComp;