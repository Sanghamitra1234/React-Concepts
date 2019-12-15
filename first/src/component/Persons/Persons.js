import React,{Component} from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';

class Persons extends Component{
    shouldComponentUpdate(nextProps,nextState){
        console.log("Persons.js, ShouldcomponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Persons.js, getSnapShotBeforeUpdate");
        return({message:"Snapshot"});
    }
    componentDidUpdate(nextProps,nextState,Snapshot){
    console.log("persons.js ComponentDidUpdate ",Snapshot);
    }
    // componentWillUpdate(){
    //     console.log("Persons.js componentWillUpdate");
        
    // }
    render(){
        console.log("Persons.js rendering");
        return(
        this.props.persons.map((person,index)=>{
            return <Person key={index} name={person.name} 
            age={person.age} 
            click={this.props.click.bind(this,index)}></Person>
          })
        );
    }
      
    
}

export default Persons;