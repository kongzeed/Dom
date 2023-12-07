const students = [
  {
    name: "Sophia",
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90],
  },
  {
    name: "Mason",
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62],
  },
  {
    name: "Isabella",
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78],
  },
  {
    name: "Liam",
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95],
  },
  {
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62],
  },
]
function getAttendanceRate(student) {
  return (
    (student.attendance.reduce(
      (total, attendance) => total + (attendance ? 1 : 0),
      0
    ) /
      student.attendance.length) *
    100
  )
}
function getAvgScore(student) {
  return (
    student.testScores.reduce((total, testScore) => total + testScore, 0) /
    student.testScores.length
  )
}
function underPerformStudents(students) {
  const underPerform = students.filter((student) => {
    return getAttendanceRate(student) < 80 && getAvgScore(student) < 70
  })
  return underPerform.map((student) => {
    return {
      name: student.name,
      attendanceRate: getAttendanceRate(student),
      avgScore: getAvgScore(student),
    }
  })
}
console.log(underPerformStudents(students))
