interface Props {
    title: string;
    children: React.ReactNode;
    rightContent?: React.ReactNode;
}

const SectionCard = ({ title, children, rightContent }: Props) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{title}</h2>
                {rightContent}
            </div>

            {children}
        </div>
    );
};

export default SectionCard;
