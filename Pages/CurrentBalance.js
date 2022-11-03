import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Header from '../Components/Header'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import axios from 'axios'
import { dev } from '../Connections/endPoint'

const CurrentBalance = () => {

    var [balanceData,setBalanceData] = useState({})
useEffect(()=>{
    fetching()


},[])

var fetching = async()=>{

    try{

        var data = await axios.get(dev+'/')
        if(data.status==200){
            setBalanceData(data.message)
        }else{
        // error else
        }

    }catch(err){
        // error catch
    }
    
}

    return (
        <View style={{height:hp(100),backgroundColor:'#fdfdfd'}}>
            <Header title='Current Balance' />
            <View style={{...styles.li,marginTop:hp(10)}}>
                <Text style={styles.txt}>Credits</Text>
                <Text style={styles.val}>+4,000</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.li}>
                <Text style={styles.txt}>Monthly Expense</Text>
                <Text style={styles.val}>-40,100</Text>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.li}>
                <Text style={styles.txt}>Daily Expense</Text>
                <Text style={styles.val}>-2,000</Text>
            </View>
            <View style={styles.hr}></View>
            {/* <View style={styles.li}>
                <Text style={styles.txt}>Events</Text>
                <Text style={styles.val}>+300</Text>
            </View> */}
            <View style={[styles.li,styles.total]}>
                <Text style={styles.txt}>Total</Text>
                <Text style={styles.val}>+500</Text>
            </View>

        </View>
  )
}

export default CurrentBalance

const styles = StyleSheet.create({
    li:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:wp(94),
        marginLeft:wp(3),
        marginTop:hp(3)
    },
    txt:{
        fontSize:wp(5),
        color:'#333333',
        // fontWeight:'700'
    },
    val:{
        fontSize:wp(5),
        color:'#333333',
        fontWeight:'700'

    },
    hr:{
        width:wp(94),
        height:wp(1),
        backgroundColor:'#f3f3f3',
        alignSelf:'center',
        borderRadius:50,
        marginTop:hp(3)
    },
    total:{
        position:'absolute',
        bottom:hp(4)
    }
})