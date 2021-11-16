import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<View style={styles.containerOne}>

</View>
<View style={styles.containerTwo}>
<View style={styles.innerOne}>

</View>
<View style={styles.innerTwo}>
<Text>!!컨텐츠!!</Text>
</View>

</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex:1
},
containerOne: {
flex:1,
backgroundColor:"red"
},
containerTwo:{
flex:2,
flexDirection:"row",
backgroundColor:"yellow"
},
innerOne: {
flex:1,
backgroundColor:"blue"
},
innerTwo: {
flex:4,
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
backgroundColor:"orange", 

}
});