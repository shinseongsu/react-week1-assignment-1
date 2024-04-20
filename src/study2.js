const app = document.getElementById('app');
const createElementFunc = (tagName, ...children) => {
  const tag = document.createElement(tagName);
  const paragraph = document.createTextNode(children);
  return tag.appendChild(paragraph);
};
app.appendChild(createElementFunc('div', '안녕', '헬로'));