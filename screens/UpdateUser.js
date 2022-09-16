import { React,useState} from 'react';
import { TextInput,Button, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';
import styles from '../style';
const UpdateUser = ({ route, navigation }) => {

    const { user } = route.params;
    //console.log(user);
    const [nom, setNom] = useState(user.nom);
    const [prenom, setPrenom] = useState(user.prenom);
    let userUpdated = {
        nom:nom,
        prenom:prenom
    }
   const updateUserData = ()=> {
        // Simple PUT request with a JSON body using fetch
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userUpdated)
        };
        fetch('https://pharma.tunitransport.com/api/public/index.php/api/pharma/users/'+user.id, requestOptions)
            .then(response => {
                response.json();
                navigation.push('ListUsers')
              })
    }
    
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
            <Button title="Mise à jour" onPress={updateUserData}></Button>
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

