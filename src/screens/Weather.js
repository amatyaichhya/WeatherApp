import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {setDate} from '../actions/dateActions';
import {fetchWeather, getWeather} from '../actions/weatherActions';
import {weatherStyles} from '../styles/weatherStyles';
import CardWeek from '../components/CardWeek';

export default function Weather() {
  const storeState = useSelector(state => state);
  const {date, week, weather} = storeState;

  const dispatch = useDispatch();

  const [current, setCurrent] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('Kathmandu');

  useEffect(() => {
    dispatch(setDate(0));
    dispatch(fetchWeather('Kathmandu'));
    setCurrent('Today');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = key => {
    if (key === 1) {
      setCurrent('Tomorrow');
      dispatch(setDate(1));
    } else {
      setCurrent('This Week');
      // setCurrent(day);
      dispatch(setDate(key));
    }
    dispatch(getWeather(key));
  };

  const searchHandler = () => {
    Keyboard.dismiss();
    setCity(location);
    dispatch(fetchWeather(location));
    dispatch(setDate(0));
    setCurrent('Today');
    setLocation(null);
  };

  const {all, selected} = weather;
  // const {main, wind} = selected;
  // const {humidity, temp, pressure} = main;
  // const {speed} = wind;

  const humidity = selected?.main?.humidity;
  const temp = selected?.main?.temp;
  const pressure = selected?.main?.pressure;
  const speed = selected?.wind?.speed;
  const icon = selected?.weather?.[0].icon;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={weatherStyles.container}>
        <View style={weatherStyles.header}>
          <View style={weatherStyles.searchBar}>
            <TextInput
              placeholder="Search city"
              value={location}
              onChangeText={text => setLocation(text)}
              style={weatherStyles.input}
            />
            <TouchableOpacity onPress={() => searchHandler()}>
              <Icon name="search" size={20} style={weatherStyles.search} />
            </TouchableOpacity>
          </View>
        </View>
        {weather.loading ? (
          <View style={weatherStyles.container}>
            <ActivityIndicator color="grey" size={35} />
          </View>
        ) : weather.error ? (
          <View style={weatherStyles.container}>
            <Text style={weatherStyles.errorText}>City not found</Text>
            <Icon name="refresh" color="slateblue" size={25} />
          </View>
        ) : (
          <View style={weatherStyles.content}>
            <View style={weatherStyles.section1}>
              <View style={weatherStyles.locationContent}>
                <Text style={weatherStyles.location}>{city}</Text>
                <Icon name="chevron-down" color="white" size={15} />
              </View>

              <Text style={weatherStyles.current}>{current}</Text>
              <Text style={weatherStyles.date}>{date}</Text>

              <View style={weatherStyles.tempContent}>
                <Image
                  style={weatherStyles.weatherIcon}
                  source={{
                    uri: `https://openweathermap.org/img/wn/${icon}@4x.png`,
                  }}
                />
                <Text style={weatherStyles.temperature}>{temp}&deg;C</Text>
              </View>

              <View style={weatherStyles.detailContent}>
                <Image
                  source={require('../assets/temperature.png')}
                  style={weatherStyles.detailImage}
                />
                <Image
                  source={require('../assets/wind.png')}
                  style={weatherStyles.detailImage}
                />
                <Image
                  source={require('../assets/humidity.png')}
                  style={weatherStyles.detailImage}
                />
              </View>

              <View style={weatherStyles.textContent}>
                <Text style={[weatherStyles.text, weatherStyles.textPressure]}>
                  Pressure
                </Text>
                <Text style={weatherStyles.text}>Wind</Text>
                <Text style={weatherStyles.text}>Humidity</Text>
              </View>

              <View style={weatherStyles.mainContent}>
                <Text style={weatherStyles.main}>{pressure} hPa</Text>
                <Text style={weatherStyles.main}>{speed} m/sec</Text>
                <Text style={weatherStyles.main}>{humidity} %</Text>
              </View>
            </View>

            <View style={weatherStyles.section2}>
              <View style={weatherStyles.card}>
                <CardWeek
                  clickHandler={clickHandler}
                  id={1}
                  icon={all.list[1].weather[0].icon}
                  day={week.nextDate1}
                  temp={all.list[1].main.temp}
                />
                <CardWeek
                  clickHandler={clickHandler}
                  id={2}
                  icon={all.list[2].weather[0].icon}
                  day={week.nextDate2}
                  temp={all.list[2].main.temp}
                />
                <CardWeek
                  clickHandler={clickHandler}
                  id={3}
                  icon={all.list[3].weather[0].icon}
                  day={week.nextDate3}
                  temp={all.list[3].main.temp}
                />
                <CardWeek
                  clickHandler={clickHandler}
                  id={4}
                  icon={all.list[4].weather[0].icon}
                  day={week.nextDate4}
                  temp={all.list[4].main.temp}
                />
                <CardWeek
                  clickHandler={clickHandler}
                  id={5}
                  icon={all.list[5].weather[0].icon}
                  day={week.nextDate5}
                  temp={all.list[5].main.temp}
                />
                <CardWeek
                  clickHandler={clickHandler}
                  id={6}
                  icon={all.list[6].weather[0].icon}
                  day={week.nextDate6}
                  temp={all.list[6].main.temp}
                />
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
