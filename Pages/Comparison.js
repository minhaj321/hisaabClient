import React,{useState} from 'react'
import Header from '../Components/Header'
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import YearMonth from './../Components/YearMonth.js';
import ComparisonCard from './../Components/ComparisonCard.js';


const Comparison = () => {

    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2022);

    var data=[
        {name:'Transport',expected:'4,000',spended:'3,720'},
        {name:'Flour',expected:'15,000',spended:'12,100'},
        {name:'Rice',expected:'10,000',spended:'8,000'},
        {name:'Refreshments',expected:'6,000',spended:'6,040'},
        {name:'Refreshments',expected:'6,000',spended:'6,040'},
        {name:'Refreshments',expected:'6,000',spended:'6,040'},
        {name:'Refreshments',expected:'6,000',spended:'6,040'},
    ]

    return (
    <View style={styles.creditMain}>
        <Header title={'Monthly Comparison'} />
        <YearMonth   month={month} setMonth={setMonth} year={year} setYear={setYear} />
    <ScrollView style={{maxHeight:hp(100),marginTop:hp(1),backgroundColor:'#fff'}}>
{
    data.map((v,i)=>(
<View key={i} >
<ComparisonCard data={v} />
</View>
    ))
}

    </ScrollView>

    </View>
    )
}

export default Comparison

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