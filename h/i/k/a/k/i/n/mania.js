const
  [d, l, w] = [document, location, window],
  get=(e,a=!1,q=d)=>(!a?q.querySelector(e):q.querySelectorAll(e)),
  create=(e,i,q=d)=>(q==d?d.body:q).appendChild(Object.assign(d.createElement(e),{innerHTML:i}));
