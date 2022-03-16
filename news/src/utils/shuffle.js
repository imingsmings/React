const shuffleArray = (list) => {
  if (list === undefined) {
    throw new Error("function shuffleArray must need a parameter");
  }
  if (!(list instanceof Array)) {
    throw new Error("function shuffleArray takes a array as parameter");
  }
  let length = list === null ? 0 : list.length;
  if (length === 0) {
    return [];
  }

  let lastIndex = length - 1;

  while (length !== 0) {
    const randIndex = parseInt(Math.random() * length);
    const value = list[randIndex];
    list[randIndex] = list[lastIndex];
    list[lastIndex] = value;

    length--;
    lastIndex--;
  }

  return list;
};

export default shuffleArray;
