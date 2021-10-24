import React, { useState } from 'react';

import { Keyboard, TextInput, View } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false)

    async function handleMessageSubmit() {
      const messageFormated = message.trim();

      if(messageFormated.length > 0){
        await api.post('/messages', { message: messageFormated });

        setMessage('');
        Keyboard.dismiss();
        setSendingMessage(false);
      }else{
        alert('escreva a mensagem para enviar');
      }
    }
  return (
    <View style={styles.container}>
        <TextInput
            keyboardAppearance="dark"
            placeholder="Qual sua expectativa para o evento?"
            placeholderTextColor= {COLORS.GRAY_PRIMARY}
            multiline
            maxLength={140}
            onChangeText={text => setMessage(text)}
            value={message}
            style={styles.input}
            editable={!sendingMessage}
        />

        <Button
            title="ENVIAR MENSAGEM"
            backgroundColor={COLORS.PINK}
            color={COLORS.WHITE}
            onPress={handleMessageSubmit}
            isLoading={sendingMessage}
        />

    </View>
  );
}