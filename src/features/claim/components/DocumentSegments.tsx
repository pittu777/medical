import React from "react";
import { twMerge } from "tailwind-merge";
import { usePdfNavigation } from "../hooks/usePdfNavigation";
import SectionCard from "../../../shared/components/ui/SectionCard";

interface PageRange {
  start: number;
  end: number;
}

interface Props {
  segments: Record<string, { page_ranges: PageRange[] }>;
  className?: string;
}

const DocumentSegmentsComponent = ({ segments, className }: Props) => {
  const { scrollToPage } = usePdfNavigation();

  const handlePageClick = (page: number) => {
    scrollToPage(page);
  };

  return (
    <SectionCard title="Document Segments">
      <div className={twMerge("space-y-4", className)}>
        {Object.entries(segments).map(([key, value]) => (
          <div key={key} className="space-y-2">
            <p className="font-medium capitalize text-gray-700">
              {key.replaceAll("_", " ")}
            </p>

            <div className="flex gap-2 flex-wrap">
              {value.page_ranges.map((range, index) => (
                <button
                  key={`${key}-${index}`}
                  onClick={() => handlePageClick(range.start)}
                  className={twMerge(
                    "px-3 py-1 text-xs rounded-md transition",
                    "bg-blue-100 text-blue-700",
                    "hover:bg-blue-200 hover:shadow-sm",
                  )}
                >
                  Page {range.start}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

const DocumentSegments = React.memo(DocumentSegmentsComponent);

export default DocumentSegments;
