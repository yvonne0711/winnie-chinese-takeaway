import React from "react";

// props as parameter
function NoPage(props) {
  return (
    <div>
      <h1>Undefined</h1>
      <p
        role="alert"
        className={`alert alert-${props.type}`}
        style={{ margin: "0 auto", marginTop: 18, backgroundColor: "red" }}
      >
        ERROR!
      </p>
    </div>
  );
}

export default NoPage;
