export interface IJobItem {
  company: {
    name: string;
    logo: string;
  };
  jobType: string;
  title: string;
  time: string;
  location: string;
  salary: number;
  verified: boolean;
}
