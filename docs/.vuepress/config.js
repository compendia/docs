module.exports = {
    title: 'Compendia Docs',
    description: 'Guides and FAQs for Compendia',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        sidebar: {
            '/': getGuideSidebar('Getting Started')
        },
        nav: [
            { text: 'Documentation', link: '/' },
            { text: 'Offical Website', link: 'https://compendia.org' },
            { text: 'Block Explorer', link: 'https://explorer.nos.dev' },
            { text: 'Web Wallet', link: 'https://wallet.nos.dev' }
        ]
    }
}

function getGuideSidebar(groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'wallet',
                'validator',
                'node'
            ]
        }
    ]
}

function getApiSidebar(groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'wallet',
                'validator',
                'node'
            ]
        }
    ]
}