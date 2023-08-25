// import React from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// const PdfViewer = () => {
//   // Create new plugin instance inside the function component
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   return (
//     <div className="pdf-viewer-container">
//       <Viewer
//         fileUrl="/assets/pdf-open-parameters.pdf"
//         plugins={[
//           // Register plugins
//           defaultLayoutPluginInstance,
//           // Add other plugins if needed
//         ]}
//       />
//     </div>
//   );
// };

// export default PdfViewer;








// import React from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // Create new plugin instance
// const defaultLayoutPluginInstance = defaultLayoutPlugin();

// const PdfViewer = () => {
//   return (
//     <div className="pdf-viewer-container">
//       <Viewer
//         fileUrl="/assets/pdf-open-parameters.pdf"
//         plugins={[
//           // Register plugins
//           defaultLayoutPluginInstance,
//           // Add other plugins if needed
//         ]}
//       />
//     </div>
//   );
// };

// export default PdfViewer;













import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="/path/to/your/pdf.pdf" // Replace with your PDF file path
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PdfViewer;
