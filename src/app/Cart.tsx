import { View, Text, Image } from "react-native";
const Cart = () => {
  return (
    <View>
      <Image
        source={require("../assets/img1.jpg")}
        style={{ borderRadius: 50, width: 150, height: 150 }}
      />
      <Text>Cart</Text>
    </View>
  );
};
export default Cart;
