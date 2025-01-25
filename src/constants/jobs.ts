import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
export const JOBS = [
  {
    company: {
      name: 'Amazon Web Services (AWS)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    jobType: 'remote',
    title: 'Cloud Solutions Architect',
    time: '2 months ago',
    dateTime: '2024-11-26T10:00:00Z',
    location: 'Global Remote',
    salary: 185000,
    verified: true,
  },

  {
    company: {
      name: 'Microsoft Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png',
    },
    jobType: 'onsite',
    title: 'Cloud Security Specialist',
    time: '5 days ago',
    dateTime: '2025-01-21T09:15:00Z',
    location: 'Redmond, WA',
    salary: 165000,
    verified: false,
  },
  {
    company: {
      name: 'IBM Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    },
    jobType: 'remote',
    title: 'AI & Machine Learning Engineer',
    time: '1 month ago',
    dateTime: '2024-12-26T08:45:00Z',
    location: 'Remote',
    salary: 175000,
    verified: true,
  },
  {
    company: {
      name: 'Salesforce',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png',
    },
    jobType: 'hybrid',
    title: 'Cloud CRM Developer',
    time: '10 days ago',
    dateTime: '2025-01-16T11:20:00Z',
    location: 'San Francisco, CA',
    salary: 150000,
    verified: true,
  },
];
