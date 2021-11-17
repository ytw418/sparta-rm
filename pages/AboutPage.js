import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

function AboutPage() {

   const aboutImage = "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"
   return (
      <View>
         <Text>HI! 스파르타코딩 앱개발반에 오신것을 환영합니다</Text>
         <View>
            <Image source={aboutImage}></Image>
            <Text>많은 내용을 간결하게 담아내려{"/n"}노력했습니다</Text>
         </View>
      </View>
   )
}

export default AboutPage
