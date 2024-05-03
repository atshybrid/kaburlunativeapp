import React, { useState, useRef } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style/template.style';
import { COLORS, METRICS } from '../../theme';
import { TopContainer, BottomContainer, ShareLabel } from '../common';
import { TemplateProps } from './types';

export const ThirdTemplate = ({
    data
}: TemplateProps) => {
    const viewRef = useRef<View>(null);

    const [isShowLabel, setShowLabel] = useState<boolean>(false);
    return (
        <>
            <TopContainer />
            <View style={styles.container} ref={viewRef}>
                <View style={styles.txtContainer}>
                    <Text style={styles.categoryTxt}>{data.category}</Text>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.titleTxt, { color: COLORS.blue, fontSize: METRICS.fontScale(28) }]}>{data.title}</Text>
                        <Text style={[styles.subTitleTxt, { color: COLORS.red, fontSize: METRICS.fontScale(38) }]}>{data.subtitle}</Text>
                    </View>
                </View>
                <View style={styles.imgTitleContainer}>
                    <Text style={styles.imgTitleTxt}>{data.imagetitle}</Text>
                </View>
                <Image source={data.img} style={[styles.imgStyle, { height: METRICS.windowHeight * 0.26 }]} />
                {isShowLabel && (<ShareLabel />)}
                <View style={[styles.txtContainer, { marginTop: METRICS.baseVerticalSpace * 2 }]}>
                    <Text style={styles.shortDescTxt}>{data.shortdesc}</Text>
                </View>
            </View>
            <BottomContainer viewRef={viewRef} data={data} setShowLabel={setShowLabel} />
        </>
    );
};
