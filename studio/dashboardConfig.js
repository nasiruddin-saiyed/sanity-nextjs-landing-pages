export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fd72fe2260f05451d30addc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-epcqnghk',
                  apiId: '6ac057bb-0ee9-4776-ac24-0d6a3e4a2603'
                },
                {
                  buildHookId: '5fd72fe28fce217f4b889817',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qh6rx6on',
                  apiId: 'd5b56442-1fc4-471d-b8f0-39e4e0ce13cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nasiruddin-saiyed/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qh6rx6on.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
