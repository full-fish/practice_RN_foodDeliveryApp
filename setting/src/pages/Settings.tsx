import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

function Settings() {
  const [count, setCount] = useState(1);
  return (
    <View>
      <Pressable onPress={() => setCount(e => e + 1)}>
        <Text>{count}</Text>
      </Pressable>
      <Text>세팅 화면</Text>
    </View>
  );
}

export default Settings;
