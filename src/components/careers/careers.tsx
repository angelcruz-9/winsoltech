import React from 'react';

interface Job {
  title: string;
  description: string;
  requirements: string[];
  location: string;
  benefits: string[];
  department: string; // Added department for more uniqueness
  color: string;     // Added color to differentiate the job cards visually
}

const jobs: Job[] = [
  {
    title: 'Registered Nurse (RN)',
    description: 'Provide patient care, assist with treatments, and monitor patient progress in a hospital setting.',
    requirements: [
      'Bachelor\'s degree in Nursing (BSN)',
      'Current RN license',
      'Excellent communication and interpersonal skills',
      'Ability to work in a fast-paced environment'
    ],
    location: 'New York, NY',
    benefits: [
      'Health insurance',
      'Retirement plan',
      'Paid time off',
      'Professional development opportunities'
    ],
    department: 'Nursing',
    color: 'bg-blue-100'
  },
  {
    title: 'Medical Billing Specialist',
    description: 'Handle insurance claims, billing procedures, and patient records in a healthcare facility.',
    requirements: [
      'High school diploma or equivalent',
      'Knowledge of healthcare billing software',
      'Attention to detail and organizational skills'
    ],
    location: 'San Francisco, CA',
    benefits: [
      'Medical, dental, and vision insurance',
      '401(k) with company match',
      'Paid vacation and holidays'
    ],
    department: 'Billing',
    color: 'bg-blue-100'
  },
  {
    title: 'Physical Therapist',
    description: 'Help patients recover from injuries or surgeries through physical exercises and therapy.',
    requirements: [
      'Doctor of Physical Therapy (DPT)',
      'State licensure as a Physical Therapist',
      'Strong interpersonal and motivational skills'
    ],
    location: 'Austin, TX',
    benefits: [
      'Competitive salary',
      'Healthcare coverage',
      'Flexible work hours'
    ],
    department: 'Rehabilitation',
    color: 'bg-blue-100'
  }
];

const Careers: React.FC = () => {
  return (
    <div className="careers-container p-4 py-8 pt-32 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Careers in U.S. Health Services</h1>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-secondary mb-8">Current Job Opportunities</h2>
        
        <div className="job-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div key={index} className={`job-item p-6 mb-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 ${job.color}`}>
              <h3 className="text-xl font-bold text-center">{job.title}</h3>
              <p className="mt-2 text-center">{job.description}</p>

              <div className="mt-4">
                <h4 className="font-semibold">Department:</h4>
                <p>{job.department}</p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Requirements:</h4>
                <ul className="list-disc pl-5">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Location:</h4>
                <p>{job.location}</p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Benefits:</h4>
                <ul className="list-disc pl-5">
                  {job.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 text-center">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;
