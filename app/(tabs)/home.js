import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGlobalContext } from "../../context/AuthContext";
const home = () => {
  const { loading, isLogged } = useGlobalContext();
  return (
    <View>
      <Text>{isLogged}</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})