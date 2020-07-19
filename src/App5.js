import React from "react"
//import {createStackNavigator} from "react-navigation-stack";


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            msg:'',
        }
    }
    onChangeHandlerUserName(event){
        this.setState({
            username:event.target.value
        })
    }
    onChangeHandlerPassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmitHandler(event){
       const HOST ="http://localhost:3001/react/419/login";
       const formData =JSON.stringify({
          username:this.state.username,
          password: this.state.password
       });

       fetch(HOST,
           {
               headers:{
                   'Content-Type':'application/json',
                   'Accept':'application/json'
               },
               method:"post",
               body: formData
           }
           )
           .then((res)=> res.json())
           .then((data)=>{
               this.setState({
                   msg:JSON.stringify(data)
               })
           })
           .catch((err)=>{
               this.setState({
                   msg:"Error Occured: "+err.message
               })
           });
       this.props.navigation.navigate("Person")
        event.preventDefault();
    }

    render(){
        return(
            <div align={"center"}>
                <h2>My React App 5</h2>
                <label>UserName:</label><br/>
                <input type={"text"} value={this.state.username} onChange={this.onChangeHandlerUserName.bind(this)} name={"username"} placeholder={"UserName"}/><br/><br/>
                <label>PassWord:</label><br/>
                <input type={"password"} value={this.state.password} onChange={this.onChangeHandlerPassword.bind(this)} name={"password"} placeholder={"Password"}/><br/><br/>
                <input type={"button"} value={"Submit"} onClick={this.onSubmitHandler.bind(this)}/><br/><br/>
                <p>{this.state.msg}</p>
            </div>
        );
    }
}
/*
const AppNavigator = createStackNavigator({
    Home: {
        screen: App
    },
    Person:{
        screen: Person
    }
})

 */
class Person extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name:"",
            age:"",
            favouriteFoods: [],
            msg:''
        }
    }

    componentWillMount(){
        const HOST ="http://localhost:3001/react/419?name=Barack%20Obama&age=40"

        fetch(HOST,
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'get'
            }
            )
            .then((res)=>res.json())
            .then((data)=>{
                console.log(" Result from Server Is "+JSON.stringify(data))
                this.setState({
                    name: data[0].name,
                    age:data[0].age,
                    favouriteFoods: data[0].favoriteFoods,
                    msg: "Operation Successfull"
                        //JSON.stringify(data)
                })
            })
            .catch((err)=>{
                this.setState({
                    msg:" Error Occured:: "+err.message
                })
            })

    }
    render(){
        const favouriteFoodsList= this.state.favouriteFoods.map((item,key)=><li key={key}>{item}</li>);
        console.log("toDoList=="+this.state.favouriteFoods)
        return(
            <div align={"center"}>
                <h2>Persons' React App</h2>
                <h3>Here are the Person's data from the server:</h3>
                <label><strong>Name:</strong></label><br/>
                <p>{this.state.name}</p><br/>
                <label><strong>Age:</strong></label><br/>
                <p>{this.state.age}</p><br/>
                <label><strong>My Favourite Foods:</strong></label>
                <ol>
                    {favouriteFoodsList}
                </ol>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}

export default App;
