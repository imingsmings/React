const regex = {
  title: /^\s*.+。/,
  A: /(?<=A\s*\.\s*).+(?=\s*B.+答案)/,
  B: /(?<=B\s*\.\s*).+(?=\s*C.+答案)/,
  C: /(?<=C\s*\.\s*).+(?=\s*D.+答案)/,
  D: /(?<=D\s*\.\s*).+(?=\s*答案)/,
  right: /(?<=答案\s*：\s*).+(?=\s*)/,
};

const match = (item, reg) => item.match(reg)[0].trim();

const formatNews = (strings) => {
  const list = [];
  strings.forEach((item, index) => {
    list.push({
      id: index + 1,
      title: match(item, regex.title),
      options: [
        { tag: "A", desc: match(item, regex.A) },
        { tag: "B", desc: match(item, regex.B) },
        { tag: "C", desc: match(item, regex.C) },
        { tag: "D", desc: match(item, regex.D) },
      ],
      rightOpt: match(item, regex.right),
    });
  });
  return list;
};

export default formatNews;
