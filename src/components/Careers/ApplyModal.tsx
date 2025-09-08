import { motion } from "framer-motion";
import { X, Upload } from "lucide-react";
import { fonts } from "@/utils/fonts";
import { useForm } from "react-hook-form";
import { Opening } from "@/types/Opening";
import ReactMarkdown from "react-markdown";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  opening: Opening;
}

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  education: string;
  currentCompany: string;
  experience: string;
  resume: FileList;
}

const formFields = [
  { name: "name", placeholder: "Full Name", type: "text", required: true },
  {
    name: "email",
    placeholder: "Email Address",
    type: "email",
    required: true,
  },
  { name: "phone", placeholder: "Phone Number", type: "tel", required: true },
  { name: "education", placeholder: "Education", type: "text", required: true },
  {
    name: "currentCompany",
    placeholder: "Current Company",
    type: "text",
    required: false,
  },
  {
    name: "experience",
    placeholder: "Years of Experience",
    type: "text",
    required: true,
  },
];

export default function ApplyModal({
  isOpen,
  onClose,
  opening,
}: ApplyModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormInputs>();

  const selectedFile = watch("resume")?.[0];

  const onSubmit = async (data: FormInputs) => {
    if (!opening) {
      return alert("Unable to apply for this job. Please try again later.");
    }
    const formData = new FormData();
    formData.append("resume", data.resume[0]); // File upload
    formData.append(
      "data",
      JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        education: data.education,
        currentCompany: data.currentCompany || "",
        experience: data.experience,
        opening: opening.documentId,
      })
    );
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        alert("Failed to submit application. Please try again later.");
      }
      alert("Application submitted successfully!");
      reset();
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit application. Please try again later.");
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Modal */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-offWhite z-50 shadow-xl overflow-y-auto"
      >
        <div className="p-2 h-full relative">
          {/* Header */}
          <div className="flex justify-end items-center">
            <button
              onClick={onClose}
              className="p-3 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="size-8" />
            </button>
          </div>

          {/* Main Container */}
          <div className="px-6 mt-1 space-y-3">
            <div>
              <h2
                className={`${fonts.baskerville} text-primaryBlue text-2xl sm:text-4xl font-semibold`}
              >
                Tell us about yourself.
              </h2>
            </div>
            <div className="w-full border border-l-0 border-r-0 border-[#d9d9d9] py-5 space-y-6">
              <table className="w-full">
                <thead>
                  <tr className={`${fonts.inter} text-secondaryBlue`}>
                    <th>Department</th>
                    <th>Position</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className={`${fonts.inter} text-[#191919] text-base sm:text-lg text-center`}
                  >
                    <td>{opening.department}</td>
                    <td>{opening.position}</td>
                    <td>{opening.city}</td>
                  </tr>
                </tbody>
              </table>
              <div className="space-y-4">
                <h3
                  className={`${fonts.inter} text-secondaryBlue font-semibold text-lg md:text-2xl`}
                >
                  Job Description:
                </h3>
                <div
                  className={`${fonts.inter} text-sm md:text-base text-[#191919]  space-y-3 pl-3`}
                >
                  <ReactMarkdown
                    components={{
                      ul: ({ children }) => (
                        <ul className="text-sm md:text-base text-[#191919] pl-7 list-disc space-y-2">
                          {children}
                        </ul>
                      ),
                    }}
                  >
                    {opening.description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="px-6 pb-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              {formFields.map((field) => (
                <div key={field.name}>
                  <input
                    {...register(field.name as keyof FormInputs, {
                      required: field.required && "This field is required",
                    })}
                    type={field.type}
                    id={field.name}
                    placeholder={`${field.placeholder}${
                      field.required ? " *" : ""
                    }`}
                    className={`${
                      fonts.inter
                    } w-full px-4 py-3 bg-white border-2 border-[#d9d9d9] focus:border-primaryBlue focus:ring-primaryBlue transition-colors placeholder:text-gray-500 ${
                      errors[field.name as keyof FormInputs] && "border-red-400"
                    } transition-colors duration-300 ease-in-out`}
                  />
                  {errors[field.name as keyof FormInputs] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name as keyof FormInputs]?.message ||
                        "This field is required"}
                    </p>
                  )}
                </div>
              ))}

              {/* File Upload Field */}
              <div>
                <label
                  htmlFor="resume"
                  className={`${
                    fonts.inter
                  } w-full px-4 py-3 bg-white border-2 border-[#d9d9d9] hover:border-primaryBlue transition-colors duration-300 ease-in-out flex items-center justify-between cursor-pointer ${
                    errors.resume && "border-red-400"
                  }`}
                >
                  <span className="text-gray-500">
                    {selectedFile ? selectedFile.name : "Upload Resume *"}
                  </span>
                  <Upload className="w-5 h-5 text-gray-500" />
                </label>
                <input
                  type="file"
                  id="resume"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  {...register("resume", {
                    required: "Resume is required",
                    validate: {
                      fileSize: (files) =>
                        !files[0] ||
                        files[0].size <= 5000000 ||
                        "File size must be less than 5MB",
                      fileType: (files) =>
                        !files[0] ||
                        [
                          "application/pdf",
                          "application/msword",
                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        ].includes(files[0].type) ||
                        "Only PDF, DOC & DOCX files are allowed",
                    },
                  })}
                />
                {errors.resume && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.resume.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={`${fonts.instrument} w-full flex justify-center items-center text-white font-semibold bg-primaryBlue px-6 py-4 hover:bg-primaryBlue/90 transition-colors duration-300 ease-in-out mt-6`}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}
