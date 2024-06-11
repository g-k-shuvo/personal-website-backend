import {defineField, defineType} from 'sanity'

export const skillDataType = defineType({
  name: 'skillData',
  title: 'Skill Data',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'order',
      type: 'number',
    }),
  ],
})
