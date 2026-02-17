import type { ClaimData } from "../../types/claim.types";
import { getPatientDetails } from "../../utils/selectors";
import SectionCard from "../ui/SectionCard";
import InfoItem from "../ui/InfoItem";

interface Props {
    data: ClaimData;
}

const PatientInfo = ({ data }: Props) => {
    const patient = getPatientDetails(data);

    return (
        <SectionCard title="Patient Information">
            <div className="grid grid-cols-2 gap-6">
                <InfoItem label="Name" value={patient.patient_name} />
                <InfoItem label="DOB" value={patient.patient_dob} />
                <InfoItem label="Policy No" value={patient.patient_policy_no} />
                <InfoItem label="Email" value={patient.patient_email} />
                <InfoItem label="Mobile" value={patient.patient_mobile} />
            </div>
        </SectionCard>
    );
};

export default PatientInfo;
