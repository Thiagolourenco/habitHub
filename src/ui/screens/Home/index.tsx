import { View, Text, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'

import { Card, Weekly } from '../../components'
import { CircularProgress } from '../../components/CircleProgress'

import useStyles from './style'
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'
import { useWeek } from '../../../business'

const DATA_LIST_HABIT = [
  {
    id: 1,
    title: "Correr",
    description: "dias finalizados nessa semana",
    total: 3,
    count: 1,
    type: "IN_PROGRESS",
    habit: "RUNNING"
  },
  {
    id: 2,
    title: "Ler Livro",
    hour: "21:00",
    count: 30,
    type: "IN_PROGRESS",
    habit: "BOOK"
  },
  {
    id: 2,
    title: "Beber água",
    total: 3,
    count: 3,
    type: "COMPLETED",
    habit: "KEEP_HYDRATED"
  }
]

const DATA_LIST_TASK = [
  {
    id: 1,
    title: "Fazer limpeza do quarto"
  },
  {
    id: 2,
    title: "Arrumar jardim"
  },
  {
    id: 3,
    title: "Fazer Daily"
  },
]

const TAB_ARRAY = [
  {
    id: 1,
    name: "Hábitos",
    type: "habit"
  },
  {
    id: 2,
    name: "Tarefas",
    type: "task"
  }
]


export default function Home() {
  const [isSelected, setIsSelected] = useState<number>(0)
  const [selectedType, setSelectedType] = useState<string>("habit")


  const styles = useStyles()

  return (
    <View style={styles.container}>

      {/** Header  */}

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 32, marginBottom: 16}}>
        <View style={{ flexDirection: "row", alignItems: "center"}}>
          <View style={{ height: 40, width: 40, borderRadius: 25, backgroundColor: "#000000"}} />
          <Text style={{ marginLeft: 10}}>Today</Text>
        </View>
        <TouchableOpacity 
          activeOpacity={0.8}
          style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: "#7C91F4", justifyContent: "center", alignItems: "center"}}>
          <Text style={{ fontSize: 16, color: "#FFFFFF", fontWeight: "bold"}}>+</Text>
        </TouchableOpacity>
      </View>


      <Weekly />

      {/** Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Você estar quase terminando</Text>

        <View style={styles.bannerContent}>
          <View style={styles.progressValues}>
            <Text style={styles.bannerNumProgress}>2/3</Text>
            <Text style={styles.bannerNameProgress}>Habitos</Text>
          </View>

          <View style={styles.progressValues}> 
            <Text style={styles.bannerNumProgress}>2/5</Text>
            <Text style={styles.bannerNameProgress}>Task</Text>
          </View>
          
          <CircularProgress 
            size={100} 
            progress={64} 
            strokeWidth={10} 
            color="#7C91F4" 
            text="64%" 
            isSelected={false}
            fontSize={18}
          />
      
        </View>
      </View>
      

      {/** List the Habits and Tasks */}
      <View style={[styles.content, { marginBottom: 16 }]}>
       
          <Animated.View style={[styles.contentGroupButton]}>
            {TAB_ARRAY.map((item, index) => (
              <Pressable 
                key={index}
                style={[styles.contentButton, {
                  backgroundColor: isSelected === index ? "#7C91F4" : "rgba(204, 204, 204, 0.2)",
                  zIndex: isSelected === index ? 1 : 0,
                }]}
                onPress={() => {
                  setIsSelected(index)
                  setSelectedType(item.type)
                }}
              >
              <Text style={styles.contentButtonText}>{item.name}</Text>
            </Pressable>
            ))}
           
          </Animated.View>

      
        <FlatList 
          data={selectedType === "habit"? DATA_LIST_HABIT : DATA_LIST_TASK}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => 
            <Card 
              title={item.title} 
              description={item.description} 
              total={item.total}
              count={item.count}
              type={item.type}
              habit={item.habit}
              hour={item.hour}
            />
          }
        />
      </View>
    </View>
  )
}