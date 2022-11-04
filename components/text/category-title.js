import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'

export default function CategoryTitle({title}) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:spacing[3],
        borderWidth:.5,
        borderTopColor:'#979797'

    }
})