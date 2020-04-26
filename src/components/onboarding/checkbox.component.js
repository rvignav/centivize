import React from 'react';

export default function checkbox() {
  let toggleDoctorShow = () => {
    let div = document.getElementById('doctorupload')
    div.style.display = div.style.display == "block" ? "none" : "block"
  }
  return (
    <div className="lead" id="checkboxarea">
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
      <div className="form-check pt-1">
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
      <div className="form-check pt-1 pb-4">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          id="doctor"
          onChange={()=> toggleDoctorShow()}
        />
        <label className="form-check-label font-weight-bold" htmlFor="help">
          If you are a doctor, check this
        </label>
        <div className="form-group" id="doctorupload" style={{display: "none"}}>
          <label for="exampleInputFile">File input</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleInputFile"
            aria-describedby="fileHelp"
          />
          <small id="fileHelp" className="form-text text-muted">
            Please upload resume for review and approval.
          </small>
        </div>
      </div>
    </div>
  );
}
