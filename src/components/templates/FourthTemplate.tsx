import React, { useRef } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style/template.style';
import { TopContainer, BottomContainer } from '../common';
import { TemplateProps } from './types';

export const FourthTemplate = ({
    data
}: TemplateProps) => {
    const viewRef = useRef<View>(null);
    return (
        <>
            <TopContainer />
            <View style={styles.container} ref={viewRef}>
                <View style={[styles.txtContainer, { flex: 1 }]}>
                    <Text style={styles.categoryTxt}>{data.category}</Text>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.titleTxt, { fontSize: 22 }]}>{data.title}</Text>
                    </View>
                    <Text style={styles.shortDescTxt}>{data.shortdesc}</Text>
                </View>
                <Image source={data.img} style={{ alignSelf: 'flex-end' }} resizeMode='contain' />
            </View>
            <BottomContainer viewRef={viewRef} data={data} />
        </>
    );
};
