import {Button, SafeAreaView,Text} from 'react-native';
import styles from '../style';
const AddUser = ({ navigation }) => {
   return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.titreText}>Ajouter un User</Text>

      <Button onPress={()=>navigation.navigate('ListUsers')} title="Vers Liste"/>
    </SafeAreaView>
  
  );

}

export default AddUser;
