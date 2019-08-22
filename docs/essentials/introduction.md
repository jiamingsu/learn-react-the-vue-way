---
sidebarDepth: 2
---

# Introduction

## Declarative Rendering

### text interpolation

```html
<div id="app"></div>
```

```JSX
function App() {
  const message = 'Hello React!';
  return (
    <div>
      {message}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
```

### bind element attributes 

```JSX
function App2() {
  const message = 'You loaded this page on ' + new Date().toLocaleString();
  return (
    <div>
      <span title={message}>
        Hover your mouse over me for a few seconds to see my dynamically bound title!
      </span>
    </div>
  ); 
}

ReactDOM.render(<App2 />, document.getElementById('app-2'));
```

## Conditionals and Loops

### Conditionals

```JSX
function App3() {
  const seen = true;
  if(seen) {
    return <span>Now you see me</span>
  } else {
    return (null)
  }
}

ReactDOM.render(<App3 />, document.getElementById('app-3'));
```

### Loops

```JSX
function App4() {
  const todos = [
    { text: 'Learn JavaScript' },
    { text: 'Learn React' },
    { text: 'Build something awesome' }
  ];
  
  return (
    <ol>
      {
        todos.map(todo => {
          return <li key={todo.text}>{todo.text}</li>
        })
      }
    </ol>
  );
}

ReactDOM.render(<App4 />, document.getElementById('app-4'));
```

## Handling User Input

```JSX
import {useState} from 'react';

function App5() {
  const [message, setMessage] = useState('Hello React!')

  const reverseMessage = () => {
    setMessage(
      message.split('').reverse().join('')
    )
  }
  
  return (
    <div>
      <p>{message}</p>
      <button onClick={reverseMessage}>Reverse Message</button>
    </div>
  );
}

ReactDOM.render(<App5 />, document.getElementById('app-5'));
```

```JSX
import {useState} from 'react';

function App6() {
  const [message, setMessage] = useState('Hello React!')
  
  return (
    <div>
      <p>{message}</p>
      <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
    </div>
  )
}

ReactDOM.render(
  <App6 />,
  document.getElementById('app-6')
);
```

## Composing with Components

```JSX
function TodoItem(props) {
  return <li>{props.todo.text}</li>
}

function App7() {
  const groceryList = [
    { id: 0, text: 'Vegetables' },
    { id: 1, text: 'Cheese' },
    { id: 2, text: 'Whatever else humans are supposed to eat' }
  ]
  return (
    <ol>
      {
        groceryList.map(item => {
          return <TodoItem key={item.id} todo={item}/>
        })
      }
    </ol>
  )
}

ReactDOM.render(
  <App7 />,
  document.getElementById('app-7')
);
```