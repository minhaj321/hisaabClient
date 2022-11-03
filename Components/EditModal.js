import React from 'react'
import {View,Text,Pressable} from 'react-native'
import { Modal,FormControl,Input,Button } from 'native-base'
const EditModal = ({editAmt,editName,setOpen,open,handleEditHandler,setEditName,setEditAmt}) => {

    return (
        <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Edt</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input value={editName} 
              onChangeText={txt=>setEditName(txt)}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Amt</FormControl.Label>
              <Input value={editAmt} 
              onChangeText={txt=>setEditAmt(txt)}
              keyboardType={'number-pad'}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setOpen(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
                handleEditHandler()
              setOpen(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
  )

}

export default EditModal