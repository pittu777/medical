interface Props {
    claimId: string;
    status: string;
}

const Header = ({ claimId, status }: Props) => {
    const statusColor =
        status === "UNDERCLAIMED"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-green-100 text-green-700";

    return (
        <div className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold">
                Claim Review — {claimId}
            </h1>

            <span
                className={`px-3 py-1 text-xs rounded-full ${statusColor}`}
            >
                {status}
            </span>
        </div>
    );
};

export default Header;
