---
sidebarDepth: 2
---

# Template Syntax

## Interpolations

### Text

### Raw HTML

```JSX
function RawHtmlExample() {
  const rawHtml = `<span style="color: red">This should be red.</span>`;
  const wrapper = { __html: rawHtml };
  return (
    <div>
      <p>Use mustach: {rawHtml} </p>
      <p>
        Use dangerouslySetInnerHTML: <span dangerouslySetInnerHTML={wrapper} />
      </p>
    </div>
  );
}

ReactDOM.render(<RawHtmlExample />, document.getElementById("root"));
```