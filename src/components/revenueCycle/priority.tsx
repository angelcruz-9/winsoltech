import React from 'react';
import { motion } from 'framer-motion';

const priorityData = {
    title: 'Poor Quality is Costly. At Shearwater Health, Quality is Our Top Priority.',
    topData: [
        {
            id: 1,
            number: '96 %',
            desc: 'Accuracy Score Verified by 3rd Party Audits'
        },
        {
            id: 2,
            number: '1,500 +',
            desc: 'Credentialed Coders & RCM Practitioners'
        },
        {
            id: 3,
            number: '15 M +',
            desc: 'RCM Tasks Completed Annually'
        },
        {
            id: 4,
            number: '20 +',
            desc: 'Years of Management in CDI/ Coding Education'
        }
    ]
}

function Priority() {
  return (
    <section className='py-12 bg-slate-500'>
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl font-bold text-white text-center mb-8'>
                {priorityData.title}
            </h2>
            <div className='flex flex-wrap justify-center gap-8'>
                {priorityData.topData.map((item) => (
                    <motion.div
                        className='flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg w-64 text-center'
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className='text-4xl font-bold text-secondary mb-2'>
                            {item.number}
                        </h1>
                        <p className='text-sm text-gray-700'>
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Priority;
