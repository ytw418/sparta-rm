import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import LikeCard from '../components/LikeCard';
import card from '../components/Card';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';
import {firebase_db} from "../firebaseConfig"


//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LikePage({ navigation, route }) {

   const [tip, setTip] = useState([])
   const [ready,setReady] = useState(true)

   useEffect(() => {
      navigation.setOptions({
         title: "꿀팁 찜",
      })
      getLike()
   }, [])

   const getLike = async () => {
      let userUniqueId;
      if(isIOS){
         let iosId = await Application.getIosIdForVendorAsync();
         userUniqueId = iosId
      }else{
         userUniqueId = await Application.androidId
      }


      console.log(userUniqueId)
      firebase_db.ref('/like/'+userUniqueId).once('value').then((snapshot) => {
         console.log("likepage 데이터 조회")
         let tip = snapshot.val();
         						// tip이 null도 아니고(실제 값이 존재 하고)
						// tip의 갯수가 0개 이상! 즉 있을때만 상태 변경하여 화면을 다시 그리기!
            if(tip && tip.length > 0){
               setTip(tip)
               setReady(false)
               console.log("likepage 데이터 조회 성공")
            }else {
               console.log("likepage 데이터 조회 실패")
               
            }
      })
   }
   return ready ? <Loading/> : (
      <ScrollView style={styles.container}>
         {
            tip.map((content,i)=>{
               return(
                  <LikeCard key={i} content={content} navigation={navigation} tip={tip} setTip={setTip}></LikeCard>
               )
            })
         }
      </ScrollView>
   )
}


const styles = StyleSheet.create({
   container:{
      backgroundColor:"#fff"
   }
})