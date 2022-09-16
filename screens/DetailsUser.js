import {useState,useEffect} from 'react';
import {Button, SafeAreaView,Text,View,ActivityIndicator} from 'react-native';
import styles from '../style';
const DetailsUser = ({ route, navigation }) => {

   const { user} = route.params;

   const [allUserData, setAllUserData] = useState([]);
   const [fetchedState, setFetchedState] = useState(null);
   
   useEffect(() => {
     setFetchedState('loading')
     setTimeout(()=>getAllUserData(),300);
   },[])

   const getAllUserData=async()=>{
    try{
      const response=await fetch('https://pharma.tunitransport.com/api/public/index.php/api/pharma/users/'+user.id);
      const data=await response.json();
      setAllUserData(data)
    }
    catch(error){
      console.log("Vérifier votre api...");
    }
    finally{
      setFetchedState(null);
    }
  }

   return (

    <SafeAreaView style={styles.container}>
        {
      fetchedState ?  <ActivityIndicator size="large" color="#0000ff" /> :
      <View>
      <Text style={styles.titreText}>Détails User : {allUserData.id}</Text>
      <Text style={styles.titreText}>Nom : {allUserData.nom}</Text>
      <Text style={styles.titreText}>Prénom : {allUserData.prenom}</Text>
      <Text style={styles.titreText}>Rôle : {allUserData.roles}</Text>
      <Text style={styles.titreText}>Password Crypté : {allUserData.password}</Text></View>
      }
      <Button onPress={()=>navigation.navigate('ListUsers')} title="Vers Liste"/>
    </SafeAreaView>
  
  );

}
export default DetailsUser;

