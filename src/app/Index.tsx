import { View, Text, Button } from "react-native";
import NameComponent from "../components/NameComponent";
import AgeComponent from "../components/AgeComponent";
import XHandleComponent from "../components/XHandleComponent";
import FavSubjectComponent from "../components/FavSubjectComponent";
import { useState } from "react";

const Index = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="click me"
        color="teal"
        onPress={() => setCounter(counter + 1)}
      />

      <Button
        title="click me"
        color="indigo"
        onPress={() => alert("clicked")}
      />
      <NameComponent />
      <AgeComponent />
      <XHandleComponent />
      <FavSubjectComponent />

      <Text>{counter}</Text>
    </View>
  );
};
export default Index;
