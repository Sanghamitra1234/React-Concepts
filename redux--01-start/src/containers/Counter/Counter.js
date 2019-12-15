import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        //console.log("cte",this.props.ctr);
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract}  />
                <button onClick={this.props.storeResult}>Store Result</button>
                <ul>
                    {this.props.results.map(str=>{
                       console.log(str);
                        
                    return <li key={str.id} onClick={()=>{this.props.removeResult(str.id)}}>{str.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}
const mapStateToProps=state=>{
    
    
    return{
        ctr:state.counter,
        results:state.results
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onIncrement:()=>dispatch({type:"INCREMENT"}),
        onDecrement:()=>{dispatch({type:"DECREMENT"})},
        onAdd:()=>{dispatch({type:"ADD",value:5})},
        onSubtract:()=>{dispatch({type:"SUBTRACT",value:-5})},
        storeResult:()=>{dispatch({type:"STORE_RESULT"})},
        removeResult:(id)=>{dispatch({type:"REMOVE_RESULT",elemId:id})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);