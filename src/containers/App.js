import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button'
import {connect} from 'react-redux'
import {userActions} from '../actions'



class App extends Component {
  constructor(props){
    super(props)
    this.refFname=null
    this.refLname=null
    this.refUsername=null
    this.refPassword=null
  }
  

  handleOnSubmit = e => {
    const {addUser}=this.props
    e.preventDefault()
    // console.log(this.refFname)
    let data ={
      fname:this.refFname.value,
      lname:this.refLname.value,
      username:this.refUsername.value,
      password:this.refPassword.value,
    }
   
    addUser(data) // sets state in the store by dispatching an action
    
    
  }

  handleClear = e => {
    const {clearUser}=this.props
    e.preventDefault()
    
    clearUser()
  }

  componentDidUpdate(){
    
    const {user} = this.props
    
    // setting value of the text box in the form according to state

    this.refFname.value=user.fname
    this.refLname.value=user.lname
    this.refUsername.value=user.username
    this.refPassword.value=user.password
  }
  render() {
    
    // console.log("sds",user)
    
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>

            {/*   When using ref no need of value attribute , when using value attribute there must be an Onchange handler */}

          <Input
            name={"fname"}
            title={"Enter first name"}
            type={"text"}
            inputRef={(node)=>{this.refFname = node}}
          />
          <Input 
            name={"lname"}
            title={"Enter lastname"}
            type={"text"}
            inputRef={(node)=>{this.refLname = node}}
            
            
          />
          <Input 
            name={"username"}
            title={"Enter username"}
            type={"text"}
            inputRef={(node)=>{this.refUsername = node}}
            
           
          />
          <Input 
            name={"password"}
            title={"Password"}
            type={"password"}
            inputRef={(node)=>{this.refPassword = node}}
            
            
          />
          <Button
            title={"Submit"}
            action={this.handleOnSubmit}
          />
          <Button 
            title={"Clear"}
            action={this.handleClear}
          />

        </form>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addUser: (data)=> {
      
      dispatch(userActions.addUser(data))

    },

    clearUser: () => {
      dispatch(userActions.clearUser())

    }

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)