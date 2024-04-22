import React, { useState } from 'react';
import { View, StatusBar, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../theme';
import { Button, Dropdown, Input } from '../../components';
import styles from './style/index.style';
import moment from 'moment';

type Option = {
    label: string;
    value: string;
}

export function AddStaffScreen() {
    const { t } = useTranslation();

    const [date, setDate] = useState<Date | null>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const [isChildSwitchOn, setIsChildSwitchOn] = React.useState(false);
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

    const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
        { label: 'Option 4', value: '4' },
        { label: 'Option 5', value: '5' },
    ];

    const handleDatePress = () => {
        setShowDatePicker(true);
    }

    const onChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(!showDatePicker);
        setDate(currentDate);
    };

    const handleSelect = (item: Option) => {
        setSelectedOption(item.value);
    };

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const onToggleChildSwitch = () => setIsChildSwitchOn(!isChildSwitchOn);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date || new Date()}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
                <View style={styles.inputContainer}>
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{'Name '}<Text style={styles.required}>*</Text></Text>
                    <Input
                        placeholder="I.e Shiva"
                        onChangeText={text => {
                            setName(text)
                        }}
                        value={name}
                        containerStyle={styles.textInput}
                    />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{'Email'}</Text>
                    <Input
                        placeholder="I.e  shiva@gmail.com"
                        keyboardType='email-address'
                        onChangeText={text => {
                            setEmail(text)
                        }}
                        value={email}
                        containerStyle={styles.textInput}
                    />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{'Mobile Number '}<Text style={styles.required}>*</Text></Text>
                    <Input
                        placeholder="I.e 919999999999"
                        keyboardType='phone-pad'
                        maxLength={10}
                        onChangeText={text => {
                            setNumber(text)
                        }}
                        value={number}
                        containerStyle={styles.textInput}
                    />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{'Hire Date '}<Text style={styles.required}>*</Text></Text>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.dateContainer}
                        onPress={() => handleDatePress()}>
                        {date && (<Text style={styles.dateTxt}>{moment(date).format('DD-MM-YY')}</Text>)}
                        <Icon name='calendar-month' size={16} color={COLORS.base} />
                    </TouchableOpacity>
                    <Text style={styles.dateInfoTxt}>{'The first day of employment for this person.'}</Text>
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{'Select Reporter Type '}<Text style={styles.required}>*</Text></Text>
                    <Dropdown label="Report" data={options} onSelect={handleSelect} />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{'Select Work Area '}<Text style={styles.required}>*</Text></Text>
                    <Dropdown label="I.e 503101" data={options} onSelect={handleSelect} />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{'Select Parent Reporter '}<Text style={styles.required}>*</Text></Text>
                    <Dropdown label="I.e Bhiknoor" data={options} onSelect={handleSelect} />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{'Select Subscription Plan '}<Text style={styles.required}>*</Text></Text>
                    <Dropdown label="I.e 1000 Rs Pay" data={options} onSelect={handleSelect} />
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.inputTitleTxt}>{'Article auto publish'}</Text>
                    <TouchableOpacity
                        style={[styles.switchOutter, { justifyContent: isSwitchOn ? 'flex-end' : 'flex-start' }]}
                        activeOpacity={1}
                        onPress={onToggleSwitch}>
                        <View style={[styles.switchInner, { backgroundColor: isSwitchOn ? COLORS.base : COLORS.lightblack }]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.inputTitleTxt}>{'Child Article auto publish'}</Text>
                    <TouchableOpacity
                        style={[styles.switchOutter, { justifyContent: isChildSwitchOn ? 'flex-end' : 'flex-start' }]}
                        activeOpacity={1}
                        onPress={onToggleChildSwitch}>
                        <View style={[styles.switchInner, { backgroundColor: isChildSwitchOn ? COLORS.base : COLORS.lightblack }]} />
                    </TouchableOpacity>
                </View>
                <Button
                    buttonTitle="Create Employee"
                    onButtonPress={() => { }}
                    buttonTextStyle={styles.btnTxt}
                    containerStyle={styles.btnContainer}
                />
            </View>
        </ScrollView>
    );
}
