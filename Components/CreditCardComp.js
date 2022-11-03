import React from 'react';
import {View,Image,ImageBackground,Text,StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CardBg from './../assets/Cardbg3.png';
import DelIcon from './../assets/DelIcon.svg'
import EditIcon from './../assets/editIcon.svg'

const CreditCardComp = ({name,amt,date,handleDelete,id,handleEdit})=>{


    return(
<View
style={{width:'94%',marginHorizontal:'3%',backgroundColor:'#fdfdfd',borderRadius:10,height:hp(13),flexDirection:'row',elevation:hp(1),marginTop:hp(2)}}
>
    <View style={styles.creditCardTxtDiv}>
<Text style={styles.creditName}>{name}</Text>
<Text style={styles.creditAmt}>{amt} Rs</Text>
<Text style={styles.creditDate}>{date.split("T")[0]}</Text>
    </View>

    <View style={styles.secondDiv}>
    <View style={[styles.secondSubDiv,styles.delDiv]}>
        <EditIcon onPress={()=>handleEdit(id,name,amt,date)} />
        </View>
        <View style={[styles.secondSubDiv,styles.editDiv]}>
        <DelIcon onPress={()=>handleDelete(id)} />
        </View>
    </View>

</View>
    )
}

export default CreditCardComp

const styles = StyleSheet.create({
    creditCardTxtDiv:{
        
        // marginTop:hp(1.5),
        flexDirection:'column',
        justifyContent:'space-evenly',
        height:'100%',
        width:'70%',
        paddingLeft:'3%',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    secondDiv:{
        width:'30%',
        height:'100%',
        backgroundColor:"#4F55D8",
        borderTopRightRadius:10,
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomRightRadius:10
    }
    ,
    creditAmt:{
        color:'#333333',
        fontSize:wp(5),
        fontWeight:'600'
    },
    creditDate:{
        color:'#afafaf',
        fontSize:wp(4)
    },
    creditName:{
        color:'#4F55D8',
        fontSize:wp(5)
    },
    secondSubDiv:{
        width:wp(12),
        height:wp(12),
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    delDiv:{
        marginLeft:wp(1),
        marginTop:wp(1),
        alignSelf:'baseline'
    },
    editDiv:{
    marginRight:wp(1),
    marginBottom:wp(1),
    alignSelf:'flex-end'       
    }
})