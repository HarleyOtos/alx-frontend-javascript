interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Edward',
  lastName: 'Okafor',
  fullTimeEmployee: false,
  location: 'Abuja',
  contract: false,
};

console.log(teacher3);