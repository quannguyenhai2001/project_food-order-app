import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import { Product } from "@/types";
interface ProductProps {
  product: Product;
}
export default function ProductListItem({ product }: ProductProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 18,
  },
  price: { color: Colors.light.tint },
});
