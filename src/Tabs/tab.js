import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import './tab.css';
import 'react-web-tabs/dist/react-web-tabs.css';

function ReactTabs(){
    return (
        <div className='Tabs'>
            <Tabs
            defaultTab="Tab1"
            onChange={(tabId) => { console.log(tabId) }}
        >
            <TabList className='tablist'>
            <Tab tabFor="Tab1">Tab 1</Tab>
            <Tab tabFor="Tab2">Tab 2</Tab>
            <Tab tabFor="Tab3">Tab 3</Tab>
            </TabList>
            <TabPanel tabId="Tab1">
            <p>Tab 1 content</p>
            </TabPanel>
            <TabPanel tabId="Tab2">
            <p>Tab 2 content</p>
            </TabPanel>
            <TabPanel tabId="Tab3">
            <p>Tab 3 content</p>
            </TabPanel>
        </Tabs>
        </div>
    )
}
export default ReactTabs;