interface Props {
    left: React.ReactNode;
    right: React.ReactNode;
}

const SplitLayout = ({ left, right }: Props) => {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 border-r overflow-auto h-screen">
                {left}
            </div>

            <div className="w-1/2 pt-0 pb-4 pr-4 pl-4 bg-gray-50 overflow-auto h-screen">
                {right}
            </div>
        </div>

    );
};

export default SplitLayout;
