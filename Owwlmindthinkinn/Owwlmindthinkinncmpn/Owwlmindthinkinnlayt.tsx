import {ImageBackground, ScrollView, StyleSheet} from 'react-native';

const Owwlmindthinkinnlayt = ({children}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/i/owwlmindthibg.png')}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});

export default Owwlmindthinkinnlayt;
