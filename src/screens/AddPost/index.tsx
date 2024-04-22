import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';
import Modal from 'react-native-modal';
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

    const [title, setTitle] = React.useState('');
    const [shortTitle, setShortTitle] = React.useState('');
    const [longTitle, setLongTitle] = React.useState('');
    const [isBreakingNewsOn, setIsBreakingNewsOn] = React.useState(false);
    const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categoryData[0].category);

    const onToggleChildSwitch = () => setIsBreakingNewsOn(!isBreakingNewsOn);

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
            <Text>{item.category}</Text>
        </TouchableOpacity>
    );

    const renderCategoryModal = () => {
        return (
            <View style={styles.modalContainer}>
                <FlatList
                    data={categoryData}
                    renderItem={renderModalItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.toString()}
                />
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
                        <Text style={styles.titleTxt}>{'Give a title'}</Text>
                        <Icon name='mic' size={16} color={COLORS.grey} />
                    </View>
                    <Divider style={styles.divider} />
                    <Input
                        placeholder="Headline (80 Chars)"
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
                        <Text style={styles.titleTxt}>{'Write a short news story'}</Text>
                        <Icon name='mic' size={16} color={COLORS.grey} />
                    </View>
                    <Divider style={styles.divider} />
                    <Input
                        placeholder="Short News (400 Chars)"
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
                        <Text style={styles.titleTxt}>{'Write a long news story'}</Text>
                        <Icon name='mic' size={16} color={COLORS.grey} />
                    </View>
                    <Divider style={styles.divider} />
                    <Input
                        placeholder="Long News (1000 Chars)"
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
                <Text style={styles.categoryTitle}>{'Categories'}</Text>
                <View style={styles.switchContainer}>
                    <Text style={styles.inputTitleTxt}>{'Selected Category'}</Text>
                    <TouchableOpacity style={styles.inputTitleTxt} onPress={handleCategorySelect}><Text style={styles.categoryTxt}>{selectedCategory}</Text></TouchableOpacity>
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.inputTitleTxt}>{'Breaking News'}</Text>
                    <TouchableOpacity
                        style={[styles.switchOutter, { justifyContent: isBreakingNewsOn ? 'flex-end' : 'flex-start' }]}
                        activeOpacity={1}
                        onPress={onToggleChildSwitch}>
                        <View style={[styles.switchInner, { backgroundColor: isBreakingNewsOn ? COLORS.base : COLORS.lightblack }]} />
                    </TouchableOpacity>
                </View>
                <Button
                    buttonTitle="Publish Article"
                    onButtonPress={() => { }}
                    buttonTextStyle={styles.btnTxt}
                    containerStyle={styles.btnContainer}
                />
            </View>
        </ScrollView>
    );
}
