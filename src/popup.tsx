import ReactDOM from "react-dom";
import React from "react";
import { usePopup } from "./hooks/usePopup";

const Popup = () => {
  const { dbId, apiSec, handleInput, onSubmit, reset } = usePopup();
  return (
    <form onSubmit={onSubmit}>
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
      <p>input is hidden for secure</p>
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
