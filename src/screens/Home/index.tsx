import React, { useState } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-native-snap-carousel';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import styles from './style/home.style';
import { NewsItem, newsConst } from '../../constants';
import { BottomTab, Recommend, ShareFeed, TopTab } from '../../components';
import {
    FirstTemplate,
    SecondTemplate,
    ThirdTemplate,
    FourthTemplate,
    FifthTemplate
} from '../../components/templates';
import { COLORS } from '../../theme';

const { height, width } = Dimensions.get('screen')

export function HomeScreen() {
    const { t } = useTranslation();

    const [isVisible, setIsVisible] = useState<boolean>(true);

    const onTap = (event: any) => {
        if (event.nativeEvent.state === State.END) {
            if (isVisible) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
                setTimeout(() => {
                    setIsVisible(false);
                }, 2000);
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
                {isVisible && (<TopTab />)}
                <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
                <Carousel
                    style={{ flex: 1 }}
                    scrollEnabled={true}
                    data={newsConst}
                    renderItem={({ item }) => renderTemplate(item)}
                    sliderHeight={height - 48}
                    itemHeight={height - 48}
                    vertical={true}
                />
                {isVisible && (<BottomTab />)}
            </View>
        </TapGestureHandler>
    );
}
