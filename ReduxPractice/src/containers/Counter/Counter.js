import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../store/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncremetentCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubstractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult} >Store Result</button>
                <ul>
                    {this.props.storedResults.map(res=>(
                         <li key={res.id} onClick={()=>this.props.onDeleteResult(res.id)}>{res.value}</li>
                    ))}
                   
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr:state.counter,
        storedResults:state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncremetentCounter: () => dispatch(actions.increment()),
        onDecrementCounter: () => dispatch(actions.decrement()),
        onAddCounter: () => dispatch(actions.add(5)),
        onSubstractCounter: () => dispatch(actions.substract(10)),
        onStoreResult: () => dispatch(actions.storeResult()),
        onDeleteResult: (id) => dispatch(actions.deleteResult(id))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);