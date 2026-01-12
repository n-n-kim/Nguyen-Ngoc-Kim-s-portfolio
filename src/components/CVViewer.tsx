import { ArrowLeft, Download } from 'lucide-react';

interface CVViewerProps {
  onBack: () => void;
}

export default function CVViewer({ onBack }: CVViewerProps) {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Nguyen_Ngoc_Kim_CV_v3.pdf';
    link.download = 'Nguyen_Ngoc_Kim_CV.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <iframe
            src="/Nguyen_Ngoc_Kim_CV_v3.pdf"
            className="w-full h-[calc(100vh-12rem)]"
            title="CV Preview"
          />
        </div>
      </div>
    </div>
  );
}