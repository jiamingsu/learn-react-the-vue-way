# Dynamic & Async Components

```JSX
function Home(props) {
  return (
    <div>
      <p>Home Component</p>
      {props.children}
      <span>{props.testProps}</span>
    </div>
  )
}

function Posts(props) {
  return (
    <div>
      <p>Posts Component</p>
      {props.children}
      <span>{props.testProps}</span>
    </div>
  )
}

function Archive(props) {
  return (
    <div>
      <p>Archive Component</p>
      {props.children}
      <span>{props.testProps}</span>
    </div>
  )
}

function Component(props) {
  const components = {
    Home,
    Posts,
    Archive,
  }
  const {is, children, ...rest} = props;
  const Selected = components[is]
  return <Selected {...rest}>{children}</Selected>;
}

function App() {
  const [currentTabComponent, setCurrentTabComponent] = React.useState('Home');
  return (
    <div>
      <button onClick={() => setCurrentTabComponent('Home')}>Home</button>
      <button onClick={() =>setCurrentTabComponent('Posts')}>Posts</button>
      <button onClick={() =>setCurrentTabComponent('Archive')}>Archive</button>
      <Component is={currentTabComponent} testProps={` at ${currentTabComponent}`}>
        <span>test slot</span>
      </Component>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```