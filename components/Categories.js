import {
    View,
    Text
} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard
                title="PIZZAS"
                imgUrl={require('../assets/images/pizza.jpg')}
            />
            <CategoryCard
                title="HAMBURGUERES"
                imgUrl={require('../assets/images/Hamburguer.jpg')}
            />
            <CategoryCard 
                title="PASTÉIS"
                imgUrl={require('../assets/images/pastel.jpg')}
            />
            <CategoryCard
                title="BEBIDAS"
                imgUrl={require('../assets/images/bebida.jpg')}
            />
        </ScrollView>
    )
}

export default Categories;