import { Platform, Dimensions } from "react-native";

const isIphoneX =
  Platform.OS === "ios" && Dimensions.get("window").height === 812 && Dimensions.get("window").width === 375;

export default isIphoneX;
