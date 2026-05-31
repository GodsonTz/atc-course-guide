/* ============================================================
   ATC Course Guide — courses.js
   Arusha Technical College · HDG. Tech © 2026
   Edit course content here. index.html reads this automatically.
   ============================================================ */

let currentLang = 'en';

const T = {
  en:{search:'Search courses...',appTitle:'ATC Course Guide',showing:'Showing',of:'of',courses:'courses',modules:'Modules',careers:'Careers',entry:'Entry Requirements',employed:'Employment Opportunities',selfEmployed:'Self-Employment',noResults:'No courses found.',all:'All',ordinary:'Ord. Diploma',bachelor:'Bachelor Degree',comingSoon:'⏳ Some module data not yet available',comingSoonSub:'Contact ATC Registrar for full module list'},
  sw:{search:'Tafuta kozi...',appTitle:'Mwongozo wa Kozi za ATC',showing:'Inaonyesha',of:'kati ya',courses:'kozi',modules:'Masomo',careers:'Kazi',entry:'Masharti ya Kujiunga',employed:'Fursa za Kuajiriwa',selfEmployed:'Kujiajiri',noResults:'Hakuna kozi zinazolingana.',all:'Zote',ordinary:'Stashahada ya Kawaida',bachelor:'Shahada ya Kwanza',comingSoon:'⏳ Baadhi ya data ya masomo haijapatikana bado',comingSoonSub:'Wasiliana na Msajili wa ATC kwa orodha kamili'}
};

const DEPTS = {
  en:['All','Automotive','Civil','Transport','Electrical','Mechanical','ICT','Science'],
  sw:['Zote','Otomotivi','Ujenzi','Usafiri','Umeme','Mitambo','TEHAMA','Sayansi']
};

const DEPT_KEYS = ['All','Automotive','Civil','Transport','Electrical','Mechanical','ICT','Science'];

const COURSES=[
// ===== AUTOMOTIVE =====
{id:1,dept:'Automotive',icon:'🚗',type:'ordinary',
 name:{en:'Ordinary Diploma in Automotive Engineering',sw:'Stashahada ya Uhandisi wa Magari'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04101',name:'Algebra and Trigonometry'},{code:'GST 04102',name:'Mechanics and Nuclear Physics'},{code:'GST 04103',name:'English Language Basics'},{code:'MET 04101',name:'Basics of Engineering Drawing'},{code:'MET 04102',name:'Mechanical Engineering Materials'},{code:'AET 04101',name:'Basics of Automotive Technology'},{code:'MET 04105',name:'Basics of Manufacturing Engineering'},{code:'AET 04102',name:'Fundamentals of Electrical and Electronics Engineering'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04201',name:'Series and Boolean Algebra'},{code:'GST 04202',name:'Gender and HIV'},{code:'GST 04203',name:'Microcomputer Application'},{code:'MET 04201',name:'Pictorial, Orthographic and Auxiliary Projections'},{code:'MET 04202',name:'Mechanical Engineering Science'},{code:'AET 04201',name:'Automotive Systems Operation and Maintenance'},{code:'MET 04203',name:'Machine Tools/Processes and Maintenance'},{code:'AET 04202',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05101',name:'Differentiation and Integration'},{code:'GST 05102',name:'Thermal Energy, Waves and Organic Compounds'},{code:'GST 05103',name:'Introduction to Programming Using C Language'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05201',name:'Matrices, Complex Numbers and Vectors'},{code:'GST 05202',name:'English Language Skills'},{code:'GST 05203',name:'Basics of Entrepreneurship'},{code:'GST 05204',name:'Introduction to Networking'},{code:'MET 05206',name:'Detail and Assembly Drawing'},{code:'AET 05206',name:'Basics of Automotive Diagnosis'},{code:'MET 05207',name:'Foundry and Metal Forming'},{code:'MET 05208',name:'Fluid Mechanics'},{code:'MET 05209',name:'Measurements, Instrumentation and Control Technology'},{code:'AET 05207',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'GST 06101',name:'Coordinate Geometry and Differential Equations'},{code:'GST 06102',name:'Correspondence, Interpersonal and Report Writing Skills'},{code:'MET 06101',name:'Details and Assembly Drawing'},{code:'MET 06102',name:'Machine Elements and Design'},{code:'MET 06103',name:'Environmental Engineering'},{code:'MET 06104',name:'Power Production'},{code:'AET 06101',name:'Auto Electrical and Electronic Systems'},{code:'AET 06102',name:'Project Design'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GST 06201',name:'Linear Programming, Statistics and Probability'},{code:'GST 06202',name:'Enterprise Management'},{code:'MET 06201',name:'Computer Aided Drafting'},{code:'AET 06201',name:'Auto Workshop Management'},{code:'AET 06202',name:'Automotive Diagnostics'},{code:'AET 06203',name:'Project Manufacturing'},{code:'AET 06204',name:'Auto Electric Control Systems'},{code:'AET 06205',name:'Industrial Practical Training'}]}],
 careers:{employed:[
  {emoji:'🚗',role:{en:'Automotive Technician',sw:'Fundi wa Magari'},desc:{en:'Diagnose and repair vehicles in garages and dealerships',sw:'Gundua na tengeneza magari katika karakana'},salary:'TZS 600K–2M/month'},
  {emoji:'🔌',role:{en:'Auto Electrician',sw:'Fundi wa Umeme wa Gari'},desc:{en:'Service electrical systems in modern vehicles',sw:'Hudumia mifumo ya umeme ya magari ya kisasa'},salary:'TZS 700K–2M/month'},
  {emoji:'🏭',role:{en:'Fleet Maintenance Engineer',sw:'Mhandisi wa Matengenezo ya Msafara'},desc:{en:'Manage vehicle fleets for transport companies',sw:'Simamia magari kwa makampuni ya usafirishaji'},salary:'TZS 1M–3M/month'}],
 self:[
  {emoji:'🔧',role:{en:'Garage / Workshop Owner',sw:'Mmiliki wa Karakana ya Magari'},desc:{en:'Open your own auto repair and service center',sw:'Fungua kituo chako cha kutengeneza magari'}},
  {emoji:'🚕',role:{en:'Auto Spare Parts Dealer',sw:'Muuzaji wa Vipuri vya Magari'},desc:{en:'Import and sell spare parts for vehicles',sw:'Ingiza na uza vipuri vya magari'}}]}},



{id:3,dept:'Automotive',icon:'🚜',type:'ordinary',
 name:{en:'Ordinary Diploma in Heavy Duty Equipment Engineering',sw:'Stashahada ya Uhandisi wa Vifaa Vizito'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04101',name:'Algebra and Trigonometry'},{code:'GST 04102',name:'Mechanics and Nuclear Physics'},{code:'GST 04103',name:'English Language Basics'},{code:'MET 04101',name:'Basics of Engineering Drawing'},{code:'MET 04102',name:'Mechanical Engineering Materials'},{code:'MET 04105',name:'Basics of Manufacturing Engineering'},{code:'HET 04101',name:'Fundamental of Engines and Traction'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04201',name:'Series and Boolean Algebra'},{code:'GST 04202',name:'Gender and HIV'},{code:'GST 04203',name:'Microcomputer Application'},{code:'MET 04201',name:'Pictorial, Orthographic and Auxiliary Projections'},{code:'MET 04202',name:'Section, Development and Interpenetration'},{code:'MET 04203',name:'Strength of Materials'},{code:'MET 04204',name:'Welding and Metal Fabrication'},{code:'MET 04205',name:'Basics of Machine Elements and Design'},{code:'MET 04206',name:'Engineering Thermodynamics'},{code:'HET 04201',name:'Maintenance of Hydraulic and Pneumatic Systems'}]},
  {label:{en:'NTA Level 5 — Semester I (data missing)',sw:'Ngazi ya 5 — Muhula I (data haipo)'},subjects:[
   {code:'—',name:'Semester I data not available — contact ATC Registrar'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05201',name:'Matrices, Complex Numbers and Vectors'},{code:'GST 05202',name:'Basics of Entrepreneurship'},{code:'GST 05203',name:'Introduction to Networking'},{code:'MET 05201',name:'Detail and Assembly Drawing'},{code:'HET 05201',name:'Maintain Power Transmission Systems'},{code:'MET 05202',name:'Foundry and Metal Forming'},{code:'MET 05203',name:'Fluid Mechanics'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'GST 06101',name:'Coordinate Geometry and Differential Equations'},{code:'GST 06102',name:'Correspondence and Report Writing'},{code:'MET 06101',name:'Fundamental of CAD'},{code:'MET 06102',name:'Machine Elements and Design'},{code:'MET 06103',name:'Power Production'},{code:'HET 06101',name:'Basic Hydraulic and Pneumatic Design'},{code:'HET 06102',name:'Hydraulic and Pneumatic System Controls'},{code:'HET 06103',name:'Project Design'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GST 06201',name:'Linear Programming, Statistics and Probability'},{code:'GST 06202',name:'Enterprise Management'},{code:'MET 06211',name:'3D Modelling Using Solid Works Software'},{code:'HET 06201',name:'Heavy Equipment Workshop Management'},{code:'HET 06202',name:'Heavy Equipment Electrical Maintenance'},{code:'HET 06203',name:'Engine Management and Control System Diagnosis'},{code:'HET 06204',name:'Project Work'},{code:'HET 06205',name:'Industrial Practical Training'}]}],
 careers:{employed:[
  {emoji:'🚜',role:{en:'Heavy Equipment Technician',sw:'Fundi wa Vifaa Vizito'},desc:{en:'Maintain heavy machinery on construction and mining sites',sw:'Matengenezo ya vifaa vizito kwenye maeneo ya ujenzi na madini'},salary:'TZS 1M–3.5M/month'},
  {emoji:'⛏️',role:{en:'Mining Equipment Engineer',sw:'Mhandisi wa Vifaa vya Machimbo'},desc:{en:'Service heavy machinery used in Tanzania mining sector',sw:'Hudumia vifaa vizito vya sekta ya madini Tanzania'},salary:'TZS 1.5M–4M/month'}],
 self:[
  {emoji:'🏗️',role:{en:'Heavy Equipment Rental Business',sw:'Biashara ya Kukodisha Vifaa Vizito'},desc:{en:'Own and rent out excavators, bulldozers to contractors',sw:'Miliki na kodisha vifaa vizito kwa wakandarasi'}}]}},

// ===== CIVIL =====
{id:4,dept:'Civil',icon:'🏗️',type:'ordinary',
 name:{en:'Ordinary Diploma in Civil Engineering',sw:'Stashahada ya Uhandisi wa Ujenzi'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04111',name:'Algebra and Trigonometry'},{code:'ITT 04117',name:'Basic Computer Application'},{code:'CET 04111',name:'Building Construction and Maintenance'},{code:'CET 04112',name:'Soil Mechanics'},{code:'CET 04113',name:'Basic Engineering Drawing'},{code:'CET 04114',name:'Construction Technology (Masonry, Carpentry)'},{code:'CET 04115',name:'Aluminum and Finishing Work'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04211',name:'Linear Algebra, Statistics and Complex Number'},{code:'GST 04213',name:'Business Communication Skills'},{code:'GST 04214',name:'Entrepreneurship for Technician'},{code:'CET 04211',name:'Basic Structural Mechanics'},{code:'CET 04212',name:'Installation and Maintenance of Services (Plumbing, Welding, Electrical)'},{code:'CET 04213',name:'Basic Engineering Material'},{code:'CET 04214',name:'Basic Engineering Surveying'},{code:'CET 04215',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05111',name:'Differentiation and Integration'},{code:'GST 05112',name:'Principles of Thermodynamics, Waves and Polymer'},{code:'CET 05111',name:'Engineering Surveying'},{code:'CET 05112',name:'Engineering Drawing'},{code:'CET 05113',name:'Civil Engineering Materials'},{code:'CET 05114',name:'Road Design'},{code:'CET 05115',name:'Water Supply and Sanitation'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05211',name:'Differential Equations and Coordinate Geometry'},{code:'GST 05212',name:'Introduction to Networking'},{code:'CET 05211',name:'Structural Mechanics'},{code:'CET 05212',name:'Quantity Surveying'},{code:'CET 05213',name:'Workshop and Construction Practice'},{code:'CET 05214',name:'Construction Management'},{code:'CET 05215',name:'Road Construction and Maintenance'},{code:'CET 05216',name:'Building Plumbing and Finishing Materials'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'CED 06114',name:'Building Construction'},{code:'CED 06115',name:'Reinforced Cement Concrete Design'},{code:'CED 06116',name:'Soil Mechanics and Foundations'},{code:'CED 06117',name:'Structural Timber Design'},{code:'CED 06118',name:'Architectural Design and Drawing'},{code:'CED 06119',name:'Project I (Research Methodology and Project Proposal Writing)'},{code:'CED 06120',name:'Civil Engineering Design Software'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'CED 06211',name:'Hydraulics and Fluid Mechanics'},{code:'CED 06212',name:'Construction Management and Procurement Practice'},{code:'CED 06213',name:'Public Health Engineering'},{code:'CED 06214',name:'Structural Steel Design'},{code:'CED 06215',name:'Building Materials and Maintenance'},{code:'CED 06216',name:'Project II (Implementation and Report Writing)'},{code:'CED 06217',name:'Social and Environmental Management'}]}],
 careers:{employed:[
  {emoji:'🏗️',role:{en:'Site Engineer',sw:'Mhandisi wa Ujenzi'},desc:{en:'Supervise construction of buildings, roads and bridges',sw:'Simamia ujenzi wa majengo, barabara na madaraja'},salary:'TZS 1M–3.5M/month'},
  {emoji:'📐',role:{en:'Quantity Surveyor',sw:'Mpima Gharama za Ujenzi'},desc:{en:'Estimate and manage construction project costs',sw:'Kadiria na simamia gharama za miradi ya ujenzi'},salary:'TZS 1M–2.5M/month'},
  {emoji:'🌊',role:{en:'Water & Sanitation Engineer',sw:'Mhandisi wa Maji na Usafi'},desc:{en:'Design water supply and sewage systems',sw:'Buni mifumo ya usambazaji wa maji na maji taka'},salary:'TZS 1M–3M/month'}],
 self:[
  {emoji:'🏢',role:{en:'Construction Contractor',sw:'Mkandarasi wa Ujenzi'},desc:{en:'Run your own construction company and take contracts',sw:'Endesha kampuni yako ya ujenzi na pata mikataba'}},
  {emoji:'📋',role:{en:'Independent Quantity Surveyor',sw:'Mpima Gharama Huru'},desc:{en:'Offer cost estimation services to developers',sw:'Toa huduma za kukadiriwa gharama kwa wajenzi'}}]}},

{id:5,dept:'Civil',icon:'💧',type:'ordinary',
 name:{en:'Ordinary Diploma in Civil and Irrigation Engineering',sw:'Stashahada ya Uhandisi wa Ujenzi na Umwagiliaji'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 & 5 — Same as Civil Engineering',sw:'Ngazi ya 4 & 5 — Sawa na Uhandisi wa Ujenzi'},subjects:[
   {code:'—',name:'Shares NTA Level 4 & 5 modules with Civil Engineering programme'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'CID 06110',name:'Civil & Irrigation Engineering Design Software'},{code:'CID 06111',name:'Construction of Irrigation Projects'},{code:'CID 06112',name:'Open and Closed Channel Hydraulics'},{code:'CID 06127',name:'Reinforced Cement Concrete Design'},{code:'CID 06132',name:'Soil Mechanics and Foundations'},{code:'CID 06113',name:'Crop Water Requirement and Irrigation Schedule'},{code:'CID 06114',name:'Design of Small-Scale Irrigation Schemes'},{code:'CID 06129',name:'Project I (Research Methodology and Project Proposal Writing)'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'CID 06210',name:'Climate Smart Agriculture and Land Suitability for Irrigation'},{code:'CID 06211',name:'Basics of GIS and Remote Sensing'},{code:'CID 06212',name:'Construction Management and Procurement Practice'},{code:'CID 06213',name:'Irrigation Water Supply'},{code:'CID 06214',name:'Operation and Maintenance of Irrigation Systems'},{code:'CID 06215',name:'Performance Evaluation of Irrigation Systems'},{code:'CID 06222',name:'Social and Environment Management'},{code:'CID 06237',name:'Project (Implementation and Report Writing)'}]}],
 careers:{employed:[
  {emoji:'💧',role:{en:'Irrigation Engineer',sw:'Mhandisi wa Umwagiliaji'},desc:{en:'Design and manage irrigation systems for farms',sw:'Buni na simamia mifumo ya umwagiliaji kwa mashamba'},salary:'TZS 1M–3M/month'},
  {emoji:'🌾',role:{en:'Agricultural Water Manager',sw:'Msimamizi wa Maji ya Kilimo'},desc:{en:'Manage water resources for agricultural projects',sw:'Simamia rasilimali za maji kwa miradi ya kilimo'},salary:'TZS 900K–2.5M/month'}],
 self:[
  {emoji:'🌱',role:{en:'Irrigation Consultant',sw:'Mshauri wa Umwagiliaji'},desc:{en:'Help farmers design and install irrigation systems',sw:'Saidia wakulima kubuni na kuweka mifumo ya umwagiliaji'}}]}},

{id:6,dept:'Civil',icon:'🏛️',type:'ordinary',
 name:{en:'Ordinary Diploma in Architecture',sw:'Stashahada ya Usanifu wa Majengo'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04111',name:'Algebra and Trigonometry'},{code:'ITT 04117',name:'Basic Computer Application'},{code:'CAT 04101',name:'Introduction to Architectural Draughting'},{code:'CAT 04102',name:'Building Maintenance'},{code:'CAT 04103',name:'Vernacular Building Materials'},{code:'CAT 04104',name:'Introduction to Building Services'},{code:'CAT 04105',name:'Construction Technology (Masonry, Carpentry)'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04211',name:'Business Communication Skills'},{code:'GST 04212',name:'Linear Algebra, Complex Number and Statistics'},{code:'GST 04213',name:'Entrepreneurship for Technicians'},{code:'CAT 04201',name:'Intermediate Architectural Draughting'},{code:'CAT 04202',name:'Building Construction'},{code:'CAT 04203',name:'Basics of Structural Design'},{code:'CAT 04204',name:'History of Architecture'},{code:'CAT 04205',name:'Basic Engineering Surveying'},{code:'CAT 04206',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'CAT 05101',name:'Basic Architectural Design'},{code:'CAT 05102',name:'Modern Building Technology'},{code:'CAT 05103',name:'Engineering Surveying'},{code:'CAT 05104',name:'AutoCAD'},{code:'CAT 05105',name:'Modern Building Materials'},{code:'CAT 05106',name:'Specialized Building Services'},{code:'CAT 05107',name:'Construction Management'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05217',name:'Differential Equations and Coordinate Geometry'},{code:'CAT 05201',name:'Architectural Design'},{code:'CAT 05202',name:'Advanced Structural Design'},{code:'CAT 05203',name:'Building Plumbing and Finishing Materials'},{code:'CAT 05204',name:'Theory of Architecture'},{code:'CAT 05205',name:'Quantity Surveying'},{code:'CAT 05206',name:'Workshop and Construction Practice'},{code:'CAT 05207',name:'ARCHI CAD / SKETCHUP'},{code:'CAT 05209',name:'Industrial Practical Training II'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'CAT 06101',name:'Specialized Structural Design'},{code:'CAT 06102',name:'Specialized Building Technology'},{code:'CAT 06103',name:'Social and Environmental Management'},{code:'CAT 06104',name:'Project I (Research Methodology)'},{code:'CAT 06105',name:'Civil Engineering Design Software'},{code:'CAT 06106',name:'Measurement & Estimation'},{code:'CAT 06107',name:'Climatic Design'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'CAT 06201',name:'Project Architectural Design'},{code:'CAT 06202',name:'Professional Practice'},{code:'CAT 06203',name:'Construction Management and Procurement Practice'},{code:'CAT 06204',name:'Urban & Housing Development'},{code:'CAT 06205',name:'Advanced Building Technology'},{code:'CAT 06206',name:'Architectural Conservation'},{code:'CAT 06207',name:'Building Information Modelling'}]}],
 careers:{employed:[
  {emoji:'🏛️',role:{en:'Architectural Technician',sw:'Fundi wa Usanifu wa Majengo'},desc:{en:'Work on architectural designs for construction firms',sw:'Fanya kazi kwenye michoro ya usanifu kwa makampuni ya ujenzi'},salary:'TZS 900K–2.5M/month'},
  {emoji:'🏙️',role:{en:'Urban Planner Assistant',sw:'Msaidizi wa Mpango Mji'},desc:{en:'Support urban and housing development planning',sw:'Saidia mipango ya makazi na miji'},salary:'TZS 800K–2M/month'}],
 self:[
  {emoji:'✏️',role:{en:'Freelance Architectural Designer',sw:'Mbuni Huru wa Majengo'},desc:{en:'Design houses and buildings for private clients',sw:'Buni nyumba na majengo kwa wateja binafsi'}}]}},

// ===== TRANSPORT =====
{id:7,dept:'Transport',icon:'🛣️',type:'ordinary',
 name:{en:'Ordinary Diploma in Civil and Highway Engineering',sw:'Stashahada ya Uhandisi wa Barabara na Ujenzi'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04111',name:'Algebra and Trigonometry'},{code:'ITT 04117',name:'Basic Computer Application'},{code:'CHT 04111',name:'Building Construction and Maintenance'},{code:'CHT 04112',name:'Soil Mechanics'},{code:'CHT 04113',name:'Basic Engineering Drawing'},{code:'CHT 04114',name:'Construction Technology (Masonry, Carpentry, Painting)'},{code:'CHT 04115',name:'Basic Labour Based Road Engineering'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04211',name:'Linear Algebra, Statistics and Complex Number'},{code:'GST 04213',name:'Business Communication Skills'},{code:'GST 04214',name:'Entrepreneurship for Technician'},{code:'CHT 04211',name:'Basic Structural Mechanics'},{code:'CHT 04212',name:'Installation and Maintenance of Services'},{code:'CHT 04213',name:'Basic Civil Engineering Materials'},{code:'CHT 04214',name:'Basic Engineering Surveying'},{code:'CHT 04215',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05111',name:'Differentiation and Integration'},{code:'GST 05112',name:'Thermal Energy, Waves and Organic Compounds'},{code:'CHT 05120',name:'Engineering Surveying'},{code:'CHT 05121',name:'Engineering Drawing'},{code:'CHT 05122',name:'Civil Engineering Materials'},{code:'CHT 05123',name:'Road Design'},{code:'—',name:'Water Supply and Sanitation'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05211',name:'Differential Equations and Coordinate Geometry'},{code:'GST 05214',name:'Fundamental of Computer Networking'},{code:'CHT 05225',name:'Structural Mechanics'},{code:'CHT 05226',name:'Quantity Surveying'},{code:'CHT 05227',name:'Workshop & Construction Practice'},{code:'CHT 05228',name:'Construction Management'},{code:'CHT 05229',name:'Road Construction and Maintenance'},{code:'CHT 05230',name:'Waterways Engineering'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'CHD 06121',name:'Route Design'},{code:'CHD 06127',name:'Reinforced Concrete Design'},{code:'CHD 06122',name:'Pavement Materials'},{code:'CHD 06123',name:'Traffic and Transportation Engineering'},{code:'CHD 06124',name:'Basic Bridge Construction and Maintenance'},{code:'CHD 06132',name:'Soil Mechanics and Foundations'},{code:'CHD 06133',name:'Structural Timber Design'},{code:'CHD 06129',name:'Project Outline Methodology'},{code:'CHD 06145',name:'Civil Engineering Design Software'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'CHD 06222',name:'Social and Environmental Management'},{code:'CHD 06223',name:'Construction Management and Procurement Practice'},{code:'CHD 06236',name:'Pavement Engineering'},{code:'CHD 06230',name:'Structural Steel Design'},{code:'CHD 06235',name:'Hydraulics'},{code:'CHD 06237',name:'Project Data Analysis and Report'},{code:'Elective',name:'Railway Engineering (Elective)'},{code:'Elective',name:'Airport Engineering (Elective)'}]}],
 careers:{employed:[
  {emoji:'🛣️',role:{en:'Road Engineer',sw:'Mhandisi wa Barabara'},desc:{en:'Design and supervise road construction projects',sw:'Buni na simamia miradi ya ujenzi wa barabara'},salary:'TZS 1M–3.5M/month'},
  {emoji:'🌉',role:{en:'Bridge Engineer',sw:'Mhandisi wa Madaraja'},desc:{en:'Design and inspect bridges and culverts',sw:'Buni na kagua madaraja na bomba za mto'},salary:'TZS 1.2M–4M/month'}],
 self:[
  {emoji:'🏢',role:{en:'Road Construction Contractor',sw:'Mkandarasi wa Barabara'},desc:{en:'Tender and manage road construction projects',sw:'Omba zabuni na simamia miradi ya ujenzi wa barabara'}}]}},

// ===== ELECTRICAL =====
{id:8,dept:'Electrical',icon:'⚡',type:'ordinary',
 name:{en:'Ordinary Diploma in Electrical Engineering',sw:'Stashahada ya Uhandisi wa Umeme'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04101',name:'Algebra and Trigonometry'},{code:'GST 04102',name:'Mechanics and Nuclear Physics'},{code:'GST 04103',name:'English Language Basics'},{code:'EET 04101',name:'Basic Electricity'},{code:'ETT 04101',name:'Analogue Electronics'},{code:'EET 04102',name:'Domestic Installation and Mechanical Skills'},{code:'EET 04103',name:'Printed Circuit Board and Draughting Techniques'},{code:'EET 04104',name:'Electrical Measurements I'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04201',name:'Series and Boolean Algebra'},{code:'GST 04202',name:'Gender and HIV'},{code:'GST 04203',name:'Microcomputer Application'},{code:'EET 04201',name:'Electrical Material'},{code:'ETT 04201',name:'Digital Combination Circuit'},{code:'EET 04202',name:'Workshop Technology and Practice'},{code:'EET 04204',name:'Electrical Measurements II'},{code:'ITP 04',name:'Industrial Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05101',name:'Differentiation and Integration'},{code:'GST 05102',name:'Thermal Energy, Waves and Organic Compounds'},{code:'GST 05103',name:'Introduction to Programming Using C'},{code:'EET 05101',name:'DC Machines'},{code:'ETT 05101',name:'Analogue Electronics Devices and Circuit'},{code:'EET 05102',name:'Computer Aided Design Tools / Workshop Practice'},{code:'EET 05103',name:'Electromagnetism'},{code:'EET 05104',name:'Control Engineering'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05201',name:'Matrices, Complex and Vectors'},{code:'GST 05202',name:'English Language Skills'},{code:'GST 05203',name:'Basics of Entrepreneurship'},{code:'GST 05204',name:'Introduction to Networking'},{code:'EET 05201',name:'AC Machine I'},{code:'ETT 05201',name:'Digital Sequential Circuits'},{code:'ETT 05202',name:'Power Electronics'},{code:'EET 05202',name:'Industrial Installation and Transformer Rewinding'},{code:'EET 05203',name:'Electrical Power Utilization'},{code:'EET 05204',name:'Power Plants'},{code:'ITP 05',name:'Industrial Training'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'GST 06101',name:'Coordinate Geometry and Differential Equations'},{code:'GST 06102',name:'Correspondence, Interpersonal Skills and Report Writing'},{code:'ETT 06101',name:'Analogue Electronics Design'},{code:'ETT 06102',name:'Microcontrollers'},{code:'EET 06101',name:'Induction Motors'},{code:'EED 06102',name:'Automation'},{code:'EET 06103',name:'Motor Rewinding'},{code:'EET 06104',name:'Power Protection'},{code:'EET 06105',name:'Project I'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GST 06201',name:'Linear Programming, Statistics and Probability'},{code:'GST 06204',name:'Enterprise Management'},{code:'EET 06201',name:'Synchronous and Special Machines'},{code:'EET 06202',name:'Electric Drives'},{code:'EET 06203',name:'Refrigeration and Air Conditioning'},{code:'EET 06204',name:'Electrical Maintenance and Management'},{code:'EET 06205',name:'Electrical Power Transmission & Distribution'},{code:'EET 06206',name:'Renewable Energy'},{code:'EET 06207',name:'Project II'}]}],
 careers:{employed:[
  {emoji:'⚡',role:{en:'Electrical Engineer',sw:'Mhandisi wa Umeme'},desc:{en:'Design and maintain electrical systems in industries',sw:'Buni na matengenezo ya mifumo ya umeme viwandani'},salary:'TZS 1M–3.5M/month'},
  {emoji:'🔌',role:{en:'Electrical Installation Officer',sw:'Afisa wa Usakinishaji wa Umeme'},desc:{en:'Handle wiring and electrical installations in buildings',sw:'Shughulikia usakinishaji wa waya na umeme majengo'},salary:'TZS 600K–1.5M/month'}],
 self:[
  {emoji:'🔌',role:{en:'Electrical Contractor',sw:'Mkandarasi wa Umeme'},desc:{en:'Run your own electrical installation business',sw:'Endesha biashara yako ya usakinishaji wa umeme'}}]}},

{id:9,dept:'Electrical',icon:'📡',type:'ordinary',
 name:{en:'Ordinary Diploma in Electronics & Telecommunications Engineering',sw:'Stashahada ya Uhandisi wa Elektroniki na Mawasiliano'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04101',name:'Algebra and Trigonometry'},{code:'GST 04102',name:'Mechanics and Nuclear Physics'},{code:'GST 04103',name:'English Language Basics'},{code:'EET 04101',name:'Basic Electricity'},{code:'ETT 04101',name:'Analogue Electronics'},{code:'EET 04102',name:'Domestic Installation and Mechanical Skills'},{code:'EET 04103',name:'Printed Circuit Board and Draughting Techniques'},{code:'EET 04104',name:'Electrical Measurements I'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04201',name:'Series and Boolean Algebra'},{code:'GST 04202',name:'Gender and HIV'},{code:'GST 04203',name:'Microcomputer Application'},{code:'EET 04201',name:'Electrical Material'},{code:'ETT 04201',name:'Digital Combinational Circuits'},{code:'ETT 04202',name:'Telecommunication Principles'},{code:'EET 04204',name:'Electrical Measurements II'},{code:'ITP 04',name:'Industrial Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05101',name:'Differentiation and Integration'},{code:'GST 05102',name:'Thermal Energy, Waves and Organic Compounds'},{code:'GST 05103',name:'Introduction to Programming Using C'},{code:'ETT 05101',name:'Analogue Electronics Devices and Circuit'},{code:'ETT 05102',name:'Computer Aided Design Tools'},{code:'ETT 05103',name:'Television Technology'},{code:'ETT 05104',name:'Antennas and Transmission Lines'},{code:'EET 05103',name:'Electromagnetism'},{code:'EET 05104',name:'Control Engineering'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05201',name:'Matrices, Complex and Vectors'},{code:'GST 05202',name:'English Language Skills'},{code:'GST 05203',name:'Basics of Entrepreneurship'},{code:'GST 05204',name:'Introduction to Networking'},{code:'ETT 05201',name:'Digital Sequential Circuits'},{code:'ETT 05202',name:'Power Electronics'},{code:'ETT 05203',name:'Data Communication'},{code:'ETT 05204',name:'Instrumentation'},{code:'ETT 05205',name:'Radio Transmission Systems'},{code:'ITP 05',name:'Industrial Training'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'GST 06101',name:'Coordinate Geometry and Differential Equations'},{code:'GST 06103',name:'Correspondence, Interpersonal Skills and Report Writing'},{code:'ETT 06101',name:'Analogue Electronics Design'},{code:'ETT 06102',name:'Applied Microcontrollers'},{code:'ETT 06103',name:'Television and Video Engineering'},{code:'ETT 06104',name:'Radar and Navigation System'},{code:'EET 06103',name:'Automation'},{code:'ETT 06105',name:'Project I'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GST 06201',name:'Linear Programming, Statistics and Probability'},{code:'GST 06204',name:'Enterprise Management'},{code:'ETT 06201',name:'Telephony and Switching'},{code:'ETT 06202',name:'Microwave Technology'},{code:'ETT 06203',name:'Communication Systems'},{code:'ETT 06204',name:'Satellite Communication'},{code:'IPT 06',name:'Industrial Practical Training'}]}],
 careers:{employed:[
  {emoji:'📡',role:{en:'Telecommunications Engineer',sw:'Mhandisi wa Mawasiliano'},desc:{en:'Work with telecom companies like Airtel, Vodacom, TTCL',sw:'Fanya kazi na makampuni ya simu kama Airtel, Vodacom'},salary:'TZS 1M–3.5M/month'},
  {emoji:'📺',role:{en:'Broadcast Technician',sw:'Fundi wa Utangazaji'},desc:{en:'Maintain broadcasting equipment for TV and radio',sw:'Matengenezo ya vifaa vya utangazaji kwa TV na redio'},salary:'TZS 700K–2M/month'}],
 self:[
  {emoji:'📶',role:{en:'ISP/WiFi Business Owner',sw:'Mmiliki wa Biashara ya Intaneti'},desc:{en:'Provide internet services to homes and businesses',sw:'Toa huduma za intaneti kwa nyumba na biashara'}}]}},

{id:10,dept:'Electrical',icon:'🏥',type:'ordinary',
 name:{en:'Ordinary Diploma in Electrical and Biomedical Engineering',sw:'Stashahada ya Uhandisi wa Umeme na Vifaa vya Hospitali'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04101',name:'Algebra and Trigonometry'},{code:'GST 04102',name:'Mechanics and Nuclear Physics'},{code:'GST 04103',name:'English Language Basics'},{code:'EET 04101',name:'Basic Electricity'},{code:'ETT 04101',name:'Analogue Electronics'},{code:'EET 04102',name:'Basic of Workshop Technology and Practices'},{code:'ETT 04103',name:'Printed Circuit Board and Draughting Techniques'},{code:'EET 04103',name:'Electrical Measurements'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04201',name:'Series and Boolean Algebra'},{code:'GST 04202',name:'Gender and HIV'},{code:'GST 04203',name:'Microcomputer Application'},{code:'EET 04201',name:'Electrical Material'},{code:'ETT 04201',name:'Digital Combination Circuits'},{code:'EET 04202',name:'Fundamentals of Electrical Installation'},{code:'EBT 04201',name:'Biomedical Equipment Installation'},{code:'EBT 04202',name:'Biomedical Equipment Technology'},{code:'ITP 04',name:'Industrial Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05101',name:'Differentiation and Integration'},{code:'GST 05102',name:'Thermal Energy, Waves and Organic Compounds'},{code:'GST 05103',name:'Introduction to Programming Using C'},{code:'EET 05101',name:'DC Machines'},{code:'EBT 05101',name:'Health Care Facility Systems'},{code:'ETT 05102',name:'Computer Aided Design Tools'},{code:'ETT 05103',name:'Analogue Electronics Devices and Circuits'},{code:'EET 05103',name:'Electromagnetism'},{code:'EET 05104',name:'Control Engineering'},{code:'EBT 05102',name:'Occupational Safety and Health'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05201',name:'Matrices, Complex and Vectors'},{code:'GST 05202',name:'English Language Skills'},{code:'GST 05203',name:'Basics of Entrepreneurship'},{code:'GST 05204',name:'Introduction to Computer Networking'},{code:'EBT 05201',name:'Biomedical Sensors and Transducers'},{code:'ETT 05201',name:'Digital Sequential Circuit'},{code:'ETT 05202',name:'Power Electronics'},{code:'EET 05202',name:'Industrial Installation and Transformer Rewinding'},{code:'EET 05204',name:'Power Utilization'},{code:'ITP 05',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'GST 06101',name:'Coordinate Geometry and Differential Equations'},{code:'GST 06102',name:'Correspondence, Interpersonal Skills and Report Writing'},{code:'ETT 06101',name:'Analogue Electronics Design'},{code:'ETT 06102',name:'Applied Microcontroller'},{code:'EBT 06101',name:'Diagnostic Medical Equipment Theory'},{code:'EET 06102',name:'Human Physiology & Diagnostic Measurement'},{code:'EET 06102',name:'Automation'},{code:'EET 06103',name:'Motor Rewinding'},{code:'EET 06104',name:'Electrical Power Protection'},{code:'EET 06106',name:'Project I'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GST 06201',name:'Linear Programming and Probability'},{code:'GST 06202',name:'Enterprise Management'},{code:'EBT 06202',name:'Hospital Equipment Repair and Maintenance'},{code:'EBT 06204',name:'Medical Imaging Equipment Theory'},{code:'EBT 06203',name:'Hospital Electrical and Mechanical Systems'},{code:'EET 06203',name:'Refrigeration and Air Conditioning'},{code:'EET 06207',name:'Project II'},{code:'EBT 06201',name:'Therapeutic Medical Equipment'}]}],
 careers:{employed:[
  {emoji:'🏥',role:{en:'Biomedical Equipment Technician',sw:'Fundi wa Vifaa vya Hospitali'},desc:{en:'Maintain and repair medical equipment in hospitals',sw:'Matengenezo na kutengeneza vifaa vya matibabu hospitalini'},salary:'TZS 900K–2.5M/month'},
  {emoji:'🔬',role:{en:'Medical Device Engineer',sw:'Mhandisi wa Vifaa vya Matibabu'},desc:{en:'Work with hospitals and clinics on medical equipment',sw:'Fanya kazi na hospitali na kliniki kuhusu vifaa vya matibabu'},salary:'TZS 1M–3M/month'}],
 self:[
  {emoji:'🏥',role:{en:'Medical Equipment Service Provider',sw:'Mtoa Huduma wa Vifaa vya Matibabu'},desc:{en:'Service and calibrate medical devices for clinics',sw:'Hudumia na rekebisha vifaa vya matibabu kwa kliniki'}}]}},

{id:11,dept:'Electrical',icon:'💧',type:'ordinary',
 name:{en:'Ordinary Diploma in Electrical and Hydropower Engineering',sw:'Stashahada ya Uhandisi wa Umeme na Nguvu za Maji'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04111',name:'Algebra and Trigonometry'},{code:'GST 04112',name:'Fundamentals of Mechanics'},{code:'ITT 04117',name:'Basic Computer Application'},{code:'EHT 04111',name:'Electrical Installation'},{code:'EHT 04112',name:'Workshop Technology'},{code:'EHT 04113',name:'Basic Electricity'},{code:'EHT 04114',name:'Basic Electronics'},{code:'EHT 04115',name:'Basics of Hydropower Engineering'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04211',name:'Linear Algebra, Complex Number and Statistics'},{code:'GST 04213',name:'Business Communication Skills'},{code:'GST 04214',name:'Entrepreneurship for Technician'},{code:'EHT 04211',name:'Electrical Measuring Instruments'},{code:'EHT 04212',name:'Basic Electromechanical Machine Control'},{code:'EHT 04213',name:'Soil Mechanics'},{code:'EHT 04214',name:'Engineering Materials'},{code:'EHT 04215',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05111',name:'Differentiation and Integration'},{code:'GST 05113',name:'Introduction to Programming Language Using C'},{code:'EHT 05111',name:'DC Machines'},{code:'EHT 05112',name:'Power Electronics'},{code:'EHT 05113',name:'Welding and Metal Fabrication'},{code:'EHT 05114',name:'Electrical Machines Installation'},{code:'EHT 05115',name:'Power Plant Engineering'},{code:'EHT 05116',name:'Hydropower Structure and Maintenance'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05211',name:'Differential Equations and Integral Transforms'},{code:'CST 05218',name:'Introduction to Networking'},{code:'EHT 05212',name:'Power Transformer'},{code:'EHT 05213',name:'Control Systems and Measurement'},{code:'EHT 05214',name:'Machine Shop Applications'},{code:'EHT 05215',name:'Hydrology and Reservoir Operation'},{code:'EHT 05216',name:'Electrical Power Utilization'},{code:'EHT 05217',name:'Computer Aided Design'},{code:'EHT 05218',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'EHT 06111',name:'Research Methodologies'},{code:'EHT 06112',name:'Hydropower Plant Automation'},{code:'EHT 06113',name:'Basic Design of Retaining Water Structures'},{code:'EHT 06114',name:'Induction Motors'},{code:'EHT 06115',name:'Electrical Machines Rewinding'},{code:'EHT 06116',name:'Hydropower Plant Management'},{code:'EHT 06117',name:'Engineering Project Design'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'EHT 06211',name:'Hydropower Plant Monitoring and Control'},{code:'EHT 06212',name:'Electrical Power Protection'},{code:'EHT 06213',name:'Synchronous and Special Machines'},{code:'EHT 06214',name:'Refrigeration and Air Conditioning'},{code:'EHT 06215',name:'Hydropower Environmental Management and Climate Change'},{code:'EHT 06216',name:'Electrical Power Transmission and Distribution'},{code:'EHT 06217',name:'Engineering Project Implementation'}]}],
 careers:{employed:[
  {emoji:'💧',role:{en:'Hydropower Plant Engineer',sw:'Mhandisi wa Mtambo wa Maji'},desc:{en:'Operate and maintain hydroelectric power plants (TANESCO)',sw:'Endesha na matengenezo ya mitambo ya umeme wa maji (TANESCO)'},salary:'TZS 1M–3.5M/month'},
  {emoji:'⚡',role:{en:'Power Systems Engineer',sw:'Mhandisi wa Mifumo ya Umeme'},desc:{en:'Manage electricity generation and distribution networks',sw:'Simamia uzalishaji na usambazaji wa umeme'},salary:'TZS 1.2M–4M/month'}],
 self:[
  {emoji:'🌊',role:{en:'Small Hydro Developer',sw:'Mjenzi wa Mitambo Midogo ya Umeme wa Maji'},desc:{en:'Install micro-hydro systems for rural electrification',sw:'Weka mifumo midogo ya umeme wa maji vijijini'}}]}},

{id:12,dept:'Electrical',icon:'☀️',type:'ordinary',
 name:{en:'Ordinary Diploma in Electrical and Solar Engineering',sw:'Stashahada ya Uhandisi wa Umeme na Nishati ya Jua'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04101',name:'Algebra and Trigonometry'},{code:'GST 04102',name:'Mechanics and Nuclear Physics'},{code:'EET 04101',name:'Basic Electrical Engineering'},{code:'ETT 04101',name:'Analogue Electronics'},{code:'ETT 04102',name:'Printed Circuit Board and Draughting Techniques'},{code:'EET 04102',name:'Basics of Workshop Technology and Practices'},{code:'EST 04101',name:'Solar Electrical Measurements'},{code:'RET 04101',name:'Energy and Climate Change'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04201',name:'Series and Boolean Algebra'},{code:'GST 04202',name:'Gender and HIV'},{code:'GST 04203',name:'Microcomputer Application'},{code:'EST 04201',name:'Basic Mechanics and Solar Thermal Energy'},{code:'EET 04201',name:'Electrical Material'},{code:'ETT 04202',name:'Basic Troubleshooting Practice'},{code:'EST 04202',name:'Fundamentals of Electrical Installation'},{code:'ETT 04201',name:'Digital Combinational Circuits'},{code:'IPT 04',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05101',name:'Differentiation and Integration'},{code:'GST 05102',name:'Thermal Energy, Waves and Organic Compounds'},{code:'GST 05103',name:'Programming Language Using C'},{code:'EET 05101',name:'DC Machines'},{code:'ETT 05101',name:'Analogue Electronics Devices and Circuit'},{code:'EST 05101',name:'Solar Power Plant Engineering'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05201',name:'Matrices, Complex Numbers and Vectors'},{code:'GST 05202',name:'Communication Skills'},{code:'GST 05203',name:'Entrepreneurship for Technicians'},{code:'GST 05204',name:'Basics of Computer Networking'},{code:'ETT 05201',name:'Digital Sequential Circuit'},{code:'ETT 05202',name:'Power Electronics'},{code:'EET 05202',name:'Electrical Motor Installation and Transformer Rewinding'},{code:'EET 05203',name:'Electrical Power Utilization'},{code:'IPT 05',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'GST 06101',name:'Coordinate Geometry and Differential Equations'},{code:'GST 06103',name:'Correspondence, Interpersonal Skills and Report Writing'},{code:'EST 06101',name:'Solar Power Systems Installation'},{code:'ETT 06101',name:'Analogue Electronics Design'},{code:'ETT 06102',name:'Applied Microcontroller'},{code:'EET 06101',name:'Induction Motors'},{code:'EET 06102',name:'Automation'},{code:'EET 06104',name:'Electrical Power Protection'},{code:'EET 06106',name:'Project I'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GST 06201',name:'Linear Programming and Probability'},{code:'GST 06202',name:'Enterprise Management'},{code:'EST 06201',name:'Solar Power Plant Maintenance'},{code:'EST 06202',name:'Energy Efficiency and Economics'},{code:'EET 06201',name:'Synchronous and Special Machines'},{code:'EET 06204',name:'Electrical Maintenance and Management'},{code:'EET 06205',name:'Electrical Power Transmission and Distribution'},{code:'EET 06207',name:'Project II'}]}],
 careers:{employed:[
  {emoji:'☀️',role:{en:'Solar Energy Engineer',sw:'Mhandisi wa Nishati ya Jua'},desc:{en:'Install and maintain solar power systems for homes and businesses',sw:'Weka na matengenezo ya mifumo ya jua kwa nyumba na biashara'},salary:'TZS 900K–2.5M/month'},
  {emoji:'⚡',role:{en:'Renewable Energy Technician',sw:'Fundi wa Nishati Mbadala'},desc:{en:'Work on solar and hybrid energy projects',sw:'Fanya kazi kwenye miradi ya nishati ya jua na hybrid'},salary:'TZS 800K–2M/month'}],
 self:[
  {emoji:'☀️',role:{en:'Solar Installation Business',sw:'Biashara ya Usakinishaji wa Jua'},desc:{en:'Install solar panels for homes, schools and businesses',sw:'Weka paneli za jua kwa nyumba, shule na biashara'}}]}},

{id:13,dept:'Electrical',icon:'🌬️',type:'ordinary',
 name:{en:'Ordinary Diploma in Electrical and Wind Energy Systems Engineering',sw:'Stashahada ya Uhandisi wa Umeme na Nishati ya Upepo'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04101',name:'Algebra and Trigonometry'},{code:'GST 04102',name:'Mechanics and Nuclear Physics'},{code:'GST 04103',name:'English Language Basics'},{code:'EET 04101',name:'Basic Electricity'},{code:'ETT 04101',name:'Analogue Electronics'},{code:'ETT 04102',name:'Printed Circuit Board Techniques and Practice'},{code:'EET 04102',name:'Domestic Installation and Mechanical Skills'},{code:'EET 04103',name:'Electrical Measurements'},{code:'RET 04101',name:'Energy and Climate Change'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04201',name:'Series and Boolean Algebra'},{code:'GST 04202',name:'Basic Entrepreneurship'},{code:'GST 04203',name:'Microcomputer Application'},{code:'EET 04201',name:'Engineering Material'},{code:'EET 04202',name:'Electrical Draughting and Earthing Test'},{code:'ETT 04201',name:'Digital Combinational Circuits'},{code:'ETT 04202',name:'Basic Logic Circuit and Troubleshooting Practice'},{code:'EWT 04201',name:'Wind Turbine Technology and Applications'},{code:'IPT 04',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05101',name:'Differentiation and Integration'},{code:'GST 05102',name:'Thermal Energy, Waves and Organic Compounds'},{code:'GST 05103',name:'Introduction to Programming Using C'},{code:'EET 05101',name:'DC Machines'},{code:'ETT 05101',name:'Analogue Electronics Devices and Circuit'},{code:'ETT 05102',name:'Electronics Circuit Software and Power Supply'},{code:'MET 05108',name:'Fundamental of Turning, Milling and Welding Technology'},{code:'EWT 05101',name:'Wind Energy Resources'},{code:'EWT 05102',name:'Wind Energy System'},{code:'RET 05101',name:'Renewable Energy Technology'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05201',name:'Differential Equations and Complex Numbers'},{code:'GST 05202',name:'English Language Skills'},{code:'GST 05203',name:'Basics of Entrepreneurship'},{code:'GST 05204',name:'Introduction to Computer Networking'},{code:'EWT 05201',name:'Wind Turbine Design and Control'},{code:'ETT 05201',name:'Digital Sequential Circuit'},{code:'ETT 05202',name:'Power Electronics'},{code:'ETT 05203',name:'Digital Sequential Lab'},{code:'EET 05202',name:'Industrial Installation and Transformer Rewinding'},{code:'EET 05203',name:'Electrical Power Utilization'},{code:'IPT 05',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'GST 06101',name:'Coordinate Geometry and Differential Equations'},{code:'GST 06103',name:'Workplace Communication'},{code:'ETT 06101',name:'Analogue Electronics Design'},{code:'ETT 06102',name:'Applied Microcontroller'},{code:'EET 06101',name:'Induction Motors'},{code:'EET 06102',name:'Automation'},{code:'EWT 06103',name:'Wind Energy Siting and Installation'},{code:'EET 06104',name:'Electrical Power Protection'},{code:'EWT 06104',name:'Wind Energy Project I'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GST 06201',name:'Linear Programming and Probability'},{code:'GST 06202',name:'Enterprise Management'},{code:'EET 06201',name:'Synchronous and Special Machines'},{code:'EET 06205',name:'Electrical Power Transmission and Distribution'},{code:'EWT 06201',name:'Wind Energy Systems Maintenance and Management'},{code:'EWT 06202',name:'Energy Efficiency and Economics'},{code:'EWT 06203',name:'Renewable Energy Hybrid System Design'},{code:'EWT 06204',name:'Meteorological Analysis and Forecasting'},{code:'EWT 06205',name:'Wind Energy Project II'}]}],
 careers:{employed:[
  {emoji:'🌬️',role:{en:'Wind Energy Technician',sw:'Fundi wa Nishati ya Upepo'},desc:{en:'Install and maintain wind turbines',sw:'Weka na matengenezo ya mitambo ya upepo'},salary:'TZS 900K–2.5M/month'},
  {emoji:'☀️',role:{en:'Renewable Energy Engineer',sw:'Mhandisi wa Nishati Mbadala'},desc:{en:'Work on solar, wind and hybrid energy systems',sw:'Fanya kazi kwenye mifumo ya jua, upepo na hybrid'},salary:'TZS 1M–3M/month'}],
 self:[
  {emoji:'⚡',role:{en:'Renewable Energy Installer',sw:'Msakinishaji wa Nishati Mbadala'},desc:{en:'Install solar and wind energy systems for homes and businesses',sw:'Weka mifumo ya jua na upepo kwa nyumba na biashara'}}]}},

{id:14,dept:'Electrical',icon:'☢️',type:'ordinary',comingSoon:true,
 name:{en:'Ordinary Diploma in Nuclear Science and Technology',sw:'Stashahada ya Sayansi na Teknolojia ya Nyuklia'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[],
 careers:{employed:[
  {emoji:'☢️',role:{en:'Nuclear Technician',sw:'Fundi wa Nyuklia'},desc:{en:'Work with Tanzania Atomic Energy Commission (TAEC)',sw:'Fanya kazi na Tume ya Nishati ya Atomiki Tanzania (TAEC)'},salary:'TZS 1M–3M/month'},
  {emoji:'🔬',role:{en:'Radiation Safety Officer',sw:'Afisa wa Usalama wa Mionzi'},desc:{en:'Monitor and control radiation in hospitals and industries',sw:'Fuatilia na dhibiti mionzi hospitalini na viwandani'},salary:'TZS 1M–2.5M/month'}],
 self:[
  {emoji:'🏥',role:{en:'Radiation Safety Consultant',sw:'Mshauri wa Usalama wa Mionzi'},desc:{en:'Advise hospitals on safe use of radiation equipment',sw:'Shauri hospitali kuhusu matumizi salama ya vifaa vya mionzi'}}]}},

{id:15,dept:'Electrical',icon:'🎛️',type:'ordinary',
 name:{en:'Ordinary Diploma in Instrumentation Engineering',sw:'Stashahada ya Uhandisi wa Vyombo vya Kupimia'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04111',name:'Algebra and Trigonometry'},{code:'GST 04112',name:'Fundamentals of Mechanics'},{code:'ITT 04117',name:'Basic Computer Applications'},{code:'IET 04111',name:'Occupational Health and Safety'},{code:'IET 04112',name:'Technical Drawing'},{code:'IET 04113',name:'Electrical Installation'},{code:'IET 04114',name:'Electrical Circuit Troubleshooting'},{code:'IET 04115',name:'Electrical Measurements'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04211',name:'Linear Algebra, Complex Number and Statistics'},{code:'GST 04213',name:'Business Communication Skills'},{code:'GST 04214',name:'Entrepreneurship for Technician'},{code:'IET 04211',name:'Printed Circuit Board and Draughting Techniques'},{code:'IET 04213',name:'Electrical Power Utilization'},{code:'IET 04214',name:'Fundamentals of Electronic Circuit Constructions'},{code:'IET 04215',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05111',name:'Differentiation and Integration'},{code:'IET 05111',name:'Basics of Pneumatics and Hydraulics Systems'},{code:'IET 05112',name:'Measurements and Instrumentation Technology'},{code:'IET 05113',name:'Electrical Machines Installation and Maintenance'},{code:'IET 05114',name:'Analogue Electronics'},{code:'IET 05115',name:'DC Machines'},{code:'IET 05116',name:'Sensors and Signal Conditioning'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05211',name:'Differential Equations and Laplace Transforms'},{code:'IET 05211',name:'AC Machines'},{code:'IET 05212',name:'Digital Principles and Applications'},{code:'IET 05213',name:'Basics of Mechatronics Engineering'},{code:'IET 05214',name:'Computer Aided Drawing'},{code:'IET 05215',name:'Data Structure'},{code:'IET 05216',name:'Research Methodology'},{code:'IET 05217',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'IET 06111',name:'Project Management'},{code:'IET 06112',name:'Applied Microcontroller'},{code:'IET 06113',name:'Industrial Automation Systems'},{code:'IET 06114',name:'Control Systems Engineering'},{code:'IET 06115',name:'Engineering Project Design'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'IET 06211',name:'Industrial Process Control and Monitoring'},{code:'IET 06212',name:'Signal Processing and Applications'},{code:'IET 06213',name:'Instruments Maintenance and Repair'},{code:'IET 06214',name:'Telemetry Systems Installation and Maintenance'},{code:'IET 06215',name:'Engineering Project Implementation'}]}],
 careers:{employed:[
  {emoji:'🎛️',role:{en:'Instrumentation Technician',sw:'Fundi wa Vyombo vya Kupimia'},desc:{en:'Maintain measurement and control systems in factories',sw:'Matengenezo ya mifumo ya kupimia na udhibiti viwandani'},salary:'TZS 900K–2.5M/month'},
  {emoji:'🏭',role:{en:'Process Control Engineer',sw:'Mhandisi wa Udhibiti wa Uzalishaji'},desc:{en:'Monitor and control industrial manufacturing processes',sw:'Fuatilia na udhibiti michakato ya uzalishaji viwandani'},salary:'TZS 1M–3M/month'}],
 self:[
  {emoji:'🔧',role:{en:'Instrumentation Consultant',sw:'Mshauri wa Vyombo vya Kupimia'},desc:{en:'Calibrate and service instruments for industries',sw:'Rekebisha na hudumia vyombo vya kupimia kwa viwanda'}}]}},

// ===== MECHANICAL =====
{id:16,dept:'Mechanical',icon:'⚙️',type:'ordinary',
 name:{en:'Ordinary Diploma in Mechanical Engineering',sw:'Stashahada ya Uhandisi wa Mitambo'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04111',name:'Algebra and Trigonometry'},{code:'MET 04111',name:'Basics of Engineering Drawing'},{code:'MET 04112',name:'Basics of Engineering Materials'},{code:'MET 04113',name:'Mechanical Engineering Science'},{code:'MET 04114',name:'Basics of Automotive Technology'},{code:'MET 04115',name:'General Workshop Practice'},{code:'MET 04116',name:'Occupational Health, Safety and Work Relations'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04211',name:'Linear Algebra, Complex Numbers and Statistics'},{code:'GST 04213',name:'Business Communication Skills'},{code:'MET 04211',name:'Isometric, Orthographic, Interpenetration and Development Drawings'},{code:'MET 04213',name:'Machine Shop Technology'},{code:'MET 04214',name:'Fundamentals of Electrical Engineering Science'},{code:'MET 04215',name:'Industrial Practical Training – IPT 1'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05111',name:'Differentiation and Integration'},{code:'GST 05113',name:'Introduction to Programming Using C Language'},{code:'MET 05111',name:'Details and Assembly Drawing'},{code:'MET 05112',name:'Basics of Machine Elements and Design'},{code:'MET 05113',name:'Strength of Materials'},{code:'MET 05114',name:'Applied Thermodynamics'},{code:'MET 05115',name:'Basic Welding Technology'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05211',name:'Differential Equations and Coordinate Geometry'},{code:'ITT 05218',name:'Introduction to Networking'},{code:'MET 05211',name:'Fundamentals of Computer Aided Drafting'},{code:'MET 05212',name:'Measurements and Control Technology'},{code:'MET 05213',name:'Fluid Mechanics'},{code:'MET 05214',name:'Foundry and Metal Forming'},{code:'MET 05215',name:'Metal Surface Treatment and Painting'},{code:'MET 05216',name:'Industrial Practical Training – IPT 2'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'MET 06111',name:'3D Modelling in SolidWorks'},{code:'MET 06112',name:'PLC Controlled Pneumatic and Hydraulic Systems'},{code:'MET 06113',name:'Welding Technology'},{code:'MET 06114',name:'Power Production'},{code:'MET 06115',name:'Fundamentals of Refrigeration Systems'},{code:'MET 06116',name:'Environmental Management and Climate Change'},{code:'MET 06117',name:'Mechanical Engineering Project I – Design'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'MET 06211',name:'CNC Programming and Application'},{code:'MET 06212',name:'Fundamentals of Air-conditioning System'},{code:'MET 06213',name:'Fundamentals of Pump and Compressor Systems'},{code:'MET 06214',name:'Machine Installation, Commissioning and Maintenance'},{code:'MET 06215',name:'Workshop Management'},{code:'MET 06216',name:'Mechanical Engineering Project II – Production'}]}],
 careers:{employed:[
  {emoji:'⚙️',role:{en:'Mechanical Engineer',sw:'Mhandisi wa Mitambo'},desc:{en:'Design and maintain machinery in factories and industries',sw:'Buni na matengenezo ya mashine viwandani'},salary:'TZS 1M–3.5M/month'},
  {emoji:'🏭',role:{en:'Production Engineer',sw:'Mhandisi wa Uzalishaji'},desc:{en:'Oversee manufacturing processes in factories',sw:'Simamia michakato ya utengenezaji viwandani'},salary:'TZS 1M–3M/month'}],
 self:[
  {emoji:'🔧',role:{en:'Workshop / Garage Owner',sw:'Mmiliki wa Karakana'},desc:{en:'Run your own machine repair and fabrication workshop',sw:'Endesha karakana yako ya kutengeneza mashine'}}]}},

{id:17,dept:'Mechanical',icon:'🌱',type:'ordinary',
 name:{en:'Ordinary Diploma in Mechanical and Bio-energy Engineering',sw:'Stashahada ya Uhandisi wa Mitambo na Nishati ya Kibiolojia'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04101',name:'Algebra and Trigonometry'},{code:'GST 04102',name:'Mechanics and Nuclear Physics'},{code:'GST 04103',name:'Basics of English Language'},{code:'EET 04101',name:'Basic Electrical Engineering'},{code:'MET 04101',name:'Basics of Engineering Drawing'},{code:'MET 04102',name:'Mechanical Engineering Materials'},{code:'MET 04105',name:'Basics of Manufacturing Engineering'},{code:'MBT 04101',name:'Energy and Environment'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'GST 04201',name:'Series and Boolean Algebra'},{code:'GST 04202',name:'Basic Entrepreneurship'},{code:'GST 04203',name:'Microcomputer Application'},{code:'MET 04201',name:'Pictorial, Orthographic and Auxiliary Drawing'},{code:'MET 04203',name:'Mechanical Engineering Science'},{code:'MET 04205',name:'Machine Tools/Processes and Maintenance'},{code:'MBT 04201',name:'Fundamentals of Bioenergy Technology'},{code:'MBT 04202',name:'Bioenergy Materials'},{code:'MET 04225',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05101',name:'Differentiation and Integration'},{code:'GST 05102',name:'Thermal Energy, Waves and Organic Compounds'},{code:'GST 05103',name:'Introduction to C Programming'},{code:'MET 05101',name:'Sectioning, Development, and Interpenetration Drawings'},{code:'MET 05102',name:'Strength of Materials'},{code:'MET 05103',name:'Welding and Metal Fabrication'},{code:'MET 05107',name:'Engineering Thermodynamics'},{code:'RET 05101',name:'Renewable Energy Technology'},{code:'MBT 05103',name:'Assessment of Biomass Technology'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GST 05201',name:'Differential Equations and Complex Numbers'},{code:'GST 05202',name:'English Language Skills'},{code:'GST 05203',name:'Entrepreneurship for Technicians'},{code:'GST 05204',name:'Computer Networking'},{code:'MET 05201',name:'Detail and Assembly Drawing'},{code:'MET 05205',name:'Foundry and Metal Forming'},{code:'MET 05207',name:'Fluid Mechanics'},{code:'MET 05208',name:'Measurements, Instrumentation and Control Technology'},{code:'MET 05215',name:'Power Production'},{code:'EET 05203',name:'Electrical Power Utilization'},{code:'MBT 05201',name:'Design of Bioenergy Conversion Systems'},{code:'MBT 05202',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'GST 06101',name:'Coordinate Geometry and Differential Equations'},{code:'GST 06102',name:'Workplace Communication'},{code:'MBT 06101',name:'Construction of Gasifiers'},{code:'MBT 06102',name:'Organic Compounds'},{code:'MET 06101',name:'Fundamentals of AutoCAD'},{code:'MET 06102',name:'Machine Elements and Design'},{code:'MET 06105',name:'Fundamentals of Refrigeration Systems'},{code:'MBT 06103',name:'Bioenergy Project I – Design'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GST 06201',name:'Linear Programming and Probability'},{code:'GST 06202',name:'Enterprise Management'},{code:'MBT 06201',name:'Material Technology'},{code:'MBT 06202',name:'Construction of Bio-digester'},{code:'MET 06208',name:'Fundamental of 3D Modelling Using Solid Works'},{code:'MET 06209',name:'Fundamentals of Air-conditioning System'},{code:'MET 06211',name:'Industrial Automation'},{code:'MET 06212',name:'Mechanical Workshop Management'},{code:'RET 06201',name:'Renewable Energy Hybrid System Design'},{code:'MBT 06203',name:'Bioenergy Project II – Production'}]}],
 careers:{employed:[
  {emoji:'🌱',role:{en:'Bioenergy Engineer',sw:'Mhandisi wa Nishati ya Kibiolojia'},desc:{en:'Work on biogas, biomass and renewable energy projects',sw:'Fanya kazi kwenye miradi ya biogas, biomass na nishati mbadala'},salary:'TZS 900K–2.5M/month'}],
 self:[
  {emoji:'🔥',role:{en:'Biogas Plant Installer',sw:'Msakinishaji wa Mitambo ya Biogas'},desc:{en:'Install biogas digesters for farms and homes',sw:'Weka mitambo ya biogas kwa mashamba na nyumba'}}]}},

{id:18,dept:'Mechanical',icon:'🔩',type:'ordinary',
 name:{en:'Ordinary Diploma in Pipe Works, Water, Oil and Gas Engineering',sw:'Stashahada ya Uhandisi wa Mabomba, Maji, Mafuta na Gesi'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'MET 04111',name:'Basics of Engineering Drawing'},{code:'MET 04112',name:'Basics of Engineering Materials'},{code:'PWT 04111',name:'Piping Components and Metering'},{code:'PWT 04112',name:'Basics of Electrical and Electronics Engineering'},{code:'PWT 04113',name:'Benchwork for Pipework'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'PWT 05111',name:'Low and High Pressure Steam Piping Systems'},{code:'PWT 05112',name:'Plumbing System Design'},{code:'PWT 05213',name:'Fire Protection Piping Systems Design'},{code:'MET 05115',name:'Basic Welding Technology'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'MET 06112',name:'PLC Controlled Pneumatic and Hydraulic Systems'},{code:'PWT 06111',name:'Pump and Compressor Technology'},{code:'PWT 06113',name:'Pipe Welding Technology'},{code:'MET 06111',name:'3D Modelling in SolidWorks'},{code:'PWT 06112',name:'Pipe-work Engineering Project I – Design'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'PWT 06212',name:'Solar Thermal Energy Systems'},{code:'PWT 06213',name:'Principles of Water, Oil and Gas Control'},{code:'PWT 06214',name:'Water, Oil and Gas Piping, Operation and System Planning'},{code:'PWT 06215',name:'Oil and Gas Fired Appliances and Pressure Vessels'},{code:'PWT 06216',name:'Pipe-works Engineering Project II – Installation'}]}],
 careers:{employed:[
  {emoji:'🔩',role:{en:'Pipework Engineer',sw:'Mhandisi wa Mabomba'},desc:{en:'Install and maintain pipe systems in buildings and industries',sw:'Weka na matengenezo ya mabomba majengo na viwandani'},salary:'TZS 900K–2.5M/month'},
  {emoji:'⛽',role:{en:'Oil & Gas Technician',sw:'Fundi wa Mafuta na Gesi'},desc:{en:'Work on oil, gas and petroleum pipe systems',sw:'Fanya kazi kwenye mifumo ya mabomba ya mafuta na gesi'},salary:'TZS 1.2M–4M/month'}],
 self:[
  {emoji:'🔧',role:{en:'Plumbing Contractor',sw:'Mkandarasi wa Mabomba'},desc:{en:'Run your own plumbing and pipe installation business',sw:'Endesha biashara yako ya kuweka mabomba'}}]}},

{id:19,dept:'Mechanical',icon:'💎',type:'ordinary',
 name:{en:'Ordinary Diploma in Geology and Gemstone Processing Engineering',sw:'Stashahada ya Uhandisi wa Jiolojia na Usindikaji wa Madini'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics/Eng. Science, Maths, Chemistry, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GGT 04111',name:'Introduction to Geology and Earth Processes'},{code:'GGT 04112',name:'Fundamentals of Gemmology'},{code:'GGT 04113',name:'Occupational Health, Safety and Work Relations'},{code:'GGT 04114',name:'Basics of Land Surveying'},{code:'GGT 04115',name:'Basics of Gemstone Cutting and Polishing'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GGT 05111',name:'Electricity and Magnetism'},{code:'GGT 05112',name:'Ore Geology'},{code:'GGT 05113',name:'Introduction to Petrology'},{code:'GGT 05114',name:'Geochemistry Survey'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'GGT 05211',name:'Exploration Drilling'},{code:'GGT 05212',name:'Laboratory Techniques for Geology'},{code:'GGT 05213',name:'Geophysics Surveying'},{code:'GGT 05214',name:'Ore Loss and Recovery Control'},{code:'GGT 05215',name:'Introduction to Petroleum Geology'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'GGT 06111',name:'Introduction to Hydrogeology'},{code:'GGT 06112',name:'Mining Geology'},{code:'GGT 06113',name:'Exploration Geology Project Management'},{code:'GGT 06114',name:'Application of GIS Technology in Geology'},{code:'GGT 06115',name:'Advanced Gemstone Cutting and Polishing'},{code:'GGT 06116',name:'Environmental Management and Climate Change'},{code:'GGT 06117',name:'Project Design'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GGT 06211',name:'Engineering Geology'},{code:'GGT 06212',name:'Mining Survey'},{code:'GGT 06213',name:'Rock Carving Techniques'},{code:'GGT 06214',name:'Mining Geology Software'},{code:'GGT 06215',name:'Legal Structure in Mining Operation'},{code:'GGT 06216',name:'Mine Hazards'},{code:'GGT 06217',name:'Project Implementation'}]}],
 careers:{employed:[
  {emoji:'💎',role:{en:'Gemologist / Gemstone Technician',sw:'Mtaalamu wa Madini ya Thamani'},desc:{en:'Grade and process gemstones for export companies',sw:'Panga na sinda madini ya thamani kwa makampuni ya usafirishaji'},salary:'TZS 800K–2.5M/month'},
  {emoji:'⛏️',role:{en:'Mining Engineer',sw:'Mhandisi wa Machimbo'},desc:{en:'Work in Tanzania mining industry (gold, diamonds, tanzanite)',sw:'Fanya kazi katika viwanda vya madini Tanzania'},salary:'TZS 1M–4M/month'}],
 self:[
  {emoji:'💍',role:{en:'Gemstone Business / Jewellery',sw:'Biashara ya Madini na Vito'},desc:{en:'Buy, process and sell gemstones and jewellery',sw:'Nunua, sinda na uza madini ya thamani na vito'}}]}},

// ===== ICT =====
{id:20,dept:'ICT',icon:'💻',type:'ordinary',
 name:{en:'Ordinary Diploma in Computer Science',sw:'Stashahada ya Sayansi ya Kompyuta'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes including Basic Maths and English.',sw:'CSEE na angalau alama 4 za D ikiwemo Hisabati na Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04103',name:'English Language Basics'},{code:'GST 04106',name:'Elementary Mathematics'},{code:'ITT 04101',name:'Computer Fundamentals and Applications'},{code:'ITT 04102',name:'Microcomputer Applications'},{code:'CST',name:'Basics of Computer Networks'},{code:'—',name:'Basics of Electronics'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'—',name:'Computer Maintenance and Troubleshooting'},{code:'—',name:'Web Design'},{code:'GST 04202',name:'Gender and HIV'},{code:'CST 04201',name:'Programming Using C'},{code:'CST 04202',name:'Basics of Multimedia'},{code:'GST 04204',name:'Matrices, Statistics and Complex Numbers'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'—',name:'Computer Network Design and Administration'},{code:'CST 05101',name:'Computer Architecture'},{code:'—',name:'Object Oriented Programming Using C++'},{code:'—',name:'Database Management and Implementation'},{code:'ITT 05105',name:'Multimedia Technology'},{code:'GST 05108',name:'Business Communication Skills'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'—',name:'Web Programming'},{code:'—',name:'Fundamentals of Linux Administration'},{code:'—',name:'Object Oriented Programming Using JAVA'},{code:'CST 05205',name:'Operating Systems'},{code:'CST 05206',name:'Programming for Mobile Devices'},{code:'GST 05203',name:'Basics of Entrepreneurship'},{code:'—',name:'Industrial Practical Training (IPT)'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'GSD 06106',name:'Discrete Mathematics'},{code:'CSD 06101',name:'Software Design and Development'},{code:'CSD 06102',name:'Cyber Security'},{code:'CSD 06103',name:'Python Programming'},{code:'CSD 06104',name:'Information System Project Management'},{code:'FYP I',name:'Final Year Project I'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GSD 06203',name:'Supervisory Communication Skills'},{code:'CSD 06201',name:'Advanced Network Management'},{code:'CSD 06202',name:'Java Programming'},{code:'CSD 06203',name:'Fundamental of Data Structures and Algorithms'},{code:'CSD 06204',name:'Microprocessor Technology'},{code:'ITT 06201',name:'Principles of Management'},{code:'FYP II',name:'Final Year Project II'}]}],
 careers:{employed:[
  {emoji:'💻',role:{en:'Software Developer',sw:'Mtengenezaji wa Programu'},desc:{en:'Build apps and systems for companies and startups',sw:'Tengeneza programu na mifumo kwa makampuni'},salary:'TZS 1M–3M/month'},
  {emoji:'🔒',role:{en:'Cybersecurity Analyst',sw:'Mchambuzi wa Usalama wa Mtandao'},desc:{en:'Protect company systems from hackers and threats',sw:'Linda mifumo ya makampuni dhidi ya wavamizi'},salary:'TZS 1.5M–4M/month'}],
 self:[
  {emoji:'🚀',role:{en:'Tech Startup Founder',sw:'Mwanzilishi wa Kampuni ya Teknolojia'},desc:{en:'Build your own software products and sell them',sw:'Jenga bidhaa zako za programu na uziuze'}},
  {emoji:'🖥️',role:{en:'Freelance Developer',sw:'Msanidi Huru'},desc:{en:'Work remotely for clients via Upwork, Fiverr',sw:'Fanya kazi kwa wateja kupitia Upwork, Fiverr'}}]}},

{id:21,dept:'ICT',icon:'🌐',type:'ordinary',
 name:{en:'Ordinary Diploma in Information Technology',sw:'Stashahada ya Teknolojia ya Habari'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes including English.',sw:'CSEE na angalau alama 4 za D ikiwemo Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'GST 04103',name:'English Language Basics'},{code:'GST 04106',name:'Elementary Mathematics'},{code:'ITT 04101',name:'Computer Fundamentals and Applications'},{code:'ITT 04102',name:'Microcomputer Applications'},{code:'ITT 04103',name:'Basics of Computer Networks'},{code:'ITT 04104',name:'Basics of Electronics'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'ITT 04201',name:'Computer Maintenance and Troubleshooting'},{code:'ITT 04202',name:'Web Design'},{code:'ITT 04203',name:'Gender and HIV'},{code:'ITT 04204',name:'Programming Using C'},{code:'ITT 04205',name:'Basics of Multimedia'},{code:'ITT 04206',name:'Industrial Practical Training (IPT)'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'GST 05108',name:'Business Communication Skills'},{code:'ITT 05101',name:'Computer Network Design and Administration'},{code:'CST 05101',name:'Computer Architecture'},{code:'ITT 05103',name:'Multimedia Technology'},{code:'ITT 05104',name:'Database Management and Implementation'},{code:'ITT 05105',name:'Object Oriented Programming Using C++'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'ITT 05201',name:'Web Programming'},{code:'ITT 05202',name:'Fundamentals of Linux Administration'},{code:'ITT 05203',name:'Object Oriented Programming Using JAVA'},{code:'ITT 05204',name:'Computer Maintenance and Repair'},{code:'ITT 05205',name:'Operating Systems'},{code:'CST 05206',name:'Programming for Mobile Devices'},{code:'GST 05203',name:'Basics of Entrepreneurship'},{code:'ITT 05206',name:'Industrial Practical Training (IPT)'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'ITD 06101',name:'System Analysis and Design'},{code:'ITD 06102',name:'Python Programming'},{code:'ITD 06103',name:'Cyber Security'},{code:'ITD 06104',name:'System Administration'},{code:'ITD 06105',name:'Information System Project Management'},{code:'FYP 01',name:'Final Year Project I'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'GSD 06203',name:'Supervisory Communication Skills'},{code:'ITD 06201',name:'Principles of Management'},{code:'ITD 06202',name:'Wireless Networking'},{code:'ITD 06203',name:'Advanced Network Management'},{code:'ITD 06204',name:'Final Year Project II'}]}],
 careers:{employed:[
  {emoji:'🌐',role:{en:'Network Administrator',sw:'Msimamizi wa Mtandao'},desc:{en:'Manage and maintain computer networks in organizations',sw:'Simamia mitandao ya kompyuta katika mashirika'},salary:'TZS 900K–2.5M/month'},
  {emoji:'🖥️',role:{en:'System Administrator',sw:'Msimamizi wa Mifumo'},desc:{en:'Manage servers and IT infrastructure',sw:'Simamia seva na miundombinu ya IT'},salary:'TZS 1M–3M/month'}],
 self:[
  {emoji:'📶',role:{en:'ISP/WiFi Business Owner',sw:'Mmiliki wa Biashara ya Intaneti'},desc:{en:'Provide internet services to homes and businesses',sw:'Toa huduma za intaneti kwa nyumba na biashara'}}]}},

{id:22,dept:'ICT',icon:'🔒',type:'ordinary',
 name:{en:'Ordinary Diploma in Cyber Security & Digital Forensic',sw:'Stashahada ya Usalama wa Mtandao na Uchunguzi wa Kidijitali'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes including Basic Maths and English.',sw:'CSEE na angalau alama 4 za D ikiwemo Hisabati na Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'CDT 04111',name:'Electronics Application in Computing'},{code:'CDT 04112',name:'Forensic Investigation'},{code:'ITT 04111',name:'Computer Application Operations'},{code:'CST 04112',name:'Computer Networks'},{code:'CST 04212',name:'Multimedia Analysis'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'CDT 04213',name:'Python Programming'},{code:'ITT 04212',name:'Web Development'},{code:'GST 04211',name:'Linear Algebra, Complex Numbers and Statistics'},{code:'GST 04203',name:'Industrial Practical Training (IPT)'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'CDT 05111',name:'Database Systems'},{code:'CDT 05112',name:'Web Application Development'},{code:'CDT 05113',name:'Data Communication'},{code:'CDT 05114',name:'Ethical Hacking'},{code:'CDT 05115',name:'Operating Systems'},{code:'CDT 05116',name:'Linux for Cyber Security'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'CDT 05211',name:'Internet of Things'},{code:'CDT 05212',name:'Cloud Computing'},{code:'CDT 05213',name:'Web Application Security'},{code:'CDT 05214',name:'Digital Forensic'},{code:'CDT 05215',name:'Information System Audit'},{code:'CDT 05216',name:'Biometric Security'},{code:'ITT 05207',name:'Industrial Practical Training (IPT)'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'CDD 06111',name:'Code Exploit Using Python'},{code:'CDD 06112',name:'Fraud Forensic Auditing'},{code:'CDD 06113',name:'Blockchain Technology'},{code:'CDD 06114',name:'Artificial Intelligence in Security'},{code:'CDD 06115',name:'Cloud Computing and IoT Security'},{code:'CDD 06116',name:'Cyber Security Incident Management'},{code:'CDD 06117',name:'Project Design'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'CDD 06211',name:'Encryption Technology'},{code:'CDD 06212',name:'Information Quality Assurance'},{code:'CDD 06213',name:'Database Security'},{code:'CDD 06214',name:'Mobile and Wireless Security'},{code:'CDD 06215',name:'Mobile Device Forensic'},{code:'CDD 06216',name:'Information Security Management'},{code:'CDD 06217',name:'Project Implementation'}]}],
 careers:{employed:[
  {emoji:'🛡️',role:{en:'Cybersecurity Analyst',sw:'Mchambuzi wa Usalama wa Mtandao'},desc:{en:'Monitor and protect organizational networks from attacks',sw:'Fuatilia na linda mitandao ya mashirika dhidi ya mashambulio'},salary:'TZS 1.5M–4M/month'},
  {emoji:'🔍',role:{en:'Digital Forensic Investigator',sw:'Mpelelezi wa Kidijitali'},desc:{en:'Investigate cybercrimes for police and courts',sw:'Chunguza uhalifu wa mtandao kwa polisi na mahakama'},salary:'TZS 1M–3M/month'}],
 self:[
  {emoji:'🔐',role:{en:'Cybersecurity Consultant',sw:'Mshauri wa Usalama wa Mtandao'},desc:{en:'Help businesses secure their systems independently',sw:'Saidia biashara kulinda mifumo yao kwa uhuru'}}]}},

{id:23,dept:'ICT',icon:'🎬',type:'ordinary',
 name:{en:'Ordinary Diploma in Multimedia & Animation Technology',sw:'Stashahada ya Teknolojia ya Midia na Uhuishaji'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes including English.',sw:'CSEE na angalau alama 4 za D ikiwemo Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'MAT 04111',name:'Computer Application Operations'},{code:'MAT 04112',name:'Digital Art and Design'},{code:'MAT 04113',name:'Digital Photography'},{code:'MAT 04114',name:'Occupational Safety and Health Practices'},{code:'MAT 04115',name:'Introduction to Programming'},{code:'MAT 04116',name:'Computer Networks'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'MAT 04211',name:'Graphics Design'},{code:'MAT 04213',name:'Java Programming'},{code:'MAT 04214',name:'Sound Design and Production'},{code:'MAT 04215',name:'Industrial Practical Training (IPT)'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'MAT 05111',name:'Video Production'},{code:'MAT 05112',name:'Preproduction Operations'},{code:'MAT 05113',name:'Database Management and Implementation'},{code:'MAT 05114',name:'Web Design'},{code:'MAT 05115',name:'Legal and Ethical Issues in Multimedia and Animation'},{code:'MAT 05116',name:'UI/UX Design'},{code:'MAT 05117',name:'Multimedia Project Management'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'MAT 05211',name:'2D Animation'},{code:'MAT 05212',name:'Web Programming'},{code:'MAT 05213',name:'Motion Graphics and Visual Effects (VFX)'},{code:'MAT 05214',name:'Programming for Mobile Devices'},{code:'MAT 05215',name:'Operating Systems'},{code:'MAT 05216',name:'Industrial Practical Training (IPT)'}]},
  {label:{en:'NTA Level 6 — Semester I & II (contact ATC)',sw:'Ngazi ya 6 — Wasiliana na ATC'},subjects:[
   {code:'—',name:'NTA Level 6 modules — contact ATC Registrar for full list'}]}],
 careers:{employed:[
  {emoji:'🎨',role:{en:'Graphic Designer',sw:'Mbuni wa Picha'},desc:{en:'Create visual content for brands and media companies',sw:'Tengeneza maudhui ya kuona kwa biashara na kampuni za habari'},salary:'TZS 600K–2M/month'},
  {emoji:'📱',role:{en:'UI/UX Designer',sw:'Mbuni wa Kiolesura cha Mtumiaji'},desc:{en:'Design user interfaces for apps and websites',sw:'Buni miingiliano ya mtumiaji kwa programu na tovuti'},salary:'TZS 1M–3M/month'}],
 self:[
  {emoji:'🎨',role:{en:'Freelance Designer / Animator',sw:'Mbuni / Mhuishaji Huru'},desc:{en:'Work for clients on Fiverr, Upwork, and locally',sw:'Fanya kazi kwa wateja kwenye Fiverr, Upwork, na ndani ya nchi'}},
  {emoji:'📺',role:{en:'Content Creator / YouTuber',sw:'Mtengenezaji wa Maudhui / YouTuber'},desc:{en:'Build a YouTube or social media channel and monetize it',sw:'Jenga channel ya YouTube na uipate pesa'}}]}},

// ===== SCIENCE =====
{id:24,dept:'Science',icon:'🔬',type:'ordinary',
 name:{en:'Ordinary Diploma in Laboratory Science & Technology',sw:'Stashahada ya Sayansi na Teknolojia ya Maabara'},
 duration:{en:'3 Years',sw:'Miaka 3'},
 entry:{en:'CSEE with min. 4 D-grade passes in Physics, Maths, Chemistry, Biology, English.',sw:'CSEE na angalau alama 4 za D katika Fizikia, Hisabati, Kemia, Biolojia, Kiingereza.'},
 semesters:[
  {label:{en:'NTA Level 4 — Semester I',sw:'Ngazi ya 4 — Muhula I'},subjects:[
   {code:'LST 04101',name:'Basic Mechanics for Laboratory Technology'},{code:'LST 04102',name:'Laboratory Safety, Procurement and Organization'},{code:'LST 04103',name:'Laboratory Techniques and Preparation of Reagents'},{code:'LST 04104',name:'Fundamentals of Cell Biology'},{code:'LST 04105',name:'Specimen Collection and Preservation'},{code:'LST 04106',name:'Basic Laboratory Instrumentation'}]},
  {label:{en:'NTA Level 4 — Semester II',sw:'Ngazi ya 4 — Muhula II'},subjects:[
   {code:'LST 04201',name:'Basic Biology Experimentation'},{code:'LST 04202',name:'Qualitative Analysis'},{code:'LST 04203',name:'Inorganic Chemistry'},{code:'LST 04204',name:'Basic Mechanics Practical for Laboratory'},{code:'LST 04205',name:'Gender Issues and Professional Ethics'},{code:'LPT 04201',name:'Laboratory Practical Training'}]},
  {label:{en:'NTA Level 5 — Semester I',sw:'Ngazi ya 5 — Muhula I'},subjects:[
   {code:'LST 05101',name:'Basics of Pesticides and Phytochemistry'},{code:'LST 05102',name:'Principles of Thermodynamics and Optical Devices'},{code:'LST 05103',name:'Fundamentals of Analogue Electronics'},{code:'LST 05104',name:'Quantitative Analysis'},{code:'LST 05105',name:'Fundamentals of Physical Chemistry'},{code:'LST 05106',name:'Basics of Plant and Animal Physiology'},{code:'LST 05107',name:'Thermo Chemistry and Chemical Kinetics'}]},
  {label:{en:'NTA Level 5 — Semester II',sw:'Ngazi ya 5 — Muhula II'},subjects:[
   {code:'LST 05201',name:'Digital Technology'},{code:'LST 05202',name:'Fundamentals of Microbiology and Tissue Culture'},{code:'LST 05203',name:'Heat and Thermodynamics Practicals'},{code:'LST 05204',name:'Water Quality Control'},{code:'LST 05205',name:'Laboratory Practical Training'}]},
  {label:{en:'NTA Level 6 — Semester I',sw:'Ngazi ya 6 — Muhula I'},subjects:[
   {code:'LST 06101',name:'Current Electricity and Waves Theory'},{code:'LST 06102',name:'Electronics Practicals'},{code:'LST 06103',name:'Analytical Instrumentation'},{code:'LST 06104',name:'Organic Chemistry'},{code:'LST 06105',name:'Introduction to Immunology and Parasitology'},{code:'LST 06107',name:'Research Techniques'}]},
  {label:{en:'NTA Level 6 — Semester II',sw:'Ngazi ya 6 — Muhula II'},subjects:[
   {code:'LST 06201',name:'Radiation Protection and Safety'},{code:'LST 06202',name:'Electrical and Waves Practicals'},{code:'LST 06203',name:'Fundamentals of Industrial Chemistry'},{code:'LST 06204',name:'Molecular Genetics'},{code:'LST 06205',name:'Quality Control and Assurance'},{code:'LST 06206',name:'Project'}]}],
 careers:{employed:[
  {emoji:'🔬',role:{en:'Laboratory Technician',sw:'Fundi wa Maabara'},desc:{en:'Work in hospital, research, or industrial labs',sw:'Fanya kazi katika maabara ya hospitali, utafiti, au viwanda'},salary:'TZS 700K–2M/month'},
  {emoji:'💊',role:{en:'Quality Control Analyst',sw:'Mchambuzi wa Ubora'},desc:{en:'Test products in pharmaceutical and food industries',sw:'Pima bidhaa katika viwanda vya dawa na chakula'},salary:'TZS 800K–2.5M/month'}],
 self:[
  {emoji:'🧪',role:{en:'Private Lab Services',sw:'Huduma za Maabara Binafsi'},desc:{en:'Offer water, food, and soil testing services',sw:'Toa huduma za kupima maji, chakula, na udongo'}}]}},

// ===== BACHELOR DEGREES =====
{id:25,dept:'ICT',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Computer Science (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Sayansi ya Kompyuta (Ngazi ya 7–8)'},
 duration:{en:'2 Years (after Diploma)',sw:'Miaka 2 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Computer Science or related. Or A-Level with relevant subjects.',sw:'Stashahada ya Sayansi ya Kompyuta au sawa nayo. Au Kidato cha 6 na masomo husika.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester I',sw:'Ngazi ya 7 — Muhula I'},subjects:[
   {code:'GSU 07112',name:'Applied Mathematics'},{code:'GSU 07113',name:'Technical Communication Skills'},{code:'GSU 07114',name:'Entrepreneurship'},{code:'CSU',name:'Programming in C'},{code:'ITU',name:'Front-End Web Development'},{code:'CSU',name:'Digital Electronics'},{code:'ITU',name:'Computer Network Design'},{code:'CSU',name:'Database Systems'}]},
  {label:{en:'NTA Level 7 — Semester II',sw:'Ngazi ya 7 — Muhula II'},subjects:[
   {code:'CSU',name:'Data Structure and Algorithms'},{code:'ITU',name:'Back-End Web Development'},{code:'CSU',name:'Operating Systems'},{code:'CSU',name:'Python Programming'},{code:'ITU',name:'Computer Security'},{code:'ITU',name:'Multimedia'},{code:'CSU',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 7 — Semester III',sw:'Ngazi ya 7 — Muhula III'},subjects:[
   {code:'CSU',name:'OOP Using Java'},{code:'CSU',name:'Encryption Technology'},{code:'CSU',name:'Communication Networks'},{code:'CSU',name:'Computer Architecture'},{code:'CSU',name:'Software Engineering'},{code:'CSU',name:'Intelligent Systems'},{code:'CSU',name:'Database Management'}]},
  {label:{en:'NTA Level 7 — Semester IV',sw:'Ngazi ya 7 — Muhula IV'},subjects:[
   {code:'CSU',name:'Mobile Applications Development'},{code:'CSU',name:'Human Computer Interaction'},{code:'CSU',name:'3D Modelling'},{code:'CSU',name:'Machine Learning'},{code:'CSU',name:'Computer Vision / Advanced Topic'},{code:'ITU',name:'Research Methodology'},{code:'CSU',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 8 — Semester I',sw:'Ngazi ya 8 — Muhula I'},subjects:[
   {code:'CSU',name:'Cloud Computing'},{code:'CSU',name:'Internet of Things'},{code:'CSU',name:'Data Analytics'},{code:'CSU',name:'Wireless Technology'},{code:'ITU',name:'Ethical Hacking'},{code:'CSU',name:'Project Design'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'ITU',name:'Mobile Security'},{code:'—',name:'Information System Security'},{code:'ITU',name:'System Administration'},{code:'—',name:'Network Management and Administration'},{code:'—',name:'Project Implementation'}]}],
 careers:{employed:[
  {emoji:'💻',role:{en:'Senior Software Engineer',sw:'Mhandisi Mkuu wa Programu'},desc:{en:'Lead software development teams at tech companies',sw:'Ongoza timu za utengenezaji programu kampuni za teknolojia'},salary:'TZS 2M–6M/month'},
  {emoji:'🤖',role:{en:'AI/ML Engineer',sw:'Mhandisi wa AI na Kujifunza kwa Mashine'},desc:{en:'Build artificial intelligence and machine learning systems',sw:'Jenga mifumo ya akili bandia na modeli za kujifunza'},salary:'TZS 3M–8M/month'}],
 self:[
  {emoji:'🚀',role:{en:'Tech Startup Co-Founder',sw:'Mwanzilishi wa Kampuni ya Teknolojia'},desc:{en:'Build innovative tech products for Tanzania and Africa',sw:'Jenga bidhaa za teknolojia za ubunifu kwa Tanzania na Afrika'}}]}},

{id:26,dept:'ICT',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Information Technology (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Teknolojia ya Habari (Ngazi ya 7–8)'},
 duration:{en:'2 Years (after Diploma)',sw:'Miaka 2 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in IT or related. Or A-Level with relevant subjects.',sw:'Stashahada ya IT au sawa nayo. Au Kidato cha 6 na masomo husika.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester I',sw:'Ngazi ya 7 — Muhula I'},subjects:[
   {code:'GSU 07112',name:'Algebra and Matrices'},{code:'GSU 07113',name:'Technical Communication Skills'},{code:'ITU',name:'Front-End Web Development'},{code:'ITU',name:'Computer Network Design'},{code:'CSU',name:'Database Systems'},{code:'CSU',name:'Digital Electronics'}]},
  {label:{en:'NTA Level 7 — Semester II–IV',sw:'Ngazi ya 7 — Muhula II–IV'},subjects:[
   {code:'CSU',name:'Data Structure and Algorithms'},{code:'ITU',name:'Back-End Web Development'},{code:'CSU',name:'Python Programming'},{code:'ITU',name:'Computer Security'},{code:'CSU',name:'Java Programming'},{code:'CSU',name:'Machine Learning'},{code:'ITU',name:'Blockchain Technology'},{code:'ITU',name:'Research Methodology'}]},
  {label:{en:'NTA Level 8 — Semester I',sw:'Ngazi ya 8 — Muhula I'},subjects:[
   {code:'—',name:'Data Analytics'},{code:'—',name:'Cloud Computing'},{code:'—',name:'IT Project Management'},{code:'—',name:'3D Printing'},{code:'—',name:'Ethics in Information Technology'},{code:'—',name:'Undergraduate Project Design'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'—',name:'Ethical Hacking'},{code:'—',name:'Information System Auditing'},{code:'—',name:'Server Administration'},{code:'—',name:'Network Management and Administration'},{code:'—',name:'Undergraduate Project Implementation'}]}],
 careers:{employed:[
  {emoji:'📊',role:{en:'IT Manager',sw:'Meneja wa IT'},desc:{en:'Lead IT departments in government and private sectors',sw:'Ongoza idara za IT serikalini na sekta binafsi'},salary:'TZS 1.5M–4M/month'},
  {emoji:'☁️',role:{en:'Cloud Engineer',sw:'Mhandisi wa Wingu'},desc:{en:'Build and manage cloud systems (AWS, Azure, Google Cloud)',sw:'Jenga na simamia mifumo ya wingu (AWS, Azure, Google Cloud)'},salary:'TZS 2M–6M/month'}],
 self:[
  {emoji:'🔧',role:{en:'IT Consultant',sw:'Mshauri wa IT'},desc:{en:'Advise businesses on their IT systems and needs',sw:'Shauri biashara kuhusu mifumo na mahitaji yao ya IT'}}]}},

{id:27,dept:'Civil',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Civil Engineering (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Uhandisi wa Ujenzi (Ngazi ya 7–8)'},
 duration:{en:'2 Years (after Diploma)',sw:'Miaka 2 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Civil Engineering or related. Or A-Level with Physics, Maths, Chemistry.',sw:'Stashahada ya Uhandisi wa Ujenzi au sawa nayo. Au Kidato cha 6 na Fizikia, Hisabati, Kemia.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester I',sw:'Ngazi ya 7 — Muhula I'},subjects:[
   {code:'GSU 07111',name:'Advanced Calculus'},{code:'GSU 07113',name:'Technical Communication Skills'},{code:'GSU 07114',name:'Entrepreneurship'},{code:'CEU 07111',name:'Engineering Surveying'},{code:'CEU 07112',name:'Building Planning and Drawing'},{code:'CEU 07113',name:'Civil Engineering Material'},{code:'CEU 07114',name:'Construction Technology'},{code:'CEU 07115',name:'Basics of Soil Mechanics'}]},
  {label:{en:'NTA Level 7 — Semester II',sw:'Ngazi ya 7 — Muhula II'},subjects:[
   {code:'GSU 07211',name:'Numerical Methods'},{code:'CEU 07211',name:'Concrete Technology'},{code:'CEU 07212',name:'Elementary Structural Analysis'},{code:'CEU 07213',name:'Fluid Mechanics'},{code:'CEU 07214',name:'Engineering Geology'},{code:'CEU 07215',name:'Soil Mechanics'},{code:'CEU 07216',name:'Traffic Engineering'},{code:'CEU 07217',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 7 — Semester III',sw:'Ngazi ya 7 — Muhula III'},subjects:[
   {code:'GSU 07311',name:'Advanced Statistics'},{code:'CEU 07311',name:'Geotechnical Engineering'},{code:'CEU 07312',name:'Structural Analysis'},{code:'CEU 07313',name:'Reinforced Concrete Design I'},{code:'CEU 07314',name:'Open Channel Hydraulics'},{code:'CEU 07315',name:'Engineering Hydrology'},{code:'CEU 07316',name:'River and Reservoir Operation'}]},
  {label:{en:'NTA Level 7 — Semester IV',sw:'Ngazi ya 7 — Muhula IV'},subjects:[
   {code:'CEU 07411',name:'Quantity Surveying'},{code:'CEU 07412',name:'Reinforced Concrete Design II'},{code:'CEU 07413',name:'GIS and Remote Sensing'},{code:'CEU 07414',name:'Construction Management'},{code:'CEU 07415',name:'Pavement Design and Construction'},{code:'CEU 07416',name:'Route and Geometric Design'},{code:'CEU 07417',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 8 — Semester I',sw:'Ngazi ya 8 — Muhula I'},subjects:[
   {code:'—',name:'Social and Environmental Management'},{code:'—',name:'Design of Steel Structures'},{code:'—',name:'Groundwater Engineering'},{code:'—',name:'Engineering Economics and Project Appraisal'},{code:'—',name:'Water Supply Engineering'},{code:'—',name:'Public Health Engineering'},{code:'—',name:'Geostatistics'},{code:'—',name:'Project Planning and Methodology'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'05211',name:'Differential Equations and Coordinate Geometry'},{code:'05212',name:'Introduction to Networking'},{code:'05213',name:'Structural Mechanics'},{code:'05214',name:'Quantity Surveying'},{code:'05215',name:'Workshop and Construction Practice'},{code:'05216',name:'Construction Management'},{code:'05217',name:'Road Construction and Maintenance'},{code:'05218',name:'Basic Hi-Tech Farming'},{code:'IPT',name:'Industrial Practical Training'}]}],
 careers:{employed:[
  {emoji:'🏗️',role:{en:'Senior Civil Engineer',sw:'Mhandisi Mkuu wa Ujenzi'},desc:{en:'Lead major infrastructure and building projects',sw:'Ongoza miradi mikubwa ya miundombinu na ujenzi'},salary:'TZS 2M–6M/month'},
  {emoji:'🌍',role:{en:'Project Manager — Infrastructure',sw:'Msimamizi wa Miradi ya Miundombinu'},desc:{en:'Manage large-scale construction projects for government/NGOs',sw:'Simamia miradi mikubwa ya ujenzi kwa serikali/NGO'},salary:'TZS 2.5M–7M/month'}],
 self:[
  {emoji:'🏢',role:{en:'Engineering Consultancy Firm',sw:'Kampuni ya Ushauri wa Uhandisi'},desc:{en:'Start your own civil engineering consultancy',sw:'Anzisha kampuni yako ya ushauri wa uhandisi'}}]}},

{id:36,dept:'Civil',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Civil and Irrigation Engineering (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Uhandisi wa Ujenzi na Umwagiliaji (Ngazi ya 7–8)'},
 duration:{en:'3 Years (after Diploma)',sw:'Miaka 3 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Civil/Irrigation Engineering or related. Or A-Level with Physics, Maths, Chemistry.',sw:'Stashahada ya Uhandisi wa Ujenzi/Umwagiliaji au sawa nayo. Au Kidato cha 6 na Fizikia, Hisabati, Kemia.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester I',sw:'Ngazi ya 7 — Muhula I'},subjects:[
   {code:'GSU 07111',name:'Advanced Calculus'},{code:'GSU 07113',name:'Technical Communication Skills'},{code:'GSU 07114',name:'Entrepreneurship'},{code:'CIU 07111',name:'Engineering Surveying'},{code:'CIU 07112',name:'Building Planning and Drawing'},{code:'CIU 07113',name:'Civil Engineering Material'},{code:'CIU 07114',name:'Construction Technology'},{code:'CIU 07115',name:'Basics of Soil Mechanics'},{code:'CIU 07116',name:'Soil Science'}]},
  {label:{en:'NTA Level 7 — Semester II',sw:'Ngazi ya 7 — Muhula II'},subjects:[
   {code:'GSU 07211',name:'Numerical Methods'},{code:'CIU 07211',name:'Concrete Technology'},{code:'CIU 07212',name:'Elementary Structural Analysis'},{code:'CIU 07213',name:'Fluid Mechanics'},{code:'CIU 07214',name:'Irrigation Principles and Practices'},{code:'CIU 07215',name:'Soil Mechanics'},{code:'CIU 07216',name:'Design of Diversions and Impounding Structures'},{code:'IPT 07-1',name:'Industrial Practical Training I'}]},
  {label:{en:'NTA Level 7 — Semester III',sw:'Ngazi ya 7 — Muhula III'},subjects:[
   {code:'GSU 07311',name:'Advanced Statistics'},{code:'CIU 07311',name:'Geotechnical Engineering'},{code:'CIU 07312',name:'Structural Analysis'},{code:'CIU 07313',name:'Reinforced Concrete Design I'},{code:'CIU 07314',name:'Open Channel Hydraulics'},{code:'CIU 07315',name:'Engineering Hydrology and Meteorology'},{code:'CIU 07316',name:'River and Reservoir Operation'},{code:'CIU 07317',name:'Design of Pressurized Irrigation Systems'}]},
  {label:{en:'NTA Level 7 — Semester IV',sw:'Ngazi ya 7 — Muhula IV'},subjects:[
   {code:'CIU 07411',name:'Quantity Surveying'},{code:'CIU 07412',name:'Reinforced Concrete Design II'},{code:'CIU 07413',name:'GIS and Remote Sensing'},{code:'CIU 07414',name:'Construction Management'},{code:'CIU 07415',name:'Irrigation System Performance Evaluation'},{code:'IPT 07-2',name:'Industrial Practical Training II'}]},
  {label:{en:'NTA Level 8 — Semester I',sw:'Ngazi ya 8 — Muhula I'},subjects:[
   {code:'—',name:'Social and Environmental Management'},{code:'—',name:'Design of Steel Structures'},{code:'—',name:'Groundwater Engineering'},{code:'—',name:'Engineering Economics and Project Appraisal'},{code:'—',name:'Project Planning and Methodology'},{code:'—',name:'Water Supply Engineering'},{code:'—',name:'Public Health Engineering'},{code:'—',name:'Geostatistics'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'CIU 08211',name:'Irrigation Water Management'},{code:'CIU 08212',name:'Contract Management'},{code:'CIU 08213',name:'Structural Timber Design'},{code:'CIU 08214',name:'Wastewater Management'},{code:'CIU 08215',name:'Engineering Ethics'},{code:'CIU 08216',name:'Project Data Analysis and Realization'},{code:'CIU 08217',name:'Maintenance of Civil and Irrigation Infrastructure'},{code:'CIU 08218',name:'Bridge Design and Construction'}]}],
 careers:{employed:[
  {emoji:'💧',role:{en:'Irrigation Project Engineer',sw:'Mhandisi wa Miradi ya Umwagiliaji'},desc:{en:'Lead large-scale irrigation schemes for MAJI, FAO, NGOs',sw:'Ongoza miradi mikubwa ya umwagiliaji kwa MAJI, FAO, NGO'},salary:'TZS 2M–5M/month'},
  {emoji:'🌾',role:{en:'Agricultural Infrastructure Manager',sw:'Msimamizi wa Miundombinu ya Kilimo'},desc:{en:'Manage water infrastructure for agricultural districts',sw:'Simamia miundombinu ya maji kwa wilaya za kilimo'},salary:'TZS 1.5M–4M/month'},
  {emoji:'🏗️',role:{en:'Senior Civil Engineer — Water',sw:'Mhandisi Mkuu wa Ujenzi wa Maji'},desc:{en:'Design dams, canals and water supply systems',sw:'Buni mabwawa, mifereji na mifumo ya usambazaji maji'},salary:'TZS 2M–6M/month'}],
 self:[
  {emoji:'🌱',role:{en:'Irrigation Consultancy Firm',sw:'Kampuni ya Ushauri wa Umwagiliaji'},desc:{en:'Start your own irrigation engineering consultancy',sw:'Anzisha kampuni yako ya ushauri wa uhandisi wa umwagiliaji'}},
  {emoji:'💧',role:{en:'Water Harvesting Business',sw:'Biashara ya Uvunaji wa Maji'},desc:{en:'Design and install rainwater harvesting systems for farms',sw:'Buni na weka mifumo ya uvunaji wa maji ya mvua kwa mashamba'}}]}},

{id:28,dept:'Transport',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Civil and Highway Engineering (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Uhandisi wa Barabara na Ujenzi (Ngazi ya 7–8)'},
 duration:{en:'3 Years (after Diploma)',sw:'Miaka 3 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Civil/Highway Engineering or related.',sw:'Stashahada ya Uhandisi wa Barabara/Ujenzi au sawa nayo.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester I',sw:'Ngazi ya 7 — Muhula I'},subjects:[
   {code:'—',name:'Advanced Calculus'},{code:'—',name:'Technical Communication Skills'},{code:'—',name:'Entrepreneurship'},{code:'—',name:'Land Surveying'},{code:'—',name:'Building Planning and Drawing'},{code:'—',name:'Civil Engineering Materials'},{code:'—',name:'Building Construction'},{code:'—',name:'Strength of Materials'}]},
  {label:{en:'NTA Level 7 — Semester II',sw:'Ngazi ya 7 — Muhula II'},subjects:[
   {code:'—',name:'Numerical Methods'},{code:'—',name:'Land Survey'},{code:'—',name:'Soil Mechanics'},{code:'—',name:'Concrete Technology'},{code:'—',name:'Elementary Structural Analysis'},{code:'—',name:'Fluid Mechanics'},{code:'—',name:'Computer Aided Drawing, Planning and Designing'},{code:'IPT',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 7 — Semester III',sw:'Ngazi ya 7 — Muhula III'},subjects:[
   {code:'GSU 07311',name:'Advanced Statistics'},{code:'CHU 07311',name:'Highway Geometric Design'},{code:'CHU 07312',name:'Engineering Geology'},{code:'CHU 07313',name:'Measurement and Estimation of Civil Works'},{code:'CHU 07314',name:'Structural Analysis'},{code:'—',name:'Construction Management'},{code:'—',name:'Reinforced Concrete Design I'},{code:'—',name:'Open Channel Hydraulics'},{code:'—',name:'Construction Technology'}]},
  {label:{en:'NTA Level 7 — Semester IV',sw:'Ngazi ya 7 — Muhula IV'},subjects:[
   {code:'—',name:'Water Supply Engineering'},{code:'—',name:'Traffic Engineering'},{code:'—',name:'Geotechnical Engineering'},{code:'—',name:'Quantity Survey'},{code:'—',name:'Reinforced Concrete Design II'},{code:'—',name:'Engineering Hydrology'},{code:'—',name:'GIS for Land Resources'},{code:'IPT',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 8 — Semester I',sw:'Ngazi ya 8 — Muhula I'},subjects:[
   {code:'—',name:'Social and Environmental Management'},{code:'—',name:'Engineering Economics and Project Appraisal'},{code:'—',name:'Transportation Engineering'},{code:'—',name:'Structural Steel Design'},{code:'—',name:'Bridge Design and Construction'},{code:'—',name:'Foundation Engineering'},{code:'—',name:'Highway Engineering Materials'},{code:'—',name:'Project Outline and Methodology'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'—',name:'Design Software Practices'},{code:'—',name:'Structural Timber Design'},{code:'—',name:'Pavement Design and Construction'},{code:'—',name:'Bridge and Pavement Maintenance'},{code:'—',name:'Engineering Ethics'},{code:'—',name:'Project Data Analysis and Report'},{code:'—',name:'Design of Water Supply System'},{code:'—',name:'Public Health Management'}]}],
 careers:{employed:[
  {emoji:'🛣️',role:{en:'Senior Road Engineer',sw:'Mhandisi Mkuu wa Barabara'},desc:{en:'Lead road and highway design and construction projects',sw:'Ongoza miradi ya kubuni na ujenzi wa barabara'},salary:'TZS 2M–5M/month'},
  {emoji:'🌉',role:{en:'Bridge Design Engineer',sw:'Mhandisi wa Kubuni Madaraja'},desc:{en:'Design complex bridge structures for Tanzania infrastructure',sw:'Buni miundo ya madaraja kwa miundombinu ya Tanzania'},salary:'TZS 2M–6M/month'}],
 self:[
  {emoji:'🏗️',role:{en:'Road Engineering Consultant',sw:'Mshauri wa Uhandisi wa Barabara'},desc:{en:'Offer road design and supervision services independently',sw:'Toa huduma za kubuni na kusimamia barabara kwa uhuru'}}]}},

{id:29,dept:'Electrical',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Electrical & Automation Engineering (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Uhandisi wa Umeme na Uendeshaji (Ngazi ya 7–8)'},
 duration:{en:'2 Years (after Diploma)',sw:'Miaka 2 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Electrical Engineering or related. Or A-Level with Physics, Maths.',sw:'Stashahada ya Uhandisi wa Umeme au sawa nayo. Au Kidato cha 6 na Fizikia, Hisabati.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester I',sw:'Ngazi ya 7 — Muhula I'},subjects:[
   {code:'GSU 07111',name:'Advanced Calculus'},{code:'GSU 07113',name:'Technical Communication Skills'},{code:'GSU 07114',name:'Entrepreneurship'},{code:'MEU 07111',name:'Statics and Dynamics Mechanics'},{code:'EAU 07112',name:'Power Plants Engineering'},{code:'EAU 07113',name:'Analogue Electronics'},{code:'EAU 07113',name:'Sensor and Controllers'},{code:'EAU 07114',name:'Electromagnetics'},{code:'EAU 07115',name:'Electrical Circuit Analysis'}]},
  {label:{en:'NTA Level 7 — Semester II',sw:'Ngazi ya 7 — Muhula II'},subjects:[
   {code:'GSU 07211',name:'Numerical Methods and Complex Analysis'},{code:'MEU 07211',name:'Hydraulics and Pneumatics Systems'},{code:'EAU 07211',name:'Control Engineering'},{code:'EAU 07212',name:'Electrical Power Transmission and Distribution Networks'},{code:'EAU 07213',name:'Finite State Machines'},{code:'EAU 07214',name:'Electrical Machines'},{code:'EAU 07215',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 7 — Semester III',sw:'Ngazi ya 7 — Muhula III'},subjects:[
   {code:'GSU 07311',name:'Advanced Statistics'},{code:'EAU 07311',name:'Switchgear and Power Protection'},{code:'EAU 07312',name:'Signal Analysis and Synthesis'},{code:'EAU 07313',name:'Artificial Intelligence'},{code:'EAU 07314',name:'Power Electronics'},{code:'EAU 07315',name:'Microcontroller Programming in C++'},{code:'EAU 07316',name:'Industrial Internet of Things'}]},
  {label:{en:'NTA Level 7 — Semester IV',sw:'Ngazi ya 7 — Muhula IV'},subjects:[
   {code:'GSU 07412',name:'Research Methodology'},{code:'MEU 07411',name:'Automation of Manufacturing'},{code:'EEU 07411',name:'Power Systems Stability and Fault Analysis'},{code:'EAU 07411',name:'Programmable Logic Control Systems'},{code:'EAU 07412',name:'Microcontroller Project'},{code:'EAU 07413',name:'Statistical Digital Signal Processing'},{code:'EAU 07414',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 8 — Semester I',sw:'Ngazi ya 8 — Muhula I'},subjects:[
   {code:'EAU 08111',name:'High Voltage Engineering'},{code:'EAU 08112',name:'Microelectronics'},{code:'EAU 08113',name:'Computer Aided Manufacturing and Fabrication'},{code:'EAU 08114',name:'Project Management'},{code:'EAU 08115',name:'Engineering Ethics and Professional Conduct'},{code:'EAU 08116',name:'Senior Project I'},{code:'EBU 08112',name:'Embedded Systems'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'EAU 08211',name:'Special Electric Machines and Drives'},{code:'EAU 08212',name:'Nanotechnology'},{code:'EAU 08213',name:'Robotics'},{code:'EAU 08214',name:'Industrial Process Control'},{code:'EAU 08216',name:'Senior Project II'}]}],
 careers:{employed:[
  {emoji:'🤖',role:{en:'Automation Engineer',sw:'Mhandisi wa Uendeshaji wa Kiotomatiki'},desc:{en:'Design automated systems for factories and industries',sw:'Buni mifumo ya kiotomatiki kwa viwanda'},salary:'TZS 2M–5M/month'},
  {emoji:'⚡',role:{en:'Power Systems Engineer',sw:'Mhandisi wa Mifumo ya Umeme'},desc:{en:'Manage and design power distribution networks',sw:'Simamia na buni mitandao ya usambazaji wa umeme'},salary:'TZS 2M–6M/month'}],
 self:[
  {emoji:'🏭',role:{en:'Industrial Automation Consultant',sw:'Mshauri wa Uendeshaji wa Viwanda'},desc:{en:'Help factories automate their production processes',sw:'Saidia viwanda kuendesha uzalishaji wao kwa kiotomatiki'}}]}},

{id:30,dept:'Electrical',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Electrical and Biomedical Engineering (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Uhandisi wa Umeme na Vifaa vya Hospitali (Ngazi ya 7–8)'},
 duration:{en:'3 Years (after Diploma)',sw:'Miaka 3 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Electrical/Biomedical Engineering or related.',sw:'Stashahada ya Uhandisi wa Umeme/Vifaa vya Hospitali au sawa nayo.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester I',sw:'Ngazi ya 7 — Muhula I'},subjects:[
   {code:'GSU 07111',name:'Advanced Calculus'},{code:'GSU 07113',name:'Technical Communication Skills'},{code:'GSU 07114',name:'Entrepreneurship'},{code:'MEU 07111',name:'Statics and Dynamics Mechanics'},{code:'EAU 07111',name:'Analogue Electronics'},{code:'EBU 07111',name:'Medical Equipment Technology and Installation'},{code:'EAU 07113',name:'Sensor and Control'},{code:'EEU 07114',name:'Electromagnetics'},{code:'EEU 07115',name:'Electrical Circuit Analysis'}]},
  {label:{en:'NTA Level 7 — Semester II',sw:'Ngazi ya 7 — Muhula II'},subjects:[
   {code:'GSU 07211',name:'Numerical Methods'},{code:'MEU 07211',name:'Hydraulics and Pneumatics Systems'},{code:'EEU 07211',name:'Control Engineering'},{code:'EBU 07211',name:'Medical Repair Lab'},{code:'EBU 07212',name:'Human Anatomy and Physiology'},{code:'EEU 07213',name:'Electrical Machines'},{code:'EBU 07215',name:'Biomedical Practical Training'}]},
  {label:{en:'NTA Level 7 — Semester III',sw:'Ngazi ya 7 — Muhula III'},subjects:[
   {code:'GSU 07311',name:'Advanced Statistics'},{code:'EEU 07313',name:'Artificial Intelligence'},{code:'EBU 07311',name:'Medical Physics and Imaging Technology'},{code:'EAU 07311',name:'Switchgear and Power Protection'},{code:'EAU 07312',name:'Signal Analysis and Synthesis'},{code:'EEU 07314',name:'Power Electronics'},{code:'EAU 07315',name:'Microcontroller Programming in C++'}]},
  {label:{en:'NTA Level 7 — Semester IV',sw:'Ngazi ya 7 — Muhula IV'},subjects:[
   {code:'GSU 07412',name:'Research Methodology'},{code:'EAU 07411',name:'Programmable Logic Control Systems'},{code:'EBU 07412',name:'Medical Imaging Equipment'},{code:'EAU 07413',name:'Statistical Digital Signal Processing'},{code:'EAU 07412',name:'Microcontroller Project'},{code:'EBU 07411',name:'Laboratory Medical Equipment Technology'},{code:'EEU 07414',name:'Biomedical Practical Training'}]},
  {label:{en:'NTA Level 8 — Semester I',sw:'Ngazi ya 8 — Muhula I'},subjects:[
   {code:'EBU 08111',name:'Hospital Information Technology and Medical Informatics'},{code:'EBU 08112',name:'Embedded Systems and IoT'},{code:'EAU 08112',name:'Microelectronics'},{code:'EAU 08113',name:'Computer Aided Manufacturing and Fabrication'},{code:'EBU 08113',name:'Senior Project I'},{code:'EAU 08114',name:'Project Management and Procurement'},{code:'EAU 08115',name:'Engineering Ethics and Professional Conducts'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'EBU 08211',name:'Healthcare Management and Technology'},{code:'EAU 08211',name:'Special Electrical Machines and Drives'},{code:'EBU 08212',name:'Biomechanics'},{code:'EAU 08213',name:'Robotics'},{code:'EBU 08213',name:'Senior Project II'},{code:'EAU 08215',name:'Electrical Safety and Maintenance'}]}],
 careers:{employed:[
  {emoji:'🏥',role:{en:'Senior Biomedical Engineer',sw:'Mhandisi Mkuu wa Vifaa vya Hospitali'},desc:{en:'Lead biomedical engineering teams in major hospitals',sw:'Ongoza timu za uhandisi wa vifaa vya matibabu hospitalini'},salary:'TZS 1.5M–4M/month'},
  {emoji:'🔬',role:{en:'Medical Technology Specialist',sw:'Mtaalamu wa Teknolojia ya Matibabu'},desc:{en:'Specialize in advanced medical imaging and diagnostic equipment',sw:'Buni vifaa vya picha za matibabu na uchunguzi wa hali ya juu'},salary:'TZS 2M–5M/month'}],
 self:[
  {emoji:'🏥',role:{en:'Medical Equipment Company',sw:'Kampuni ya Vifaa vya Matibabu'},desc:{en:'Import and service medical equipment for hospitals and clinics',sw:'Ingiza na hudumia vifaa vya matibabu kwa hospitali na kliniki'}}]}},

{id:31,dept:'Electrical',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Renewable Energy Engineering (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Uhandisi wa Nishati Mbadala (Ngazi ya 7–8)'},
 duration:{en:'2 Years (after Diploma)',sw:'Miaka 2 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Electrical or Mechanical Engineering or related.',sw:'Stashahada ya Uhandisi wa Umeme au Mitambo au sawa nayo.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester I',sw:'Ngazi ya 7 — Muhula I'},subjects:[
   {code:'GSU 07103',name:'Basics of Calculus'},{code:'GSU 07104',name:'Communication Skills for Engineers'},{code:'REU 07101',name:'Fundamentals of Renewable Energy Technologies'},{code:'REU 07102',name:'Energy Conversion Technologies'},{code:'MEU 07101',name:'Static and Dynamic Mechanics'},{code:'REU 07103',name:'Fundamentals of Computer Aided Drafting'},{code:'EEU 07101',name:'Power Plants Engineering'},{code:'REU 07104',name:'Applied Chemistry for Energy Engineering'}]},
  {label:{en:'NTA Level 7 — Semester II',sw:'Ngazi ya 7 — Muhula II'},subjects:[
   {code:'GSU 07201',name:'Advanced Calculus'},{code:'MEU 07206',name:'Engineering Thermodynamics'},{code:'REU 07201',name:'Renewable Energy Materials'},{code:'REU 07202',name:'Fundamentals of Renewable Energy Storage'},{code:'REU 07204',name:'Fundamentals of 3D Modelling'},{code:'CSU 07201',name:'Computer Programming'},{code:'EEU 07202',name:'Electrical Power Transmission and Distribution Networks'},{code:'REU 07406',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 7 — Semester III',sw:'Ngazi ya 7 — Muhula III'},subjects:[
   {code:'GSU 07301',name:'Differential Equations and Complex Variables'},{code:'GSU 07302',name:'Industrial Management and Laws'},{code:'REU 07301',name:'Solar Energy System'},{code:'REU 07302',name:'Manufacturing Technology'},{code:'EEU 07301',name:'AC Machines'},{code:'EEU 07302',name:'Switchgears and Power Protection'},{code:'EEU 07305',name:'Power Electronics'}]},
  {label:{en:'NTA Level 7 — Semester IV',sw:'Ngazi ya 7 — Muhula IV'},subjects:[
   {code:'GSU 07403',name:'Probability and Statistical Analysis'},{code:'REU 07401',name:'Modelling and Simulation'},{code:'REU 07402',name:'Bioenergy Technology'},{code:'REU 07403',name:'Hydro Power Technology'},{code:'REU 07404',name:'Research Methodology'},{code:'REU 07405',name:'Sustainable Environmental Management'},{code:'REU 07406',name:'Industrial Practical Training'}]},
  {label:{en:'NTA Level 8 — Semester I',sw:'Ngazi ya 8 — Muhula I'},subjects:[
   {code:'GSU 08103',name:'Numerical Optimization Methods'},{code:'MEU 08101',name:'Industrial Safety and Maintenance'},{code:'REU 08101',name:'Wind Energy Technology'},{code:'REU 08102',name:'Power System Automation'},{code:'REU 08103',name:'Ocean Energy Technology'},{code:'REU 08104',name:'Project Feasibility Assessment'},{code:'REU 08105',name:'Renewable Energy Project I'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'GSU 08201',name:'Entrepreneurship for Engineers'},{code:'GSU 08202',name:'Engineering Project Management and Procurement'},{code:'GSU 08203',name:'Engineering Ethics and Professional Conducts'},{code:'REU 08201',name:'Geothermal Energy Technology'},{code:'REU 08202',name:'Hybrid Power Systems'},{code:'REU 08203',name:'Renewable Energy Project II'}]}],
 careers:{employed:[
  {emoji:'☀️',role:{en:'Renewable Energy Project Manager',sw:'Msimamizi wa Miradi ya Nishati Mbadala'},desc:{en:'Manage solar, wind and hydro power projects',sw:'Simamia miradi ya umeme wa jua, upepo na maji'},salary:'TZS 2M–6M/month'},
  {emoji:'🌍',role:{en:'Energy Policy Consultant',sw:'Mshauri wa Sera za Nishati'},desc:{en:'Advise government and NGOs on energy policy',sw:'Shauri serikali na NGO kuhusu sera za nishati'},salary:'TZS 2M–5M/month'}],
 self:[
  {emoji:'⚡',role:{en:'Renewable Energy Company',sw:'Kampuni ya Nishati Mbadala'},desc:{en:'Build a solar/wind energy company serving rural Tanzania',sw:'Jenga kampuni ya nishati ya jua/upepo ikihudumia vijijini Tanzania'}}]}},

{id:32,dept:'Mechanical',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Mechanical Engineering (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Uhandisi wa Mitambo (Ngazi ya 7–8)'},
 duration:{en:'2–3 Years (after Diploma)',sw:'Miaka 2–3 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Mechanical Engineering or related. Or A-Level with Physics, Maths, Chemistry.',sw:'Stashahada ya Uhandisi wa Mitambo au sawa nayo.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester III–IV',sw:'Ngazi ya 7 — Muhula III–IV'},subjects:[
   {code:'MEU 07311',name:'Workshop Technology'},{code:'MEU 07312',name:'Principle of Metal Cutting'},{code:'MEU 07314',name:'Material Technology'},{code:'MEU 07313',name:'Mechanics of Machines'},{code:'MEU 07411',name:'Computer Aided Design (CAD)'},{code:'MEU 07412',name:'Fluid Mechanics'},{code:'MEU 07413',name:'Strength of Materials'},{code:'MEU 07414',name:'Engineering Thermodynamics'},{code:'MEU 07415',name:'Machine Elements and Design'}]},
  {label:{en:'NTA Level 7 — Semester V–VI',sw:'Ngazi ya 7 — Muhula V–VI'},subjects:[
   {code:'MEU 07513',name:'Computer Aided Manufacturing (CAM)'},{code:'MEU 07514',name:'Engineering Design'},{code:'MEU 07511',name:'Heating, Ventilation and Air Conditioning'},{code:'MEU 07611',name:'Turbo Machines'},{code:'MEU 07612',name:'Fluid Power and Control'},{code:'MEU 07613',name:'Control Systems Engineering'},{code:'MEU 07615',name:'Welding Technology'},{code:'MEU 07616',name:'Renewable Energy Technologies'},{code:'MEU 07617',name:'Research Methodology'}]},
  {label:{en:'NTA Level 8 — Semester I',sw:'Ngazi ya 8 — Muhula I'},subjects:[
   {code:'MEU 08111',name:'Industrial Safety and Maintenance'},{code:'MEU 08112',name:'Industrial Refrigeration'},{code:'MEU 08113',name:'Material Handling Systems'},{code:'MEU 08114',name:'Industrial Process Control'},{code:'MEU 08115',name:'Power Plant Engineering'},{code:'MEU 08116',name:'Quality Assurance and Control'},{code:'MEU 08118',name:'Project Design'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'MEU 08211',name:'Industrial Energy Management'},{code:'MEU 08212',name:'Industrial Automation'},{code:'MEU 08213',name:'Environmental Engineering and Management'},{code:'MEU 08214',name:'Robotics'},{code:'MEU 08215',name:'Project Implementation'}]}],
 careers:{employed:[
  {emoji:'🏭',role:{en:'Senior Mechanical Engineer',sw:'Mhandisi Mkuu wa Mitambo'},desc:{en:'Lead engineering teams in manufacturing companies',sw:'Ongoza timu za uhandisi katika makampuni ya utengenezaji'},salary:'TZS 2M–6M/month'},
  {emoji:'🤖',role:{en:'Robotics Engineer',sw:'Mhandisi wa Roboti'},desc:{en:'Design robotic systems for industrial automation',sw:'Buni mifumo ya roboti kwa uendeshaji wa viwanda'},salary:'TZS 2.5M–7M/month'}],
 self:[
  {emoji:'🏗️',role:{en:'Engineering Consultancy',sw:'Kampuni ya Ushauri wa Uhandisi'},desc:{en:'Offer mechanical engineering expertise to industries',sw:'Toa ujuzi wa uhandisi wa mitambo kwa viwanda'}}]}},

{id:33,dept:'Mechanical',icon:'🎓',type:'bachelor',comingSoon:true,
 name:{en:'Bachelor Degree in Mechatronics and Material Engineering (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Uhandisi wa Mekatroniki na Nyenzo (Ngazi ya 7–8)'},
 duration:{en:'2 Years (after Diploma)',sw:'Miaka 2 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Mechanical, Electrical or related Engineering.',sw:'Stashahada ya Uhandisi wa Mitambo, Umeme au sawa nayo.'},
 semesters:[],
 careers:{employed:[
  {emoji:'🤖',role:{en:'Mechatronics Engineer',sw:'Mhandisi wa Mekatroniki'},desc:{en:'Design and build electromechanical systems and robots',sw:'Buni na jenga mifumo ya umeme-mitambo na roboti'},salary:'TZS 2M–5M/month'},
  {emoji:'🏭',role:{en:'Materials Engineer',sw:'Mhandisi wa Nyenzo'},desc:{en:'Research and develop new materials for manufacturing',sw:'Tafuta na buni nyenzo mpya kwa utengenezaji'},salary:'TZS 1.5M–4M/month'}],
 self:[
  {emoji:'⚙️',role:{en:'Automation Solutions Provider',sw:'Mtoa Suluhisho la Uendeshaji wa Kiotomatiki'},desc:{en:'Design custom automation solutions for local industries',sw:'Buni suluhisho maalum za kiotomatiki kwa viwanda vya ndani'}}]}},

{id:34,dept:'Automotive',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Automotive Electronics Engineering (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Uhandisi wa Elektroniki za Magari (Ngazi ya 7–8)'},
 duration:{en:'3 Years (after Diploma)',sw:'Miaka 3 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Automotive or Electronics Engineering or related.',sw:'Stashahada ya Uhandisi wa Magari au Elektroniki au sawa nayo.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester I',sw:'Ngazi ya 7 — Muhula I'},subjects:[
   {code:'—',name:'Ethics and Enterprise Management'},{code:'—',name:'Technical Communication Skills'},{code:'—',name:'Advanced Calculus'},{code:'AEU 07111',name:'Internal Combustion Engines'},{code:'AEU 07112',name:'Automotive Brake Systems'},{code:'AEU 07113',name:'Material Engineering and Technology'},{code:'ETU 07111',name:'Analogue Electronics'}]},
  {label:{en:'NTA Level 7 — Semester II',sw:'Ngazi ya 7 — Muhula II'},subjects:[
   {code:'—',name:'Numerical Methods'},{code:'—',name:'Computer Programming'},{code:'AEU 07211',name:'Statistical Digital Signal Processing'},{code:'AEU 07212',name:'Automotive Suspension System'},{code:'AEU 07213',name:'Automotive Electrical and Electronics Power Systems'},{code:'AEU 07214',name:'Engineering Thermodynamics'},{code:'AEU 07215',name:'Automotive Sensors and Actuators'},{code:'IPT',name:'Industrial Practical Training I'}]},
  {label:{en:'NTA Level 7 — Semester III',sw:'Ngazi ya 7 — Muhula III'},subjects:[
   {code:'—',name:'Advanced Statistics'},{code:'—',name:'Automotive Maintenance Management'},{code:'AEU 07311',name:'Automotive Drive Train Systems'},{code:'ETU 07311',name:'Microcontroller Programming Using C'},{code:'AEU 07312',name:'Automotive Heating, Ventilation and Air Conditioning'},{code:'AEU 07313',name:'Engineering Measurements and Instrumentation'},{code:'AEU 07314',name:'Automotive Power Electronics and Motor Drives'}]},
  {label:{en:'NTA Level 7 — Semester IV',sw:'Ngazi ya 7 — Muhula IV'},subjects:[
   {code:'—',name:'Computing Using Mathematical Fundamentals'},{code:'—',name:'Research Methodology'},{code:'—',name:'Fluid Power and Control'},{code:'—',name:'Control Systems Engineering'},{code:'—',name:'Automotive Electronics Auxiliary Systems'},{code:'IPT',name:'Industrial Practical Training II'}]},
  {label:{en:'NTA Level 8 — Semester I',sw:'Ngazi ya 8 — Muhula I'},subjects:[
   {code:'AEU 08111',name:'Electronic Engine Management'},{code:'AEU 08112',name:'Hybrid and Electric Vehicles'},{code:'AEU 08113',name:'Vehicle Comfort and Safety'},{code:'AEU 08114',name:'Automotive Communication and Information Systems'},{code:'AEU 08115',name:'Automotive Electromagnetic Interface and Compatibility'},{code:'AEU 08116',name:'Road Traffic Accident Investigation'},{code:'AEU 08116',name:'Project Proposal'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'AEU 08211',name:'Engineering Ethics and Professional Conduct Fundamentals'},{code:'AEU 08212',name:'Automotive Networking and Protocols'},{code:'AEU 08213',name:'Alternative Energy and Technology Fuel'},{code:'AEU 08214',name:'Environmental and Safety Engineering'},{code:'AEU 08215',name:'Project Management and Procurement Fundamentals'},{code:'AEU 08217',name:'Project Work'}]}],
 careers:{employed:[
  {emoji:'🚗',role:{en:'Automotive Electronics Engineer',sw:'Mhandisi wa Elektroniki za Magari'},desc:{en:'Work with car manufacturers and service centers on advanced electronics',sw:'Fanya kazi na wazalishaji wa magari kwenye elektroniki za hali ya juu'},salary:'TZS 2M–5M/month'},
  {emoji:'⚡',role:{en:'Electric Vehicle (EV) Engineer',sw:'Mhandisi wa Magari ya Umeme'},desc:{en:'Specialize in hybrid and electric vehicle systems',sw:'Buni mifumo ya magari ya umeme na hybrid'},salary:'TZS 2.5M–6M/month'}],
 self:[
  {emoji:'🔌',role:{en:'EV Charging Infrastructure Business',sw:'Biashara ya Miundombinu ya Kuchaji Magari ya Umeme'},desc:{en:'Install and manage EV charging stations in Tanzania',sw:'Weka na simamia vituo vya kuchaji magari ya umeme Tanzania'}}]}},

{id:35,dept:'Science',icon:'🎓',type:'bachelor',
 name:{en:'Bachelor Degree in Laboratory Science & Industrial Technology (NTA Level 7–8)',sw:'Shahada ya Kwanza ya Sayansi ya Maabara na Teknolojia ya Viwanda (Ngazi ya 7–8)'},
 duration:{en:'2 Years (after Diploma)',sw:'Miaka 2 (baada ya Diploma)'},
 entry:{en:'Ordinary Diploma in Laboratory Science or related. Or A-Level with Biology, Chemistry, Physics.',sw:'Stashahada ya Sayansi ya Maabara au sawa nayo. Au Kidato cha 6 na Biolojia, Kemia, Fizikia.'},
 semesters:[
  {label:{en:'NTA Level 7 — Semester I',sw:'Ngazi ya 7 — Muhula I'},subjects:[
   {code:'LIU 07101',name:'Biological Techniques'},{code:'LIU 07102',name:'Analytical Instrumentation'},{code:'LIU 07103',name:'Preparation of Chemical Solution and Bench Reagents'},{code:'LIU 07104',name:'Laboratory Safety'}]},
  {label:{en:'NTA Level 7 — Semester III',sw:'Ngazi ya 7 — Muhula III'},subjects:[
   {code:'LIU 07301',name:'Chemistry of Hydrocarbons'},{code:'LIU 07302',name:'Molecular Biology and Biotechnology'},{code:'LIU 07303',name:'Laboratory Risk Management'},{code:'LIU 07304',name:'Applied Electronics'},{code:'LIU 07305',name:'Principles of Thermodynamics'}]},
  {label:{en:'NTA Level 8 — Semester II',sw:'Ngazi ya 8 — Muhula II'},subjects:[
   {code:'LIU 08201',name:'Quality Control and Standards'},{code:'LIU 08202',name:'Water and Soil Management'},{code:'LIU 08203',name:'Principles of Nuclear Science'},{code:'LIU 08204',name:'Project Design'},{code:'LIU 08205',name:'Professional Ethics'}]}],
 careers:{employed:[
  {emoji:'🔬',role:{en:'Senior Laboratory Scientist',sw:'Mwanasayansi Mkuu wa Maabara'},desc:{en:'Lead laboratory operations in hospitals, industries and research',sw:'Ongoza shughuli za maabara hospitalini, viwandani na utafiti'},salary:'TZS 1.5M–4M/month'},
  {emoji:'🏭',role:{en:'Industrial Quality Manager',sw:'Meneja wa Ubora wa Viwanda'},desc:{en:'Oversee quality control in food, pharma and chemical industries',sw:'Simamia udhibiti wa ubora katika viwanda vya chakula, dawa na kemikali'},salary:'TZS 1.5M–4M/month'}],
 self:[
  {emoji:'🧪',role:{en:'Private Testing Laboratory',sw:'Maabara Binafsi ya Kupimia'},desc:{en:'Run your own lab testing food, water, soil and products',sw:'Endesha maabara yako ya kupima chakula, maji, udongo na bidhaa'}}]}}
];

