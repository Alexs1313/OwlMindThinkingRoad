import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Owwlmindthinkinnlayt from '../Owwlmindthinkinncmpn/Owwlmindthinkinnlayt';
import {useNavigation} from '@react-navigation/native';

import {useState} from 'react';

const owwlmindthinkinData = [
  {
    id: 1,
    title: "Hello, I'm Ulu",
    buttonLabel: 'Hello',
    image: require('../../assets/i/owwlmindthinton1.png'),
    subtext:
      'This is an app where you can simply pump up your thinking a little. Without complicated rules and without stress - opened, looked, thought. I will be there and will throw you various interesting things.',
  },

  {
    id: 2,
    title: 'Stories with meaning',
    buttonLabel: 'Next',
    image: require('../../assets/i/owwlmindthinton2.png'),
    subtext: `Here are short legends. They are simple, but sometimes they make you look at things differently.
This is not teaching or lectures - just stories that can touch.`,
  },

  {
    id: 3,
    title: 'Riddles and tasks',
    buttonLabel: 'Continue',
    image: require('../../assets/i/owwlmindthinton3.png'),
    subtext: `Here are riddles and simple examples.
You can test yourself, think a little or just kill time with benefit.
Sometimes the answers are not as obvious as they seem.`,
  },
  {
    id: 4,
    title: 'Quiz about you',
    buttonLabel: 'Good',
    image: require('../../assets/i/owwlmindthinton4.png'),
    subtext: `There is a small quiz that shows how you think in different situations.
There are no right or wrong results here - it's just interesting to look at yourself from the side.`,
  },
  {
    id: 5,
    title: 'Save what you liked',
    buttonLabel: 'Start',
    image: require('../../assets/i/owwlmindthinton5.png'),
    subtext: `You can save facts or stories that you liked.
To return to them later or just not to lose something interesting.`,
  },
];

const Owwlmindthinkinnonbrd = () => {
  const navigation = useNavigation();
  const [owwlmindthinkinIdx, setOwwlmindthinkinIdx] = useState(0);

  const owwlmindthinkinNext = () => {
    owwlmindthinkinIdx < 4
      ? setOwwlmindthinkinIdx(owwlmindthinkinIdx + 1)
      : navigation.replace('Owwlmindthinkinntabs');
  };
  return (
    <Owwlmindthinkinnlayt>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.owwlmindthinkinskipbutton}
        onPress={() => navigation.replace('Owwlmindthinkinntabs')}>
        <Text style={styles.owwlmindthinkinskiptext}>SKIP</Text>
      </TouchableOpacity>

      <View style={styles.owwlmindthinkincontainer}>
        <Image source={owwlmindthinkinData[owwlmindthinkinIdx].image} />

        <View style={styles.owwlmindthinkinbox}>
          <Text style={styles.owwlmindthinkintext}>
            {owwlmindthinkinData[owwlmindthinkinIdx].title}
          </Text>
          <Text style={styles.owwlmindthinkinsubtext}>
            {owwlmindthinkinData[owwlmindthinkinIdx].subtext}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.owwlmindthinkinbutton}
            onPress={owwlmindthinkinNext}>
            <Text style={styles.owwlmindthinkinbuttontext}>
              {owwlmindthinkinData[owwlmindthinkinIdx].buttonLabel}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Owwlmindthinkinnlayt>
  );
};

const styles = StyleSheet.create({
  owwlmindthinkinskiptext: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  owwlmindthinkinskipbutton: {
    position: 'absolute',
    top: 40,
    right: 18,
    padding: 10,
    zIndex: 1,
  },
  owwlmindthinkincontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },
  owwlmindthinkinbox: {
    width: '90%',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#3E4464',
    borderRadius: 50,
    borderWidth: 10,
    borderColor: '#24283D',
    marginTop: 30,
    minHeight: 250,
    justifyContent: 'center',
  },
  owwlmindthinkintext: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 13,
  },
  owwlmindthinkinsubtext: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  owwlmindthinkinbuttontext: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  owwlmindthinkinbutton: {
    backgroundColor: '#3FC65D',
    width: 176,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 25,
  },
});

export default Owwlmindthinkinnonbrd;
