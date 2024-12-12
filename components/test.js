import React, { useState } from "react";

const test = () => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div class="dropdown">
      <button onClick={setIsopen(!isOpen)} class="dropdown-toggle">
        Menu
      </button>
      <ul class="dropdown-menu">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  );
};

export default test;
