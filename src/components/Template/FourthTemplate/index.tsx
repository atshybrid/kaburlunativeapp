import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../style/template.style';
import { NewsItem } from '../../../constants';
import { BottomContainer } from '../../BottomContainer';

type TemplateProps = {
    data: NewsItem;
};

export const FourthTemplate = ({
    data
}: TemplateProps) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.categoryTxt}>{data.category}</Text>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.titleTxt, { fontSize: 22 }]}>{data.title}</Text>
                    </View>
                    <Text style={styles.shortDescTxt}>{data.shortdesc}</Text>
                </View>
            </View>
            <Image source={data.img} style={{ alignSelf: 'flex-end' }} resizeMode='contain' />
            <BottomContainer data={data} />
        </>
    );
};
