const strings = [
  "3月30日，由工信部和教育部联合举办的2022年全国中小企业( )活动启动。　　A. 网上百日招聘高校毕业生    　　B. 网上30日招聘高校毕业生　　C. 全国百日招聘高校毕业生　　D. 网上百日招聘无业人员　　答案：A",
  "3月30日，我国在酒泉卫星发射中心用长征十一号运载火箭，成功将( )卫星发射升空。　　A. 天平二号 B. 天宫二号 C. 水星二号 D. 祝融二号   答案：A ",
  "国家网信办等3部门印发通知，规定网络直播平台、网络直播服务机构不得策划、帮助网络直播发布者( )。　　A.过度打赏 B.做假账 C. 蹭流量 D. 逃避税　　答案：D",
  "中央人才工作会议2021年9月27日至28日在北京召开。中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话，强调要坚持党管人才，坚持面向世界科技前沿、面向经济主战场、面向国家重大需求、面向人民生命健康，深入实施( )战略，全方位培养、引进、用好人才，加快建设世界重要人才中心和创新高地，为2035年基本实现社会主义现代化提供人才支撑，为2050年全面建成社会主义现代化强国打好人才基础。　　A. 创新人才机制　　B. 新时代人才培养　　C. 新时代人才强国　　D. 科技人才培养　　答案：C",
  "人力资源社会保障部、最高人民法院日前联合印发决定，追授湖北省荆州市沙市区人民法院一级法官杨军同志( )称号。　　A. “全国优秀法官”　　B. “全国模范法官”　　C. “全国法官楷模”　　D. “全国法官标兵”　　答案：B",
  "第十三届中国国际航空航天博览会2021年9月28日在( )正式开幕。AG600飞机完成飞行投水功能演示首秀，翼龙-2无人机划过天际，新一代载人飞船试验船返回舱实力出镜。　　A.广州　　B. 深圳　　C. 珠海　　D. 上海　　答案：C",
  "2021年9月30日是国家设立的( )，习近平等党和国家领导人将同各界代表一起，在天安门广场向人民英雄敬献花篮。　　A. 英雄纪念日　　B. 烈士悼念日　　C. 烈士纪念日　　D. 英雄悼念日　　答案：C",
  "国务院办公厅日前印发( )，其中提到，到2025年，医疗保障制度更加成熟定型，基本完成待遇保障、筹资运行、医保支付、基金监管等重要机制和医药服务供给等关键领域的改革任务;持续扩大国家组织高值医用耗材集中带量采购范围。　　A. 《“十四五”社会医疗保障规划》　　B. 《“十四五”国家医疗保障规划》　　C. 《“十四五”全民医疗保障规划》　　D. 《“十四五”全民医疗改革规划》　　答案：C",
  "中宣部2021年9月29日向全社会宣传发布刘永坦同志的先进事迹，授予他( )称号。　　A. “时代楷模”　　B. “优秀共产党员”　　C. “时代英雄”　　D. “社会楷模”　　答案：A",
  "纪念辛亥革命( )大会将于2021年10月9日上午10时在北京人民大会堂隆重举行。中共中央总书记、国家主席、中央军委主席习近平将出席大会并发表重要讲话，多家媒体平台同步转播。　　A. 110周年　　B. 100周年　　C. 120周年　　D. 115周年　　答案：A",
  "经中共中央批准，中共中央党史和文献研究院编辑的( )中册，已由中央文献出版社出版，即日起在全国发行。　　A. 《十八大以来重要文献选编》　　B. 《十九大以来重要文献选编》　　C. 《十九大以来经典文献选编》　　D. 《十九大以来党的重要文献选编》　　答案：B",
  "国家发改委等十部委印发通知，明确住宅用地在特色小镇建设中占比不超过( )。　　A. 20%　　B. 25%　　C. 30%　　D. 40%　　答案：C",
  "2021年10月8日，中国国务院新闻办公室在北京发布( )白皮书，这是中国政府发布的第一部生物多样性保护白皮书。　　A. 《中国的生态多样性保护》　　B. 《中国的生物多样性保护》　　C. 《中国的生物可持续保护》　　D. 《中国的生物原生态保护》　　答案：B",
  "新时代推动高质量发展、全面建设社会主义现代化国家，迫切需要进一步加强标准化工作。为统筹推进标准化发展，中共中央、国务院印发了( )，并发出通知，要求各地区各部门结合实际认真贯彻落实。　　A. 《国家标准化发展纲要》　　B. 《国家标准化发展纲要》　　C. 《国家标准化发展纲要》　　D. 《国家标准化发展纲要》　　答案：C",
  "商务部等14部门于2021年10月9日联合印发( )，提出7项22条工作举措，旨在巩固脱贫攻坚成果同乡村振兴有效衔接，促进家政服务业高质量发展。通过做好动员引导、加强技能培训、健全信用体系、促进数字化赋能等方式，让农村劳动力“出得来、留得住、干得好”。　　A. 《家政兴农行动计划(2021-2030年)》　　B. 《数字兴农行动计划(2021-2025年)》　　C. 《家政兴农行动计划(2021-2025年)》  　　D. 《家政助农行动计划(2021-2025年)》　　答案：C",
];

export default strings;
