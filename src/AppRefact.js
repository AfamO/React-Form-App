import React from "react"

class AppRefact. extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            msg:''
        }

    }
    onChangeHandlerUsername =(event) =>{
        this.setState({
            username:event.target.value
        })
    }
    onChangeHandlerPassword =(event) =>{
        this.setState({
            password:event.target.value
        })
    }
    onSubmitHandler =(event) =>{
        const HOST ="http://localhost:3001/react/419";
        const formData = {
            username:this.state.username,
            password: this.state.password
        }
        fetch(HOST,
            {
                headers:{
                    'Content-Type':"application/json",
                    'Accept':'application/json'
                },
                method:"post",
                body:JSON.stringify(formData)
            }
            )
            .then((res)=>res.json())
            .then((result)=>{
                this.setState({
                    msg: JSON.stringify(result)
                })
            })
            .catch((error)=>{
                this.setState({
                    msg: error.message
                })
            })
    }

    render(){
        return(
          <div align={"center"}>
              <h2>Welcome to React App 4</h2>
              <label>Username:</label><br/>
              <input type={"text"} value={this.state.username} onChange={this.onChangeHandlerUsername.bind(this)}/><br/><br/>
              <label>Password:</label><br/>
              <input type={"password"} value={this.state.password} onChange={this.onChangeHandlerPassword.bind(this)}/><br/><br/>
              <input type={"button"} onClick={this.onSubmitHandler.bind(this)} value={"Submit"}/><br/><br/>
              <p>{this.state.msg}</p>
          </div>
        );
    }
}
export default App
