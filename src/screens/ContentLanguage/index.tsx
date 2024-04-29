import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style/index.style';
import { COLORS } from '../../theme';

interface Language {
    language: string;
    name: string;
    color: string;
    value: string;
}

const data: Language[] = [
    { language: 'తెలుగు', name: 'Telugu', color: '#9DA1C6', value: 'te' },
    { language: 'ಕನ್ನಡ', name: 'Kannada', color: '#FF8000', value: 'kn' },
    { language: 'தமிழ்', name: 'Tamil', color: '#F98199', value: 'ta' },
    { language: 'हिन्दी', name: 'Hindi', color: '#95AE47', value: 'hi' },
    { language: 'मराठी', name: 'Marathi', color: '#9C9082', value: 'mr' },
    { language: 'ગુજરાતી', name: 'Gujarati', color: '#0B4DA0', value: 'gu' },
];

export function ContentLanguageScreen() {
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    const handleLanguageSelect = (lang: string) => {
        setSelectedLanguage(lang);
    };

    const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
        const chunks: T[][] = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const rows = chunkArray(data.slice(2), 2);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTxt}>
                    {`${t('choose_preferred')} `}
                    <Text style={styles.boldText}>{t('language')}</Text>
                    {'\n'}{`${t('to')} ${t('read')} ${t('the')} `}
                    <Text style={styles.boldText}>{t('news')}</Text>
                </Text>
            </View>
            <View style={styles.wrapperContainer}>
                <View style={styles.languageRow}>
                    {data.slice(0, 2).map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.8}
                            style={selectedLanguage === item.value ? styles.selectedItem : [styles.item, { borderBottomColor: item.color }]}
                            onPress={() => handleLanguageSelect(item.value)}
                        >
                            <Text style={[styles.languageTxt, { color: item.color }]}>{item.language}</Text>
                            <Text style={styles.nameTxt}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {rows.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.8}
                                style={selectedLanguage === item.value ? styles.selectedGridItem : [styles.gridItem, { borderBottomColor: item.color }]}
                                onPress={() => handleLanguageSelect(item.value)}>
                                <Text style={[styles.languageTxt, { fontSize: 38, color: item.color }]}>{item.language}</Text>
                                <Text style={[styles.nameTxt, { fontSize: 16 }]}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>

        </View>
    );
}
