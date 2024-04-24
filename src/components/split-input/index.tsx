import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import styles from './style/split-input.style';
import { COLORS } from '../../theme';

type SplitInputProps = {
    value: string
    length: number;
    onComplete: (value: string) => void;
}

export const SplitInput = ({
    value,
    length,
    onComplete
}: SplitInputProps) => {
    const stringToArray = value.split('').slice(0, length);

    const [inputs, setInputs] = useState<string[]>(stringToArray);
    const inputRefs = Array.from({ length }, () => useRef<TextInput>(null));

    const handleChange = (value: string, index: number) => {
        const newInputs = [...inputs];
        newInputs[index] = value;

        setInputs(newInputs);

        onComplete(newInputs.join(''));

        if (value && index < length - 1) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleBackspacePress = (index: number) => {
        if (!inputs[index] && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };

    return (
        <View style={styles.otpContainer}>
            {inputRefs.map((ref, index) => (
                <TextInput
                    key={index}
                    ref={ref}
                    style={styles.input}
                    cursorColor={COLORS.base}
                    maxLength={1}
                    keyboardType="numeric"
                    value={inputs[index]}
                    onChangeText={(value) => handleChange(value, index)}
                    onKeyPress={({ nativeEvent: { key } }) => {
                        if (key === 'Backspace') {
                            handleBackspacePress(index);
                        }
                    }}
                />
            ))}
        </View>
    );
};