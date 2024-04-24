import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style/button.style';
import { COLORS } from '../../theme';

type ButtonProps = {
    onButtonPress: () => any;
    buttonTitle: string;
    containerStyle?: object;
    buttonTextStyle?: object;
    loading?: boolean;
    name?: string;
    message?: object;
    disabled?: boolean;
};

export const Button = ({
    onButtonPress,
    buttonTitle,
    containerStyle,
    buttonTextStyle,
    disabled
}: ButtonProps) => {
    return (
        <>
            <TouchableOpacity
                style={[styles.buttonViewStyle, { backgroundColor: disabled ? COLORS.grey : COLORS.base }, containerStyle]}
                onPress={onButtonPress}
                activeOpacity={0.8}
                disabled={disabled}>
                <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
                    {buttonTitle}
                </Text>
            </TouchableOpacity>
        </>
    );
};
