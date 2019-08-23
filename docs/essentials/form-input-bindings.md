---
sidebarDepth: 2
---

# Form Input Bindings
[react docs](https://reactjs.org/docs/forms.html)

## Basic Usage

### Text

### Multiline Text

### Checkbox

```JSX
import { useState } from 'react';
function SingleCheckbox() {
  const checkboxKey = "checkboxKey";
  const checkboxInitialValue = true;
  const [checkboxState, setCheckboxState] = useState({
    [checkboxKey]: checkboxInitialValue
  });

  return (
    <div>
      <input
        name={checkboxKey}
        type="checkbox"
        checked={checkboxState[checkboxKey]}
        onChange={e => setCheckboxState({ [checkboxKey]: e.target.checked })}
        />
      <label>{`${checkboxState[checkboxKey]}`}</label>
    </div>
  );
}

ReactDOM.render(<SingleCheckbox />, document.getElementById("root"));
```