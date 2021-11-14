import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
return (
<ScrollView style={styles.container}>
<View style={styles.textContainer}>
<Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
</View>
<View style={styles.textContainer}>
<Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
</View>
<View style={styles.textContainer}>
<Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
</View>
<View style={styles.textContainer}>
<Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
</View>
<View style={styles.textContainer}>
<Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
</View>
<View style={styles.textContainer}>
<Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
</View>
<View style={styles.textContainer}>
<Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
</View>
</ScrollView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
textContainer: {
height:100,
borderColor:'#000',
borderWidth:1,
borderRadius:10,
margin:10,
},
textStyle: {
textAlign:"center"
}
});