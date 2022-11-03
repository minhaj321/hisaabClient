import React from 'react'
import {View,Text} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackIcon from './../assets/BackIcon.svg';
import { useNavigation } from '@react-navigation/native';

const Header = ({title}) => {

    var navigation  = useNavigation()

  return (
    <View style={{backgroundColor:'#fdfdfd'}}>
<View style={{flexDirection:'row',width:wp(96),marginHorizontal:wp(3),marginTop:hp(3)}}>
<View style={{width:wp(10),justifyContent:'center'}}>
    <BackIcon onPress={()=>navigation.navigate('Home')} />
</View>
<View style={{width:wp(80),justifyContent:'center'}}>
    <Text style={{color:'#4F55D8',textAlign:'center',fontSize:wp(8),fontWeight:'700'}}>{title}</Text>
</View>
</View>
</View>
    )
}

export default Header