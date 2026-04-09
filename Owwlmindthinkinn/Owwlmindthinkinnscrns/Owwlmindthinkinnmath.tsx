import Owwlmindthinkinnlayt from '../Owwlmindthinkinncmpn/Owwlmindthinkinnlayt';
import {useCallback, useMemo, useState} from 'react';

import {useFocusEffect} from '@react-navigation/native';

import {
  Image,
  Share,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const owwlmindthinkinData = [
  {id: 1, task: '7 + 9 = ___', answer: 16},
  {id: 2, task: '18 - 6 = ___', answer: 12},
  {id: 3, task: '4 × 5 = ___', answer: 20},
  {id: 4, task: '24 ÷ 6 = ___', answer: 4},
  {id: 5, task: '11 + 13 = ___', answer: 24},
  {id: 6, task: '20 - 8 = ___', answer: 12},
  {id: 7, task: '9 × 3 = ___', answer: 27},
  {id: 8, task: '36 ÷ 6 = ___', answer: 6},
  {id: 9, task: '10 + 5 × 2 = ___', answer: 20},
  {id: 10, task: '(10 + 5) × 2 = ___', answer: 30},
  {id: 11, task: '30 - 4 × 5 = ___', answer: 10},
  {id: 12, task: '(30 - 4) × 5 = ___', answer: 130},
  {id: 13, task: '80 ÷ 10 + 2 = ___', answer: 10},
  {id: 14, task: '80 ÷ (10 + 2) = ___', answer: 6},
  {id: 15, task: '2 × 4 × 5 = ___', answer: 40},
  {id: 16, task: '50 - 10 × 3 = ___', answer: 20},
  {id: 17, task: '(50 - 10) × 3 = ___', answer: 120},
  {id: 18, task: '100 ÷ 5 × 2 = ___', answer: 40},
  {id: 19, task: '45 ÷ 5 + 7 = ___', answer: 16},
  {id: 20, task: '60 ÷ (5 + 5) = ___', answer: 6},
];

type OwwlmindthinkinMathPhase = 'intro' | 'task' | 'result';

const Owwlmindthinkinnmath = () => {
  const [owwlmindthinkinPhase, setOwwlmindthinkinPhase] =
    useState<OwwlmindthinkinMathPhase>('intro');
  const [owwlmindthinkinIdx, setOwwlmindthinkinIdx] = useState(0);
  const [owwlmindthinkinAnswerText, setOwwlmindthinkinAnswerText] =
    useState('');
  const [owwlmindthinkinIsCorrect, setOwwlmindthinkinIsCorrect] = useState<
    boolean | null
  >(null);

  const owwlmindthinkinTotal = owwlmindthinkinData.length;

  const owwlmindthinkinCurrent = useMemo(() => {
    return owwlmindthinkinData[owwlmindthinkinIdx];
  }, [owwlmindthinkinIdx]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setOwwlmindthinkinPhase('intro');
      };
    }, []),
  );

  const owwlmindthinkinStart = () => {
    setOwwlmindthinkinIdx(0);
    setOwwlmindthinkinAnswerText('');
    setOwwlmindthinkinIsCorrect(null);
    setOwwlmindthinkinPhase('task');
  };

  const owwlmindthinkinBack = () => {
    if (owwlmindthinkinPhase === 'task' || owwlmindthinkinPhase === 'result') {
      setOwwlmindthinkinPhase('intro');
    }
  };

  const owwlmindthinkinSubmit = () => {
    const trimmed = owwlmindthinkinAnswerText.trim();
    if (!trimmed) {
      return;
    }
    const num = Number(trimmed);
    const correct =
      Number.isFinite(num) && num === owwlmindthinkinCurrent.answer;
    setOwwlmindthinkinIsCorrect(correct);
    setOwwlmindthinkinPhase('result');
  };

  const owwlmindthinkinTryAgain = () => {
    setOwwlmindthinkinIsCorrect(null);
    setOwwlmindthinkinPhase('task');
  };

  const owwlmindthinkinNext = () => {
    const next = (owwlmindthinkinIdx + 1) % owwlmindthinkinTotal;
    setOwwlmindthinkinIdx(next);
    setOwwlmindthinkinAnswerText('');
    setOwwlmindthinkinIsCorrect(null);
    setOwwlmindthinkinPhase('task');
  };

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
              Math Input Tasks
            </Text>
            {owwlmindthinkinPhase !== 'intro' && (
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
              source={require('../../assets/i/owwlmindrmath.png')}
            />
            <Text style={styles.owwlmindthinkindescriptioncenter}>
              Here you simply enter the answer.{'\n'}
              No options - just you and the numbers.{'\n\n'}
              Some examples are easy.{'\n'}
              Some can be a little confusing...{'\n\n'}
              Take your time and look carefully.
            </Text>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.owwlmindthinkinbuttonbig}
              onPress={owwlmindthinkinStart}>
              <Text style={styles.owwlmindthinkinbuttontext}>Start</Text>
            </TouchableOpacity>
          </View>
        )}

        {owwlmindthinkinPhase === 'task' && (
          <View style={styles.owwlmindthinkintaskwrap}>
            <View style={styles.owwlmindthinkintaskbox}>
              <Text style={styles.owwlmindthinkintasktext}>
                {owwlmindthinkinCurrent.task}
              </Text>
            </View>

            <Text style={styles.owwlmindthinkinhelpertext}>
              Write the answer here in{'\n'}numbers without spaces
            </Text>

            <TextInput
              value={owwlmindthinkinAnswerText}
              onChangeText={setOwwlmindthinkinAnswerText}
              placeholder="Write your answer..."
              placeholderTextColor="rgba(255,255,255,0.45)"
              keyboardType="number-pad"
              style={styles.owwlmindthinkininput}
            />

            <Image
              style={styles.owwlmindthinkinowlsmall}
              source={require('../../assets/i/owwlmindrmathg.png')}
            />

            <TouchableOpacity
              activeOpacity={0.85}
              style={
                owwlmindthinkinAnswerText.trim().length === 0
                  ? styles.owwlmindthinkinbuttondisabled
                  : styles.owwlmindthinkinbuttonbig
              }
              onPress={owwlmindthinkinSubmit}>
              <Text style={styles.owwlmindthinkinbuttontext}>Save</Text>
            </TouchableOpacity>
          </View>
        )}

        {owwlmindthinkinPhase === 'result' && (
          <View style={styles.owwlmindthinkincard}>
            <Image
              style={styles.owwlmindthinkinowlbig}
              source={
                owwlmindthinkinIsCorrect
                  ? require('../../assets/i/owwlmindrmatyes.png')
                  : require('../../assets/i/owwlmindrmathgno.png')
              }
            />

            <Text style={styles.owwlmindthinkindescriptioncenter}>
              {owwlmindthinkinIsCorrect
                ? 'Well done, the answer is correct, keep up the good work!'
                : 'Not quite. Look carefully and try again.'}
            </Text>

            <Text style={styles.owwlmindthinkinresultline}>
              Your answer:{' '}
              <Text
                style={[
                  styles.owwlmindthinkinresultanswer,
                  owwlmindthinkinIsCorrect
                    ? {color: '#FECF4A'}
                    : {color: '#FF0000'},
                ]}>
                {owwlmindthinkinAnswerText.trim() || '-'}
              </Text>
            </Text>

            {owwlmindthinkinIsCorrect ? (
              <>
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.owwlmindthinkinsharebutton}
                  onPress={() =>
                    owwlmindthinkinShare(
                      `Well done, the answer is correct, keep up the good work!\nMath task: ${
                        owwlmindthinkinCurrent.task
                      }\nMy answer: ${owwlmindthinkinAnswerText.trim()}`,
                    )
                  }>
                  <Text style={styles.owwlmindthinkinsharebuttontext}>
                    Share
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.85}
                  style={[styles.owwlmindthinkinbuttonbig]}
                  onPress={owwlmindthinkinNext}>
                  <Text style={styles.owwlmindthinkinbuttontext}>Next</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.owwlmindthinkinbuttonbig}
                onPress={owwlmindthinkinTryAgain}>
                <Text style={styles.owwlmindthinkinbuttontext}>Try again</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </Owwlmindthinkinnlayt>
  );
};

export default Owwlmindthinkinnmath;

const styles = StyleSheet.create({
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

  owwlmindthinkincontainer: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 165,
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
    left: 5,
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
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },

  owwlmindthinkindescriptioncenter: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 21,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  owwlmindthinkinowlbig: {
    marginBottom: 17,
  },
  owwlmindthinkintaskwrap: {
    width: '92%',
    marginTop: 16,
    alignItems: 'center',
  },
  owwlmindthinkintaskbox: {
    width: '100%',
    height: 140,
    borderRadius: 16,
    backgroundColor: '#8699FF',
    borderWidth: 7,
    borderColor: '#24283D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    minHeight: 166,
  },
  owwlmindthinkintasktext: {
    fontSize: 36,
    color: '#24283D',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  owwlmindthinkinhelpertext: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginTop: 20,
  },
  owwlmindthinkininput: {
    width: '89%',
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginTop: 20,
    borderRadius: 14,
    backgroundColor: '#24283D',
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    fontSize: 16,
  },
  owwlmindthinkinowlsmall: {
    marginTop: 15,
  },
  owwlmindthinkinbuttonbig: {
    backgroundColor: '#3FC65D',
    width: 176,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 18,
  },
  owwlmindthinkinbuttondisabled: {
    backgroundColor: '#3FC65D',
    width: 176,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
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
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
    textAlign: 'center',
  },
  owwlmindthinkinresultanswer: {
    color: '#E33B3B',
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
