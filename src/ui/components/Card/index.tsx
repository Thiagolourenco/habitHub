import { View, Text } from 'react-native'
import React from 'react'

import useStyle from './style'

interface ICard {
  title?: string
  description?: string
  infoHabit?: number
  total?: number
  count?: number
  type?: string
  habit?: string
  hour?: string
}

export default function Card({ title, description, infoHabit, total, count, type, habit, hour }: ICard) {
  const styles = useStyle()

  console.log("COUNT", count)
  return (
    <View style={styles.card}>
      {/** Vai ser o icone */}
      <View style={{ flexDirection:  'row', alignItems: "center"}}>
        <View style={styles.viewImage} /> 
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.cardText}>{title}</Text>
          {description &&  <Text style={styles.cardDescription}><Text style={{ color: "green", fontWeight: "600"}}>{`${total || ""}/${count || ""}`}</Text> {description}</Text>}
          {type === "COMPLETED" && <Text style={[styles.cardDescription, { color: "green"}]}>Finalizado</Text>}
        </View>
      </View>
    
      <View>
       
        
        {hour  && (
          <>
             <Text>{hour}</Text>
             <Text>{count} mins</Text>
          </>
        )}

        {!hour && (
          <Text>{count}/{total} </Text>
        )}
      </View>
    </View>
  )
}