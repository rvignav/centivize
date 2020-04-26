import React from 'react';

export default function checkbox() {
  return (
    <div className="lead">
      <div className="form-check pt-2">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          id="ask"
        />
        <label className="form-check-label" htmlFor="ask">
          Asking for help
        </label>
      </div>
      <div className="form-check pt-1 pb-4">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          id="help"
        />
        <label className="form-check-label" htmlFor="help">
          Helping others
        </label>
      </div>
    </div>
  );
}
