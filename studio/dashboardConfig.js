export default {
  widgets: [
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
                  buildHookId: '606aed3f5f1acaf3d21b9935',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-bmsg22f1',
                  apiId: '75dd0034-534f-4d48-a36d-4eef47e8693e'
                },
                {
                  buildHookId: '606aed4051f2749b751cfed8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-42btm819',
                  apiId: '9289e053-904e-47aa-a74c-a5be70b5c069'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Boxplan/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-42btm819.netlify.app', category: 'apps'}
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
