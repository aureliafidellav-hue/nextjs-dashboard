exports.id=985,exports.ids=[985],exports.modules={140:()=>{},2654:(a,b,c)=>{Promise.resolve().then(c.bind(c,58777)),Promise.resolve().then(c.t.bind(c,41997,23))},3743:()=>{},7386:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,82222,23)),Promise.resolve().then(c.t.bind(c,42825,23)),Promise.resolve().then(c.t.bind(c,40049,23)),Promise.resolve().then(c.t.bind(c,87400,23)),Promise.resolve().then(c.t.bind(c,89464,23)),Promise.resolve().then(c.t.bind(c,37004,23)),Promise.resolve().then(c.t.bind(c,18301,23)),Promise.resolve().then(c.t.bind(c,35420,23))},15748:(a,b,c)=>{"use strict";c.d(b,{Y9:()=>l,Jv:()=>n,CI:()=>o});var d=c(5486),e=c.n(d),f=c(52981),g=c(24225),h=c(44669),i=c(33665);let j=(0,h.A)(process.env.POSTGRES_URL,{ssl:"require"});async function k(a){try{return(await j`SELECT * FROM users WHERE email = ${a}`)[0]}catch(a){throw console.error("Failed to fetch user:",a),Error("Failed to fetch user.")}}let{handlers:l,auth:m,signIn:n,signOut:o}=(0,f.Ay)({...{pages:{signIn:"/login"},callbacks:{authorized({auth:a,request:{nextUrl:b}}){let c=!!a?.user;return b.pathname.startsWith("/dashboard")?c:!c||"/login"!==b.pathname||Response.redirect(new URL("/dashboard",b))}},providers:[]},providers:[(0,g.A)({async authorize(a){let b=i.Ik({email:i.Yj().email(),password:i.Yj().min(6)}).safeParse(a);if(!b.success)return null;let{email:c,password:d}=b.data,f=await k(c);return f&&await e().compare(d,f.password)?f:null}})]})},18770:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>g,metadata:()=>f});var d=c(23214);c(32287);var e=c(85783);let f={metadataBase:new URL("http://localhost:3000"),title:{template:"%s | Acme Dashboard",default:"Acme Dashboard"},description:"A financial dashboard example built with Next.js."};function g({children:a}){return(0,d.jsx)("html",{lang:"en",children:(0,d.jsx)("body",{className:`${e.T.className} antialiased`,children:a})})}},27346:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>e});var d=c(31135);let e=async a=>[{type:"image/png",width:1686,height:882,url:(0,d.fillMetadataSegment)(".",await a.params,"opengraph-image.png")+"?886e7c13529660db"}]},29042:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,82222,23))},31507:(a,b,c)=>{"use strict";c.d(b,{YL:()=>f,c6:()=>e,vv:()=>d});let d=a=>(a/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),e=(a,b="en-US")=>{let c=new Date(a);return new Intl.DateTimeFormat(b,{day:"numeric",month:"short",year:"numeric"}).format(c)},f=a=>{let b=[],c=1e3*Math.ceil(Math.max(...a.map(a=>a.revenue))/1e3);for(let a=c;a>=0;a-=1e3)b.push(`$${a/1e3}K`);return{yAxisLabels:b,topLabel:c}}},32287:()=>{},36588:()=>{},40695:()=>{},42822:(a,b,c)=>{Promise.resolve().then(c.bind(c,47579)),Promise.resolve().then(c.t.bind(c,84835,23))},47554:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,4124,23)),Promise.resolve().then(c.t.bind(c,42911,23)),Promise.resolve().then(c.t.bind(c,78531,23)),Promise.resolve().then(c.t.bind(c,44646,23)),Promise.resolve().then(c.t.bind(c,4354,23)),Promise.resolve().then(c.t.bind(c,44838,23)),Promise.resolve().then(c.t.bind(c,59155,23)),Promise.resolve().then(c.bind(c,38918))},47579:(a,b,c)=>{"use strict";c.d(b,{default:()=>m});var d=c(68888),e=c(49638),f=c(14361),g=c(8989),h=c(84835),i=c.n(h),j=c(13974),k=c(80878);let l=[{name:"Home",href:"/dashboard",icon:e.A},{name:"Invoices",href:"/dashboard/invoices",icon:f.A},{name:"Customers",href:"/dashboard/customers",icon:g.A}];function m(){let a=(0,j.usePathname)();return(0,d.jsx)(d.Fragment,{children:l.map(b=>{let c=b.icon;return(0,d.jsxs)(i(),{href:b.href,className:(0,k.A)("flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":a===b.href,"bg-gray-50 hover:bg-sky-100 hover:text-blue-600":a!==b.href}),children:[(0,d.jsx)(c,{className:"w-6"}),(0,d.jsx)("p",{className:"hidden md:block",children:b.name})]},b.name)})})}},58777:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(57174).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\PROJECTSIWEB\\\\nextjs-dashboard\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\PROJECTSIWEB\\nextjs-dashboard\\app\\ui\\dashboard\\nav-links.tsx","default")},62892:(a,b,c)=>{"use strict";c.d(b,{MX:()=>j,Pt:()=>k,Q5:()=>h,Yu:()=>l,gn:()=>m,nr:()=>g,rv:()=>n,zP:()=>i});var d=c(44669),e=c(31507);let f=(0,d.A)(process.env.POSTGRES_URL,{ssl:"require"});async function g(){try{return await f`SELECT * FROM revenue`}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch revenue data.")}}async function h(){try{return(await f`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).map(a=>({...a,amount:(0,e.vv)(a.amount)}))}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch the latest invoices.")}}async function i(){try{let a=f`SELECT COUNT(*) FROM invoices`,b=f`SELECT COUNT(*) FROM customers`,c=f`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,d=await Promise.all([a,b,c]),g=Number(d[0][0].count??"0"),h=Number(d[1][0].count??"0"),i=(0,e.vv)(d[2][0].paid??"0"),j=(0,e.vv)(d[2][0].pending??"0");return{numberOfCustomers:h,numberOfInvoices:g,totalPaidInvoices:i,totalPendingInvoices:j}}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch card data.")}}async function j(a,b){try{return await f`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${a}%`} OR
        customers.email ILIKE ${`%${a}%`} OR
        invoices.amount::text ILIKE ${`%${a}%`} OR
        invoices.date::text ILIKE ${`%${a}%`} OR
        invoices.status ILIKE ${`%${a}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(b-1)*6}
    `}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch invoices.")}}async function k(a){try{let b=await f`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${a}%`} OR
      customers.email ILIKE ${`%${a}%`} OR
      invoices.amount::text ILIKE ${`%${a}%`} OR
      invoices.date::text ILIKE ${`%${a}%`} OR
      invoices.status ILIKE ${`%${a}%`}
  `;return Math.ceil(Number(b[0].count)/6)}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch total number of invoices.")}}async function l(a){try{return(await f`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${a};
    `).map(a=>({...a,amount:a.amount/100}))[0]}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch invoice.")}}async function m(){try{return await f`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch all customers.")}}async function n(a){try{return(await f`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${a}%`} OR
        customers.email ILIKE ${`%${a}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `).map(a=>({...a,total_pending:(0,e.vv)(a.total_pending),total_paid:(0,e.vv)(a.total_paid)}))}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch customer table.")}}},66125:(a,b,c)=>{"use strict";c.d(b,{A:()=>g});var d=c(23214),e=c(91171),f=c(85783);function g(){return(0,d.jsxs)("div",{className:`${f.C.className} flex flex-row items-center leading-none text-white`,children:[(0,d.jsx)(e.A,{className:"h-12 w-12 rotate-[15deg]"}),(0,d.jsx)("p",{className:"text-[44px]",children:"Acme"})]})}},73157:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f});var d=c(23214),e=c(84778);function f({children:a}){return(0,d.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[(0,d.jsx)("div",{className:"w-full flex-none md:w-64",children:(0,d.jsx)(e.A,{})}),(0,d.jsx)("div",{className:"grow p-6 md:overflow-y-auto md:p-12",children:a})]})}},75898:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,4124,23))},84778:(a,b,c)=>{"use strict";c.d(b,{A:()=>m,x:()=>l});var d=c(23214),e=c(85315);c(77621);var f=c(56522),g=c.n(f),h=c(15836),i=c(15748),j=c(66125),k=c(58777);let l=async function(){await (0,i.CI)({redirectTo:"/"})};function m(){return(0,d.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[(0,d.jsx)(g(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:(0,d.jsx)("div",{className:"w-32 text-white md:w-40",children:(0,d.jsx)(j.A,{})})}),(0,d.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[(0,d.jsx)(k.default,{}),(0,d.jsx)("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),(0,d.jsx)("form",{action:l,children:(0,d.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[(0,d.jsx)(h.A,{className:"w-6"}),(0,d.jsx)("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}(0,e.A)(l,"003bb873eac25a2d2e0fdc8e61a3c6b58416af2f4f",null)},85783:(a,b,c)=>{"use strict";c.d(b,{C:()=>e,T:()=>d});let d={className:"font-sans"},e={className:"font-serif"}},98480:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>e});var d=c(31135);let e=async a=>[{type:"image/x-icon",sizes:"48x48",url:(0,d.fillMetadataSegment)(".",await a.params,"favicon.ico")+"?7161ee1d105bc9c7"}]}};