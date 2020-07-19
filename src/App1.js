import React from "react";
import Logo from "./logo.svg";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            input:'',
            msg:'',
            username:'',
            password: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandlerUsername(event){
        this.setState({
            username:event.target.value
        });
    }
    onChangeHandlerPassword(event){
        this.setState({
            password:event.target.value
        });
    }

    onChangeHandler(event){
            this.setState({
                input: event.target.value
            });
    }
    render() {
        return(
          <div align={"center"}>
              Welcome To My App<br/>
              <form>
                  <label>Input:</label><br/>
                  <input type="text" value={this.state.input} onChange={this.onChangeHandler} placeholder={"Enter your text here pls!"}/>

                  <p>{this.state.input}</p>
                  <label>UserName:</label><br/>
                  <input type={"text"} value={this.state.username} onChange={this.onChangeHandlerUsername.bind(this)} placeholder={"Your Username"}/><br/><br/>
                  <label>Password</label><br/>
                  <input type={"password"} value={this.state.password} onChange={this.onChangeHandlerPassword.bind(this)} placeholder={"Your Password"} />
              </form>
          </div>

        );
    }
}
export default App;