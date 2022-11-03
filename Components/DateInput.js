import React,{useState} from 'react'
import {View,Text,Pressable,ImageBackground,TextInput} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import BlackInput from './../assets/beforeInput.png';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';

const DateInput = ({getDate}) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dispDate,setDispDate] = useState(moment().format('YYYY-MM-DD'))
    return (
    <View>
    <Pressable style={{width:'100%'}} onPress={()=>{
        setOpen(true)
        console.log('red')
    }}>
    <ImageBackground source={BlackInput} style={{flexDirection:'row',width:'100%',borderRadius:4,alignSelf:'center',marginTop:hp(1)}}>
    
    <TextInput style={{fontFamily:'Montserrat',width:'92%',height:'90%',marginLeft:'8%'}} 
        placeholder={dispDate}
        placeholderTextColor={'#afafaf'}
        // value={` ${date}-${month}-${year}/${hours}:${minutes} (${time})`}
        editable={false}
        // onFocus={()=>console.log('yes')}
        // onBlur={()=>setOpenopenCal(false)}
        />
    
    </ImageBackground>
    </Pressable>
    <DatePicker
    mode='date'
    maximumDate={new Date()}
modal
        open={open}
        date={date}
        onConfirm={(newDate) => {
          setOpen(false)
          getDate(newDate)
           setDispDate(moment(newDate).format('YYYY-MM-DD'))
          setDate(newDate)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
    )
}

export default DateInput