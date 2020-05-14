export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL'
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          {title: 'Idea', value: 'idea'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Updating', value: 'updating'},
          {title: 'Live', value: 'live'}
        ]
      }
    }
  ]
}
