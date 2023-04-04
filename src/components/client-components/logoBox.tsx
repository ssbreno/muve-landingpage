'use client';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const logos = {
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

type LogoBoxProps = {
  name: 'whatsapp' | 'instagram' | 'linkedin';
  className?: string;
  size?: number;
  color?: string;
};

export function LogoBox({ name, className, size = 75, color }: LogoBoxProps) {
  const Icon = logos[name];

  return (
    <div
      className={`flex items-center justify-center rounded-full ${className}`}
    >
      <Icon size={size} color={color} />
    </div>
  );
}
