import type { ClaimData } from "../../types/claim.types";
import { getPatientDetails } from "../../utils/selectors";
import SectionCard from "../ui/SectionCard";
import InfoItem from "../ui/InfoItem";

interface Props {
  data: ClaimData;
}

const PatientInfo = ({ data }: Props) => {
  const patient = getPatientDetails(data);

  const fields = [
    { label: "Name", value: patient.patient_name },
    { label: "DOB", value: patient.patient_dob },
    { label: "Policy No", value: patient.patient_policy_no },
    { label: "Email", value: patient.patient_email },
    { label: "Mobile", value: patient.patient_mobile },
  ];

  return (
    <SectionCard title="Patient Information">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map(({ label, value }) => (
          <InfoItem
            key={label}
            label={label}
            value={value || "-"}
          />
        ))}
      </div>
    </SectionCard>
  );
};

export default PatientInfo;
