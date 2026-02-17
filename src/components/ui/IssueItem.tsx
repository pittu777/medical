import { twMerge } from "tailwind-merge";

interface IssueItemProps {
    title: string;
    fields: { label: string; value: string | number }[];
    color?: "red" | "orange" | "green";
    className?: string;
}

const IssueItem = ({
    title,
    fields,
    color = "red",
    className,
}: IssueItemProps) => {
    const colorMap = {
        red: "border-red-400 bg-red-50",
        orange: "border-orange-400 bg-orange-50",
        green: "border-green-400 bg-green-50",
    };

    return (
        <div
            className={twMerge(
                "text-sm border-l-4 pl-4 py-3 rounded-md",
                colorMap[color],
                className
            )}
        >
            <p className="font-semibold mb-2">{title}</p>

            <div className="space-y-1">
                {fields.map((field, index) => (
                    <div key={index} className="flex gap-2">
                        <span className="text-gray-500 min-w-27.5">
                            {field.label}:
                        </span>
                        <span className="font-medium text-gray-800">
                            {field.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IssueItem;
