import type { AuditAnalysis } from "../../types/claim.types";
import { formatCurrency } from "../../utils/format";
import SectionCard from "../ui/SectionCard";
import IssueItem from "../ui/IssueItem";

interface Props {
  audit: AuditAnalysis;
}

const AuditIssues = ({ audit }: Props) => {
  const sections = [
    {
      title: "Medical Legibility Issues",
      color: "red" as const,
      items: audit.medical_legibility.flagged_items.map((item) => ({
        title: item.item_name,
        fields: [
          { label: "Reason", value: item.flag_reason },
          {
            label: "Recommendation",
            value: item.recommendation,
          },
        ],
      })),
    },
    {
      title: "Policy Violations",
      color: "orange" as const,
      items: audit.policy_violations.map((violation) => ({
        title: violation.rule_name,
        fields: [
          { label: "Item", value: violation.item_name },
          {
            label: "Amount",
            value: formatCurrency(violation.amount_impacted),
          },
          {
            label: "Recommendation",
            value: violation.recommendation,
          },
        ],
      })),
    },
  ];

  return (
    <SectionCard title="Audit Issues">
      {sections.map((section) => (
        <div key={section.title} className="mb-6">
          <h3
            className={`font-semibold mb-2 ${
              section.color === "red" ? "text-red-600" : "text-orange-600"
            }`}
          >
            {section.title} ({section.items.length})
          </h3>

          <div className="space-y-3">
            {section.items.map((item, index) => (
              <IssueItem
                key={`${section.title}-${index}`}
                title={item.title}
                color={section.color}
                className="hover:scale-[1.01] transition duration-200"
                fields={item.fields}
              />
            ))}
          </div>
        </div>
      ))}
    </SectionCard>
  );
};

export default AuditIssues;
