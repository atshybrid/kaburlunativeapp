import React, { useState, useRef } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style/template.style';
import { TopContainer, BottomContainer, ShareLabel } from '../common';
import { TemplateProps } from './types';
import { METRICS } from '../../theme';

export const FirstTemplate = ({
    data
}: TemplateProps) => {
    const viewRef = useRef<View>(null);

    const [isShowLabel, setShowLabel] = useState<boolean>(false);
    return (
        <>
            <TopContainer />
            <View style={styles.container} ref={viewRef}>
                <View style={[styles.txtContainer, { flex: 1 }]}>
                    <Text style={styles.categoryTxt}>{data.category}</Text>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleTxt}>{data.title}</Text>
                        <Text style={styles.subTitleTxt}>{data.subtitle}</Text>
                    </View>
                    <Text style={styles.shortDescTxt}>{data.shortdesc}</Text>
                </View>
                <Image source={data.img} style={[styles.imgStyle, { height: METRICS.windowHeight * 0.26 }]} resizeMode='stretch' />
                {isShowLabel && (<ShareLabel />)}
            </View>
            <BottomContainer viewRef={viewRef} data={data} setShowLabel={setShowLabel} />
        </>
    );
};
