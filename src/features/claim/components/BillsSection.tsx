import type { Bill } from "../types/claim.types";
import BillCard from "./BillCard";

interface Props {
  bills: Bill[];
}

const BillsSection = ({ bills }: Props) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Bills</h2>
      {bills.map((bill) => (
        <BillCard key={bill.bill.bill_id} bill={bill} />
      ))}
    </div>
  );
};

export default BillsSection;
