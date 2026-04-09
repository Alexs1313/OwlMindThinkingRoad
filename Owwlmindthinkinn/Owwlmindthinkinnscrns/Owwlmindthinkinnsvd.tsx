import {owwlmindthinkinData as owwlmindthinkinLegendsData} from './Owwlmindthinkinnlgnds';
import {owwlmindthinkinData as owwlmindthinkinFactsData} from './Owwlmindthinkinnfcts';

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
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  owwlmindthinkinGetSavedIds,
  owwlmindthinkinToggleSavedId,
} from '../Owwlmindthinkinnsaved';

const Owwlmindthinkinnsvd = () => {
  const navigation = useNavigation<any>();
  const [owwlmindthinkinTab, setOwwlmindthinkinTab] = useState<
    'legends' | 'facts'
  >('legends');
  const [owwlmindthinkinSelectedId, setOwwlmindthinkinSelectedId] = useState<
    number | null
  >(null);
  const [owwlmindthinkinSavedLegendsIds, setOwwlmindthinkinSavedLegendsIds] =
    useState<number[]>([]);
  const [owwlmindthinkinSavedFactsIds, setOwwlmindthinkinSavedFactsIds] =
    useState<number[]>([]);

  useFocusEffect(() => {
    let active = true;
    (async () => {
      const [legendsIds, factsIds] = await Promise.all([
        owwlmindthinkinGetSavedIds('legends'),
        owwlmindthinkinGetSavedIds('facts'),
      ]);
      if (active) {
        setOwwlmindthinkinSavedLegendsIds(legendsIds);
        setOwwlmindthinkinSavedFactsIds(factsIds);
      }
    })();
    return () => {
      active = false;
    };
  });

  const owwlmindthinkinSelectedLegend = useMemo(() => {
    if (owwlmindthinkinSelectedId == null) {
      return null;
    }
    return (
      owwlmindthinkinLegendsData.find(
        i => i.id === owwlmindthinkinSelectedId,
      ) ?? null
    );
  }, [owwlmindthinkinSelectedId]);

  const owwlmindthinkinShare = async (message: string) => {
    try {
      await Share.share({message});
    } catch {
      // ignore
    }
  };

  const owwlmindthinkinToggleSavedLegend = async (id: number) => {
    const next = await owwlmindthinkinToggleSavedId('legends', id);
    setOwwlmindthinkinSavedLegendsIds(next);
    if (!next.includes(id) && owwlmindthinkinSelectedId === id) {
      setOwwlmindthinkinSelectedId(null);
    }
  };

  const owwlmindthinkinToggleSavedFact = async (id: number) => {
    const next = await owwlmindthinkinToggleSavedId('facts', id);
    setOwwlmindthinkinSavedFactsIds(next);
  };

  const owwlmindthinkinPreview = (text: string) => {
    const oneLine = text.replace(/\s+/g, ' ').trim();
    return oneLine.length > 110 ? `${oneLine.slice(0, 110)}...` : oneLine;
  };

  const owwlmindthinkinSavedLegends = useMemo(() => {
    return owwlmindthinkinLegendsData.filter(i =>
      owwlmindthinkinSavedLegendsIds.includes(i.id),
    );
  }, [owwlmindthinkinSavedLegendsIds]);

  const owwlmindthinkinSavedFacts = useMemo(() => {
    return owwlmindthinkinFactsData.filter(i =>
      owwlmindthinkinSavedFactsIds.includes(i.id),
    );
  }, [owwlmindthinkinSavedFactsIds]);

  const owwlmindthinkinIsAllEmpty =
    owwlmindthinkinSavedLegends.length === 0 &&
    owwlmindthinkinSavedFacts.length === 0;

  return (
    <Owwlmindthinkinnlayt>
      {owwlmindthinkinSelectedLegend && owwlmindthinkinTab === 'legends' ? (
        <View style={styles.owwlmindthinkincontainer}>
          <View style={styles.owwlmindthinkinheaderrow}>
            <View style={styles.owwlmindthinkinheaderpill}>
              <Text style={styles.owwlmindthinkinheadertext}>
                Saved Legends
              </Text>
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
              {owwlmindthinkinSelectedLegend.title}
            </Text>
            <Text style={styles.owwlmindthinkindescription}>
              {owwlmindthinkinSelectedLegend.text}
            </Text>

            <View style={styles.owwlmindthinkinactions}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.owwlmindthinkinsharebutton}
                onPress={() =>
                  owwlmindthinkinShare(
                    `${owwlmindthinkinSelectedLegend.title}\n\n${owwlmindthinkinSelectedLegend.text}`,
                  )
                }>
                <Text style={styles.owwlmindthinkinsharebuttontext}>Share</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.owwlmindthinkinsaveiconbuttonactive}
                onPress={() =>
                  owwlmindthinkinToggleSavedLegend(
                    owwlmindthinkinSelectedLegend.id,
                  )
                }>
                <Image
                  source={
                    owwlmindthinkinSavedLegendsIds.includes(
                      owwlmindthinkinSelectedLegend.id,
                    )
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
            <Text style={styles.owwlmindthinkinheadertext}>Saved</Text>
          </View>

          {owwlmindthinkinIsAllEmpty ? (
            <View style={styles.owwlmindthinkinemptywrap}>
              <Image
                style={styles.owwlmindthinkinemptyimage}
                source={require('../../assets/i/owwlmindtsavd.png')}
              />
              <View style={styles.owwlmindthinkinemptypanel}>
                <Text style={styles.owwlmindthinkinemptytext}>
                  Empty.{'\n'}So you haven't selected anything yet.{'\n'}Choose
                  something interesting and save it here.
                </Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.owwlmindthinkinbutton}
                  onPress={() => navigation.navigate('Owwlmindthinkinnlgnds')}>
                  <Text style={styles.owwlmindthinkinbuttontext}>Legends</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.owwlmindthinkinbutton}
                  onPress={() => navigation.navigate('Owwlmindthinkinnfcts')}>
                  <Text style={styles.owwlmindthinkinbuttontext}>Facts</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              <View style={styles.owwlmindthinkintabs}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={
                    owwlmindthinkinTab === 'legends'
                      ? styles.owwlmindthinkintabactive
                      : styles.owwlmindthinkintab
                  }
                  onPress={() => {
                    setOwwlmindthinkinSelectedId(null);
                    setOwwlmindthinkinTab('legends');
                  }}>
                  <Text
                    style={
                      owwlmindthinkinTab === 'legends'
                        ? styles.owwlmindthinkintabtextactive
                        : styles.owwlmindthinkintabtext
                    }>
                    Legends
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={
                    owwlmindthinkinTab === 'facts'
                      ? styles.owwlmindthinkintabactive
                      : styles.owwlmindthinkintab
                  }
                  onPress={() => {
                    setOwwlmindthinkinSelectedId(null);
                    setOwwlmindthinkinTab('facts');
                  }}>
                  <Text
                    style={
                      owwlmindthinkinTab === 'facts'
                        ? styles.owwlmindthinkintabtextactive
                        : styles.owwlmindthinkintabtext
                    }>
                    Facts
                  </Text>
                </TouchableOpacity>
              </View>

              {owwlmindthinkinTab === 'legends' ? (
                <View style={styles.owwlmindthinkinlist}>
                  {owwlmindthinkinSavedLegends.map(item => (
                    <View key={item.id} style={styles.owwlmindthinkincard}>
                      <Text style={styles.owwlmindthinkintitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.owwlmindthinkindescription}>
                        {owwlmindthinkinPreview(item.text)}
                      </Text>

                      <View style={styles.owwlmindthinkinrow}>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={styles.owwlmindthinkinbuttonwide}
                          onPress={() => setOwwlmindthinkinSelectedId(item.id)}>
                          <Text style={styles.owwlmindthinkinbuttontext}>
                            Read in full
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={styles.owwlmindthinkinsaveiconbuttonactive}
                          onPress={() =>
                            owwlmindthinkinToggleSavedLegend(item.id)
                          }>
                          <Image
                            source={
                              owwlmindthinkinSavedLegendsIds.includes(item.id)
                                ? require('../../assets/i/owwlmindthisaved.png')
                                : require('../../assets/i/owwlmindthinsave.png')
                            }
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>
              ) : (
                <View style={styles.owwlmindthinkinlist}>
                  {owwlmindthinkinSavedFacts.map(item => (
                    <View key={item.id} style={styles.owwlmindthinkincard}>
                      <Image
                        style={styles.owwlmindthinkincardimage}
                        source={require('../../assets/i/owwlmindthinton2.png')}
                      />
                      <Text style={styles.owwlmindthinkindescriptioncenter}>
                        {item.text}
                      </Text>

                      <View style={styles.owwlmindthinkinrowcenter}>
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
                          style={styles.owwlmindthinkinsaveiconbuttonactive}
                          onPress={() =>
                            owwlmindthinkinToggleSavedFact(item.id)
                          }>
                          <Image
                            source={
                              owwlmindthinkinSavedFactsIds.includes(item.id)
                                ? require('../../assets/i/owwlmindthisaved.png')
                                : require('../../assets/i/owwlmindthinsave.png')
                            }
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </>
          )}
        </View>
      )}
    </Owwlmindthinkinnlayt>
  );
};

export default Owwlmindthinkinnsvd;

const styles = StyleSheet.create({
  owwlmindthinkinheaderrow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkinbackbutton: {
    position: 'absolute',
    left: 6,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
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
  owwlmindthinkintabs: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 18,
    marginTop: 18,
  },
  owwlmindthinkintab: {
    width: 140,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#9C8C5A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  owwlmindthinkintabactive: {
    width: 140,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#FECF4A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  owwlmindthinkintabtext: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#24283D',
  },
  owwlmindthinkintabtextactive: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#000',
  },
  owwlmindthinkinlist: {
    width: '92%',
    marginTop: 16,
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
  owwlmindthinkindescriptioncenter: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 21,
    textAlign: 'center',
  },
  owwlmindthinkinrow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  owwlmindthinkinrowcenter: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  owwlmindthinkinbutton: {
    backgroundColor: '#3FC65D',
    width: 176,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 12,
  },
  owwlmindthinkinbuttonwide: {
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
  owwlmindthinkindetailimage: {
    alignSelf: 'center',
    marginBottom: 12,
    width: 190,
    height: 209,
  },
  owwlmindthinkinactions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 14,
  },
  owwlmindthinkincardimage: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  owwlmindthinkinemptywrap: {
    width: '92%',
    alignItems: 'center',
    marginTop: 18,
  },
  owwlmindthinkinemptyimage: {
    marginBottom: 18,
    marginTop: 10,
  },
  owwlmindthinkinemptypanel: {
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 18,
    backgroundColor: '#3E4464',
    borderRadius: 22,
    borderWidth: 7,
    borderColor: '#24283D',
    alignItems: 'center',
  },
  owwlmindthinkinemptytitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  owwlmindthinkinemptytext: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 8,
  },
});
