export enum SelectedPage {
  Home="home",
  Founders="founders",
  Mentors="mentors",
  Investors="investors",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}