import { ScrollView, View } from 'react-native';

import ClassComponentInReactNative from './sections/ClassComponentInReactNative';
import Formval from './sections/Formval';
import LifeCycleWithUseEffectHook from './sections/LifeCycleWithUseEffectHook';
import List from './List';
import OnchangeText from './sections/OnchangeText';
import Onpress from './sections/Onpress';
import React from 'react';
import SectionListInReactNative from './sections/SectionListInReactNative';
import Style from './Style'

const App = () => {

  return (
    <View>
      {/* <List /> */}

      <LifeCycleWithUseEffectHook/>
      {/* <ClassComponentInReactNative /> */}
      {/* <SectionListInReactNative /> */}
      {/* <Formval /> */}
      {/* <OnchangeText /> */}
      {/* <Onpress /> */}
    </View>
  );
}


export default App;
