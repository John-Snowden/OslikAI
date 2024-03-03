import React from 'react';
import {View, Text} from 'react-native';
import {TelegramIcon} from '../../../../assets/svg';

import {Header} from '../../../screens';

import {styles} from './styles';

export const FeedbackScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Header title="Обратная связь" isBackButton />
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          По вопросам приобретения пиши в телеграм-бот
        </Text>
        <View style={styles.tgBox}>
          <TelegramIcon size={19} />
          <Text style={[styles.text, styles.margLeft]}>t.me/Oslik/Zakaz</Text>
        </View>
        <View style={styles.sep} />
        <Text style={styles.text}>
          Вопросы по работе Ослика отправляй в телеграм-бот
        </Text>
        <View style={styles.tgBox}>
          <TelegramIcon size={19} />
          <Text style={[styles.text, styles.margLeft]}>t.me/Oslik/Pomosh</Text>
        </View>
        <View style={styles.sep} />
        <Text style={styles.text}>
          Отзывы, критику, предложения по оптимизации отправляй в телеграм-бот
        </Text>
        <View style={styles.tgBox}>
          <TelegramIcon size={19} />
          <Text style={[styles.text, styles.margLeft]}>
            t.me/Oslik/Predlozheniya
          </Text>
        </View>
      </View>
    </View>
  );
};
