import React,{useEffect} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';

function AboutPage({navigation,route}) {

   useEffect(() => {
      navigation.setOptions({
         title:"소개페이지",
         headerStyle:{
            backgroundColor:"#1f266a",
            shadowColor:"#1f266a",
         },
         headerTintColor:"#fff",
      })

   }, [])

   const aboutImage = "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"
   return (
      <View style={styles.container}>
         <Text style={styles.title}>HI! 스파르타코딩 앱개발반에 오신것을 환영합니다</Text>
         <View style={styles.main_view}>
            <Image style={styles.aboutimage} source={{uri:aboutImage}}/>
            <Text style={styles.main_text01}>많은 내용을 간결하게 담아내려노력했습니다</Text>
            <Text style={styles.main_text02}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다.</Text>
            <TouchableOpacity onPress={()=>Linking.openURL("https://teamsparta.notion.site/2-3e404a42faef4977bede8252891d2ead")}  style={styles.main_btn01}>
               <Text>여러분의 인스타계정</Text>
               
               </TouchableOpacity>
         </View>
      </View>
   )
}

export default AboutPage

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:"#1f266a",
      alignItems:"center"
   },
   title:{
      fontSize:30,
      color:'#fff',
      margin:30,
      fontWeight:"700",
   },
   main_view:{
      backgroundColor:'#fff',
      borderRadius:15,
      padding:20,
      width:300,
      height:500,
      justifyContent:"center",
      alignItems:"center",

   },
   main_text01:{
      fontSize:22,
      fontWeight:"700",
      marginBottom:20,
   },
   main_text02:{
      fontSize:19,
      fontWeight:"600",
      marginBottom:20,
   },
   main_btn01:{
      fontSize:19,
      fontWeight:"600",
      marginBottom:20,
      backgroundColor:"rgb(230,141,26)",
      borderRadius:15,
      alignItems:"center",
      padding:10,
      color:"#fff",
      
      
      
      

   },
   aboutimage:{
      width:200,
      height:200,
   }

})