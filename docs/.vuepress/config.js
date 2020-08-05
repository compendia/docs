module.exports = {
    title: 'Compendia Docs',
    description: 'Guides and FAQs for Compendia',
    themeConfig: {
        repo: 'compendia/docs',
        editLinks: true,
        docsDir: 'docs',
        // logo: '/assets/img/logo.png',
        sidebar:
        {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '',
                        'economy',
                        'wallet',
                        'validators',
                        'node',
                        'token-swap'
                    ]
                },
            ],
            '/api/': [
                {
                    title: 'REST API ',
                    collapsable: false,
                    children: [
                        '/api/',
                        '/api/blockchain',
                        '/api/blocks',
                        '/api/delegates',
                        '/api/locks',
                        '/api/node',
                        '/api/peers',
                        '/api/rounds',
                        '/api/transactions',
                        '/api/votes',
                        '/api/wallets'
                    ]
                }
            ]
        },
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'REST API', link: '/api/' },
            { text: 'Offical Website', link: 'https://compendia.org' },
            { text: 'Block Explorer', link: 'https://explorer.nos.dev' },
            { text: 'Web Wallet', link: 'https://wallet.nos.dev' }
        ]
    }
}