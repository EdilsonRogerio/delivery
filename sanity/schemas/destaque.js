export default {
    name: 'destaque',
    title: 'Menus em Destaque',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome do Destaque',
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
            name: 'restaurantes',
            title: 'Restaurantes',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'restaurantes'}]}],
        },
    ]
}