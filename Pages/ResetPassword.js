import React from 'react'
import {View,Text,Pressable,ImageBackground,KeyboardAvoidingView} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Header from '../Components/Header'
import BlackInput from './../assets/beforeInput.png'
import WhiteInput from './../assets/blueInput.png'
import { TextInput } from 'react-native';
import { useState } from 'react';
import { dev } from '../Connections/endPoint';
import axios from 'axios'
import AlertComp from './../Components/AlertComp';

const ResetPassword = ({navigation,route}) => {

        var {email} = route.params;
        const [password,setPass] = useState('')
        const [confPassword,setConfPass] = useState('')
        const [type,setType] = useState('')
        const [show,setShow] = useState(false)

        const handleApi = async()=>{
                try{
                        setShow(true)
                        setType('load')
                        if(password==''){
                                // error password
                        setType('password')
                        return;
                        }
                       else if(password!=confPassword){
                        setType('incPass')
                        //erorr
                                return;
                        }
                var {data} = await axios.post(dev+'/user/resetPassword',{
                        email,password
                })
                if(data.status==200){
                        setShow(false)
                        navigation.navigate('/')
            
                    }else{
                // error
                        setType('error')
                        console.log('error',data.status)
                    }
        }
        catch(err){
                setType('catch')
                // error
        }
        }


        const handler = ()=>{
                setShow(false)
            }


    return (
        <KeyboardAvoidingView
        behavior='position'style={{height:hp(100),backgroundColor:'#fdfdfd'}}>
            <AlertComp  handler={handler} show={show} type={type} />
        <Header title={'Reset Password'} />
        <View style={{marginTop:hp(15)}}>
            <Text style={{color:'#333333',textAlign:'center',paddingHorizontal:wp(12),fontSize:wp(4.5)}}>You can change your password.</Text>

<View style={{marginHorizontal:wp(2),marginTop:hp(5)}}>
<ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',marginTop:hp(1.5),width:'100%',borderRadius:4,alignSelf:'center'}}>
        <View style={{width:'95%',alignItems:'center',justifyContent:'center'}}>
        <TextInput style={{fontFamily:'Montserrat',color:'#333333',width:'80%',marginTop:hp(-0.5),alignSelf:'center'}} 
                    placeholderTextColor={'#696969'}
                    placeholder='New Password'
                    value={password}
                    onChangeText={txt=>setPass(txt)}
            />
        </View>
        </ImageBackground>


</View>

<View style={{marginHorizontal:wp(2),marginTop:hp(2)}}>
<ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',marginTop:hp(1.5),width:'100%',borderRadius:4,alignSelf:'center'}}>
        <View style={{width:'95%',alignItems:'center',justifyContent:'center'}}>
        <TextInput style={{fontFamily:'Montserrat',color:'#333333',width:'80%',marginTop:hp(-0.5),alignSelf:'center'}} 
                    placeholderTextColor={'#696969'}
                    placeholder='Confirm Password'
                    value={confPassword}
                    onChangeText={txt=>setConfPass(txt)}
            />
        </View>
        </ImageBackground>


</View>

            <View style={{backgroundColor:'#4F55D8',width:wp(50),alignSelf:'center',marginTop:hp(5),borderRadius:50}}>
    <Pressable onPress={handleApi}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>Save</Text>
</Pressable>
</View>


        </View>
    </KeyboardAvoidingView>
        )

}

export default ResetPassword