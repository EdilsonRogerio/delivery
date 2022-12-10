import { 
    View,
    Text, 
    TouchableOpacity,
    Image, 
} from 'react-native';
import React from 'react';

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity
            className="flex flex-col items-center justify-center w-32 h-32 m-2 bg-white rounded-lg shadow-md"
        >
            <Image
                source={imgUrl}
                className="w-20 h-20 rounded-full"
            />
            <Text
                className="mt-2 pb-2 text-sm font-semibold text-gray-700"
            >{title}</Text>
        </TouchableOpacity>
    )
};

export default CategoryCard;