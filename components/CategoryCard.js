import { 
    View,
    Text, 
    TouchableOpacity,
    Image, 
} from 'react-native';
import React from 'react';

const CategoryCard = ({ imagem, nome }) => {
    return (
        <TouchableOpacity
            className="flex flex-col items-center justify-center w-32 h-32 m-2 bg-white rounded-lg shadow-md"
        >
            <Image
                source={imagem}
                className="mt-4 w-22 h-22 rounded-full"
            />
            <Text
                className="mt-1 pb-2 text-sm font-semibold text-gray-700"
            >
                {nome}
            </Text>
        </TouchableOpacity>
    )
};

export default CategoryCard;