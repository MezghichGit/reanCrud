import {useState} from 'react';
import {SafeAreaView,Text,Button} from 'react-native';
import styles from '../style';
const ListUsers =({navigation})=>{

   return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.titreText}>Liste des Users</Text>
      <Button onPress={()=>navigation.navigate('AddUser')} title="Vers Add" />
    </SafeAreaView>
  
  );

}

export default ListUsers;
