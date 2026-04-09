import {useCallback, useMemo, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Owwlmindthinkinnlayt from '../Owwlmindthinkinncmpn/Owwlmindthinkinnlayt';

const owwlmindthinkinData = [
  {
    id: 1,
    question: 'You need to make a decision. What do you do?',
    options: [
      'A) Decide quickly',
      'B) Think a bit',
      'C) Think for a long time',
      'D) Delay it',
    ],
  },
  {
    id: 2,
    question: 'Someone disagrees with you',
    options: [
      'A) Prove your point',
      'B) Listen',
      'C) Ignore',
      'D) Get annoyed',
    ],
  },
  {
    id: 3,
    question: 'You made a mistake',
    options: [
      'A) Forget it',
      'B) Analyze it',
      'C) Worry about it',
      'D) Pretend it’s fine',
    ],
  },
  {
    id: 4,
    question: 'You have free time',
    options: [
      'A) Scroll on your phone',
      'B) Think about something',
      'C) Watch something',
      'D) Just relax',
    ],
  },
  {
    id: 5,
    question: 'Something is unclear',
    options: [
      'A) Skip it',
      'B) Try to understand',
      'C) Google it',
      'D) Ask someone',
    ],
  },
  {
    id: 6,
    question: 'Someone gives you advice',
    options: ['A) Ignore it', 'B) Think about it', 'C) Accept it', 'D) Argue'],
  },
  {
    id: 7,
    question: 'You feel unsure',
    options: [
      'A) Take a risk',
      'B) Look into it more',
      'C) Wait',
      'D) Ask someone',
    ],
  },
  {
    id: 8,
    question: 'Something goes wrong',
    options: [
      'A) Get irritated',
      'B) Stay calm and think',
      'C) Switch focus',
      'D) Ignore it',
    ],
  },
  {
    id: 9,
    question: 'New situation',
    options: ['A) Act immediately', 'B) Observe', 'C) Wait', 'D) Feel lost'],
  },
  {
    id: 10,
    question: 'You hear new information',
    options: ['A) Believe it', 'B) Doubt it', 'C) Check it', 'D) Ignore it'],
  },
  {
    id: 11,
    question: 'You feel angry',
    options: [
      'A) React instantly',
      'B) Hold back',
      'C) Step away',
      'D) Stay silent',
    ],
  },
  {
    id: 12,
    question: 'You see someone succeed',
    options: [
      'A) Feel jealous',
      'B) Analyze it',
      'C) Feel inspired',
      'D) Ignore it',
    ],
  },
  {
    id: 13,
    question: 'Something feels difficult',
    options: [
      'A) Avoid it',
      'B) Try it',
      'C) Break it into parts',
      'D) Postpone it',
    ],
  },
  {
    id: 14,
    question: 'There is a problem',
    options: ['A) Panic', 'B) Think', 'C) Look for options', 'D) Wait'],
  },
  {
    id: 15,
    question: 'You are alone with your thoughts',
    options: ['A) Distract yourself', 'B) Think', 'C) Analyze', 'D) Rest'],
  },
];

type OwwlmindthinkinQuizPhase = 'intro' | 'quiz' | 'result';

const Owwlmindthinkinnqqz = () => {
  const [owwlmindthinkinPhase, setOwwlmindthinkinPhase] =
    useState<OwwlmindthinkinQuizPhase>('intro');
  const [owwlmindthinkinIdx, setOwwlmindthinkinIdx] = useState(0);
  const [owwlmindthinkinSelectedOption, setOwwlmindthinkinSelectedOption] =
    useState<number | null>(null);
  const [owwlmindthinkinResultPercent, setOwwlmindthinkinResultPercent] =
    useState<number>(89);

  const owwlmindthinkinTotal = owwlmindthinkinData.length;

  const owwlmindthinkinCurrent = useMemo(() => {
    return owwlmindthinkinData[owwlmindthinkinIdx];
  }, [owwlmindthinkinIdx]);

  const owwlmindthinkinStart = () => {
    setOwwlmindthinkinIdx(0);
    setOwwlmindthinkinSelectedOption(null);
    setOwwlmindthinkinPhase('quiz');
  };

  const owwlmindthinkinBack = () => {
    if (owwlmindthinkinPhase === 'quiz') {
      if (owwlmindthinkinIdx > 0) {
        setOwwlmindthinkinIdx(owwlmindthinkinIdx - 1);
        setOwwlmindthinkinSelectedOption(null);
        return;
      }
      setOwwlmindthinkinPhase('intro');
      return;
    }
    if (owwlmindthinkinPhase === 'result') {
      setOwwlmindthinkinPhase('intro');
    }
  };

  const owwlmindthinkinFinish = () => {
    const percent = 70 + Math.floor(Math.random() * 30);
    setOwwlmindthinkinResultPercent(percent);
    setOwwlmindthinkinPhase('result');
  };

  const owwlmindthinkinNext = () => {
    if (owwlmindthinkinSelectedOption == null) {
      return;
    }
    if (owwlmindthinkinIdx >= owwlmindthinkinTotal - 1) {
      owwlmindthinkinFinish();
      return;
    }
    setOwwlmindthinkinIdx(owwlmindthinkinIdx + 1);
    setOwwlmindthinkinSelectedOption(null);
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        setOwwlmindthinkinPhase('intro');
      };
    }, []),
  );

  const owwlmindthinkinShare = async (message: string) => {
    try {
      await Share.share({message});
    } catch {
      // ignore
    }
  };

  return (
    <Owwlmindthinkinnlayt>
      <View style={styles.owwlmindthinkincontainer}>
        <View style={styles.owwlmindthinkinheaderrow}>
          <View style={styles.owwlmindthinkinheaderpill}>
            <Text style={styles.owwlmindthinkinheadertext}>
              How Wise Are You?
            </Text>

            {(owwlmindthinkinPhase === 'quiz' ||
              owwlmindthinkinPhase === 'result') && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.owwlmindthinkinbackbutton}
                onPress={owwlmindthinkinBack}>
                <Image source={require('../../assets/i/owwlmindthback.png')} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {owwlmindthinkinPhase === 'intro' && (
          <View style={styles.owwlmindthinkincard}>
            <Image
              style={styles.owwlmindthinkinowlbig}
              source={require('../../assets/i/owwlmindtqz.png')}
            />
            <Text style={styles.owwlmindthinkindescriptioncenter}>
              This is not a test or a review.{'\n'}
              There are no right or wrong answers.{'\n\n'}
              Just choose what is closest to you.{'\n'}
              Let's see what your thinking style is.
            </Text>
            <Text style={styles.owwlmindthinkinquestioncountbig}>
              Questions: {owwlmindthinkinTotal}
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.owwlmindthinkinbuttonbig}
              onPress={owwlmindthinkinStart}>
              <Text style={styles.owwlmindthinkinbuttontext}>Next</Text>
            </TouchableOpacity>
          </View>
        )}

        {owwlmindthinkinPhase === 'quiz' && (
          <View style={styles.owwlmindthinkincard}>
            <Text style={styles.owwlmindthinkinquestioncount}>
              {owwlmindthinkinIdx + 1} \ {owwlmindthinkinTotal}
            </Text>
            <Text style={styles.owwlmindthinkindescriptioncenter}>
              {owwlmindthinkinCurrent.question}
            </Text>

            <Image
              style={styles.owwlmindthinkinowl}
              source={require('../../assets/i/owwlmindtqzp.png')}
            />

            <View style={styles.owwlmindthinkinoptions}>
              {owwlmindthinkinCurrent.options.map((label, idx) => {
                const isActive = owwlmindthinkinSelectedOption === idx;
                return (
                  <TouchableOpacity
                    key={`${owwlmindthinkinCurrent.id}-${idx}`}
                    activeOpacity={0.85}
                    style={
                      isActive
                        ? styles.owwlmindthinkinoptionactive
                        : styles.owwlmindthinkinoption
                    }
                    onPress={() => setOwwlmindthinkinSelectedOption(idx)}>
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
              onPress={owwlmindthinkinNext}>
              <Text style={styles.owwlmindthinkinbuttontext}>Next</Text>
            </TouchableOpacity>
          </View>
        )}

        {owwlmindthinkinPhase === 'result' && (
          <View style={styles.owwlmindthinkincard}>
            <Image
              style={styles.owwlmindthinkinowlbig}
              source={require('../../assets/i/owwlmindtqz.png')}
            />
            <Text style={styles.owwlmindthinkindescriptioncenter}>
              You have a very interesting train of thought, thank you for your
              answers!
            </Text>

            <Text style={styles.owwlmindthinkinresultline}>
              You are{' '}
              <Text style={styles.owwlmindthinkinresultpercent}>
                {owwlmindthinkinResultPercent}%
              </Text>{' '}
              wise.
            </Text>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.owwlmindthinkinsharebutton}
              onPress={() =>
                owwlmindthinkinShare(
                  `You have a very interesting train of thought, thank you for your
              answers! \n I am ${owwlmindthinkinResultPercent}% wise.`,
                )
              }>
              <Text style={styles.owwlmindthinkinsharebuttontext}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              style={[
                styles.owwlmindthinkinbuttonbig,
                {width: 176, height: 50, borderRadius: 20},
              ]}
              onPress={owwlmindthinkinStart}>
              <Text style={styles.owwlmindthinkinbuttontext}>Try again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Owwlmindthinkinnlayt>
  );
};

export default Owwlmindthinkinnqqz;

const styles = StyleSheet.create({
  owwlmindthinkinoption: {
    width: '100%',
    minHeight: 45,
    paddingHorizontal: 14,
    backgroundColor: '#24283D',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinoptionactive: {
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

  owwlmindthinkincontainer: {
    flex: 1,
    paddingTop: 65,
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
    left: 4,
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
    fontSize: 20,
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
    marginTop: 16,
    alignItems: 'center',
  },
  owwlmindthinkindescriptioncenter: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 21,
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 6,
  },
  owwlmindthinkinquestioncount: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 10,
  },
  owwlmindthinkinquestioncountbig: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginTop: 14,
    marginBottom: 8,
  },
  owwlmindthinkinowl: {
    marginTop: 12,
    marginBottom: 6,
  },
  owwlmindthinkinowlbig: {
    marginBottom: 15,
  },
  owwlmindthinkinoptions: {
    width: '100%',
    marginTop: 14,
    gap: 10,
  },

  owwlmindthinkinoptiontext: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  owwlmindthinkinbuttonbig: {
    backgroundColor: '#3FC65D',
    width: 176,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 18,
  },
  owwlmindthinkinbuttondisabled: {
    backgroundColor: '#3FC65D',
    width: 176,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 18,
    opacity: 0.45,
  },
  owwlmindthinkinbuttontext: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  owwlmindthinkinresultline: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
    textAlign: 'center',
  },
  owwlmindthinkinresultpercent: {
    color: '#FECF4A',
    fontFamily: 'Montserrat-Bold',
  },
  owwlmindthinkinsharebutton: {
    backgroundColor: '#C63F80',
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    marginTop: 16,
  },
  owwlmindthinkinsharebuttontext: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
