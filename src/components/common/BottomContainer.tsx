import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Share from 'react-native-share';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Input } from '../../components';
import { COLORS, FONTS } from '../../theme';
import { BottomContainerProps } from '../templates/types';
import { ROUTES } from '../../constants';
import { Divider, RadioButton } from 'react-native-paper';


interface Report {
    id: number;
    label: string;
}

export const BottomContainer = ({
    data
}: BottomContainerProps) => {
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

    const onPressShare = () => {
        const options = {
            title: data.title,
            message: data.subtitle
        }
        Share.open(options)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
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
        <RadioButton.Group onValueChange={() => handleReportChange(item.label)} value={selectedReport} >
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
                <MaterialIcons name='close' size={24} color={COLORS.grey} onPress={handleReportModalClose} />
            </View>
            <Divider />
            <View style={{ margin: 16 }}>
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
                    buttonTitle="Report a mistake"
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
                            <MaterialIcons name='person-outline' size={24} color={COLORS.white} />
                        </View>
                        <View style={styles.AuthorInfoContainer}>
                            <Text style={styles.reporterTxt}>{'Reporter Name'}</Text>
                            <Text style={styles.reporterLocation}>{'Sr.Reporter, hyderabad'}</Text>
                        </View>
                    </View>
                    <View style={styles.AuthorContainer}>
                        <MaterialIcons name='schedule' size={16} />
                        <Text style={styles.publishTimeTxt}>{'5:50 PM'}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={[styles.bottomContainer, { marginHorizontal: 8 }]}>
                <View style={styles.AuthorWrapperContainer}>
                    <View style={styles.AuthorContainer}>
                        <TouchableOpacity style={[styles.AuthorContainer, styles.space]} onPress={onPressThumbUp} activeOpacity={1}>
                            {
                                isSelectedThumbUp ?
                                    <MaterialIcons name='thumb-up' size={24} color={COLORS.grey} />
                                    :
                                    <MaterialIcons name='thumb-up-off-alt' size={24} color={COLORS.grey} />
                            }
                            <Text style={styles.spaceIconTxt}>{totalLikes}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.AuthorContainer, styles.space]} onPress={onPressThumbDown} activeOpacity={1}>
                            {
                                isSelectedThumbDown ?
                                    <MaterialIcons name='thumb-down' size={24} color={COLORS.grey} />
                                    :
                                    <MaterialIcons name='thumb-down-off-alt' size={24} color={COLORS.grey} />
                            }
                            <Text style={styles.spaceIconTxt}>{totalDislikes}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.AuthorContainer, styles.space]} onPress={onPressComment} activeOpacity={1}>
                            <MaterialCommunityIcons name='comment-processing-outline' size={24} color={COLORS.grey} />
                            <Text style={styles.spaceIconTxt}>{data.comment}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AuthorContainer}>
                        <MaterialCommunityIcons name='share' size={24} color={COLORS.base} style={styles.space} onPress={onPressShare} />
                        <MaterialIcons name='report-gmailerrorred' size={24} color={COLORS.grey} style={styles.space} onPress={onPressReport} />
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    bottomContainer: { flexDirection: 'row', margin: 16 },
    modalView: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContainer: {
        backgroundColor: COLORS.white,
    },
    reportContainer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reportTitle: {
        fontSize: 20,
        fontFamily: FONTS.interBold,
        color: COLORS.lightblack
    },
    modalItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelTxt: {
        fontSize: 14,
        fontFamily: FONTS.interRegular,
        color: COLORS.lightblack
    },
    inputStyle: {
        marginVertical: 16
    },
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