import React,{useState} from 'react'
import Header from '../Components/Header'
import {View,Text,ScrollView,StyleSheet, Pressable} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import InputComp from './../Components/InputComp.js';
import YearMonth from './../Components/YearMonth.js';
import DateInput from './../Components/DateInput.js';
import EventCardComp from './../Components/EventCardComp.js';
import DownInput from './../Components/DownInput.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { dev } from '../Connections/endPoint';
import EditModal from './../Components/EditModal.js';

const UpcomingEvents = () => {

    var [focused1,setFocused1] = useState(false)
    var [focused2,setFocused2] = useState(false)
    var [focused3,setFocused3] = useState(false)
    var [focused4,setFocused4] = useState(false)
    var [EventName,setEventName] = useState('')
    const [date,setDate]=useState(false)
    var [EventType,setEventType] = useState('Inc');
    const [EventTypeList,setEventTypeList] = useState([
        {label:'Increment',value:'Inc'},
        {label:'Decrement',value:'Dec'},
    ])
    var [EventAmt,setEventAmt] = useState(0)
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2022);
    const [open,setOpen]=useState(false)
    const [addOpen,setAddOpen] = useState(false);
    const [editAmt,setEditAmt] = useState(0)
    const [editId,setEditId] = useState('')
    const [editName,setEditName] = useState('')

    useEffect(()=>{
        fetching()
        },[])
    
        const fetching= async()=>{
            try{
            var userId = await AsyncStorage.getItem('userId') 
            var {data} = await axios.get(dev+'/event/addEvent/'+userId)
            if(data.status==200){
                // done
            }else{
                //error
            }
            }catch(err){
                // error
            }
        }

        
// add item handler
const handleAdd =async ()=>{
    try{
        
        var userId = await AsyncStorage.getItem('userId') 
        var {data} = await axios.post(dev+'/credit/addCredit',{
            userId,
            name:EventName,
            amount:EventAmt,
            type:EventType,
            date
        }) 
        if(data.status==200){
            // console.log("done")
        }else{
            // console.log("error")
        }
    }catch(err){

    }
}

// delete handler
const handleDelete=async(eventId)=>{
    try{
        var {data} = await axios.get(dev+'/credit/deleteCredit/'+eventId);
        if(data.status==200){
        // success
        }else{
        // error
        }
    }catch(err){
        // error
    }
}

// edit handler
const handleEdit = async(id,name,amt,date)=>{
    try{    
        setEditName(name);
        setEditAmt(amt);
        setEditId(id);
        setOpen(true);
        
}catch(err){
        // error
    }
    }

    var data=[
        {name:'Health Allowance',amt:'4,000', date :'04/Apr/2022',type:'Increment'},
        {name:'Birthday',amt:'300', date :'05/Apr/2022',type:'Increment'},
        {name:'Fuel Allowance',amt:'15,000', date :'06/Apr/2022',type:'Decrement'},
        {name:'Birthday',amt:'300', date :'05/Apr/2022',type:'Increment'},
        {name:'Fuel Allowance',amt:'15,000', date :'06/May/2022',type:'Increment'},
        {name:'Health Allowance',amt:'4,000', date :'04/Jul/2022',type:'Increment'},
        {name:'Fuel Allowance',amt:'15,000', date :'06/Aug/2022',type:'Decrement'},
    ]

// handleEditHandler
const handleEditHandler=async()=>{
    try{
        var {data} = await axios.post(dev+'/event/editEvent',{
            id:editId,
            name:editName,
            amt:editAmt,
        })
    }catch(err){
        // error
    }
}
    
    return (
    <View style={styles.creditMain}>
        <Header title={'Upcoming Events'} />
        <EditModal setEditAmt={setEditAmt} editAmt={editAmt}
        setEditName={setEditName} editName={editName}
        handleEditHandler={handleEditHandler}
        setOpen={setOpen} open={open} 
        />
        <YearMonth   month={month} setMonth={setMonth} year={year} setYear={setYear} />
        <Pressable onPress={()=>setAddOpen(!addOpen)}>
        <View style={styles.addNew}>
            <Text style={styles.addNewTxt}>{addOpen ? 'Close'  : 'Add New +'}</Text>
        </View>
        </Pressable>{
    addOpen &&
        <>
        <Text style={styles.extraTxt}>Event Name</Text>
        <InputComp placeholder={'Insentives'} focus={focused1} setFocus={setFocused1} val={EventName} setVal={setEventName}  />

        <Text style={styles.extraTxt}>Event Type</Text>
        <DownInput open={focused4} setOpen={setFocused4} items={EventTypeList} setItems={setEventTypeList} val={EventType} setVal={setEventType}  />

<View style={{zIndex:-1}}>
        <Text style={styles.extraTxt}>Event Amount</Text>
        <InputComp placeholder={'0'} focus={focused2} setFocus={setFocused2} val={EventAmt} setVal={setEventAmt}  />
</View>

        <Text style={styles.extraTxt}>Event Date</Text>
        <DateInput getDate={setDate} focus={focused3} setFocus={setFocused3} />

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
    data.map((v,i)=>(
<View key={i} >
<EventCardComp handleEdit={handleEdit} handleDelete={handleDelete} id={i} name={v.name} amt={v.amt} date={v.date} type={v.type} />
</View>
    ))
}

    </ScrollView>

    </View>
    )
}

export default UpcomingEvents

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