import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Description = () => {
    const data=[
        {
       desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,` 
        },
       {
           desc:`when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,`
       } ,
       {
           desc:`remaining essentially unchanged. It was popularised in the 1960s with the re-lease of Letraset sheets containing Lorem Ipsum passages, and more recentlywith desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
       },
       {
           desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`
       },
       {
           desc:`when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,`
       }
]
  return (
    <View>
      <View style={{marginVertical:10}}>
          <Text style={{textAlign:"center",fontSize:20,fontWeight:"700"}}>
              What is <Text style={{color:"red"}}>Looren Epsum</Text>
          </Text>
      </View>
        <View style={{marginHorizontal:15}}>
            {data.map((item)=>{
                return(
                    <Text style={{marginVertical:15,fontWeight:"bold",fontSize:10.5,transform:[{scaleY:1.2}]}}>
                        {item.desc}
                    </Text>
                )
            })}
        </View>

    </View>
  )
}

export default Description

const styles = StyleSheet.create({})