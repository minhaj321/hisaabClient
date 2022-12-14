import React from 'react'
import {View,Text,Pressable,ImageBackground,KeyboardAvoidingView} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Header from '../Components/Header'
import BlackInput from './../assets/beforeInput.png'
import WhiteInput from './../assets/blueInput.png'
import { TextInput } from 'react-native';
import axios from 'axios'
import { useState } from 'react';
import { dev } from '../Connections/endPoint';
import AlertComp from './../Components/AlertComp';

const EmailForForget = ({navigation}) => {

        const [email,setEmail] = useState('')
        const [type,setType] = useState('')
        const [show,setShow] = useState(false)

        const handleApi = async()=>{
                setShow(true)
                try{
                        setType('load')
                        if(email==''){
                        setType('error')
                        // error email
                                return
                        }
                var {data} = await axios.post(dev+'/user/forgetPassword',{
                        email,
                })
                if(data.status==200){
                setShow(false)
                navigation.navigate('CodeOfReset',{
                                email
                        })
                }else{
                setType('error')
                // error else
                        // console.log("error",data.status)
                }
        }catch(err){
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
        <Header title={'Forget Password'} />
        <View style={{marginTop:hp(15)}}>
            <Text style={{color:'#333333',textAlign:'center',paddingHorizontal:wp(12),fontSize:wp(4.5)}}>Enter email to send code to change password.</Text>

<View style={{marginHorizontal:wp(2),marginTop:hp(5)}}>
<Text style={{color:'#333333',fontSize:wp(4.5),marginLeft:wp(2.5)}}>Enter Email : </Text>
<ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',marginTop:hp(1.5),width:'100%',borderRadius:4,alignSelf:'center'}}>
        <View style={{width:'95%',alignItems:'center',justifyContent:'center'}}>
        <TextInput style={{fontFamily:'Montserrat',color:'#333333',width:'80%',marginTop:hp(-0.5),alignSelf:'center'}} 
                    placeholderTextColor={'#696969'}
                    value={email}
                    onChangeText={txt=>setEmail(txt)}
                    // placeholder='Last Name'
            />
        </View>
        </ImageBackground>


</View>

            <View style={{backgroundColor:'#4F55D8',width:wp(50),alignSelf:'center',marginTop:hp(5),borderRadius:50}}>
    <Pressable onPress={handleApi}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>Send Code</Text>
</Pressable>
</View>


        </View>
    </KeyboardAvoidingView>
        )

}

export default EmailForForget