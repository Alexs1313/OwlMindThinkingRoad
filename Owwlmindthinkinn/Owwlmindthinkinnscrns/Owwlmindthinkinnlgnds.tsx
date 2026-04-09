import {useFocusEffect} from '@react-navigation/native';
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
import Owwlmindthinkinnlayt from '../Owwlmindthinkinncmpn/Owwlmindthinkinnlayt';
import {useMemo, useState} from 'react';

export const owwlmindthinkinData = [
  {
    id: 1,
    title: 'Legend 1: The Stone of Choice',
    text: `A stone appeared deep in the forest, which had no particular shape or color. It lay on the path, and everyone who passed by it suddenly stopped. The animals began to doubt their decisions, lost confidence and stood for a long time, not moving further. Those who had previously acted quickly suddenly lost their determination, and those who had always hesitated were even more immersed in uncertainty.

The owl watched this place for a long time. She was in no hurry to approach the stone, because she understood that such things do not change the world by themselves. She returned there at night, when it was quiet around, and simply looked at the stone, not trying to do anything with it.

Over time, it became clear that the stone does not create anything. It only strengthens what is already inside everyone. Those who were afraid of choice began to be even more afraid. Those who trusted themselves simply passed on.

When the animals understood this, the stone ceased to be special. It remained lying on the path, but it no longer stopped anyone.

Because sometimes an obstacle is not something external, but only a reflection of one's own doubts.`,
  },
  {
    id: 2,
    title: "Legend 2: The One Who Didn't Stop",
    text: `In the forest there lived a hare who was constantly moving forward. He had no clear goal, but he was sure that somewhere ahead there was something important. He did not allow himself to stop, because he believed that every pause was a loss of opportunity.

In the morning he was already on the road, in the evening he had not yet returned, and at night he often stayed up late, continuing to move. His life consisted of constant acceleration, and every day he became more and more exhausted, but he did not admit it.

The owl watched him for a long time and did not interfere. Only once did she leave him a small stone, without explaining anything.

Time passed, and one day the hare simply could not move any further. He stopped for the first time not because he wanted to, but because he no longer had the strength. Then he paid attention to what was nearby. To the cold air, to the ground under his feet, to the silence that he had not noticed before.

The stone had no power. But it was because of it that the hare allowed himself not to move for the first time.

From that moment on, he no longer ran without a reason.

Because sometimes movement does not mean development. And not every path leads somewhere if you do not understand why you are going.`,
  },
  {
    id: 3,
    title: 'Legend 3: A Voice in the Dark',
    text: `One night, a feeling appeared in the forest that no one could explain. The animals began to feel uneasy, even though there was no danger around. The darkness became heavy, as if it was hiding something, although nothing was changing.

Everyone felt it in their own way. Someone began to avoid familiar places, someone stopped trusting their own decisions, and someone refused to go out at night at all.

The owl did not avoid the darkness. It moved to those places where the feeling was strongest. And over time, it became clear that the source was not outside. It was not a sound, it was not an object, and it was not someone else.

It was a reflection of internal fears that became noticeable only when everything around became quiet.

When this realization appeared, the darkness ceased to be threatening. It remained the same, but it no longer caused fear.

Because sometimes the loudest things are those that sound inside.`,
  },
  {
    id: 4,
    title: 'Legend 4: The Tree of Answers',
    text: `In the center of the forest grew a tree that was said to be able to answer any question. Many came to it, hoping to find a solution to their problems.

But there was one limitation - everyone could only get one answer in their entire life. Because of this, many did not dare to approach the tree for a long time, trying to formulate the most important question.

Time passed, and those who waited changed. What once seemed important lost its meaning. The question that they wanted to ask no longer seemed necessary.

Some still asked their question and received an answer. But often it did not bring what they hoped for. Because the answer did not change life - it only fixed the state in which the one who received it was.

The owl never turned to the tree. She understood that the answer makes sense only when you are ready to understand it.

Sometimes the path to understanding is more important than the answer itself.`,
  },
  {
    id: 5,
    title: 'Legend 5: The one who was always right',
    text: `There was a crow in the forest who constantly proved himself right. He listened carefully to others, found weaknesses in their words and always came out the winner in any dispute.

He began to be respected for his intelligence, but at the same time avoided. It was difficult to talk to him, because any conversation turned into a competition.

Over time, he began to notice that it was getting quieter around him. The animals stopped sharing their thoughts, stopped turning to him, even when he could really help.

The owl watched this without interfering. She saw that being right did not bring him closer to others, but on the contrary, it distanced him.

Time passed, and the crow was left with his knowledge, but without those with whom he could discuss it.

Because sometimes being right is not the same as being heard.`,
  },
  {
    id: 6,
    title: 'Legend 6: The trail without tracks',
    text: `There was a trail in the forest that no one walked twice the same way. Everyone who walked along it left traces, but the next day they disappeared. It seemed as if the road itself did not allow us to preserve the past.

The animals tried to remember the path, made marks, broke branches, left stones. But every time they turned back, they saw a different path. It looked familiar, but it did not repeat itself exactly.

Some began to fear this path because they could not control where it led. Others, on the contrary, came again, trying to find the “right” route.

The owl observed and did not try to find an unchanging path. It moved as it was necessary at a particular moment, without comparing today's path with yesterday's.

Over time, it became clear that the path does not change chaotically. It simply does not allow us to repeat old decisions automatically.

Because sometimes the problem is not that the path is different. And in the fact that you try to walk through it as if nothing had changed.`,
  },
  {
    id: 7,
    title: 'Legend 7: Lake of Reflections',
    text: `In the depths of the forest there was a lake that looked calm and clean. But it did not reflect the appearance. Everyone who looked into the water saw not themselves, but who they felt inside.

Strong animals saw themselves as weak if they doubted. Those who seemed confident sometimes saw fear. Some left immediately, unable to bear this reflection.

Others stayed longer, trying to understand why they saw this.

The owl looked at the lake and did not look for an answer in it. She knew that reflection is not true or false - it is only a state that can be changed.

Over time, those who returned to the lake after a certain period of time saw a different picture. Not because the lake had changed, but because they had changed.

Because sometimes it is not what you see that matters. And whether you are ready to accept it.`,
  },
  {
    id: 8,
    title: 'Legend 8: A lantern that does not shine',
    text: `A lantern appeared in the forest that did not give light. It could be held in your paws, carried from place to place, but it did not illuminate the night.

Some tried to fix it. Others considered it useless and left it. But there were those who did not want to give it up, even if it did not work.

They carried it with them, hoping that one day it would light up.

The owl noticed that those who held the lantern began to look around less. They waited for the light to appear from it, and stopped noticing that their eyes had already become accustomed to the darkness.

Over time, some animals put the lantern down. And only then did they see that the night was not as dark as it seemed.

Because sometimes what should help is more of a hindrance than the lack of help.`,
  },
  {
    id: 9,
    title: 'Legend 9: A Clock Without Time',
    text: `In an old tree there was a clock that did not show time. Its hands moved, but did not correspond to any rhythm. They could stand still or suddenly jump forward.

The animals tried to understand it. They compared the movement of the hands with events, tried to find a pattern, but nothing worked.

Some decided that the clock was broken. Others continued to look at it, wasting time trying to understand it.

The owl watched and did not try to find meaning in it. It simply did not use it.

Over time, it became obvious that the clock did not show anything useful. But it distracts those who try to adjust their actions to it.

Because sometimes not all systems are designed to be oriented by them.`,
  },
  {
    id: 10,
    title: 'Legend 10: A Bird Without a Shadow',
    text: `A bird appeared in the forest that had no shadow. Even on a sunny day, even in bright light, there was nothing under it.

The animals began to pay attention to it. Some considered it something special, others considered it strange and even alarming.

The bird moved the same way as everyone else, but it looked different. Because of this, they either avoided it or, on the contrary, tried to understand what its “secret” was.

The owl watched and did not attach importance to it. She saw that the bird did not change the behavior of others if they did not concentrate on its difference.

Over time, interest in it disappeared. It remained the same, but ceased to be the center of attention.

Because sometimes unusualness exists only until someone decides that it matters.`,
  },
];

const Owwlmindthinkinnlgnds = () => {
  const [owwlmindthinkinSelectedId, setOwwlmindthinkinSelectedId] = useState<
    number | null
  >(null);
  const [owwlmindthinkinSavedIds, setOwwlmindthinkinSavedIds] = useState<
    number[]
  >([]);

  useFocusEffect(() => {
    let active = true;
    (async () => {
      const ids = await owwlmindthinkinGetSavedIds('legends');
      if (active) {
        setOwwlmindthinkinSavedIds(ids);
      }
    })();
    return () => {
      active = false;
    };
  });

  const owwlmindthinkinSelected = useMemo(() => {
    if (owwlmindthinkinSelectedId == null) {
      return null;
    }
    return (
      owwlmindthinkinData.find(i => i.id === owwlmindthinkinSelectedId) ?? null
    );
  }, [owwlmindthinkinSelectedId]);

  const owwlmindthinkinToggleSaved = async (id: number) => {
    const next = await owwlmindthinkinToggleSavedId('legends', id);
    setOwwlmindthinkinSavedIds(next);
  };

  const owwlmindthinkinShare = async (title: string, text: string) => {
    try {
      await Share.share({message: `${title}\n\n${text}`});
    } catch {
      console.log('error');
    }
  };

  const owwlmindthinkinPreview = (text: string) => {
    const oneLine = text.replace(/\s+/g, ' ').trim();
    return oneLine.length > 110 ? `${oneLine.slice(0, 110)}...` : oneLine;
  };

  return (
    <Owwlmindthinkinnlayt>
      {owwlmindthinkinSelected ? (
        <View style={styles.owwlmindthinkincontainer}>
          <View style={styles.owwlmindthinkinheaderrow}>
            <View style={styles.owwlmindthinkinheaderpill}>
              <Text style={styles.owwlmindthinkinheadertext}>Legends</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.owwlmindthinkinbackbutton}
                onPress={() => setOwwlmindthinkinSelectedId(null)}>
                <Image source={require('../../assets/i/owwlmindthback.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.owwlmindthinkindetailcard}>
            <Image
              style={styles.owwlmindthinkindetailimage}
              source={require('../../assets/i/owwlmindthinton2.png')}
            />

            <Text style={styles.owwlmindthinkintitle}>
              {owwlmindthinkinSelected.title}
            </Text>
            <Text style={styles.owwlmindthinkindescription}>
              {owwlmindthinkinSelected.text}
            </Text>

            <View style={styles.owwlmindthinkinactions}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.owwlmindthinkinsharebutton}
                onPress={() =>
                  owwlmindthinkinShare(
                    owwlmindthinkinSelected.title,
                    owwlmindthinkinSelected.text,
                  )
                }>
                <Text style={styles.owwlmindthinkinsharebuttontext}>Share</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={
                  owwlmindthinkinSavedIds.includes(owwlmindthinkinSelected.id)
                    ? styles.owwlmindthinkinsaveiconbuttonactive
                    : styles.owwlmindthinkinsaveiconbutton
                }
                onPress={() =>
                  owwlmindthinkinToggleSaved(owwlmindthinkinSelected.id)
                }>
                <Image
                  source={
                    owwlmindthinkinSavedIds.includes(owwlmindthinkinSelected.id)
                      ? require('../../assets/i/owwlmindthisaved.png')
                      : require('../../assets/i/owwlmindthinsave.png')
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.owwlmindthinkincontainer}>
          <View style={styles.owwlmindthinkinheaderpill}>
            <Text style={styles.owwlmindthinkinheadertext}>Legends</Text>
          </View>

          <View style={styles.owwlmindthinkinlist}>
            {owwlmindthinkinData.map(item => (
              <View key={item.id} style={styles.owwlmindthinkincard}>
                <Text style={styles.owwlmindthinkintitle}>{item.title}</Text>
                <Text style={styles.owwlmindthinkindescription}>
                  {owwlmindthinkinPreview(item.text)}
                </Text>

                <View style={styles.owwlmindthinkinrow}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.owwlmindthinkinbutton}
                    onPress={() => setOwwlmindthinkinSelectedId(item.id)}>
                    <Text style={styles.owwlmindthinkinbuttontext}>
                      Read in full
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
      )}
    </Owwlmindthinkinnlayt>
  );
};

export default Owwlmindthinkinnlgnds;

const styles = StyleSheet.create({
  owwlmindthinkinsaveicontext: {
    fontSize: 20,
  },

  owwlmindthinkindetailcard: {
    width: '92%',
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: '#3E4464',
    borderRadius: 22,
    borderWidth: 7,
    borderColor: '#24283D',
    marginTop: 16,
  },
  owwlmindthinkincontainer: {
    flex: 1,
    paddingTop: 65,
    paddingBottom: 160,
    alignItems: 'center',
  },

  owwlmindthinkinheaderrow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinbackbutton: {
    position: 'absolute',
    left: 7,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  owwlmindthinkinheaderpill: {
    width: '92%',
    paddingVertical: 14,
    backgroundColor: '#3E4464',
    borderRadius: 19,
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
  owwlmindthinkintitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 8,
  },
  owwlmindthinkindescription: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 21,
  },
  owwlmindthinkinrow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  owwlmindthinkinbutton: {
    backgroundColor: '#3FC65D',
    height: 40,
    width: 168,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  owwlmindthinkinbuttontext: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  owwlmindthinkinsaveiconbutton: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#FECF4A',
    alignItems: 'center',
    justifyContent: 'center',
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

  owwlmindthinkindetailimage: {
    alignSelf: 'center',
    marginBottom: 12,
    width: 190,
    height: 209,
  },
  owwlmindthinkinactions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 14,
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
