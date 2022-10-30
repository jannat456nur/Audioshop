import { View, Text as RNText } from "react-native";
import React from "react";
import { presets } from "./text.preset";

export default function Text(props) {
  const {
    preset = "default",
    children,
    style: styleOverride,
    textColor,
    centered,
    white,
    uppercase,
    ...rest
  } = props;

  const style = presets[preset] || presets.base;
  const styles = [styles, styleOverride];

  return (
    <RNText
      {...rest}
      style={[
        styles,
        textColor && { color: textColor },
        centered && { textAlign: "center" },
        white && { color: "#fff" },
        uppercase && { textTransform: "uppercase" },
      ]}
    >
      {children}
    </RNText>
  );
}
// import {Text as RNText ,StyleSheet} from "react-native";
// import React from "react";
// import { presets } from "./text.preset";

// export default function Text({ children ,preset= "default",style }) {
//     const textStyles = StyleSheet.compose(presets[preset],style)
//   return <RNText style={textStyles}>{children}</RNText>;
// }
