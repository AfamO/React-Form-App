import React from "react"
import Logo from "./logo.svg"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:'',
            username:'',
            password:'',
            msg:''
        }
        this.onChangeHandlerInput= this.onChangeHandlerInput.bind(this);
        this.onChangeHandlerUserName= this.onChangeHandlerUserName.bind(this);
        this.onChangeHandlerPassword= this.onChangeHandlerPassword.bind(this);
    }
     onChangeHandlerInput =(event)=>{
         let stateObj={};
          stateObj.input=event.target.value;
        this.setState(stateObj);
    }
    onChangeHandlerUserName =(event)=>{
        let stateObj={};
        stateObj.username=event.target.value;
        this.setState(stateObj);
    }
    onChangeHandlerPassword =(event)=>{
        let stateObj={};
        stateObj.password=event.target.value;
        this.setState(stateObj);
    }
    onSubmitHandler =(event) =>{
        let formData = {
            username:this.state.username,
            password:this.state.password
        };
        fetch("http://localhost:3001/react/419/",
            {
                method:"POST",
                headers:{
                    'content-Type': "application/json",
                    'Accept': "application/json"
                },
                body:JSON.stringify(formData)
            }
            )
            .then((res)=>res.json())
            .then((result)=>{
                this.setState({
                    msg: JSON.stringify(result)
                })
            })
            .catch((err)=>{
                this.setState({
                    msg:" Error Occured Contacting the Server:"+err.message
                });
            });
        event.preventDefault();
    }
    render(){
        return(
            <div align={"center"}>
                <h2>Welcome To My React App</h2>
                <label>Text:</label><br/>
                <input type={"text"} value={this.state.input} placeholder={"Type your input"} onChange={this.onChangeHandlerInput}/><br/>
                <p>{this.state.input}</p><br/>
                <form>
                    <label>UserName:</label><br/>
                    <input type={"text"} value={this.state.username} name={"username"} onChange={this.onChangeHandlerUserName} placeholder={"Your UserName"}/><br/><br/>
                    <label>Password:</label><br/>
                    <input type={"password"} value={this.state.password} name={"password"} onChange={this.onChangeHandlerPassword} placeholder={"Your Password"}/><br/><br/>
                    <input type={"submit"} value={"Submit"} onClick={this.onSubmitHandler.bind(this)}/><br/><br/>
                    <p>{this.state.msg}</p>

                </form>
            </div>
        );
    }

}
export default App;