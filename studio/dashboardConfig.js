export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60eb74e835cf881ddcfae42d',
                  title: 'Sanity Studio',
                  name: 'ihatecoding-studio',
                  apiId: '6a707fe2-39f6-4fdf-a8ae-2bbb8d441652'
                },
                {
                  buildHookId: '60eb74e86794f60da3b7b393',
                  title: 'Blog Website',
                  name: 'ihatecoding',
                  apiId: '845ed78c-56a7-49a1-92c4-120906f193a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamestae/ihatecoding',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ihatecoding.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
