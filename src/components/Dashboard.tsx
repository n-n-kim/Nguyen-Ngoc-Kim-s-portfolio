  import { Download, Eye } from "lucide-react";
  import avatarImg from "figma:asset/c385aecda90c1db66b5d1ccc0421f50ebc94f759.png";

  interface DashboardProps {
    onViewCV: () => void;
  }

  export default function Dashboard({
    onViewCV,
  }: DashboardProps) {
    const handleDownloadCV = () => {
      // Download CV - replace with your CV file
      const link = document.createElement("a");
      link.href = "/Nguyen_Ngoc_Kim_CV_v3.pdf";
      link.download = "Nguyen_Ngoc_Kim_CV.pdf";
      link.click();
    };

    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-8">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-4 border-gray-500"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nguyễn Ngọc Kim
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Computer Science Student | Passionate about building
              innovative solutions and learning new technologies
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onViewCV}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <Eye size={20} />
              View CV
            </button>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    );
  }