import { FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { obterDiasDaSemanaProximos } from '../../../utils/weekly'
import { CircularProgress } from '../CircleProgress';
import { useWeek } from '../../../business';

function Weekly() {
  const [weekly, setWeekly] = useState<any>()

  const { weeks } = useWeek()

  
  useEffect(() => {
   const result = obterDiasDaSemanaProximos()

   setWeekly(result)
  }, [])

  return (
    <View>
      <FlatList 
        data={weeks}
        horizontal
        style={{ alignSelf: "center"}}
        renderItem={({item}) => (
          <View style={{ alignItems: "center"}}>
            <Text style={{ fontSize: 16, marginBottom: 4, color: "#cacaca", fontWeight: "600"}}>{item.weekday}</Text>
            <CircularProgress size={40} progress={30} strokeWidth={5} color="#7C91F4" text={item.date} isSelected={item.isSelected} />

          </View>
        )}
      />
    </View>
  )
}

export default Weekly

// a3aee0

// 7C91F4