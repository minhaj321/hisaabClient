import AwesomeAlert from 'react-native-awesome-alerts';
import React from 'react'

const AlertComp = ({type,show,handler,desc}) => {
  // payment
  return (
<AwesomeAlert
          show={show}
          showProgress={type=='load' ? true : false} //d0ne
          title={
            type=='load' ? 'loading...' : 
            (type=='catch' || type=='error') ? 'Error' :
            // type=='leastPassword' ? 'Error' :
            type=='code' ? 'Error' :
            type=='incPass' ? 'Error' :
            type=='block' ? 'Error' :
            type=='email' ? 'Error' :
            type=='password' ? 'Error' :
            type=='alreadyEmail' ? 'Error' :
            type=='incorrect' ? 'Error' :
            type=='range' ? 'Error' :
            type=='mine' ? 'Error' :
            // type=='typeFirst' ? 'Error' :
            type=='success' ? '' :
            
            ''}
          message={
            type=='load' ? '' :  
            // type=='unFilled' ? 'Please fill from completely' : 
            type=='mine' ? desc : 
            type=='catch' ? 'You may have internet problem' : 
            type=='error' ? 'There is an issue' : 
            type=='range' ? 'You can only apply this operation in your office premises' : 
            type=='incPass' ? 'Passwords are not equal' :
            type=='checkedin' ? 'You are successfully checked in' :
            type=='mock' ? 'Close your mock location' :
            type=='locNot' ? 'Please Allow to access your location' :
            type=='cantgetLoc' ? "We can't get your location" :
            type=='checkedout' ? 'You are successfully checked out' :
            type=='blocked' ? 'You are blocked by admin' :
            type=='success' ? 'Date Fetched Successfully' :
            type=='email' ? 'Please enter email first' :
            type=='password' ? 'Please enter password first' :
            type=='alreadyEmail' ? 'This email is already in use' :
            type=='incorrect' ? 'Email is incorrect' :
            type=='code' ? 'Code is incorrect' :
            // type=='typeFirst' ? 'Type your message first' :
                        
            ''}

          // close
          closeOnTouchOutside={false} //d0ne
          closeOnHardwareBackPress={false} //d0ne

          // confirm
          confirmText={ (type=='checkedout' || type=='checkedin' || type=='success' ) ? 'Ok' : 'Close'}
          showConfirmButton={(type=='load' ) ? false : true} //done
          confirmButtonColor={(type=='checkedout' || type=='checkedin' || type=='success') 

          ? '#24AB22' : '#BF452F'} //done
          onConfirmPressed={handler} //done

          // cancel
          showCancelButton={false} //d0ne
          cancelText={''} //d0ne
          onCancelPressed={''} //d0ne
        />

    )
}

export default AlertComp