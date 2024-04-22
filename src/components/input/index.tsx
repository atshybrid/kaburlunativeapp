import React from 'react';
import { Text, TextInput, KeyboardTypeOptions } from 'react-native';
import styles from './style/input.style';
import { COLORS } from '../../theme';

type InputProps = {
    placeholder: string;
    onChangeText: (text: string) => any;
    value: string;
    errorMessage?: string;
    containerStyle?: object;
    valid?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    maxLength?: number;
    keyboardType?: KeyboardTypeOptions;
};

export const Input = ({
    placeholder,
    containerStyle,
    onChangeText,
    value,
    errorMessage,
    valid,
    multiline,
    numberOfLines,
    maxLength,
    keyboardType
}: InputProps) => {
    const _renderStringMessage = (message: string) => {
        if (message != undefined) {
            return <Text style={styles.error}>{message}</Text>;
        }
    };

    return (
        <>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.lightwhite}
                value={value}
                multiline={multiline}
                numberOfLines={numberOfLines}
                maxLength={maxLength}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                cursorColor={COLORS.base}
                textAlignVertical="top"
                textContentType={'none'}
                autoCorrect={false}
                autoCapitalize={'none'}
                style={[styles.textInputStyle, containerStyle]}
            />
            {(typeof errorMessage == 'string' &&
                !valid &&
                value != '' &&
                _renderStringMessage(errorMessage))}
        </>
    );
};
