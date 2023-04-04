import { useState } from 'react';
import Image from 'next/image';
import { useTransition, animated } from 'react-spring';

interface FeatureProps {
  feature: string;
}

const Feature: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="w-[1.4rem]"
        src="/assets/images/icon-correct.svg"
        alt=""
        width={90}
        height={90}
        quality={100}
      />
      <p className="text-[0.8rem] font-medium">{feature}</p>
    </div>
  );
};

interface FeatureListProps {
  title: string;
  features: string[];
  className?: string;
  setVisible?: (isVisible: boolean) => void;
  isVisible?: boolean;
}

const FeatureList: React.FC<FeatureListProps> = ({
  title,
  features,
  className,
  isVisible = false,
  setVisible = (isVisible: boolean) => {},
}) => {
  const [visible, setVisibleState] = useState(isVisible);

  const transitions = useTransition(visible ? features : [], {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500 },
  });

  const handleClick = () => {
    setVisibleState(!visible);
    setVisible(!visible);
  };

  return (
    <>
      <div className={`justify-between flex-row flex ${className}`}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muve-principal text-3xl" onClick={handleClick}>
          {visible ? 'x' : '+'}
        </p>
      </div>
      {transitions((style, item) =>
        item ? (
          <animated.div
            className="flex items-center gap-4 mt-4 z-20"
            key={item}
            style={style}
          >
            <Feature feature={item} />
          </animated.div>
        ) : null,
      )}
    </>
  );
};

export default FeatureList;
