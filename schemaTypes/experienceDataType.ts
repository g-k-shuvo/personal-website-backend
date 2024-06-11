import {defineArrayMember, defineField, defineType} from 'sanity'

export const experienceDataType = defineType({
  name: 'experienceData',
  title: 'Experience Data',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      type: 'string',
    }),
    defineField({
      name: 'position',
      type: 'string',
    }),
    defineField({
      name: 'from',
      type: 'date',
    }),
    defineField({
      name: 'to',
      type: 'date',
    }),
    defineField({
      name: 'order',
      type: 'number',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          name: 'info',
        }),
      ],
    }),
  ],
})
