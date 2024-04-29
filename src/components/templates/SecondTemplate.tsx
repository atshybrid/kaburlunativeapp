import React, { useRef } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style/template.style';
import { COLORS } from '../../theme';
import { TopContainer, BottomContainer } from '../common';
import { TemplateProps } from './types';

export const SecondTemplate = ({
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
                        <Text style={[styles.subTitleTxt, { color: COLORS.lightpink }]}>{data.subtitle}</Text>
                    </View>
                    <Text style={styles.shortDescTxt}>{data.shortdesc}</Text>
                </View>
                <Image source={data.img} resizeMode='stretch' />
            </View>
            <BottomContainer viewRef={viewRef} data={data} />
        </>
    );
};
