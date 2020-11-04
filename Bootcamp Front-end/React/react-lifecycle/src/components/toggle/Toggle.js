import React, { Component } from 'react';

export default class Toggle extends Component {
  handleShowUsers = (event) => {
    const { onToggle } = this.props;

    const isChecked = event.target.checked;

    onToggle(isChecked);
  };

  render() {
    const { enabled, description } = this.props;
    return (
      <div>
        <div className="switch">
          <label>
            {description}
            <input
              type="checkbox"
              checked={enabled}
              onChange={this.handleShowUsers}
            />
            <span className="lever"></span>
          </label>
        </div>
      </div>
    );
  }
}
