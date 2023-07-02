export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      const currentDepartment = departments[currentDepartmentIndex];
      const currentEmployee = currentDepartment[currentEmployeeIndex];

      if (currentEmployeeIndex < currentDepartment.length - 1) {
        currentEmployeeIndex++;
      } else {
        currentEmployeeIndex = 0;
        currentDepartmentIndex++;
      }

      if (currentDepartmentIndex < departments.length) {
        return { value: currentEmployee, done: false };
      }
      return { done: true };
    },
  };
}