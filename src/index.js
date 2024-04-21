/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
const createElement = (tagName, props, ...children) => {
  const tag = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    tag[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      tag.appendChild(child);
      return;
    }
    tag.appendChild(document.createTextNode(child));
  });
  return tag;
};

function render({ count }) {
  function handleNumberIncrementClick() {
    render({ count: count + 1 });
  }

  function handleNumberRenderClick(number) {
    render({ count: number });
  }
  const element = (
    <div>
      <p className="hi" id="tag">
        Hi
      </p>

      <p className="count">({count})</p>

      <button type="button" onclick={handleNumberIncrementClick}>
        Click me!
      </button>
      <div>
        {[1, 2, 3].map((i) => (
          <button type="button" onclick={() => handleNumberRenderClick(i)}>
            {i}
          </button>
        ))}
      </div>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render({ count: 0 });
