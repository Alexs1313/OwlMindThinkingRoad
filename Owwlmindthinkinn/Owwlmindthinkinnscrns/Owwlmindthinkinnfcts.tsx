import {
  owwlmindthinkinGetSavedIds,
  owwlmindthinkinToggleSavedId,
} from '../Owwlmindthinkinnsaved';

import {
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';

import Owwlmindthinkinnlayt from '../Owwlmindthinkinncmpn/Owwlmindthinkinnlayt';
import {useFocusEffect} from '@react-navigation/native';

export const owwlmindthinkinData = [
  {
    id: 1,
    text: 'Wisdom is not about knowing everything, but knowing what matters.',
  },
  {
    id: 2,
    text: 'People who admit they don’t know something are often the ones who learn the fastest.',
  },
  {
    id: 3,
    text: 'Listening carefully is a stronger sign of intelligence than speaking often.',
  },
  {
    id: 4,
    text: 'Wise decisions are usually made after a pause, not in a rush.',
  },
  {id: 5, text: 'Experience without reflection does not become wisdom.'},
  {
    id: 6,
    text: 'Asking the right question is often more powerful than giving an answer.',
  },
  {
    id: 7,
    text: 'The ability to change your mind is a sign of growth, not weakness.',
  },
  {
    id: 8,
    text: 'Wisdom grows when you learn from mistakes instead of hiding them.',
  },
  {
    id: 9,
    text: 'Not every problem needs a solution — some need understanding.',
  },
  {id: 10, text: 'Silence can reveal more than words.'},
  {id: 11, text: 'People who think deeply often speak simply.'},
  {
    id: 12,
    text: 'The more you learn, the more you realize how much you don’t know.',
  },
  {id: 13, text: 'Wisdom is often invisible — it shows in actions, not words.'},
  {
    id: 14,
    text: 'Emotional control is one of the strongest forms of intelligence.',
  },
  {
    id: 15,
    text: 'Seeing both sides of a situation is a key part of wise thinking.',
  },
  {id: 16, text: 'Quick reactions are easy. Thoughtful responses take effort.'},
  {id: 17, text: 'Wisdom often comes from observing patterns over time.'},
  {
    id: 18,
    text: 'Being right is less important than understanding the full picture.',
  },
  {id: 19, text: 'True understanding takes time — it can’t be rushed.'},
  {id: 20, text: 'Doubt is not always bad — it can lead to better thinking.'},
  {
    id: 21,
    text: 'Wise people don’t try to control everything — they focus on what they can influence.',
  },
  {
    id: 22,
    text: 'Knowing when to stop is as important as knowing when to act.',
  },
  {id: 23, text: 'Curiosity is one of the roots of wisdom.'},
  {id: 24, text: 'You don’t need to speak to show understanding.'},
  {id: 25, text: 'Awareness of your own limits is a powerful skill.'},
  {id: 26, text: 'Wisdom often feels quiet, not loud.'},
  {id: 27, text: 'People who observe more often make fewer mistakes.'},
  {id: 28, text: 'A simple solution is often better than a complicated one.'},
  {id: 29, text: 'Thinking before acting saves more time than acting fast.'},
  {id: 30, text: 'Wisdom is built over time, not in a single moment.'},
];

const Owwlmindthinkinnfcts = () => {
  const [owwlmindthinkinSavedIds, setOwwlmindthinkinSavedIds] = useState<
    number[]
  >([]);

  useFocusEffect(() => {
    let active = true;
    (async () => {
      const ids = await owwlmindthinkinGetSavedIds('facts');
      if (active) {
        setOwwlmindthinkinSavedIds(ids);
      }
    })();
    return () => {
      active = false;
    };
  });

  const owwlmindthinkinToggleSaved = async (id: number) => {
    const next = await owwlmindthinkinToggleSavedId('facts', id);
    setOwwlmindthinkinSavedIds(next);
  };

  const owwlmindthinkinShare = async (text: string) => {
    try {
      await Share.share({message: text});
    } catch {
      console.log('error');
    }
  };

  return (
    <Owwlmindthinkinnlayt>
      <View style={styles.owwlmindthinkincontainer}>
        <View style={styles.owwlmindthinkinheaderpill}>
          <Text style={styles.owwlmindthinkinheadertext}>Wisdom Facts</Text>
        </View>

        <View style={styles.owwlmindthinkinlist}>
          {owwlmindthinkinData.map(item => (
            <View key={item.id} style={styles.owwlmindthinkincard}>
              <Image
                style={styles.owwlmindthinkincardimage}
                source={require('../../assets/i/owwlmindthinton2.png')}
              />
              <Text style={styles.owwlmindthinkindescriptioncenter}>
                {item.text}
              </Text>

              <View style={styles.owwlmindthinkinrow}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.owwlmindthinkinsharebutton}
                  onPress={() => owwlmindthinkinShare(item.text)}>
                  <Text style={styles.owwlmindthinkinsharebuttontext}>
                    Share
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={
                    owwlmindthinkinSavedIds.includes(item.id)
                      ? styles.owwlmindthinkinsaveiconbuttonactive
                      : styles.owwlmindthinkinsaveiconbutton
                  }
                  onPress={() => owwlmindthinkinToggleSaved(item.id)}>
                  <Image
                    source={
                      owwlmindthinkinSavedIds.includes(item.id)
                        ? require('../../assets/i/owwlmindthisaved.png')
                        : require('../../assets/i/owwlmindthinsave.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Owwlmindthinkinnlayt>
  );
};

export default Owwlmindthinkinnfcts;

const styles = StyleSheet.create({
  owwlmindthinkinrow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },

  owwlmindthinkinsaveiconbutton: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#FECF4A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkincontainer: {
    flex: 1,
    paddingTop: 65,
    paddingBottom: 160,
    alignItems: 'center',
  },
  owwlmindthinkinheaderpill: {
    width: '92%',
    paddingVertical: 14,
    backgroundColor: '#3E4464',
    borderRadius: 18,
    borderWidth: 10,
    borderColor: '#24283D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinheadertext: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  owwlmindthinkinlist: {
    width: '92%',
    marginTop: 20,
    gap: 10,
  },
  owwlmindthinkincard: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#3E4464',
    borderRadius: 19,
    borderWidth: 7,
    borderColor: '#24283D',
  },
  owwlmindthinkincardimage: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  owwlmindthinkindescriptioncenter: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 21,
    textAlign: 'center',
  },

  owwlmindthinkinsaveiconbuttonactive: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FECF4A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinsaveicontext: {
    fontSize: 20,
  },
  owwlmindthinkinsharebutton: {
    backgroundColor: '#B63B76',
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  owwlmindthinkinsharebuttontext: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
