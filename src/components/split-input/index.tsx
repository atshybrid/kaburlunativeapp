import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import styles from './style/split-input.style';

type SplitInputProps = {
    length: number;
    onComplete: (value: string) => void;
}

export const SplitInput = ({
    length,
    onComplete
}: SplitInputProps) => {
    const [inputs, setInputs] = useState<string[]>(Array(length).fill(''));
    const inputRefs = Array.from({ length }, () => useRef<TextInput>(null));

    const handleChange = (value: string, index: number) => {
        const newInputs = [...inputs];
        newInputs[index] = value;

        setInputs(newInputs);

        if (value && index < length - 1) {
            inputRefs[index + 1].current?.focus();
        } else if (index === length - 1 && value) {
            // All inputs are filled, call the onComplete function
            onComplete(newInputs.join(''));
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