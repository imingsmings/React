const list = [
  {
    title:
      "中共中央总书记、国家主席、中央军委主席习近平3月7日下午在出席十三届全国人大五次会议解放军和武警部队代表团全体会议时强调，" +
      "()是我们党建军治军的基本方式，是实现党在新时代的强军目标的必然要求。",
    options: [
      { tag: "A", desc: "依法治军" },
      { tag: "B", desc: "依法行政" },
      { tag: "C", desc: "从严治党" },
      { tag: "D", desc: "从严治军" },
    ],
    rightOpt: "A",
  },
  {
    title:
      "工信部消息，2021年我国制造业增加值规模达31.4万亿元，连续(   )位列世界第一。",
    options: [
      { tag: "A", desc: "12年" },
      { tag: "B", desc: "11年" },
      { tag: "C", desc: "10年" },
      { tag: "D", desc: "9年" },
    ],
    rightOpt: "A",
  },
  {
    title:
      "中国残联、教育部等五部门印发计划，提出到(    )年末，每个县、市、区至少挂牌1家残疾人职业培训基地。",
    options: [
      { tag: "A", desc: "2025" },
      { tag: "B", desc: "2024" },
      { tag: "C", desc: "2023" },
      { tag: "D", desc: "2022" },
    ],
    rightOpt: "A",
  },
  {
    title: "中国探月工程吴总设计师表示，我国计划2030年之前实施(   )采样返回。",
    options: [
      { tag: "A", desc: "火星" },
      { tag: "B", desc: "月球" },
      { tag: "C", desc: "金星" },
      { tag: "D", desc: "木星" },
    ],
    rightOpt: "A",
  },
  {
    title:
      "国家统计局发布数据，2月份，全国居民消费价格指数同比上涨0.9%，涨幅与上月相同;环比上涨0.6%，涨幅比上月扩大(   )百分点。",
    options: [
      { tag: "A", desc: "0.2个" },
      { tag: "B", desc: "0.3个" },
      { tag: "C", desc: "0.4个" },
      { tag: "D", desc: "0.5个" },
    ],
    rightOpt: "A",
  },
  {
    title:
      "国家发改委消息，2月中下旬以来，全国煤炭日产量持续保持在(   )吨以上，同比增长超过10%。",
    options: [
      { tag: "A", desc: "1200万" },
      { tag: "B", desc: "1000万" },
      { tag: "C", desc: "800万" },
      { tag: "D", desc: "600万" },
    ],
    rightOpt: "A",
  },
  {
    title:
      "3月9日，冬残奥会残奥越野滑雪男子短距离坐姿决赛在河北张家口国家冬季两项中心举行。中国选手(   )夺得金、银牌。",
    options: [
      { tag: "A", desc: "郑鹏、毛学武" },
      { tag: "B", desc: "赵鹏、毛忠武" },
      { tag: "C", desc: "郑鹏、毛忠武" },
      { tag: "D", desc: "郑鹏、刘子旭" },
    ],
    rightOpt: "C",
  },
  {
    title:
      "近日，国家药监局提醒消费者，化妆品包装上标注“小金盾”，仅说明该产品属于(    )，并不代表产品已获得监管部门审批或质量安全得到认证。",
    options: [
      { tag: "A", desc: "成人化妆品" },
      { tag: "B", desc: "老年人化妆品" },
      { tag: "C", desc: "儿童化妆品" },
      { tag: "D", desc: "药物化妆品" },
    ],
    rightOpt: "C",
  },
  {
    title:
      "中国人民银行3月8日表示，今年人民银行依法向中央财政上缴结存利润，总额超过(    )亿元。",
    options: [
      { tag: "A", desc: "1万" },
      { tag: "B", desc: "0.8万" },
      { tag: "C", desc: "0.5万" },
      { tag: "D", desc: "2万" },
    ],
    rightOpt: "A",
  },
  {
    title:
      "土地革命战争时期，以( )等老一辈革命家为代表的共产党人，创建了红二十六军和陕甘边革命根据地，并于1934年11月建立了陕甘边区苏维埃政府，后来形成了陕甘革命根据地。",
    options: [
      { tag: "A", desc: "刘志丹、谢子长、习仲勋" },
      { tag: "B", desc: "刘志丹、谢觉哉、习仲勋" },
      { tag: "C", desc: "刘伯承、谢子长、习仲勋" },
      { tag: "D", desc: "刘伯承、谢觉哉、习仲勋" },
    ],
    rightOpt: "A",
  },
];
list.forEach((item, index) => {
  item.id = index + 1;
});
export default list;
