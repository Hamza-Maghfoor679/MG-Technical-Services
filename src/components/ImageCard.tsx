import React from 'react';

type ImageInfoCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  extra?: React.ReactNode;
  imagePosition?: 'left' | 'right';
};

const ImageInfoCard: React.FC<ImageInfoCardProps> = ({
  imageSrc,
  title,
  description,
  extra,
  imagePosition = 'left',
}) => {
  const isImageRight = imagePosition === 'right';

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isImageRight ? 'md:flex-row-reverse' : ''
      } bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300`}
    >
      {/* Image */}
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Info */}
      <div className="md:w-1/2 w-full px-6 py-4 md:py-6 flex flex-col justify-center space-y-3">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
        {extra && <div className="pt-2">{extra}</div>}
      </div>
    </div>
  );
};

export default ImageInfoCard;
