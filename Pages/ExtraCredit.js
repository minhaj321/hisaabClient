import React,{useState,useEffect} from 'react'
import Header from '../Components/Header'
import {View,Text,ScrollView,StyleSheet, Pressable} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import InputComp from './../Components/InputComp.js';
import YearMonth from './../Components/YearMonth.js';
import DateInput from './../Components/DateInput.js';
import CreditCardComp from './../Components/CreditCardComp.js';
import axios from 'axios';
import { dev } from '../Connections/endPoint';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditModal from './../Components/EditModal.js';
import moment from 'moment';

const ExtraCredit = () => {

    var [focused1,setFocused1] = useState(false)
    var [focused2,setFocused2] = useState(false)
    var [focused3,setFocused3] = useState(false)
    var [creditName,setCreditName] = useState('')
    var [creditAmt,setCreditAmt] = useState(0)
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2022);
    const [date,setDate]=useState(moment().format('YYYY-MM-DD'))
    const [addOpen,setAddOpen] = useState(false);
    const [open,setOpen] = useState(false)
    const [editAmt,setEditAmt] = useState(0)
    const [prevAmt,setPrevAmt] = useState(0)
    const [editId,setEditId] = useState('')
    const [editName,setEditName] = useState('')
    const [credits,setCredits] = useState([])
    
    useEffect(()=>{
    fetching()
    },[])

    const fetching= async()=>{
        try{
        var userId = await AsyncStorage.getItem('userId') 
        var {data} = await axios.get(dev+'/credit/readCredit/'+userId);
        if(data.status==200){
            // get data
            // console.log('success=',data)
            setCredits(data.message)
        }else{
            console.log('error=',data)
            // else error
        }
        }catch(err){
            console.log('catch=',err.message)
            // error
        }
    }

    var lst=[
        {name:'Health Allowance',amt:'4,000', date :'04/Apr/2022'},
        {name:'Birthday',amt:'300', date :'05/Apr/2022'},
        {name:'Fuel Allowance',amt:'15,000', date :'06/Apr/2022'},
        {name:'Birthday',amt:'300', date :'05/Apr/2022'},
        {name:'Fuel Allowance',amt:'15,000', date :'06/May/2022'},
        {name:'Health Allowance',amt:'4,000', date :'04/Jul/2022'},
        {name:'Fuel Allowance',amt:'15,000', date :'06/Aug/2022'},
    ]

// add item handler
const handleAdd =async ()=>{
    try{
        var userId = await AsyncStorage.getItem('userId') 
        console.log(date)
        var {data} = await axios.post(dev+'/credit/addCredit',{
            userId,
            name:creditName,
            amount:Number(creditAmt),
            date
        }) 
        if(data.status==200){
            console.log("done")
            fetching()
        }else{
            console.log("error ",data)
        }
    }catch(err){
        console.log("error ",err.message)
    }
}

// delete handler
const handleDelete=async(eventId)=>{
    try{
        var {data} = await axios.get(dev+'/credit/deleteCredit/'+eventId);
        if(data.status==200){
        // success
        console.log('deleted item')
        fetching();
        }else{
        console.log('error')
        // error
        }
    }catch(err){
        console.log('catch ',err.message)
        // error
    }
}

// edit handler
const handleEdit = async(id,name,amt,date)=>{
    try{
        setEditName(name);
        setEditAmt(amt);
        setPrevAmt(amt);
        setEditId(id);
        setOpen(true);
        
}catch(err){
        // error
    }
    }

// handleEditHandler
const handleEditHandler=async()=>{
    try{
        var {data} = await axios.post(dev+'/credit/editCredit',{
            id:editId,
            name:editName,
            nextAmt:Number(editAmt),
            prevAmt:Number(prevAmt),
        })
        if(data.status==200){
            console.log('editted,',data)
            fetching()
        }else{
        console.log('err,',data)
        }
    }catch(err){
        // error
        console.log('err,',err.message)
    }
}

    return (
    <View style={styles.creditMain}>
        <Header title={'Extra Credits'} />
        <EditModal setEditAmt={setEditAmt} editAmt={editAmt}
        setEditName={setEditName} editName={editName}
        handleEditHandler={handleEditHandler}
        setOpen={setOpen} open={open} 
        />
        {/* <YearMonth   month={month} setMonth={setMonth} year={year} setYear={setYear} /> */}
        <Pressable onPress={()=>setAddOpen(!addOpen)}>
        <View style={styles.addNew}>
            <Text style={styles.addNewTxt}>{addOpen ? 'Close'  : 'Add New +'}</Text>
        </View>
        </Pressable>{
    addOpen &&
        <>
        <Text style={styles.extraTxt}>Credit Name</Text>
        <InputComp placeholder={'Insentives'} focus={focused1} setFocus={setFocused1} val={creditName} setVal={setCreditName}  />

        <Text style={styles.extraTxt}>Credit Amount</Text>
        <InputComp keyboardTypeNumber={true} placeholder={'0'} focus={focused2} setFocus={setFocused2} val={creditAmt} setVal={setCreditAmt}  />

        <Text style={styles.extraTxt}>Credit Date</Text>
        <DateInput getDate={setDate} focus={focused3} setFocus={setFocused3} 
        />

            <Pressable style={{width:wp(40),marginLeft:wp(30),display:'flex',justifyContent:'center',height:hp(5),
        backgroundColor:'#4F55D8',alignItems:'center',marginVertical:hp(2),borderRadius:wp(3)}}
        onPress={handleAdd}
        >
                <Text style={{color:'#fff'}}>
                Add
                </Text>
            </Pressable>
            <View style={{width:wp(30),height:hp(0.5),backgroundColor:'#afafaf',alignSelf:'center',marginTop:hp(2)}}></View>

        </>
    }
    <ScrollView style={{maxHeight:hp(100),marginTop:hp(1),backgroundColor:'#fff'}}>
{
    credits.map((v,i)=>(
<View key={i} >
<CreditCardComp handleEdit={handleEdit} handleDelete={handleDelete} id={v._id} name={v.name} amt={v.amount} date={v.date} />
</View>
    ))
}

    </ScrollView>

    </View>
    )
}

export default ExtraCredit

const styles = StyleSheet.create({
    creditMain:{
        height:'100%',
        backgroundColor:'#fdfdfd'
    },
    extraTxt:{
        marginHorizontal:'3%',
        color:'#333333',
        marginTop:hp(1),
        fontSize:wp(4)
    },
    addNew:{
        alignSelf:'flex-end',
        backgroundColor:'#4F55D8',
        justifyContent:'center',
        alignItems:'center',
        width:'30%',
        marginRight:wp(3),
        marginTop:hp(1),
        paddingVertical:hp(1),
        borderRadius:5
    },
    addNewTxt:{
        color:'#fdfdfd',
    }
})