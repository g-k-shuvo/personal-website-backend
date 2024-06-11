import {defineField, defineType} from 'sanity'

export const contactDataType = defineType({
  name: 'contactData',
  title: 'Contact Data',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'value',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      type: 'image',
    }),
  ],
})
