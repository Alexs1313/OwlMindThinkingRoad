// stack navigation

import {createStackNavigator} from '@react-navigation/stack';

import Owwlmindthinkinnldrr from '../Owwlmindthinkinncmpn/Owwlmindthinkinnldrr';
import Owwlmindthinkinnonbrd from '../Owwlmindthinkinnscrns/Owwlmindthinkinnonbrd';
import Owwlmindthinkinntabs from '../../Owwlmindthinkinntabs';

const Stack = createStackNavigator();

const Owwlmindthinkinnstck = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Owwlmindthinkinnldrr"
        component={Owwlmindthinkinnldrr}
      />
      <Stack.Screen
        name="Owwlmindthinkinnonbrd"
        component={Owwlmindthinkinnonbrd}
      />
      <Stack.Screen
        name="Owwlmindthinkinntabs"
        component={Owwlmindthinkinntabs}
      />
    </Stack.Navigator>
  );
};

export default Owwlmindthinkinnstck;
