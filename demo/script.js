const profiles = {
  "Alex Johnson": {
    currentRole: "Operations Analyst",
    skills: ["SQL", "Excel", "Data Analysis", "Reporting"],
    role: "Data Analyst",
    match: 82,
    whyRole: [
      "Strong overlap with data querying and reporting tasks.",
      "Existing Excel and SQL skills support day-to-day analytics work.",
      "Remaining skill gaps can be closed within six months."
    ],
    gaps: ["Python", "Data Visualization", "Statistics"],
    upskill: {
      "1 Month": "Complete Python fundamentals course.",
      "3 Months": "Build dashboards using Power BI.",
      "6 Months": "Apply analytics skills to real business cases."
    },
    alternatives: ["BI Analyst (74%)", "Operations Analyst (69%)"]
  },

  "Jordan Lee": {
    currentRole: "Project Coordinator",
    skills: ["Project Planning", "Excel", "Stakeholder Communication"],
    role: "Business Analyst",
    match: 78,
    whyRole: [
      "Strong communication skills support requirements gathering.",
      "Planning experience aligns with business analysis workflows.",
      "Targeted technical upskilling enables a smooth transition."
    ],
    gaps: ["SQL", "Process Modeling"],
    upskill: {
      "1 Month": "Learn SQL basics and practice simple queries.",
      "3 Months": "Practice BPMN process modeling.",
      "6 Months": "Lead a small analytics-driven project."
    },
    alternatives: ["Product Analyst (70%)", "Operations Manager (66%)"]
  }
};

// DOM references
const select = document.getElementById("profileSelect");
const nameEl = document.getElementById("name");
const currentRoleEl = document.getElementById("currentRole");
const skillsEl = document.getElementById("skills");
const roleEl = document.getElementById("role");
const matchEl = document.getElementById("match");
const progressBar = document.getElementById("progressBar");
const whyRoleEl = document.getElementById("whyRole");
const gapsEl = document.getElementById("gaps");
const upskillEl = document.getElementById("upskill");
const alternativesEl = document.getElementById("alternatives");

// Populate dropdown
Object.keys(profiles).forEach(name => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  select.appendChild(option);
});

// Render selected profile
function renderProfile(name) {
  const p = profiles[name];

  nameEl.textContent = name;
  currentRoleEl.textContent = p.currentRole;
  roleEl.textContent = p.role;
  matchEl.textContent = p.match;

  // Animate progress bar
  progressBar.style.width = "0%";
  setTimeout(() => {
    progressBar.style.width = p.match + "%";
  }, 100);

  // Skills
  skillsEl.innerHTML = "";
  p.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsEl.appendChild(li);
  });

  // Why this role
  whyRoleEl.innerHTML = "";
  p.whyRole.forEach(reason => {
    const li = document.createElement("li");
    li.textContent = reason;
    whyRoleEl.appendChild(li);
  });

  // Gaps
  gapsEl.innerHTML = "";
  p.gaps.forEach(gap => {
    const li = document.createElement("li");
    li.textContent = gap;
    gapsEl.appendChild(li);
  });

  // Upskilling plan
  upskillEl.innerHTML = "";
  Object.entries(p.upskill).forEach(([time, action]) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${time}</strong>: ${action}`;
    upskillEl.appendChild(li);
  });

  // Alternative roles
  alternativesEl.innerHTML = "";
  p.alternatives.forEach(alt => {
    const li = document.createElement("li");
    li.textContent = alt;
    alternativesEl.appendChild(li);
  });
}

// Events
select.addEventListener("change", () => {
  renderProfile(select.value);
});

// Initial load
renderProfile(Object.keys(profiles)[0]);
