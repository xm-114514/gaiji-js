```js
const
  [d, l, w] = [document, location, window],
  get=(e,a=!1,q=d)=>(!a?q.querySelector(e):q.querySelectorAll(e)),
  create=(e,i,q=d)=>(q==d?d.body:q).appendChild(Object.assign(d.createElement(e),{innerHTML:i}));

```
### 使い方 (use houhou)
```js
const singleElement = get('.example'); // 最初の`.example`クラスの要素を取得
const allElements = get('.example', true); // 全ての`.example`クラスの要素を取得

create('div', 'Hello, World!'); // <body>に`<div>Hello, World!</div>`を追加
const container = get('#container'); // コンテナ要素を取得
create('span', 'Text inside span', container); // `container`内に`<span>Text inside span</span>`を追加

```
