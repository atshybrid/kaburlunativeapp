import { View, Platform, NativeModules, ToastAndroid } from 'react-native';
import RNFS from 'react-native-fs';
import Share, { ShareSingleOptions } from 'react-native-share';
import { captureRef } from 'react-native-view-shot';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

export const fileToBase64 = async (imageUrl: string) => {
    try {
        const fileContent = await RNFS.readFile(imageUrl, 'base64');

        const dataUrl = `data:image/jpeg;base64,${fileContent}`;

        return dataUrl;
    } catch (error) {
        console.error('Error converting file to base64:', error);
        return null;
    }
};


export const shareImage = async (viewRef: React.RefObject<View>, isSocial = false) => {
    try {
        if (!viewRef.current) return;

        // Capture view content
        const uri = await captureRef(viewRef, {
            format: 'jpg',
            quality: 0.8,
        });

        // await saveToCameraRoll(uri); // Save image to gallery

        fileToBase64(uri)
            .then(async (dataUrl) => { // Make the function async
                if (dataUrl) {
                    try {
                        const shareOptions = {
                            title: 'Kaburllu',
                            message: `https://kaburllu.in/7Q33L`,
                            url: dataUrl,
                            type: 'image/jpeg'
                        };

                        const whatsAppOptions: ShareSingleOptions = {
                            social: Share.Social.WHATSAPP,
                            forceDialog: false,
                            ...shareOptions
                        };

                        const { isInstalled } = await Share.isPackageInstalled('com.whatsapp');

                        if (isSocial && isInstalled) {
                            await Share.shareSingle(whatsAppOptions);
                        } else if (isSocial && !isInstalled) {
                            ToastAndroid.show("WhatsApp is not installed", ToastAndroid.LONG)
                        } else {
                            await Share.open(shareOptions);
                        }

                        console.log("Image shared successfully");
                    } catch (error) {
                        console.error('Error sharing image: ', error);
                    }
                } else {
                    console.log('Error occurred during conversion');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } catch (error) {
        console.error('Error capturing view: ', error);
    }
};

const saveToCameraRoll = async (uri: string) => {
    if (Platform.OS === 'android') {
        await CameraRoll.save(uri, { type: 'photo', album: 'WatermarkImages' });
    } else {
        await NativeModules.RNImageEditor.saveImage(uri, 'photo');
    }
};