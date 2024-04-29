import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import styles from './style/top-tab.style';
import { COLORS } from '../../theme';
import { Divider } from 'react-native-paper';

interface Category {
    id: number;
    category: string;
}

type Props = {
    visible: boolean;
    onOpenModal: () => void;
    onCloseModal: () => void;
};

export const TopTab = ({
    visible,
    onOpenModal,
    onCloseModal
}: Props) => {
    const { t } = useTranslation();

    const categoryData: Category[] = [
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

    const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = () => {
        setCategoryModalVisible(true);
        onOpenModal()
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        handleCategoryModalClose();
    };

    const handleCategoryModalClose = () => {
        setCategoryModalVisible(!isCategoryModalVisible);
        onCloseModal();
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

    return (
        <>
            <Modal
                testID={'modal'}
                isVisible={isCategoryModalVisible}
                onBackdropPress={handleCategoryModalClose}
                onBackButtonPress={handleCategoryModalClose}
                style={styles.modalView}>
                {renderCategoryModal()}
            </Modal>
            {visible && (
                <TapGestureHandler enabled={true}>
                    <View style={styles.topTabBarContainer}>
                        <TouchableOpacity style={styles.tabBarItem} activeOpacity={1} onPress={handleCategorySelect}>
                            <Text style={styles.tabBarTxt}>{selectedCategory == null ? t('all_news') : selectedCategory}</Text>
                            <Icon name='expand-more' size={24} color={COLORS.grey} />
                        </TouchableOpacity>
                    </View>
                </TapGestureHandler>
            )}
        </>
    );
};
