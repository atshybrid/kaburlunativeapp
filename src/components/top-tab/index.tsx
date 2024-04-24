import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import styles from './style/top-tab.style';
import { COLORS } from '../../theme';
import { Divider } from 'react-native-paper';

interface Category {
    id: number;
    category: string;
}

type ButtonProps = {
    onPress?: () => any;
};

export const TopTab = ({
    onPress
}: ButtonProps) => {

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

    const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categoryData[0].category);

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
                    <Text style={styles.categoryHeading}>{'Select Category'}</Text>
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
            <View style={styles.topTabBarContainer}>
                <TouchableOpacity style={styles.tabBarItem} activeOpacity={1} onPress={handleCategorySelect}>
                    <Text style={styles.tabBarTxt}>{selectedCategory}</Text>
                    <Icon name='expand-more' size={24} color={COLORS.grey} />
                </TouchableOpacity>
            </View>
        </>
    );
};
