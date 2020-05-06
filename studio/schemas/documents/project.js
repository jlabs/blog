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
