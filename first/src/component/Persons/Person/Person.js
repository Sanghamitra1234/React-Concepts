import React,{Component} from 'react';
import Auxilary from '../../../hoc/Auxilary';
import propTypes from 'prop-types';
import Persons from '../Persons';
import styles from './Persons.module.css'

//ES6
//Functional Usage :P
class Person extends Component{
    render(){
        return (
                <Auxilary>
                        <p  className={styles.paraStyle} onClick={this.props.click}>I am a {this.props.name} and {this.props.age} years old</p>
                        <p>{this.props.children}</p> 
                        {/* To print hobbies in between person but 
                        it is always rendred and if no children the output is always null */}
                        <input type="text" onChange={this.props.change} value={this.props.value}></input>
            </Auxilary>
        );
    }
}

//To set the propTypes
Person.propTypes={
    click:propTypes.func,
    name:propTypes.string,
    age:propTypes.number,
    change:propTypes.func
};

export default Person;