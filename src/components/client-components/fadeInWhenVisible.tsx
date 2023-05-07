import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FadeInWhenVisible({ children }: any) {
  const [inViewRef, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}
