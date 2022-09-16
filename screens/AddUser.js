import { React,useState} from 'react';
import { TextInput,Button, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';
import styles from '../style';
const AddUser = ({navigation }) => {


    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let newUser = {
        nom:nom,
        prenom:prenom,
        email:email,
        password:password
    }
   const addUserData = ()=> {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        fetch('https://pharma.tunitransport.com/api/public/index.php/api/pharma/users', requestOptions)
            .then(response => {
                response.json();
                setTimeout(navigation.push('ListUsers'),3000)
              })
    }
    
    return (
        <SafeAreaView>
            <Text style={styles.titreText}>Interface création d'un User</Text>
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
            <Text>Email : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}

            />
            <Text>Password : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}

            />
            <Button title="Ajouter" onPress={addUserData}></Button>
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
export default AddUser;

