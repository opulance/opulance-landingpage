"use client"

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { getAssetPath } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  blurDataURL?: string;
}

const OptimizedImage = ({
  src,
  fallbackSrc,
  blurDataURL,
  alt,
  ...props
}: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(getAssetPath(src));
  const [isLoading, setIsLoading] = useState(true);

  // Handle errors and loading
  const handleImageError = () => {
    if (fallbackSrc) {
      setImgSrc(getAssetPath(fallbackSrc));
    }
  };

  return (
    <div className="relative">
      <Image
        src={imgSrc}
        alt={alt || ""}
        onLoad={() => setIsLoading(false)}
        onError={handleImageError}
        loading={props.priority ? "eager" : "lazy"}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${props.className || ''}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage; 