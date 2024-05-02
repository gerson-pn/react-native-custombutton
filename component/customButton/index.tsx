/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable semi */
/* eslint-disable quotes */

import React from 'react';
import { Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Separator from '../separator';
import style from './style';

const CustomButton = () => (
    <SafeAreaView style={style.container}>
        <View>
            <Text style={style.title}>
                Os atributos title e onPress são obrigatórios para que
                o componente do tipo button.
            </Text>
            <Button
                title="Pressionar"
                onPress={() => Alert.alert('Botao Simples')}
            />
        </View>
        <Separator />
        <View>
            <Text style={style.title}>
                O ajuste de cor é diferente para algumas plataformas.
                No iOS a propriedade color mudar a cor do texto do botão, no Android ela muda a cor de fundo.
            </Text>
            <Button
                title="Pressionar"
                color="#f194ff"
                onPress={() => Alert.alert('Cor modificada')}
            />
        </View>
        <Separator />
        <View>
            <Text style={style.title}>
                É possível desabilitar um botão, através de uma propriedade.
            </Text>
            <Button
                title="Pressionar"
                disabled
                onPress={() => Alert.alert('Desabilitado')}
            />
        </View>
        <Separator />
        <View>
            <Text style={style.title}>
                O tamanho do botão, largura e altura, pode ser ajustado de acordo com o seu estilo.
                Assim é possível deixar o botão ajustável ao tamanho do texto, dentro dele.
            </Text>
            <View style={style.fixToText}>
                <Button
                    title="Botao esquerdo"
                    onPress={() => Alert.alert('Botao esquerdo pressionado')}
                />
                <Button
                    title="Botao direito"
                    onPress={() => Alert.alert('Botao direito pressionado')}
                />
            </View>
        </View>
    </SafeAreaView>
)

export default CustomButton