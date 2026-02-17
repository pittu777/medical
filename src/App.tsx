


import SplitLayout from "./components/layout/SplitLayout";
import ClaimSummary from "./components/claim/ClaimSummary";
import PatientInfo from "./components/claim/PatientInfo";
import BillsSection from "./components/claim/BillsSection";
import AuditIssues from "./components/claim/AuditIssues";
import DocumentSegments from "./components/claim/DocumentSegments";
import type { ClaimData } from "./types/claim.types";
import data from "./data/data.json";
import { getBills } from "./utils/selectors";
import Header from "./components/layout/Header";
import PDFViewer from "./components/pdf/PDFViewer";

// import { lazy, Suspense } from "react";

const claimData = data as ClaimData;

function App() {

  // const PDFViewer = lazy(()=>import("./components/pdf/PDFViewer"));

  return (
    <SplitLayout
      left={
        // <Suspense fallback={<div>Loading PDF...</div>}>

        <PDFViewer />
        // </Suspense>
      }
      right={
        <div className="flex flex-col h-screen">

          <Header
            claimId={claimData.claim_id}
            status={claimData.status}
          />
          <div className="space-y-6">
            <ClaimSummary data={claimData} />
            <PatientInfo data={claimData} />
            <BillsSection bills={getBills(claimData)} />
            <AuditIssues audit={claimData.audit_analysis} />
            <DocumentSegments
              segments={claimData.segments.aggregated_segments}
            />
          </div>
        </div>
      }
    />
  );
}

export default App;
