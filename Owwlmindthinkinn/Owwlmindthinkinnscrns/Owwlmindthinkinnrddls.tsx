import {useCallback, useMemo, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Owwlmindthinkinnlayt from '../Owwlmindthinkinncmpn/Owwlmindthinkinnlayt';

const owwlmindthinkinData = [
  {
    id: 1,
    question: 'What has keys but can’t open locks?',
    options: ['A) Map', 'B) Piano', 'C) Door', 'D) Box'],
    answerIndex: 1,
  },
  {
    id: 2,
    question: 'What has a face but no eyes?',
    options: ['A) Clock', 'B) Mirror', 'C) Book', 'D) Plate'],
    answerIndex: 0,
  },
  {
    id: 3,
    question: 'What can fly without wings?',
    options: ['A) Bird', 'B) Plane', 'C) Time', 'D) Kite'],
    answerIndex: 2,
  },
  {
    id: 4,
    question: 'What gets wet while drying?',
    options: ['A) Water', 'B) Towel', 'C) Soap', 'D) Cloth'],
    answerIndex: 1,
  },
  {
    id: 5,
    question: 'What has a neck but no head?',
    options: ['A) Shirt', 'B) Bottle', 'C) Snake', 'D) Tree'],
    answerIndex: 1,
  },
  {
    id: 6,
    question: 'What goes up but never comes down?',
    options: ['A) Ball', 'B) Smoke', 'C) Age', 'D) Air'],
    answerIndex: 2,
  },
  {
    id: 7,
    question: 'What has one eye but cannot see?',
    options: ['A) Needle', 'B) Camera', 'C) Cyclops', 'D) Button'],
    answerIndex: 0,
  },
  {
    id: 8,
    question: 'What is always in front of you but can’t be seen?',
    options: ['A) Air', 'B) Future', 'C) Light', 'D) Wind'],
    answerIndex: 1,
  },
  {
    id: 9,
    question: 'What has hands but can’t clap?',
    options: ['A) Robot', 'B) Clock', 'C) Doll', 'D) Statue'],
    answerIndex: 1,
  },
  {
    id: 10,
    question: 'What runs but never walks?',
    options: ['A) Dog', 'B) Water', 'C) Wind', 'D) Fire'],
    answerIndex: 1,
  },
  {
    id: 11,
    question: 'What can you catch but not throw?',
    options: ['A) Ball', 'B) Stick', 'C) Cold', 'D) Shadow'],
    answerIndex: 2,
  },
  {
    id: 12,
    question: 'What has a ring but no finger?',
    options: ['A) Phone', 'B) Bell', 'C) Circle', 'D) Bracelet'],
    answerIndex: 0,
  },
  {
    id: 13,
    question: 'What gets bigger the more you take away?',
    options: ['A) Box', 'B) Hole', 'C) Space', 'D) Shadow'],
    answerIndex: 1,
  },
  {
    id: 14,
    question: 'What has many teeth but can’t bite?',
    options: ['A) Dog', 'B) Comb', 'C) Saw', 'D) Lion'],
    answerIndex: 1,
  },
  {
    id: 15,
    question: 'What has legs but doesn’t walk?',
    options: ['A) Table', 'B) Chair', 'C) Spider', 'D) Animal'],
    answerIndex: 0,
  },
  {
    id: 16,
    question: 'What can travel around the world while staying in one place?',
    options: ['A) Airplane', 'B) Internet', 'C) Stamp', 'D) Satellite'],
    answerIndex: 2,
  },
  {
    id: 17,
    question: 'What is full of holes but still holds water?',
    options: ['A) Net', 'B) Sponge', 'C) Bucket', 'D) Cloth'],
    answerIndex: 1,
  },
  {
    id: 18,
    question: 'What has a bottom at the top?',
    options: ['A) Tree', 'B) Leg', 'C) Feet', 'D) Shoe'],
    answerIndex: 2,
  },
  {
    id: 19,
    question: 'What begins with T and ends with T and has T inside?',
    options: ['A) Tent', 'B) Teapot', 'C) Ticket', 'D) Toast'],
    answerIndex: 1,
  },
  {
    id: 20,
    question: 'What has a heart that doesn’t beat?',
    options: ['A) Stone', 'B) Art', 'C) Deck of cards', 'D) Book'],
    answerIndex: 2,
  },
  {
    id: 21,
    question: 'What can fill a room but takes no space?',
    options: ['A) Air', 'B) Sound', 'C) Light', 'D) Heat'],
    answerIndex: 2,
  },
  {
    id: 22,
    question: 'What has a head, a tail, but no body?',
    options: ['A) Snake', 'B) Coin', 'C) Animal', 'D) Rope'],
    answerIndex: 1,
  },
  {
    id: 23,
    question: 'What is always coming but never arrives?',
    options: ['A) Night', 'B) Bus', 'C) Tomorrow', 'D) Rain'],
    answerIndex: 2,
  },
  {
    id: 24,
    question: 'What has an eye but cannot see?',
    options: ['A) Storm', 'B) Needle', 'C) Camera', 'D) Mask'],
    answerIndex: 1,
  },
  {
    id: 25,
    question: 'What can you break without touching it?',
    options: ['A) Glass', 'B) Silence', 'C) Stone', 'D) Ice'],
    answerIndex: 1,
  },
  {
    id: 26,
    question: 'What goes through cities and fields but never moves?',
    options: ['A) Road', 'B) River', 'C) Wind', 'D) Train'],
    answerIndex: 0,
  },
  {
    id: 27,
    question: 'What has no life but can grow?',
    options: ['A) Plant', 'B) Fire', 'C) Hair', 'D) Shadow'],
    answerIndex: 3,
  },
  {
    id: 28,
    question:
      'What is light as a feather, yet even the strongest person can’t hold it for long?',
    options: ['A) Air', 'B) Breath', 'C) Paper', 'D) Smoke'],
    answerIndex: 1,
  },
  {
    id: 29,
    question: 'What has a mouth but doesn’t speak?',
    options: ['A) Cave', 'B) River', 'C) Bottle', 'D) Mask'],
    answerIndex: 1,
  },
  {
    id: 30,
    question:
      'What can you see once in a minute, twice in a moment, but never in a thousand years?',
    options: ['A) The letter M', 'B) Time', 'C) Light', 'D) Shadow'],
    answerIndex: 0,
  },
];

type OwwlmindthinkinRddlsPhase = 'intro' | 'riddle';

const Owwlmindthinkinnrddls = () => {
  const [owwlmindthinkinPhase, setOwwlmindthinkinPhase] =
    useState<OwwlmindthinkinRddlsPhase>('intro');
  const [owwlmindthinkinIdx, setOwwlmindthinkinIdx] = useState(0);
  const [owwlmindthinkinSelectedOption, setOwwlmindthinkinSelectedOption] =
    useState<number | null>(null);
  const [owwlmindthinkinChecked, setOwwlmindthinkinChecked] = useState(false);

  const owwlmindthinkinTotal = owwlmindthinkinData.length;

  const owwlmindthinkinCurrent = useMemo(() => {
    return owwlmindthinkinData[owwlmindthinkinIdx];
  }, [owwlmindthinkinIdx]);

  const owwlmindthinkinStart = () => {
    setOwwlmindthinkinIdx(0);
    setOwwlmindthinkinSelectedOption(null);
    setOwwlmindthinkinChecked(false);
    setOwwlmindthinkinPhase('riddle');
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        setOwwlmindthinkinPhase('intro');
      };
    }, []),
  );

  const owwlmindthinkinBack = () => {
    setOwwlmindthinkinPhase('intro');
  };

  const owwlmindthinkinCheck = () => {
    if (owwlmindthinkinSelectedOption == null) {
      return;
    }
    setOwwlmindthinkinChecked(true);
  };

  const owwlmindthinkinNext = () => {
    const next = (owwlmindthinkinIdx + 1) % owwlmindthinkinTotal;
    setOwwlmindthinkinIdx(next);
    setOwwlmindthinkinSelectedOption(null);
    setOwwlmindthinkinChecked(false);
  };

  const owwlmindthinkinPick = (idx: number) => {
    if (owwlmindthinkinChecked) {
      return;
    }
    setOwwlmindthinkinSelectedOption(idx);
  };

  return (
    <Owwlmindthinkinnlayt>
      <View style={styles.owwlmindthinkincontainer}>
        <View style={styles.owwlmindthinkinheaderrow}>
          <View style={styles.owwlmindthinkinheaderpill}>
            <Text style={styles.owwlmindthinkinheadertext}>Owl Riddles</Text>
            {owwlmindthinkinPhase === 'riddle' && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.owwlmindthinkinbackbutton}
                onPress={owwlmindthinkinBack}>
                <Image source={require('../../assets/i/owwlmindthback.png')} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {owwlmindthinkinPhase === 'intro' ? (
          <View style={styles.owwlmindthinkincard}>
            <Image
              style={styles.owwlmindthinkinowlbig}
              source={require('../../assets/i/owwlmindrddl.png')}
            />
            <Text style={styles.owwlmindthinkindescriptioncenter}>
              There are puzzles waiting for you here.{'\n'}
              Let's see how you can handle them.{'\n'}
              Don't rush - there's a catch!
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.owwlmindthinkinbuttonbig}
              onPress={owwlmindthinkinStart}>
              <Text style={styles.owwlmindthinkinbuttontext}>Start</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.owwlmindthinkinriddlewrap}>
            <View style={styles.owwlmindthinkincard}>
              <Image
                style={styles.owwlmindthinkinowlsmall}
                source={require('../../assets/i/owwlmindthinton2.png')}
              />
              <Text style={styles.owwlmindthinkintitlecenter}>
                {owwlmindthinkinCurrent.question}
              </Text>
            </View>

            <View style={styles.owwlmindthinkinoptions}>
              {owwlmindthinkinCurrent.options.map((label, idx) => {
                const isPicked = owwlmindthinkinSelectedOption === idx;
                const isAnswered = owwlmindthinkinChecked;
                const isCorrect = idx === owwlmindthinkinCurrent.answerIndex;

                const style = !isAnswered
                  ? isPicked
                    ? styles.owwlmindthinkinoptionselected
                    : styles.owwlmindthinkinoption
                  : isCorrect
                  ? styles.owwlmindthinkinoptioncorrect
                  : isPicked
                  ? styles.owwlmindthinkinoptionwrong
                  : styles.owwlmindthinkinoption;

                return (
                  <TouchableOpacity
                    key={`${owwlmindthinkinCurrent.id}-${idx}`}
                    activeOpacity={0.85}
                    style={style}
                    onPress={() => owwlmindthinkinPick(idx)}>
                    <Text style={styles.owwlmindthinkinoptiontext}>
                      {label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              style={
                owwlmindthinkinSelectedOption == null
                  ? styles.owwlmindthinkinbuttondisabled
                  : styles.owwlmindthinkinbuttonbig
              }
              onPress={
                owwlmindthinkinChecked
                  ? owwlmindthinkinNext
                  : owwlmindthinkinCheck
              }>
              <Text style={styles.owwlmindthinkinbuttontext}>
                {owwlmindthinkinChecked ? 'Next' : 'Check answer'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Owwlmindthinkinnlayt>
  );
};

export default Owwlmindthinkinnrddls;

const styles = StyleSheet.create({
  owwlmindthinkinbuttonbig: {
    backgroundColor: '#3FC65D',
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 21,
  },

  owwlmindthinkinbuttondisabled: {
    backgroundColor: '#3FC65D',
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 21,
    opacity: 0.75,
  },
  owwlmindthinkincontainer: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 160,
    alignItems: 'center',
  },
  owwlmindthinkinheaderrow: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinbackbutton: {
    position: 'absolute',
    left: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinbacktext: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    marginTop: -2,
  },
  owwlmindthinkinheaderpill: {
    width: '100%',
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
  owwlmindthinkincard: {
    width: '92%',
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: '#3E4464',
    borderRadius: 22,
    borderWidth: 7,
    borderColor: '#24283D',
    marginTop: 55,
    alignItems: 'center',
  },
  owwlmindthinkinriddlewrap: {
    width: '100%',
    alignItems: 'center',
  },
  owwlmindthinkindescriptioncenter: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 21,
    textAlign: 'center',
  },
  owwlmindthinkinowlbig: {
    marginBottom: 13,
  },
  owwlmindthinkinowlsmall: {
    width: 110,
    height: 110,
    marginBottom: 10,
  },
  owwlmindthinkintitlecenter: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  owwlmindthinkinoptions: {
    width: '79%',
    marginTop: 20,
    gap: 10,
  },
  owwlmindthinkinoption: {
    width: '100%',
    minHeight: 45,
    paddingHorizontal: 14,
    backgroundColor: '#24283D',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinoptionselected: {
    width: '100%',
    minHeight: 45,
    paddingHorizontal: 14,
    backgroundColor: '#24283D',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#3FC65D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinoptioncorrect: {
    width: '100%',
    minHeight: 45,
    paddingHorizontal: 14,
    backgroundColor: '#3FC65D',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinoptionwrong: {
    width: '100%',
    minHeight: 45,
    paddingHorizontal: 14,
    backgroundColor: '#E0393C',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinoptiontext: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  owwlmindthinkinhelpertext: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginTop: 10,
  },

  owwlmindthinkinbuttontext: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
