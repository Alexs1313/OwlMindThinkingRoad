import {ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Owwlmindthinkinnlayt = ({children}) => {
  return (
    <LinearGradient
      style={styles.background}
      colors={['#3E4464', '#24283D']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </LinearGradient>
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
