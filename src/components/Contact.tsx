import {
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "/in/nn-k/",
      link: "https://www.linkedin.com/in/nn-k/",
      color: "hover:bg-cyan-600",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "n-n-kim",
      link: "https://github.com/n-n-kim",
      color: "hover:bg-cyan-700",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "contact@kimnn.com",
      link: "mailto:contact@kimnn.com",
      color: "hover:bg-cyan-600",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+84 817 723 439",
      link: "tel:+84817723439",
      color: "hover:bg-cyan-700",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Ho Chi Minh, Vietnam (GMT+7)",
      link: null,
      color: "hover:bg-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-gray-400 text-lg">
            Let's get in touch!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              target={item.link ? "_blank" : undefined}
              rel={
                item.link ? "noopener noreferrer" : undefined
              }
              className={`group bg-white/80 backdrop-blur-sm border border-cyan-200 rounded-lg p-6 transition-all shadow-md hover:shadow-lg ${
                item.link
                  ? `cursor-pointer ${item.color} hover:border-transparent hover:text-white`
                  : "cursor-default"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-cyan-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-cyan-700 group-hover:text-cyan-100 mb-1">
                    {item.label}
                  </div>
                  <div className="text-cyan-900 group-hover:text-white font-medium break-words">
                    {item.value}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-cyan-700">
            Available for internship opportunities
          </p>
        </div>
      </div>
    </div>
  );
}