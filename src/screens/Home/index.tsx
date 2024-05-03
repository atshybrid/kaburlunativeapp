import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import styles from './style/home.style';
import { NewsItem, newsConst } from '../../constants';
import { BottomTab, Recommend, ShareFeed, TopTab } from '../../components';
import {
    SwipeCard,
    FirstTemplate,
    SecondTemplate,
    ThirdTemplate,
    FourthTemplate,
    FifthTemplate
} from '../../components';
import { COLORS } from '../../theme';

export function HomeScreen() {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    useEffect(() => {
        if (!isModalVisible || !isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(true);
        }
    }, [isVisible, isModalVisible]);

    const onTap = (event: any) => {
        if (event.nativeEvent.state === State.END) {
            if (isVisible) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        }
    };

    const renderTemplate = (item: NewsItem) => {
        switch (item.type) {
            case 'template-1':
                return <FirstTemplate data={item} />;
            case 'template-2':
                return <SecondTemplate data={item} />;
            case 'template-3':
                return <ThirdTemplate data={item} />;
            case 'template-4':
                return <FourthTemplate data={item} />;
            case 'template-5':
                return <FifthTemplate data={item} />;
            case 'recommend':
                return <Recommend />;
            case 'share-feed':
                return <ShareFeed />;
            default:
                return null;
        }
    };

    return (
        <TapGestureHandler onHandlerStateChange={onTap}>
            <View style={styles.container}>
                <TopTab
                    visible={isVisible}
                    onOpenModal={() => setIsModalVisible(true)}
                    onCloseModal={() => setIsModalVisible(false)}
                />
                <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
                <SwipeCard data={newsConst} renderItem={renderTemplate} />
                {isVisible && (<BottomTab />)}
            </View>
        </TapGestureHandler>
    );
}
