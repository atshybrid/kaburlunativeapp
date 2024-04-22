import React, { useRef, useState } from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    Modal,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style/dropdown.style';
import { COLORS } from '../../theme';

type Option = {
    label: string;
    value: string;
}

type DropdownProps = {
    label: string;
    data: Option[];
    onSelect: (item: Option) => void;
};

export const Dropdown = ({
    label,
    data,
    onSelect
}: DropdownProps) => {
    const DropdownButton = useRef<TouchableOpacity>(null);
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<Option | undefined>(undefined);
    const [dropdownTop, setDropdownTop] = useState<number>(0);

    const toggleDropdown = (): void => {
        visible ? setVisible(false) : openDropdown();
    };

    const openDropdown = (): void => {
        if (DropdownButton.current) {
            DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
                setDropdownTop(py + h);
            });
        }
        setVisible(true);
    };

    const onItemPress = (item: Option): void => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    };

    const renderItem = ({ item }: { item: Option }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => onItemPress(item)}
            activeOpacity={0.8}>
            <Text style={styles.labelTxt}>{item.label}</Text>
        </TouchableOpacity>
    );

    const renderDropdown = () => {
        return (
            <Modal visible={visible} transparent animationType="none">
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={() => setVisible(false)}
                    activeOpacity={0.8}
                >
                    <View style={[styles.dropdown, { top: dropdownTop }]}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    };

    return (
        <>
            <TouchableOpacity
                ref={DropdownButton}
                style={styles.button}
                onPress={toggleDropdown}
                activeOpacity={1}
            >
                {selected ?
                    <Text style={[styles.buttonText, { color: COLORS.lightblack }]}>{selected.label}</Text> :
                    <Text style={styles.buttonText}>{label}</Text>
                }
                <Icon name={visible ? 'expand-less' : 'expand-more'} size={24} color={COLORS.lightwhite} />
            </TouchableOpacity>
            {renderDropdown()}
        </>
    )
};
