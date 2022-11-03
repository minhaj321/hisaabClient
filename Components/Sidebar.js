import React, { useState } from 'react'
import {View,Text,Animated,Pressable, Alert,Image} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Home from './../assets/BlueHome.svg';
import MonthlyDetails from './../assets/BlueMonthly.svg';
import DailyDetails from './../assets/blueDaily.png';
import Events from './../assets/blueEvents.png';
import Credits from './../assets/blueCredit.png';
import History from './../assets/BlueHistory.svg';
import EditProfile from './../assets/BlueUser.svg';

import WhiteBack from './../assets/WhiteBack.svg';

import CloseIcon from './../assets/Close.svg'
import { ZStack } from 'native-base';

import HomeWhite from './../assets/WhiteHome.svg'
import MonthlyDetailsWhite from './../assets/whiteMonthly.svg'
import DailyDetailsWhite from './../assets/whiteDaily.png'
import CreditsWhite from './../assets/whiteCredit.png'
import EventsWhite from './../assets/whiteEvents.png'
import HistoryWhite from './../assets/WhiteHistory.svg'
import Group from './../assets/WhiteUser.svg'

import { useNavigation } from '@react-navigation/native'

var TranslationX = new Animated.Value(wp(-90));
var TranslationXHome = new Animated.Value(wp(-90));
var TranslationXMonthly = new Animated.Value(wp(-90));
var TranslationXEdit = new Animated.Value(wp(-90));
var TranslationXDaily = new Animated.Value(wp(-90));
var TranslationXEvents = new Animated.Value(wp(-90));
var TranslationXCredits = new Animated.Value(wp(-90));
var TranslationXHistory = new Animated.Value(wp(-90));


const Sidebar = ({open,setOpen,handleMe}) => {

    var navigation = useNavigation();

    var [type,setType] = useState('empty');
    var [allow,setAllow] = useState(true)
// animation for home
    var openHome = Animated.sequence([
        Animated.timing(TranslationXHome,{
            toValue:wp(2),
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXHome,{
            toValue:wp(0),
            duration:200,
            useNativeDriver:true
        })

    ]) 

    var closeHome = Animated.sequence([
        Animated.timing(TranslationXHome,{
            toValue:wp(2),
            duration:200,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXHome,{
            toValue:wp(-90),
            duration:400,
            useNativeDriver:true
        })
    ])

    // animation for Monthly Details
    var openMonthly = Animated.sequence([
        Animated.timing(TranslationXMonthly,{
            toValue:wp(2),
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXMonthly,{
            toValue:wp(0),
            duration:200,
            useNativeDriver:true
        })

        
    ]) 

    var closeMonthly = Animated.sequence([
        Animated.timing(TranslationXMonthly,{
            toValue:wp(2),
            duration:200,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXMonthly,{
            toValue:wp(-90),
            duration:400,
            useNativeDriver:true
        })

        
    ]) 

    // animation for Events
    var openEvents = Animated.sequence([
        Animated.timing(TranslationXEvents,{
            toValue:wp(2),
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXEvents,{
            toValue:wp(0),
            duration:200,
            useNativeDriver:true
        })
        
    ]) 

    var closeEvents =  Animated.sequence([
        Animated.timing(TranslationXEvents,{
            toValue:wp(2),
            duration:200,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXEvents,{
            toValue:wp(-90),
            duration:400,
            useNativeDriver:true
        })
        
    ]) 

    // animation for edit
    var openEdit = Animated.sequence([
        Animated.timing(TranslationXEdit,{
            toValue:wp(2),
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXEdit,{
            toValue:wp(0),
            duration:200,
            useNativeDriver:true
        })
    
    ]) 

    var closeEdit = Animated.sequence([
        Animated.timing(TranslationXEdit,{
            toValue:wp(2),
            duration:200,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXEdit,{
            toValue:wp(-90),
            duration:400,
            useNativeDriver:true
        })
    
    ]) 


    // animation for TranslationXCredits
var openCredits = Animated.sequence([
    Animated.timing(TranslationXCredits,{
        toValue:wp(2),
        duration:400,
        useNativeDriver:true
    }),
    Animated.timing(TranslationXCredits,{
        toValue:wp(0),
        duration:200,
        useNativeDriver:true
    })
]) 

var closeCredits = Animated.sequence([
    Animated.timing(TranslationXCredits,{
        toValue:wp(2),
        duration:200,
        useNativeDriver:true
    }),
    Animated.timing(TranslationXCredits,{
        toValue:wp(-90),
        duration:400,
        useNativeDriver:true
    })
]) 


    // animation for TranslationXHistory
    var openHistory = Animated.sequence([
        Animated.timing(TranslationXHistory,{
            toValue:wp(2),
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXHistory,{
            toValue:wp(0),
            duration:200,
            useNativeDriver:true
        })
    ]) 
    

var closeHistory = Animated.sequence([
    Animated.timing(TranslationXHistory,{
        toValue:wp(2),
        duration:200,
        useNativeDriver:true
    }),
    Animated.timing(TranslationXHistory,{
        toValue:wp(-90),
        duration:400,
        useNativeDriver:true
    })
]) 


// animation for TranslationXDaily
var openDaily = Animated.sequence([
    Animated.timing(TranslationXDaily,{
        toValue:wp(2),
        duration:400,
        useNativeDriver:true
    }),
    Animated.timing(TranslationXDaily,{
        toValue:wp(0),
        duration:200,
        useNativeDriver:true
    })
])

var closeDaily = Animated.sequence([
    Animated.timing(TranslationXDaily,{
        toValue:wp(2),
        duration:200,
        useNativeDriver:true
    }),
    Animated.timing(TranslationXDaily,{
        toValue:wp(-90),
        duration:400,
        useNativeDriver:true
    })
])

    var OpenMenu =Animated.sequence([
        Animated.timing(TranslationX,{
            toValue:5,
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationX,{
            toValue:0,
            duration:200,
            useNativeDriver:true
        }),
    ]) 




    var CloseMenu =Animated.sequence([
        Animated.timing(TranslationX,{
            toValue:5,
            duration:200,
            useNativeDriver:true
    
        }),
        Animated.timing(TranslationX,{
            toValue:wp(-90),
            duration:400,
            useNativeDriver:true
    
        }),    
    ]) 

    if(open==true){
        console.log("yes")
        OpenMenu.start();
    }else  if(open==false){
        setTimeout(()=>{
            setOpen(false)
        },1000)
        console.log("no")
        CloseMenu.start();
    }

var lst = [
    {
        name:'Home',
        icon:<Home/>,
        fun:()=>handleAnime('home',openHome),
    },
    // {
    //     name:'Monthly Details',
    //     icon:<MonthlyDetails/>,
    //     fun:()=>handleAnime('month',openMonthly)
    // },
    {
        name:'Edit Profile',
        icon:<EditProfile/>,
        fun:()=>handleAnime('edit',openEdit)
    },
    {
        name:'Daily Details',
        icon:<Image source={DailyDetails} style={{height:20,width:20}}  />,
        fun:()=>handleAnime('daily',openDaily)
    },
    // {
    //     name:'Events',
    //     icon:<Image source={Events} style={{height:20,width:20}}/>,
    //     fun:()=>handleAnime('eve',openEvents)
    // },
    {
        name:'Add Credits',
        icon:<Image source={Credits} style={{height:20,width:20}}/>,
        fun:()=>handleAnime('cre',openCredits)
    },
    {
        name:'History',
        icon:<History/>,
        fun:()=>handleAnime('his',openHistory)
    },

]

var lst2 = [
    {
        name:'Home',
        icon:<HomeWhite/>,
        fun:()=>{
            setOpen(false)
            navigation.navigate('Home')
            // handleAnime('home',openHome)
        },
        styling : { transform:[{translateX:TranslationXHome}] }
    },
    // {
    //     name:'Monthly Details',
    //     icon:<MonthlyDetailsWhite/>,
    //     fun:()=>{
    //         navigation.navigate('MonthlyExpense')
    // },
    //     styling : { transform:[{translateX:TranslationXMonthly}] }
    // },
    {
        name:'Edit Profile',
        icon:<Group/>,
        fun:()=>{
            navigation.navigate('EditProfile')
            // handleAnime('edit',openEdit)
    },
        styling : { transform:[{translateX:TranslationXEdit}] }
    },
    {
        name:'Daily Details',
        icon:<Image source={DailyDetailsWhite} style={{height:20,width:20}}/>,
        fun:()=>{navigation.navigate('DailyExpense')},
        styling : { transform:[{translateX:TranslationXDaily}] }
    },
    // {
    //     name:'Events',
    //     icon:<Image source={EventsWhite} style={{height:20,width:20}}/>,
    //     fun:()=>{
    //         navigation.navigate('UpcomingEvents')
    //     // handleAnime('eve',openEvents)
    // },
    //     styling : { transform:[{translateX:TranslationXEvents}] }
    // },
    {
        name:'Add Credits',
        icon:<Image source={CreditsWhite} style={{height:20,width:20}}/>,
        fun:()=>{
            navigation.navigate('ExtraCredit')
    },
        styling : { transform:[{translateX:TranslationXCredits}] }
    },
    {
        name:'History',
        icon:<HistoryWhite/>,
        fun:()=>{
            navigation.navigate('History')
    },
        styling : { transform:[{translateX:TranslationXHistory}] }
    },

]



const handleAnime = (currentType) =>{

    if(allow){
        allow=false;
        setTimeout(()=>{
            allow=true;
        },700)

        try{
        if(type !='empty'){
        
            if(type=='home'){
                closeHome.start();
                type='empty';    
            }else if(type=='edit'){
                closeEdit.start();
                type='empty';    
            }else if(type=='Daily'){
                closeDaily.start();
                type='empty';    
            }else if(type=='month'){
                closeMonthly.start();
                type='empty';    
            }else if(type=='eve'){
                closeEvents.start();
                type='empty';    
            }else if(type=='cre'){
                closeCredits.start();
                type='empty';    
            }else if(type=='daily'){
                closeDaily.start();
                type='empty';    
            }else if(type=='his'){
                closeHistory.start();
                type='empty';    
            }
        
        setTimeout(()=>{
            openHome.reset();
            openEdit.reset();
            openMonthly.reset();
            openDaily.reset();
            openEvents.reset();
            openCredits.reset();
            openHistory.reset();
            closeHome.reset();
            closeEdit.reset();
            closeMonthly.reset();
            closeDaily.reset();
            closeEvents.reset();
            closeCredits.reset();
            closeHistory.reset();
        },600)
        
        }
        else{
            
            if(currentType=='home'){
                openHome.start();
            }else if(currentType=='edit'){
                openEdit.start();
            }else if(currentType=='Daily'){
                openDaily.start();
            }else if(currentType=='month'){
                openMonthly.start();
            }else if(currentType=='eve'){
                openEvents.start();
            }else if(currentType=='cre'){
                openCredits.start();
            }else if(currentType=='his'){
                openHistory.start();
            }else if(currentType=='daily'){
                openDaily.start();
            }
                
            type=currentType;
        
        }
        }catch(err){
            console.log(err.message)
        }
    }

}

// handleMe(CloseMenu)

const handleLogOut =async()=>{
    // var {data} = await axios.put('http://192.168.100.35:5400/user/logout',{
    //     email:'minhajsohail7@gmail.com'
    // })
    // if(data.message=='Success'){
    //     navigation.navigate('Login')
    // }else{
    //     Alert.alert('There is an error in logging you out.')
    // }
    // console.log(data)

}

    return (
        <Animated.View style={{ transform:[{translateX:TranslationX}],width:wp(80),height:hp(84),marginTop:hp(3) }}>
    <View style={{ height:hp(84),borderRadius:10,width:wp(80),borderWidth:0.3,borderColor:'lightgray',backgroundColor:'white'  }}>

    <View style={{width:'100%'}}>
        
        <View style={{flexDirection:'row',marginTop:hp(3),justifyContent:'space-around',marginBottom:hp(3.5)}}>

        <View style={{flexDirection:'row'}}>

            <View style={{marginLeft:10,justifyContent:'center'}}>
                <Text style={{fontFamily:'Montserrat',color:'#333333',fontWeight:'700'}}>John</Text>
                <Text style={{fontFamily:'Montserrat',fontSize:wp(3.5)}}>John123@gmail.com</Text>
            </View>

        </View>
<Pressable onPress={()=>{
                setOpen(false)    
    CloseMenu.start();

}
}>
        <CloseIcon />
</Pressable>

        </View>
<ZStack>


<View style={{marginTop:hp(3)}}>
        {
            lst.map((v,i)=>{
                return(
                    <Pressable key={i} onPress={()=>v.fun()}>
                    <View  style={{flexDirection:'row',marginTop:hp(0),height:hp(7),alignItems:'center'}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                            {v.icon}
                        </View>
                        <View style={{width:'70%'}}>
                            <Text style={{fontFamily:'Montserrat',color:'#333333',fontSize:wp(3.5)}}>{v.name}</Text>
                        </View>
                    </View>
                    </Pressable>
                )
            })
        }
</View>

<View style={{marginTop:hp(3)}}>

{
            lst2.map((v,i)=>{
                return(
<Animated.View style={v.styling} key={i}>
                    <Pressable onPress={()=>v.fun()}>
                    <View  style={{width:'100%',flexDirection:'row',marginTop:hp(0),backgroundColor:'#4F55D8',alignItems:'center',borderRadius:10,height:hp(7)}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                            {v.icon}
                        </View>
                        <View style={{width:'70%'}}>
                            <Text style={{fontFamily:'Montserrat',color:'#fff',fontSize:wp(3.5)}}>{v.name}</Text>
                        </View>
                    </View>
                    </Pressable>
</Animated.View>
                )
            })
        }





<View style={{alignItems:'center',marginTop:hp(15)}}>
    <Pressable style={{alignItems:'center'}} onPress={()=>{
        handleLogOut()
        }}>
        <WhiteBack/>
        <Text style={{fontFamily:'Montserrat',color:'#333333',fontWeight:'700'}}>Log out</Text>
</Pressable>
</View>

</View>


</ZStack>

    </View>

    </View>
    </Animated.View>
    )
}

export default Sidebar