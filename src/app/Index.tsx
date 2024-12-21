import { Pressable, Text, View } from "react-native";
import ImageComponent from "../components/ImageComponent";

const Index = () => {
  return (
    <View>
      <Pressable onPress={() => console.log("pressed")}>
        <Text style={{ color: "teal" }}>Press me</Text>
      </Pressable>
      <Pressable onPressIn={() => console.log("On press in")}>
        <Text style={{ color: "coral" }}>Press me</Text>
      </Pressable>
      <Pressable onPressOut={() => console.log("On press out")}>
        <Text style={{ color: "magenta" }}>Press me</Text>
      </Pressable>
      <Pressable onLongPress={() => console.log("On long press")}>
        <Text style={{ color: "crimson" }}>Press me</Text>
      </Pressable>
      <ImageComponent />
    </View>
  );
};
export default Index;
