import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, FONTS } from '../../theme';
import { NewsItem } from '../../constants';

type BottomContainerProps = {
    data: NewsItem;
};

export const BottomContainer = ({
    data
}: BottomContainerProps) => {
    return (
        <>
            <View style={styles.bottomContainer}>
                <View style={styles.AuthorWrapperContainer}>
                    <View style={styles.AuthorContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name='person-outline' size={24} color={COLORS.white} />
                        </View>
                        <View style={styles.AuthorInfoContainer}>
                            <Text style={styles.reporterTxt}>{'Reporter Name'}</Text>
                            <Text style={styles.reporterLocation}>{'Sr.Reporter, hyderabad'}</Text>
                        </View>
                    </View>
                    <View style={styles.AuthorContainer}>
                        <Icon name='schedule' size={16} />
                        <Text style={styles.publishTimeTxt}>{'5:50 PM'}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={[styles.bottomContainer, { marginHorizontal: 8 }]}>
                <View style={styles.AuthorWrapperContainer}>
                    <View style={styles.AuthorContainer}>
                        <View style={[styles.AuthorContainer, styles.space]}>
                            <Icon name='thumb-up' size={24} color={COLORS.grey} />
                            <Text style={styles.spaceIconTxt}>{data.like}</Text>
                        </View>
                        <View style={[styles.AuthorContainer, styles.space]}>
                            <Icon name='thumb-down' size={24} color={COLORS.grey} />
                            <Text style={styles.spaceIconTxt}>{data.dislike}</Text>
                        </View>
                        <View style={[styles.AuthorContainer, styles.space]}>
                            <Icon name='comment' size={24} color={COLORS.grey} />
                            <Text style={styles.spaceIconTxt}>{data.comment}</Text>
                        </View>
                    </View>
                    <View style={styles.AuthorContainer}>
                        <Icon name='share' size={24} color={COLORS.grey} style={styles.space} />
                        <Icon name='report' size={24} color={COLORS.grey} style={styles.space} />
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    bottomContainer: { flexDirection: 'row', margin: 16 },
    AuthorWrapperContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    AuthorContainer: { flexDirection: 'row', alignItems: 'center' },
    space: {
        marginHorizontal: 8
    },
    spaceIconTxt: {
        marginLeft: 4
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: COLORS.grey
    },
    AuthorInfoContainer: {
        marginLeft: 4
    },
    reporterTxt: {
        fontSize: 10,
        fontFamily: FONTS.interBold,
        color: COLORS.grey
    },
    reporterLocation: {
        fontSize: 8,
        fontFamily: FONTS.interRegular,
        color: COLORS.grey
    },
    publishTimeTxt: {
        fontSize: 12,
        fontFamily: FONTS.interSemiBold,
        color: COLORS.grey,
        marginLeft: 4
    },
    divider: {
        height: 2,
        width: '96%',
        backgroundColor: COLORS.lightwhite,
        alignSelf: 'center'
    }
});