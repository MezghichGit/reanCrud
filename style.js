import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      padding: 10,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#fff',
    },
    titreText: {
      fontSize: 20,
      textAlign: 'center'
    },
    picture:{
      width:150,
      height:150
    },
    item:{
      flex:1,
      margin:5,
      backgroundColor:'#f9c2ff',
      textColor:'blue'
    },
    margeTextItem:{
      flex:1,
      marginLeft:15,
    }
    ,
    myBtn:{
      marginBottom:15,
      flex:0.3,
      fontSize: 12,
    },
    myEspace:{
      flex:0.1
    },
    myView:{
      flex:1,
      flexDirection:'col',
    },
    myViewBtn:{
      width:"90%",
      alignItems:'center',
      justifyContent:'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });
