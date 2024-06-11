import {defineArrayMember, defineField, defineType} from 'sanity'

export const educationDataType = defineType({
  name: 'educationData',
  title: 'Education Data',
  type: 'document',
  fields: [
    defineField({
      name: 'institution',
      type: 'string',
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'exam',
      type: 'string',
    }),
    defineField({
      name: 'examNameShort',
      type: 'string',
    }),
    defineField({
      name: 'passingYear',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
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
