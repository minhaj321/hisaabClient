import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownIcon from './../assets/dropdownIcon.svg'

const YearMonthDay = ({day,setDay,year,month,setYear,setMonth}) => {

    var [open,setOpen] = useState(false)
    var [open2,setOpen2] = useState(false)
    var [open3,setOpen3] = useState(false)
    const [months, setMonths] = useState([
        {label: 'January', value: 0},
        {label: 'Febuary', value: 1},
        {label: 'March', value: 2},
        {label: 'April', value: 3},
        {label: 'May', value: 4},
        {label: 'June', value: 5},
        {label: 'July', value: 6},
        {label: 'August', value: 7},
        {label: 'September', value: 8},
        {label: 'Octuber', value: 9},
        {label: 'November', value: 10},
        {label: 'December', value: 11},
        ]);

    const [years,setYears] = useState([
        {label: '2022', value: 2022},
        {label: '2023', value: 2023},
        {label: '2024', value: 2024},
        ]);

        const [days,setDays] = useState([
            {label: '1', value: 1},
            {label: '2', value: 2},
            {label: '3', value: 3},
            {label: '4', value: 4},
            {label: '5', value: 5},
            {label: '6', value: 6},
            {label: '7', value: 7},
            {label: '8', value: 8},
            {label: '9', value: 9},
            {label: '10', value: 10},
            {label: '11', value: 11},
            {label: '12', value: 12},
            {label: '13', value: 13},
            {label: '14', value: 14},
            {label: '15', value: 15},
            {label: '16', value: 16},
            {label: '17', value: 17},
            {label: '18', value: 18},
            {label: '19', value: 19},
            {label: '20', value: 20},
            {label: '21', value: 21},
            {label: '22', value: 22},
            {label: '23', value: 23},
            {label: '24', value: 24},
            {label: '25', value: 25},
            {label: '26', value: 26},
            {label: '27', value: 27},
            {label: '28', value: 28},
            {label: '29', value: 29},
            {label: '30', value: 30},
            {label: '31', value: 31},
            ]);
    

  return (
    <View style={{flexDirection:'row',marginTop:hp(1)}}>

<DropDownPicker
      open={open3}
      placeholderStyle={{color:'#afafaf'}}
    //   placeholder={placeholder}
      containerStyle={{
          borderWidth:0,
          borderColor:'transparent',
          backgroundColor:'transparent',
          width:'20%',
          marginLeft:'3%'
      }}
      textStyle={{
        fontSize:wp(4)
      }}
      style={{
          borderWidth:0,
          backgroundColor:'transparent',
      }}
      searchTextInputProps={
        {
            keyboardType:'numeric'
        }
      }
      dropDownDirection={'BOTTOM'}
      searchable={true}
      searchPlaceholder={'day'}
      searchContainerStyle={{
        borderWidth:0, 
      }}
      searchTextInputStyle={{
        borderWidth:0, 
      }}
      // defaultValue={items[0].value}
    // ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
    // CloseIconComponent={()=><BackIcon height={20} width={20} />}
      dropDownContainerStyle={{
          borderWidth:0,
          width:'100%',
          overflow:'scroll',
          height:hp(75)
        //   minHeight:hp(175)
        //   marginLeft:wp(-6)
      }}
      ArrowDownIconComponent={DropdownIcon}
    //   showArrowIcon={false}
      value={day}
      items={days}
      setOpen={setOpen3}
      setValue={setDay}
      setItems={setDays}
    />


    <DropDownPicker
      open={open}
      placeholderStyle={{color:'#afafaf'}}
    //   placeholder={placeholder}
      containerStyle={{
          borderWidth:0,
          borderColor:'transparent',
          backgroundColor:'transparent',
          width:'35%',
          marginLeft:'3%'
      }}
      textStyle={{
        fontSize:wp(4)
      }}
      style={{
          borderWidth:0,
          backgroundColor:'transparent',
      }}
      searchable={true}
      searchContainerStyle={{
        borderWidth:0, 
      }}
      searchTextInputStyle={{
        borderWidth:0, 
      }}
      searchPlaceholder={'month'}
      dropDownDirection={'BOTTOM'}
      // defaultValue={items[0].value}
    // ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
    // CloseIconComponent={()=><BackIcon height={20} width={20} />}
      dropDownContainerStyle={{
          borderWidth:0,
          width:'100%',
          minHeight:hp(70)
        //   marginLeft:wp(-6)
      }}
      ArrowDownIconComponent={DropdownIcon}
    //   showArrowIcon={false}
      value={month}
      items={months}
      setOpen={setOpen}
      setValue={setMonth}
      setItems={setMonths}
    />

<DropDownPicker
      open={open2}
      placeholderStyle={{color:'#afafaf'}}
    //   placeholder={placeholder}
      containerStyle={{
          borderWidth:0,
          borderColor:'transparent',
          backgroundColor:'transparent',
          width:'30%',
      }}
      textStyle={{
        fontSize:wp(4)
      }}
      searchPlaceholder={'year'}
      searchContainerStyle={{
        borderWidth:0, 
      }}
      searchTextInputStyle={{
        borderWidth:0, 
      }}
      style={{
          borderWidth:0,
          backgroundColor:'transparent',
      }}
      searchable={true}
      dropDownDirection={'BOTTOM'}
      // defaultValue={items[0].value}
    // ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
    // CloseIconComponent={()=><BackIcon height={20} width={20} />}
    searchTextInputProps={
        {
            keyboardType:'numeric'
        }
      }

    dropDownContainerStyle={{
          borderWidth:0,
          width:'100%',
          minHeight:hp(20)
        //   marginLeft:wp(-6)
      }}
      ArrowDownIconComponent={DropdownIcon}
    //   showArrowIcon={false}
      value={year}
      items={years}
      setOpen={setOpen2}
      setValue={setYear}
      setItems={setYears}
    />
    </View>
    )
}

export default YearMonthDay

