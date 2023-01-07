import { SafeAreaView, useWindowDimensions } from "react-native";
import { ReactNode } from "react";
import { screensWrapperStyles } from "./screens-wrapper-style";
import { getOrientation } from "../../../utils/get-orientation";

export const ScreensWrapper = ({ children }: { children: ReactNode }) => {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView
      style={screensWrapperStyles(getOrientation(height)).container}
    >
      {children}
    </SafeAreaView>
  );
};
