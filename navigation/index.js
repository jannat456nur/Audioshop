import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screen/Cart";
import Checkout from "../screen/Checkout";
import Earphones from "../screen/Earphones";
import Headphones from "../screen/Headphones";
import Home from "../screen/Home";
import ProductDetails from "../screen/ProductDetails";
import Speakers from "../screen/Speakers";
import { colors } from "../theme/colors";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const HeadphonesStack = createNativeStackNavigator();

function HeadphonesStackScreens() {
  return (
    <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadphonesStack.Screen name="Headphones" component={Headphones} />
      <HeadphonesStack.Screen name="Details" component={ProductDetails} />
    </HeadphonesStack.Navigator>
  );
}

const SpeakersStack = createNativeStackNavigator();

function SpeakersStackScreens() {
  return (
    <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeakersStack.Screen name="Headphones" component={Speakers} />
      <SpeakersStack.Screen name="Details" component={ProductDetails} />
    </SpeakersStack.Navigator>
  );
}

const EarphonesStack = createNativeStackNavigator();

function EarphonesStackScreens() {
  return (
    <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <EarphonesStack.Screen name="Earphones" component={Earphones} />
      <EarphonesStack.Screen name="Details" component={Checkout} />
    </EarphonesStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();

function CartStackScreens() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={ProductDetails} />
    </CartStack.Navigator>
  );
}

function TabBarIcon({ fontFamily, name, color }) {
  if (fontFamily === "MaterialCommunityIcons") {
    return <MaterialCommunityIcons name={name} size={24} color={color} />;
  } else if (fontFamily === "Ionicons") {
    return <Ionicons name={name} size={24} color={color} />;
  } else if (fontFamily === "SimpleLineIcons") {
    return <SimpleLineIcons name={name} size={24} color={color} />;
  }
}

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="home"
                color={color}
              />
            ),
          }}
          name="HomeTab"
          component={HomeStackScreens}
        />
        <Tab.Screen
          options={{
            title: "Headphones",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="headphones"
                color={color}
              />
            ),
          }}
          name="HeadphonesTab"
          component={HeadphonesStackScreens}
        />
        <Tab.Screen
          options={{
            title: "Earphones",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"SimpleLineIcons"}
                name="earphones-alt"
                color={color}
              />
            ),
          }}
          name="EarphonesTab"
          component={EarphonesStackScreens}
        />
        <Tab.Screen
          options={{
            title: "Speaker",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="speaker"
                color={color}
              />
            ),
          }}
          name="SpeakersTab"
          component={SpeakersStackScreens}
        />
        <Tab.Screen
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"Ionicons"}
                name="cart-outline"
                color={color}
              />
            ),
          }}
          name="CartTab"
          component={CartStackScreens}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
