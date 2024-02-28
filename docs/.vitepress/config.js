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
          { text: '开源相关', link: '/BasicIntroduction/open-source' },
        ]
      },
      {
        text: '项目经历',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: '视频剪辑', link: '/Projects/video-editor' },
          { text: '音乐播放器', link: '/Projects/music-player' },
          { text: '扫雷', link: '/Projects/minesweeper' },
          { text: '记忆连连看', link: '/Projects/memory' },
          { text: 'worthTyping', link: '/Projects/worth-typing' },
          { text: '摄影集', link: '/Projects/gallery' },
        ]
      },
      {
        text: '技术点感悟',
        items: [
          { text: '__proto__ & prototype', link: '/SkillShared/__proto__-prototype' },
          { text: 'ref & reactive', link: '/SkillShared/ref-reactive' },
          { text: 'Git 工作流', link: '/SkillShared/git' },
          { text: 'Map', link: '/SkillShared/map' },
          { text: '递归、回溯、剪枝', link: '/SkillShared/recursive' },
          { text: '防抖 & 节流', link: '/SkillShared/throttle-debounce' },
          { text: 'css 相关', link: '/SkillShared/css' },
          { text: '详解 npm 包', link: '/SkillShared/npm-package' },
          { text: 'SSR', link: '/SkillShared/ssr' },
          { text: 'Vite 相关配置', link: '/SkillShared/vite-config' },
          { text: 'Proxy', link: '/SkillShared/proxy' },
          { text: 'Ts-declare', link: '/SkillShared/ts-declare' },
          { text: 'VNode', link: '/SkillShared/vnode' },
          { text: 'Event-Loop', link: '/SkillShared/event-loop' },
        ]
      },
      {
        text: '技术学习记录',
        items: [
          { text: '已有技能概述', link: '/TechSummary/summary' },
          { text: '2022/10/01', link: '/TechSummary/2022-10-01' },
          { text: '2022/10/05', link: '/TechSummary/2022-10-05' },
          { text: '2022/10/12', link: '/TechSummary/2022-10-12' },
          { text: '2022/10/15', link: '/TechSummary/2022-10-15' },
          { text: '2022/11/01', link: '/TechSummary/2022-11-01' },
          { text: '2022/11/08', link: '/TechSummary/2022-11-08' },
        ]
      },
      {
        text: '阶段日记（非技术）',
        items: [
          { text: '介绍', link: '/DailySummary/introduction' },
          { text: '事件-毕业返乡风波', link: '/DailySummary/event-gohome' },
          { text: '事件-家教经历', link: '/DailySummary/event-jiajiao' },
          { text: '事件-研究生方向抉择', link: '/DailySummary/event-yjschoose' },
          { text: '22/10', link: '/DailySummary/22-10' },
          { text: '22/11', link: '/DailySummary/22-11' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present baoruirui'
    }
  }
}
