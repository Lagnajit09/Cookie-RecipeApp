export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{type: 'text'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cookingTime',
      title: 'Cooking Time',
      type: 'number', // Or use 'string' if you prefer a formatted time
      description: 'The time it takes to cook the recipe, in minutes.',
    },
  ],
}
