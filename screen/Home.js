import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
import Text from "../components/text/text";
import React, { useEffect } from "react";
import { colors } from "../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectFeaturedProducts,
  selectStatus,
} from "../store/productSlice";
import BannerTitle from "../components/text/banner-title";
import { AntDesign } from "@expo/vector-icons";

const catagoryBox = ({ title, image, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginVertical: spacing[8],
        marginHorizontal: spacing[5],
        borderRadius: spacing[4],
        backgroundColor: colors.grey,
        padding: spacing[5],
      }}
    >
      <Image source={image} style={{ top: -60 }} />
      <View
        style={{ alignItems: "center", justifyContent: "center", top: -30 }}
      >
        <Text preset="h6">{title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: spacing[4],
          }}
        >
          <Text
            preset="subtitle"
            textColor="#7c7c7c"
            centered
            style={{ marginRight: spacing[4] }}
          >
            SHOP
          </Text>
          <AntDesign name="right" color={colors.primary} size={14} />
        </View>
      </View>
    </Pressable>
  );
};

const FeaturedProduct = ({ name, category, image }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        marginVertical: spacing[5],
        backgroundColor: colors.primary,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "#d8d8d8",
          borderRadius: 400,
          height: 320,
          width: width - 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#d8d8d8",
            borderRadius: 400,
            height: 280,
            width: width - 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 172, width: 180 }}
            resizeMode="contain"
            source={image.source}
          />
        </View>
      </View>
      <View style={{ paddingBottom: spacing[8], marginTop: spacing[4] }} white>
        <Text preset="h3" centered uppercase white>
          {name}
        </Text>
        <Text preset="h3" centered uppercase white>
          {category}
        </Text>

        <Text preset="h3" centered uppercase white>
          Free online Lorem Ipsum dummy text generator with great features.
          Dummy Text Generator for W
        </Text>
        <Button
          title={"SEE PRODUCT"}
          style={{
            backgroundColor: colors.black,
            alignSelf: "center",
            marginTop: spacing[5],
          }}
        />
      </View>
    </View>
  );
};

export default function Home() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const { width, height } = useWindowDimensions();
  const featuredProducts = useSelector(selectFeaturedProducts);

  console.log("fp", featuredProducts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  if (status === "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <View />
      <ScrollView>
        <BannerTitle />
        <View style={{ backgroundColor: colors.black }}>
          <Image
            style={{ alignSelf: "center", width: "100%" }}
            resizeMethod="auto"
            source={require("../images/headphone2.jpeg")}
          />
          <View style={{ position: "absolute", width: "100%", top: 200 }}>
            <Text preset="h2" centered>
              Welcome
            </Text>
            <Text
              textColor={colors.grey}
              centered
              style={{ width: width - 20, alignSelf: "center", fontWeight: 30 }}
            >
              Free online Lorem Ipsum dummy text generator with great features.
              Dummy Text Generator for W
            </Text>
          </View>
        </View>
        <View
          style={{ paddingVertical: spacing[8], paddingHorizontal: padding[5] }}
        >
          <catagoryBox
            onPress={() => {
              navigation.navigate("Headphone");
            }}
            title={"HEADPHONES"}
            image={require("../images/")}
          />
          <catagoryBox
            onPress={() => {
              navigation.navigate("Headphone");
            }}
            title={"Speakers"}
            image={require("../images/")}
          />
          <catagoryBox
            onPress={() => {
              navigation.navigate("Headphone");
            }}
            title={"EARPHONES"}
            image={require("../images/")}
          />
        </View>
        <View
          style={{ paddingVertical: spacing[8], paddingHorizontal: spacing[4] }}
        >
          {featuredProducts.map((product) => (
            <FeaturedProduct
              key={product.id}
              name={product.name}
              category={category.category}
              image={product.featuredImage}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
