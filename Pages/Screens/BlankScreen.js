import { View, Text, StyleSheet ,ImageBackground} from "react-native";


export default function BlankScreen1() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome to the app!</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    backgroundColor:"lightyellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    },

    text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    },
});