import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text, TouchableOpacity, FlatList, ScrollView, PermissionsAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import Modal from 'react-native-modal';
import Voice from '@react-native-voice/voice';
import { COLORS, METRICS } from '../../theme';
import { Button, Input } from '../../components';
import styles from './style/index.style';
import { Divider } from 'react-native-paper';

interface Category {
    id: number;
    category: string;
}

export function AddPostScreen() {
    const { t } = useTranslation();

    const categoryData = [
        {
            id: 1,
            category: 'Political',
        },
        {
            id: 2,
            category: 'Social',
        },
        {
            id: 3,
            category: 'Business',
        },
        {
            id: 4,
            category: 'Weather',
        },
        {
            id: 5,
            category: 'Recipe',
        },
        {
            id: 6,
            category: 'Entertainment',
        }
    ]

    const [languages, setLanguages] = useState<{
        [key: string]: string;
    }>({
        title: 'en-US',
        shortTitle: 'en-US',
        longTitle: 'en-US'
    });
    const [permissionGranted, setPermissionGranted] = useState(false);

    const [title, setTitle] = React.useState('');
    const [shortTitle, setShortTitle] = React.useState('');
    const [longTitle, setLongTitle] = React.useState('');

    const [selectedLanguageSwitches, setSelectedLanguageSwitches] = useState<string[]>(() => {
        const switches: string[] = [];
        Object.entries(languages).forEach(([key, value]) => {
            if (value === 'en-US') {
                switches.push(key);
            }
        });
        return switches;
    });
    const [selectedIcon, setSelectedIcon] = React.useState<string | null>(null);

    const [isBreakingNewsOn, setIsBreakingNewsOn] = React.useState(false);
    const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categoryData[0].category);

    useEffect(() => {
        checkPermission();
        Voice.onSpeechResults = onSpeechResults;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const checkPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                    title: "Speech to Text App Permission",
                    message: "This app needs access to your microphone to enable speech recognition.",
                    buttonPositive: "OK",
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Microphone permission granted");
                setPermissionGranted(true);
            } else {
                console.log("Microphone permission denied");
                setPermissionGranted(false);
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const startListening = async (type: string) => {
        if (!permissionGranted) {
            console.log("Permission not granted!");
            return;
        }
        try {
            console.log("Language ==>", languages[type]);
            await Voice.start(languages[type]);
            Voice.onSpeechResults = onSpeechResults;
            console.log("startListening ==>", type);
            setSelectedIcon(type === selectedIcon ? null : type);
        } catch (error) {
            console.error(error);
        }
    };

    const stopListening = async (type: string) => {
        try {
            await Voice.stop();
            Voice.removeAllListeners();
            console.log("stopListening ==>", type);
            setSelectedIcon(type === selectedIcon ? null : type);
        } catch (error) {
            console.error(error);
        }
    };

    const onSpeechResults = (event: any) => {
        if (selectedIcon === 'title') {
            setTitle(event.value[0]);
        } else if (selectedIcon === 'shortTitle') {
            setShortTitle(event.value[0]);
        } else if (selectedIcon === 'longTitle') {
            setLongTitle(event.value[0]);
        }
    };

    const onToggleLanguageSwitch = (type: string) => {
        if (selectedLanguageSwitches.includes(type)) {
            setSelectedLanguageSwitches(selectedLanguageSwitches.filter((switchType) => switchType !== type));
        } else {
            setSelectedLanguageSwitches([...selectedLanguageSwitches, type]);
        }

        const updatedLanguages = { ...languages };
        if (updatedLanguages[type] === 'en-US') {
            updatedLanguages[type] = 'te-IN'; // Switch to Telugu
        } else {
            updatedLanguages[type] = 'en-US'; // Switch to English
        }
        setLanguages(updatedLanguages);
    };

    const onToggleSwitch = () => setIsBreakingNewsOn(!isBreakingNewsOn);

    const handleCategorySelect = () => {
        setCategoryModalVisible(true);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        handleCategoryModalClose();
    };

    const handleCategoryModalClose = () => {
        setCategoryModalVisible(!isCategoryModalVisible);
    };

    // Render item for FlatList
    const renderModalItem = ({ item }: { item: Category }) => (
        <TouchableOpacity style={styles.modalItem} activeOpacity={1} onPress={() => handleCategoryChange(item.category)}>
            <View style={styles.categoryImg}></View>
            <Text style={styles.categoryTxt}>{item.category}</Text>
        </TouchableOpacity>
    );

    const renderCategoryModal = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryHeading}>{t('select_category')}</Text>
                    <Icon name='close' size={METRICS.icons.medium} color={COLORS.grey} onPress={handleCategoryModalClose} />
                </View>
                <Divider />
                <FlatList
                    data={categoryData}
                    renderItem={renderModalItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.toString()}
                    numColumns={4}
                    horizontal={false}
                />
            </View>
        );
    };

    const speechToTextIcon = (type: string) => {
        return (
            <Icon
                name={type === selectedIcon ? 'record-rec' : 'microphone'}
                size={METRICS.icons.medium} color={COLORS.grey}
                onPress={() => {
                    if (type === selectedIcon) {
                        stopListening(type)
                    } else {
                        startListening(type)
                    }
                }}
            />
        );
    }

    const languageSwitch = (type: string) => {
        const isActive = selectedLanguageSwitches.includes(type);
        return (
            <>
                <TouchableOpacity
                    style={[styles.languageSwitchOutter, { justifyContent: isActive ? 'flex-end' : 'flex-start' }]}
                    activeOpacity={1}
                    onPress={() => onToggleLanguageSwitch(type)}>
                    {isActive && (<Text style={styles.langTxt}>{'అ'}</Text>)}
                    <View style={styles.languageSwitchInner}>
                        <Text style={styles.langTxt}>{isActive ? 'Aa' : 'అ'}</Text>
                    </View>
                    {!isActive && (<Text style={styles.langTxt}>{'Aa'}</Text>)}
                </TouchableOpacity>
            </>
        );
    };

    const multilineInputBox = (type: string) => {
        let heading: string, placeholderText: string;
        switch (type) {
            case 'title':
                heading = t('give_title');
                placeholderText = `${t('headline')} (${t('80_chars')})`;
                break;

            case 'shortTitle':
                heading = t('write_short_news');
                placeholderText = `${t('short_news')} (${t('400_chars')})`;
                break;

            case 'longTitle':
                heading = t('write_long_news');
                placeholderText = `${t('long_news')} (${t('1000_chars')})`;
                break;

            default:
                heading = '';
                placeholderText = '';
                break;
        }
        return (
            <View style={[styles.inputContainer, { marginTop: METRICS.baseVerticalSpace }]}>
                <View style={styles.topInputContainer}>
                    <Text style={styles.titleTxt}>{heading}</Text>
                    <View style={styles.rightHeadingContainer}>
                        {speechToTextIcon(type)}
                        {languageSwitch(type)}
                    </View>
                </View>
                <Divider style={styles.divider} />
                <Input
                    placeholder={placeholderText}
                    onChangeText={text => {
                        switch (type) {
                            case 'title':
                                setTitle(text);
                                break;
                            case 'shortTitle':
                                setShortTitle(text);
                                break;
                            case 'longTitle':
                                setLongTitle(text);
                                break;
                            default:
                                break;
                        }
                    }}
                    value={type === 'title' ? title : type === 'shortTitle' ? shortTitle : longTitle}
                    containerStyle={styles.inputStyle}
                    multiline={true}
                    numberOfLines={type === 'title' ? 2 : type === 'shortTitle' ? 6 : 10}
                    maxLength={type === 'title' ? 80 : type === 'shortTitle' ? 400 : 1000}
                />
            </View>
        );
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
                <Modal
                    testID={'category-modal'}
                    isVisible={isCategoryModalVisible}
                    onBackdropPress={handleCategoryModalClose}
                    onBackButtonPress={handleCategoryModalClose}
                    style={styles.modalView}>
                    {renderCategoryModal()}
                </Modal>
                {multilineInputBox('title')}
                {multilineInputBox('shortTitle')}
                {multilineInputBox('longTitle')}
                <Text style={styles.categoryTitle}>{t('categories')}</Text>
                <View style={styles.switchContainer}>
                    <Text style={styles.inputTitleTxt}>{t('selected_category')}</Text>
                    <TouchableOpacity style={styles.inputTitleTxt} onPress={handleCategorySelect}><Text style={styles.selectedCategoryTxt}>{selectedCategory}</Text></TouchableOpacity>
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.inputTitleTxt}>{t('breaking_news')}</Text>
                    <TouchableOpacity
                        style={[styles.switchOutter, { justifyContent: isBreakingNewsOn ? 'flex-end' : 'flex-start' }]}
                        activeOpacity={1}
                        onPress={onToggleSwitch}>
                        <View style={[styles.switchInner, { backgroundColor: isBreakingNewsOn ? COLORS.base : COLORS.lightblack }]} />
                    </TouchableOpacity>
                </View>
                <Button
                    buttonTitle={t('publish_article')}
                    onButtonPress={() => { }}
                    buttonTextStyle={styles.btnTxt}
                    containerStyle={styles.btnContainer}
                />
            </View>
        </ScrollView>
    );
}
