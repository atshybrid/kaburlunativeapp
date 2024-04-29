import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text, TouchableOpacity, FlatList, ScrollView, PermissionsAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import Modal from 'react-native-modal';
import Voice from '@react-native-voice/voice';
import { COLORS } from '../../theme';
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

    const [language, setLanguage] = useState('te-IN');
    const [permissionGranted, setPermissionGranted] = useState(false);

    const [title, setTitle] = React.useState('');
    const [shortTitle, setShortTitle] = React.useState('');
    const [longTitle, setLongTitle] = React.useState('');

    const [selectedLanguageSwitch, setSelectedLanguageSwitch] = React.useState<string | null>(null);
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

    const startListening = async (inputType: string) => {
        if (!permissionGranted) {
            console.log("Permission not granted!");
            return;
        }
        try {
            console.log("Language ==>", language);
            await Voice.start(language);
            Voice.onSpeechResults = onSpeechResults;
            console.log("startListening ==>", inputType);
            setSelectedIcon(inputType === selectedIcon ? null : inputType);
        } catch (error) {
            console.error(error);
        }
    };

    const stopListening = async (inputType: string) => {
        try {
            await Voice.stop();
            Voice.removeAllListeners();
            console.log("stopListening ==>", inputType);
            setSelectedIcon(inputType === selectedIcon ? null : inputType);
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

    const onToggleLanguageSwitch = (inputType: string) => {
        if (language === 'en-US') {
            setLanguage('te-IN'); // Switch to Telugu
        } else {
            setLanguage('en-US'); // Switch to English
        }
        setSelectedLanguageSwitch(inputType === selectedLanguageSwitch ? null : inputType);
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
                    <Icon name='close' size={24} color={COLORS.grey} onPress={handleCategoryModalClose} />
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

    const speechToTextIcon = (inputType: string) => {
        return (
            <Icon
                name={inputType === selectedIcon ? 'record-rec' : 'microphone'}
                size={inputType === selectedIcon ? 24 : 22} color={COLORS.grey}
                onPress={() => {
                    if (inputType === selectedIcon) {
                        stopListening(inputType)
                    } else {
                        startListening(inputType)
                    }
                }}
            />
        );
    }

    const languageSwitch = (inputType: string) => {
        return (
            <View style={styles.languageContainer}>
                {speechToTextIcon(inputType)}
                <TouchableOpacity
                    style={[styles.languageSwitchOutter, { justifyContent: inputType === selectedLanguageSwitch ? 'flex-end' : 'flex-start' }]}
                    activeOpacity={1}
                    onPress={() => onToggleLanguageSwitch(inputType)}>
                    {inputType === selectedLanguageSwitch && (<Text style={styles.langTxt}>{'అ'}</Text>)}
                    <View style={styles.languageSwitchInner}>

                        <Text style={styles.langTxt}>{inputType === selectedLanguageSwitch ? 'Aa' : 'అ'}</Text>
                    </View>
                    {inputType !== selectedLanguageSwitch && (<Text style={styles.langTxt}>{'Aa'}</Text>)}
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
                <Modal
                    testID={'modal'}
                    isVisible={isCategoryModalVisible}
                    onBackdropPress={handleCategoryModalClose}
                    onBackButtonPress={handleCategoryModalClose}
                    style={styles.modalView}>
                    {renderCategoryModal()}
                </Modal>
                <View style={styles.inputContainer}>
                    <View style={styles.topInputContainer}>
                        <Text style={styles.titleTxt}>{t('give_title')}</Text>
                        {languageSwitch('title')}
                    </View>
                    <Divider style={styles.divider} />
                    <Input
                        placeholder={`${t('headline')} (${t('80_chars')})`}
                        onChangeText={text => {
                            setTitle(text)
                        }}
                        value={title}
                        containerStyle={styles.inputStyle}
                        multiline={true}
                        numberOfLines={2}
                        maxLength={80}
                    />
                </View>
                <View style={[styles.inputContainer, { marginTop: 16 }]}>
                    <View style={styles.topInputContainer}>
                        <Text style={styles.titleTxt}>{t('write_short_news')}</Text>
                        {languageSwitch('shortTitle')}
                    </View>
                    <Divider style={styles.divider} />
                    <Input
                        placeholder={`${t('short_news')} (${t('400_chars')})`}
                        onChangeText={text => {
                            setShortTitle(text)
                        }}
                        value={shortTitle}
                        containerStyle={styles.inputStyle}
                        multiline={true}
                        numberOfLines={6}
                        maxLength={400}
                    />
                </View>
                <View style={[styles.inputContainer, { marginTop: 16 }]}>
                    <View style={styles.topInputContainer}>
                        <Text style={styles.titleTxt}>{t('write_long_news')}</Text>
                        {languageSwitch('longTitle')}
                    </View>
                    <Divider style={styles.divider} />
                    <Input
                        placeholder={`${t('long_news')} (${t('1000_chars')})`}
                        onChangeText={text => {
                            setLongTitle(text)
                        }}
                        value={longTitle}
                        containerStyle={styles.inputStyle}
                        multiline={true}
                        numberOfLines={10}
                        maxLength={1000}
                    />
                </View>
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
