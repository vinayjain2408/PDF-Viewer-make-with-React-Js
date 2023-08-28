import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function App() {
  const [pdfFile, setPDFFile] = useState(null);
  const [viewpdf, setViewPdf] = useState(null);
  const [annotations, setAnnotations] = useState([]);

  const fileType = ['application/pdf'];

  const handleChange = (e) => {
    let selectFile = e.target.files[0];
    if (selectFile) {
      if (selectFile && fileType.includes(selectFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectFile);
        reader.onload = (e) => {
          setPDFFile(e.target.result);
        };
      } else {
        setPDFFile(null);
      }
    } else {
      console.log('please select');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const newplugin = defaultLayoutPlugin();

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input type='file' className='form-control' onChange={handleChange} />
        <button type='submit' className='btn btn-success'>
          View PDF
        </button>
      </form>
      <h2>View PDF</h2>
      <div className='pdf-container'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {viewpdf && (
            <>
              <Viewer
                fileUrl={viewpdf}
                plugins={[newplugin]}
                annotations={annotations} // Pass annotations here
                onAnnotationChange={setAnnotations} // Update annotations
              />
            </>
          )}
          {!viewpdf && <>NO PDF</>}
        </Worker>
      </div>
    </div>
  );
}

export default App;












// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import {  defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// function App() {
//   const [pdfFile, setPDFFile] = useState(null);
//   const [viewpdf, setViewPdf] = useState(null);

//   const fileType = ["application/pdf"];
//   const handleChange = (e) => {
//     let selectFile = e.target.files[0];
//     if (selectFile) {
//       if (selectFile && fileType.includes(selectFile.type)) {
//         // if(selectFile && selectFile.type.includes('application/pdf')){
//         let reader = new FileReader();
//         reader.readAsDataURL(selectFile);
//         reader.onload = (e) => {
//           setPDFFile(e.target.result);
//         };
//       } else {
//         setPDFFile(null);
//       }
//     } else {
//       console.log("please select");
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (pdfFile !== null) {
//       setViewPdf(pdfFile);
//     } else {
//       setViewPdf(null);
//     }
//   };

//   const newplugin = defaultLayoutPlugin();

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <input type="file" className="form-control" onChange={handleChange} />
//         <button type="submit" className="btn btn-success">
//           View PDF
//         </button>
//       </form>
//       <h2>View PDF</h2>
//       <div className="pdf-container">
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//           {viewpdf && (
//             <>
//               <Viewer fileUrl={viewpdf} plugins={Object.values(newplugin)} />
//             </>
//           )}
//           {!viewpdf && <>NO PDF</>}
//         </Worker>
//       </div>
//     </div>
//   );
// }

// export default App;













// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// function App() {
//   const [pdfFile, setPDFFile] = useState(null);
//   const [viewpdf, setViewPdf] = useState(null);

//   const handleChange = (e) => {
//     let selectFile = e.target.files[0];
//     if (selectFile) {
//       if (selectFile.type.includes('application/pdf')) {
//         let reader = new FileReader();
//         reader.readAsDataURL(selectFile);
//         reader.onload = (e) => {
//           setPDFFile(e.target.result);
//         };
//       } else {
//         setPDFFile(null);
//       }
//     } else {
//       console.log('please select');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (pdfFile !== null) {
//       setViewPdf(pdfFile);
//     } else {
//       setViewPdf(null);
//     }
//   };

//   const newplugin = defaultLayoutPlugin();

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <input type="file" className="form-control" onChange={handleChange} />
//         <button type="submit" className="btn btn-success">
//           View PDF
//         </button>
//       </form>
//       <h2>View PDF</h2>
//       <div className="pdf-container">
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//           {viewpdf && (
//             <>
//               <Viewer fileUrl={viewpdf} plugins={Object.values(newplugin)} />
//             </>
//           )}
//           {!viewpdf && <>NO PDF</>}
//         </Worker>
//       </div>
//     </div>
//   );
// }

// export default App;
