// apps/web/components/PolicySummaryCard.tsx
import React from "react";

const samplePolicies = [
  {
    course: "STAT 340",
    instructor: "Prof. Ann Brown",
    grading: "Homework 25%, Midterm 35%, Final 40%",
    textbooks: ["Introduction to Statistical Inference", "R for Data Science"],
    academicIntegrity: "Collaboration on homework is allowed but all submitted work must be your own.",
    attendance: "Attendance is not mandatory but strongly encouraged.",
    officeHours: "Tuesdays 1–2pm, Thursdays 3–4pm in MSC 401."
  },
  {
    course: "CS 220",
    instructor: "Dr. Kevin Li",
    grading: "Projects 40%, Quizzes 15%, Midterm 20%, Final 25%",
    textbooks: ["Python Crash Course, 3rd Edition"],
    academicIntegrity: "All code must be written individually unless part of a designated group project. Plagiarism will result in a 0.",
    attendance: "Mandatory for labs and quizzes.",
    officeHours: "Mondays 11am–1pm, Wednesdays 2–3pm in CS 120."
  }
];

function PolicySummaryCard({ policy }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-md w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-2">{policy.course} – Course Summary</h2>
      <div className="text-sm text-gray-700 space-y-2">
        <p><strong>Instructor:</strong> {policy.instructor}</p>
        <p><strong>Grade Breakdown:</strong> {policy.grading}</p>
        <p><strong>Textbooks:</strong> {policy.textbooks.join(", ")}</p>
        <p><strong>Academic Integrity:</strong> {policy.academicIntegrity}</p>
        <p><strong>Attendance:</strong> {policy.attendance}</p>
        <p><strong>Office Hours:</strong> {policy.officeHours}</p>
      </div>
    </div>
  );
}

export default function PolicySummaryPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Course Policy Summaries</h1>
      {samplePolicies.map((policy, index) => (
        <PolicySummaryCard key={index} policy={policy} />
      ))}
    </div>
  );
}
