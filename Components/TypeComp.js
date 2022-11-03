import React from 'react'
import {View,Text,Pressable,StyleSheet, Button} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const TypeComp = ({setType,type}) => {

    return (
<View style={styles.typeCompMain}>
<Pressable style={{width:'50%'}}
onPress={()=>setType('expected')}
>
        <View style={type=='expected' ? styles.expBtnMain : styles.speBtnMain}>
            <Text style={type=='expected' ? styles.ExpBtn : styles.SpeBtn}>Expected</Text>
        </View>
        </Pressable>
        <Pressable style={{width:'50%'}}
onPress={()=>setType('spended')}
>
        <View style={type=='expected' ? styles.speBtnMain : styles.expBtnMain }>
            <Text style={type=='expected' ? styles.SpeBtn : styles.ExpBtn}>Spended</Text>
        </View>
        </Pressable>

</View>
    )
}

export default TypeComp


const styles = StyleSheet.create({
    typeCompMain:{
        width:'94%',
        marginLeft:'3%',
        flexDirection:'row',
        marginTop:hp(1)
    },
    expBtnMain:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        elevation:1,
        backgroundColor:'#fff',
        borderRadius:5,
        paddingVertical:hp(1)
    },
    ExpBtn:{
        color:'#4F55D8'
    },
    SpeBtn:{
        color:'#fff'
    },
    speBtnMain:{
        backgroundColor:'#4F55D8',
        elevation:1,
        width:'100%',
        justifyContent:'center',
        borderRadius:5,
        paddingVertical:hp(1),
        alignItems:'center'
    }
})