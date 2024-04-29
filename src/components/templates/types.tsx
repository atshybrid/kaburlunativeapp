import { View } from 'react-native';
import { NewsItem } from "../../constants";

type TemplateProps = {
    data: NewsItem;
};

type BottomContainerProps = {
    viewRef: React.RefObject<View>,
    data: NewsItem;
};

type TopContainerProps = {
    data: NewsItem;
};

export { TemplateProps, BottomContainerProps, TopContainerProps };