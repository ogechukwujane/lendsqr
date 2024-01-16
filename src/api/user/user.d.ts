interface IUser {
  userId: string;
  organisation: string;
  fullName: string;
  phone: string;
  email: string;
  gender: string;
  maritalStatus: string;
  children: number;
  residenceType: string;
  status: string;
  createdAt: string;
  bvn: number;
  education: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officialMail: string;
    monthlyIncome: number;
    loanRepayment: number;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }[];
}
