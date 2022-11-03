import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownIcon from './../assets/dropdownIcon.svg'

const YearMonth = ({year,month,setYear,setMonth}) => {

    var [open,setOpen] = useState(false)
    var [open2,setOpen2] = useState(false)
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
        {label: 2022, value: 2022},
        {label: 2023, value: 2023},
        {label: 2024, value: 2024},
        ]);



  return (
    <View style={{flexDirection:'row',marginTop:hp(1)}}>
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
      dropDownDirection={'BOTTOM'}
      // defaultValue={items[0].value}
    // ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
    // CloseIconComponent={()=><BackIcon height={20} width={20} />}
      dropDownContainerStyle={{
          borderWidth:0,
          width:'100%',
          minHeight:hp(100)
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
      style={{
          borderWidth:0,
          backgroundColor:'transparent',
      }}
      dropDownDirection={'BOTTOM'}
      // defaultValue={items[0].value}
    // ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
    // CloseIconComponent={()=><BackIcon height={20} width={20} />}
      dropDownContainerStyle={{
          borderWidth:0,
          width:'100%',
          minHeight:hp(100)
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

export default YearMonth

