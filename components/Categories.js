import {
    View,
    Text
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryCard from './CategoryCard';
import sanityClient from '../sanity';
import { urlFor } from '../sanity';

const Categories = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        sanityClient.fetch(
            `
            *[_type == "categoria"]
            `
        )
        .then((data) => setCategorias(data))
        .catch(console.error);
    }, [])

    console.log(categorias);

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingTop: 10,
                paddingHorizontal: 15,
            }}
        >
            {
                categorias.map((categoria) => (
                    <CategoryCard
                        key={categoria._id}
                        id={categoria._id}
                        nome={categoria.nome}
                        imagem={{
                            uri: urlFor(categoria.imagem).url(),
                        }}
                    />
                ))
            }
        </ScrollView>
    )
}

export default Categories;