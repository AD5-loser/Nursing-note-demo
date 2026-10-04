/*
  Nursing Notebook data
  Add or update question-paper links here.
  Shape: years[] -> subjects[] -> exams[year] -> { written, mcq }
*/

const nursingData = {
  programme: "B.Sc. in Nursing",
  years: [
    {
      id: "1st",
      label: "1st Year",
      status: "live",
      subjects: [
        { code: "B111", name: "Communicative English", category: "General", exams: {
          2024: { written: "https://drive.google.com/", mcq: "" },
          2023: { written: "https://drive.google.com/", mcq: "" }
        }},
        { code: "B124", name: "Anatomy", category: "Foundational", exams: {} },
        { code: "B125", name: "Physiology and Behavioural Science", category: "Foundational", exams: {} },
        { code: "B137", name: "Fundamentals of Nursing – I", category: "Foundational", exams: {} },
        { code: "B138", name: "Microbiology and Pathology", category: "Foundational", exams: {} },
        { code: "B139", name: "Nursing Informatics", category: "General", exams: {} },
        { code: "B140", name: "Behavioral Science and Nursing Humanities", category: "General", exams: {} }
      ]
    },
    { id: "2nd", label: "2nd Year", status: "coming-soon", subjects: [] },
    { id: "3rd", label: "3rd Year", status: "coming-soon", subjects: [] },
    { id: "4th", label: "4th Year", status: "coming-soon", subjects: [] }
  ]
};