const app = document.getElementById('app');
const createElementFunc = (tagName, ...children) => {
  const tag = document.createElement(tagName);
  children.forEach((child) => {
    tag.appendChild(child);
  });
  return tag;
};
app.appendChild(
  createElementFunc(
    'div',
    document.createTextNode('하이'),
    document.createTextNode('헬로')
  )
);