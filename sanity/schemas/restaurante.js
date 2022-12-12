export default {
    name: 'restaurantes',
    title: 'Restaurantes',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome do Restaurante',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'descricao_curta',
            title: 'Descrição Curta',
            type: 'string',
            validation: Rule => Rule.required(200),
        },
        {
            name: 'imagem',
            title: 'Imagem',
            type: 'image',
        },
        {
            name: 'lat',
            title: 'Latitude',
            type: 'number',
        },
        {
            name: 'long',
            title: 'Longitude',
            type: 'number',
        },
        {
            name: 'endereco',
            title: 'Endereço',
            type: 'string',
        },
        {
            name: 'telefone',
            title: 'Telefone',
            type: 'string',
        },
        {
            name: 'pontuacao',
            title: 'Pontuação',
            type: 'number',
            validation: Rule => Rule.required()
                .min(1)
                .max(5)
                .error('A pontuação deve ser um número entre 1 e 5'),
        },
        {
            name: 'categoria',
            title: 'Categoria',
            validation: Rule => Rule.required(),
            type: 'reference', 
            to: [{type: 'categoria'}],
        },
        {
            name: 'prato',
            title: 'Pratos',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'prato'}]}],
        }
    ]
}
