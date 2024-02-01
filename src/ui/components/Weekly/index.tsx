import { FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { obterDiasDaSemanaProximos } from '../../../utils/weekly'
import { CircularProgress } from '../CircleProgress';

function Weekly() {
  const [weekly, setWeekly] = useState<any>()

  useEffect(() => {
   const result = obterDiasDaSemanaProximos()

   setWeekly(result)
  }, [])

  return (
    <View>
      <FlatList 
        data={weekly}
        horizontal
        style={{ alignSelf: "center"}}
        renderItem={({item}) => (
          <View style={{ alignItems: "center"}}>
            <Text style={{ fontSize: 16, marginBottom: 4, color: "#cacaca", fontWeight: "600"}}>{item.name}</Text>
            <CircularProgress size={40} progress={item.progress} strokeWidth={5} color="#7C91F4" text={item.name} isSelected={item.isSelected} />

          </View>
        )}
      />
    </View>
  )
}

export default Weekly

// a3aee0

// 7C91F4