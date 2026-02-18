import { formatCurrency } from "../../../features/claim/utils/format";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  category: string;
  amount: number;
  isNme: boolean;
  deductionReason?: string;
}

const BillItemRow = ({
  name,
  category,
  amount,
  isNme,
  deductionReason,
}: Props) => {
  const cleanedReason = deductionReason
    ?.replace(/nme/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <>
      <tr
        className={twMerge(
          "border-b hover:bg-gray-50 transition",
          isNme && "bg-red-50",
        )}
      >
        <td className="py-2">{name}</td>
        <td>{category}</td>
        <td>{formatCurrency(amount)}</td>
        <td>
          {isNme && (
            <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded">
              NME
            </span>
          )}
        </td>
      </tr>

      {isNme && cleanedReason && (
        <tr className="bg-red-50/40 border-b">
          <td colSpan={4} className="px-4 py-2 text-xs text-red-600">
            <span className="font-medium">Reason:</span> {cleanedReason}
          </td>
        </tr>
      )}
    </>
  );
};

export default BillItemRow;
