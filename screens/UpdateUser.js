import { React,useState} from 'react';
import { TextInput,Button, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';
import styles from '../style';
const UpdateUser = ({ route, navigation }) => {

    const { user } = route.params;
    //console.log(user);
    const [nom, setNom] = useState(user.nom);
    const [prenom, setPrenom] = useState(user.prenom);


    return (
        <SafeAreaView>
            <Text style={styles.titreText}>Interface de mise à jour</Text>
            <Text>Nom : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setNom}
                value={nom}
            />
            <Text>Prenom : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setPrenom}
                value={prenom}

            />
            <Button title="Mise à jour" ></Button>
        </SafeAreaView>
    );


    /*

   return (

    <SafeAreaView style={styles.container}>
      
      <View>
      <Text style={styles.titreText}>Mise à jour d'un User</Text></View>
      
      <Button onPress={()=>navigation.navigate('ListUsers')} title="Vers Liste"/>
    </SafeAreaView>
  
  );*/

}
export default UpdateUser;

