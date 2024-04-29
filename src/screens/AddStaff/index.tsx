import React, { useState } from 'react';
import { View, StatusBar, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../theme';
import { Button, Dropdown, Input } from '../../components';
import styles from './style/index.style';
import { inputValidation } from '../../helpers';

type Option = {
    label: string;
    value: string;
}

export function AddStaffScreen() {
    const { t } = useTranslation();

    const [date, setDate] = useState<Date | null>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const [name, setName] = useState('Travis');
    const [email, setEmail] = useState('travis.head@gmail.com');
    const [number, setNumber] = useState('7896321452');

    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const [isChildSwitchOn, setIsChildSwitchOn] = React.useState(false);
    const [selectReporterType, setSelectReporterType] = useState<string | undefined>(undefined);
    const [selectWorkArea, setSelectWorkArea] = useState<string | undefined>(undefined);
    const [selectParentReporter, setSelectParentReporter] = useState<string | undefined>(undefined);
    const [selectSubscriptionPlan, setSelectSubscriptionPlan] = useState<string | undefined>(undefined);

    const allFieldsIsCorrect = (fields: boolean[]) => fields.every((filed) => filed);

    const fieldsCorrect = allFieldsIsCorrect([
        inputValidation.name(name),
        inputValidation.email(email),
        inputValidation.phone(number),
        date != null,
        selectReporterType != undefined,
        selectWorkArea != undefined,
        selectParentReporter != undefined,
        selectSubscriptionPlan != undefined
    ]);

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

    const handleSelectReporterType = (item: Option) => {
        setSelectReporterType(item.value);
    };

    const handleSelectWorkArea = (item: Option) => {
        setSelectWorkArea(item.value);
    };

    const handleSelectParentReporter = (item: Option) => {
        setSelectParentReporter(item.value);
    };

    const handleSelectSubscriptionPlan = (item: Option) => {
        setSelectSubscriptionPlan(item.value);
    };

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const onToggleChildSwitch = () => setIsChildSwitchOn(!isChildSwitchOn);

    const onButtonPress = () => {

    }

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
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{`${t('name')} `}<Text style={styles.required}>*</Text></Text>
                    <Input
                        placeholder="I.e Shiva"
                        onChangeText={text => {
                            setName(text)
                        }}
                        value={name}
                        containerStyle={styles.textInput}
                        maxLength={20}
                        errorMessage={t('valid_name')}
                        valid={inputValidation.name(name)}
                    />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{`${t('email')} `}<Text style={styles.required}>*</Text></Text>
                    <Input
                        placeholder="I.e  shiva@gmail.com"
                        keyboardType='email-address'
                        onChangeText={text => {
                            setEmail(text)
                        }}
                        value={email}
                        containerStyle={styles.textInput}
                        errorMessage={t('valid_email')}
                        valid={inputValidation.email(email)}
                    />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{`${t('mobile_number')} `}<Text style={styles.required}>*</Text></Text>
                    <Input
                        placeholder="I.e 919999999999"
                        keyboardType='phone-pad'
                        maxLength={10}
                        onChangeText={text => {
                            setNumber(text)
                        }}
                        value={number}
                        containerStyle={styles.textInput}
                        errorMessage={t('valid_number')}
                        valid={inputValidation.phone(number)}
                    />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{`${t('hire_date')} `}<Text style={styles.required}>*</Text></Text>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.dateContainer}
                        onPress={() => handleDatePress()}>
                        {date && (<Text style={styles.dateTxt}>{moment(date).format('DD-MM-YY')}</Text>)}
                        <Icon name='calendar-month' size={16} color={COLORS.base} />
                    </TouchableOpacity>
                    <Text style={styles.dateInfoTxt}>{`${t('hire_instruction')}.`}</Text>
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{`${t('select_reporter_type')} `}<Text style={styles.required}>*</Text></Text>
                    <Dropdown label="Report" data={options} onSelect={handleSelectReporterType} />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{`${t('select_work_area')} `}<Text style={styles.required}>*</Text></Text>
                    <Dropdown label="I.e 503101" data={options} onSelect={handleSelectWorkArea} />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{`${t('select_parent_reporter')} `}<Text style={styles.required}>*</Text></Text>
                    <Dropdown label="I.e Bhiknoor" data={options} onSelect={handleSelectParentReporter} />
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{`${t('select_subscription_plan')} `}<Text style={styles.required}>*</Text></Text>
                    <Dropdown label="I.e 1000 Rs Pay" data={options} onSelect={handleSelectSubscriptionPlan} />
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.inputTitleTxt}>{t('article_auto_publish')}</Text>
                    <TouchableOpacity
                        style={[styles.switchOutter, { justifyContent: isSwitchOn ? 'flex-end' : 'flex-start' }]}
                        activeOpacity={1}
                        onPress={onToggleSwitch}>
                        <View style={[styles.switchInner, { backgroundColor: isSwitchOn ? COLORS.base : COLORS.lightblack }]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.inputTitleTxt}>{`${t('child')} ${t('article_auto_publish')}`}</Text>
                    <TouchableOpacity
                        style={[styles.switchOutter, { justifyContent: isChildSwitchOn ? 'flex-end' : 'flex-start' }]}
                        activeOpacity={1}
                        onPress={onToggleChildSwitch}>
                        <View style={[styles.switchInner, { backgroundColor: isChildSwitchOn ? COLORS.base : COLORS.lightblack }]} />
                    </TouchableOpacity>
                </View>
                <Button
                    buttonTitle={t('create_employee')}
                    onButtonPress={onButtonPress}
                    disabled={!fieldsCorrect}
                    buttonTextStyle={[styles.btnTxt, { color: !fieldsCorrect ? COLORS.grey : COLORS.base }]}
                    containerStyle={[styles.btnContainer, { borderColor: !fieldsCorrect ? COLORS.grey : COLORS.base }]}
                />
            </View>
        </ScrollView>
    );
}
