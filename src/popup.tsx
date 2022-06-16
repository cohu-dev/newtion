import ReactDOM from "react-dom";
import React from "react";
import { usePopup } from "./hooks/usePopup";

const Popup = () => {
  const { dbId, apiSec, handleInput, onSubmit, reset } = usePopup();
  return (
    <form onSubmit={onSubmit}>
      <h2>Newtion</h2>
      <label>Database ID</label>
      <input
        type="password"
        name="dbId"
        onChange={handleInput}
        value={dbId}
        required
      />
      <label>API Secret</label>
      <input
        type="password"
        value={apiSec}
        name="apiSec"
        onChange={handleInput}
        required
      />
      <h4>input is hidden for secure</h4>
      <p>
        <pre>Cmd/Ctrl + Shift + L</pre> to open setting popup
      </p>
      <p>
        <pre>Cmd/Ctrl + Shift + I</pre> to open new page
      </p>
      <button type="submit">Save</button>
      <button onClick={reset}>Reset</button>
      {/* check dbid & apisec are valid */}
    </form>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
