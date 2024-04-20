/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
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

      <button type="button" onclick={handleNumberIncrementClick}>
        Click me! {count}
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
