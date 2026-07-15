export const MODULES = [
  { name:'Workplace', slug:'workplace', icon:'glyph-workplace', short:'Your operational structure' },
  { name:'Scheduler', slug:'scheduler', icon:'glyph-scheduler', short:'Appointment lifecycle' },
  { name:'Planner', slug:'planner', icon:'glyph-planner', short:'Capacity & availability' },
  { name:'Queue Management', slug:'queue', icon:'glyph-queue', short:'Arrival-to-departure flow' },
  { name:'Patients', slug:'patients', icon:'glyph-patients', short:'Patient records' },
  { name:'Forms', slug:'forms', icon:'glyph-forms', short:'Digital data collection' },
  { name:'Referrals', slug:'referrals', icon:'glyph-referrals', short:'Referral lifecycle' },
  { name:'Messaging', slug:'messaging', icon:'glyph-messaging', short:'Patient communication' },
  { name:'Fax', slug:'fax', icon:'glyph-fax', short:'Intelligent document intake' },
  { name:'Automation', slug:'automation', icon:'glyph-automation', short:'Workflow orchestration' },
  { name:'Task Manager', slug:'tasks', icon:'glyph-taskmanager', short:'Operational tasks' },
  { name:'Analytics', slug:'analytics', icon:'glyph-analytics', short:'Operational intelligence' },
  { name:'Display', slug:'display', icon:'glyph-display', short:'Live patient displays' },
  { name:'Kemi', slug:'kemi', icon:'glyph-kemi', short:'AI co-pilot' },
  { name:'Patient Portal', slug:'portal', icon:'glyph-patients', short:'Patient self-service' },
  { name:'Integrations', slug:'integrations', icon:'glyph-integrations', short:'Connect your systems' },
];

export const INTEGRATION_CATS = [
  { name:'EMRs', items:[
    { name:'OSCAR Pro', slug:'oscarpro', logo:'logo-oscarpro' },
    { name:'Accuro', slug:'accuro', logo:'logo-accuro' },
    { name:'Epic', slug:'epic', logo:'logo-epic' },
    { name:'Cerner', slug:'cerner', logo:'logo-cerner' },
  ]},
  { name:'Fax', items:[
    { name:'Unite Fax', slug:'unitefax', logo:'logo-unitefax' },
    { name:'iFax', slug:'ifax', logo:'logo-ifax' },
  ]},
  { name:'Communication', items:[
    { name:'Gmail', slug:'gmail', logo:'logo-gmail' },
    { name:'Outlook', slug:'outlook', logo:'logo-outlook' },
  ]},
  { name:'Calendar', items:[
    { name:'Google Calendar', slug:'gcal', logo:'logo-gcal' },
    { name:'Outlook Calendar', slug:'outlook-cal', logo:'logo-outlook-cal' },
  ]},
  { name:'Telephony', items:[ { name:'3CX', slug:'3cx', logo:'logo-3cx' } ]},
  { name:'E-Signature', items:[ { name:'DocuSeal', slug:'docuseal', logo:'logo-docuseal' } ]},
  { name:'Custom', items:[ { name:'REST APIs', slug:'custom', logo:'' }, { name:'Webhooks', slug:'custom', logo:'' } ]},
];
