import { Briefcase, ArrowRight } from 'lucide-react';

interface ExperienceProps {
  onHireMe: () => void;
}

export default function Experience({ onHireMe }: ExperienceProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 sm:p-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center">
              <Briefcase size={32} className="text-gray-400" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl sm:text-3xl text-gray-300 mb-8">
              #opentowork
            </p>

            <div className="inline-block">
              <button
                onClick={onHireMe}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Hire Me!
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            <p className="text-gray-400 mt-6">
              Eager to learn and contribute to your team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}