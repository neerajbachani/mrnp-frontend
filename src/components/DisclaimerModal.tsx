"use client";

import { motion, AnimatePresence } from "framer-motion";
import { fonts } from "@/utils/fonts";
import { useEffect, useState } from "react";

export default function DisclaimerModal() {
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const accepted = localStorage.getItem("disclaimerAccepted");
    if (accepted === "true") {
      setShowModal(false);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    };
  }, []);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (showModal) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // Prevent layout shift
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = ""; // Reset
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    };
  }, [showModal]);

  const handleAccept = () => {
    if (isChecked) {
      setShowModal(false);
      localStorage.setItem("disclaimerAccepted", "true");
    }
  };

  if (!hasMounted) return null;
  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          {/* Background Overlay with Fade Out */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 bg-black/50"
          />

          {/* Modal with Scrollable Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0)" }}
            exit={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }} // Subtle shrink & fade
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-[90%] max-w-xl bg-white z-50 shadow-xl rounded-lg overflow-hidden"
          >
            <div className="flex flex-col max-h-screen">
              {/* Header */}
              <div className="flex justify-between items-center px-5 py-4 bg-gray-100 border-b">
                <h2
                  className={`${fonts.instrument} text-2xl md:text-3xl text-secondaryBlue font-medium`}
                >
                  Disclaimer
                </h2>
              </div>

              {/* Content (Scrollable) */}
              <div className="p-5 md:p-6 overflow-y-auto flex-1 max-h-[70vh]">
                <div className={`${fonts.inter} text-[#191919] space-y-4`}>
                  <p>
                    The Institute of Chartered Accountants of India does not
                    permit advertisement or solicitation by Chartered
                    Accountants in any form or manner. By accessing this
                    website, www.mrnp.in, you acknowledge and confirm that you
                    are seeking information relating to MRNP & Co LLP on your
                    own accord and that there has been no form of solicitation,
                    advertisement, or inducement by MRNP & Co LLP or its
                    partners or employees.
                  </p>
                  <p>
                    The contents of this website are for informational purposes
                    only and should not be interpreted as soliciting or
                    advertising. No information provided on this website should
                    be used or construed as a substitute for professional
                    advice. MRNP & Co LLP shall not be liable for consequences
                    of any action taken by relying on the information provided
                    on this website. It is recommended that the readers take
                    professional advice before acting on the same.
                  </p>
                  <p>
                    The contents of this website are the intellectual property
                    of MRNP & Co LLP.
                  </p>
                </div>

                {/* Checkbox */}
                <div className="mt-6 flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="accept"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="w-5 h-5 mt-1 rounded border-gray-300 text-primaryBlue focus:ring-primaryBlue cursor-pointer"
                  />
                  <label
                    htmlFor="accept"
                    className={`${fonts.inter} text-[#191919] leading-relaxed`}
                  >
                    I have read and understood the above and I agree with the
                    terms of usage of this website.
                  </label>
                </div>
              </div>

              {/* Footer (Fixed) */}
              <div className="p-5 bg-gray-100 border-t flex justify-end">
                <button
                  onClick={handleAccept}
                  disabled={!isChecked}
                  className={`${
                    fonts.instrument
                  } w-full md:w-auto px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${
                    isChecked
                      ? "bg-primaryBlue hover:bg-primaryBlue/90 text-white"
                      : "bg-gray-400 cursor-not-allowed text-gray-200"
                  }`}
                >
                  Proceed
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
