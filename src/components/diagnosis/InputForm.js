import React from "react";
import $ from "jquery";

import useForm from "./useForm";
import diagnose from "./diagnosis";

export default function InputForm() {
  React.useEffect(() => {
    // Detect when form-control inputs are not empty
    $(".cool-b4-form .form-control").on("input", function () {
      if ($(this).val()) {
        $(this).addClass("hasValue");
      } else {
        $(this).removeClass("hasValue");
      }
    });
  });

  //   use form
  const [values, handleChange] = useForm({
    name: "",
    gender: "",
    birthYear: "",
    symptoms: "",
    firstAppear: "",
    duration: "",
    dailyActivities: "",
    medicalConditions: "",
    pastTreatments: "",
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const s = values.symptoms.split(", ");
    for (let i = 0; i < s.length; i++) {
      s[i] = s[i].charAt(0).toUpperCase() + s[i].substring(1);
    }
    console.log(s, values.gender, values.birthYear);
    diagnose(s, values.gender, values.birthYear).then((response) => {
      const issues = response[0];
      const treatments = response[1];
      console.log(treatments);
      let str = "";
      for (let i = 0; i < treatments.length; i++) {
        str += `${issues[i]}: ${treatments[i]} \n`;
      }
      console.log(`str: ${str}`);
      $("#results").text(str);
    });
  };
  return (
    <div className="contact-container container pb-4">
      <div className="contact-wrap card card-body border-0 shadow mt-0">
        <form
          autoComplete="off"
          className="cool-b4-form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="col">
            <h1 className={"section-heading text-center"}>
              <span className="underline--magical">Diagnosis</span>
            </h1>
          </div>

          {/* contact form */}
          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="name">Name</label>
                <span className="input-highlight"></span>
              </div>
              <div className="form-group">
                <input
                  type="gender"
                  className="form-control"
                  name="gender"
                  id="gender"
                  value={values.gender}
                  onChange={(e) => handleChange(e)}
                  required={true}
                />
                <label htmlFor="gender">Gender</label>
                <span className="input-highlight"></span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="birthYear"
                  id="birthYear"
                  value={values.birthYear}
                  onChange={(e) => handleChange(e)}
                  required={true}
                />
                <label htmlFor="birthYear">Year of Birth</label>
                <span className="input-highlight"></span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="symptoms"
                  id="symptoms"
                  className="form-control"
                  value={values.symptoms}
                  onChange={(e) => handleChange(e)}
                  required={true}
                ></textarea>
                <label htmlFor="symptoms">
                  Write your symptoms, separated by commas...
                </label>
                <span className="input-highlight"></span>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4">
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  name="duration"
                  id="duration"
                  value={values.duration}
                  onChange={(e) => handleChange(e)}
                  required={true}
                />
                <label htmlFor="duration">Symptoms duration</label>
                <span className="input-highlight"></span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  name="dailyActivities"
                  id="dailyActivities"
                  value={values.dailyActivities}
                  onChange={(e) => handleChange(e)}
                  required={true}
                />
                <label htmlFor="dailyActivities">
                  Symptoms' effects on daily activities
                </label>
                <span className="input-highlight"></span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  name="medicalConditions"
                  id="medicalConditions"
                  value={values.medicalConditions}
                  onChange={(e) => handleChange(e)}
                  required={true}
                />
                <label htmlFor="medicalConditions">
                  Any diagnosed medical conditions?
                </label>
                <span className="input-highlight"></span>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-12">
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  name="pastTreatments"
                  id="pastTreatments"
                  value={values.pastTreatments}
                  onChange={(e) => handleChange(e)}
                  required={true}
                />
                <label htmlFor="pastTreatments">
                  Past treatments and their effects?
                </label>
                <span className="input-highlight"></span>
              </div>
            </div>
          </div>
          <div className="col-md-10 mx-auto mb-3 mt-4 text-center mt-3">
            <button type="submit" id="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <p id="results"></p>
      </div>
    </div>
  );
}
