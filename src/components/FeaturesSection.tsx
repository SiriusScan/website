import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Public Vulnerability Database',
      subtitle: 'Stay Updated with the Latest Vulnerabilities',
      description:
        'Sirius Scan uses a public vulnerability database based on NVD and leverages AI generation to provide the most accurate and up-to-date information. With our extensive database, you can ensure that your organization is prepared to handle emerging threats and stay ahead of potential security breaches.',
      image: require('../../public/dash-dark.gif'),
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4 text-white">
      <h2 className="text-4xl text-center mb-8">
        A Tactical Vulnerability Scanner. One Dedicated To You, The Operator.
      </h2>
      <div className="grid grid-cols-1 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center py-4 px-8">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="responsive"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="py-4 px-8">
              <h3 className="text-2xl text-primary font-bold mb-2">{feature.title}</h3>
              <h4 className="text-lg text-secondary font-medium mb-4">{feature.subtitle}</h4>
              <p className="text-base">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
