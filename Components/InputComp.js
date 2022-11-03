import React from 'react'
import {View,ImageBackground,Text,TextInput} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import BlackInput from './../assets/beforeInput.png'
import WhiteInput from './../assets/blueInput.png'

const InputComp = ({placeholder,val,setVal,setFocus,focus,keyboardTypeNumber}) => {

    return (
    <View>
            <ImageBackground source={focus ? WhiteInput : BlackInput} style={{flexDirection:'row',alignItems:'center',width:'100%',borderRadius:4,alignSelf:'center',marginTop:hp(1)}}>

        <View style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',color:'#333333',width:'80%',alignSelf:'center'}} 
            placeholder={placeholder}
            value={val}
            keyboardType={keyboardTypeNumber ? 'number-pad' : 'email-address'}
            onChangeText={txt=>setVal(txt)}
            onFocus={()=>setFocus(true)}
            onBlur={()=>setFocus(false)}
            placeholderTextColor={'#696969'}
            />
        </View>

    </ImageBackground>
    </View>
  )
}

export default InputComp