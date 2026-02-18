import { AuditIssues, BillsSection, ClaimSummary, DocumentSegments, PatientInfo } from './../features/claim/components/index';
import Header from '../shared/components/layout/Header'
import PDFViewer from '../shared/components/pdf/PDFViewer'
import SplitLayout from '../shared/components/layout/SplitLayout'
import type { ClaimData } from '../features/claim/types/claim.types'
import data from "./../data/data.json";
import { getBills } from '../features/claim/utils/selectors'

const ClaimReviewPage = () => {
    const claimData = data as ClaimData;
    return (
        <>
            <SplitLayout
                left={
                    // <Suspense fallback={<div>Loading PDF...</div>}>

                    <PDFViewer />
                    // </Suspense>
                }
                right={
                    <div className="flex flex-col h-screen">
                        <Header claimId={claimData.claim_id} status={claimData.status} />
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
        </>
    )
}

export default ClaimReviewPage