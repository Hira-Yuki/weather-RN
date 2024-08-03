import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { noPermissionStyles } from '../styles/styleSheet';

export default function NoPermission() {
  return (
    <View style={noPermissionStyles.container}>
      <FontAwesome name="exclamation-triangle" size={48} color="red" />
      <Text style={noPermissionStyles.title}>권한 필요</Text>
      <Text style={noPermissionStyles.message}>
        위치 정보 권한을 허용해 주세요.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
