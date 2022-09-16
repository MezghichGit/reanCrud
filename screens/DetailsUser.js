import {useState} from 'react';
import {Button, SafeAreaView,Text} from 'react-native';
import styles from '../style';
const DetailsUser = ({ route, navigation }) => {

    const { user} = route.params;
   return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.titreText}>Détails User : {user.id}</Text>
      <Text style={styles.titreText}>Nom : {user.nom}</Text>
      <Text style={styles.titreText}>Prénom : {user.prenom}</Text>
      <Button onPress={()=>navigation.navigate('ListUsers')} title="Vers Liste"/>
    </SafeAreaView>
  
  );

}
export default DetailsUser;

