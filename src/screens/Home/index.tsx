import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

const appointments = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Team Franca',
      icon: 'https://pbs.twimg.com/media/CAUD_bMU0AA0u1Y.jpg',
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description:
      'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '2',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description:
      'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
];

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppointmentDetails} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
