import React, { Component } from 'react';
import { AccordionButton } from 'react-bootstrap';
import Input from './input';

class LoginForm extends Component {
state={
  account:{username:'', password:""}
};

  username=React.createRef();

  // componentDidMount(){

  //   this.username.current.focus();
  // }

  handleSubmit=e=>{
    e.preventDefault();
    console.log("form submitted");

    const username=this.username.current.value;
  }
handleChange=({currentTarget:input})=>{

  const account={...this.state.account};
  account[input.name]=input.value;
  this.setState({account});
}

  render() { 

    const {account}=this.state;
    
    return <div> 
    <h1 className="mb-3">Login </h1>
    <form onSubmit={this.handleSubmit}>
      <Input  name="username" value={account.username} label="Username" onChange={this.handleChange} />
      <Input  name="password" value={account.password} label="Password" onChange={this.handleChange} />
    <button className="btn btn-primary mt-3">Save</button>
    </form>

    </div>;
  }
}
 
export default LoginForm;