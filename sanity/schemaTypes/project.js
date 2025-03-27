import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Project Name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 }
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'images',
            title: 'Project Images',
            type: 'array',
            of: [{ type: 'image' }]
        }),
        defineField({
            name: 'layout',
            title: 'Layout',
            type: 'string'
        }),
        defineField({
            name: 'size',
            title: 'Size',
            type: 'string'
        }),
        defineField({
            name: 'type',
            title: 'Property Type',
            type: 'string'
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string'
        }),
        defineField({
            name: 'cost',
            title: 'Cost',
            type: 'string'
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Lower numbers appear first'
        })
    ],
    orderings: [
        {
            title: 'Custom Order',
            name: 'customOrder',
            by: [{ field: 'order', direction: 'asc' }]
        }
    ]
});
