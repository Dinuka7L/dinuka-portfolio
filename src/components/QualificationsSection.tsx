import React from 'react';
import { Calendar, MapPin } from 'lucide-react';


type Education = {
  degree: string;
  institutionName: string;
  institutionUrl: string;
  location: string;
  year: string;
  description: string;
  grade?: string;
  logo: string;
  gradientColors?: string[]; 
};

const educationData: Education[] = [
  {
    degree: 'Bachelor of Science in Cybersecurity',
    institutionName: 'Edith Cowan University',
    institutionUrl: 'https://www.ecu.edu.au/',
    location: 'Perth, Australia',
    year: '2022 - Present',
    description: 'Currently pursuing a degree in Cybersecurity with a focus on areas of network security and ethical hacking. My studies are shaped by practical experiences and real-world applications, allowing me to develop a strong foundation in cybersecurity.',
    grade: 'GPA: 3.52/4.0',
    logo: 'https://www.ecu.edu.au/__data/assets/image/0004/1100389/ecu-logo.png',
    gradientColors: ['#00ffc9','#2563eb', '#1e3a8a','#4b00b4'] //Colors
  },
  {
    degree: 'Bachelor of Science in Accounting and Finance',
    institutionName: 'University of Sri Jayewardenepura',
    institutionUrl: 'https://www.sjp.ac.lk/',
    location: 'Colombo, Sri Lanka',
    year: '2025 - Present',
    description: 'Currently pursuing a degree in Accounting and Finance. Gaining knowledge in how to become a great manager and a leader in the business world. My studies are focused on understanding financial systems, accounting principles, and strategic management.',
    logo: 'https://www.sjp.ac.lk/wp-content/uploads/2020/10/usjp-logo-500x500.png',
    gradientColors: ['#aa1900','#e20000', '#ffb700','#e9ad21'] //Colors
  },
  {
    degree: 'G.C.E. Advanced Level',
    institutionName: 'Richmond College',
    institutionUrl: 'http://www.richmondcollege.lk/',
    location: 'Galle, Sri Lanka',
    year: '2010 - 2023',
    description: 'Completed GCE Advanced Level Examination with a focus on Commerce stream. Developed strong analytical and problem-solving skills through extensive coursework in Accounting, Economics and IT subjects.',
    grade: 'Grade: 3As, Z-Score: 2.5195' ,
    logo: 'http://www.richmondcollege.lk/wp-content/uploads/2022/10/crest-copy.png',
    gradientColors: ['#00b4d8', '#0085fe','#c30025'] //Colors
  }
];


const QualificationsSection: React.FC = () => {
  return (
    <section id="qualifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-prose mx-auto px-4">
            My education has been a journey of figuring things out by myself, making mistakes, and pushing through even when things felt uncertain. I didn’t just follow a traditional straight path. I explored, I questioned, and I found what really drives me. Learning became something personal, something I wanted to grow through, not just pass.<br/><br/> If there’s one thing I’ve learned, it’s that you don’t need to follow anyone's path. It doesn't have to make sense to others. If you believe in what's best for you, you can carve out your own way. This can be pretty risky but well worth it if you put in the work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

            {/* Timeline items */}
            {educationData.map((item, index) => (
              <div
  key={index}
  className={`relative mb-12 md:mb-16 ${
    index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-auto' : 'md:pl-8 md:mr-auto'
  } md:w-1/2`}
>
  {/* Timeline dot */}
  <div className={`absolute top-0 ${
    index % 2 === 0 ? 'left-0 md:left-auto md:-right-3' : 'left-0 md:-left-3'
  } w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900`}></div>

  {/* Gradient Border Card */}
  <div
    className="rounded-xl p-[2px] transition-transform duration-300 hover:scale-[1.02]"
    style={{
      backgroundImage: `linear-gradient(135deg, ${(item.gradientColors ?? ['#2563eb', '#1e3a8a']).join(', ')})`
    }}
  >
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full w-full">
      <div className="flex items-center mb-3">
        <img
          src={item.logo}
          alt={`${item.institutionName} logo`}
          className="w-12 h-12 mr-3 object-contain"
        />
        <h3 className="font-bold text-xl text-gray-900 dark:text-white">{item.degree}</h3>
      </div>

      <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">
        <a href={item.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {item.institutionName}
        </a>
      </h4>

      <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
        <MapPin size={16} className="mr-1" />
        <span>{item.location}</span>
      </div>

      <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
        <Calendar size={16} className="mr-1" />
        <span>{item.year}</span>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>

      {item.grade && (
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">{item.grade}</p>
      )}
    </div>
  </div>
</div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
