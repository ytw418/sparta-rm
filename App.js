import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, 
  ScrollView} from 'react-native';

  
  export default function App() {
    // return 구문 밖에서는 슬래시 두개로 주석
    return (
      <div>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>나만의 꿀팁</Text>
          <Image style={styles.mainImage} source={main}/>
          <ScrollView style={styles.middleContainer} horizontal={true}>
            <TouchableOpacity style={styles.middleButton01}><Text style={styles.buttonText}>생활</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton02}><Text style={styles.buttonText}>건강</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton03}><Text style={styles.buttonText}>재태크</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton04}><Text style={styles.buttonText}>꿀팁</Text></TouchableOpacity>
          </ScrollView>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image style={styles.cardImage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"}}></Image>
              <Text style={styles.cardText}>
                <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게</Text>
                <Text style={styles.cardDesc}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
                <Text style={styles.cardDate}>2020.11.17</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </div>
    )
  }
  

  const styles = StyleSheet.create({
    container:{
      backgroundColor:"#fff",
     
    },
    title:{
      fontSize:20,
      fontWeight :"700",
      marginTop:50,
      
      textAlign:"center",
    },
    mainImage:{
        //컨텐츠의 넓이 값
        width:"90%",
        //컨텐츠의 높이 값
        height:200,
        //컨텐츠의 모서리 구부리기
        borderRadius:10,
        alignSelf:"center"
        //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
        //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    },
    middleContainer:{
      borderWidth:1,
      height:60,
      margin: 20,
      
    },
    middleButton01:{
      width:100,
      height:50,
      padding:15,
      backgroundColor:"#fdc453",
      borderRadius:15,
      margin:7,
    },
    middleButton02:{
      width:100,
      height:50,
      padding:15,
      backgroundColor:"#73bf3a",
      borderRadius:15,
      margin:7,
    },
    middleButton03:{
      width:100,
      height:50,
      padding:15,
      backgroundColor:"#414c9b",
      borderRadius:15,
      margin:7,
    },
    middleButton04:{
      width:100,
      height:50,
      padding:15,
      backgroundColor:"#c73535",
      borderRadius:15,
      margin:7,
    },
    buttonText:{
      color:"#fff",
      textAlign:"center",

    },
    cardContainer:{
      borderWidth:1,
      
      margin:10,

    },
    card:{
      flex:1,
      flexDirection:'row',
      margin:10,
      borderRadius:15,

    },
    cardImage: {
    
      width:100,
      height:100,
      borderRadius:10,
    },
    cardText: {
      flex:2,
      
      marginLeft:10,
    },
    

    
  })
 
  
  