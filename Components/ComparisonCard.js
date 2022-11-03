import React from 'react';
import {View,Image,ImageBackground,Text,StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CardBg from './../assets/Cardbg3.png';
import DelIcon from './../assets/DelIcon.svg'

const ComparisonCard = ({data})=>{

    return(
<View
style={{width:'94%',marginHorizontal:'3%',backgroundColor:'#fdfdfd',borderRadius:10,height:hp(11),flexDirection:'row',elevation:hp(1),marginTop:hp(2)}}
>
    <View style={styles.creditCardTxtDiv}>
        <Text style={{color:'#4F55D8',fontSize:wp(5)}}>{data.name}</Text>
        <View style={styles.compAmtDiv}>
            <View>
                <Text style={styles.compTitle}>Expected</Text>
                <Text style={styles.compAmt}>{data.expected}</Text>
            </View>
            <View style={{alignItems:'flex-end'}}>
                <Text style={styles.compTitle}>Spended</Text>
                <Text style={styles.compAmt}>{data.spended}</Text>
            </View>
        </View>
    </View>

    <View style={styles.secondDiv}>
        {/* <View style={styles.secondSubDiv}>
        </View> */}
    </View>

</View>
    )
}

export default ComparisonCard

const styles = StyleSheet.create({
    creditCardTxtDiv:{
        // marginTop:hp(1.5),
        flexDirection:'column',
        justifyContent:'space-around',
        height:'100%',
        width:'75%',
        borderTopLeftRadius:10,
        paddingHorizontal:'3%',
        borderBottomLeftRadius:10
    },
    secondDiv:{
        width:'25%',
        height:'100%',
        backgroundColor:"#4F55D8",
        borderTopRightRadius:10,
        justifyContent:'center',
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
    EventName:{
        color:'#4F55D8',
        fontSize:wp(4.5)
    },
    secondSubDiv:{
        width:wp(12),
        height:wp(12),
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    compAmtDiv:{
        flexDirection:'row',
        justifyContent:'space-between'
        // justifyContent:'space-around'

},
compAmt:{
    color:'#333333',
    fontSize:wp(4.5)
},
compTitle:{
    color:'#333333',
    fontSize:wp(4.5)
}
})