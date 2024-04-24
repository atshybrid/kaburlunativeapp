import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style/share-feed.style';
import { ImageSlider } from '../image-slider';
import { COLORS } from '../../theme';

type ShareFeedProps = {

};

export const ShareFeed = ({

}: ShareFeedProps) => {

    const sliderData = [
        {
            id: 1,
            img: 'https://marketplace.canva.com/EAExHBvuoCQ/1/0/900w/canva-nature-lake-mountains-balance-motivational-quote-phone-wallpaper-5y0rpIY2MOc.jpg',
        },
        {
            id: 2,
            img: 'https://marketplace.canva.com/EAExHBvuoCQ/1/0/900w/canva-nature-lake-mountains-balance-motivational-quote-phone-wallpaper-5y0rpIY2MOc.jpg',
        },
        {
            id: 3,
            img: 'https://marketplace.canva.com/EAExHBvuoCQ/1/0/900w/canva-nature-lake-mountains-balance-motivational-quote-phone-wallpaper-5y0rpIY2MOc.jpg',
        },
        {
            id: 4,
            img: 'https://marketplace.canva.com/EAExHBvuoCQ/1/0/900w/canva-nature-lake-mountains-balance-motivational-quote-phone-wallpaper-5y0rpIY2MOc.jpg',
        },
        {
            id: 5,
            img: 'https://marketplace.canva.com/EAExHBvuoCQ/1/0/900w/canva-nature-lake-mountains-balance-motivational-quote-phone-wallpaper-5y0rpIY2MOc.jpg',
        }
    ]

    return (
        <>
            <ImageSlider data={sliderData} />
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.leftContainer} activeOpacity={1} onPress={() => { }}>
                    <Text style={styles.viralPostTxt}>{'Viral Posts'}</Text>
                    <MaterialCommunityIcons name='chevron-double-right' size={20} color={COLORS.base} />
                </TouchableOpacity>
                <View style={styles.middleContainer}>
                    <View style={styles.outterIconContainer}>
                        <TouchableOpacity style={styles.innerIconContainer} activeOpacity={1} onPress={() => { }}>
                            <MaterialCommunityIcons name='whatsapp' size={32} color={COLORS.white} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.totalShareTxt}>{'23 SHARES'}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <MaterialIcons name='more-vert' size={20} color={COLORS.lightwhite} />
                    <MaterialCommunityIcons name='share' size={20} color={COLORS.lightblack} />
                </View>
            </View>
        </>
    );
};
