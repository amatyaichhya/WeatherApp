import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function CardWeek({clickHandler, id, icon, day, temp}) {
  return (
    <View elevation={5} style={styles.card}>
      <TouchableOpacity onPress={() => clickHandler(id)}>
        <Text style={styles.text}>{day}</Text>
        <Image
          style={{height: 60, width: 60}}
          source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}
        />
        <Text style={styles.temp}>{temp}&deg;</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 55,
    height: 130,
    marginHorizontal: 5,
    borderRadius: 30,
    backgroundColor: '#E0DAFE',
    shadowColor: '#5f5f5f',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  text: {
    color: '#5f5f5f',
    textAlign: 'center',
    marginTop: 15,
  },
  temp: {
    color: '#5f5f5f',
    textAlign: 'center',
    marginVertical: 0,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
