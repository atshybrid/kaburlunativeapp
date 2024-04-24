import React, { useState, useRef } from 'react';
import { FlatList, View, Dimensions, ImageSourcePropType, Image, Text } from 'react-native';
import styles from './style/image-slider.style';
import { COLORS } from '../../theme';

const { width } = Dimensions.get("window");

type SliderData = {
    id: number;
    img: string;
}

type ImageSliderProps = {
    data: SliderData[];
};

export const ImageSlider = ({
    data
}: ImageSliderProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList | null>(null);

    const renderItem = ({ item, index }: { item: SliderData, index: number }) => {
        const isLastSlide = index === data.length - 1;
        return (
            <View style={styles.slide}>
                <Image source={{ uri: item.img }} style={styles.imgView} resizeMode='stretch' />
            </View>
        );
    };

    const onMomentumScrollEnd = (e: any) => {
        const offset = e.nativeEvent.contentOffset.x;
        const newIndex = Math.round(offset / width);
        if (newIndex === activeIndex) {
            return;
        }
        setActiveIndex(newIndex);
    };

    const onLayout = ({ nativeEvent }: any) => {
        const { width } = nativeEvent.layout;
        setTimeout(() => {
            flatListRef.current?.scrollToOffset({
                offset: activeIndex * width,
                animated: false,
            });
        }, 0);
    };

    const renderPagination = (previousIndex: number) => {
        return (
            <View style={styles.paginationContainer}>
                {data.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            i === previousIndex
                                ? { backgroundColor: COLORS.white, width: 12 }
                                : { backgroundColor: COLORS.grey },
                        ]}
                    />
                ))}
            </View>
        );
    };

    return (
        <>
            <FlatList
                ref={flatListRef}
                data={data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                style={styles.container}
                renderItem={renderItem}
                onMomentumScrollEnd={onMomentumScrollEnd}
                onLayout={onLayout}
                scrollEnabled={true}
                initialNumToRender={data.length}
            />
            {data.length > 1 && renderPagination(activeIndex)}
        </>
    );
};
