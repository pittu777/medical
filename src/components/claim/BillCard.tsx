import React, { useState } from "react";
import type { Bill } from "../../types/claim.types";
import { formatCurrency } from "../../utils/format";
import BillItemRow from "../ui/BillItemRow";

interface Props {
    bill: Bill;
}

const BillCard = React.memo(({ bill }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-sm border">
            <div
                onClick={() => setOpen(!open)}
                className="p-4 cursor-pointer flex justify-between items-center"
            >
                <div>
                    <p className="font-semibold">
                        {bill.bill.invoice_number}
                    </p>
                    <p className="text-sm text-gray-500">
                        {formatCurrency(bill.bill.net_amount)}
                    </p>
                </div>

                <span className="text-sm text-blue-500">
                    {open ? "Hide" : "View"}
                </span>
            </div>

            {open && (
                <div className="border-t p-4 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-left text-gray-500 border-b">
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>NME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bill.items.map((item) => (
                                <BillItemRow
                                    key={item.item_id}
                                    name={item.item_name}
                                    category={item.category}
                                    amount={item.final_amount}
                                    isNme={item.is_nme}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
});

export default BillCard;
