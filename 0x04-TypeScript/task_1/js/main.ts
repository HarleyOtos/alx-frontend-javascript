interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

// Task 1: Teacher interface implemented
const teacher3: Teacher = {
  firstName: 'Edward',
  lastName: 'Okafor',
  fullTimeEmployee: false,
  location: 'Abuja',
  contract: false,
};

// Task 2: Extends the teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3: printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${firstInitial}. ${formattedLastName}`;
}

// Interface for StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass instance
interface StudentClass {
  workOnHomeWork(): string;
  displayName(): string;
}

// Implementing the StudentClass
class Student implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomeWork(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
