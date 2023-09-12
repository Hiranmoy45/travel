'use client'
import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit,faImage,faLeaf,faProjectDiagram,faHistory , faInfo, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { AppContext } from '@/context/AppContext';

const tabAll =[
    {
      "id":100,
      "icon": faHistory,
      "iconColor": "text-secondary",
      "iconBackgroundColor": "bg-secondary/10 dark:bg-secondary-light/15",
      "title": "BagharbariChildren's ",
      "description": "ParkGuwahati, Assam"
    },
    {
      "id":101,
      "icon": faHistory,
      "iconColor": "text-info",
      "iconBackgroundColor": "bg-info/10 dark:bg-info/15",
      "title": "CASCADE FOUNTAIN",
      "description": "SILCHAR, ASSAM"
    },
    {
      "id":102,
      "icon": faHistory,
      "iconColor": "text-primary",
      "iconBackgroundColor": "bg-primary/10 dark:bg-accent-light/15",
      "title": "Diphu",
      "description": "KarbiAnglong"
    },
    {
      "id":103,
      "icon": faHistory,
      "iconColor": "text-success",
      "iconBackgroundColor": "bg-success/10 dark:bg-success/15",
      "title": "Fatashil",
      "description": ""
    },
    {
      "id":104,
      "icon": faHistory,
      "iconColor": "text-info",
      "iconBackgroundColor": "bg-info/10 dark:bg-info/15",
      "title": "Mushroom Fn",
      "description": "Guwahati, Assam"
    },
    {
      "id":105,
      "icon": faHistory,
      "iconColor": "text-warning",
      "iconBackgroundColor": "bg-warning/10 dark:bg-warning/15",
      "title": "PadumoniParkLakhimpur",
      "description": "Assam"
    },
    {
      "id":106,
      "icon": faHistory,
      "iconColor":"text-info",
      "iconBackgroundColor": "bg-info/10 dark:bg-info/15",
      "title": "Baridua",
      "description": "Meghalaya USTM"
    },
    {
      "id":107,
      "icon": faHistory,
      "iconColor": "text-error",
      "iconBackgroundColor": "bg-error/10 dark:bg-error/15",
      "title": "Dandelion Fountain",
      "description": "Aizawl , Mizoram"
    },
    {
      "id":108,
      "icon": faHistory,
      "iconColor": "text-error",
      "iconBackgroundColor": "bg-error/10 dark:bg-error/15",
      "title": "Dispur",
      "description": "Guwahati, Assam"
    },
    {
      "id":109,
      "icon": faHistory,
      "iconColor": "text-error",
      "iconBackgroundColor": "bg-error/10 dark:bg-error/15",
      "title": "Mritunjoy Mandir",
      "description": "Temple"
    },
    {
      "id":110,
      "icon": faHistory,
      "iconColor": "text-error",
      "iconBackgroundColor": "bg-error/10 dark:bg-error/15",
      "title": "Mushroom Nozzle Fountain",
      "description": "Tura, Meghalaya"
    },
    {
      "id":111,
      "icon": faHistory,
      "iconColor": "text-error",
      "iconBackgroundColor": "bg-error/10 dark:bg-error/15",
      "title": "NLR",
      "description": "Guwahati, Assam"
    },
    {
      "id":112,
      "icon": faHistory,
      "iconColor": "text-error",
      "iconBackgroundColor": "bg-error/10 dark:bg-error/15",
      "title": "PragTower",
      "description": "Guwahati, Assam"
    },
  ]
const tabAlerts =[
  
  ]
  

const ExampleComponent = ({activeTab}) => {
   const {setShowModal2}=useContext(AppContext);
    let items = [];
  if (activeTab === 'tabAll') {
    items = [...tabAll];
  } else if (activeTab === 'tabAlerts') {
    // Add code to handle other tabs or define other tab-specific data
    items = [...tabAlerts];
  }
  return (
    <div className={`space-y-4 overflow-y-auto px-4 py-4 ${activeTab === 'tabAll' ? 'is-scrollbar-hidden' : ''}`} style={{ transition: 'all 300ms ease-in-out', opacity: 1, transform: 'translate3d(0,0,0)' }}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconBackgroundColor}`}>
            <FontAwesomeIcon icon={item.icon} className={`h-4 w-4 ${item.iconColor} `} />
          </div>
          <div onClick={() => setShowModal2(false)}>
            <Link href={`/gallary/${item.id}`} className="font-medium text-slate-600 dark:text-navy-100">{item.title}</Link>
            <div className="mt-1 line-clamp-1 text-xs text-slate-400 dark:text-navy-300">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;
