import React from 'react'
import {View,Text,TextInput,ImageBackground,Pressable} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownIcon from './../assets/dropdownIcon.svg'
import BlackInput from './../assets/beforeInput.png'

const DownInput = ({open,setOpen,setItems,items,val,setVal}) => {


    return (
        <>
            <ImageBackground source={BlackInput} style={{flexDirection:'row',alignItems:'center',width:'100%',borderRadius:4,alignSelf:'center',marginTop:hp(1)}}>
    <DropDownPicker
      open={open}
      placeholderStyle={{color:'#afafaf'}}
      containerStyle={{
          borderWidth:0,
          borderColor:'transparent',
          backgroundColor:'transparent',
          width:'94%',
          marginHorizontal:'3%'
      }}
      style={{
          borderWidth:0,
          backgroundColor:'transparent',
      }}
      dropDownDirection={'BOTTOM'}
      // defaultValue={items[0].value}
    ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
    // CloseIconComponent={()=><BackIcon height={20} width={20} />}
      dropDownContainerStyle={{
          borderWidth:0,
          width:'100%',
        //   minHeight:hp(150)
        //   marginLeft:wp(-6)
      }}
      ArrowDownIconComponent={DropdownIcon}
    //   showArrowIcon={false}
      value={val}
      items={items}
      setOpen={setOpen}
      setValue={setVal}
      setItems={setItems}
    />
    </ImageBackground>


        </>
  )
}

export default DownInput