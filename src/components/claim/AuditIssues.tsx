import type { AuditAnalysis } from "../../types/claim.types";
import { formatCurrency } from "../../utils/format";
import SectionCard from "../ui/SectionCard";
import IssueItem from "../ui/IssueItem";

interface Props {
    audit: AuditAnalysis;
}

const AuditIssues = ({ audit }: Props) => {
    return (
        <SectionCard title="Audit Issues">
            <div>
                <h3 className="font-semibold text-red-600 mb-2">
                    Medical Legibility Issues (
                    {audit.medical_legibility.flagged_items.length})
                </h3>

                <div className="space-y-3">
                    {audit.medical_legibility.flagged_items.map(
                        (item, index) => (
                            <IssueItem
                                key={index}
                                title={item.item_name}
                                color="red"
                                className="hover:scale-[1.01] transition duration-200 cursor-pointer"
                                fields={[
                                    { label: "Reason", value: item.flag_reason },
                                    {
                                        label: "Recommendation",
                                        value: item.recommendation,
                                    },
                                ]}
                            />
                        )
                    )}
                </div>
            </div>

            {/* Policy Violations */}
            <div>
                <h3 className="font-semibold text-orange-600 mb-2">
                    Policy Violations ({audit.policy_violations.length})
                </h3>

                <div className="space-y-3">
                    {audit.policy_violations.map(
                        (violation, index) => (
                            <IssueItem
                                key={index}
                                title={violation.rule_name}
                                color="orange"
                                className="hover:scale-[1.01] transition duration-200 cursor-pointer"
                                fields={[
                                    {
                                        label: "Item",
                                        value: violation.item_name,
                                    },
                                    {
                                        label: "Amount",
                                        value: formatCurrency(
                                            violation.amount_impacted
                                        ),
                                    },
                                    {
                                        label: "Recommendation",
                                        value: violation.recommendation,
                                    },
                                ]}
                            />
                        )
                    )}
                </div>
            </div>
        </SectionCard>
    );
};

export default AuditIssues;
