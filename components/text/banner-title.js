import { View,StyleSheet, Image } from 'react-native'
import React from 'react'
import Text from './text'
import { colors } from '../../theme/colors'

export default function BannerTitle() {
  return (
    <View style={styles.container}>
      {/* <Image source={require('../../images/zZ')}/> */}
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    height:60,
    backgroundColor:colors.black,
    justifyContent:'center',
    alignItems:'center',


}

})