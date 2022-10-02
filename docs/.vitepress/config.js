export default {
  title: 'BRR',
  description: 'Just playing around.',
  themeConfig: {
    sidebar: [
      {
        text: '基本介绍',
        items: [
          { text: '为什么选择前端？', link: '/BasicIntroduction/choice-reason' },
          { text: '成长历程', link: '/BasicIntroduction/growth-experience' },
          { text: '犹豫与抉择', link: '/BasicIntroduction/hesitate-decide' },
          { text: '未来展望', link: '/BasicIntroduction/future-outlook' },
        ]
      },
      {
        text: '项目经历',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: '视频剪辑', link: '/Projects/video-editor' },
          { text: '音乐播放器', link: '/Projects/music-player' },
          { text: '扫雷', link: '/Projects/minesweeper' },
        ]
      },
      {
        text: '技术点 Get',
        items: [
          { text: '已有技能概述', link: '/TechSummary/summary' },
          { text: '2022/10/01', link: '/TechSummary/2022-10-01' },
          { text: '2022/10/02', link: '/TechSummary/2022-10-02' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present baoruirui'
    }
  }
}
