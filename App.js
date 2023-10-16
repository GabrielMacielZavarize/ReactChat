import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importe o ícone MaterialIcons
import { ListItem, Icon as RNEIcon } from 'react-native-elements'; // Importe ListItem e Icon do react-native-elements
import ChatPrincipal from './Chatprincipal';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.blueRectangle}>
        <Text style={styles.chatTitle}>BAIRROS</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Santa Luzia')}
      >
        <ListItem
          containerStyle={styles.buttonContent}
          bottomDivider
          style={{ backgroundColor: '#304269' }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.buttonText}>Santa Luzia</ListItem.Title>
          </ListItem.Content>
          <RNEIcon name="keyboard-arrow-right" size={30} color="black" />
        </ListItem>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Conversas">
        <Stack.Screen name="Conversas" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Santa Luzia"
          component={ChatPrincipal}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#304269',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  blueRectangle: {
    backgroundColor: '#304269',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    width: '100%',
    marginTop: 50,
    backgroundColor: '#F3F3F3',
    paddingVertical: 10,
    borderRadius: 0,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 55,
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
