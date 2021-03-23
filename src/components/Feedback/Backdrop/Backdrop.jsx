import React from "react";

function Backdrop({ children, backdrop, onClick, justify, align }) {
  return (
    <>
      {backdrop && (
        <div
          className={`backdrop 
          // eslint-disable-next-line
          ${
            // eslint-disable-next-line
            justify + "__justify" + "__backdrop"
          }
          ${
            // eslint-disable-next-line
            align + "__align" + "__backdrop"
          }
          `}
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Backdrop;
