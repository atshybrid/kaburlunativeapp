import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style/template.style';
import { NewsItem } from '../../constants';
import { TopContainer, BottomContainer } from '../common';

type TemplateProps = {
    data: NewsItem;
};

export const FirstTemplate = ({
    data
}: TemplateProps) => {
    return (
        <>
            <TopContainer />
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.categoryTxt}>{data.category}</Text>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleTxt}>{data.title}</Text>
                        <Text style={styles.subTitleTxt}>{data.subtitle}</Text>
                    </View>
                    <Text style={styles.shortDescTxt}>{data.shortdesc}</Text>
                </View>
            </View>
            <Image source={data.img} style={styles.imgStyle} resizeMode='stretch' />
            <BottomContainer data={data} />
        </>
    );
};
