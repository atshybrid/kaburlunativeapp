import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Divider, RadioButton } from 'react-native-paper';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Input } from '../../components';
import { COLORS, FONTS, METRICS } from '../../theme';
import { BottomContainerProps } from '../templates/types';
import { ROUTES } from '../../constants';
import { shareImage } from '../../helpers';


interface Report {
    id: number;
    label: string;
}

export const BottomContainer = ({
    viewRef,
    data
}: BottomContainerProps) => {
    const { t } = useTranslation();

    const navigation = useNavigation<NavigationProp<any>>();

    const reportData = [
        {
            id: 1,
            label: 'Mistakes observed',
        },
        {
            id: 2,
            label: 'Wrong content',
        },
        {
            id: 3,
            label: 'Hateful Statements',
        },
        {
            id: 4,
            label: 'Biased story',
        },
        {
            id: 5,
            label: 'Copyright violation',
        }
    ]


    const [reportMessage, setReportMessage] = useState('');
    const [totalLikes, setTotalLikes] = useState(data.like);
    const [totalDislikes, setTotalDislikes] = useState(data.dislike);
    const [isSelectedThumbUp, setSelectedThumbUp] = useState(false);
    const [isSelectedThumbDown, setSelectedThumbDown] = useState(false);
    const [selectedReport, setSelectedReport] = useState('');
    const [isReportModalVisible, setReportModalVisible] = useState(false);

    const onPressThumbUp = () => {
        if (!isSelectedThumbUp) {
            setTotalLikes(data.like + 1);
            if (isSelectedThumbDown) {
                setTotalDislikes(totalDislikes - 1);
            }
            setSelectedThumbUp(true);
            setSelectedThumbDown(false);
        } else {
            setTotalLikes(totalLikes - 1);
            setSelectedThumbUp(false);
        }
    }

    const onPressThumbDown = () => {
        if (!isSelectedThumbDown) {
            setTotalDislikes(data.dislike + 1);
            if (isSelectedThumbUp) {
                setTotalLikes(totalLikes - 1);
            }
            setSelectedThumbDown(true);
            setSelectedThumbUp(false);
        } else {
            setTotalDislikes(totalDislikes - 1);
            setSelectedThumbDown(false);
        }
    }

    const onPressComment = () => {
        navigation.navigate(ROUTES.COMMENT);
    }

    const onPressReport = () => {
        setReportModalVisible(true);
    }

    const handleReportModalClose = () => {
        setReportModalVisible(!isReportModalVisible);
    };

    const handleReportChange = (label: string) => {
        setSelectedReport(label);
    };

    // Render item for FlatList
    const renderModalItem = ({ item }: { item: Report }) => (
        <RadioButton.Group onValueChange={() => handleReportChange(item.label)} value={selectedReport}>
            <View style={styles.modalItem}>
                <RadioButton value={item.label} color={COLORS.base} />
                <Text style={styles.labelTxt}>{item.label}</Text>
            </View>
        </RadioButton.Group>
    );

    // Render item for FlatList
    const renderReportModal = () => (
        <View style={styles.modalContainer}>
            <View style={styles.reportContainer}>
                <Text style={styles.reportTitle}>{'Report Mistake'}</Text>
                <MaterialIcons name='close' size={METRICS.icons.medium} color={COLORS.grey} onPress={handleReportModalClose} />
            </View>
            <Divider />
            <View style={{ margin: METRICS.baseHorizontalSpace * 1.5 }}>
                <FlatList
                    data={reportData}
                    renderItem={renderModalItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.toString()}
                />
                <Input
                    placeholder="Type here"
                    onChangeText={text => {
                        setReportMessage(text)
                    }}
                    value={reportMessage}
                    containerStyle={styles.inputStyle}
                    multiline={true}
                    numberOfLines={4}
                />
                <Button
                    buttonTitle={t('report_mistake')}
                    onButtonPress={() => { }}
                />
            </View>
        </View>
    );

    return (
        <>
            <Modal
                testID={'modal'}
                isVisible={isReportModalVisible}
                onBackdropPress={handleReportModalClose}
                onBackButtonPress={handleReportModalClose}
                style={styles.modalView}>
                {renderReportModal()}
            </Modal>
            <View style={styles.bottomContainer}>
                <View style={styles.AuthorWrapperContainer}>
                    <View style={styles.AuthorContainer}>
                        <View style={styles.iconContainer}>
                            <MaterialIcons name='person-outline' size={METRICS.icons.medium} color={COLORS.white} />
                        </View>
                        <View style={styles.AuthorInfoContainer}>
                            <Text style={styles.reporterTxt}>{'Reporter Name'}</Text>
                            <Text style={styles.reporterLocation}>{'Sr.Reporter, hyderabad'}</Text>
                        </View>
                    </View>
                    <View style={styles.AuthorContainer}>
                        <MaterialIcons name='schedule' size={METRICS.icons.tiny} />
                        <Text style={styles.publishTimeTxt}>{'5:50 PM'}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.divider} />
            <TapGestureHandler enabled={true}>
                <View style={[styles.bottomContainer, { paddingHorizontal: METRICS.halfHorizontalSpace }]}>
                    <View style={styles.AuthorWrapperContainer}>
                        <View style={styles.AuthorContainer}>
                            <TouchableOpacity style={[styles.AuthorContainer, styles.space]} onPress={onPressThumbUp} activeOpacity={1}>
                                {
                                    isSelectedThumbUp ?
                                        <MaterialIcons name='thumb-up' size={METRICS.icons.medium} color={COLORS.grey} />
                                        :
                                        <MaterialIcons name='thumb-up-off-alt' size={METRICS.icons.medium} color={COLORS.grey} />
                                }
                                <Text style={styles.spaceIconTxt}>{totalLikes}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.AuthorContainer, styles.space]} onPress={onPressThumbDown} activeOpacity={1}>
                                {
                                    isSelectedThumbDown ?
                                        <MaterialIcons name='thumb-down' size={METRICS.icons.medium} color={COLORS.grey} />
                                        :
                                        <MaterialIcons name='thumb-down-off-alt' size={METRICS.icons.medium} color={COLORS.grey} />
                                }
                                <Text style={styles.spaceIconTxt}>{totalDislikes}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.AuthorContainer, styles.space]} onPress={onPressComment} activeOpacity={1}>
                                <MaterialCommunityIcons name='comment-processing-outline' size={METRICS.icons.medium} color={COLORS.grey} />
                                <Text style={styles.spaceIconTxt}>{data.comment}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.AuthorContainer}>
                            <MaterialCommunityIcons name='share' size={METRICS.icons.medium} color={COLORS.base} style={styles.space} onPress={() => shareImage(viewRef)} />
                            <MaterialIcons name='report-gmailerrorred' size={METRICS.icons.medium} color={COLORS.grey} style={styles.space} onPress={onPressReport} />
                        </View>
                    </View>
                </View>
            </TapGestureHandler>
        </>
    );
};

const styles = StyleSheet.create({
    bottomContainer: { flexDirection: 'row', padding: METRICS.baseVerticalSpace * 1.5 },
    modalView: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContainer: {
        backgroundColor: COLORS.white,
    },
    reportContainer: {
        padding: METRICS.baseVerticalSpace * 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reportTitle: {
        fontSize: METRICS.fontScale(20),
        fontFamily: FONTS.interBold,
        color: COLORS.lightblack
    },
    modalItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelTxt: {
        fontSize: METRICS.fontScale(14),
        fontFamily: FONTS.interRegular,
        color: COLORS.lightblack
    },
    inputStyle: {
        marginVertical: METRICS.baseVerticalSpace * 1.5
    },
    AuthorWrapperContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    AuthorContainer: { flexDirection: 'row', alignItems: 'center' },
    space: {
        marginHorizontal: METRICS.halfHorizontalSpace
    },
    spaceIconTxt: {
        marginLeft: METRICS.halfHorizontalSpace,
        color: COLORS.grey
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: METRICS.images.small,
        width: METRICS.images.small,
        borderRadius: METRICS.baseHorizontalSpace * 1.5,
        backgroundColor: COLORS.grey
    },
    AuthorInfoContainer: {
        marginLeft: METRICS.halfHorizontalSpace
    },
    reporterTxt: {
        fontSize: METRICS.fontScale(10),
        fontFamily: FONTS.interBold,
        color: COLORS.grey
    },
    reporterLocation: {
        fontSize: METRICS.fontScale(8),
        fontFamily: FONTS.interRegular,
        color: COLORS.grey
    },
    publishTimeTxt: {
        fontSize: METRICS.fontScale(12),
        fontFamily: FONTS.interSemiBold,
        color: COLORS.grey,
        marginLeft: METRICS.halfHorizontalSpace
    },
    divider: {
        height: METRICS.hairlineWidth,
        width: METRICS.windowWidth * 0.96,
        backgroundColor: COLORS.lightwhite,
        alignSelf: 'center'
    }
});