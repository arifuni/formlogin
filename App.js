import React ,{Component} from 'react';
import {TouchableOpacity, View, Text, TextInput, Image} from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props)
    this.sate={
      username : "",
      password : ""
    }

  }

  validate_field=()=>{
    const {username, password} = this.state
    if (username == ""){
      alert("Username jangan dikosongi")
      return false
    } else if(password == ""){
      alert("Password jangan dikosongi")
      return false  
    }
    return true
  }

  making_api_call=()=>{
    if(this.validate_field()){
          alert("Berhasil Login")
    }
  }

render(){
  return(
    <View style={{width : "100%" , height : "100%" , justifyContent :"center" , alignSelf : "center" , alignContent : "center" , alignItems : "center"
          }}>
      <Image 
       style={{width: 200, height: 200}}
       resizeMode="contain"
       source = {require('./assets/images/logo.png')} 
      />     
            <TextInput placeholder={"Username"}
            onChangeText={(value)=> this.setState({username : value})}
            style={{ height : 42 , width : "80%" , borderBottomWidth : 1}}
            />
            <TextInput placeholder={"Password"}
            onChangeText={(value)=> this.setState({password : value})}
            style={{ height : 42 , width : "80%" , borderBottomWidth : 1}}
            />
         
    <View style={{marginTop : "10%" , width : "80%"}}>
            <TouchableOpacity style={{ borderWidth : 1, height : 42, width : "80%"
            , justifyContent : "center" , alignItem : "center", borderRadius : 40 ,
            backgroundColor : "black" , alignSelf : "center" , textAlign : "center"
            }}
            onPress={()=>this.making_api_call()}
            >       
                  <Text style={{color : "white"}}> LOGIN </Text>
            </TouchableOpacity>
    </View>
    
    </View>   
  )
}
}


