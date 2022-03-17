import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { DrawerContent } from "../views/drawerContent";
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
                {/* <Stack.Screen name={Routes.DRAWER} component={DrawerView} /> */}


            </Stack.Navigator>
        </NavigationContainer>
    );
}


// const drawer = createDrawerNavigator();

// export function DrawerView({ navigation }: { navigation: any }) {
//     return (
//         <drawer.Navigator initialRouteName={Routes.HOME} drawerContent={(props => <DrawerContent {...props} />)}>
//             <drawer.Screen name={Routes.HOME} component={HomeView} />
//         </drawer.Navigator>
//     )
// }



