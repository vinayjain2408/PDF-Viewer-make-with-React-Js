// import { Viewer } from '@react-pdf-viewer/core';

// // Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // Create new plugin instance
// const defaultLayoutPluginInstance = defaultLayoutPlugin();

// <Viewer
// fileUrl='/assets/pdf-open-parameters.pdf'
// plugins={[
//     // Register plugins
//     defaultLayoutPluginInstance,
//     ...
// ]}
// />










// const renderPage: RenderPage = (props: RenderPageProps) => (
//   <>
//       {props.canvasLayer.children}
//       <div
//           style={{
//               alignItems: 'center',
//               display: 'flex',
//               height: '100%',
//               justifyContent: 'center',
//               left: 0,
//               position: 'absolute',
//               top: 0,
//               width: '100%',
//           }}
//       >
//           <div
//               style={{
//                   color: 'rgba(0, 0, 0, 0.2)',
//                   fontSize: `${8 * props.scale}rem`,
//                   fontWeight: 'bold',
//                   textTransform: 'uppercase',
//                   transform: 'rotate(-45deg)',
//                   userSelect: 'none',
//               }}
//           >
//               Draft
//           </div>
//       </div>
//       {props.annotationLayer.children}
//       {props.textLayer.children}
//   </>
// );

// <Viewer fileUrl="/assets/pdf-open-parameters.pdf" renderPage={renderPage} />;




// import React from 'react';
// import PdfViewer from './PdfViewer';

// function App() {
//   return (
//     <div className="App">
//       <PdfViewer />
//     </div>
//   );
// }

// export default App;




import React from 'react';
import './App.css';
import PdfViewer from './PdfViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PDF Viewer App</h1>
        <PdfViewer />
      </header>
    </div>
  );
}

export default App;
