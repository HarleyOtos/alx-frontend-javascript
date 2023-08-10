function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    if (gradeObj) {
      return {
        ...student,
        grade: gradeObj.grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  }).filter((student) => student.location === city);
}

export default updateStudentGradeByCity;
