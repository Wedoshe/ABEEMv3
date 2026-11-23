/* =========================================================
   ABEEM — MAIN APPLICATION
   Updated application logic
========================================================= */

const a = (id) => document.getElementById(id);


/* =========================================================
   PAGE NAVIGATION
========================================================= */

const pages = [
  "landingPage",
  "modePage",
  "bookCoverPage",
  "guideBookPage",
  "measurePage",
  "evaluatePage",
  "examinePage",
  "awarenessPage",
  "actPage",
  "volunteerIDRSPage",
  "volunteerGlucosePage",
  "volunteerUrinePage",
  "volunteerAnklePage",
  "volunteerFootPage",
  "volunteerFootCarePage",
  "volunteerResultPage"
];


function showPage(id) {

  pages.forEach((pageId) => {

    const page = a(pageId);

    if (page) {
      page.classList.remove("active");
    }

  });

  const target = a(id);

  if (target) {

    target.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


/* =========================================================
   DATA
========================================================= */

const abeemData = {

  mode: "",

  measurements: {

    waist: null,

    hip: null,

    whr: null,

    urine: ""

  },

  evaluation: {

    age: null,

    sex: "",

    activity: "",

    familyHistory: "",

    medication: "",

    medicationTypes: [],

    sleepMedication: "",

    sleepQuality: "",

    nightUrination: "",

    hunger: "",

    frequentUrination: "",

    thirst: "",

    smoking: "",

    stress: "",

    alcohol: "",

    bpStatus: "",

    bpSystolic: null,

    bpDiastolic: null,

    bpMedication: "",

    toothMobility: "",

    gumBleeding: "",

    delayedHealing: ""

  },

  observations: [],

  skinPatches: "",

  idrs: {

    age: 0,

    waist: 0,

    activity: 0,

    familyHistory: 0,

    total: 0

  },

  volunteer: {

    idrs: {

      age: null,

      sex: "",

      waist: null,

      activity: "",

      familyHistory: "",

      agePoints: 0,

      waistPoints: 0,

      activityPoints: 0,

      familyHistoryPoints: 0,

      total: 0

    },

    glucose: {

      taken: "",

      type: "",

      value: null,

      highIndicator: false

    },

    urine: "",

    ankle: null,

    footObservations: [],

    footCare: ""

  }

};


/* =========================================================
   LANDING
========================================================= */

function showModePage() {

  showPage("modePage");

}


/* =========================================================
   START MODES
========================================================= */

function startDIY() {

  abeemData.mode = "diy";

  resetDIYData();

  showPage("bookCoverPage");

}


function startVolunteer() {

  abeemData.mode = "volunteer";

  resetVolunteerData();

  showPage("volunteerIDRSPage");

}


function resetDIYData() {

  abeemData.measurements = {

    waist: null,
    hip: null,
    whr: null,
    urine: ""

  };

  abeemData.evaluation = {

    age: null,
    sex: "",
    activity: "",
    familyHistory: "",
    medication: "",
    medicationTypes: [],
    sleepMedication: "",
    sleepQuality: "",
    nightUrination: "",
    hunger: "",
    frequentUrination: "",
    thirst: "",
    smoking: "",
    stress: "",
    alcohol: "",
    bpStatus: "",
    bpSystolic: null,
    bpDiastolic: null,
    bpMedication: "",
    toothMobility: "",
    gumBleeding: "",
    delayedHealing: ""

  };

  abeemData.observations = [];

  abeemData.skinPatches = "";

  abeemData.idrs = {

    age: 0,
    waist: 0,
    activity: 0,
    familyHistory: 0,
    total: 0

  };

}


function resetVolunteerData() {

  abeemData.volunteer = {

    idrs: {

      age: null,
      sex: "",
      waist: null,
      activity: "",
      familyHistory: "",
      agePoints: 0,
      waistPoints: 0,
      activityPoints: 0,
      familyHistoryPoints: 0,
      total: 0

    },

    glucose: {

      taken: "",
      type: "",
      value: null,
      highIndicator: false

    },

    urine: "",

    ankle: null,

    footObservations: [],

    footCare: ""

  };

}


/* =========================================================
   DIY BOOK
========================================================= */

let guideStep = 0;


/*
  The guide is intentionally kept as a book-like sequence.

  The user enters the measurements and urine result directly
  inside the guide before reaching the questionnaire.
*/

const guideSteps = [

  {
    number: "1",
    title: "Before You Begin",
    type: "intro",

    text:
      "ABEEM is a first-level diabetes-risk screening and awareness system. It does not diagnose diabetes.",

    bullets: [

      "Keep your screening kit ready.",

      "Follow each instruction carefully.",

      "Record measurements honestly.",

      "Complete every required question.",

      "Your final result separates the official IDRS from additional findings."

    ]

  },

  {
    number: "2",
    title: "Measure Your Waist",
    type: "waist",

    text:
      "Measure around the midpoint between the lowest palpable rib and the top of your hip bone.",

    bullets: [

      "Stand upright and relaxed.",

      "Keep the tape horizontal around your body.",

      "The tape should be snug but should not compress the skin.",

      "Take the measurement while breathing normally.",

      "Enter the measurement below."

    ]

  },

  {
    number: "3",
    title: "Measure Your Hip",
    type: "hip",

    text:
      "Measure around the widest part of the hips and buttocks.",

    bullets: [

      "Stand upright with your feet comfortably together.",

      "Keep the tape horizontal.",

      "The tape should be snug without compressing the body.",

      "Enter the measurement below.",

      "ABEEM will calculate your waist-to-hip ratio automatically."

    ]

  },

  {
    number: "4",
    title: "Urine Glucose Screening",
    type: "urine",

    text:
      "Dip the urine glucose strip once briefly, remove it, and wait 2 minutes before reading the result.",

    bullets: [

      "Wash your hands before collecting the sample.",

      "Use a clean, dry collection cup.",

      "Avoid touching the inside of the container.",

      "Collect the urine sample.",

      "Dip the urine glucose strip into the urine once, briefly.",

      "Do not leave the strip in the urine for more than 5 seconds.",

      "Remove the strip and allow excess urine to drain off.",

      "Wait 2 minutes for the result to develop.",

      "Compare the strip with the colour legend."

    ]

  },

  {
    number: "5",
    title: "Ready for the Questionnaire",
    type: "finish",

    text:
      "Your waist, hip, WHR and urine result will now be carried into the questionnaire.",

    bullets: [

      "The official IDRS uses only its validated scoring factors.",

      "Additional findings are recorded separately.",

      "Additional findings do not automatically become IDRS points.",

      "ABEEM does not diagnose diabetes.",

      "Continue to complete the screening questionnaire."

    ]

  }

];


function openGuideBook() {

  guideStep = 0;

  renderGuideStep();

  showPage("guideBookPage");

}


function renderGuideStep() {

  const step = guideSteps[guideStep];

  const left = a("guideLeftPage");

  const right = a("guideRightPage");

  const progress = a("guideProgress");

  if (!left || !right) {
    return;
  }


  /*
    Alternate the information between the two pages
    to create an actual book-spread effect.
  */

  let leftHTML = "";
  let rightHTML = "";


  if (step.type === "intro") {

    leftHTML = `

      <span class="step-number">
        ${step.number}
      </span>

      <h1>
        ${escapeHTML(step.title)}
      </h1>

      <p>
        ${escapeHTML(step.text)}
      </p>

    `;

    rightHTML = `

      <h2>Before starting</h2>

      <ul>

        ${step.bullets
          .map(
            (bullet) =>
              `<li>${escapeHTML(bullet)}</li>`
          )
          .join("")}

      </ul>

    `;

  }


  else if (step.type === "waist") {

    leftHTML = `

      <span class="step-number">
        ${step.number}
      </span>

      <h1>
        ${escapeHTML(step.title)}
      </h1>

      <p>
        ${escapeHTML(step.text)}
      </p>

      <ul>

        ${step.bullets
          .map(
            (bullet) =>
              `<li>${escapeHTML(bullet)}</li>`
          )
          .join("")}

      </ul>

    `;

    rightHTML = `

      <div class="book-input-card">

        <label for="bookWaist">
          Waist circumference (cm)
        </label>

        <input
          id="bookWaist"
          type="number"
          min="1"
          step="0.1"
          value="${abeemData.measurements.waist || ""}"
          placeholder="Enter waist"
        />

      </div>

      <div class="book-note">
        Measure carefully before continuing.
      </div>

    `;

  }


  else if (step.type === "hip") {

    leftHTML = `

      <span class="step-number">
        ${step.number}
      </span>

      <h1>
        ${escapeHTML(step.title)}
      </h1>

      <p>
        ${escapeHTML(step.text)}
      </p>

      <ul>

        ${step.bullets
          .map(
            (bullet) =>
              `<li>${escapeHTML(bullet)}</li>`
          )
          .join("")}

      </ul>

    `;

    rightHTML = `

      <div class="book-input-card">

        <label for="bookHip">
          Hip circumference (cm)
        </label>

        <input
          id="bookHip"
          type="number"
          min="1"
          step="0.1"
          value="${abeemData.measurements.hip || ""}"
          placeholder="Enter hip"
        />

      </div>

      <div class="calculated-box">

        <span>
          Waist-to-Hip Ratio
        </span>

        <strong id="bookWHR">
          ${calculateBookWHRDisplay()}
        </strong>

        <small>
          Waist ÷ Hip
        </small>

      </div>

    `;

  }


  else if (step.type === "urine") {

    leftHTML = `

      <span class="step-number">
        ${step.number}
      </span>

      <h1>
        ${escapeHTML(step.title)}
      </h1>

      <p>
        ${escapeHTML(step.text)}
      </p>

      <ul>

        ${step.bullets
          .map(
            (bullet) =>
              `<li>${escapeHTML(bullet)}</li>`
          )
          .join("")}

      </ul>

    `;

    rightHTML = `

      <div class="urine-book-card">

        <img
          class="guide-urine-image"
          src="urine"
          alt="Urine glucose strip colour legend"
          onerror="this.onerror=null;this.src='urine.png';"
        />

        <label for="bookUrine">
          Select the closest strip result
        </label>

        <select id="bookUrine">

          <option value="">
            Select result
          </option>

          <option value="negative">
            Negative
          </option>

          <option value="trace">
            Trace
          </option>

          <option value="positive">
            Positive
          </option>

          <option value="not_performed">
            Not performed
          </option>

        </select>

        <p class="small-note">
          Wash your hands after handling the sample and used materials.
        </p>

      </div>

    `;

  }


  else if (step.type === "finish") {

    leftHTML = `

      <span class="step-number">
        ${step.number}
      </span>

      <h1>
        ${escapeHTML(step.title)}
      </h1>

      <p>
        ${escapeHTML(step.text)}
      </p>

    `;

    rightHTML = `

      <h2>What happens next?</h2>

      <ul>

        ${step.bullets
          .map(
            (bullet) =>
              `<li>${escapeHTML(bullet)}</li>`
          )
          .join("")}

      </ul>

    `;

  }


  left.innerHTML = leftHTML;

  right.innerHTML = rightHTML;


  if (progress) {

    progress.textContent =
      `Page ${guideStep + 1} of ${guideSteps.length}`;

  }


  const backButton =
    a("guideBackButton");

  const nextButton =
    a("guideNextButton");


  if (backButton) {

    if (guideStep === 0) {

      backButton.classList.add("hidden");

    } else {

      backButton.classList.remove("hidden");

    }

  }


  if (nextButton) {

    if (
      guideStep ===
      guideSteps.length - 1
    ) {

      nextButton.textContent =
        "Start Questionnaire →";

    } else {

      nextButton.textContent =
        "Next page →";

    }

  }


  attachBookMeasurementListeners();

}


function attachBookMeasurementListeners() {

  const waistInput =
    a("bookWaist");

  const hipInput =
    a("bookHip");


  if (waistInput) {

    waistInput.addEventListener(
      "input",
      () => {

        const value =
          parseFloat(
            waistInput.value
          );

        if (
          Number.isFinite(value) &&
          value > 0
        ) {

          abeemData.measurements.waist =
            value;

        }

        updateBookWHR();

      }
    );

  }


  if (hipInput) {

    hipInput.addEventListener(
      "input",
      () => {

        const value =
          parseFloat(
            hipInput.value
          );

        if (
          Number.isFinite(value) &&
          value > 0
        ) {

          abeemData.measurements.hip =
            value;

        }

        updateBookWHR();

      }
    );

  }

}


function calculateBookWHRDisplay() {

  const waist =
    abeemData.measurements.waist;

  const hip =
    abeemData.measurements.hip;


  if (
    Number.isFinite(waist) &&
    waist > 0 &&
    Number.isFinite(hip) &&
    hip > 0
  ) {

    return (
      waist / hip
    ).toFixed(2);

  }

  return "—";
}


function updateBookWHR() {

  const display =
    a("bookWHR");

  if (display) {

    display.textContent =
      calculateBookWHRDisplay();

  }

}


function saveBookStepData() {

  if (guideSteps[guideStep].type === "waist") {

    const input =
      a("bookWaist");

    const value =
      input
        ? parseFloat(input.value)
        : NaN;


    if (
      !Number.isFinite(value) ||
      value <= 0
    ) {

      alert(
        "Please enter a valid waist measurement before continuing."
      );

      return false;

    }


    abeemData.measurements.waist =
      value;

  }


  if (guideSteps[guideStep].type === "hip") {

    const input =
      a("bookHip");

    const value =
      input
        ? parseFloat(input.value)
        : NaN;


    if (
      !Number.isFinite(value) ||
      value <= 0
    ) {

      alert(
        "Please enter a valid hip measurement before continuing."
      );

      return false;

    }


    abeemData.measurements.hip =
      value;


    const waist =
      abeemData.measurements.waist;


    if (
      !Number.isFinite(waist) ||
      waist <= 0
    ) {

      alert(
        "Please enter your waist measurement first."
      );

      return false;

    }


    abeemData.measurements.whr =
      waist / value;

  }


  if (guideSteps[guideStep].type === "urine") {

    const select =
      a("bookUrine");

    const urine =
      select
        ? select.value
        : "";


    if (!urine) {

      alert(
        "Please select the urine strip result before continuing."
      );

      return false;

    }


    abeemData.measurements.urine =
      urine;

  }


  return true;
}


function nextGuideStep() {

  if (!saveBookStepData()) {
    return;
  }


  if (
    guideStep <
    guideSteps.length - 1
  ) {

    guideStep++;

    renderGuideStep();

    return;

  }


  syncMeasurementToQuestionnaire();

  showPage("evaluatePage");

}


function previousGuideStep() {

  if (guideStep > 0) {

    guideStep--;

    renderGuideStep();

  }

}


function syncMeasurementToQuestionnaire() {

  const evaluateWHR =
    a("evaluateWHR");

  const evaluateUrine =
    a("evaluateUrine");

  const questionnaireUrine =
    a("questionnaireUrineResult");


  if (evaluateWHR) {

    evaluateWHR.textContent =
      Number.isFinite(
        abeemData.measurements.whr
      )
        ? abeemData.measurements.whr.toFixed(2)
        : "—";

  }


  if (evaluateUrine) {

    evaluateUrine.textContent =
      formatUrineResult(
        abeemData.measurements.urine
      );

  }


  if (questionnaireUrine) {

    questionnaireUrine.value =
      abeemData.measurements.urine || "";

  }

}


/* =========================================================
   OLD MEASURE PAGE SUPPORT
========================================================= */

function calculateWHR() {

  const waistInput =
    a("waist");

  const hipInput =
    a("hip");

  if (!waistInput || !hipInput) {
    return null;
  }


  const waist =
    parseFloat(
      waistInput.value
    );

  const hip =
    parseFloat(
      hipInput.value
    );


  if (
    Number.isFinite(waist) &&
    waist > 0 &&
    Number.isFinite(hip) &&
    hip > 0
  ) {

    const whr =
      waist / hip;


    const display =
      a("whrDisplay");

    if (display) {
      display.textContent =
        whr.toFixed(2);
    }


    return whr;

  }


  const display =
    a("whrDisplay");

  if (display) {
    display.textContent = "—";
  }


  return null;
}


function submitDIYMeasure() {

  const waistInput =
    a("waist");

  const hipInput =
    a("hip");

  const urineInput =
    a("urineResult");


  if (!waistInput || !hipInput) {
    return;
  }


  const waist =
    parseFloat(
      waistInput.value
    );

  const hip =
    parseFloat(
      hipInput.value
    );

  const urine =
    urineInput
      ? urineInput.value
      : "";


  if (
    !Number.isFinite(waist) ||
    waist <= 0
  ) {

    alert(
      "Please enter a valid waist measurement."
    );

    return;
  }


  if (
    !Number.isFinite(hip) ||
    hip <= 0
  ) {

    alert(
      "Please enter a valid hip measurement."
    );

    return;
  }


  if (!urine) {

    alert(
      "Please select the urine strip result."
    );

    return;
  }


  abeemData.measurements.waist =
    waist;

  abeemData.measurements.hip =
    hip;

  abeemData.measurements.whr =
    waist / hip;

  abeemData.measurements.urine =
    urine;


  syncMeasurementToQuestionnaire();

  showPage("evaluatePage");

}


/* =========================================================
   MEDICATION LOGIC
========================================================= */

/*
  Medication question and sleep-medication question are separate.

  If medication = Yes:
    show medication categories
    then show sleep-medication question

  If medication = No:
    hide medication categories
    STILL show sleep-medication question

  Sleep quality is shown only when:
    sleep medication = No
*/

function toggleMedicationBox() {

  const selected =
    document.querySelector(
      'input[name="medication"]:checked'
    );

  const medicationBox =
    a("medicationBox");

  const sleepMedicationQuestion =
    a("sleepMedicationQuestion");


  if (!selected) {
    return;
  }


  if (
    selected.value === "yes"
  ) {

    if (medicationBox) {
      medicationBox.classList.remove("hidden");
    }

  } else {

    if (medicationBox) {

      medicationBox.classList.add(
        "hidden"
      );

    }


    document
      .querySelectorAll(
        "#medicationBox input[type='checkbox']"
      )
      .forEach(
        (checkbox) => {
          checkbox.checked = false;
        }
      );

  }


  if (sleepMedicationQuestion) {

    sleepMedicationQuestion.classList.remove(
      "hidden"
    );

  }


  updateSleepQuestion();

}


function updateSleepQuestion() {

  const sleepMedication =
    document.querySelector(
      'input[name="sleepMedication"]:checked'
    );

  const sleepQuestion =
    a("sleepQuestion");


  if (!sleepQuestion) {
    return;
  }


  if (
    sleepMedication &&
    sleepMedication.value === "yes"
  ) {

    sleepQuestion.classList.add(
      "hidden"
    );

    if (a("sleepQuality")) {
      a("sleepQuality").value = "";
    }

    return;

  }


  if (
    sleepMedication &&
    sleepMedication.value === "no"
  ) {

    sleepQuestion.classList.remove(
      "hidden"
    );

    return;

  }


  sleepQuestion.classList.add(
    "hidden"
  );

}


/* =========================================================
   BLOOD PRESSURE LOGIC
========================================================= */

function toggleBPFields() {

  const status =
    a("bpStatus");

  const highFields =
    a("bpHighFields");


  if (!status || !highFields) {
    return;
  }


  if (
    status.value === "high"
  ) {

    highFields.classList.remove(
      "hidden"
    );

  } else {

    highFields.classList.add(
      "hidden"
    );

    if (a("bpSystolic")) {
      a("bpSystolic").value = "";
    }

    if (a("bpDiastolic")) {
      a("bpDiastolic").value = "";
    }

  }

}


/* =========================================================
   DIY EVALUATION
========================================================= */

function submitDIYEvaluation() {

  syncMeasurementToQuestionnaire();


  const age =
    parseInt(
      a("age").value,
      10
    );

  const sex =
    a("sex").value;

  const activity =
    a("activity").value;

  const familyHistory =
    a("familyHistory").value;


  const medication =
    document.querySelector(
      'input[name="medication"]:checked'
    );


  const medicationTypes =
    Array.from(
      document.querySelectorAll(
        '#medicationBox input[type="checkbox"]:checked'
      )
    ).map(
      (checkbox) =>
        checkbox.value
    );


  const sleepMedication =
    document.querySelector(
      'input[name="sleepMedication"]:checked'
    );


  const sleepQuality =
    a("sleepQuality")
      ? a("sleepQuality").value
      : "";


  /* REQUIRED IDRS INPUTS */

  if (
    !Number.isInteger(age) ||
    age < 18
  ) {

    alert(
      "Please enter a valid age of 18 or above."
    );

    return;

  }


  if (!sex) {

    alert(
      "Please select sex."
    );

    return;

  }


  if (!activity) {

    alert(
      "Please select a physical activity level."
    );

    return;

  }


  if (!familyHistory) {

    alert(
      "Please select the family history option."
    );

    return;

  }


  /* MEDICATION */

  if (!medication) {

    alert(
      "Please answer the medication question."
    );

    return;

  }


  if (
    medication.value === "yes" &&
    medicationTypes.length === 0
  ) {

    alert(
      "Please select the relevant medication category."
    );

    return;

  }


  /* SLEEP MEDICATION */

  if (!sleepMedication) {

    alert(
      "Please answer whether you are taking medication specifically to help you sleep."
    );

    return;

  }


  if (
    sleepMedication.value === "no" &&
    !sleepQuality
  ) {

    alert(
      "Please answer the sleep-quality question."
    );

    return;

  }


  /* OTHER QUESTIONS */

  if (!a("nightUrination").value) {

    alert(
      "Please answer the night urination question."
    );

    return;

  }


  if (!a("hunger").value) {

    alert(
      "Please answer the hunger question."
    );

    return;

  }


  if (!a("frequentUrination").value) {

    alert(
      "Please answer the frequent urination question."
    );

    return;

  }


  if (!a("thirst").value) {

    alert(
      "Please answer the thirst question."
    );

    return;

  }


  if (!a("smoking").value) {

    alert(
      "Please answer the tobacco-use question."
    );

    return;

  }


  if (!a("stress").value) {

    alert(
      "Please answer the stress question."
    );

    return;

  }


  if (!a("alcohol").value) {

    alert(
      "Please answer the alcohol-use question."
    );

    return;

  }


  /* BLOOD PRESSURE */

  if (!a("bpStatus").value) {

    alert(
      "Please answer the blood-pressure question."
    );

    return;

  }


  if (
    a("bpStatus").value === "high"
  ) {

    const systolic =
      parseFloat(
        a("bpSystolic").value
      );

    const diastolic =
      parseFloat(
        a("bpDiastolic").value
      );


    if (
      !Number.isFinite(systolic) ||
      systolic <= 0
    ) {

      alert(
        "Please enter the recent systolic blood-pressure reading."
      );

      return;

    }


    if (
      !Number.isFinite(diastolic) ||
      diastolic <= 0
    ) {

      alert(
        "Please enter the recent diastolic blood-pressure reading."
      );

      return;

    }

  }


  const bpMedication =
    document.querySelector(
      'input[name="bpMedication"]:checked'
    );


  if (!bpMedication) {

    alert(
      "Please answer the blood-pressure medication question."
    );

    return;

  }


  /* DENTIST QUESTIONS */

  if (!a("toothMobility").value) {

    alert(
      "Please answer the tooth-mobility question."
    );

    return;

  }


  if (!a("gumBleeding").value) {

    alert(
      "Please answer the gum-bleeding question."
    );

    return;

  }


  if (!a("delayedHealing").value) {

    alert(
      "Please answer the delayed-healing question."
    );

    return;

  }


  /* STORE DATA */

  abeemData.evaluation.age =
    age;

  abeemData.evaluation.sex =
    sex;

  abeemData.evaluation.activity =
    activity;

  abeemData.evaluation.familyHistory =
    familyHistory;

  abeemData.evaluation.medication =
    medication.value;

  abeemData.evaluation.medicationTypes =
    medicationTypes;

  abeemData.evaluation.sleepMedication =
    sleepMedication.value;

  abeemData.evaluation.sleepQuality =
    sleepMedication.value === "yes"
      ? ""
      : sleepQuality;

  abeemData.evaluation.nightUrination =
    a("nightUrination").value;

  abeemData.evaluation.hunger =
    a("hunger").value;

  abeemData.evaluation.frequentUrination =
    a("frequentUrination").value;

  abeemData.evaluation.thirst =
    a("thirst").value;

  abeemData.evaluation.smoking =
    a("smoking").value;

  abeemData.evaluation.stress =
    a("stress").value;

  abeemData.evaluation.alcohol =
    a("alcohol").value;


  abeemData.evaluation.bpStatus =
    a("bpStatus").value;

  abeemData.evaluation.bpSystolic =
    a("bpSystolic") &&
    a("bpSystolic").value
      ? parseFloat(a("bpSystolic").value)
      : null;

  abeemData.evaluation.bpDiastolic =
    a("bpDiastolic") &&
    a("bpDiastolic").value
      ? parseFloat(a("bpDiastolic").value)
      : null;

  abeemData.evaluation.bpMedication =
    bpMedication.value;


  abeemData.evaluation.toothMobility =
    a("toothMobility").value;

  abeemData.evaluation.gumBleeding =
    a("gumBleeding").value;

  abeemData.evaluation.delayedHealing =
    a("delayedHealing").value;


  /*
    The urine result is carried forward from the book.

    If the questionnaire dropdown is changed, use the
    questionnaire selection as the final recorded value.
  */

  const questionnaireUrine =
    a("questionnaireUrineResult");


  if (
    questionnaireUrine &&
    questionnaireUrine.value
  ) {

    abeemData.measurements.urine =
      questionnaireUrine.value;

  }


  calculateDIYIDRS();


  showPage(
    "examinePage"
  );

}


/* =========================================================
   IDRS SCORING
========================================================= */

function calculateIDRSValues(
  age,
  sex,
  waist,
  activity,
  familyHistory
) {

  let agePoints = 0;

  let waistPoints = 0;

  let activityPoints = 0;

  let familyHistoryPoints = 0;


  /* AGE */

  if (
    age < 35
  ) {

    agePoints = 0;

  }

  else if (
    age <= 49
  ) {

    agePoints = 20;

  }

  else {

    agePoints = 30;

  }


  /* WAIST */

  if (
    sex === "female"
  ) {

    if (
      waist < 80
    ) {

      waistPoints = 0;

    }

    else if (
      waist <= 89
    ) {

      waistPoints = 10;

    }

    else {

      waistPoints = 20;

    }

  }

  else if (
    sex === "male"
  ) {

    if (
      waist < 90
    ) {

      waistPoints = 0;

    }

    else if (
      waist <= 99
    ) {

      waistPoints = 10;

    }

    else {

      waistPoints = 20;

    }

  }


  /* PHYSICAL ACTIVITY */

  if (
    activity === "vigorous"
  ) {

    activityPoints = 0;

  }

  else if (
    activity === "moderate"
  ) {

    activityPoints = 10;

  }

  else if (
    activity === "light"
  ) {

    activityPoints = 20;

  }

  else if (
    activity === "sedentary"
  ) {

    activityPoints = 30;

  }


  /* FAMILY HISTORY */

  if (
    familyHistory === "none"
  ) {

    familyHistoryPoints = 0;

  }

  else if (
    familyHistory === "one"
  ) {

    familyHistoryPoints = 10;

  }

  else if (
    familyHistory === "both"
  ) {

    familyHistoryPoints = 20;

  }


  return {

    age: agePoints,

    waist: waistPoints,

    activity: activityPoints,

    familyHistory: familyHistoryPoints,

    total:
      agePoints +
      waistPoints +
      activityPoints +
      familyHistoryPoints

  };

}


function calculateDIYIDRS() {

  abeemData.idrs =
    calculateIDRSValues(

      abeemData.evaluation.age,

      abeemData.evaluation.sex,

      abeemData.measurements.waist,

      abeemData.evaluation.activity,

      abeemData.evaluation.familyHistory

    );

}


/* =========================================================
   IDRS RISK PRESENTATION
========================================================= */

function getIDRSRisk(score) {

  if (
    score < 30
  ) {

    return {

      label: "Lower IDRS risk",

      className: "clear"

    };

  }


  if (
    score <= 50
  ) {

    return {

      label: "Moderate IDRS risk",

      className: "present"

    };

  }


  return {

    label: "Higher IDRS risk",

    className: "warning"

  };

}


/* =========================================================
   DIY EXAMINATION
========================================================= */

function toggleNoneObserved() {

  const none =
    a("noneObserved");


  if (!none) {
    return;
  }


  if (
    none.checked
  ) {

    document
      .querySelectorAll(
        '#examinePage input[name="observations"]'
      )
      .forEach(
        (checkbox) => {

          if (
            checkbox !== none
          ) {

            checkbox.checked =
              false;

          }

        }
      );

  }

}


function submitDIYExamination() {

  const observations =
    Array.from(
      document.querySelectorAll(
        '#examinePage input[name="observations"]:checked'
      )
    ).map(
      (checkbox) =>
        checkbox.value
    );


  if (
    observations.length === 0
  ) {

    alert(
      "Please select an observation or 'None observed'."
    );

    return;

  }


  const skinPatches =
    a("skinPatches")
      ? a("skinPatches").value
      : "";


  if (!skinPatches) {

    alert(
      "Please answer the skin-patch question."
    );

    return;

  }


  abeemData.observations =
    observations;

  abeemData.skinPatches =
    skinPatches;

  goToAct();

}


/* =========================================================
   EDUCATION
========================================================= */

function openEducation() {

  const intro =
    a("educationIntro");


  if (intro) {

    const score =
      abeemData.idrs.total;

    const risk =
      getIDRSRisk(score);


    intro.textContent =
      `Your official IDRS result is ${score}/100 (${risk.label}). ` +
      `The following information is for general diabetes awareness ` +
      `and does not replace personalised medical advice.`;

  }


  showPage(
    "awarenessPage"
  );

}


/* =========================================================
   DIY RESULT
========================================================= */

function goToAct() {

  renderDIYResult();

  showPage(
    "actPage"
  );

}


function renderDIYResult() {

  const score =
    abeemData.idrs.total;


  const risk =
    getIDRSRisk(score);


  const scoreElement =
    a("idrsScore");

  const riskElement =
    a("idrsRisk");

  const card =
    a("idrsResultCard");


  if (scoreElement) {

    scoreElement.textContent =
      `${score} / 100`;

  }


  if (riskElement) {

    riskElement.textContent =
      risk.label;

  }


  if (card) {

    card.className =
      `result-card ${risk.className}`;

  }


  const breakdown =
    a("idrsBreakdown");


  if (breakdown) {

    breakdown.innerHTML = `

      ${resultRow(
        "Age",
        abeemData.idrs.age
      )}

      ${resultRow(
        "Waist circumference",
        abeemData.idrs.waist
      )}

      ${resultRow(
        "Physical activity",
        abeemData.idrs.activity
      )}

      ${resultRow(
        "Family history",
        abeemData.idrs.familyHistory
      )}

      ${resultRow(
        "<strong>Total IDRS</strong>",
        `<strong>${score}</strong>`
      )}

    `;

  }


  const indicators =
    collectDIYAdditionalIndicators();


  renderIndicatorList(
    a("additionalIndicators"),
    indicators
  );


  const guidance =
    a("overallGuidance");


  if (guidance) {

    guidance.textContent =
      renderOverallGuidance(
        score,
        indicators
      );

  }

}


/* =========================================================
   DIY ADDITIONAL INDICATORS
========================================================= */

function collectDIYAdditionalIndicators() {

  const indicators = [];


  const urine =
    abeemData.measurements.urine;


  if (
    urine === "trace" ||
    urine === "positive"
  ) {

    indicators.push({

      label:
        "Urine glucose result",

      value:
        formatUrineResult(
          urine
        ),

      level:
        "present"

    });

  }

  else {

    indicators.push({

      label:
        "Urine glucose result",

      value:
        formatUrineResult(
          urine
        ),

      level:
        "clear"

    });

  }


  const e =
    abeemData.evaluation;


  /* SYMPTOMS */

  if (
    e.frequentUrination === "often" ||
    e.frequentUrination === "very_often"
  ) {

    indicators.push({

      label:
        "Frequent urination",

      value:
        "Reported",

      level:
        "present"

    });

  }


  if (
    e.thirst === "often" ||
    e.thirst === "very_often"
  ) {

    indicators.push({

      label:
        "Prolonged thirst",

      value:
        "Reported",

      level:
        "present"

    });

  }


  if (
    e.hunger === "often" ||
    e.hunger === "very_often"
  ) {

    indicators.push({

      label:
        "Increased hunger after meals",

      value:
        "Reported",

      level:
        "present"

    });

  }


  if (
    e.nightUrination === "three_plus"
  ) {

    indicators.push({

      label:
        "Night-time urination",

      value:
        "3+ times",

      level:
        "present"

    });

  }


  /* BP */

  if (
    e.bpStatus === "high"
  ) {

    let bpText =
      "History of high blood pressure";

    if (
      Number.isFinite(
        e.bpSystolic
      ) &&
      Number.isFinite(
        e.bpDiastolic
      )
    ) {

      bpText +=
        ` — ${e.bpSystolic}/${e.bpDiastolic} mmHg`;

    }


    indicators.push({

      label:
        "Blood pressure history",

      value:
        bpText,

      level:
        "present"

    });

  }

  else if (
    e.bpStatus === "low"
  ) {

    indicators.push({

      label:
        "Blood pressure history",

      value:
        "History of low blood pressure reported",

      level:
        "present"

    });

  }


  if (
    e.bpMedication === "yes"
  ) {

    indicators.push({

      label:
        "Blood-pressure medication",

      value:
        "Reported",

      level:
        "present"

    });

  }


  /* ORAL HEALTH */

  if (
    e.toothMobility === "yes"
  ) {

    indicators.push({

      label:
        "Tooth mobility",

      value:
        "Reported",

      level:
        "present"

    });

  }


  if (
    e.gumBleeding === "yes"
  ) {

    indicators.push({

      label:
        "Generalized gum bleeding",

      value:
        "Reported",

      level:
        "present"

    });

  }


  if (
    e.delayedHealing === "yes"
  ) {

    indicators.push({

      label:
        "Delayed healing",

      value:
        "Reported",

      level:
        "present"

    });

  }


  /* SKIN */

  if (
    abeemData.skinPatches === "yes"
  ) {

    indicators.push({

      label:
        "Dark or unusual skin patches",

      value:
        "Reported on legs or neck",

      level:
        "present"

    });

  }


  /* LEG / FOOT */

  if (
    abeemData.observations.length > 0 &&
    !abeemData.observations.includes(
      "none"
    )
  ) {

    indicators.push({

      label:
        "Leg / foot observations",

      value:
        `${abeemData.observations.length} finding(s) selected`,

      level:
        "present"

    });

  }

  else {

  indicators.push({

    label:
      "Leg / foot observations",

    value:
      "None observed",

    level:
      "clear"

  });

}


  /* MEDICATION */

  if (
    e.medication === "yes" &&
    e.medicationTypes.length > 0
  ) {

    indicators.push({

      label:
        "Medication context",

      value:
        "Medication reported",

      level:
        "present"

    });

  }


  return indicators;

}


/* =========================================================
   OVERALL GUIDANCE
========================================================= */

function renderOverallGuidance(
  score,
  indicators
) {

  const hasWarning =
    indicators.some(
      (item) =>
        item.level === "warning"
    );


  const additionalCount =
    indicators.filter(
      (item) =>
        item.level === "present" ||
        item.level === "warning"
    ).length;


  if (
    hasWarning
  ) {

    return (
      `Your official IDRS score is ${score}/100. ` +
      `A separate screening indicator was identified. ` +
      `This does not diagnose diabetes, but the finding should ` +
      `be reviewed by a qualified healthcare professional.`
    );

  }


  if (
    score > 50 ||
    additionalCount >= 2
  ) {

    return (
      `Your official IDRS score is ${score}/100. ` +
      `Additional screening findings were also reported. ` +
      `These findings are not added to the IDRS score and do not ` +
      `diagnose diabetes, but professional evaluation may be appropriate.`
    );

  }


if (score > 50) {
  return `Your official IDRS score is ${score}/100. IMMEDIATE BLOOD TESTING AND SEEKING HEALTHCARE PROFESSIONAL ADVICE IS ADVISED.`;
}

if (score >= 30) {
  return `Your official IDRS score is ${score}/100. Further laboratory testing is advised, and seeking advice from a qualified healthcare professional would be best.`;
}

return `Your official IDRS score is ${score}/100. Your current IDRS score is in the lower-risk range. Continue a healthy lifestyle, repeat diabetes risk screening every 6 months, and go through the Diabetes Education section using the button below.`;

}


/* =========================================================
   INDICATOR RENDERING
========================================================= */

function renderIndicatorList(
  container,
  indicators
) {

  if (!container) {
    return;
  }


  container.innerHTML =
    indicators
      .map(
        (item) => {

          const icon =
            item.level === "warning"
              ? "⚠️"
              : item.level === "present"
                ? "•"
                : "✓";


          return `

            <div
              class="indicator ${item.level}"
            >

              <strong>
                ${icon}
                ${escapeHTML(item.label)}
              </strong>

              <div>
                ${escapeHTML(item.value)}
              </div>

            </div>

          `;

        }
      )
      .join("");

}


/* =========================================================
   VOLUNTEER — IDRS
========================================================= */

function submitVolunteerIDRS() {

  const age =
    parseInt(
      a("vAge").value,
      10
    );


  const sex =
    a("vSex").value;


  const waist =
    parseFloat(
      a("vWaist").value
    );


  const activity =
    a("vActivity").value;


  const familyHistory =
    a("vFamilyHistory").value;


  if (
    !Number.isInteger(age) ||
    age < 18
  ) {

    alert(
      "Please enter a valid age of 18 or above."
    );

    return;

  }


  if (!sex) {

    alert(
      "Please select sex."
    );

    return;

  }


  if (
    !Number.isFinite(waist) ||
    waist <= 0
  ) {

    alert(
      "Please enter a valid waist measurement."
    );

    return;

  }


  if (!activity) {

    alert(
      "Please select physical activity."
    );

    return;

  }


  if (!familyHistory) {

    alert(
      "Please select family history."
    );

    return;

  }


  const values =
    calculateIDRSValues(

      age,

      sex,

      waist,

      activity,

      familyHistory

    );


  abeemData.volunteer.idrs = {

    age,

    sex,

    waist,

    activity,

    familyHistory,

    agePoints:
      values.age,

    waistPoints:
      values.waist,

    activityPoints:
      values.activity,

    familyHistoryPoints:
      values.familyHistory,

    total:
      values.total

  };


  showPage(
    "volunteerGlucosePage"
  );

}


/* =========================================================
   VOLUNTEER — GLUCOMETER
========================================================= */

function toggleVolunteerGlucose() {

  const selected =
    document.querySelector(
      'input[name="glucoseTaken"]:checked'
    );


  const box =
    a("volunteerGlucoseInputs");


  if (
    !selected ||
    !box
  ) {

    return;

  }


  if (
    selected.value === "yes"
  ) {

    box.classList.remove(
      "hidden"
    );

  }

  else {

    box.classList.add(
      "hidden"
    );

    if (a("vGlucoseType")) {
      a("vGlucoseType").value = "";
    }

    if (a("vGlucoseValue")) {
      a("vGlucoseValue").value = "";
    }

  }

}


function submitVolunteerGlucose() {

  const selected =
    document.querySelector(
      'input[name="glucoseTaken"]:checked'
    );


  if (!selected) {

    alert(
      "Please answer whether a glucometer reading was taken."
    );

    return;

  }


  if (
    selected.value === "no"
  ) {

    abeemData.volunteer.glucose = {

      taken:
        "no",

      type:
        "",

      value:
        null,

      highIndicator:
        false

    };


    showPage(
      "volunteerUrinePage"
    );

    return;

  }


  const type =
    a("vGlucoseType").value;


  const value =
    parseFloat(
      a("vGlucoseValue").value
    );


  if (!type) {

    alert(
      "Please select the glucose reading type."
    );

    return;

  }


  if (
    !Number.isFinite(value) ||
    value < 0
  ) {

    alert(
      "Please enter a valid glucose reading."
    );

    return;

  }


  let highIndicator =
    false;


  if (
    type === "fasting" &&
    value >= 126
  ) {

    highIndicator =
      true;

  }

  else if (
    type === "random" &&
    value >= 200
  ) {

    highIndicator =
      true;

  }

  else if (
    type === "two_hour" &&
    value >= 200
  ) {

    highIndicator =
      true;

  }


  abeemData.volunteer.glucose = {

    taken:
      "yes",

    type,

    value,

    highIndicator

  };


  showPage(
    "volunteerUrinePage"
  );

}


/* =========================================================
   VOLUNTEER — URINE
========================================================= */

function submitVolunteerUrine() {

  const urine =
    a("vUrineResult").value;


  if (!urine) {

    alert(
      "Please select the urine strip result."
    );

    return;

  }


  abeemData.volunteer.urine =
    urine;


  showPage(
    "volunteerAnklePage"
  );

}


/* =========================================================
   VOLUNTEER — ANKLE
========================================================= */

function submitVolunteerAnkle() {

  const ankle =
    parseFloat(
      a("vAnkle").value
    );


  if (
    !Number.isFinite(ankle) ||
    ankle <= 0
  ) {

    alert(
      "Please enter a valid ankle measurement."
    );

    return;

  }


  abeemData.volunteer.ankle =
    ankle;


  showPage(
    "volunteerFootPage"
  );

}


/* =========================================================
   VOLUNTEER — FOOT OBSERVATIONS
========================================================= */

function toggleVolunteerNoneObserved() {

  const none =
    a("vNoneObserved");


  if (!none) {
    return;
  }


  if (
    none.checked
  ) {

    document
      .querySelectorAll(
        '#volunteerFootPage input[name="vFootObservations"]'
      )
      .forEach(
        (checkbox) => {

          if (
            checkbox !== none
          ) {

            checkbox.checked =
              false;

          }

        }
      );

  }

}


function submitVolunteerFoot() {

  const observations =
    Array.from(
      document.querySelectorAll(
        '#volunteerFootPage input[name="vFootObservations"]:checked'
      )
    ).map(
      (checkbox) =>
        checkbox.value
    );


  if (
    observations.length === 0
  ) {

    alert(
      "Please select an observation or 'None observed'."
    );

    return;

  }


  abeemData.volunteer.footObservations =
    observations;


  showPage(
    "volunteerFootCarePage"
  );

}


/* =========================================================
   VOLUNTEER — FOOT CARE
========================================================= */

function submitVolunteerFootCare() {

  const value =
    a("vFootCare").value;


  if (!value) {

    alert(
      "This foot-care question is compulsory. Please select an answer."
    );

    return;

  }


  abeemData.volunteer.footCare =
    value;


  renderVolunteerResult();


  showPage(
    "volunteerResultPage"
  );

}


/* =========================================================
   VOLUNTEER — RESULT
========================================================= */

function renderVolunteerResult() {

  const v =
    abeemData.volunteer;


  const score =
    v.idrs.total;


  const risk =
    getIDRSRisk(score);


  if (a("volunteerIDRSScore")) {

    a("volunteerIDRSScore").textContent =
      `${score} / 100`;

  }


  if (a("volunteerIDRSRisk")) {

    a("volunteerIDRSRisk").textContent =
      risk.label;

  }


  if (a("volunteerIDRSCard")) {

    a("volunteerIDRSCard").className =
      `result-card ${risk.className}`;

  }


  if (a("volunteerIDRSBreakdown")) {

    a("volunteerIDRSBreakdown").innerHTML = `

      ${resultRow(
        "Age",
        `${v.idrs.agePoints} points`
      )}

      ${resultRow(
        "Waist circumference",
        `${v.idrs.waistPoints} points`
      )}

      ${resultRow(
        "Physical activity",
        `${v.idrs.activityPoints} points`
      )}

      ${resultRow(
        "Family history",
        `${v.idrs.familyHistoryPoints} points`
      )}

      ${resultRow(
        "<strong>Total IDRS</strong>",
        `<strong>${score} / 100</strong>`
      )}

    `;

  }


  const indicators =
    collectVolunteerIndicators();


  renderIndicatorList(
    a("volunteerAdditionalIndicators"),
    indicators
  );


  if (a("volunteerGuidance")) {

    a("volunteerGuidance").textContent =
      renderOverallGuidance(
        score,
        indicators
      );

  }

}


/* =========================================================
   VOLUNTEER — ADDITIONAL INDICATORS
========================================================= */

function collectVolunteerIndicators() {

  const v =
    abeemData.volunteer;


  const indicators = [];


  /* BLOOD GLUCOSE */

  if (
    v.glucose.taken === "no"
  ) {

    indicators.push({

      label:
        "Blood glucose",

      value:
        "Not performed",

      level:
        "clear"

    });

  }

  else if (
    v.glucose.highIndicator
  ) {

    indicators.push({

      label:
        "Blood glucose",

      value:
        `${formatGlucoseType(v.glucose.type)}: ${v.glucose.value} mg/dL — high-glucose screening indicator`,

      level:
        "warning"

    });

  }

  else {

    indicators.push({

      label:
        "Blood glucose",

      value:
        `${formatGlucoseType(v.glucose.type)}: ${v.glucose.value} mg/dL`,

      level:
        "clear"

    });

  }


  /* URINE */

  if (
    v.urine === "trace" ||
    v.urine === "positive"
  ) {

    indicators.push({

      label:
        "Urine glucose",

      value:
        formatUrineResult(
          v.urine
        ),

      level:
        "present"

    });

  }

  else {

    indicators.push({

      label:
        "Urine glucose",

      value:
        formatUrineResult(
          v.urine
        ),

      level:
        "clear"

    });

  }


  /* ANKLE */

  indicators.push({

    label:
      "Ankle measurement",

    value:
      `${v.ankle} cm — recorded separately`,

    level:
      "clear"

  });


  /* FOOT OBSERVATIONS */

  if (
    v.footObservations.includes(
      "none"
    )
  ) {

    indicators.push({

      label:
        "Leg / foot observations",

      value:
        "None observed",

      level:
        "clear"

    });

  }

  else {

    indicators.push({

      label:
        "Leg / foot observations",

      value:
        `${v.footObservations.length} finding(s) selected`,

      level:
        "present"

    });

  }


  /* FOOT CARE */

  if (
    v.footCare === "yes"
  ) {

    indicators.push({

      label:
        "Foot-care practice",

      value:
        "Regularly follows",

      level:
        "clear"

    });

  }

  else {

    indicators.push({

      label:
        "Foot-care practice",

      value:
        formatFootCare(
          v.footCare
        ),

      level:
        "present"

    });

  }


  return indicators;

}


/* =========================================================
   HELPERS
========================================================= */

function resultRow(
  label,
  value
) {

  return `

    <div class="result-row">

      <span>
        ${label}
      </span>

      <strong>
        ${value}
      </strong>

    </div>

  `;

}


function formatUrineResult(
  value
) {

  const map = {

    negative:
      "Negative",

    trace:
      "Trace",

    positive:
      "Positive",

    not_performed:
      "Not performed"

  };


  return (
    map[value] ||
    "—"
  );

}


function formatGlucoseType(
  value
) {

  const map = {

    fasting:
      "Fasting",

    random:
      "Random",

    two_hour:
      "2-hour after meal"

  };


  return (
    map[value] ||
    "—"
  );

}


function formatMedicationType(
  value
) {

  const map = {

    corticosteroids:
      "Corticosteroids / steroids",

    antipsychotics:
      "Second-generation antipsychotics",

    diuretics:
      "Thiazide diuretics",

    beta_blockers:
      "Beta blockers",

    statins:
      "Statins",

    immunosuppressants:
      "Immunosuppressants",

    hiv_protease_inhibitors:
      "HIV protease inhibitors",

    hormonal:
      "Hormonal therapies / birth control",

    fluoroquinolones:
      "Certain antibiotics"

  };


  return (
    map[value] ||
    value
  );

}


function formatSleepQuality(
  value
) {

  const map = {

    good:
      "Good / uninterrupted",

    sometimes:
      "Sometimes disturbed",

    frequently:
      "Frequently disturbed",

    difficulty:
      "Often difficulty falling or staying asleep"

  };


  return (
    map[value] ||
    value
  );

}


function formatFrequency(
  value
) {

  const map = {

    never:
      "Never",

    once:
      "Once",

    twice:
      "2 times",

    three_plus:
      "3+ times",

    no:
      "No",

    occasionally:
      "Occasionally",

    often:
      "Often",

    very_often:
      "Very often"

  };


  return (
    map[value] ||
    value ||
    "—"
  );

}


function formatSimple(
  value
) {

  if (!value) {
    return "—";
  }


  return value
    .replaceAll(
      "_",
      " "
    )
    .replace(
      /\b\w/g,
      (letter) =>
        letter.toUpperCase()
    );

}


function formatFootCare(
  value
) {

  const map = {

    yes:
      "Regularly follows foot-care practices",

    partly:
      "Partly follows foot-care practices",

    no:
      "Does not regularly follow foot-care practices",

    not_sure:
      "Not sure"

  };


  return (
    map[value] ||
    "—"
  );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
  value
) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}


/* =========================================================
   RESTART
========================================================= */

function restartScreening() {

  window.location.reload();

}


/* =========================================================
   GLOBAL CHANGE HANDLERS
========================================================= */

document.addEventListener(
  "change",
  (event) => {


    /* DIY observations */

    if (
      event.target.matches(
        '#examinePage input[name="observations"]'
      )
    ) {

      const none =
        a("noneObserved");


      if (
        event.target !== none &&
        event.target.checked &&
        none
      ) {

        none.checked =
          false;

      }

    }


    /* Volunteer observations */

    if (
      event.target.matches(
        '#volunteerFootPage input[name="vFootObservations"]'
      )
    ) {

      const none =
        a("vNoneObserved");


      if (
        event.target !== none &&
        event.target.checked &&
        none
      ) {

        none.checked =
          false;

      }

    }


    /* Sleep medication */

    if (
      event.target.matches(
        'input[name="sleepMedication"]'
      )
    ) {

      updateSleepQuestion();

    }


    /* Medication */

    if (
      event.target.matches(
        'input[name="medication"]'
      )
    ) {

      toggleMedicationBox();

    }


    /* BP */

    if (
      event.target.matches(
        "#bpStatus"
      )
    ) {

      toggleBPFields();

    }

  }
);


/* =========================================================
   INITIAL STATE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    showPage(
      "landingPage"
    );

  }
);
