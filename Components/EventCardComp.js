import React from 'react';
import {View,Image,ImageBackground,Text,StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CardBg from './../assets/Cardbg3.png';
import DelIcon from './../assets/DelIcon.svg'
import EditIcon from './../assets/editIcon.svg'

const EventCardComp = ({id,name,amt,date,type,handleDelete,handleEdit})=>{


    return(
<View
style={{width:'94%',marginHorizontal:'3%',backgroundColor:'#fdfdfd',borderRadius:10,height:hp(11),flexDirection:'row',elevation:hp(1),marginTop:hp(2)}}
>
    <View style={styles.creditCardTxtDiv}>
        <View style={styles.eventTxtFirstDiv}>
<Text style={styles.EventName}>{name}</Text>
<Text style={styles.eventType}>{type}</Text>
        </View>
        <View style={styles.eventTxtFirstDiv}>
<Text style={styles.EventAmt}>{amt}</Text>
<Text style={styles.EventDate}>{date}</Text>
</View>
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

export default EventCardComp

const styles = StyleSheet.create({
    creditCardTxtDiv:{
        // marginTop:hp(1.5),
        flexDirection:'column',
        justifyContent:'space-around',
        height:'100%',
        width:'75%',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    eventTxtFirstDiv:{
        paddingHorizontal:'3%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    secondDiv:{
        width:'25%',
        height:'100%',
        backgroundColor:"#4F55D8",
        borderTopRightRadius:10,
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomRightRadius:10
    }
    ,
    EventAmt:{
        color:'#333333',
        textAlign:'left',
        fontSize:wp(4),
        fontWeight:'600'
    },
    EventDate:{
        color:'#afafaf',
        fontSize:wp(4)
    },
    EventName:{
        color:'#4F55D8',
        fontSize:wp(4.5)
    },
    eventType:{
        color:'#333333',
        fontSize:wp(4),
        fontWeight:'600'
    },
    secondSubDiv:{
        width:wp(10),
        height:wp(10),
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