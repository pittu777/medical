import type { ClaimData } from "../../types/claim.types";
import { formatCurrency } from "../../utils/format";
import SectionCard from "../ui/SectionCard";
import { twMerge } from "tailwind-merge";

interface Props {
    data: ClaimData;
}

const ClaimSummary = ({ data }: Props) => {
    const audit = data.audit_analysis;

    const isDiscrepancyHigh = audit.discrepancy_amount > 0;

    const statusColor =
        data.status === "UNDERCLAIMED"
            ? "bg-yellow-100 text-yellow-700"
            : data.status === "NO_CAMOUNT"
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-700";

    return (
        <SectionCard
            title="Claim Summary"
            rightContent={
                <span
                    className={twMerge(
                        "px-3 py-1 text-xs rounded-full",
                        statusColor
                    )}
                >
                    {data.status}
                </span>
            }
        >
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Claimed</p>
                    <p className="text-lg font-semibold">
                        {formatCurrency(audit.original_claimed_amount)}
                    </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total Bills</p>
                    <p className="text-lg font-semibold">
                        {formatCurrency(audit.true_total_of_bills)}
                    </p>
                </div>

                <div
                    className={twMerge(
                        "p-4 rounded-lg",
                        isDiscrepancyHigh
                            ? "bg-red-50"
                            : "bg-green-50"
                    )}
                >
                    <p
                        className={twMerge(
                            "text-sm",
                            isDiscrepancyHigh
                                ? "text-red-500"
                                : "text-green-600"
                        )}
                    >
                        Discrepancy
                    </p>

                    <p
                        className={twMerge(
                            "text-lg font-semibold",
                            isDiscrepancyHigh
                                ? "text-red-600"
                                : "text-green-700"
                        )}
                    >
                        {formatCurrency(audit.discrepancy_amount)}
                    </p>
                </div>
            </div>

            <div
                className={twMerge(
                    "text-sm pl-3 border-l-4 text-gray-600",
                    isDiscrepancyHigh
                        ? "border-red-400"
                        : "border-green-400"
                )}
            >
                {audit.discrepancy_reason}
            </div>
        </SectionCard>
    );
};

export default ClaimSummary;
