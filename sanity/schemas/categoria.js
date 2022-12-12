export default {
    name: 'categoria',
    title: 'Menu de Categorias',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome da Categoria',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'imagem',
            title: 'Imagem',
            type: 'image',
        },
    ]
}