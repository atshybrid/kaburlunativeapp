import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style/index.style';
import { COLORS } from '../../theme';

interface Language {
    language: string;
    name: string;
    color: string;
}

const data: Language[] = [
    // { language: 'English', name: 'Telugu', color: '#A6A6A6' },
    { language: 'తెలుగు', name: 'Telugu', color: '#9DA1C6' },
    { language: 'ಕನ್ನಡ', name: 'Kannada', color: '#FF8000' },
    { language: 'தமிழ்', name: 'Tamil', color: '#F98199' },
    { language: 'हिन्दी', name: 'Hindi', color: '#95AE47' },
    { language: 'मराठी', name: 'Marathi', color: '#9C9082' },
    { language: 'ગુજરાતી', name: 'Gujarati', color: '#0B4DA0' },
];

export function LanguageScreen() {
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
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
                    Choose your preferred{' '}
                    <Text style={styles.boldText}>language</Text>
                    {'\n'}to read the{' '}
                    <Text style={styles.boldText}>news</Text>
                </Text>
            </View>
            <View style={styles.wrapperContainer}>
                <View style={styles.languageRow}>
                    {data.slice(0, 2).map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.8}
                            style={selectedLanguage === item.language ? styles.selectedItem : [styles.item, { borderBottomColor: item.color }]}
                            onPress={() => handleLanguageSelect(item.language)}
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
                                style={selectedLanguage === item.language ? styles.selectedGridItem : [styles.gridItem, { borderBottomColor: item.color }]}
                                onPress={() => handleLanguageSelect(item.language)}>
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