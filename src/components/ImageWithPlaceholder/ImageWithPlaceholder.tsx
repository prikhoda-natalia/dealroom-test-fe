import React, { useState } from "react";
import { classNames } from "../../utils/classNames";

export interface ImageWithPlaceholderProps {
  src?: string;
  alt: string;
}

export const ImageWithPlaceholder = React.memo(({ src, alt }: ImageWithPlaceholderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldShowPlaceholder, setShouldShowPlaceholder] = useState(false);

  const handleError = () => {
    setIsLoaded(true);
    setShouldShowPlaceholder(true);
  };

  return (
    <div className="size-8">
      {!isLoaded && (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>
      )}
      {isLoaded && shouldShowPlaceholder && (
        <div className="flex items-center justify-center size-8 bg-[#ecf1f7] text-[#18181B]">{alt.charAt(0)}</div>
      )}
      {!shouldShowPlaceholder && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={classNames(isLoaded ? 'opacity-1' : 'opacity-0', "size-8 transition-opacity duration-500")}
        />
      )}
    </div>
  );
});
