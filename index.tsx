import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import { Drawing as Drawing00 } from './drawings/drawing-00';
import { Drawing as Drawing01 } from './drawings/drawing-01';
import { Drawing as Drawing02 } from './drawings/drawing-02';
import { Drawing as Drawing03 } from './drawings/drawing-03';
import { Drawing as Drawing04 } from './drawings/drawing-04';
import { Drawing as Drawing05 } from './drawings/drawing-05';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { downloadSVG } from './lib/download-svg';

function SourceLink({ function: number_str }) {
  const url = `https://github.com/jinnycho/toad/tree/main/drawings/drawing-${number_str}.tsx`
  return (<>
  <div>
    <button onClick={downloadSVG}>Download SVG</button>
    <a class='view-source' href={url} target="_blank" rel="noopener noreferrer">View Source</a>
 </div>
  </>)
}

function App() {
  const [tabIndex, setTabIndex] = useState(5);

  return (<>
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Drawing 00</Tab>
        <Tab>Drawing 01</Tab>
        <Tab>Drawing 02</Tab>
        <Tab>Drawing 03</Tab>
        <Tab>Drawing 04</Tab>
        <Tab>Drawing 05</Tab>
      </TabList>

      <TabPanel>
        <Drawing00 />
        <SourceLink function="00"></SourceLink>
      </TabPanel>
      <TabPanel>
        <Drawing01 />
        <SourceLink function="01"></SourceLink>
      </TabPanel>
      <TabPanel>
        <Drawing02 />
        <SourceLink function="02"></SourceLink>
      </TabPanel>
      <TabPanel>
        <Drawing03 />
        <SourceLink function="03"></SourceLink>
      </TabPanel>
      <TabPanel>
        <Drawing04 />
        <SourceLink function="04"></SourceLink>
      </TabPanel>
      <TabPanel>
        <Drawing05 />
        <SourceLink function="05"></SourceLink>
      </TabPanel>
    </Tabs>
  </>)
}


const root = createRoot(document.getElementById('root')!);
root.render(<App />)
