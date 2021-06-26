import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  Platform,
  Share,
  Text,
  View,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import BannerImg from '../../assets/banner.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Member, MemberProps } from '../../components/Member';
import { AppointmentProps } from '../../components/Appointment';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Params = {
  selectedGuild: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
};

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();
  const { selectedGuild } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${selectedGuild.guild.id}/widget.json`,
      );

      setWidget(response.data);
      setIsLoading(false);
    } catch {
      Alert.alert(
        'Verifique as configurações do servidor. O Widget deve estar habilitado.',
      );
    }
  }

  function handleShareInvitation() {
    const message =
      Platform.OS === 'ios'
        ? `Junte-se a ${selectedGuild.guild.name}`
        : widget.instant_invite;

    Share.share({ message, url: widget.instant_invite });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          widget.instant_invite && (
            <BorderlessButton>
              <Fontisto
                name="share"
                size={24}
                color={theme.colors.primary}
                onPress={handleShareInvitation}
              />
            </BorderlessButton>
          )
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{selectedGuild.guild.name}</Text>
          <Text style={styles.subtitle}>{selectedGuild.description}</Text>
        </View>
      </ImageBackground>

      {isLoading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />

          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      )}

      {widget.instant_invite && (
        <View style={styles.footer}>
          <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
        </View>
      )}
    </Background>
  );
}
