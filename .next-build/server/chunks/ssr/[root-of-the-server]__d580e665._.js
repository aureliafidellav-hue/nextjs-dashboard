module.exports=[26981,67590,a=>{"use strict";var b=a.i(87104);let c=a=>(a/100).toLocaleString("en-US",{style:"currency",currency:"USD"});a.s(["formatCurrency",0,c,"formatDateToLocal",0,(a,b="en-US")=>{let c=new Date(a);return new Intl.DateTimeFormat(b,{day:"numeric",month:"short",year:"numeric"}).format(c)},"generateYAxis",0,a=>{let b=[],c=1e3*Math.ceil(Math.max(...a.map(a=>a.revenue))/1e3);for(let a=c;a>=0;a-=1e3)b.push(`$${a/1e3}K`);return{yAxisLabels:b,topLabel:c}}],67590);let d=(0,b.default)(process.env.POSTGRES_URL,{ssl:"require"});async function e(){try{return await d`SELECT * FROM revenue`}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch revenue data.")}}async function f(){try{return(await d`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).map(a=>({...a,amount:c(a.amount)}))}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch the latest invoices.")}}async function g(){try{let a=d`SELECT COUNT(*) FROM invoices`,b=d`SELECT COUNT(*) FROM customers`,e=d`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,f=await Promise.all([a,b,e]),g=Number(f[0][0].count??"0"),h=Number(f[1][0].count??"0"),i=c(f[2][0].paid??"0"),j=c(f[2][0].pending??"0");return{numberOfCustomers:h,numberOfInvoices:g,totalPaidInvoices:i,totalPendingInvoices:j}}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch card data.")}}async function h(a,b){try{return await d`
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
    `}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch invoices.")}}async function i(a){try{let b=await d`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${a}%`} OR
      customers.email ILIKE ${`%${a}%`} OR
      invoices.amount::text ILIKE ${`%${a}%`} OR
      invoices.date::text ILIKE ${`%${a}%`} OR
      invoices.status ILIKE ${`%${a}%`}
  `;return Math.ceil(Number(b[0].count)/6)}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch total number of invoices.")}}async function j(a){try{return(await d`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${a};
    `).map(a=>({...a,amount:a.amount/100}))[0]}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch invoice.")}}async function k(){try{return await d`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch all customers.")}}async function l(a){try{return(await d`
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
	  `).map(a=>({...a,total_pending:c(a.total_pending),total_paid:c(a.total_paid)}))}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch customer table.")}}a.s(["fetchCardData",()=>g,"fetchCustomers",()=>k,"fetchFilteredCustomers",()=>l,"fetchFilteredInvoices",()=>h,"fetchInvoiceById",()=>j,"fetchInvoicesPages",()=>i,"fetchLatestInvoices",()=>f,"fetchRevenue",()=>e],26981)},68962,a=>{"use strict";function b(){for(var a,b,c=0,d="",e=arguments.length;c<e;c++)(a=arguments[c])&&(b=function a(b){var c,d,e="";if("string"==typeof b||"number"==typeof b)e+=b;else if("object"==typeof b)if(Array.isArray(b)){var f=b.length;for(c=0;c<f;c++)b[c]&&(d=a(b[c]))&&(e&&(e+=" "),e+=d)}else for(d in b)b[d]&&(e&&(e+=" "),e+=d);return e}(a))&&(d&&(d+=" "),d+=b);return d}a.s(["clsx",()=>b,"default",0,b])},93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},93642,a=>{a.n(a.i(86044))},70864,a=>{a.n(a.i(33290))},23659,a=>{a.n(a.i(26859))},98441,a=>{a.n(a.i(15757))},51557,a=>{a.n(a.i(69338))},53554,a=>{a.n(a.i(96382))},22882,a=>{a.n(a.i(46927))},78894,a=>{a.n(a.i(18169))},4059,a=>{"use strict";var b=a.i(55008),c=a.i(68962),d=a.i(24290);a.i(10171);var e=a.i(53754);function f({breadcrumbs:a}){return(0,b.jsx)("nav",{"aria-label":"Breadcrumb",className:"mb-6 block",children:(0,b.jsx)("ol",{className:(0,c.clsx)(e.lusitana.className,"flex text-xl md:text-2xl"),children:a.map((e,f)=>(0,b.jsxs)("li",{"aria-current":e.active,className:(0,c.clsx)(e.active?"text-gray-900":"text-gray-500"),children:[(0,b.jsx)(d.default,{href:e.href,children:e.label}),f<a.length-1?(0,b.jsx)("span",{className:"mx-3 inline-block",children:"/"}):null]},e.href))})})}a.s(["default",()=>f])},48,a=>{"use strict";let b=(0,a.i(18134).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/app/ui/invoices/create-form.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/app/ui/invoices/create-form.tsx <module evaluation>","default");a.s(["default",0,b])},5279,a=>{"use strict";let b=(0,a.i(18134).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/app/ui/invoices/create-form.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/app/ui/invoices/create-form.tsx","default");a.s(["default",0,b])},17666,a=>{"use strict";a.i(48);var b=a.i(5279);a.n(b)},14889,a=>{"use strict";var b=a.i(55008),c=a.i(26981),d=a.i(4059),e=a.i(17666);async function f(){let a=await (0,c.fetchCustomers)();return(0,b.jsxs)("main",{children:[(0,b.jsx)(d.default,{breadcrumbs:[{label:"Invoices",href:"/dashboard/invoices"},{label:"Create Invoice",href:"/dashboard/invoices/create",active:!0}]}),(0,b.jsx)(e.default,{customers:a})]})}a.s(["default",()=>f,"metadata",0,{title:"Create Invoice"}])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__d580e665._.js.map