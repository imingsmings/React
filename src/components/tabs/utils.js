const generateTabs = (item) => {
  const {
    key,
    props: { title },
  } = item;
  return {
    title: title,
    key: key,
    content: item,
  };
};

export { generateTabs };
