import {
  View,
  Text
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRow = ({ id, titulo, descricao, categoriaDestaque }) => {

  const [restaurantes, setRestaurantes] = useState([]);
  
  useEffect(() => {
    sanityClient.fetch(
      `
      *[_type == "destaque" && _id == "${id}"]{
        ...,
        restaurantes[]->{
          ...,
          prato[]->,
          categoria->{
            nome
          }
        },
      }[0]
      `, { id }
    )
    .then((data) => setRestaurantes(data?.restaurantes))
    .catch(console.error);
  }, [])

  console.log(restaurantes);

  return (
    <View>
      <View
        className='flex-row justify-between items-center mx-4 pt-4'
      >
        <Text className='font-bold text-lg'>{titulo}</Text>
        <ArrowRightIcon
          size={20}
          color='#f26634'
        />
      </View>
      <Text className=' text-sm text-gray-400 mx-4 pb-2'>{descricao}</Text>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className='flex-row mx-4 pt-4'
      >
        {
          restaurantes?.map((restaurante) => (
            <RestaurantCard
              key={restaurante._id}
              id={restaurante._id}
              nome={restaurante.nome}
              descricao={restaurante.descricao_curta}
              imagem={restaurante.imagem}
              categoria={restaurante.categoria?.nome}
              pontuacao={restaurante.pontuacao}
              endereco={restaurante.endereco}
              prato={restaurante.prato}
              longitude={restaurante.long}
              latitude={restaurante.lat}
            />
          ))
        }
        
      </ScrollView>
    </View>
  )
};

export default FeaturedRow;