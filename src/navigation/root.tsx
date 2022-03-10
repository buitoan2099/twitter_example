import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { HomeView } from "../views/homeView";
import LoginView from "../views/loginView";
import SplashView from "../views/splashView";
import { Routes } from "./routes";


const Stack = createNativeStackNavigator();


export default function RootLine() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Routes.SPLASH}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={Routes.SPLASH} component={SplashView} />
                <Stack.Screen name={Routes.LOGIN} component={LoginView} />
                <Stack.Screen name={Routes.HOME} component={HomeView} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}



