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
                  buildHookId: '5eecd506b9ab1101b6028047',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wywmdmpc',
                  apiId: '6ea1c6d4-9869-48eb-b787-8b2c95f50330'
                },
                {
                  buildHookId: '5eecd506965079020a70709b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hw52d82v',
                  apiId: '052739b6-50c8-4350-aeb1-eeba397fe1a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Lourencio/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hw52d82v.netlify.app', category: 'apps'}
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
