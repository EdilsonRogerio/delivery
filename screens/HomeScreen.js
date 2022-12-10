import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5" >

            <View className='flex-row pb-3 items-center mx-4 space-x-2 px-2' >
                <Image
                    source={
                        require('../assets/images/food-delivery.png')
                    }
                    className='h-8 w-8 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Pedir Agora!</Text>
                    <Text className='font-bold text-xl'>
                        Localização Atual
                        <ChevronDownIcon size={20} color='#f26634' />
                    </Text>
                </View>
                <UserIcon className="mr-4" size={35} color='#f26634' />
            </View>
            <View className="flex-row pr-4 items-center space-x-2 pb-6 mx-4" >
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-full '>
                    <MagnifyingGlassIcon
                        size={25}
                        color='#f26634'
                        className="py-2"
                    />
                    <TextInput
                        keyboardType='web-search'
                        placeholder='O que você deseja comer?'
                    />
                </View>
                <AdjustmentsVerticalIcon
                    color='#f26634'
                    size={25}
                />
            </View>
            <ScrollView
                className='mx-4'
            >
                <Categories />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;