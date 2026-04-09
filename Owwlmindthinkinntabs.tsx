import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
  type ViewStyle,
} from 'react-native';

import Owwlmindthinkinnlgnds from './Owwlmindthinkinn/Owwlmindthinkinnscrns/Owwlmindthinkinnlgnds';
import Owwlmindthinkinnfcts from './Owwlmindthinkinn/Owwlmindthinkinnscrns/Owwlmindthinkinnfcts';
import Owwlmindthinkinnsvd from './Owwlmindthinkinn/Owwlmindthinkinnscrns/Owwlmindthinkinnsvd';

import Owwlmindthinkinnqqz from './Owwlmindthinkinn/Owwlmindthinkinnscrns/Owwlmindthinkinnqqz';

import Owwlmindthinkinnmath from './Owwlmindthinkinn/Owwlmindthinkinnscrns/Owwlmindthinkinnmath';
import Owwlmindthinkinnrddls from './Owwlmindthinkinn/Owwlmindthinkinnscrns/Owwlmindthinkinnrddls';

const Tab = createBottomTabNavigator();

const AnimatedTabButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[style as ViewStyle, styles.owwlmindthinkintabButton]}
      {...rest}>
      <Animated.View
        style={[styles.owwlmindthinkintabButtonInner, {transform: [{scale}]}]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const Owwlmindthinkinntabs = () => {
  const {height, width} = useWindowDimensions();
  const isLandscape = height < width;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.owwlmindthinkintabBar,
          {height: isLandscape ? 80 : 92},
        ],

        tabBarButton: props => (
          <AnimatedTabButton {...(props as Record<string, unknown>)} />
        ),
      }}>
      <Tab.Screen
        name="Owwlmindthinkinnlgnds"
        component={Owwlmindthinkinnlgnds}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.owwlmindthinkintabIconWrap}>
              <Image
                source={require('./assets/i/owwlmindthintab1.png')}
                tintColor={focused ? '#000' : 'rgb(95, 89, 89)'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Owwlmindthinkinnfcts"
        component={Owwlmindthinkinnfcts}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.owwlmindthinkintabIconWrap}>
              <Image
                source={require('./assets/i/owwlmindthintab2.png')}
                tintColor={focused ? '#000' : 'rgb(95, 89, 89)'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Owwlmindthinkinnsvd"
        component={Owwlmindthinkinnsvd}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.owwlmindthinkintabIconWrap}>
              <Image
                source={require('./assets/i/owwlmindthintab3.png')}
                tintColor={focused ? '#000' : 'rgb(95, 89, 89)'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Owwlmindthinkinnqqz"
        component={Owwlmindthinkinnqqz}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.owwlmindthinkintabIconWrap}>
              <Image
                source={require('./assets/i/owwlmindthintab4.png')}
                tintColor={focused ? '#000' : 'rgb(95, 89, 89)'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Owwlmindthinkinnmath"
        component={Owwlmindthinkinnmath}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.owwlmindthinkintabIconWrap}>
              <Image
                source={require('./assets/i/owwlmindthintab5.png')}
                tintColor={focused ? '#000' : 'rgb(95, 89, 89)'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Owwlmindthinkinnrddls"
        component={Owwlmindthinkinnrddls}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.owwlmindthinkintabIconWrap}>
              <Image
                source={require('./assets/i/owwlmindthintab6.png')}
                tintColor={focused ? '#000' : 'rgb(95, 89, 89)'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  owwlmindthinkintabIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  owwlmindthinkintabBar: {
    elevation: 0,
    paddingTop: 22,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 18,
    borderColor: '#424242',
    backgroundColor: '#FECF4A',
    height: 92,
    paddingBottom: 20,
    overflow: 'hidden',
    borderWidth: 5,
    borderTopWidth: 5,
    borderRadius: 33,
    bottom: 43,
    marginHorizontal: 16,
  },
  owwlmindthinkintabButton: {
    flex: 1,
  },
  owwlmindthinkintabButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Owwlmindthinkinntabs;
