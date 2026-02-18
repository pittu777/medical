export interface BillItem {
  item_id: string;
  item_name: string;
  category: string;
  final_amount: number;
  is_nme: boolean;
  deduction_reason?: string;
}

export interface Bill {
  bill: {
    bill_id: string;
    invoice_number: string;
    bill_date: string;
    net_amount: number;
    page_number: number;
  };
  items: BillItem[];
}

export interface PatientDetails {
  patient_name: string;
  patient_dob: string;
  patient_policy_no: string;
  patient_email: string;
  patient_mobile: string;
}

export interface AuditAnalysis {
  original_claimed_amount: number;
  true_total_of_bills: number;
  discrepancy_amount: number;
  discrepancy_reason: string;
  medical_legibility: {
    flagged_items: {
      item_name: string;
      flag_reason: string;
      recommendation: string;
    }[];
  };
  policy_violations: {
    rule_name: string;
    item_name: string;
    amount_impacted: number;
    recommendation: string;
  }[];
}

export interface ClaimData {
  claim_id: string;
  claim_type: string;
  status: string;
  edited_data: {
    nme_analysis: {
      bills: Bill[];
    };
    patient_summary: {
      patient_details: PatientDetails;
    };
  };
  audit_analysis: AuditAnalysis;
  segments: {
    aggregated_segments: Record<
      string,
      { page_ranges: { start: number; end: number }[] }
    >;
  };
}
