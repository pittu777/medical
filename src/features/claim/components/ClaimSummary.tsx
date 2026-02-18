import type { ClaimData } from "../types/claim.types";
import SectionCard from "../../../shared/components/ui/SectionCard";
import { twMerge } from "tailwind-merge";
import { formatCurrency } from "../utils/format";

interface Props {
  data: ClaimData;
}

const ClaimSummary = ({ data }: Props) => {
  const { audit_analysis: audit, status, claim_id, claim_type } = data;

  const isDiscrepancyHigh = audit.discrepancy_amount > 0;

  const statusMap: Record<string, string> = {
    UNDERCLAIMED: "bg-yellow-100 text-yellow-700",
    NO_CAMOUNT: "bg-red-100 text-red-600",
    APPROVED: "bg-green-100 text-green-700",
  };

  const stats = [
    {
      label: "Claimed",
      value: formatCurrency(audit.original_claimed_amount),
      bg: "bg-gray-50",
      text: "text-gray-800",
    },
    {
      label: "Total Bills",
      value: formatCurrency(audit.true_total_of_bills),
      bg: "bg-gray-50",
      text: "text-gray-800",
    },
    {
      label: "Discrepancy",
      value: formatCurrency(audit.discrepancy_amount),
      bg: isDiscrepancyHigh ? "bg-red-50" : "bg-green-50",
      text: isDiscrepancyHigh ? "text-red-600" : "text-green-700",
    },
  ];

  return (
    <SectionCard
      title="Claim Summary"
      rightContent={
        <span
          className={twMerge(
            "px-3 py-1 text-xs rounded-full",
            statusMap[status] || "bg-gray-100 text-gray-600",
          )}
        >
          {status}
        </span>
      }
    >
      <div className="flex gap-6 text-sm text-gray-600">
        <p>
          <span className="font-medium">Claim ID:</span> {claim_id}
        </p>
        <p>
          <span className="font-medium">Type:</span> {claim_type}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className={twMerge("p-4 rounded-lg", stat.bg)}>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className={twMerge("text-lg font-semibold", stat.text)}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div
        className={twMerge(
          "text-sm pl-3 border-l-4 text-gray-600",
          isDiscrepancyHigh ? "border-red-400" : "border-green-400",
        )}
      >
        {audit.discrepancy_reason}
      </div>
    </SectionCard>
  );
};

export default ClaimSummary;
