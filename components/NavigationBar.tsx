import { Appbar } from 'react-native-paper';
import type { StackHeaderProps } from '@react-navigation/stack';

export default function NavigationBar({ navigation, back }: StackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}

      <Appbar.Content title="MD Nav Demo" />

      {!back ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('SecondScreen')}
        />
      ) : null}
    </Appbar.Header>
  );
}