import React,{Component} from 'react';
import '../containers/App.css';
import Person from '../component/Persons/Person/Person';
import UserOutput from '../component/UserOutput/UserOutput';
import UserInput from '../component/UserInput/UserInput';
import Validation from '../component/Validation/Validation';
import Char from '../component/Char/Char';
import Radium from 'radium';
import Persons from '../component/Persons/Persons';
//import Classes from 'styled-components';


class App extends Component {
  state={
      persons:[
        {name:'A',age:23},
        {name:'B',age:25},
        {name:'C',age:25}
      ],
      users:[
        {username:'sang',password:'sang'},
        {username:'akash',password:'akash'},
        {username:'maxx',password:'maxx'}
      ],
      toggleShow:false,
      lengthOfWords:0,
      word:[],
      wordsL:""
  }
  componentDidMount(){
    console.log("app.js componentDidMount()");
  }

  componentWillMount(){
    console.log("app.js inside comp will mount");
    
  }
  switchNameHandler=(newName)=>{
    this.setState({
      persons:[
        {name:newName,age:23},
        {name:'B',age:25},
        {name:'C',age:25}
      ]
    })
  }
  NameHandler=(event)=>{
    this.setState({
      persons:[
        {name:event.target.value,age:23},
        {name:'B',age:25},
        {name:'C',age:25}
      ]
    })
  }

  userNameHandler=(e)=>{
    this.setState({
      users:[
        {username:e.target.value,password:'sang'},
        {username:'akash',password:'akash'},
        {username:'maxx',password:'maxx'}
      ]
    })
  }

  togglePerson=()=>{
    const dontShow=!this.state.toggleShow;
    this.setState((prevState)=>{
        return {toggleShow:!prevState.toggleShow}
    })
  }
  deletePerson=(index)=>{
    const persons=[...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }
  changeListener=(e)=>{
    let len=this.state.lengthOfWords;
    let lengOfWords=e.target.value;
    len=lengOfWords.length
    //console.log(lengOfWords.length,lengOfWords.split(""));
    this.setState({lengthOfWords:len,wordsL:lengOfWords,word:lengOfWords.split("")})
  }

  deleteChar=(e,index)=>{
    //mystring.split('/r').join('/')
    let word=this.state.wordsL;
    let val=word[index];
    word=word.split(val).join('');
    console.log(word,e.target.value,index);
    
    this.setState({
      wordsL:word,
      lengOfWords:word.length
    })
  }

  render(){
    console.log("app.js rendering..");
    
    const style={
      backgroundColor:'black',
      color:'white',
      border:'1px solid grey',
      padding:'8px',
      font:'inherit',
      ':hover':{
        backgroundColor:'red',
        color:'black'
      }
    }
    let persons=null;
    //console.log(this.state.toggleShow);
    if(this.state.toggleShow){
    persons=(
        <div>
          <Persons persons={this.state.persons} click={this.deletePerson}/>
        </div>
      )
      style.backgroundColor='Yellow';
      style[':hover']={
        backgroundColor:'green'
      }

    }

    const charWords=(
      <div>
        {this.state.word.map((w,index)=>{
          return <Char key={index} charName={w} click={(event)=>this.deleteChar(event,index)}></Char>
        })}
      </div>
    )

      return (
        <div className="App">
            {/* Not Recomended using arrow inside use bind */}

            {/* Part of First Practice */}
            <button onClick={()=>{this.switchNameHandler("WITHARROW")}}>Show Chnages</button>
            <button style={style} onClick={this.togglePerson}>Toggle</button>
            {persons}

            {/* Base syntax assignment */}
            {/* <UserInput  change={this.userNameHandler} Usedvalue={this.state.users[0].username}></UserInput>
            <UserOutput username={this.state.users[0].username} password={this.state.users[0].password}></UserOutput>
            <UserOutput username={this.state.users[1].username} password={this.state.users[1].password}></UserOutput>
            <UserOutput username={this.state.users[2].username} password={this.state.users[2].password}></UserOutput> */}
            
            {/* Second Assignment */}
            {/* <input onChange={this.changeListener} value={this.state.wordsL}/>
            <p>{this.state.lengthOfWords}</p>
            <Validation leng={this.state.lengthOfWords}></Validation>
            {charWords} */}
        </div>
      );
    }
}

export default Radium(App);
