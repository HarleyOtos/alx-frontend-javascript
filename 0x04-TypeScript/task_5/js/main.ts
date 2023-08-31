// MajorCredits interface
interface MajorCredits {
  brand: "Major";
  credits: number;
}

// MinorCredits interface
interface MinorCredits {
  brand: "Minor";
  credits: number;
}

// sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    brand: "Major",
    credits: subject1.credits + subject2.credits,
  };
}

// sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    brand: "Minor",
    credits: subject1.credits + subject2.credits,
  };
}
