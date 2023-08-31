// Test the functions
const majorSubject1: MajorCredits = { brand: "Major", credits: 4 };
const majorSubject2: MajorCredits = { brand: "Major", credits: 3 };

const minorSubject1: MinorCredits = { brand: "Minor", credits: 2 };
const minorSubject2: MinorCredits = { brand: "Minor", credits: 1 };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Total Major Credits:", totalMajorCredits.credits);

const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Total Minor Credits:", totalMinorCredits.credits);
