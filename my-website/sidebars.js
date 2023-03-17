// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: 'doc',
      id: 'about-me-now',
      label: '關於我 Now',
    },
    {
      type: 'category',
      label: '日常 Life',
      items: [
        {
          type: 'link',
          label: '文章 Blog',
          href: '/blog',
        },
        {
          type: 'doc',
          id: 'snapshot',
          label: '短想法 Snapshot',
        },
        {
          type: 'doc',
          id: 'collection',
          label: '收集 Collection',
        },
      ],
    },
    {
      type: 'category',
      label: '醫學 Medicine',
      items: [
        {
          type: 'category',
          label: '心臟科 Cardiology',
          items: [
            'cardiology/disease-1',
            'cardiology/disease-2',
            // 更多心臟科疾病
          ],
        },
        {
          type: 'category',
          label: '手術 Operation',
          items: [
            'operation/disease-1',
            'operation/disease-2',
            // 更多手術疾病
          ],
        },
        {
          type: 'category',
          label: '重症醫學 Intensive care',
          items: [
            'intensive-care/disease-1',
            'intensive-care/disease-2',
            // 更多重症醫學疾病
          ],
        },
        {
          type: 'category',
          label: '心臟超音波 Echocardiogram',
          items: [
            'echocardiogram/disease-1',
            'echocardiogram/disease-2',
            // 更多心臟超音波疾病
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '小工具 Tool',
      items: [
        {
          type: 'doc',
          id: 'common-drugs',
          label: '常用藥物',
        },
        {
          type: 'doc',
          id: 'common-links',
          label: '常用連結',
        },
        {
          type: 'doc',
          id: 'drip-calculator',
          label: '點滴滴數計算器',
        },
      ],
    },
  ],
};

module.exports = sidebars;
