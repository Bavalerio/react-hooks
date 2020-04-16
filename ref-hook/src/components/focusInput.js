import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <inputRef ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
