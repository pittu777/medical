import React, { useState, useCallback } from "react";
import type { Bill } from "../types/claim.types";
import BillItemRow from "../../../shared/components/ui/BillItemRow";
import { formatCurrency } from "../utils/format";

interface Props {
  bill: Bill;
}

const BillCardComponent = ({ bill }: Props) => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const { invoice_number, bill_date, page_number, net_amount } = bill.bill;

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      <button
        onClick={toggle}
        className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-50 transition cursor-pointer"
        aria-expanded={open}
      >
        <div className="space-y-1">
          <p className="font-semibold">{invoice_number}</p>
          <p className="text-sm text-gray-500">Date: {bill_date}</p>
          <p className="text-sm text-gray-500">Page: {page_number}</p>
          <p className="text-sm font-medium">{formatCurrency(net_amount)}</p>
        </div>

        <span className="text-sm text-blue-600 font-medium">
          {open ? "Hide" : "View"}
        </span>
      </button>


      {open && (
        <div className="border-t p-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th className="py-2">Name</th>
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
                  deductionReason={item.deduction_reason}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const BillCard = React.memo(BillCardComponent);

export default BillCard;
