import React from 'react'
import { SafeAreaView } from 'react-native'
import { Home } from './src/ui'
import { Card } from './src/ui/components'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
          <Home />
        </SafeAreaView>
    </GestureHandlerRootView>
  
   
  )
}