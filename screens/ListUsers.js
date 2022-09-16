import {useState,useEffect} from 'react';
import {SafeAreaView,Text,Button,ActivityIndicator,FlatList,TouchableOpacity,View,Image} from 'react-native';
import styles from '../style';

const ListUsers =({navigation})=>{

  const [users, setUsers] = useState([]);
  const [fetchedState, setFetchedState] = useState(null);
  
  useEffect(() => {
    setFetchedState('loading')
    setTimeout(()=>getData(),100);
  },[])

    
  const getData=async()=>{
    try{
      const response=await fetch('https://pharma.tunitransport.com/api/public/index.php/api/pharma/users');
      const data=await response.json();
      setUsers(data['hydra:member'])
    }
    catch(error){
      console.log("Vérifier votre api...");
    }
    finally{
      setFetchedState(null);
    }
  }

function showUser(user)
{
  //console.log(user);
  navigation.navigate('DetailsUser', { user:user});
}


const deleteUser =  (userId) => {

  fetch('https://pharma.tunitransport.com/api/public/index.php/api/pharma/users/'+userId,{ method: 'DELETE' })
  .then((response) => {
   response.text();
   navigation.push('ListUsers')
 })
 .then((result) => console.log(result))
 .catch((error) => console.log(error));
};


//########### Début Composant Item
const Item = ({ item}) => (
  <TouchableOpacity  style={styles.item}>
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={styles.picture}
        source={{ uri: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg' }}
      />
      <View style={styles.margeTextItem}>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.prenom}</Text>
        <Text>{item.nom}</Text>
        <View style={styles.myView}>
          
          <View style={styles.myViewBtn}><Button  title="Consulter" style={styles.myBtn} color="green" onPress={() => showUser(item)} /></View>
          <View style={styles.myEspace}></View>
          <View style={styles.myViewBtn}><Button  title="Supprimer" style={styles.myBtn} color="red" onPress={() => deleteUser(item.id)} /></View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
//########### Fin Composant Item

//########### Début Composant RendreItem
const renderItem = ({ item }) => {
  return (
    <Item
      item={item}
    />
)};
//########### Fin Composnat RendreItem
   return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.titreText}>Liste des Users</Text>
      {
      fetchedState ?  <ActivityIndicator size="large" color="#0000ff" /> :
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      }
      <Button onPress={()=>navigation.navigate('AddUser')} title="Vers Add" />
    </SafeAreaView>
  );
}

export default ListUsers;
