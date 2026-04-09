import React, {useEffect, useRef} from 'react';
import {View, ScrollView, ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

import {Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

export const owwlmindthinkinhtmlLoader = ` <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            overflow: hidden;
          }

          body {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .loader {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            box-sizing: border-box;
            border-top: 8px solid #fff;
            border-left: 8px solid #fff;
            border-right: 8px solid transparent;
            border-bottom: 8px solid transparent;
            animation: loader 0.7s infinite linear;
          }

          @keyframes loader {
            to {
              transform: rotate(360deg);
            }
          }
        </style>
      </head>
      <body>
        <div class="loader"></div>
      </body>
    </html>`;

const Owwlmindthinkinnldrr = () => {
  const navigation = useNavigation();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      navigation.replace('Owwlmindthinkinnonbrd');
    }, 6000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
        console.log('timer cleared');
      }
    };
  }, [navigation]);

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#3E4464', '#24283D']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <WebView
            originWhitelist={['*']}
            source={{html: owwlmindthinkinhtmlLoader}}
            style={{width: 260, height: 80, backgroundColor: 'transparent'}}
            scrollEnabled={false}
            transparent={true}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Owwlmindthinkinnldrr;
