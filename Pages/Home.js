import React,{useEffect, useState} from 'react'
import {Pressable,View,StyleSheet,Text,ImageBackground, Image} from 'react-native';
import MenuIcon from './../assets/Menu.svg';
import HomeBg from './../assets/bgImg.png';
import CircleImg from './../assets/CircleImg.png';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ScrollView ,ZStack} from 'native-base';
import SalaryIcon from './../assets/Salary.svg'
import ExpectedIcon from './../assets/Expected.svg'
import SpendedIcon from './../assets/Spended.svg'
import BalanceIcon from './../assets/Balance.svg'
import Sidebar from './../Components/Sidebar.js';
import axios from 'axios';
import { dev } from '../Connections/endPoint';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import AlertComp from './../Components/AlertComp';
import { useIsFocused } from '@react-navigation/native';

const Home = () => {

    var isFocused = useIsFocused()
    const [open,setOpen] = useState(false) 
    const [monthly,setMonthly]= useState(0)
    const [monthlyExp,setMonthlyExp]= useState(0)
    const [salary,setSalary]= useState(0)
    const [currentBalance,setCurrentBalance]= useState(0)
    const [daily,setDaily]= useState(0)
    const [dailyExp,setDailyExp]= useState(0)
    const [type,setType] = useState('')
    const [show,setShow] = useState(false)
    
    var dataFetching = async()=>{
        try{
            setShow(true)
            setType('load')
            var startDate=moment().format('YYYY-MM-DD')
            var endDate=moment().subtract('month',1).format('YYYY-MM-DD')
           var userId = await AsyncStorage.getItem('userId');
        var {data}  = await axios.post(dev+'/user/currentBalance',{
            userId,
            startDate,
            endDate,
        })
        if(data.status==200){
            setType('success')
            setMonthly(data.message.monthlySpend);
            setDaily(data.message.dailySpend);
            setCurrentBalance(data.message.currentBalance);
            setSalary(data.message.salary);
            setMonthlyExp(data.message.monthlyExpected)
            setDailyExp(data.message.dailyExpected)
            // handleData
        }else{
            setType(data.message)
            console.log('error',data.status)
        }
        }catch(err){
            setType('catch')
            // error
            console.log(err.message)
        }
    }


    // if(isFocused && salary==0){
    //     console.log('ues')
    // }
    
    useEffect(()=>{
        dataFetching()
    },[])

    const handleMe=(anime)=>{
        setTimeout(()=>{
            anime.reset();
        },1000)
    anime.start();
    }

    const handler = ()=>{
        setShow(false)
    }

  return (
    <View
    style={{backgroundColor:'#fdfdfd',height:'100%'}}>
            <AlertComp  handler={handler} show={show} type={type} />
    <ZStack style={{height:'100%'}}>
    <ScrollView 
showsVerticalScrollIndicator={false}
height={hp(100)}
style={{width:wp(100),marginHorizontal:wp(0),marginTop:hp(0)}}>
    <ImageBackground source={HomeBg} style={{height:hp(25),width:wp(100),marginTop:hp(-5),marginBottom:hp(-2),paddingTop:hp(5),flexDirection:'row',transform:[{scaleY:0.8}]}}>
<View style={{width:wp(5),marginLeft:wp(5),marginTop:hp(2)}}>
<Pressable onPress={()=>setOpen(true)  }>
    <MenuIcon />
</Pressable>
</View>
<View style={{alignItems:'center',width:wp(80),height:'100%',justifyContent:'center'}}>
<Text style={{color:'#fff',fontSize:wp(8),letterSpacing:2}}>HISAAB</Text>
<View style={{width:wp(15),height:hp(0.5),backgroundColor:'#fff',marginTop:hp(2)}}></View>
</View>
</ImageBackground>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:hp(2),width:'90%',marginHorizontal:'5%'}}>
    <BalanceIcon />
    <View>
        <Text style={styles.genTag}>Current Balance</Text>
<Text style={styles.genAmt}>{currentBalance}Rs</Text>
    </View>

</View>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:hp(2),width:'90%',marginHorizontal:'5%'}}>
    <SalaryIcon />
    <View>
        <Text style={styles.genTag}>My Salary</Text>
<Text style={styles.genAmt}>{salary}Rs</Text>
    </View>

</View>
<View style={{width:wp(40),height:hp(0.3),marginVertical:hp(2),alignSelf:'center',backgroundColor:'#afafaf'}}></View>

<Text style={styles.title}>Monthly</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View style={{alignItems:'center'}}>
    <ImageBackground source={CircleImg} style={styles.expected}>
        <ExpectedIcon style={styles.expectedIcon} />
    </ImageBackground>
    <Text style={styles.tag}>Expected</Text>
    <Text style={styles.value}>{monthlyExp}Rs</Text>
</View>

<View style={{alignItems:'center'}}>
    <ImageBackground source={CircleImg} style={styles.expected}>
    <SpendedIcon style={styles.expectedIcon} />
    </ImageBackground>
<Text style={styles.tag}>Spended</Text>
    <Text style={styles.value}>{monthly}Rs</Text>
</View>

</View>

<Text style={styles.title}>Daily</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View style={{alignItems:'center'}}>
    <ImageBackground source={CircleImg} style={styles.expected}>
    <ExpectedIcon style={styles.expectedIcon} />
    </ImageBackground>
    <Text style={styles.tag}>Expected</Text>
    <Text style={styles.value}>{dailyExp}Rs</Text>
</View>

<View style={{alignItems:'center'}}>
    <ImageBackground source={CircleImg} style={styles.expected}>
    <SpendedIcon style={styles.expectedIcon} />
    </ImageBackground>
<Text style={styles.tag}>Spended</Text>
    <Text style={styles.value}>{daily}Rs</Text>
</View>

</View>


    </ScrollView>    
{
<Sidebar open={open} setOpen={setOpen} handleMe={handleMe} />
}

    </ZStack>
    

    </View>
    )
}

export default Home


const styles = StyleSheet.create({
    tag:{
        color:'#333333',
    },
    value:{
        color:'#4F55D8'
    },
    title:{
        color:'#4F55D8',
        textAlign:'center',
        fontSize:20,
        marginTop:hp(4)
    },
    genAmt:{
        textAlign:'right',
        color:'#696969',
        fontSize:wp(5),
        marginBottom:hp(2)
    },
    genTag:{
        color:'#4F55D8',
        textAlign:'right'
    },
    expected:{
        height:wp(40),
        width:wp(40),
        justifyContent:'center',
        alignItems:'center'
},
expectedIcon:{
    marginLeft:wp(-2),
    marginTop:wp(-2)
}
})