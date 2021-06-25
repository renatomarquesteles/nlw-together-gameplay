import React, { useState } from 'react';
import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { GuildProps } from '../../components/Guild';
import { theme } from '../../global/styles/theme';
import { Guilds } from '../Guilds';
import { styles } from './styles';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [showGuildsModal, setShowGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleShowGuilds() {
    setShowGuildsModal(true);
  }

  function handleCloseGuilds() {
    setShowGuildsModal(false);
  }

  function handleGuildSelect(selectedGuild: GuildProps) {
    setGuild(selectedGuild);
    setShowGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar Partida" />

          <Text style={[styles.label, { marginLeft: 24, marginTop: 36 }]}>
            Categoria
          </Text>

          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
            hasCheckBox
          />

          <View style={styles.form}>
            <RectButton onPress={handleShowGuilds}>
              <View style={styles.select}>
                {guild.icon ? (
                  <GuildIcon iconUrl={guild.icon} />
                ) : (
                  <View style={styles.image} />
                )}

                <View style={styles.selectBody}>
                  <Text style={[styles.label, { marginBottom: 0 }]}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e minuto</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.charactersLimit}>Máx. 100 caracteres</Text>
            </View>
            <TextArea
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              multiline
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>
      </Background>

      <ModalView visible={showGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
