import React, { Component } from 'react';
import Header from './Header';
class LoginContainer extends Component {
	constructor()
	{
           super()
           this.state = { email: '', password: '',text: 'Hello from state!' };

	}
		
	
handleEmailChange(event) {
this.setState({ email: event.target.value });
};
handlePasswordChange(event){
this.setState({ password: event.target.value });
};
handleClick(event){
this.setState({ text: 'State changed!' });

};
handleSubmit(event){
event.preventDefault();
console.log(this.state);
};
render() {
	return(<div id="LoginContainer" className="inner-container">
           <Header />
<img src="../public/assets/icon.png" alt="logo" />
<h1 onClick={this.handleClick.bind(this)}>{this.state.text}</h1>

		<form onSubmit={this.handleSubmit.bind(this)}>
<p>Sign in or sign up by entering your email and password.</p>
<input
type="text"
onChange={this.handleEmailChange.bind(this)}
placeholder="Your email" />
<input
type="password"
onChange={this.handlePasswordChange.bind(this)}
placeholder="Your password" />
<button className="red light" type="submit">Login</button>
</form>
</div>)
}
}
export default LoginContainer;