import React, { useState } from 'react'
import {View,Image,Animated,Text,ImageBackground,TextInput,Pressable,KeyboardAvoidingView} from 'react-native'
import {heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen'
import MsgIcon from './../assets/Message.svg';
import Lock from './../assets/Lock.svg';
import Eye from './../assets/eye.svg'
import GoogleIcon from './../assets/Google.svg';
import {Radio,Switch} from 'native-base';
import HomeBg from './../assets/bgImg.png';
import BlackInput from './../assets/beforeInput.png'
import WhiteInput from './../assets/blueInput.png'
import axios from 'axios';
import AlertComp from './../Components/AlertComp';
import { dev } from '../Connections/endPoint';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

    var [pass,showPass] = useState(true)
    var translationYEmail = new Animated.Value(hp(0))
    var translationYPass = new Animated.Value(hp(0))
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')



    const handleLogin=async()=>{
        if(email==''){
            return
        }else if(password==''){
            return
        }
        try{
        var {data} =await axios.post(dev+'/user/login',{
            email,password
        });
        console.log(data)
        if(data.status==200){
            await AsyncStorage.setItem('userId',data.message.profile._id);
            await AsyncStorage.setItem('userInstanceId',data.message.userId);
            navigation.navigate('Home')
        }else if(data.status==403){
            navigation.navigate('ProfileBuilding',{
                userId:data.message.id
            })
        }else{
            console.log('error',data.status)
        }
    }
catch(err){
    console.log(err.message)
    // errors
}
    }

    return (

        <KeyboardAvoidingView
        behavior='position' style={{backgroundColor:'#fdfdfd',height:'100%'}}>

            {/* <Animated.View style={{marginTop:hp(4),transform:[{translateY:translationY},{scaleX:xScaling},{scaleY:yScaling}]}}> */}
<ImageBackground source={HomeBg} style={{height:hp(25),width:wp(100),marginTop:hp(-5),marginBottom:hp(-2),transform:[{scaleY:0.8}]}} >
<View style={{alignItems:'center',height:'100%',justifyContent:'center'}}>
<Text style={{color:'#fff',fontSize:wp(8),letterSpacing:2}}>HISAAB</Text>
<View style={{width:wp(15),height:hp(0.5),backgroundColor:'#fff',marginTop:hp(2)}}></View>
</View>
</ImageBackground>
        {/* </Animated.View> */}


            <Text style={{fontFamily:'Montserrat',textAlign:'center',fontWeight:'700',color:'#333333',fontSize:wp(6),marginTop:hp(7)}}>LOGIN</Text>

            <View style={{width:'100%'}}>

            <Animated.View style={{transform:[{translateY:translationYEmail}]}}>
            <ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',width:'100%',borderRadius:4,alignSelf:'center',marginTop:hp(4)}}>
            <View style={{alignItems:'center',width:'10%'}}>
                    <MsgIcon style={{marginLeft:wp(8)}} />
                </View>
                <View style={{width:'75%'}}>
                <TextInput style={{fontFamily:'Montserrat',marginTop:hp(-0.5),width:'80%',color:'#333333',alignSelf:'center'}} 
                    placeholder='Email'
                    value={email}
                    onChangeText={txt=>setEmail(txt)}
                    placeholderTextColor={'#696969'}
                    />
                </View>
                <View style={{width:'10%'}}>
                </View>
            </ImageBackground>

            
            </Animated.View>

            <Animated.View style={{transform:[{translateY:translationYPass}]}}>

            <ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',width:'100%',marginTop:hp(2),borderRadius:4,alignSelf:'center'}}>
            <View style={{alignItems:'center',width:'10%'}}>
                    <Lock style={{marginLeft:wp(8)}} />
                </View>
                <View  style={{width:'75%'}}>
                    <TextInput style={{fontFamily:'Montserrat',marginTop:hp(-0.5),width:'80%',color:'#333333',alignSelf:'center'}} 
                    placeholderTextColor={'#696969'}
                    placeholder='Password'
                    secureTextEntry={pass}
                    value={password}
                    onChangeText={txt=>setPassword(txt)}
                    />
                </View>
                <View style={{alignItems:'center',width:'10%'}}>
                    <Eye style={{marginLeft:wp(-5)}} onPress={()=>showPass(!pass)} />
                </View>
            </ImageBackground>

            </Animated.View>

            </View>

            <View style={{flexDirection:'row',marginTop:hp(2),width:wp(94),marginHorizontal:wp(3),justifyContent:'space-between'}}>
        
        <View style={{flexDirection:'row',alignItems:'center'}}>
            {/* <Radio.Group>
            <Radio size={'md'} style={{margnLeft:-10}} />
            </Radio.Group> */}
        <Switch thumbColor={'#f2f2f2'} offTrackColor={'#afafaf'} onTrackColor={'#4F55D8'} />
            <Text style={{fontFamily:'Montserrat',color:'#333333'}}>Remember me</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Pressable onPress={()=>navigation.navigate('EmailForForget')}>
            <Text style={{fontFamily:'Montserrat',color:'#333333'}}>Forget Password?</Text>
            </Pressable>
        </View>
            
            </View>
        
            <View style={{backgroundColor:'#4F55D8',width:wp(55),alignSelf:'center',marginTop:hp(4),borderRadius:50}}>
            <Pressable  onPress={()=>{
                handleLogin() }}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>LOGIN</Text>
        </Pressable>
        </View>

        <Text style={{fontFamily:'Montserrat',fontSize:wp(3.5),textAlign:'center',marginTop:hp(1.5),color:'#afafaf',fontWeight:'700'}}>OR</Text>
        <Text style={{fontFamily:'Montserrat',fontSize:wp(4),textAlign:'center',marginTop:hp(1.5),color:'#333333',fontWeight:'700'}}>LOG IN WITH</Text>
        
        <View style={{width:'100%',flexDirection:'row',marginTop:hp(2),justifyContent:'center'}}>
        <GoogleIcon style={{marginRight:wp(1)}} />
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:hp(2)}}>
            <Text style={{fontFamily:'Montserrat',color:'#afafaf'}}>Don't have an account?</Text>
            <Pressable onPress={()=>{
                    navigation.navigate('Register')}
            }>
            <Text style={{fontFamily:'Montserrat',color:'#333333',fontWeight:'600'}}> Sign up</Text>
            </Pressable>
        </View>

        </KeyboardAvoidingView>

    )
}

export default Login