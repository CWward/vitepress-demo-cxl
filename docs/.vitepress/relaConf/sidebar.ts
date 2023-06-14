import { DefaultTheme } from "vitepress"
export const sidebar:DefaultTheme.Sidebar = {
    // /column/linearAlgebra/表示对这个文件夹下的所有md文档做侧边栏配置
    '/column/linearAlgebra/': [
        //第一部分
        {
            text: '定义',
            items: [
                {
                    text: '1',
                    link: '/column/linearAlgebra/001'
                },
                {
                    text: '2',
                    link: '/column/linearAlgebra/002'
                }
            ]
        },
        //第二部分
        {
            text: '性质',
            items: [
                {
                    text: '3',
                    link: '/column/linearAlgebra/003'
                },
                {
                    text: '4',
                    link: '/column/linearAlgebra/004'
                }
            ]
        }
    ]
}