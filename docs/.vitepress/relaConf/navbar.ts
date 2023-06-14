import { DefaultTheme } from "vitepress"
export const nav: DefaultTheme.NavItem[] = [
    {
        text: '首页',
        link: '/' //表示docs/index.md
    },
    {
        text: '个人成长',
        items: [
            {
                text: '游记',
                link: '/column/Travel/' //表示column/Travel/index.md
            },
            {
                text: '思考',
                link: '/column/Growing/' //表示column/Travel/index.md
            }
        ]
    },
    {
        text: '考研',
        items: [
            {
                text: '线性代数',
                link: '/column/linearAlgebra/'
            }
        ]
    },
    {
        text: '关于我',
        items: [
            {
                text: 'github',
                link: 'https://github.com'
            }
        ]
    }
]

