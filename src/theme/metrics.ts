import { StyleSheet, Dimensions, StatusBar, Platform, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const baseSpace = 12;
const btnHeight = 36;
const baseFontSize = 16;

const baseWidth = 375;
const baseHeight = 778;

const horizontalScale = (size: number) => (width / baseWidth) * size;

const verticalScale = (size: number) => {
    if ((height / baseHeight) < 1) {
        return (height / baseHeight) * (size * 0.75);
    } else {
        return (height / baseHeight) * size;
    }
};

const fontScale = (fontSize: number) => {
    const scale = Math.max(height / baseHeight, 1);
    const newSize = baseFontSize * scale * (fontSize / baseFontSize);
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const METRICS = {
    windowWidth: width,
    windowHeight: height,

    halfVerticalSpace: verticalScale(baseSpace) / 2,
    halfHorizontalSpace: horizontalScale(baseSpace) / 2,
    baseVerticalSpace: verticalScale(baseSpace),
    baseHorizontalSpace: horizontalScale(baseSpace),

    btnHeight: horizontalScale(btnHeight),
    inputHeight: horizontalScale(btnHeight),

    shareBtn: (height / baseHeight) < 1 ? (verticalScale(baseSpace) / 3) : verticalScale(baseSpace),

    fontScale,
    horizontalScale,
    verticalScale,

    statusBarHeight: Platform.OS === 'android' ? StatusBar.currentHeight ?? 24 : 24,

    hairlineWidth: StyleSheet.hairlineWidth * horizontalScale(baseSpace) / 2,

    switchWidth: baseSpace * 3.5,
    switchHeight: baseSpace * 1.5,

    icons: {
        tiny: 16,
        small: 20,
        medium: 24,
        large: 32,
        xl: 64,
        xxl: 128
    },

    images: {
        tiny: 24,
        small: 32,
        medium: 64,
        large: 96,
        logo: 256
    }
}