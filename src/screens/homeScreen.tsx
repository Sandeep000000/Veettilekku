import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../type';

const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable style={{ borderWidth: 1, borderRadius: 4, backgroundColor: '#000000', padding: 10 }}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={{ color: '#ffffff' }}>Go to Profile</Text>
            </Pressable>
        </View>
    )
}

export default HomeScreen