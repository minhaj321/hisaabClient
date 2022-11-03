import React,{useState} from 'react'
import {View,Text,Pressable,ImageBackground,KeyboardAvoidingView} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Header from '../Components/Header'
import BlackInput from './../assets/beforeInput.png'
import WhiteInput from './../assets/blueInput.png'
import { TextInput } from 'react-native';
import { dev } from '../Connections/endPoint';
import axios from 'axios';

const CodeOfReset = ({navigation,route}) => {

        var {email} = route.params;
        const [code,setCode] = useState(0)

        const handleCode = async()=>{
                try{
                        console.log(email)
                        if(code==0){
                        // error email
                                return
                        }
                var {data} = await axios.post(dev+'/user/checkCode',{
                        code,email
                })
                if(data.status==200){
                        navigation.navigate('ResetPassword',{
                                email
                        })
                }else{
                // error else
                        console.log("error",data.status)
                }
        }catch(err){
                // error catch
        }
        }

    return (
        <KeyboardAvoidingView
        behavior='position'style={{height:hp(100),backgroundColor:'#fdfdfd'}}>
        <Header title={'Verify Email'} />
        <View style={{marginTop:hp(15)}}>
            <Text style={{color:'#333333',textAlign:'center',paddingHorizontal:wp(12),fontSize:wp(4.5)}}>We have send you a code on your email {email}. Please check it.</Text>

<View style={{marginHorizontal:wp(2),marginTop:hp(5)}}>
<Text style={{color:'#333333',fontSize:wp(4.5),marginLeft:wp(2.5)}}>Enter Code : </Text>
<ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',marginTop:hp(1.5),width:'100%',borderRadius:4,alignSelf:'center'}}>
        <View style={{width:'95%',alignItems:'center',justifyContent:'center'}}>
        <TextInput style={{fontFamily:'Montserrat',color:'#333333',width:'80%',marginTop:hp(-0.5),alignSelf:'center'}} 
                    placeholderTextColor={'#696969'}
                    keyboardType='numeric'
                    value={code}
                    onChangeText={txt=>setCode(txt)}
                    // placeholder='Last Name'
            />
        </View>
        </ImageBackground>


</View>

            <View style={{backgroundColor:'#4F55D8',width:wp(50),alignSelf:'center',marginTop:hp(5),borderRadius:50}}>
    <Pressable onPress={handleCode}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>Verify</Text>
</Pressable>
</View>


        </View>
    </KeyboardAvoidingView>
        )

}

export default CodeOfReset