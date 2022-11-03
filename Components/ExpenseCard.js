import React from 'react';
import {View,Image,ImageBackground,Text,StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CardBg from './../assets/Cardbg3.png';
import DelIcon from './../assets/DelIcon.svg'
import EditIcon from './../assets/editIcon.svg'

const ExpenseCard = ({name,handleEdit,id,amt,editable,handleDelete})=>{

    return(
<View
style={{width:'94%',marginHorizontal:'3%',paddingTop:hp(1),backgroundColor:'#fdfdfd',borderRadius:10,elevation:hp(1),marginTop:hp(2)}}
>
<Text style={styles.EventName}>{name}</Text>
{
    editable &&
<DelIcon style={styles.del} fontSize={5} 
onPress={()=>handleDelete(id,amt.spe)}
/>
}

<View style={styles.cardSubParent}>

    <View style={styles.creditCardTxtDiv}>
<View style={styles.row}>
<Text style={styles.EventAmt}>Expected</Text>
{
    editable &&
        <EditIcon style={styles.edit} onPress={()=>handleEdit(id,name,amt.spe,'expected')}/>
}
</View>
<Text style={styles.EventAmt}>{amt.exp} Rs</Text>
    </View>

    <View style={styles.secondDiv}>
        <View style={styles.row}>
<Text style={styles.EventAmt}>Spended</Text>
{
    editable &&
        <EditIcon style={styles.edit} onPress={()=>handleEdit(id,name,amt.spe,'Spended')} />
}
        </View>
<Text style={styles.EventAmt}>{amt.spe} Rs</Text>
    </View>

</View>


</View>
    )
}

export default ExpenseCard

const styles = StyleSheet.create({
    creditCardTxtDiv:{
        // marginTop:hp(1.5),
        flexDirection:'column',
        alignItems:'center',
        width:'50%',
        borderTopLeftRadius:10,
        paddingHorizontal:'3%',
        borderBottomLeftRadius:10,
    },
    del:{
        position:'absolute',
        right:5,
        top:hp(1),
    },
    row:{
        flexDirection:'row',
        justifyContent:'center'

    },
    cardSubParent:{
        flexDirection:'row',
        marginVertical:hp(1),
        justifyContent:'center'
    },
    edit:{
        marginLeft:wp(1),
        maxHeight:wp(5),
        maxWidth:wp(5),
        marginTop:hp(0.3)
    },
    secondDiv:{
        width:'50%',
        // backgroundColor:"#4F55D8",
        borderTopRightRadius:10,
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:10
    }
    ,
    EventAmt:{
        color:'#333333',
        // textAlign:'left',
        fontSize:wp(4.5),
        fontWeight:'600',
        marginTop:hp(0.2)
    },
    EventName:{
        color:'#4F55D8',
        fontSize:wp(4.5),
        textAlign:'center'
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