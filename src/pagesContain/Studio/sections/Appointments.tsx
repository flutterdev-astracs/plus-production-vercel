"use client";

import { useEffect, useRef, useState } from "react";

const Appointments = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe) {
      // Add the script directly into the iframe's content
      const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Square Appointments</title>
          </head>
          <body>
            <script src="https://square.site/appointments/buyer/widget/eaqwzlpwocltxx/L5KJYRZ5XAMMV.js"></script>
          </body>
          </html>
        `);
        doc.close();

        // Set loading to false when iframe content finishes loading
        iframe.onload = () => setLoading(false);
      }
    }
  }, []);

  return (
    <div className="h-[550px] width-container my-10 relative">
      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Custom Iframe */}
      <iframe
        ref={iframeRef}
        title="Square Appointments"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default Appointments;
