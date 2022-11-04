import React,{useState} from 'react'
import {View,Animated,Text,ImageBackground,TextInput,Pressable,KeyboardAvoidingView} from 'react-native'
import {heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Lock from './../assets/Lock.svg';
import Eye from './../assets/eye.svg'
import HomeBg from './../assets/bgImg.png';
import BlackInput from './../assets/beforeInput.png'
import WhiteInput from './../assets/blueInput.png'
import Usericon from './../assets/usericon.svg'
import MsgIcon from './../assets/Message.svg';
import AlertComp from './../Components/AlertComp';
import { dev } from '../Connections/endPoint';
import axios from 'axios';


const Register = ({navigation}) => {

    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confPassword,setConfPassword] = useState('')
    var [pass,showPass] = useState(true)
    const [type,setType] = useState('')
    const [show,setShow] = useState(false)

    const [focused1, setFocused1] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [focused3, setFocused3] = useState(false);
    const [focused4, setFocused4] = useState(false);
    const [focused5, setFocused5] = useState(false);

const handleRegister = async()=>{
    setShow(true)
    setType('load')

    try{
        if(lname==''){
            setType('error')
            console.log('lname')
            return
        }else if(fname==''){
            setType('error')
            console.log('fname')
            return
        }else if(email==''){
            setType('email')
            console.log('email')
            return            
        }else if(password==''){
            setType('password')
            console.log('password')
            return
        }else if(password!=confPassword){
            setType('error')
            console.log('not equal')
            return
        }

    var {data} = await axios.post(dev+'/user/register',{
        lname,fname,password,email
    })
    if(data.status==200){
            setType('success')
            navigation.navigate('VerifyAccount',{
            email:data.message.email,
        })
    }else{
            setType(data.message)
            console.log("error",data.message)
        // else error
    }
}catch(err){
            setType('catch')
            console.log("error",err.message)
        // catch error
}

}

    return (
    <KeyboardAvoidingView
    behavior='position'
     style={{backgroundColor:'#fdfdfd',height:'100%'}}>
            <AlertComp  handler={handler} show={show} type={type} />
<ImageBackground source={HomeBg} style={{height:hp(25),width:wp(100),marginTop:hp(-5),marginBottom:hp(-2),transform:[{scaleY:0.8}]}} >
<View style={{alignItems:'center',height:'100%',justifyContent:'center'}}>
<Text style={{color:'#fff',fontSize:wp(8),letterSpacing:2}}>HISAAB</Text>
<View style={{width:wp(15),height:hp(0.5),backgroundColor:'#fff',marginTop:hp(2)}}></View>
</View>
</ImageBackground>


    <Text style={{fontFamily:'Montserrat',textAlign:'center',fontWeight:'700',color:'#333333',fontSize:wp(6),marginTop:hp(7)}}>SIGN UP</Text>

    <View style={{width:'100%'}}>

    <ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',width:'100%',borderRadius:4,alignSelf:'center',marginTop:hp(4)}}>
    <View style={{alignItems:'center',width:'10%'}}>
            <Usericon style={{marginLeft:wp(8)}} />
        </View>
        <View style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',color:'#333333',width:'80%',alignSelf:'center'}} 
            placeholder='First Name'
            placeholderTextColor={'#696969'}
            value={fname}
            onChangeText={txt=>setFname(txt)}
            />
        </View>
        <View style={{width:'10%'}}>
        </View>

    </ImageBackground>

    <ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',width:'100%',borderRadius:4,alignSelf:'center',marginTop:hp(1)}}>
    <View style={{alignItems:'center',width:'10%'}}>
            <MsgIcon style={{marginLeft:wp(8)}} />
        </View>
        <View style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',color:'#333333',width:'80%',alignSelf:'center'}} 
                    placeholderTextColor={'#696969'}
                    placeholder='Last Name'
                    value={lname}
                    onChangeText={txt=>setLname(txt)}        
            />
        </View>
        <View style={{width:'10%'}}>
        </View>

        </ImageBackground>

    <Animated.View>
    <ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',width:'100%',borderRadius:4,alignSelf:'center',marginTop:hp(1)}}>
    <View style={{alignItems:'center',width:'10%'}}>
            <MsgIcon style={{marginLeft:wp(8)}} />
        </View>
        <View style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',color:'#333333',width:'80%',alignSelf:'center'}} 
                    placeholderTextColor={'#696969'}
                    placeholder='Email'
                    value={email}
                    onChangeText={txt=>setEmail(txt)}   
            />
        </View>
        <View style={{width:'10%'}}>
        </View>


        </ImageBackground>

    </Animated.View>

    <Animated.View>
    <ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',width:'100%',borderRadius:4,alignSelf:'center',marginTop:hp(1)}}>
    <View style={{alignItems:'center',width:'10%'}}>
            <Lock style={{marginLeft:wp(8)}} />
        </View>
        <View  style={{width:'75%'}}>
            <TextInput style={{fontFamily:'Montserrat',color:'#333333',width:'80%',alignSelf:'center'}} 
            placeholder='Password'
                    placeholderTextColor={'#696969'}
                    secureTextEntry={pass}
                    value={password}
                    onChangeText={txt=>setPassword(txt)}   
            />
        </View>
        <View style={{alignItems:'center',width:'10%'}}>
            <Eye style={{marginLeft:wp(-5)}}  onPress={()=>showPass(!pass)}/>
        </View>
        
        </ImageBackground>
    </Animated.View>

    <ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',width:'100%',borderRadius:4,alignSelf:'center',marginTop:hp(1)}}>
    <View style={{alignItems:'center',width:'10%'}}>
            <Lock style={{marginLeft:wp(8)}} />
        </View>
        <View  style={{width:'75%'}}>
            <TextInput style={{fontFamily:'Montserrat',color:"#333333",width:'80%',alignSelf:'center'}} 
                    placeholderTextColor={'#696969'}
                    placeholder='Confirm Password'
            secureTextEntry={pass}
            value={confPassword}
            onChangeText={txt=>setConfPassword(txt)}   
            />
        </View>
        <View style={{alignItems:'center',width:'10%'}}>
        </View>
        </ImageBackground>

    </View>
    <View style={{backgroundColor:'#4F55D8',width:wp(55),alignSelf:'center',marginTop:hp(4),borderRadius:50}}>
    <Pressable onPress={handleRegister}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>SIGN UP</Text>
</Pressable>
</View>
<Text style={{fontFamily:'Montserrat',fontSize:wp(3.5),textAlign:'center',marginTop:hp(1.5),color:'#afafaf',fontWeight:'700'}}>OR</Text>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:hp(2)}}>
            <Text style={{fontFamily:'Montserrat',color:'#afafaf'}}>Already have an account?</Text>

            <Pressable onPress={()=>navigation.navigate('/')}>
            <Text style={{fontFamily:'Montserrat',color:'#333333',fontWeight:'600'}}> Log In</Text>
</Pressable>
        </View>


    </KeyboardAvoidingView>
    )
}

export default Register