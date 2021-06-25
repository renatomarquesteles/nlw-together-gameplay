import React from 'react';
import { FlatList, View } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';

const guilds = [
  {
    id: '1',
    name: 'Lendários',
    icon: 'https://i.pinimg.com/originals/19/bf/af/19bfaf3e374f43bb7d8904e218e0f8ae.png',
    owner: true,
  },
  {
    id: '2',
    name: 'Gamers Club',
    icon: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/74/74305f8f0e69277e53706c6520286b88cecb1728_full.jpg',
    owner: false,
  },
];

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  );
}
