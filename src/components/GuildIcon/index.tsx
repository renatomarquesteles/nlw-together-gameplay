import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

type Props = {
  iconUrl?: string | null;
};

export function GuildIcon({ iconUrl }: Props) {
  return (
    <Image
      source={{
        uri:
          iconUrl ||
          'https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png',
      }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}
