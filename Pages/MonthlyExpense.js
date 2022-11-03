import React,{useState} from 'react'
import Header from '../Components/Header'
import {View,Text,ScrollView,StyleSheet, Pressable} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import InputComp from './../Components/InputComp.js';
import YearMonth from './../Components/YearMonth.js';
import DateInput from './../Components/DateInput.js';
import ExpenseCard from './../Components/ExpenseCard.js';
import TypeComp from './../Components/TypeComp.js';
import TempComp from './../Components/TempComp.js';


const MonthlyExpense = () => {

    var [focused1,setFocused1] = useState(false)
    var [focused2,setFocused2] = useState(false)
    var [focused3,setFocused3] = useState(false)
    var [creditName,setCreditName] = useState('')
    var [creditAmt,setCreditAmt] = useState(0)
    var [tempList,setTempList]=useState([])
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2022);
    const [open,setOpen]=useState(false)
    const [addOpen,setAddOpen] = useState(false);

    var data=[
        {name:'Health Allowance',amt:'4,000'},
        {name:'Birthday',amt:'300'},
        {name:'Fuel Allowance',amt:'15,000'},
        {name:'Birthday',amt:'300'},
        {name:'Fuel Allowance',amt:'15,000'},
        {name:'Health Allowance',amt:'4,000'},
        {name:'Fuel Allowance',amt:'15,000'},
    ]


    const handleAddToList=()=>{
        if(creditName=='' || creditAmt==0){
            Alert.alert('Fill form first')
        }else{
            setTempList([...tempList,{name:creditName,amt:creditAmt}])
        }
    }

    return (
    <View style={styles.creditMain}>
        <Header title={'Monthly Expence'} />
        <YearMonth   month={month} setMonth={setMonth} year={year} setYear={setYear} />
        <Pressable>
        <View style={styles.compareBtn}>
            <Text style={styles.compareBtnTxt}>Compare</Text>
        </View>
        </Pressable>
        <TypeComp/>

        <Pressable onPress={()=>setAddOpen(!addOpen)}>
        <View style={styles.addNew}>
            <Text style={styles.addNewTxt}>{addOpen ? 'Close'  : 'Add New +'}</Text>
        </View>
        </Pressable>{
    addOpen &&
        <>
        <Text style={styles.extraTxt}>Item Name</Text>
        <InputComp placeholder={'Insentives'} focus={focused1} setFocus={setFocused1} val={creditName} setVal={setCreditName}  />

        <Text style={styles.extraTxt}>Item Amount</Text>
        <InputComp placeholder={'0'} focus={focused2} setFocus={setFocused2} val={creditAmt} setVal={setCreditAmt}  />
        <Pressable style={{width:'100%',height:'100%'}} onPress={()=>handleAddToList()} >
            <View style={styles.addToListBtn}>
                <Text style={styles.addListTxt}>Add to list</Text>
            </View>
        </Pressable>
        <View style={{width:wp(30),height:hp(0.5),backgroundColor:'#afafaf',alignSelf:'center',marginTop:hp(2)}}></View>
        </>
    }
    <ScrollView style={{maxHeight:hp(100),marginTop:hp(1),backgroundColor:'#fff'}}>
    {
    (tempList.length>0) &&
      tempList.map((v,i)=>{
        <>
         <TempComp item={v} />
        </>
        })
}

{
    (tempList.length>0) &&
    <Pressable>
    <View style={styles.addToListBtn}>
        <Text style={styles.addListTxt}>Save</Text>
    </View>
    </Pressable>

}
{
    data.map((v,i)=>(
<View key={i} >
<ExpenseCard name={v.name} amt={v.amt} />
</View>
    ))
}

    </ScrollView>

    </View>
    )
}

export default MonthlyExpense

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