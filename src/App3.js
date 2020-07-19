import React from "react"
import Logo from "./logo.svg"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            username: '',
            password: '',
            msg:''
        }
    }

    onChangeHandlerUserName(event){
        this.setState({
            username: event.target.value
        })
    }
    onChangeHandlerPassword(event){
        this.setState({
            password: event.target.value
        })
    }
    onSubmitHandler(event){
        const HOST ="http://localhost:3001/react/419"
        let formData = {
            username: this.state.username,
            password: this.state.password
        }

        fetch(HOST,
            {
                headers:{
                    'Content-Type':"application/json",
                    'Accept': "application/json"
                },
                method: 'post',
                body: JSON.stringify(formData)
            }
            )
            .then((response)=>response.json())
            .then((result)=>{
                this.setState({
                    msg: JSON.stringify(result)
                })
            })
            .catch((error)=>{
                this.setState({
                    msg:"Error Occured:"+error.message
                })
            });
        event.preventDefault();
    }
    render(){
        return(
            <div align={"center"}>
                <h2>Welcome To My React App3</h2>

                <Form username={this.state.username} password ={this.state.password} onChangeUserName={this.onChangeHandlerUserName.bind(this)}
                onChangePassword={this.onChangeHandlerPassword.bind(this)} onSubmit={this.onSubmitHandler.bind(this)} msg={this.state.msg}/>

            </div>
        )
    }

}
const Form = (props)=>{
    return(
        <div>
            <label>UserName:</label><br/>
            <input type={"text"} name={"username"} value={props.username} onChange={props.onChangeUserName} placeholder={"Username"}/><br/><br/>
            <label>PassWord:</label><br/>
            <input type={"password"} name={"password"} value={props.password} onChange={props.onChangePassword} placeholder={"Password"}/><br/><br/>
            <button onClick={props.onSubmit}>Submit</button><br/><br/>
            <p>{props.msg}</p>
        </div>
    );
}

export default App