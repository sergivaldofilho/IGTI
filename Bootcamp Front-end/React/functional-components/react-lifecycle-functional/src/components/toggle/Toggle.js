import React from 'react';

export default function Toggle({ onToggle, enabled, description }) {
  const handleShowUsers = (event) => {
    const isChecked = event.target.checked;

    onToggle(isChecked);
  };

  return (
    <div>
      <div className="switch">
        <label>
          {description}
          <input type="checkbox" checked={enabled} onChange={handleShowUsers} />
          <span className="lever"></span>
        </label>
      </div>
    </div>
  );
}
