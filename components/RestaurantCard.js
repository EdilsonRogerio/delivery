import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity,
    LocationMarkerIcon, 
} from 'react-native';
import React from 'react';
import { urlFor } from '../sanity';

const RestaurantCard = ({
    id,
    imagem,
    nome,
    pontuacao,
    tempoEntrega,
    taxaEntrega,
    categoria,
    descricao,
    preco,
    longitude,
    latitude,
    endereco,
}) => {

    return (
        <TouchableOpacity
            className='bg-white rounded-lg shadow-md p-4 mr-4 mb-2 mt-2'
        >
            <Image
                source={{
                    uri: urlFor(imagem).url(),
                }}
                className='w-full h-40 rounded-lg mb-2'

            />
            <View className='flex-row justify-between items-center mt-2'>
                <View>
                    <Text className='font-bold text-lg'>{nome}</Text>
                    <Text className='text-sm text-gray-400'>{categoria}</Text>
                </View>
                <View className='flex-row items-center'>
                    <Text className='text-sm font-bold text-gray-400 ml-2 mb-5 mr-2'>{pontuacao}</Text>
                    <Image
                        source={require('../assets/images/star.png')}
                        className='w-4 h-4 mb-5'
                    />
                </View>
            </View>
            <View className='flex-row items-center space-x-1'>
                <Image
                    source={require('../assets/images/location.png')}
                    className='w-4 h-4 mt-2 mb-2'
                />
                <Text className='text-sm font-bold text-gray-400'>{endereco}</Text>
            </View>
            <View
                className='flex-row items-center'
            >
                <Image
                    source={require('../assets/images/clock.png')}
                    className='w-4 h-4 mt-2 mb-2'
                />
                <Text className='text-sm font-bold text-gray-400 ml-2'>40 min</Text>
            </View>
        </TouchableOpacity>
    )
};

export default RestaurantCard;