import { View, Text } from 'react-native'
import React from 'react'

export default function Index() {
  return (
        <View // Text + Input Container               
              style=
                {{
                  margin: 0,
                  flex: 1,
                  backgroundColor: 'maroon',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                    
                <Text
                  onPress={() => {setTexto("Cliclou")}}
                  style={{
                    position: 'absolute',
                    top: 0,
                    fontSize: 30,
                    marginTop: 10,
                    backgroundColor: 'pink',
                    padding: 5,
                    paddingLeft: 50,
                    paddingRight: 50,
                    borderRadius: 50,
                    }}>App Title</Text>

                <TextInput
                  onChangeText={(texto) => setTexto(texto)}
                  value={texto}
                  placeholder='Teste'
                  keyboardType='numeric'
                  
                  // returnKeyType='search'
                  // secureTextEntry
                  style={{
                    textAlign: 'center',
                    width: 200, 
                    height: 50, 
                    backgroundColor: 'pink', 
                    // paddingLeft: 20, 
                    borderRadius: 50, 
                    margin: 20}}/>

                <Text style={{color: 'white', fontSize: 20}}>{texto}</Text>
            </View>
                  
  )
}