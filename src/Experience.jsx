import React from 'react'
import freelance from './assets/freelance.png'
import mysoft from './assets/mySoft.jpeg'
import yoma from './assets/yoma-bank-logo.png'

export default function Experience() {
    const experiences = [
        {
            company: "Freelance Projects | Remote",
            logo: <img src={freelance} alt="Freelance" className="w-20 h-30 my-10" />,
            role: "Full Stack Web Developer",
            period: "SEP 2024 - Present",
            description: "As a freelance web developer, I collaborated with multiple clients to design and build fully responsive websites and web apps using React, Node.js, and Tailwind CSS. Delivered optimized and SEO-friendly websites that improved client visibility and user engagement. Managed all phases of the development lifecycle, from requirement gathering to final deployment and maintenance."
        },
        {
            company: "MySoft Corporation Sdn Bhd | Malaysia",
            logo: <img src={mysoft} alt="MySoft Logo" />,
            role: "Junior Data Analyst(Contract)",
            period: "MAR 2024 - SEP 2024",
            description: "Skilled in extracting, cleaning, and transforming complex datasets using SQL to ensure accurate reporting and insights. Developed interactive Power BI dashboards to track key operational and financial KPIs. Supported ERP database migration projects, maintaining data accuracy, consistency, and integrity throughout the process."
        },
        {
            company: "Yoma Bank Co.Ltd | Myanmar",
            logo: <img src={yoma} alt="Yoma Bank Logo" />,
            role: "Network & Data Center Engineer",
            period: "JUL 2019 - FEB 2024",
            description: "Experienced in monitoring and maintaining enterprise network infrastructure to ensure optimal performance and uptime within a 24/7 Network Operations Center (NOC). Assisted in network configuration, cabling, and hardware installation to ensure secure and reliable connectivity across multiple branches."
        }
    ];

    return(
        <section className='py-20 text-center'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {experiences.map((exp,index)=>(
                    <div key={index} className='rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-left'>
                        <h3 className='text-2xl md:text-2xl font-semibold text-green-700'>{exp.role}</h3>
                        <div className='flex items-center space-x-2 mt-1'>
                            {exp.logo}
                            <p className='font-medium text-sm md:text-base'>{exp.company}</p>
                        </div>
                        <p className='text-sm md:text-sm mt-1 italic'>{exp.period}</p>
                        <p className='mt-4 text-sm md:text-base leading-relaxed'>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

