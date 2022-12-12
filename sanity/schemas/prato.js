export default {
    name: 'prato',
    title: 'Prato',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome do Prato',
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
            name: 'preco',
            title: 'Preço',
            type: 'number',
            validation: Rule => Rule.required()
                .min(1)
                .error('O preço deve ser um número maior que 0'),
        },
    ]
}