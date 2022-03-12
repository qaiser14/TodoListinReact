import React from 'react'
import Carousel from './carousel'
import carousel  from './carousel'

class App extends React.Component{

  state ={

    todos : [],
    valuee:""

  }

  // Capturing value
    handleChange = (e) => {
       
        this.setState({
        valuee: e.target.value
      })   
    }

  // Capturing value in the todo array by pressing the todo button
    handleClick = (e) => {
      e.preventDefault()
      this.setState({
      todos : [...this.state.todos, this.state.valuee],
      valuee:""
      })
    }
  
  // creating the function on delete button
    handleDelete = (i) => {
      let newArray = this.state.todos
        newArray.splice(i, 1)

        this.setState({
          todos:newArray
        })
    }

    // Creating the function on shift up button
    handleUp = (i) => {

      let newArray= this.state.todos
      let arrayIndex = newArray[i]


          newArray[i] = newArray[i-1]
          newArray[i-1] = arrayIndex
        this.setState({
            todos:newArray
        })
    }

    // Creating the function for shift down button
    handleDown = (i) =>{

      let newArray = this.state.todos
      let arrayIndex = newArray[i]

        newArray[i] = newArray[i+1]
        newArray[i+1] = arrayIndex

        this.setState({
          todos:newArray
        })
    }

    // Creating the handleupdate button
    handleUpdate = (i) =>{

      let newArray = this.state.todos
      let updateValue = this.state.valuee
      console.log(updateValue, "updateValue");

      let currentValue = newArray[i]
      
      newArray[i] = this.state.valuee

      if(this.state.valuee==""){
          this.setState({
            valuee:currentValue
          })         
      } else {

        this.setState({
          todos:newArray,
          valuee:""
        })

      }
    }



  render(){

    let response = this.state.todos.map((item, index)=>{
      return(
        <div>
          <span>
            {item}
          </span>
            <button onClick={()=>{this.handleUp(index)}}>ShiftUp</button>
            <button onClick={()=>{this.handleDown(index)}}>ShiftDown</button>
            <button onClick={()=>{this.handleDelete(index)}}>Delete</button>
            <button onClick={()=>{this.handleUpdate(index)}}>Update</button>
        </div>
      )
    })


    return(
      <>
      THE TODO APP
        <form onSubmit={this.handleClick}>
          <input type="text" onChange={this.handleChange} value={this.state.valuee}></input>
          <button type="submit">Add Todo</button>
        </form>
          {response}

          <Carousel />
      </>
    )
  }
}

export default App