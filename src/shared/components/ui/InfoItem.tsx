import { twMerge } from "tailwind-merge";

interface InfoItemProps {
  label: string;
  value: string | number;
  className?: string;
}

const InfoItem = ({ label, value, className }: InfoItemProps) => {
  return (
    <div className={twMerge("space-y-1", className)}>
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  );
};

export default InfoItem;
