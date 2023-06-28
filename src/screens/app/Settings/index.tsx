import React, {useState} from 'react';
import {Image, Linking, Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../../navigation';
import {ScreenNames} from '../../../utils/routes';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import EditableBox from '../../../components/EditableBox';

type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Settings
>;

type Props = {
  navigation: SettingsScreenNavigationProp;
};

type ProfileInfo = {
  name: string;
  email: string;
};

const Settings = ({navigation}: Props) => {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState<ProfileInfo>({
    name: 'User',
    email: 'user@mail.com',
  });

  const onEditPress = () => {
    setEditing(true);
  };

  const onSave = () => {
    setEditing(false);
  };

  const onChange = (key: string, value: string) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onItempress = () => {
    Linking.openURL('https://google.com');
  };

  console.log(values);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Settings'} />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Pressable onPress={onEditPress}>
          <Image
            style={styles.edit}
            source={require('../../../assets/pencil.png')}
          />
        </Pressable>
      </View>
      <EditableBox
        label="Name"
        onChangeText={v => onChange('name', v)}
        value={values.name}
        editable={editing}
      />
      <EditableBox
        label="Email"
        onChangeText={v => onChange('email', v)}
        value={values.email}
        editable={editing}
      />
      {editing && (
        <Button onPress={onSave} title="Save" style={styles.button} />
      )}
      <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
      <ListItem style={styles.item} title="FAQ" onPress={onItempress} />
      <ListItem style={styles.item} title="Contact Us" onPress={onItempress} />
      <ListItem
        style={styles.item}
        title="Privacy and Terms"
        onPress={onItempress}
      />
    </SafeAreaView>
  );
};

export default React.memo(Settings);
