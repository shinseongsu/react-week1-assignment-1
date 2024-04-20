const createElementFunc = (tagName, ...children) => {
  const tag = document.createElement(tagName);
  children.forEach((child) => {
    tag.appendChild(child);
  });
  return tag;
};

document
  .getElementById('app')
  .appendChild(
    createElementFunc(
      'div',
      createElementFunc(
        'p',
        document.createTextNode('hi'),
        document.createTextNode('hello')
      ),
      createElementFunc('p', document.createTextNode('second hi'))
    )
  );