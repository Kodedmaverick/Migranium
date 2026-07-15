// Auto-ported from the design prototype. Feature module content.
export const MODULES_DATA = [
      {
        slug:'workplace', name:'Workplace', icon:'/assets/glyph-workplace.png', kicker:'Administrative foundation',
        tagline:'Model your organization once — locations, providers, rooms, services, team members, and permissions — and every other module builds on it.',
        shot:'/assets/screen-workplace.png',
        overviewHead:'The administrative backbone every workflow depends on',
        overview:[
          'Workplace is where organizations define their operational structure and create the framework that powers scheduling, patient management, queue management, automation, messaging, and analytics. Every appointment scheduled, patient checked in, and automation executed depends on the configuration established here.',
          'Rather than hardcoding a rigid structure, Workplace provides configurable building blocks. A provider belongs to one or more locations, a room may belong to a location, a service can be available in several locations — relationships that let organizations of any size model how they actually operate.'
        ],
        principles:[
          {title:'One source of truth',body:'Every module references the same provider, service, and location records — no duplicate configuration.'},
          {title:'Relationship-driven',body:'Entities connect naturally: providers to locations, rooms to services, partners to referrals.'},
          {title:'Scalable by design',body:'From a single three-provider clinic to dozens of locations across cities, without different software.'},
          {title:'Centrally governed',body:'Role-based permissions are managed once and reflected everywhere across the platform.'}
        ],
        capabilities:[
          {title:'Locations',body:'Physical or virtual places where care is delivered — with hours, time zones, assigned providers and services.'},
          {title:'Rooms',body:'First-class operational resources. Booking checks room availability alongside providers to prevent double-booking.'},
          {title:'Providers',body:'Authoritative professional records: licensing, specialties, languages, working hours, assigned services and rooms.'},
          {title:'Services',body:'What patients actually book — duration, forms, reminders, rooms, and capacity rules, configured once per service.'},
          {title:'Roles & Permissions',body:'Granular, role-based access grouped into roles like Administrator, Receptionist, Physician, and Manager.'},
          {title:'Appointment Settings',body:'Organization-wide booking windows, cancellation policies, buffers, lead times, and reminder timing.'}
        ],
        benefits:['Consistency across every module','Add clinics or providers without redesigning workflows','Reuse resources across workflows','Centrally managed security','Change once, reflected everywhere','Accurate real-world modeling'],
        related:['scheduler','planner','queue','analytics','automation']
      },
      {
        slug:'scheduler', name:'Scheduler', icon:'/assets/glyph-scheduler.png', kicker:'Operational engine',
        tagline:'The single source of truth for every appointment — from the moment a booking is requested to the point it is completed, cancelled, or rescheduled.',
        shot:'/assets/screen-scheduler.png',
        overviewHead:'Scheduling as intelligent orchestration, not a calendar',
        overview:[
          'Every appointment created in Migranium passes through the Scheduler, whether it originates from a receptionist, a provider, the Patient Portal, an automation, or an integration. It coordinates providers, services, rooms, locations, patients, forms, queues, reminders, and automations.',
          'Unlike a traditional appointment book, the Scheduler validates provider availability, service compatibility, operating hours, and organizational rules before confirming any booking — then automatically initiates the downstream workflows each appointment requires.'
        ],
        principles:[
          {title:'Accuracy',body:'Every booking is validated against availability, service compatibility, hours, and organizational rules.'},
          {title:'Flexibility',body:'Fixed or variable durations, referral-gated booking, or full self-service — configured, not customized.'},
          {title:'Automation',body:'Creating an appointment triggers confirmations, forms, reminders, tasks, and room reservations automatically.'},
          {title:'Connected',body:'Deeply integrated with nearly every module, so appointments become the start of many workflows.'}
        ],
        capabilities:[
          {title:'Multiple calendar views',body:'Daily, weekly, monthly, provider, location, and room views with drag-to-reschedule and live conflict validation.'},
          {title:'Structured creation',body:'Guided workflow selects patient, service, provider, location, date, time, and room — validating each step.'},
          {title:'Full lifecycle',body:'Pending, Scheduled, Confirmed, Checked In, In Progress, Completed, Cancelled, Rescheduled, and No Show states.'},
          {title:'Reminder management',body:'Configurable reminder cadence — 7-day, 3-day, 24-hour, same-day — delivered by email, SMS, or push.'},
          {title:'Forms on booking',body:'Automatically requests the right intake forms based on service, appointment type, provider, or location.'},
          {title:'Queue handoff',body:'On check-in, the appointment transitions into Queue Management, then returns on completion.'}
        ],
        benefits:['Centralized management across locations','Fewer conflicts via automated validation','Faster booking for staff and patients','Improved provider utilization','Consistent reminder workflows','Comprehensive audit trails'],
        related:['planner','queue','forms','messaging','automation','analytics']
      },
      {
        slug:'planner', name:'Planner', icon:'/assets/glyph-planner.png', kicker:'Capacity planning',
        tagline:'Define how appointment availability is created, distributed, and optimized — before bookings ever occur.',
        shot:null, panelChips:['Provider & service preferences','Weighted priority allocation','Configurable capacity release'],
        overviewHead:'Plan availability before scheduling begins',
        overview:[
          'While the Scheduler manages appointments as they are booked, Planner defines the operational framework that shapes availability. Administrators configure provider preferences, service capacity, booking rules, and intelligent appointment allocation in advance.',
          'This separation is fundamental to Migranium\u2019s scheduling philosophy: Planner creates opportunity, the Scheduler executes it. The result is predictable, scalable scheduling behaviour across every location and provider.'
        ],
        principles:[
          {title:'Planning before scheduling',body:'Define who is available, when, for which services, and how much capacity to reserve — before slots open.'},
          {title:'Organizational flexibility',body:'Prioritize urgent referrals, reserve follow-up capacity, or dedicate providers to services on given days.'},
          {title:'Capacity as a resource',body:'Every slot is managed capacity to be reserved and distributed — not a passive calendar space.'},
          {title:'Separation of duties',body:'Planner creates availability; Scheduler consumes it. Each evolves independently.'}
        ],
        capabilities:[
          {title:'Provider preferences',body:'Working days and hours, breaks, intervals, buffers, virtual availability, and maximum daily appointments.'},
          {title:'Booking rules',body:'Earliest and latest booking dates, minimum notice, same-day permissions, and cancellation windows.'},
          {title:'Weighted priority allocation',body:'Assign weighted scores to intake responses so higher-priority patients access reserved capacity first.'},
          {title:'Priority levels',body:'Reserve configurable percentages of capacity across Urgent, High, Medium, and Routine tiers.'},
          {title:'Capacity release rules',body:'Reserved slots automatically release to routine patients if unused within a configured window.'},
          {title:'Schedule optimization',body:'Recommends redistributing hours, releasing unused slots, and balancing provider workloads.'}
        ],
        benefits:['Separates planning from scheduling','Balances provider workloads','Reduces patient wait times','Prioritizes patients by rules','Prevents underutilized capacity','Supports multi-location operations'],
        related:['scheduler','workplace','queue','analytics','kemi']
      },
      {
        slug:'queue', name:'Queue Management', icon:'/assets/glyph-queue.png', kicker:'Live patient flow',
        tagline:'Orchestrate every patient journey from arrival to departure — check-in, prioritization, routing, rooms, and completion.',
        shot:null, panelChips:['Real-time live queue','Flexible prioritization','Room & provider routing'],
        overviewHead:'The operational command center for patient flow',
        overview:[
          'The Scheduler determines when a patient should arrive; Queue Management determines what happens once they do. It gives staff a real-time view of every patient progressing through the clinic while providers see their workload and administrators monitor efficiency.',
          'Unlike a static waiting list, the queue continuously responds to arrivals, status changes, provider availability, and room occupancy — adapting to walk-ins, late arrivals, and urgent priorities as the day unfolds.'
        ],
        principles:[
          {title:'Real-time operations',body:'Every movement, action, or update instantly refreshes the queue — no manual refresh needed.'},
          {title:'Role-based visibility',body:'Reception, providers, managers, and patients each see the information relevant to them.'},
          {title:'Flexibility',body:'Handles early and late arrivals, walk-ins, emergencies, provider delays, and room changes.'},
          {title:'Efficiency',body:'Reduces idle time for patients, providers, and rooms through coordinated flow.'}
        ],
        capabilities:[
          {title:'Multiple entry points',body:'Appointment check-in, walk-in registration, and provider-initiated encounters all feed one live queue.'},
          {title:'Clear statuses',body:'Checked In, Waiting, Ready, Called, In Consultation, Completed, and Left Without Being Seen.'},
          {title:'Prioritization strategies',body:'First-come, appointment-time, clinical priority, provider-specific, or service-based queues.'},
          {title:'Room assignment',body:'Assign available rooms on call, with duplicate-assignment prevention and live occupancy visibility.'},
          {title:'Display integration',body:'Powers waiting-room displays directly, updating patient-facing screens in real time.'},
          {title:'Forms check',body:'Alerts staff when required intake forms remain outstanding before consultation.'}
        ],
        benefits:['Reduced patient waiting times','Clear visibility into operations','Better provider and room use','Faster response to disruptions','Consistent walk-in handling','Rich operational analytics'],
        related:['scheduler','display','forms','messaging','automation','analytics']
      },
      {
        slug:'patients', name:'Patients', icon:'/assets/glyph-patients.png', kicker:'Single source of truth',
        tagline:'A complete, longitudinal operational record for every individual receiving care through your organization.',
        shot:null, panelChips:['One patient, one record','Connected across modules','Privacy by design'],
        overviewHead:'The operational hub of every patient journey',
        overview:[
          'The Patients module consolidates demographics, appointments, forms, communications, referrals, documents, reviews, and portal access into one unified profile. Every interaction a patient has with the organization eventually becomes part of their record.',
          'Unlike a simple directory, Migranium treats the patient profile as an operational hub — every module either contributes information to it or consumes information from it, eliminating duplicate entry and improving continuity of care.'
        ],
        principles:[
          {title:'One patient, one record',body:'A single authoritative profile regardless of how many appointments, referrals, or providers are involved.'},
          {title:'Longitudinal care',body:'A complete history of interactions over time, preserving both current needs and historical context.'},
          {title:'Connected information',body:'Appointments, forms, referrals, tasks, and documents all link directly to the patient profile.'},
          {title:'Privacy by design',body:'Role-based access and full audit logging on every view and modification.'}
        ],
        capabilities:[
          {title:'New Intake',body:'Guided registration from self-service, booking, referral, walk-in, or integration — converted into a full record.'},
          {title:'All Patients directory',body:'Fast search by name, MRN, date of birth, phone, email, health card, or referral number.'},
          {title:'Patient Categories',body:'Configurable classifications (New, Returning, Pediatric, Chronic Care, VIP) to drive filters and automation.'},
          {title:'Patient Reviews',body:'Centralized satisfaction feedback from surveys, portal, email, and SMS with trends over time.'},
          {title:'Email Health',body:'Deliverability monitoring — delivered, bounced, invalid, and unsubscribed — to keep contact data accurate.'},
          {title:'Portal Settings',body:'Per-patient portal activation, credentials, authentication, and communication preferences.'}
        ],
        benefits:['A single source of truth','Eliminates duplicate records','Supports continuity of care','Centralizes every interaction','Improves cross-team collaboration','Strengthens privacy and compliance'],
        related:['scheduler','forms','referrals','messaging','portal','kemi']
      },
      {
        slug:'forms', name:'Forms', icon:'/assets/glyph-forms.png', kicker:'Digital data collection',
        tagline:'Intelligent, configurable digital forms — created once and used everywhere across the patient journey.',
        shot:null, panelChips:['Visual form builder','Conditional logic','Electronic consent & signatures'],
        overviewHead:'Replace paperwork with intelligent, integrated forms',
        overview:[
          'The Forms module lets organizations replace paper processes with digital forms that are created, distributed, completed, reviewed, and stored within the patient\u2019s record. It connects directly with appointments, referrals, automation, messaging, intake, and consent.',
          'Rather than treating forms as isolated documents, Migranium treats them as intelligent operational assets: a booked appointment requests an intake form, completion updates the patient profile, and automation sends a confirmation — all without manual coordination.'
        ],
        principles:[
          {title:'Flexibility',body:'Build forms that reflect your specialty and workflows — no software customization required.'},
          {title:'Reusability',body:'Assign one form to services, providers, locations, appointment types, or referral workflows.'},
          {title:'Integration',body:'Forms never exist alone — they trigger and respond to workflows across the platform.'},
          {title:'Security',body:'Every submission is encrypted, stored, and linked to the right patient under role-based access.'}
        ],
        capabilities:[
          {title:'Form Builder',body:'Text, number, date, dropdowns, checkboxes, file upload, signature, address, rating scales, and sections.'},
          {title:'Conditional logic',body:'Questions appear dynamically based on previous answers for a cleaner completion experience.'},
          {title:'Form assignment',body:'Associate forms with services, providers, locations, appointment types, and referral pathways.'},
          {title:'Multi-channel completion',body:'Portal, confirmation links, email, SMS, in-clinic tablets, or staff-assisted entry.'},
          {title:'Consent management',body:'Legally recognized digital signatures for treatment, privacy, telehealth, and procedure consent.'},
          {title:'Version management',body:'Update forms without losing historical submissions — old records preserve original questions.'}
        ],
        benefits:['Eliminates paper documentation','Improves patient convenience','Reduces manual data entry','Supports electronic consent','Standardizes documentation','Improves provider preparedness'],
        related:['scheduler','patients','referrals','messaging','automation','portal']
      },
      {
        slug:'referrals', name:'Referrals', icon:'/assets/glyph-referrals.png', kicker:'Referral lifecycle',
        tagline:'Receive, process, assign, track, and complete both incoming and outgoing referrals in one connected workspace.',
        shot:null, panelChips:['Incoming & outgoing','AI-assisted intake from fax','End-to-end tracking'],
        overviewHead:'Referrals as connected workflows, not paperwork',
        overview:[
          'The Referrals module manages the complete lifecycle of patient referrals. Rather than treating them as isolated documents, Migranium integrates referrals into the patient journey — connected to patients, providers, appointments, forms, tasks, communications, and analytics.',
          'Staff monitor referral status in real time, assign referrals to the right providers or services, communicate with patients, collect documentation, and schedule appointments — all from a single operational dashboard.'
        ],
        principles:[
          {title:'End-to-end visibility',body:'Every referral is traceable from receipt to completion, with clear ownership and outstanding actions.'},
          {title:'Workflow-oriented',body:'A referral is a sequence of activities — review, verify, assign, book, communicate, close.'},
          {title:'Connected care',body:'Referrals become part of the permanent patient record and interact with appointments and forms.'},
          {title:'Automation first',body:'Patient creation, assignment, intake requests, and notifications happen automatically.'}
        ],
        capabilities:[
          {title:'Manage Referrals dashboard',body:'Monitor every referral with filtering by provider, service, location, source, date, status, and priority.'},
          {title:'Incoming referrals',body:'Arrive via fax, integrations, email, or manual entry — matched to patients and routed to teams.'},
          {title:'Outgoing referrals',body:'Track requests to specialists, imaging, labs, and community partners through to completion.'},
          {title:'Standardized statuses',body:'Received, Pending Review, Assigned, Patient Contacted, Scheduled, In Progress, Completed, Closed.'},
          {title:'Assignment',body:'Manual, rule-based, or AI-assisted routing by specialty, location, availability, or capacity.'},
          {title:'Patient communication',body:'Automatic updates from receipt through appointment invitation to referral completion.'}
        ],
        benefits:['Centralized referral management','Improved referral visibility','Reduced processing delays','Eliminates lost referrals','Automates routine activities','Complete traceability'],
        related:['fax','patients','scheduler','forms','automation','analytics']
      },
      {
        slug:'messaging', name:'Messaging', icon:'/assets/glyph-messaging.png', kicker:'Communication layer',
        tagline:'Timely, personalized, reliable communication across the entire patient journey — automated and consistent.',
        shot:null, panelChips:['Reusable templates','Dynamic personalization','Campaigns & delivery tracking'],
        overviewHead:'The organization\u2019s central communication infrastructure',
        overview:[
          'The Messaging module connects every operational module, ensuring patients, providers, and staff receive timely, relevant information. Rather than a standalone email or SMS tool, it integrates directly with appointments, patients, forms, referrals, automation, and the portal.',
          'Whether triggered manually by staff or automatically by workflows, every interaction is tracked, consistent, and connected to the patient\u2019s operational history — replacing fragmented, disconnected communication systems.'
        ],
        principles:[
          {title:'Contextual',body:'Messages relate to the patient\u2019s current interaction — confirmations, reminders, referral updates, follow-ups.'},
          {title:'Consistent',body:'Templates keep branding, tone, formatting, and required information standardized organization-wide.'},
          {title:'Automation first',body:'Repetitive communication is sent automatically whenever predefined events occur.'},
          {title:'Personalized',body:'Dynamic variables insert patient, provider, appointment, and location details without manual editing.'}
        ],
        capabilities:[
          {title:'Templates',body:'A reusable library — confirmations, reminders, cancellations, intake requests, referral updates, surveys.'},
          {title:'Dynamic variables',body:'Auto-populate patient name, provider, appointment date/time, location, referral number, and portal links.'},
          {title:'Campaigns',body:'Targeted group communication segmented by location, provider, service history, age, or portal status.'},
          {title:'Automated messaging',body:'Triggered by booking, confirmation, cancellation, referral receipt, form assignment, and more.'},
          {title:'Communication history',body:'Every message becomes part of the patient record with status, template, and triggering event.'},
          {title:'Delivery monitoring',body:'Queued, Sent, Delivered, Opened, Failed, Bounced, and Unsubscribed statuses feed analytics.'}
        ],
        benefits:['Centralizes patient communication','Standardizes messaging','Improves patient engagement','Reduces missed appointments','Eliminates repetitive work','Measures effectiveness'],
        related:['scheduler','patients','forms','referrals','automation','analytics']
      },
      {
        slug:'fax', name:'Fax', icon:'/assets/glyph-fax.png', kicker:'Intelligent document intake',
        tagline:'Centralized, AI-assisted fax intake and outbound management — turning documents into actionable workflows.',
        shot:null, panelChips:['OCR + AI classification','Automatic patient matching','Referral detection & routing'],
        overviewHead:'Fax, transformed into an intelligent operational process',
        overview:[
          'Fax remains one of healthcare\u2019s most widely used communication methods. Rather than treating it as an external channel, Migranium integrates fax directly into the platform — every fax can be linked to patients, providers, referrals, appointments, tasks, and automations.',
          'By combining OCR, AI, workflow automation, and document management, the Fax module turns a manual administrative burden into a centralized, digital-first workflow where staff review AI suggestions rather than sorting paperwork.'
        ],
        principles:[
          {title:'Digital first',body:'Documents stay digital throughout their lifecycle — review, annotate, classify, and route without printing.'},
          {title:'Operational context',body:'A fax is rarely just a document; it\u2019s automatically associated with its patient, referral, or provider.'},
          {title:'Intelligent processing',body:'AI identifies document type, patient, sender, urgency, and referral information for review.'},
          {title:'Security',body:'Strict access controls, encryption, and audit logging throughout the document lifecycle.'}
        ],
        capabilities:[
          {title:'Manager workspace',body:'A single dashboard for incoming, outgoing, failed, and pending faxes with status and linked records.'},
          {title:'Incoming processing',body:'OCR extracts text, AI analyzes, patient matching and referral detection begin, then staff review.'},
          {title:'Outgoing faxes',body:'Send referral letters, forms, notes, reports, and PDFs directly — tracked until delivery is confirmed.'},
          {title:'Document classification',body:'Referral, lab result, consult report, imaging, prescription, insurance, and administrative categories.'},
          {title:'Patient matching',body:'Matches by name, date of birth, MRN, health card, and contact info — with candidate confirmation.'},
          {title:'Referral integration',body:'Recognized referrals auto-create records, attach documents, assign services, and notify coordinators.'}
        ],
        benefits:['Eliminates paper fax workflows','Centralizes all fax communication','Accelerates referral processing','Improves patient matching accuracy','Strengthens security and compliance','Complete auditability'],
        related:['referrals','patients','tasks','automation','kemi','analytics']
      },
      {
        slug:'automation', name:'Automation', icon:'/assets/glyph-automation.png', kicker:'Workflow orchestration',
        tagline:'Event-driven workflows that eliminate repetitive administrative work across the entire platform.',
        shot:'/assets/screen-automation.png',
        overviewHead:'The orchestration engine that connects every module',
        overview:[
          'The Automation module lets organizations define workflows once and let the platform execute them whenever conditions are met. It continuously monitors activity across Migranium and runs configurable business rules in response.',
          'Unlike a simple notification system, Automation is event-driven and cross-module. A single trigger can initiate actions involving appointments, patients, forms, referrals, messaging, tasks, AI agents, and external integrations — without any user intervention.'
        ],
        principles:[
          {title:'Event-driven',body:'Everything begins with an event: patient created, appointment booked, form submitted, fax processed.'},
          {title:'Configurable',body:'Administrators define rules that reflect their own operational processes, across any specialty.'},
          {title:'Transparent',body:'Users can see what triggered a workflow, which actions ran, and whether execution succeeded.'},
          {title:'Scalable',body:'Reusable templates and centralized management keep hundreds of workflows maintainable.'}
        ],
        capabilities:[
          {title:'Visual builder',body:'Compose trigger → conditions → branching actions with IF/Else matching — no code required.'},
          {title:'Triggers',body:'Appointment booked, patient registered, referral received, form completed, queue delay detected, and more.'},
          {title:'Conditions',body:'Continue only when rules match — new patient, specific service, urgent priority, or given location.'},
          {title:'Actions',body:'Send email and SMS, create tasks, update records, assign referrals, notify providers, call external APIs.'},
          {title:'Scope control',body:'Apply any automation to all locations and providers, or to selected ones only.'},
          {title:'Monitoring',body:'Track successful, failed, and skipped runs, retry attempts, and execution history for reliability.'}
        ],
        benefits:['Eliminates repetitive work','Reduces human error','Standardizes processes','Accelerates workflows','Coordinates across modules','Measurable efficiency gains'],
        related:['scheduler','messaging','referrals','fax','tasks','kemi']
      },
      {
        slug:'tasks', name:'Task Manager', icon:'/assets/glyph-taskmanager.png', kicker:'Work execution',
        tagline:'Centralized management for all non-appointment work — created, assigned, tracked, and audited in one place.',
        shot:null, panelChips:['Every task has an owner','Auto-generated from events','Cross-department collaboration'],
        overviewHead:'The work execution layer of Migranium',
        overview:[
          'While the Scheduler manages time-based patient encounters, Task Manager manages everything else that requires human action — reviewing referrals, processing faxes, verifying insurance, following up with patients, and reviewing results.',
          'Rather than a standalone to-do list, Task Manager connects directly with patients, appointments, referrals, faxes, messaging, automation, and AI, ensuring work is always connected to its operational context and never lost.'
        ],
        principles:[
          {title:'Work is never lost',body:'Every task exists in the system until completed, reassigned, or cancelled — no reliance on memory.'},
          {title:'Everything has ownership',body:'Every task has an owner — individual, team, or automatic — so accountability is always clear.'},
          {title:'Context matters',body:'Tasks connect to the patient, appointment, referral, fax, or form that created them.'},
          {title:'Automation first',body:'Tasks are generated automatically from operational events for consistency.'}
        ],
        capabilities:[
          {title:'All Tasks',body:'A centralized view of assigned, unassigned, completed, overdue, and high-priority work — filterable and sortable.'},
          {title:'Standardized structure',body:'Title, description, priority, status, due date, assignee, and every related operational object.'},
          {title:'Lifecycle & priority',body:'New, Assigned, In Progress, Waiting, Escalated, Completed — across Critical to Low priority.'},
          {title:'Assignment modes',body:'Manual, automatic via automation, or AI-recommended routing based on organizational rules.'},
          {title:'Email & Fax inboxes',body:'Actionable emails, faxes, and EMR inbox items become tracked work rather than buried messages.'},
          {title:'Collaboration',body:'Comments, mentions, attachments, progress tracking, and full activity history per task.'}
        ],
        benefits:['Centralizes all organizational work','Eliminates manual tracking','Improves accountability','Reduces missed follow-ups','Enables team collaboration','Measurable operational performance'],
        related:['referrals','fax','messaging','automation','kemi','analytics']
      },
      {
        slug:'analytics', name:'Analytics', icon:'/assets/glyph-analytics.png', kicker:'Operational intelligence',
        tagline:'A single intelligence layer that turns operational activity across every module into actionable insight.',
        shot:null, panelChips:['Aggregates every module','Real-time, no manual reports','Filter & segment any metric'],
        overviewHead:'The intelligence center of the platform',
        overview:[
          'Every patient registered, appointment booked, queue joined, message sent, referral received, and automation executed contributes data to Analytics. Rather than an isolated reporting tool, it aggregates information from every module into a comprehensive view of organizational performance.',
          'Migranium treats analytics as a by-product of daily operations. Staff never manually compile reports — every action automatically contributes to accurate, continuously updated intelligence.'
        ],
        principles:[
          {title:'Analytics by default',body:'Reporting is a by-product of operations — no spreadsheets or manual exports required.'},
          {title:'Single source of truth',body:'Every module feeds one reporting ecosystem, eliminating fragmented reports.'},
          {title:'Decision support',body:'Provides the information leaders need to make evidence-based operational choices.'},
          {title:'Flexible segmentation',body:'Filter nearly any report by date, provider, location, service, category, or source.'}
        ],
        capabilities:[
          {title:'Appointment analytics',body:'Booking volume, status breakdowns, cancellation trends, and detailed no-show analysis.'},
          {title:'Provider & location',body:'Utilization, workload balance, wait times, and side-by-side multi-location comparison.'},
          {title:'Queue analytics',body:'Average and maximum wait, abandonment, walk-in volume, peak hours, and throughput.'},
          {title:'Referral analytics',body:'Incoming and outgoing volume, sources, conversion rates, and processing duration.'},
          {title:'Messaging & forms',body:'Delivery, open, click, and response rates alongside form completion and abandonment.'},
          {title:'Automation & AI',body:'Executions, time saved, and Kemi adoption, usage, and performance metrics.'}
        ],
        benefits:['Monitor performance in real time','Identify trends early','Balance provider workloads','Optimize scheduling and capacity','Measure automation effectiveness','Support executive decisions'],
        related:['scheduler','queue','referrals','messaging','automation','kemi']
      },
      {
        slug:'display', name:'Display', icon:'/assets/glyph-display.png', kicker:'Live patient displays',
        tagline:'Turn live queue data into secure, configurable waiting-room displays — televisions, kiosks, and signage.',
        shot:null, panelChips:['Real-time from the queue','Privacy-first field control','QR code self check-in'],
        overviewHead:'The public-facing dashboard of the clinic',
        overview:[
          'The Display module transforms operational queue data into a live display shown on televisions, kiosks, reception monitors, and public signage. While Queue Management is where staff manage patient movement, Display communicates that movement.',
          'Because it reads directly from Queue Management and Scheduler, every staff change is reflected instantly — reducing verbal calls and repeated questions while keeping patient privacy fully under organizational control.'
        ],
        principles:[
          {title:'Real-time communication',body:'Check-ins, calls, room moves, and completions update the display automatically.'},
          {title:'Patient transparency',body:'Patients see their position, status, whether they\u2019re next, and approximate wait times.'},
          {title:'Privacy first',body:'Organizations choose exactly what appears — queue number, code, partial or full name.'},
          {title:'Flexible presentation',body:'List and grid layouts for televisions, kiosks, reception monitors, and signage.'}
        ],
        capabilities:[
          {title:'Live waitlist',body:'A real-time view of everyone moving through the clinic, with configurable patient cards.'},
          {title:'Status indicators',body:'Clear badges — Checked In, Next, In Service, Late — synchronized with Queue Management.'},
          {title:'Estimated wait times',body:'Live estimates generated from operational data, updating dynamically as the day progresses.'},
          {title:'QR code check-in',body:'Patients scan to check themselves in, reducing reception workload during busy hours.'},
          {title:'Filters & options',body:'Filter by location, provider, room, appointment type, or status; toggle names, wait times, and announcements.'},
          {title:'Multi-location & full screen',body:'Independent displays per location with dedicated full-screen signage mode.'}
        ],
        benefits:['Reduces reception interruptions','Improves patient transparency','Supports QR self check-in','Live queue progression','Location-specific displays','A modern waiting experience'],
        related:['queue','scheduler','workplace','automation','analytics']
      },
      {
        slug:'kemi', name:'Kemi', icon:'/assets/glyph-kemi.png', kicker:'AI co-pilot',
        tagline:'The AI platform embedded across Migranium — ask questions, issue commands, and take action in natural language.',
        shot:null, panelChips:['Context-aware by role','Action-oriented, not just answers','Responsible by design'],
        overviewHead:'The intelligence layer that unifies the platform',
        overview:[
          'Kemi is Migranium\u2019s AI platform and operational assistant. Rather than a standalone chatbot, it is embedded throughout the ecosystem, understanding the organization\u2019s data, workflows, users, and processes to reduce administrative burden.',
          'Instead of remembering where information lives, users ask questions, issue commands, retrieve knowledge, and initiate actions conversationally — grounded entirely in organizational data and filtered by each user\u2019s permissions.'
        ],
        principles:[
          {title:'Context awareness',body:'A receptionist and a physician asking the same question receive different, permission-appropriate answers.'},
          {title:'Natural interaction',body:'No commands to memorize — users simply ask, instruct, and explore conversationally.'},
          {title:'Action-oriented',body:'Kemi books appointments, assigns tasks, routes faxes, and starts automations, not just answers.'},
          {title:'Responsible AI',body:'Kemi supports human decision-making; clinical judgment stays with qualified professionals.'}
        ],
        capabilities:[
          {title:'Conversation',body:'An assistant grounded in organizational data, maintaining context for natural follow-up questions.'},
          {title:'Knowledge',body:'AI-searchable operational documentation — protocols, procedures, policies, and workflow guides.'},
          {title:'AI agents',body:'Autonomous assistants for referrals, fax, appointments, reminders, and document processing.'},
          {title:'AI-powered search',body:'Search across patients, appointments, forms, tasks, and referrals without knowing where data lives.'},
          {title:'Workflow assistance',body:'Finds available slots, summarizes patient history, prioritizes work, and highlights bottlenecks.'},
          {title:'Decision support',body:'Advisory recommendations — capacity warnings, repeat cancellations, and wait-time alerts.'}
        ],
        benefits:['Reduces time searching for information','Minimizes repetitive work','Accelerates navigation','Improves staff onboarding','Assists operational decisions','Consistent, intuitive interaction'],
        related:['scheduler','patients','referrals','fax','automation','analytics']
      },
      {
        slug:'portal', name:'Patient Portal', icon:'/assets/glyph-patients.png', kicker:'Patient self-service',
        tagline:'A secure patient-facing platform extending the healthcare experience beyond the walls of the clinic.',
        shot:null, panelChips:['Self-service booking & check-in','Secure messaging & documents','Fully synchronized with staff'],
        overviewHead:'Where patients participate in their own care',
        overview:[
          'The Patient Portal gives patients convenient, self-service access to appointments, forms, communications, referrals, and personal health information. Every action a patient takes synchronizes immediately with the administrative modules staff use.',
          'Rather than a separate application, the portal is an extension of Migranium\u2019s core platform — appointments booked appear instantly in the Scheduler, completed forms flow into the Forms module, and messages record within Messaging.'
        ],
        principles:[
          {title:'Self-service',body:'Patients complete routine tasks independently — booking, forms, check-in — without calling the clinic.'},
          {title:'Connected experience',body:'Every patient action immediately updates the corresponding administrative module.'},
          {title:'Accessibility',body:'A simple, intuitive experience across desktop, tablet, and mobile devices.'},
          {title:'Transparency',body:'Patients always understand what\u2019s happening across appointments, referrals, forms, and messages.'}
        ],
        capabilities:[
          {title:'Patient dashboard',body:'A consolidated view of upcoming appointments, outstanding forms, messages, and referral updates.'},
          {title:'Appointment management',body:'Book, view, reschedule, cancel, and join virtual visits within organizational booking rules.'},
          {title:'Digital check-in',body:'Confirm attendance, update details, review insurance, and complete forms before arriving.'},
          {title:'Secure messaging',body:'Communicate with the organization securely, with history retained inside the platform.'},
          {title:'Referral tracking',body:'Monitor referral status from received through scheduled to completed.'},
          {title:'Documents',body:'Access signed consent forms, completed intake, and visit summaries per retention policy.'}
        ],
        benefits:['Enables self-service booking','Reduces administrative calls','Improves engagement','Increases form completion','Improves referral transparency','A modern patient experience'],
        related:['scheduler','forms','messaging','referrals','patients','queue']
      },
      {
        slug:'integrations', name:'Integrations', icon:'/assets/glyph-integrations.png', kicker:'Interoperability',
        tagline:'Connect Migranium with the EMRs, fax, telephony, e-signature, email, and calendar systems you already use.',
        shot:null, panelChips:['EMRs, fax, telephony & more','Real-time synchronization','Secure, audited exchange'],
        overviewHead:'The connectivity backbone of your technology stack',
        overview:[
          'The Integrations module lets Migranium become the operational hub that coordinates information between EMRs, cloud fax providers, telephony, e-signature platforms, email, calendars, and custom applications — rather than operating as an isolated system.',
          'Information received from connected systems immediately becomes part of the operational workflow, and actions performed in Migranium update connected systems automatically, keeping data synchronized across the ecosystem.'
        ],
        principles:[
          {title:'Interoperability',body:'Work alongside existing platforms rather than requiring organizations to replace them.'},
          {title:'Operational synchronization',body:'Connected systems actively contribute to workflows — a faxed referral becomes a referral record.'},
          {title:'Security',body:'Secure authentication, encrypted communication, and configurable access on every integration.'},
          {title:'Flexibility',body:'Enable only what you need today while remaining ready for future expansion.'}
        ],
        capabilities:[
          {title:'EMR integrations',body:'OSCAR Pro, Accuro, Epic, and Cerner — synchronize demographics, providers, appointments, and encounters.'},
          {title:'Cloud fax',body:'iFax and Unite Fax feed documents into Fax and Referrals and send outbound directly from Migranium.'},
          {title:'Telephony',body:'3CX brings call logging, transcripts, AI summaries, and appointment creation from calls.'},
          {title:'E-signature',body:'DocuSign powers consent, authorization, and signed-document storage into the patient record.'},
          {title:'Email & calendar',body:'Outlook and Gmail deliver communications; Google and Outlook calendars stay in sync with schedules.'},
          {title:'Custom APIs',body:'Connect proprietary applications and internal systems through configurable APIs and webhooks.'}
        ],
        benefits:['Connects existing systems','Eliminates duplicate entry','Synchronizes information','Improves workflow efficiency','Secure document exchange','Keep familiar technology'],
        related:['fax','patients','scheduler','messaging','forms','automation']
      }
    ];
