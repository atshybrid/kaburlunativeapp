import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { Divider, RadioButton } from 'react-native-paper';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Input } from '../../components';
import styles from './style/share-feed.style';
import { ImageSlider } from '../image-slider';
import { shareImage } from '../../helpers';
import { COLORS, METRICS } from '../../theme';

interface Report {
    id: number;
    label: string;
}

type ShareFeedProps = {

};

export const ShareFeed = ({

}: ShareFeedProps) => {
    const { t } = useTranslation();
    const viewRef = useRef<View>(null);

    const [reportMessage, setReportMessage] = useState('');
    const [isOptionsModalVisible, setOptionsModalVisible] = useState(false);
    const [selectedReport, setSelectedReport] = useState('');
    const [isReportModalVisible, setReportModalVisible] = useState(false);

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
    ];

    const handleReportModalClose = () => {
        setReportModalVisible(!isReportModalVisible);
    };

    const handleReportChange = (label: string) => {
        setSelectedReport(label);
    };

    // Render item for FlatList
    const renderModalItem = ({ item }: { item: Report }) => (
        <RadioButton.Group onValueChange={() => handleReportChange(item.label)} value={selectedReport}>
            <View style={styles.reportItem}>
                <RadioButton value={item.label} color={COLORS.base} />
                <Text style={styles.reportlabelTxt}>{item.label}</Text>
            </View>
        </RadioButton.Group>
    );

    const renderReportModal = () => (
        <View style={styles.reportModalContainer}>
            <View style={styles.reportTopContainer}>
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

    const handleOptionsModalOpen = () => {
        setOptionsModalVisible(true);
    };

    const handleOptionsModalClose = () => {
        setOptionsModalVisible(!isOptionsModalVisible);
    };

    const renderReportPress = () => {
        handleOptionsModalClose();
        setReportModalVisible(true);
    }

    const renderDownloadPress = () => {
        handleOptionsModalClose()
        shareImage(viewRef, { download: true })
    }

    const renderBookmarkPress = () => {
        handleOptionsModalClose()
    }

    const renderOptionsModal = () => {
        return (
            <View style={styles.optionsModalContainer}>
                <TouchableOpacity style={styles.closeiconContainer} activeOpacity={1} onPress={handleOptionsModalClose}>
                    <MaterialIcons name='close' size={METRICS.icons.small} color={COLORS.white} />
                </TouchableOpacity>
                <View style={styles.optionsItemWrapper}>
                    <TouchableOpacity style={styles.optionsItem} activeOpacity={1} onPress={renderReportPress}>
                        <MaterialIcons name='report-gmailerrorred' size={METRICS.icons.medium} color={COLORS.black} />
                        <Text style={styles.optionsItemTxt}>{'Report Story'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsItem} activeOpacity={1} onPress={renderDownloadPress}>
                        <MaterialIcons name='downloading' size={METRICS.icons.medium} color={COLORS.black} />
                        <Text style={styles.optionsItemTxt}>{'Download'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionsItem} activeOpacity={1} onPress={renderBookmarkPress}>
                        <MaterialIcons name='bookmark-outline' size={METRICS.icons.medium} color={COLORS.black} />
                        <Text style={styles.optionsItemTxt}>{'Bookmark'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <>
            <Modal
                testID={'report-modal'}
                isVisible={isReportModalVisible}
                onBackdropPress={handleReportModalClose}
                onBackButtonPress={handleReportModalClose}
                style={styles.modalView}>
                {renderReportModal()}
            </Modal>
            <Modal
                testID={'options-modal'}
                isVisible={isOptionsModalVisible}
                onBackdropPress={handleOptionsModalClose}
                onBackButtonPress={handleOptionsModalClose}
                style={styles.modalView}>
                {renderOptionsModal()}
            </Modal>
            <ImageSlider data={sliderData} viewRef={viewRef} />
            <TapGestureHandler enabled={true} shouldCancelWhenOutside={false}>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.leftContainer} activeOpacity={1} onPress={() => { }}>
                        <Text style={styles.viralPostTxt}>{t('viral_posts')}</Text>
                        <MaterialCommunityIcons name='chevron-double-right' size={METRICS.icons.medium} color={COLORS.base} />
                    </TouchableOpacity>
                    <View style={styles.middleContainer}>
                        <View style={styles.outterIconContainer}>
                            <TouchableOpacity style={styles.innerIconContainer} activeOpacity={1} onPress={() => shareImage(viewRef, { isSocial: true })}>
                                <MaterialCommunityIcons name='whatsapp' size={METRICS.icons.large} color={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.totalShareTxt}>{`23 ${t('shares')}`}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <MaterialIcons name='more-vert' size={METRICS.icons.medium} color={COLORS.lightwhite} onPress={handleOptionsModalOpen} />
                        <MaterialCommunityIcons name='share' size={METRICS.icons.medium} color={COLORS.lightblack} style={{ marginLeft: METRICS.halfHorizontalSpace }} onPress={() => shareImage(viewRef)} />
                    </View>
                </View>
            </TapGestureHandler>
        </>
    );
};
