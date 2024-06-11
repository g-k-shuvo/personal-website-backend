import {defineField, defineType} from 'sanity'

export const homeDataType = defineType({
  name: 'homeData',
  title: 'Home Data',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
