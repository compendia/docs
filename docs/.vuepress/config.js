module.exports = {
    title: 'Compendia',
    description: 'Guides and FAQs for Compendia',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        sidebar: {
            '/guide/': getGuideSidebar('Getting Started')
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Validator', link: '/validator/' },
            { text: 'Node', link: '/node/' }
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
                'validator',
                'node'
            ]
        }
    ]
}