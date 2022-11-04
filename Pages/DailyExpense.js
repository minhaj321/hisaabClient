import React,{useState,useEffect} from 'react'
import Header from '../Components/Header'
import {View,Text,ScrollView,StyleSheet, Pressable, Alert} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import InputComp from './../Components/InputComp.js';
import ExpenseCard from './../Components/ExpenseCard.js';
import TempComp from './../Components/TempComp.js';
import axios from 'axios';
import { dev } from '../Connections/endPoint';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditModal from './../Components/EditModal.js';
import moment from 'moment';
import AlertComp from './../Components/AlertComp';

const DailyExpense = () => {

    var [focused1,setFocused1] = useState(false)
    var [focused2,setFocused2] = useState(false)
    var [focused3,setFocused3] = useState(false)
    var [creditName,setCreditName] = useState('')
    var [creditAmt,setCreditAmt] = useState(0)
    const [addOpen,setAddOpen] = useState(false);
    const [type,setType] = useState('expected')
    const [dailyData,setDailyData] = useState([])
    const [updatingId,setUpdatingId] = useState('');
    const [editName,setEditName] = useState('');
    const [updatingAmt,setUpdatingAmt] = useState(0);
    const [prevAmt,setPrevAmt] = useState(0);
    const [open,setOpen] = useState(false) 
    const [alertType,setAlertType] = useState('')
    const [show,setShow] = useState(false)

    useEffect(()=>{
        fetching();
    },[])

    const fetching =async()=>{
        try{
            // setShow(true)
            setAlertType('load')
            var userId =await AsyncStorage.getItem('userId');
            console.log(userId)
            var {data} = await axios.post(dev+'/daily/readDaily',{
                userId,
                date:moment().format('YYYY-MM-DD')
            })
            if(data.status==200){
            setAlertType('success')
            setShow(false)
                setDailyData(data.message)
            }else{
                setAlertType('error')
            console.log('error ',data)
            }
        }catch(err){
            setAlertType('catch')
            console.log('catch ',err.message)
        }
    }

    const handleExpected=async()=>{
        try{
            setShow(true)
            setAlertType('load')
        if(creditName=='' || creditAmt==0){
            Alert.alert('Fill form first')
        }else{
            var userId = await AsyncStorage.getItem('userId');
            var {data} = await axios.post(dev+'/daily/AddDailyExpected',{
                userId,
                date:moment().format('YYYY-MM-DD'),
                name:creditName,
                amount:creditAmt
            })
            if(data.status==200){
                // 
            setShow(false)
            fetching()
            }else{
            setAlertType('error')
            console.log(data.message)
            }
        }
    }catch(err){
            setAlertType('catch')
            console.log('catch ',err.message)
    }

    }


    const handleDelete=async(id,amount)=>{
        try{
            setShow(true)
            setAlertType('load')
            var {data} =  await axios.post(dev+'/daily/DeleteDaily',{
                id,amount
            })
            if(data.status==200){
            console.log('success  ',data.message)
            setShow(false)
            fetching();
            }else{
            setAlertType('error')
            console.log('error  ',data.message)
            }
        }catch(err){
            // error
            setAlertType('catch')
            console.log('error catch ',err.message)
        }
    }

    const  editSpendHandler=async()=>{
        try{
            setShow(true)
            setAlertType('load')
            var {data} =  await axios.post(dev+'/daily/EditDailySpendeded',{
                id:updatingId,
                prevAmt:prevAmt,
                nextAmt:updatingAmt,
                name:editName
            })
            if(data.status==200){
            setShow(false)
            fetching()
                console.log('success ',data.message)
            }else{
                // error
            setAlertType('error')
            console.log('error ',data.message)
            }
        }catch(err){
            // error
            setAlertType('catch')
            console.log('error catch ',err.message)
        }
    }

    
    const  editExpecteddHandler=async()=>{
        try{
            setShow(true)
            setAlertType('load')
            var {data} =  await axios.post(dev+'/daily/EditDailyExpected',{
                id:updatingId,
                amount:updatingAmt,
                name:editName
            })
            if(data.status==200){
            setShow(false)
            fetching()
                console.log('success ',data.message)
            }else{
                // error
            setAlertType('error')
            console.log('error ',data.message)
            }
        }catch(err){
            // error
            setAlertType('catch')
            console.log('error catch ',err.message)
        }
    }

    const handleEditHandler=()=>{
        if(type=='expected'){
            editExpecteddHandler()
        }else{
            editSpendHandler()
        }
    }

    const handleEdit=(id,name,amt,editType)=>{

        setType(editType);
        setUpdatingId(id)
        setEditName(name)
        setPrevAmt(amt)
        setUpdatingAmt(amt)
        setOpen(true)
    }

    const handler = ()=>{
        setShow(false)
    }

    return (
    <View style={styles.creditMain}>
            <AlertComp  handler={handler} show={show} type={alertType} />
        <Header title={'Daily Expence'} />
        <EditModal setEditAmt={setUpdatingAmt} editAmt={updatingAmt}
        setEditName={setEditName} editName={editName}
        handleEditHandler={handleEditHandler}
        setOpen={setOpen} open={open} 
        />
        <Pressable onPress={()=>setAddOpen(!addOpen)}>
        <View style={styles.addNew}>
            <Text style={styles.addNewTxt}>{addOpen ? 'Close'  : 'Add New +'}</Text>
        </View>
        </Pressable>
        {
    addOpen &&
        <>
        <Text style={styles.extraTxt}>Item Name</Text>
        <InputComp placeholder={'Insentives'} focus={focused1} setFocus={setFocused1} val={creditName} setVal={setCreditName}  />

        <Text style={styles.extraTxt}>Item Amount</Text>
        <InputComp keyboardTypeNumber={true} placeholder={'0'} focus={focused2} setFocus={setFocused2} val={creditAmt} setVal={setCreditAmt}  />
        <Pressable style={{width:'100%',height:'100%'}} onPress={()=>{
                handleExpected()        
        }} >
            <View style={styles.addToListBtn}>
                <Text style={styles.addListTxt}>Add to list</Text>
            </View>
        </Pressable>
        <View style={{width:wp(30),height:hp(0.5),backgroundColor:'#afafaf',alignSelf:'center',marginTop:hp(2)}}></View>
        </>
    }
    <ScrollView style={{maxHeight:hp(100),marginTop:hp(1),backgroundColor:'#fff'}}>



{
    dailyData.map((v,i)=>(
<View key={i} >
<ExpenseCard id={v._id} handleEdit={handleEdit} handleDelete={handleDelete} name={v.name} amt={v.amt} editable={true} />
</View>
    ))
}

    </ScrollView>

    </View>
    )
}

export default DailyExpense

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
    },
    compareBtn:{
        width:'94%',
        backgroundColor:'black',
        marginLeft:'3%',
        borderRadius:5,
        alignItems:'center',
        paddingVertical:hp(1.5)
    },
    compareBtnTxt:{
        color:'#fff'
    },
    addToListBtn:{
        backgroundColor:'#4F55D8',
        width:'94%',
        marginLeft:'3%',
        borderRadius:5,
        alignItems:'center',
        paddingVertical:hp(1.5)
    },
    addListTxt:{
        color:'#fff'
    }
})