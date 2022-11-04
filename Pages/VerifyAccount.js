import React,{useState} from 'react'
import {View,Text,Pressable,ImageBackground,KeyboardAvoidingView} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './../Components/Header.js';
import { TextInput } from 'react-native';
import BlackInput from './../assets/beforeInput.png'
import WhiteInput from './../assets/blueInput.png'
import axios from 'axios';
import { dev } from '../Connections/endPoint.js';
import AlertComp from './../Components/AlertComp';

const VerifyAccount = ({navigation,route}) => {

 const [code,setCode] = useState(0)
 const [type,setType] = useState('')
 const [show,setShow] = useState(false)

var {email} = route.params;

        const handleApi=async()=>{
                setShow(true)
                setType('load')
                try{
                if(code==0){
                setType('code')
                // error catch               
                return;
                }
                var {data} = await axios.post(dev+'/user/verifyAccount',{
                        code,email
                })
                if(data.status==200){
                setShow(false)
                console.log('verified')
                        navigation.navigate('ProfileBuilding',{
                                userId:data.message._id
                        })
                }else{
        // error else               
                setType('error')
                console.log('err=>',data.status)
                }

        }catch(err){
                setType('catch')
                console.log('err=>',err.message)
        // error catch               
        }
        }

        const handler = ()=>{
                setShow(false)
            }

        return (
        <KeyboardAvoidingView
        behavior='position'style={{height:hp(100),backgroundColor:'#fdfdfd'}}>
            <AlertComp  handler={handler} show={show} type={type} />
        <Header title={'Verify Account'} />
        <View style={{marginTop:hp(15)}}>
            <Text style={{color:'#333333',textAlign:'center',paddingHorizontal:wp(12),fontSize:wp(4.5)}}>We have send you a code on your email {email}. Please check it.</Text>

<View style={{marginHorizontal:wp(2),marginTop:hp(5)}}>
<Text style={{color:'#333333',fontSize:wp(4.5),marginLeft:wp(2.5)}}>Enter Code : </Text>
<ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',marginTop:hp(1.5),width:'100%',borderRadius:4,alignSelf:'center'}}>
        <View style={{width:'95%',alignItems:'center',justifyContent:'center'}}>
        <TextInput style={{fontFamily:'Montserrat',color:'#333333',width:'80%',marginTop:hp(-0.5),alignSelf:'center'}} 
                    placeholderTextColor={'#696969'}
                    keyboardType='number-pad'
                    value={code}
                    onChangeText={txt=>setCode(txt)}
                    // placeholder='Last Name'
            />
        </View>
        </ImageBackground>


</View>

            <View style={{backgroundColor:'#4F55D8',width:wp(50),alignSelf:'center',marginTop:hp(5),borderRadius:50}}>
    <Pressable onPress={handleApi}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>Verify</Text>
</Pressable>
</View>


        </View>
    </KeyboardAvoidingView>
    )
}

export default VerifyAccount