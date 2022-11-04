import React,{useState} from 'react'
import Header from '../Components/Header'
import {View,Pressable,Text,ScrollView,StyleSheet} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import YearMonthDay from './../Components/YearMonthDay.js';
import ComparisonCard from './../Components/ComparisonCard.js';
import DownIcon from './../assets/Vector.svg'
import { Button } from 'native-base';
import moment from 'moment';
import DateInput from './../Components/DateInput.js';
import axios from 'axios';
import { dev } from '../Connections/endPoint';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExpenseCard from './../Components/ExpenseCard.js';
import AlertComp from './../Components/AlertComp';


const History = () => {

    var [focused3,setFocused3] = useState(false)

    const [showMonth, setShowMonth] = useState(false);
    const [showDay, setShowDay] = useState(false);
    const [date,setDate]=useState(moment().format('YYYY-MM-DD'))
    const [type,setType] = useState('')
    const [show,setShow] = useState(false)
    const [monthlyList,setMonthlyList] = useState([])
    const [dailyList,setDailyList] = useState([])
    




    var monthlyData={name:'Monthly Expense',expected:'40,000',spended:'33,720'};
    var dailyData={name:'Monthly Expense',expected:'1,000',spended:'600'};

    const handleSearch=async()=>{
        setShow(true)
        setType('load')
        try{
            var userId = await AsyncStorage.getItem('userId')
            var {data} = await axios.post(dev+'/daily/readDaily',{
                date:date,
                userId
            })
            if(data.status==200){
                console.log("successed 1 ",data.message)
                setDailyList(data.message)
                setShow(false)
        setShow(true)
        setType('load')
            }else{
                    console.log("error 2 ",data.message)
                    setType('error')
            }
            var StartDate =moment(date).subtract(1,'month').format('YYYY-MM-DD');
            var {data} = await axios.post(dev+'/daily/readMonthly',{
            userId,
            StartDate,
            EndDate:date
            })
            if(data.status==200){
                setShow(false)
                setMonthlyList(data.message)
                console.log("successed 2 ",data.message)

            }else{
                console.log("error 1 ",data.message)
                setType('error')

            }
        }catch(err){
                    console.log("catch ",err.message)
                    setType('catch')
        // error
        }

    }

    const handler = ()=>{
        setShow(false)
    }
return (
<ScrollView style={{backgroundColor:'#fdfdfd',height:hp(100),marginBottom:hp(0)}}>
            <AlertComp  handler={handler} show={show} type={type} />
        <Header title={'History'} />
        <DateInput getDate={setDate} focus={focused3} setFocus={setFocused3} 
        />
        <Button  onPress={handleSearch}>
            Search
        </Button>
<View style={{zIndex:-1}}>
        <ComparisonCard data={monthlyData} />
        <ComparisonCard data={dailyData} />
        <View style={styles.monthDetDiv}>
            <Text style={styles.txt}>Monthly Detials</Text>
            <DownIcon  onPress={()=>setShowMonth(!showMonth)} />
        </View>
        {
            showMonth &&
    monthlyList.map((v,i)=>(
<View key={i} >
<ExpenseCard editable={false} name={v.name} amt={v.amt} />
{/* <ComparisonCard data={v} /> */}
</View>
    ))
}
        <View style={styles.monthDetDiv}>
            <Text style={styles.txt}>Daily Detials</Text>
            <DownIcon  onPress={()=>setShowDay(!showDay)}/>
        </View>
        {
            showDay &&
        
dailyList.map((v,i)=>(
<View key={i} >
<ExpenseCard editable={false} name={v.name} amt={v.amt} />
{/* <ComparisonCard data={v} /> */}
</View>
    ))

}
</View>


</ScrollView>
    )
}

export default History

const styles = StyleSheet.create({
    monthDetDiv:{
        flexDirection:'row',
        width:'92%',
        // height:hp(5),
        marginTop:hp(2),
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:'4%',
        elevation:10,
        borderRadius:wp(2),
        paddingHorizontal:wp(2),
        paddingVertical:hp(1.5),
        backgroundColor:'#fff'
    },
    txt:{
        fontSize:wp(5),
        fontWeight:'600',
        color:'#333333'
    }
})