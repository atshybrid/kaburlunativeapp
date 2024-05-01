import React, { useState } from 'react';
import {
    Animated,
    PanResponder,
    SafeAreaView
} from 'react-native';
import { NewsItem } from '../../constants';
import styles from './style/swipe-card.style';
import { METRICS } from '../../theme';

type SwipeCardProps = {
    data: NewsItem[],
    renderItem: (item: NewsItem) => React.ReactNode;
};

export const SwipeCard = ({
    data,
    renderItem
}: SwipeCardProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const position = new Animated.ValueXY();
    const swipedCardPosition = new Animated.ValueXY({ x: 0, y: -METRICS.windowHeight });

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            if (currentIndex === 0 && gestureState.dy > 0) {
                swipedCardPosition.setValue({ x: 0, y: -METRICS.windowHeight + gestureState.dy });
            } else if (currentIndex === data.length - 1 && gestureState.dy < 0) {
                swipedCardPosition.setValue({ x: 0, y: -METRICS.windowHeight + gestureState.dy });
            } else if (gestureState.dy > 0 && (currentIndex > 0)) {
                swipedCardPosition.setValue({ x: 0, y: -METRICS.windowHeight + gestureState.dy })
            } else {
                position.setValue({ x: 0, y: gestureState.dy })
            }
        },
        onPanResponderRelease: (_, gestureState) => {
            if (currentIndex > 0 && gestureState.dy > 50 && gestureState.vy > 0.7) {
                Animated.timing(swipedCardPosition, {
                    toValue: { x: 0, y: 0 },
                    duration: 400,
                    useNativeDriver: false
                }).start(() => {
                    setCurrentIndex(currentIndex - 1);
                    swipedCardPosition.setValue({ x: 0, y: -METRICS.windowHeight });
                });
            } else if (-gestureState.dy > 50 && -gestureState.vy > 0.7 && currentIndex < data.length - 1) {
                Animated.timing(position, {
                    toValue: { x: 0, y: -METRICS.windowHeight },
                    duration: 400,
                    useNativeDriver: false
                }).start(() => {
                    setCurrentIndex(currentIndex + 1);
                    position.setValue({ x: 0, y: 0 });
                });
            } else {
                Animated.parallel([
                    Animated.spring(position, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                        bounciness: 0
                    }),
                    Animated.spring(swipedCardPosition, {
                        toValue: { x: 0, y: -METRICS.windowHeight },
                        useNativeDriver: false,
                        bounciness: 0
                    })
                ]).start();
            }
        }
    });

    const renderArticles = () => {
        return data.map((item, i) => {
            if (i == currentIndex - 1) {
                return (
                    <Animated.View
                        key={item.id}
                        style={[styles.swipeCard, swipedCardPosition.getLayout()]}
                        {...panResponder.panHandlers}
                    >
                        {renderItem(item)}
                    </Animated.View>
                )
            } else if (i < currentIndex) { return null; }
            if (i == currentIndex) {
                return (
                    <Animated.View
                        key={item.id}
                        style={[styles.swipeCard, position.getLayout()]}
                        {...panResponder.panHandlers}
                    >
                        {renderItem(item)}
                    </Animated.View>
                )
            } else {
                return (
                    <Animated.View key={item.id} style={styles.swipeCard}>
                        {renderItem(item)}
                    </Animated.View>
                )
            }
        }).reverse();
    };

    return (
        <SafeAreaView style={styles.container} >
            {renderArticles()}
        </SafeAreaView>
    );
};