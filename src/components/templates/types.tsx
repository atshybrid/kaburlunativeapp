import { View } from 'react-native';
import { NewsItem } from "../../constants";

type TemplateProps = {
    data: NewsItem;
};

type BottomContainerProps = {
    viewRef: React.RefObject<View>,
    data: NewsItem;
    setShowLabel: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

type TopContainerProps = {
    data: NewsItem;
};

export { TemplateProps, BottomContainerProps, TopContainerProps };