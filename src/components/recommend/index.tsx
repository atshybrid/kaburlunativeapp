import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style/recommend.style';
import KaburluLogo from '../../assets/kaburlu_logo_white.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../theme';

type RecommendProps = {

};

export const Recommend = ({

}: RecommendProps) => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.centerContainer}>
                    <KaburluLogo height={90} />
                    <Text style={styles.recommendTxt}>{'Recommended News'}</Text>
                </View>
                <TouchableOpacity style={styles.articleContainer} activeOpacity={1} onPress={() => { }}>
                    <Image source={require('../../assets/template_1.png')} style={styles.articleImg} resizeMode='cover' />
                    <View style={styles.infoContainer}>
                        <Text style={styles.articleTxt} numberOfLines={2} ellipsizeMode='tail'>{'కన్హయ్య కుమార్‌ ఉగ్రవాది అఫ్జల్‌ గురు మద్దతుదారు'}</Text>
                        <Icon name='share' size={24} color={COLORS.white} style={styles.iconStyle} onPress={() => { }} />
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};
