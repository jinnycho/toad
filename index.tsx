import React from 'react';
import { createRoot } from "react-dom/client";
import { Drawing as Drawing00 } from './drawings/drawing-00';
import { Drawing as Drawing01 } from './drawings/drawing-01';
import { Drawing as Drawing02 } from './drawings/drawing-02';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const root = createRoot(document.getElementById('root')!);
root.render(
  <Tabs>
    <TabList>
      <Tab>Drawing 00</Tab>
      <Tab>Drawing 01</Tab>
      <Tab>Drawing 02</Tab>
    </TabList>

    <TabPanel>
      <Drawing00 />
    </TabPanel>
    <TabPanel>
      <Drawing01 />
    </TabPanel>
    <TabPanel>
      <Drawing02 />
    </TabPanel>
  </Tabs>
)
