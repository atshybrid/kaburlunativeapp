import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style/recommend.style';
import KaburluLogo from '../../assets/kaburlu_logo_white.svg';
import { COLORS, METRICS } from '../../theme';

type RecommendProps = {

};

export const Recommend = ({

}: RecommendProps) => {
    const { t } = useTranslation();
    return (
        <TapGestureHandler enabled={true} shouldCancelWhenOutside={false}>
            <View style={styles.container}>
                <View style={styles.centerContainer}>
                    <KaburluLogo height={METRICS.images.medium} />
                    <Text style={styles.recommendTxt}>{t('recommended_news')}</Text>
                </View>
                <TouchableOpacity style={styles.articleContainer} activeOpacity={1} onPress={() => { }}>
                    <Image source={require('../../assets/template_1.png')} style={styles.articleImg} resizeMode='cover' />
                    <View style={styles.infoContainer}>
                        <Text style={styles.articleTxt} numberOfLines={2} ellipsizeMode='tail'>{'కన్హయ్య కుమార్‌ ఉగ్రవాది అఫ్జల్‌ గురు మద్దతుదారు'}</Text>
                        <Icon name='share' size={METRICS.icons.medium} color={COLORS.white} style={styles.iconStyle} onPress={() => { }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.articleContainer} activeOpacity={1} onPress={() => { }}>
                    <Image source={require('../../assets/template_1.png')} style={styles.articleImg} resizeMode='cover' />
                    <View style={styles.infoContainer}>
                        <Text style={styles.articleTxt} numberOfLines={2} ellipsizeMode='tail'>{'కన్హయ్య కుమార్‌ ఉగ్రవాది అఫ్జల్‌ గురు మద్దతుదారు'}</Text>
                        <Icon name='share' size={METRICS.icons.medium} color={COLORS.white} style={styles.iconStyle} onPress={() => { }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.articleContainer} activeOpacity={1} onPress={() => { }}>
                    <Image source={require('../../assets/template_1.png')} style={styles.articleImg} resizeMode='cover' />
                    <View style={styles.infoContainer}>
                        <Text style={styles.articleTxt} numberOfLines={2} ellipsizeMode='tail'>{'కన్హయ్య కుమార్‌ ఉగ్రవాది అఫ్జల్‌ గురు మద్దతుదారు'}</Text>
                        <Icon name='share' size={METRICS.icons.medium} color={COLORS.white} style={styles.iconStyle} onPress={() => { }} />
                    </View>
                </TouchableOpacity>
                <View style={styles.adContainer}>
                    <BannerAd
                        unitId={TestIds.BANNER}
                        size={BannerAdSize.MEDIUM_RECTANGLE}
                    />
                </View>
            </View>
        </TapGestureHandler>
    );
};
