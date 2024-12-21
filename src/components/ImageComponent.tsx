import { View, Text, Image } from "react-native";
const ImageComponent = () => {
  return (
    <View>
      <Text>lets go explorer image component</Text>
      <Image
        source={require("../assets/img1.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};
export default ImageComponent;
