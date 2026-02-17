import type { ClaimData } from "../types/claim.types";


export const getBills = (data: ClaimData) =>
  data.edited_data.nme_analysis.bills;

export const getPatientDetails = (data: ClaimData) =>
  data.edited_data.patient_summary.patient_details;
