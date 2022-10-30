import { ActivityIndicator, View } from "react-native";
import Text from "../components/text/text";
import React, { useEffect } from "react";
import { colors } from "../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectStatus } from "../store/productSlice";

export default function Home() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  console.log("status", status);

  useEffect(() => {
     if(status === 'idle'){
      dispatch(fetchProducts())
     }


  }, []);

  if(status === 'loading'){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator/>
      </View>
    )
  }

  return (
    <View>
      <Text style={{ color: colors.primary }}>home</Text>
    </View>
  );
}
