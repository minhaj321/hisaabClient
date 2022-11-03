import React,{useState} from 'react'
import {View,Text,StyleSheet,ScrollView,TextInput,Image} from 'react-native'
import InputComp from './../Components/InputComp.js';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Header from '../Components/Header'
import { Pressable, Radio } from 'native-base';
import Man1 from './../assets/man1.png'
import Man2 from './../assets/man2.png'
import Man3 from './../assets/man3.png'
import Man4 from './../assets/man4.png'
import Woman1 from './../assets/woman1.png'
import Woman2 from './../assets/woman2.png'
import Woman3 from './../assets/woman3.png'
import Woman4 from './../assets/woman4.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { dev } from '../Connections/endPoint.js';

const EditProfile = ({navigation}) => {

    var [focused1,setFocused1] = useState(false)
    var [focused2,setFocused2] = useState(false)
    var [focused3,setFocused3] = useState(false)
    const [fName, setFName] = useState('Minhaj');
    const [lName, setLName] = useState('Sohail');
    const [salary, setSalary] = useState(0);
    const [day, setDay] = useState('12');
    const [profile,setProfile] = useState(0)
    const [month, setMonth] = useState('4');
    const [year, setYear] = useState('2022');
    const [male, setMale] = useState(true);
    const [salaryDate,setSalaryDate] = useState(1)
    const [startDate,setStartDate] = useState(10)
    const [render,setRender]= useState([
        {icon:Man1},
        {icon:Man2},
        {icon:Man3},
        {icon:Man4},
    ])
    var manAvatarArr=[
        {icon:Man1},
        {icon:Man2},
        {icon:Man3},
        {icon:Man4},
    ]

    var womanAvatarArr=[
        {icon:Woman1},
        {icon:Woman2},
        {icon:Woman3},
        {icon:Woman4},
    ]

    // var arr = new Array(28)
    var arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

    const handleProfile = async()=>{
        var dob=day+'/'+month+'/'+year;
        var userId = await AsyncStorage.getItem('userInstanceId')
        console.log(userId)
        var {data} = await axios.post(dev+'/user/editProfile',{
            gender:male?'male':'female',
            salary,
            startingOfMonth:startDate,
            dateOfSalary:salaryDate,
            profilePic:profile,
            dob,
            userId
        }) 
        if(data.status==200){
            navigation.navigate('Home')
    }else{
            console.log("error",data.status)
    }
    }

  return (
    <ScrollView style={styles.editMain}>
        <Header title={'Edit Profile'} />
        <Text style={styles.extraTxt}>First Name</Text>
        <InputComp focus={focused1} setFocus={setFocused1} val={fName} setVal={setFName}  />

        <Text style={styles.extraTxt}>Last Name</Text>
        <InputComp focus={focused2} setFocus={setFocused2} val={lName} setVal={setLName}  />

        <Text style={styles.extraTxt}>Salary</Text>
        <InputComp keyboardTypeNumber={true} focus={focused3} setFocus={setFocused3} val={salary} setVal={setSalary}  />

        <View style={{width:wp(30),height:hp(0.5),backgroundColor:'#afafaf',alignSelf:'center',marginTop:hp(2)}}></View>

        <Text style={styles.dobTitle}>Date of birth</Text>
        <View style={styles.dob}>
        <View style={styles.dobBox}>
        <Text style={styles.dobTxt}>Date</Text>
            <TextInput style={styles.dobInput} onChangeText={txt=>setDay(txt)} value={day} keyboardType={'numeric'} />
        </View>
        <View style={styles.dobBox}>
        <Text style={styles.dobTxt}>Month</Text>
            <TextInput style={styles.dobInput} onChangeText={txt=>setMonth(txt)} value={month} keyboardType={'numeric'}/>
        </View>
        <View style={styles.dobBox}>
            <Text style={styles.dobTxt}>Year</Text>
            <TextInput style={styles.dobInput} onChangeText={txt=>setYear(txt)} value={year} keyboardType={'numeric'}/>
        </View>
        </View>

        <Text style={styles.dobTitle}>Gender</Text>
        <View style={styles.genderMain}>
            <Pressable style={{marginLeft:'3%',flexDirection:'row',alignItems:'center'}} onPress={()=>{
                setMale(true)
                setRender(manAvatarArr)
            }}>
            <View style={{...styles.male,backgroundColor:male ?'#4F55D8' : '#333333'}}>
            </View>
            <Text style={{color:male ?'#4F55D8' : '#333333'}}>Male</Text>
            </Pressable>
            <Pressable style={{flexDirection:'row',alignItems:'center'}} onPress={()=>{
                setMale(false)
                setRender(womanAvatarArr)
            }}>
            <View style={{...styles.female,backgroundColor:male ? '#333333' : '#4F55D8'}}>
            </View>
            <Text style={{color:male ? '#333333' :'#4F55D8',fontSize:wp(4.5)}}>Female</Text>
            </Pressable>
        </View>
            <Text style={{...styles.extraTxt,marginTop:hp(3)}}>Select Avatar :</Text>
        <View style={styles.Avatars}>
            {
                render.map((v,i)=>{
                    return(
                        <>
                        <Pressable onPress={()=>setProfile(i+1)} style={profile==i+1 ?{borderColor:'#4F55D8',borderWidth:wp(0.5),borderRadius:wp(50)} : {}}>
                    <Image source={v.icon} style={{width:wp(16),height:wp(16)}} />
                    </Pressable>
                        </>
                    )
                })
            }
        </View>
        <Text style={{...styles.extraTxt,marginTop:hp(3)}}>Select Starting Date :</Text>
        <View style={styles.startingDateDiv}>
        {
                  arr.map((v,i)=>{
                    return(
                        <Pressable onPress={()=>setStartDate(i+1)}>
                        <View style={{...styles.dateBox,borderColor: startDate==i+1 ? '#4F55D8' : '#333333',backgroundColor:startDate==i+1 ? '#4F55D8' : '#fff'}}>
                            <Text style={{color : startDate==i+1 ? '#fff' : '#333333'}}>{i+1}</Text>
                        </View>
                        </Pressable>
                    )
                })
            }
        </View>
        <Text style={{...styles.extraTxt,marginTop:hp(3)}}>Select Salary Date :</Text>
        <View style={{...styles.startingDateDiv,marginBottom:hp(2)}}>
        {
                arr.map((v,i)=>{
                    return(
                        <Pressable onPress={()=>setSalaryDate(i+1)}>
                        <View style={{...styles.dateBox,borderColor: salaryDate==i+1 ? '#4F55D8' : '#333333',backgroundColor:salaryDate==i+1 ? '#4F55D8' : '#fff'}}>
                            <Text style={{color : salaryDate==i+1 ? '#fff' : '#333333'}}>{i+1}</Text>
                        </View>
                        </Pressable>
                    )
                })
            }
        </View>
        <View style={{backgroundColor:'#4F55D8',width:wp(50),alignSelf:'center',marginTop:hp(3),marginBottom:hp(1),borderRadius:50}}>
    <Pressable onPress={handleProfile}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>Save</Text>
</Pressable>
</View>
    </ScrollView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    editMain:{
        backgroundColor:'#fdfdfd'
    },  
    startingDateDiv:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginHorizontal:wp(3),
        marginTop:hp(1),
    },
    extraTxt:{
        marginHorizontal:'3%',
        color:'#333333',
        marginTop:hp(1.5),
        fontSize:wp(4)
    },
    dateBox:{
        marginTop:hp(0.1),
        width:wp(93/7),
        height:wp(90/7),
        borderRadius:5,
        borderColor:'black',
        borderWidth:0.5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    Avatars:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:'3%',
        marginTop:hp(1)
    },
    dob:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:'3%'
    },
    dobTxt:{
        color:"#333333",
        fontSize:wp(4)
    },
    dobInput:{
        // borderBottomWidth:1,
        borderColor:'#333333',
        color:'#4F55D8',
        padding:0,
        fontSize:wp(4)
    },
    dobBox:{
        width:'30%',
        alignItems:'center'
    },
    dobTitle:{
        marginHorizontal:'3%',
        color:'#333333',
        marginTop:hp(2.5),
        fontSize:wp(4)
    },
    genderMain:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:hp(0.5)
    },
    male:{
        borderRadius:50,
        backgroundColor:'#333333',
        height:wp(4),
        width:wp(4),
        marginLeft:'3%',
        marginRight:wp(2)
    },
    female:{
        borderRadius:50,
        height:wp(4),
        width:wp(4),
        backgroundColor:'#333333',
        marginLeft:'7%',
        marginRight:wp(2)
    }
})