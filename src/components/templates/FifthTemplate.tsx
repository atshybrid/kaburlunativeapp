import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style/template.style';
import { TopContainer, BottomContainer } from '../common';
import { TemplateProps } from './types';

export const FifthTemplate = ({
    data
}: TemplateProps) => {
    return (
        <>
            <TopContainer />
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.categoryTxt}>{data.category}</Text>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.titleTxt, { fontSize: 24 }]}>{data.title}</Text>
                    </View>
                    <Text style={styles.shortDescTxt}>{data.shortdesc}</Text>
                    <Image source={data.img} style={styles.imgStyle} resizeMode='contain' />
                </View>
            </View>
            <BottomContainer data={data} />
        </>
    );
};
