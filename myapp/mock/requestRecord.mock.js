module.exports = {
  'GET /api/currentUser': {
    data: {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      tags: [
        { key: '0', label: '很有想法的' },
        { key: '1', label: '专注设计' },
        { key: '2', label: '辣~' },
        { key: '3', label: '大长腿' },
        { key: '4', label: '川妹子' },
        { key: '5', label: '海纳百川' },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      geographic: {
        province: { label: '浙江省', key: '330000' },
        city: { label: '杭州市', key: '330100' },
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888',
    },
  },
  'GET /api/rule': {
    data: [
      {
        key: 99,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: '艺术鉴赏',
        owner: '天一',
        desc: '该课程融人文性、审美性、创新性于一体，旨在通过多领域的艺术鉴赏教学，提高学生的人文素养、审美能力和创新能力。',
        callNo: 0.4,
        status: '张三',
        updatedAt: '2024-06-06T05:00:57.040Z',
        createdAt: '2024-06-06T05:00:57.040Z',
        progress: 81,
      },
      {
        key: 98,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: '《诗经》导读',
        owner: '天一',
        desc: '课程不仅展现我国古代文学、经学等的发展大势和特点，还帮助学生更好地理解中华优秀文化传统，增强民族自信心和自豪感。',
        callNo: 0.5,
        status: '李四',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 12,
      },
      {
        key: 97,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: '聆听心声：音乐审美心理分析',
        owner: '天一',
        desc: '该课程以乐曲解说为核心，结合大众的经典音乐普及方式，强化音乐审美的误区，并总结经典音乐听众少的原因及大多媒体对音乐审美方式的观点。',
        callNo: 0.6,
        status: '王五',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 81,
      },
      {
        key: 96,
        disabled: true,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: '新中国史',
        owner: '天一',
        desc: '介绍新中国史的重要性和学习意义，帮助学生建立对新中国历史的整体认知。',
        callNo: 0.2,
        status: '麻子',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 7,
      },
    ],
    total: 100,
    success: true,
    pageSize: 20,
    current: 1,
  },
  'POST /api/login/outLogin': { data: {}, success: true },
  'POST /api/login/account': {
    status: 'ok',
    type: 'account',
    currentAuthority: 'Admin',
  },
};
