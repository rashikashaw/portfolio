export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type ClassType = {
  name: string;
  description?: string;
  image: string;
};
