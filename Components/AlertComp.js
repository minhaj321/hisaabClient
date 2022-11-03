import AwesomeAlert from 'react-native-awesome-alerts';
import React from 'react'

const AlertComp = ({type,show,handler}) => {

  return (
<AwesomeAlert
          show={show}
          showProgress={type=='load' ? true : false} //d0ne
          title={
            type=='load' ? 'loading...' : 
            (type=='unFilled' || type=='catch' || type=='error') ? 'Error' :
            type=='email' ? 'Info' :
            type=='location' ? 'Location' :
            type=='password' ? 'Info' :
            type=='leastPassword' ? 'Error' :
            type=='catchPassword' ? 'Error' :
            type=='catchEmail' ? 'Error' :
            type=='inValidEmail' ? 'Error' :
            type=='inValidPass' ? 'Error' :
            type=='alreadyEmail' ? 'Error' :
            type=='pass&Conf' ? 'Error' :
            type=='typeFirst' ? 'Error' :
            type=='success' ? '' :
            
            ''}
          message={
            type=='load' ? '' :  
            type=='location' ? 'Please allow us to get your location' : 
            type=='unFilled' ? 'Please fill from completely' : 
            type=='catch' ? 'You may have internet problem' : 
            type=='error' ? 'There is an issue' : 
            type=='email' ? 'Your email is updated' :
            type=='password' ? 'Your password is updated' :
            type=='leastPassword' ? 'Your password should have atleast 6 characters' :
            type=='catchPassword' ? 'There is an issue on updating your password' :
            type=='catchEmail' ? 'There is an issue on updating your email' :
            type=='success' ? 'You have updated your profile successfully' :
            type=='inValidEmail' ? 'Your email is incorrect' :
            type=='inValidPass' ? 'Your password is incorrect' :
            type=='alreadyEmail' ? 'This email is already in use' :
            type=='pass&Conf' ? 'Your Password and confirm password should be same' :
            type=='typeFirst' ? 'Type your message first' :
                        
            ''}

          // close
          closeOnTouchOutside={false} //d0ne
          closeOnHardwareBackPress={false} //d0ne

          // confirm
          confirmText={
            type=='load' ? '' :  
            (type=='unFilled' || type=='catch' || type=='error' || type=='catchPassword' || type=='catchEmail' || type=='error' || type=='inValidEmail' || type=='inValidPass' || type=='alreadyEmail' || type=='pass&Conf' || type=='typeFirst'  || type=='location') ? 'Close' : 
            'Ok'}
          showConfirmButton={(type=='load' ) ? false : true} //done
          confirmButtonColor={type=='load' ? '' :  (type=='success' || type=='email' ||  type=='password') ? '#24AB22' : '#BF452F'} //done
          onConfirmPressed={handler} //done

          // cancel
          showCancelButton={false} //d0ne
          cancelText={''} //d0ne
          onCancelPressed={''} //d0ne
        />

    )
}

export default AlertComp