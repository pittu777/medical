import { formatCurrency } from "../../utils/format";
import { twMerge } from "tailwind-merge";

interface Props {
    name: string;
    category: string;
    amount: number;
    isNme: boolean;
}

const BillItemRow = ({ name, category, amount, isNme }: Props) => {
    return (
        <tr
            className={twMerge(
                "border-b hover:bg-gray-50 transition",
                isNme && "bg-red-50"
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
    );
};

export default BillItemRow;
