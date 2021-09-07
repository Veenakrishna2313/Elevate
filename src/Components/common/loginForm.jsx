import React, { Component } from 'react'

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
handleChange=(e)=>{

  const account={...this.state.account};
  account.username=e.currentTarget.value;
  this.setState({account});
}

  render() { 
    return <div> 

    <form onSubmit={this.handleSubmit}>
      <div className="form-group"><label htmlFor="username">User Name</label><input value={this.state.account.username} onChange={this.handleChange} autoFocus ref={this.username} id="username" type="text" className="form-control" /></div>
      <div className="form-group"><label htmlFor="password">Password</label><input id="password" type="text" className="form-control" /></div>
    <button className="btn btn-primary">Save</button>
    </form>

    </div>;
  }
}
 
export default LoginForm;