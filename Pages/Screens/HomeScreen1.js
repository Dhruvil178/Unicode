
import { View, Text, StyleSheet,Button } from "react-native";
import {useNavigation } from '@react-navigation/native';
import  { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen1 from "./LoginScreen1";
import SignupScreen1 from "./SignupScreen1";

const Stack  = createNativeStackNavigator();

export default function HomeScreen () {
    const  navigation = useNavigation()

    return (
    <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Button title="Login" onPress={() => navigation.navigate("LoginScreen1")} />
        <Button title="Signup" onPress={() => navigation.navigate("SignupScreen1")} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
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