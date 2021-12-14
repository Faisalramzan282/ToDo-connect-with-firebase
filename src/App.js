//import logo from './logo.svg';
import './App.css';
import react from 'react'
import firebase from './config/firebase.js';


class App extends react.Component{
  constructor()
  {  
  super()
    {
      this.state={
        todos:[{title:"Faisal",edit:false},{title:"Ramzan",edit:false}],
        value:''
      }
    }
  
  }
  add_todo=()=>
  {
    let obj={title:this.state.value}
    // this.state.todos.push(this.state.value)
    firebase.database.ref('/').child("todos")
      .push(obj)
    
    this.setState({
      // todos:this.state.todos
      todos:[...this.state.todos,obj],
      value:''
    })
  }
  delete_todo=(index)=>{
    this.state.todos.splice(index,1)
    this.setState({
      todos:this.state.todos
    })
  }
  edit_todo=(ind,val)=>{
   this.state.todos[ind].edit=true
    
    this.setState({
      todos:this.state.todos
    })
  }
  handleChange=(e,index)=>
  {
    this.state.todos[index].title=e.target.value
    this.setState({
      todos:this.state.todos
    })
  }
  update=(ind)=>{
    this.state.todos[ind].edit=false
    
    this.setState({
      todos:this.state.todos
    })
  }
  render()
  {
    let{todos,value}=this.state
    return(
      <div>
        
        <input value={value} onChange = {(e)=>this.setState({value:e.target.value})} type="text" placeholder="Enter Value"  />
        <button onClick={this.add_todo}>Add item</button>
        <ul>
          {todos.map((v,i)=>{
                return <li key={i}>
                {v.edit ? <input value={v.title} onChange={(e)=>this.handleChange(e,i)} type="text" />: v.title}
                {v.edit? <button onClick={()=>this.update(i)}>Update</button>
                :
                <button onClick={()=>this.edit_todo(i,v.title)}>Edit</button>
                }
                <button onClick={()=>this.delete_todo(i)}>Delete</button>
                </li>
          }

          )
        }
        </ul>
      </div>
    )
  }
}

export default App;
