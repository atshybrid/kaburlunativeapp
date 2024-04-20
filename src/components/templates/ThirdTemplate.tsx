import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style/template.style';
import { COLORS } from '../../theme';
import { TopContainer, BottomContainer } from '../common';
import { TemplateProps } from './types';

export const ThirdTemplate = ({
    data
}: TemplateProps) => {
    return (
        <>
            <TopContainer />
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.categoryTxt}>{data.category}</Text>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.titleTxt, { color: COLORS.blue, fontSize: 28 }]}>{data.title}</Text>
                        <Text style={[styles.subTitleTxt, { color: COLORS.red, fontSize: 38 }]}>{data.subtitle}</Text>
                    </View>
                </View>
                <View style={styles.imgTitleContainer}>
                    <Text style={styles.imgTitleTxt}>{data.imagetitle}</Text>
                </View>
                <Image source={data.img} style={styles.imgStyle} />
                <View style={[styles.txtContainer, { marginTop: 32 }]}>
                    <Text style={styles.shortDescTxt}>{data.shortdesc}</Text>
                </View>
            </View>
            <BottomContainer data={data} />
        </>
    );
};
