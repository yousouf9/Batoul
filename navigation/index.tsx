/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View, StyleSheet, Image } from 'react-native';
import {Octicons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/Chatroom';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { TabBarIndicator } from 'react-native-tab-view';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: Colors.light.tint,
      },
      headerShadowVisible:false,
      headerTintColor: Colors.light.background,
      headerTitleAlign:"left",
    }}
    >
      <Stack.Screen name="Root" component={TopTabNavigator} options={{ 
        headerShown: true, 
        title:"Batoul",
        headerRight:()=>(
          <View style={styles.rootHeaderStyle}>
            <Octicons name='search' size={22}  color={Colors.light.background}/>
            <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background}/>
          </View>
        )
        }} />
      <Stack.Screen 
        name='Chatroom' 
        component={ChatRoomScreen}  
        options={({ route })=>({
            title:route.params.name,
            headerBackTitle:"Back",
            id: route.params.id,
            headerRight:()=>(
              <View style={{

                  flexDirection:"row",
                  width:100,
                  justifyContent:"space-between",              
              }}>
                <FontAwesome5 name="video" size={20}  color={Colors.light.background}/>
                <MaterialIcons name="call" size={20} color={Colors.light.background}/>
                <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background}/>
              </View>
            )
        })} />
      
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const TopTab = createMaterialTopTabNavigator<RootTabParamList>();


function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="Chats"
    
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle:{
          backgroundColor: Colors[colorScheme].tint},
          tabBarIndicatorStyle:{
            backgroundColor:Colors[colorScheme].background,
            height:3
          },
          tabBarShowIcon:true
      }}
      >
      <TopTab.Screen
        name="Camera"
        component={TabTwoScreen}
        options={{
          title: 'Camera',
          tabBarIcon: ({color})=> <Fontisto name='camera'  color={color} size={17} style={{
            marginBottom:0
          }} />,
          tabBarLabel: () => null
        }}
        
      />
      <TopTab.Screen
        name="Chats"
        component={ChatScreen}
        options={({ navigation }: RootTabScreenProps<'Chats'>) => ({
          title: 'Chats',
          tabBarLabelStyle:{fontWeight: 'bold'},
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <TopTab.Screen
        name="Status"
        component={TabTwoScreen}
        options={{
          title: 'Status',
        }}
      />
      <TopTab.Screen
        name="Calls"
        component={TabTwoScreen}
        options={{
          title: 'Calls',
        }}
      />
    </TopTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const displaceHeasderImage = (image:string)=> {

}

const styles = StyleSheet.create({
  rootHeaderStyle:{
    flexDirection:"row",
    width:60,
    justifyContent:"space-between"
  }
})