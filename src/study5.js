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

document.body.appendChild(createElement('div', { id: 'app' }, 'Hello, world!'));
