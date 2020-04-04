export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8899f4aaaf82c983eb3e57',
                  title: 'Sanity Studio',
                  name: 'blog-studio-26uqm76x',
                  apiId: '8670b55c-b4c5-4478-9a4a-ca3bca303c35'
                },
                {
                  buildHookId: '5e8899f4aaaf828e5beb3fcd',
                  title: 'Blog Website',
                  name: 'blog-web-rkciiimp',
                  apiId: '9ebc4796-7fc5-41e7-8662-a67ce377197f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jlabs/blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-web-rkciiimp.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
