/* ================= icons ================= */
const P={
 home:'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z',perf:'M3 17l6-6 4 4 8-8M15 7h6v6',
 bell:'M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0',
 news:'M4 4h13v16H6a2 2 0 0 1-2-2zM17 8h3v10a2 2 0 0 1-2 2M8 8h5M8 12h5M8 16h3',
 star:'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
 mic:'M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10a7 7 0 0 1-14 0M12 17v5M8 22h8',
 spark:'M12 3l2.1 5.4L19.5 10l-5.4 2.1L12 17.5l-2.1-5.4L4.5 10l5.4-2.1zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z',
 trophy:'M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4',
 social:'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
 user:'M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10',
 search:'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM21 21l-4.35-4.35',
 flame:'M12 22c4 0 7-3 7-7 0-4-3-6-4-9-1 2-2 3-3 3 0-2-1-4-3-6 0 4-4 6-4 12 0 4 3 7 7 7z',
 moon:'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',close:'M18 6 6 18M6 6l12 12',
 send:'M22 2 11 13M22 2l-7 20-4-9-9-4z',chev:'M9 18l6-6-6-6',back:'M15 18l-6-6 6-6',down:'M6 9l6 6 6-6',
 plus:'M12 5v14M5 12h14',check:'M20 6 9 17l-5-5',eye:'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
 skip:'M5 4l10 8-10 8zM19 5v14',info:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01',
 share:'M4 12v8h16v-8M16 6l-4-4-4 4M12 2v13',bolt:'M13 2 3 14h9l-1 8 10-12h-9z',target:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
 clock:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',diamond:'M6 3h12l4 6-10 12L2 9z',owl:'M12 4c-5 0-8 3-8 8s3 8 8 8 8-3 8-8-3-8-8-8zM9 11h.01M15 11h.01M10 15h4',
 layers:'M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5',book:'M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5',
 card:'M2 5h20v14H2zM2 10h20',gear:'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1',
 display:'M2 4h20v13H2zM8 21h8M12 17v4',help:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01',
 lock:'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4',logout:'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
 chart:'M3 3v18h18M7 15l4-4 3 3 5-6',globe:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20',
 cal:'M3 5h18v16H3zM3 10h18M8 3v4M16 3v4',refresh:'M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5',sun:'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4'
};
const ic=(n,s=18)=>`<svg class="ic" viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[n]}"/></svg>`;
const LOGO=s=>`<svg viewBox="0 0 32 32" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 5.5h22M9 9h5.2M17.8 9H23M14.2 9v18M17.8 9v18"/></svg>`;
function hydrate(r=document){r.querySelectorAll('i[data-i]').forEach(el=>{el.outerHTML=ic(el.dataset.i)});r.querySelectorAll('[data-logo]').forEach(el=>{if(!el.innerHTML)el.innerHTML=LOGO(+el.dataset.logo)})}

/* ================= helpers ================= */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const money=(n,d=2)=>'$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});
const sgn=n=>n>0?'+':n<0?'−':'';
const pct=(n,d=2)=>sgn(n)+Math.abs(n).toFixed(d)+'%';
const cls=n=>n>=0?'gain':'loss';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function walk(seed,n,start,end,vol,jump){const r=rng(seed);const v=[start];for(let i=1;i<n;i++){let x=v[i-1]*(1+(r()-.5)*vol);if(jump&&i>=jump.at&&i<jump.at+jump.len)x*=Math.pow(jump.size,1/jump.len);v.push(x)}const f=end/v[n-1];return v.map((x,i)=>x*Math.pow(f,i/(n-1)))}
function niceStep(x){const p=Math.pow(10,Math.floor(Math.log10(x)));const f=x/p;return(f<1.5?1:f<3?2:f<7?5:10)*p}
let gid=0;
function spark(data,h=40,label='Trend'){
  const w=200;let mn=Math.min(...data),mx=Math.max(...data);const pd=(mx-mn)*.1||1;mn-=pd;mx+=pd;
  const X=i=>i/(data.length-1)*w,Y=v=>(1-(v-mn)/(mx-mn))*h;
  const d=data.map((v,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(v).toFixed(1)).join('');const id='s'+(++gid);
  return `<svg class="ch${data[data.length-1]<data[0]?' down':''}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" role="img" aria-label="${label}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".25"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs><path d="${d}L${w} ${h}L0 ${h}Z" fill="url(#${id})"/><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.8" vector-effect="non-scaling-stroke"/></svg>`;
}
/* multi-series line chart with direct end labels */
function lines(series,o={}){
  const w=o.w||900,h=o.h||320,L=44,R=o.endLabels?118:16,T=14,B=28;
  const all=series.flatMap(s=>s.data);let mn=Math.min(...all),mx=Math.max(...all);const pd=(mx-mn)*.08||1;mn-=pd;mx+=pd;
  const n=series[0].data.length;const X=i=>L+i/(n-1)*(w-L-R),Y=v=>T+(1-(v-mn)/(mx-mn))*(h-T-B);
  let g='';const st=niceStep((mx-mn)/4);for(let t=Math.ceil(mn/st)*st;t<=mx;t+=st){const y=Y(t).toFixed(1);g+=`<line class="grid" x1="${L}" x2="${w-R}" y1="${y}" y2="${y}"/><text x="${L-8}" y="${+y+4}" text-anchor="end">${o.fmt?o.fmt(t):Math.round(t)}</text>`}
  (o.xl||[]).forEach((lab,i,a)=>{const x=L+i/(a.length-1)*(w-L-R);g+=`<text x="${x.toFixed(1)}" y="${h-6}" text-anchor="${i===0?'start':i===a.length-1?'end':'middle'}">${lab}</text>`});
  if(o.base!=null&&o.base>mn&&o.base<mx){const y=Y(o.base);g+=`<line class="base" x1="${L}" x2="${w-R}" y1="${y}" y2="${y}"/>`}
  // end labels with collision avoidance
  const ends=series.map(s=>({s,y:Y(s.data[n-1])})).sort((a,b)=>a.y-b.y);for(let i=1;i<ends.length;i++)if(ends[i].y-ends[i-1].y<16)ends[i].y=ends[i-1].y+16;
  let paths='';
  series.forEach((s,k)=>{const d=s.data.map((v,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(v).toFixed(1)).join('');
    if(s.area){const id='a'+(++gid);paths+=`<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:${s.c};stop-opacity:.22"/><stop offset="1" style="stop-color:${s.c};stop-opacity:0"/></linearGradient></defs><path d="${d}L${X(n-1)} ${h-B}L${L} ${h-B}Z" fill="url(#${id})"/>`}
    paths+=`<path d="${d}" fill="none" style="stroke:${s.c}" stroke-width="${s.dash?1.6:2.2}" ${s.dash?'stroke-dasharray="5 5"':''} stroke-linejoin="round"/>`;
    paths+=`<circle cx="${X(n-1)}" cy="${Y(s.data[n-1])}" r="4" style="fill:${s.c}"/>`});
  let labs='';if(o.endLabels)ends.forEach(e=>{labs+=`<text class="lab" x="${w-R+10}" y="${e.y+4}" style="fill:${e.s.c}">${e.s.label}</text>`});
  return `<svg class="ch" viewBox="0 0 ${w} ${h}" role="img" aria-label="${o.label||'Chart'}">${g}${paths}${labs}</svg>`;
}
/* price chart with optional entry/exit markers */
function priceChart(data,o={}){
  const w=o.w||900,h=o.h||300,L=50,R=16,T=16,B=28;let mn=Math.min(...data),mx=Math.max(...data);const pd=(mx-mn)*.12||1;mn-=pd;mx+=pd;
  const n=data.length,X=i=>L+i/(n-1)*(w-L-R),Y=v=>T+(1-(v-mn)/(mx-mn))*(h-T-B);
  let g='';const st=niceStep((mx-mn)/4);for(let t=Math.ceil(mn/st)*st;t<=mx;t+=st){const y=Y(t).toFixed(1);g+=`<line class="grid" x1="${L}" x2="${w-R}" y1="${y}" y2="${y}"/><text x="${L-8}" y="${+y+4}" text-anchor="end">${o.fmt?o.fmt(t):(t<10?t.toFixed(2):Math.round(t))}</text>`}
  (o.xl||[]).forEach((lab,i,a)=>{const x=L+i/(a.length-1)*(w-L-R);g+=`<text x="${x.toFixed(1)}" y="${h-6}" text-anchor="${i===0?'start':i===a.length-1?'end':'middle'}">${lab}</text>`});
  const d=data.map((v,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(v).toFixed(1)).join('');const id='p'+(++gid);const down=data[n-1]<data[0];
  let mk='';(o.marks||[]).forEach(m=>{const x=X(m.i),y=Y(data[m.i]);mk+=`<line x1="${x}" x2="${x}" y1="${T}" y2="${h-B}" style="stroke:${m.c}" stroke-dasharray="3 4" opacity=".6"/><circle cx="${x}" cy="${y}" r="7" style="fill:${m.c}"/><circle cx="${x}" cy="${y}" r="13" style="fill:${m.c}" opacity=".2"/><rect x="${Math.min(Math.max(x-34,L),w-R-68)}" y="${T}" width="68" height="22" rx="11" style="fill:${m.c}"/><text x="${Math.min(Math.max(x,L+34),w-R-34)}" y="${T+15}" text-anchor="middle" style="fill:#000;font-weight:800;font-size:11px">${m.t}</text>`});
  return `<svg class="ch${down?' down':''}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${o.label||'Price chart'}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".24"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs>${g}<path d="${d}L${X(n-1)} ${h-B}L${L} ${h-B}Z" fill="url(#${id})"/><path d="${d}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>${mk}<circle cx="${X(n-1)}" cy="${Y(data[n-1])}" r="4.5" fill="currentColor"/></svg>`;
}
function ring(p,size=112,stroke=10){const r=(size-stroke)/2,c=2*Math.PI*r;const id='r'+(++gid);return `<svg viewBox="0 0 ${size} ${size}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0C56FF"/><stop offset="1" stop-color="#3CFDB5"/></linearGradient></defs><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" style="stroke:var(--surface-3)" stroke-width="${stroke}"/><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="url(#${id})" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c*p/100} ${c}"/></svg>`}

/* ================= data (live app, 7 Oct 2026) ================= */
const S={
 val:{k:'val',name:'Valuations AI',c:'var(--s-val)',value:177215.30,gain:77215.30,pct:77.22,win:78.6,beta:0.43,avg:'43',spx:35.85,counts:{all:209,open:19,win:148,loss:42},
  curve:walk(11,240,100,177.22,.024,{at:100,len:26,size:1.45}),
  short:'Finds stocks priced away from their AI-derived fair value.',
  desc:'Valuations AI© captures returns from valuation-driven opportunities in US stocks and ETFs. It is a factor-based quant strategy that uses dimensionality reduction to uncover inefficiencies, blending AI fair-value estimates with price action, institutional flows and fundamentals to go long or short.',
  how:['Scores ~2,200 US stocks','AI fair value vs price','Confirms with flows','Long or short alert']},
 dp:{k:'dp',name:'Dark Pools AI',c:'var(--s-dp)',value:134081.93,gain:34081.93,pct:34.08,win:67.73,beta:0.98,avg:'—',spx:null,counts:null,
  curve:walk(23,240,100,134.08,.028),
  short:'Follows institutional block trades made off-exchange.',
  desc:'Dark Pools AI© tracks institutional money before it shows up on lit markets. It scans millions of off-exchange prints for unusually large block trades, keeps only statistically significant (2-sigma+) activity, confirms price direction and signals around those liquidity events.',
  how:['Scans off-exchange prints','Flags 2σ+ block trades','Confirms direction','Long or short alert']},
 earn:{k:'earn',name:'Earnings AI',c:'var(--s-earn)',value:132495.37,gain:32495.37,pct:32.50,win:71.87,beta:0.30,avg:'32',spx:null,counts:{all:1308,open:53,win:926,loss:329},
  curve:walk(5,240,100,132.50,.018),
  short:'Positions the day before a company reports.',
  desc:'Earnings AI© looks for opportunities before companies report. It weighs earnings history, valuation, institutional positioning, short interest and options-implied moves to forecast the post-earnings reaction, then takes a long or short position the day before the report.',
  how:['Watches the earnings calendar','Reads options & short interest','Forecasts the reaction','Enters day before report']}
};
const SPX=walk(77,240,100,135.85,.012);
const SK=['val','dp','earn'];

const TR=[
 {tk:'ZS',co:'Zscaler Inc',s:'val',st:'open',side:'LONG',sig:'Undervalued',sh:20,inv:3696.60,ed:'2026-08-14',ep:184.83,cur:212.25,roi:14.84,alert:'TruthSayer AI Valuations Entry Alert for $ZS: Our Valuations algorithm shows $ZS is undervalued. We are long $ZS at an Entry Price of $184.83. (79% win rate)'},
 {tk:'CPB',co:"Campbell's Co",s:'val',st:'open',side:'LONG',sig:'Undervalued',sh:50,inv:1153.00,ed:'2026-07-02',ep:23.06,cur:19.37,roi:-16.00,alert:'TruthSayer AI Valuations Alert: Our Valuations Model shows that $CPB is undervalued. We are averaging down our cost basis to $28.65. (79% win rate)'},
 {tk:'XAIR',co:'Beyond Air Inc',s:'val',st:'open',side:'LONG',sig:'Undervalued',sh:50,inv:520.00,ed:'2026-05-08',ep:10.40,cur:2.85,roi:-72.60,alert:'TruthSayer AI Valuations Entry Alert for $XAIR: Our Valuations algorithm shows $XAIR is undervalued. We are long $XAIR at an Entry Price of $10.40. (79% win rate)'},
 {tk:'MA',co:'Mastercard Inc',s:'val',st:'open',side:'LONG',sig:'Undervalued',sh:5,inv:2521.45,ed:'2026-04-09',ep:504.29,cur:567.65,roi:12.56,alert:'TruthSayer AI Valuations Entry Alert for $MA: Our Valuations algorithm shows $MA is undervalued. We are long $MA at an Entry Price of $504.29. (79% win rate)'},
 {tk:'ORCL',co:'Oracle Corp',s:'val',st:'win',side:'LONG',sig:'Undervalued',sh:10,inv:1508.90,xc:1793.50,gross:284.60,comm:9.98,net:274.62,days:93,ed:'2026-03-10',ep:150.89,xd:'2026-06-11',xp:179.35,cur:137.10,roi:18.20,alert:'TruthSayer AI Valuations Entry Alert for $ORCL: Our Valuations algorithm shows $ORCL is undervalued. We are long $ORCL at an Entry Price of $150.89. (79% win rate)',exitAlert:'TruthSayer AI Valuations Exit Alert for $ORCL: We are exiting our position in Oracle Corp at an Exit Price of $179.35 for a net profit (after commissions) of 18.2% in 93 day(s).'},
 {tk:'NFLX',co:'Netflix Inc',s:'val',st:'open',side:'LONG',sig:'Undervalued',sh:100,inv:9328.00,ed:'2026-02-27',ep:93.28,cur:71.15,roi:-23.72,alert:'TruthSayer AI Valuations Entry Alert for $NFLX: Our Valuations algorithm shows $NFLX is undervalued. We are long $NFLX at an Entry Price of $93.28. (79% win rate)'},
 {tk:'WEAT',co:'Teucrium Wheat Fund',s:'val',st:'open',side:'LONG',sig:'Undervalued',sh:100,inv:2194.00,ed:'2026-02-23',ep:21.94,cur:25.50,roi:16.23,alert:'TruthSayer AI Valuations Entry Alert for $WEAT: Our Valuations algorithm shows $WEAT is undervalued. We are long $WEAT at an Entry Price of $21.94. (79% win rate)'},
 {tk:'USAR',co:'USA Rare Earth Inc',s:'val',st:'open',side:'LONG',sig:'Undervalued',sh:100,inv:2233.00,ed:'2026-02-02',ep:22.33,cur:15.18,roi:-32.02,alert:'TruthSayer AI Valuations Entry Alert for $USAR: Our Valuations algorithm shows $USAR is undervalued. We are long $USAR at an Entry Price of $22.33. (79% win rate)'},
 {tk:'NEOG',co:'Neogen Corp',s:'earn',st:'open',side:'SHORT',sig:'Short into earnings',ed:'2026-10-06',ep:12.03,cur:12.03,roi:0,alert:'TruthSayer AI Earnings Alert: $NEOG reports AFTER HOURS on 2026-10-06. Our algorithm shows Hedge Funds usually go short into earnings. 74.3% win rate. We\'re short at $12.03.'},
 {tk:'STZ',co:'Constellation Brands',s:'earn',st:'open',side:'LONG',sig:'Long into earnings',ed:'2026-10-06',ep:115.62,cur:115.62,roi:0,alert:'TruthSayer AI Earnings Alert: $STZ reports AFTER HOURS on 2026-10-06. Our algorithm shows Hedge Funds usually go long into earnings. 74.3% win rate. We\'re long at $115.62.'},
 {tk:'APOG',co:'Apogee Enterprises',s:'earn',st:'open',side:'SHORT',sig:'Short into earnings',ed:'2026-10-05',ep:36.01,cur:39.16,roi:-8.75,alert:'TruthSayer AI Earnings Alert: $APOG reports PRE-MARKET on 2026-10-06. Our algorithm shows Hedge Funds usually go short into earnings. 74.3% win rate. We\'re short at $36.01.'},
 {tk:'ACN',co:'Accenture Plc',s:'earn',st:'win',side:'LONG',sig:'Long into earnings',ed:'2026-09-30',ep:182.65,xd:'2026-10-01',xp:221.88,days:1,roi:20.80,exitAlert:'TruthSayer AI Earnings Exit Alert for $ACN: We are exiting our position in Accenture Plc at an Exit Price of $221.88 for a net profit (after commissions) of 20.8% in 1 day(s).'},
 {tk:'KMX',co:'CarMax Inc',s:'earn',st:'win',side:'SHORT',sig:'Short into earnings',ed:'2026-09-28',ep:56.94,xd:'2026-10-02',xp:54.76,days:4,roi:3.13,exitAlert:'TruthSayer AI Earnings Exit Alert for $KMX: We are exiting our position in Carmax Inc at an Exit Price of $54.76 for a net profit (after commissions) of 3.13% in 4 day(s).'},
 {tk:'CRDO',co:'Credo Technology Group',s:'earn',st:'win',side:'LONG',sig:'Long into earnings',xd:'2026-10-02',xp:224.72,days:31,roi:6.00,exitAlert:'TruthSayer AI Earnings Exit Alert for $CRDO: We are exiting our position in Credo Technology Group Holding Ltd at an Exit Price of $224.72 for a net profit (after commissions) of 6% in 31 day(s).'},
 {tk:'MLKN',co:'MillerKnoll Inc',s:'earn',st:'win',side:'LONG',sig:'Long into earnings',xd:'2026-10-01',xp:19.48,days:10,roi:3.10,exitAlert:'TruthSayer AI Earnings Exit Alert for $MLKN: We are exiting our position in MillerKnoll Inc at an Exit Price of $19.48 for a net profit (after commissions) of 3.1% in 10 day(s).'},
 {tk:'FDS',co:'FactSet Research Systems',s:'earn',st:'win',side:'LONG',sig:'Long into earnings',ed:'2026-09-29',ep:257.99,xd:'2026-09-30',xp:270.63,days:1,roi:4.25},
 {tk:'RIVN',co:'Rivian Automotive Inc',s:'earn',st:'loss',side:'LONG',sig:'Long into earnings',xd:'2026-10-02',xp:13.97,days:64,roi:-16.26,exitAlert:'TruthSayer AI Earnings Exit Alert for $RIVN: We were stopped out of our position in Rivian Automotive Inc at its 3x ATR Price of $13.97 for a net loss of -16.26% in 64 day(s).'},
 {tk:'MO',co:'Altria Group Inc',s:'earn',st:'loss',side:'LONG',sig:'Long into earnings',xd:'2026-10-01',xp:66.46,days:64,roi:-11.73,exitAlert:'TruthSayer AI Earnings Exit Alert for $MO: We were stopped out of our position in Altria Group Inc at its 3x ATR Price of $66.46 for a net loss of -11.73% in 64 day(s).'},
 {tk:'SLF',co:'Sun Life Financial Inc',s:'dp',st:'loss',side:'LONG',sig:'Institutional block buy',xd:'2026-10-01',xp:77.51,days:37,roi:-3.48,exitAlert:'TruthSayer AI Dark Pools Exit Alert for $SLF: We were stopped out of our position in Sun Life Financial Inc at its 3x ATR Price of $77.51 for a net loss of -3.48% in 37 day(s).'}
];
const TRM=Object.fromEntries(TR.map(t=>[t.tk,t]));

/* alerts with the user's own answer (me): took | watch | skip | null */
const AL=[
 {id:1,g:'Today',tk:'NEOG',s:'earn',k:'entry',side:'SHORT',head:'Short into earnings at $12.03',sub:'Reports after hours Oct 6 · hedge funds usually go short · 74.3% win rate',t:'03:59',d:'Oct 7',u:1,me:null},
 {id:2,g:'Today',tk:'STZ',s:'earn',k:'entry',side:'LONG',head:'Long into earnings at $115.62',sub:'Reports after hours Oct 6 · hedge funds usually go long · 74.3% win rate',t:'03:42',d:'Oct 7',u:1,me:null},
 {id:3,g:'Yesterday',tk:'APOG',s:'earn',k:'entry',side:'SHORT',head:'Short into earnings at $36.01',sub:'Reports pre-market Oct 6 · 74.3% win rate',t:'03:14',d:'Oct 6',u:1,me:null},
 {id:4,g:'Earlier this week',tk:'KMX',s:'earn',k:'exit',r:3.13,head:'Exited at $54.76',sub:'Net profit after commissions · held 4 days',t:'01:37',d:'Oct 3',me:'took'},
 {id:5,g:'Earlier this week',tk:'RIVN',s:'earn',k:'stop',r:-16.26,head:'Stopped out at $13.97 (3× ATR)',sub:'Net loss · held 64 days',t:'01:36',d:'Oct 3',me:'skip'},
 {id:6,g:'Earlier this week',tk:'CRDO',s:'earn',k:'exit',r:6.00,head:'Exited at $224.72',sub:'Net profit after commissions · held 31 days',t:'22:47',d:'Oct 2',me:'took'},
 {id:7,g:'Earlier this week',tk:'SLF',s:'dp',k:'stop',r:-3.48,head:'Stopped out at $77.51 (3× ATR)',sub:'Net loss · held 37 days',t:'00:02',d:'Oct 2',me:'watch'},
 {id:8,g:'Earlier this week',tk:'MLKN',s:'earn',k:'exit',r:3.10,head:'Exited at $19.48',sub:'Net profit after commissions · held 10 days',t:'00:00',d:'Oct 2',me:'took'},
 {id:9,g:'Earlier this week',tk:'MO',s:'earn',k:'stop',r:-11.73,head:'Stopped out at $66.46 (3× ATR)',sub:'Net loss · held 64 days',t:'23:43',d:'Oct 1',me:'skip'},
 {id:10,g:'Earlier this week',tk:'ACN',s:'earn',k:'exit',r:20.80,head:'Exited at $221.88',sub:'Net profit after commissions · held 1 day',t:'22:58',d:'Oct 1',me:null}
];
const RAW={NEOG:TRM.NEOG.alert,STZ:TRM.STZ.alert,APOG:TRM.APOG.alert,KMX:TRM.KMX.exitAlert,RIVN:TRM.RIVN.exitAlert,CRDO:TRM.CRDO.exitAlert,SLF:TRM.SLF.exitAlert,MLKN:TRM.MLKN.exitAlert,MO:TRM.MO.exitAlert,ACN:TRM.ACN.exitAlert};

/* sample news (illustrative — production would stream from the news feed) */
const NEWS=[
 {id:'n1',cat:'markets',lead:1,tk:['ZS'],imp:'up',t:'2h ago',src:'Sample · Markets',h:'Cloud security budgets hold up as enterprises renew zero-trust contracts',b:'Large renewals point to steady spend on secure access tools. Your Valuations AI© position in ZS is up 14.84% since the Aug 14 entry.'},
 {id:'n2',cat:'policy',tk:['NVDA'],imp:'watch',t:'3h ago',src:'Sample · Policy',h:'Senate committee schedules hearing on AI chip export rules',b:'Lawmakers are weighing tighter licensing for advanced accelerators. Hedge Fund Insights has five expert questions on NVIDIA demand.'},
 {id:'n3',cat:'markets',tk:['NEOG','STZ'],imp:'watch',t:'5h ago',src:'Sample · Earnings',h:'Neogen and Constellation Brands report after the bell',b:'Earnings AI© is short NEOG at $12.03 and long STZ at $115.62 going into the reports.'},
 {id:'n4',cat:'policy',tk:['MA'],imp:'down',t:'6h ago',src:'Sample · Policy',h:'Card networks face a renewed push for interchange fee caps',b:'A cap would pressure network fees. Valuations AI© holds MA long from $504.29, currently +12.56%.'},
 {id:'n5',cat:'markets',tk:['WEAT'],imp:'up',t:'8h ago',src:'Sample · Commodities',h:'Wheat futures climb as weather delays the northern harvest',b:'The WEAT position opened Feb 23 at $21.94 is up 16.23%.'},
 {id:'n6',cat:'policy',tk:['USAR'],imp:'up',t:'10h ago',src:'Sample · Trade',h:'Rare earth supply talks resume between trade partners',b:'Domestic producers could benefit from supply security deals. USAR is down 32.02% from the Feb 2 entry.'},
 {id:'n7',cat:'markets',tk:['NFLX'],imp:'watch',t:'Yesterday',src:'Sample · Media',h:'Streaming price rises test subscriber growth',b:'Investors are watching churn after the latest plan changes. NFLX is −23.72% from the Valuations AI© entry.'},
 {id:'n8',cat:'markets',tk:['CPB'],imp:'down',t:'Yesterday',src:'Sample · Consumer',h:'Packaged food makers flag softer volumes into the holidays',b:'Valuations AI© averaged down its CPB cost basis to $28.65 in July.'}
];

/* picks */
let PICKS=['BURU','ZS','MA','NFLX','WEAT'];
const TK={
 ZS:{co:'Zscaler, Inc.',ex:'NASDAQ',price:212.25,chg:10.45,chgp:5.18,seed:3,sector:'Services',industry:'Computer Software',emp:'4,980',hq:'110 Rose Orchard Way, San Jose, CA 95134',web:'zscaler.com',phone:'(408) 533-0288',
  desc:'Zscaler operates as a cloud security company worldwide. Zscaler Internet Access gives users, servers, operational technology and IoT devices secure access to SaaS applications and internet destinations. Zscaler Private Access provides access to applications hosted in data centers and private or public clouds, and Zscaler Digital Experience scores end-to-end user experience across business applications.',
  ms:[['Open','$210.00'],['High','$216.00'],['Low','$205.00'],['Volume','4,228,466'],['Market cap','$34.61B'],['52-week range','$114.63 – $336.99']],fin:true},
 BURU:{co:'Nuburu, Inc.',ex:'NYSE American',price:1.20,chg:0.08,chgp:7.14,seed:9,sector:'Manufacturing',industry:'Electrical Equipment',emp:'2',hq:'United States',web:'tailwindacquisition.com',phone:'(720) 767-1400',
  desc:'The data provider currently returns a shell-company description (Tailwind Acquisition Corp.) for this ticker. Flagged for the data team.',ms:[],fin:false}
};
function tkInfo(sym){if(TK[sym])return TK[sym];const t=TRM[sym];if(!t){if(INS[sym]||NEWS.some(n=>n.tk.includes(sym)))return {co:sym,ex:'US',price:null,chg:null,chgp:null,seed:sym.charCodeAt(0)*3+sym.length,sector:'—',industry:'—',emp:'—',hq:'—',web:'',phone:'',desc:`Profile, price and statistics for ${sym} load from the market data provider. This mockup only carries prices for tickers TruthSayer has traded.`,ms:[],fin:false};return null}const p=t.cur??t.xp;return {co:t.co,ex:'US',price:p,chg:null,chgp:null,seed:sym.charCodeAt(0)+sym.length,sector:'—',industry:'—',emp:'—',hq:'—',web:'',phone:'',desc:`${t.co}. Company profile loads from the data provider.`,ms:[],fin:false}}

const INS={
 NVDA:['What challenges do you foresee for NVIDIA in managing two separate architectures for the same part?','How does demand for NVIDIA GPUs in AI compare to previous generations, and what is driving it?','How do you expect demand for AI hardware to change over the next 12–18 months?'],
 GOOGL:['How do you see the competitive landscape for smart doorbells and outdoor cameras, and what drives share for Google products?','What changes have you noticed in search, and how have impressions, clicks and transactions on Google been affected?','What will shape the advertising landscape for a company like Google?'],
 AAPL:['What is driving premium smartphone growth for Apple, and how are carriers handling price sensitivity?','What is the split between buying phones from carriers versus unlocked devices from Apple?','How important is Apple’s product curation to AT&T, Verizon and T-Mobile?'],
 AMZN:['Who are the key players when bringing a solution to an Amazon warehousing site?','How does Amazon’s fee and regulation structure shape its seller base?','How would you estimate the number of $100M+ businesses on Amazon?'],
 META:['What are the leading indicators of success for Instagram and Facebook?','What evidence suggests TikTok is gaining with Instagram’s core demographics?','How have ITP and IDFA changed Meta’s monetisation strategy?'],
 MSFT:['How do Microsoft and Azure differentiate from other cloud providers?','What drove margins for data, AI and ML services on Azure?','How will edge computing and IoT affect Azure’s growth?'],
 TSLA:['How has battery demand affected the EV supply chain, and what has Tesla done about the shortage?','What limits Tesla in delivering large fixed canopy glass at scale?','How does Tesla expect the EV market to evolve over the next three to five years?']
};

/* rewards state (sample progress) */
const ME={xp:640,level:3,streak:6,left:1000,answeredToday:false};
const LEVELS=[['Rookie',0],['Scout',250],['Analyst',500],['Trader',1000],['Portfolio Manager',2000],['Hedge Fund',4000]];
const PTS={took:30,watch:10,skip:5};

/* ================= shared bits ================= */
const sName=k=>S[k].name;
const stratChip=k=>`<span class="strat" style="--c:${S[k].c}">${S[k].name} ©</span>`;
const sideTag=s=>`<span class="tag ${s.toLowerCase()}">${s}</span>`;
const stTag=st=>`<span class="tag dot ${st}">${{open:'Open',win:'Profit',loss:'Loss'}[st]}</span>`;
const resultOf=a=>a.k==='entry'?sideTag(a.side):`<span class="num ${cls(a.r)}" style="font-weight:800">${pct(a.r)}</span>`;
function actBtns(a,big){return `<div class="act" role="group" aria-label="Did you act on this alert?">
  <button data-a="took" data-al="${a.id}" aria-pressed="${a.me==='took'}">${ic('check',14)}${a.k==='entry'?'Took it':'I traded it'}</button>
  <button data-a="watch" data-al="${a.id}" aria-pressed="${a.me==='watch'}">${ic('eye',14)}Watching</button>
  <button data-a="skip" data-al="${a.id}" aria-pressed="${a.me==='skip'}">${ic('skip',14)}Skip</button></div>`}
const lvlName=()=>LEVELS[ME.level-1][0];
const nextLvl=()=>LEVELS[ME.level]||LEVELS[LEVELS.length-1];
const answered=()=>AL.filter(a=>a.me).length;
const follow=()=>Math.round(AL.filter(a=>a.me==='took'||a.me==='watch').length/AL.length*100);

/* ================= HOME ================= */
let homeLines={val:1,dp:1,earn:1,spx:1};
function vHome(){
  const unans=AL.filter(a=>!a.me);
  const tape=[...PICKS,'ORCL','CPB','XAIR','USAR','ACN'].map(s=>{const i=tkInfo(s);const t=TRM[s];const ch=i.chgp!=null?`<span class="${cls(i.chgp)}">${pct(i.chgp)}</span>`:t?`<span class="${cls(t.roi)}">${pct(t.roi)} signal</span>`:'';return `<a href="#ticker-${s}"><b>${s}</b><span class="num">${money(i.price)}</span>${ch}</a>`}).join('');
  const best=TRM.ACN;
  return `
  <div class="tape" aria-label="Your tickers"><div class="tape-in">${tape}${tape}</div></div>
  <div class="hero">
    <div class="card hi gv-border">
      <span class="eyebrow">Wednesday, 7 October · US markets open at 6:30 PM your time</span>
      <h1 class="display">Morning, hassan.<br><span class="g">${unans.length} calls</span> need you.</h1>
      <div class="brief">
        <a href="#" data-stories><b class="num">${unans.length}</b> new alerts to answer</a>
        <a href="#news"><b class="num">4</b> headlines on your picks</a>
        <a href="#ticker-ZS"><b>ZS</b> <span class="gain num">+5.18%</span> today</a>
        <a href="#strategies"><b class="num">77.22%</b> Valuations AI© since inception</a>
      </div>
      <div class="row"><button class="btn btn--grad" data-stories>${ic('bolt',16)}Answer today's alerts</button><a class="btn btn--ghost" href="#strategies">See all strategies</a></div>
    </div>
    <div class="card score">
      <div class="score-top">
        <div class="ring">${ring(follow())}<div class="v"><div><b class="num">${follow()}%</b><br><span>acted on</span></div></div></div>
        <div><span class="eyebrow" style="margin:0 0 4px">Your week</span><div class="h2" style="font-size:22px">You acted on <span class="g">${AL.filter(a=>a.me==='took').length} of ${AL.length}</span> alerts</div><p class="muted" style="margin:6px 0 0;font-size:13px">Answer the ${unans.length} open ones to keep your <b style="color:var(--ink)">${ME.streak}-day streak</b> alive.</p></div>
      </div>
      <div class="mini-stats"><div><b class="num">${ME.streak}</b><span>Day streak</span></div><div><b class="num" data-xp-num>${ME.xp}</b><span>XP · ${lvlName()}</span></div><div><b class="num">+4.2%</b><span>Avg. on taken</span></div></div>
      <a class="link" href="#rewards">Open rewards →</a>
    </div>
  </div>

  <div class="sec">
    <div class="sec-h"><div class="l"><h2 class="h2">New alerts</h2><span class="muted" style="font-size:13px">Tap to answer · +30 XP when you take one</span></div><a class="more" href="#alerts">All alerts</a></div>
    <div class="stories">${AL.map((a,i)=>`<button class="story${a.me?' seen':''}" data-story="${i}"><span class="ringb"><span>${a.tk}</span></span>${a.tk}<small>${a.k==='entry'?a.side:a.r>0?'Exit':'Stop'}</small></button>`).join('')}</div>
  </div>

  <div class="bento sec">
    <div class="card pad b-8">
      <div class="sec-h" style="margin-bottom:6px"><div class="l"><h2 class="h2">Live performance</h2><span class="live">Oct 5 close</span></div>
        <div class="legend" id="homeLegend">${[...SK.map(k=>[k,S[k].name,S[k].c]),['spx','S&P 500','var(--s-spx)']].map(([k,l,c])=>`<button data-hl="${k}" aria-pressed="${!!homeLines[k]}" style="--c:${c}"><i></i>${l}</button>`).join('')}</div></div>
      <div class="chart-wrap" id="homeChart">${homeChart()}</div>
      <div class="idx-row">${SK.map(k=>`<a href="#strategies-${k}" style="--c:${S[k].c}"><span>${S[k].name} ©</span><b class="num">${money(S[k].value,0)}</b><small class="gain num">${pct(S[k].pct)}</small></a>`).join('')}</div>
    </div>
    <div class="b-4 stack">
      <div class="card win-card grad-border">
        <span class="eyebrow" style="margin:0">Best exit this week</span>
        <div class="big gain num">+20.8%</div>
        <div style="font-weight:800;font-size:16px">ACN in 1 day</div>
        <p class="muted" style="margin:0;font-size:13px">Earnings AI© went long Accenture before the report and exited at $221.88.</p>
        <div class="row"><a class="btn btn--ghost btn--sm" href="#trade-ACN">Open trade</a><button class="btn btn--ghost btn--sm" data-share="ACN">${ic('share',15)}Share</button></div>
      </div>
      <div class="card pad">
        <div class="sec-h" style="margin-bottom:10px"><h2 class="h2" style="font-size:16px">This week's challenge</h2><span class="sample">Sample</span></div>
        <div class="challenge"><span class="ico">${ic('target')}</span><div style="flex:1;min-width:0"><b>Answer 10 alerts</b><span class="num">${Math.min(answered(),10)} of 10 · +150 XP</span><div class="bar"><i style="width:${Math.min(answered(),10)*10}%"></i></div></div></div>
      </div>
    </div>

    <div class="card pad b-5">
      <div class="sec-h"><h2 class="h2">My picks</h2><a class="more" href="#picks">Manage</a></div>
      ${PICKS.slice(0,5).map(s=>{const i=tkInfo(s);const t=TRM[s];return `<a class="pk" href="#ticker-${s}"><span class="mono">${s}</span><span class="n"><b>${s}</b><span>${t?S[t.s].name+' · '+t.side:'No active signal'}</span></span><span class="sp">${spark(walk(i.seed,40,i.price*.94,i.price,.03),30,s)}</span><span class="p num"><b>${money(i.price)}</b>${i.chgp!=null?`<span class="${cls(i.chgp)}">${pct(i.chgp)}</span>`:t?`<span class="${cls(t.roi)}">${pct(t.roi)}</span>`:''}</span></a>`}).join('')}
    </div>
    <div class="card pad b-7">
      <div class="sec-h"><div class="l"><h2 class="h2">News on your picks</h2><span class="sample">Sample headlines</span></div><a class="more" href="#news">All news</a></div>
      ${NEWS.filter(n=>n.tk.some(t=>PICKS.includes(t))).slice(0,4).map(newsItem).join('')}
    </div>

    <div class="card pad b-12">
      <div class="sec-h"><div class="l"><h2 class="h2">Latest alerts</h2><span class="muted" style="font-size:13px">Every alert is traded in the funded account</span></div><a class="more" href="#alerts">See all</a></div>
      <div class="stack" style="gap:8px">${AL.slice(0,4).map(alertRow).join('')}</div>
    </div>

    <div class="b-12">
      <div class="sec-h"><div class="l"><h2 class="h2">Hedge Fund Insights</h2><span class="muted" style="font-size:13px">Questions from expert interviews · one tap to ask</span></div><a class="more" href="#research">Library</a></div>
      <div class="q-grid">${['NVDA','TSLA','MSFT'].map(k=>qCard(k,INS[k][0])).join('')}</div>
    </div>
  </div>`;
}
function homeChart(){
  const ser=[...SK.filter(k=>homeLines[k]).map(k=>({data:S[k].curve,c:S[k].c,label:S[k].name})),...(homeLines.spx?[{data:SPX,c:'var(--s-spx)',label:'S&P 500',dash:1}]:[])];
  if(!ser.length)return `<div class="nodata" style="margin:20px 0"><b>All lines are hidden</b><p>Turn a strategy back on above.</p></div>`;
  return lines(ser,{w:900,h:300,endLabels:true,base:100,xl:['Sep 2024','Mar 2025','Sep 2025','Mar 2026','Oct 2026'],label:'Index value of $100 invested'});
}
function newsItem(n){return `<div class="news-i"><div class="meta"><span>${n.src}</span><span>·</span><span>${n.t}</span>${n.tk.map(t=>`<a class="tkchip" href="#ticker-${t}">${t}</a>`).join('')}</div><h4>${n.h}</h4><span class="impact ${n.imp} imp">${{up:'Tailwind',down:'Headwind',watch:'Watch'}[n.imp]}</span></div>`}
function qCard(tk,q){return `<div class="card q-card"><p>${q}</p><div class="f"><a class="tkchip" href="#ticker-${tk}">${tk}</a><button class="btn btn--grad btn--xs" data-ask="${esc(q)}">${ic('spark',14)}Ask AI</button></div></div>`}
function alertRow(a){return `<div class="al${a.u?' unread':''}" data-alrow="${a.id}">
  <span class="mono">${a.tk}</span>
  <div style="min-width:0"><div class="top"><b>${a.tk}</b>${stratChip(a.s)}${a.k==='entry'?'<span class="tag dot open">Entry</span>':a.k==='exit'?'<span class="tag dot win">Exit</span>':'<span class="tag dot loss">Stop</span>'}</div>
   <div class="head">${a.head}</div><p>${a.sub}</p><div class="raw">${RAW[a.tk]||''}</div>
   <div class="foot">${actBtns(a)}<div class="row" style="gap:6px"><button class="btn btn--ghost btn--xs" data-expand="${a.id}">Full alert</button>${TRM[a.tk]?`<a class="btn btn--ghost btn--xs" href="#trade-${a.tk}">Trade</a>`:''}</div></div></div>
  <div class="r">${a.k==='entry'?sideTag(a.side):`<span class="big num ${cls(a.r)}">${pct(a.r)}</span>`}<small>${a.d} · ${a.t}</small></div></div>`}

/* ================= STRATEGIES (one hub) ================= */
let sSel='all',sRange='All',sLines={val:1,dp:1,earn:1,spx:1},tFilt='all',tQ='';
function vStrategies(){
  const one=sSel!=='all'?S[sSel]:null;
  return `
  <div class="page-head"><div><span class="eyebrow">Strategies</span><h1 class="h1">Three AI strategies.<br><span class="g">One scoreboard.</span></h1><p class="lead">Every alert is traded in a funded account with $100k per strategy. Compare them, then drill into any trade.</p></div>
   <div class="seg" role="group" aria-label="Strategy">${[['all','All'],...SK.map(k=>[k,S[k].name])].map(([k,l])=>`<button aria-pressed="${sSel===k}" data-ssel="${k}">${l}</button>`).join('')}</div></div>
  <div class="s-hero">${SK.map(k=>{const s=S[k];return `<button class="s-card" style="--c:${s.c}" aria-pressed="${sSel===k}" data-ssel="${sSel===k?'all':k}"><span class="nm">${s.name} ©</span><span class="v num">${money(s.value)}</span><span class="d gain num">${sgn(s.gain)}${money(s.gain)} · ${pct(s.pct)}</span><span class="muted" style="font-size:13px;margin-top:6px">${s.short}</span><span class="ft"><span>Win rate <b class="num">${s.win}%</b></span><span>Beta <b class="num">${s.beta}</b></span></span></button>`}).join('')}</div>

  <div class="card pad sec" style="margin-top:16px">
    <div class="sec-h"><div class="l"><h2 class="h2">${one?one.name+'© vs S&P 500':'Growth of $100'}</h2><span class="muted" style="font-size:12.5px">Since Sep 2024 · net of commissions</span></div>
      <div class="row"><div class="legend">${(one?[[sSel,one.name,one.c],['spx','S&P 500','var(--s-spx)']]:[...SK.map(k=>[k,S[k].name,S[k].c]),['spx','S&P 500','var(--s-spx)']]).map(([k,l,c])=>`<button data-sl="${k}" aria-pressed="${!!sLines[k]}" style="--c:${c}"><i></i>${l}</button>`).join('')}</div>
      <div class="seg sm">${['6M','1Y','All'].map(r=>`<button aria-pressed="${sRange===r}" data-srange="${r}">${r}</button>`).join('')}</div></div></div>
    <div class="chart-wrap">${stratChart()}</div>
  </div>

  ${one?`<div class="bento sec" style="margin-top:16px">
    <div class="card pad b-7"><span class="eyebrow">How ${one.name}© works</span><p style="margin:0;font-size:15px;color:var(--ink-2)">${one.desc}</p><div class="steps">${one.how.map((h,i)=>`<span>${i+1}. ${h}</span>`).join('')}</div></div>
    <div class="card pad b-5"><span class="eyebrow">Strategy statistics</span><div class="mstats num">${[['ROI since inception',pct(one.pct)],['Win rate',one.win+'%'],['Avg. days per trade',one.avg],['S&P 500, same period',one.spx!=null?pct(one.spx):'—'],['Beta',one.beta],['Time to enter','1–2 days']].map(([a,b])=>`<div><span>${a}</span><b>${b}</b></div>`).join('')}</div></div>
  </div>`:`<div class="card pad sec" style="margin-top:16px"><div class="sec-h"><h2 class="h2">Side by side</h2><span class="muted" style="font-size:12.5px">Best in each row is highlighted</span></div><div class="tbl"><table class="cmp num"><thead><tr><th></th>${SK.map(k=>`<th style="color:${S[k].c}">${S[k].name}</th>`).join('')}</tr></thead><tbody>
    <tr><td>ROI since inception</td><td class="best"><b>${pct(S.val.pct)}</b></td><td><b>${pct(S.dp.pct)}</b></td><td><b>${pct(S.earn.pct)}</b></td></tr>
    <tr><td>Win rate</td><td class="best"><b>78.6%</b></td><td><b>67.73%</b></td><td><b>71.87%</b></td></tr>
    <tr><td>Beta (lower = calmer)</td><td><b>0.43</b></td><td><b>0.98</b></td><td class="best"><b>0.30</b></td></tr>
    <tr><td>Avg. days per trade</td><td><b>43</b></td><td><b>—</b></td><td class="best"><b>32</b></td></tr>
    <tr><td>Trades on record</td><td><b>209</b></td><td><b>—</b></td><td class="best"><b>1,308</b></td></tr>
    <tr><td>Best for</td><td>Patient value investors</td><td>Following big money</td><td>Short, event-driven trades</td></tr>
  </tbody></table></div></div>
  <div class="explain sec" style="margin-top:16px">${SK.map(k=>`<button class="card" style="--c:${S[k].c};text-align:left" data-ssel="${k}"><h4>${S[k].name} ©</h4><p>${S[k].short}</p><div class="steps">${S[k].how.slice(0,2).map(h=>`<span>${h}</span>`).join('')}</div></button>`).join('')}</div>`}

  <div class="sec">
    <div class="sec-h"><div class="l"><h2 class="h2">Trades</h2><span class="live">Delayed prices</span></div></div>
    <div class="tbl-bar"><div class="chips" id="tChips"></div><label class="search" for="tQ">${ic('search')}<input id="tQ" placeholder="Search trades" value="${esc(tQ)}"></label></div>
    <div class="tt t-head"><span>Company</span><span>Strategy</span><span class="c3">Entry</span><span class="c4">Held</span><span class="c5">Exit / market</span><span>ROI</span><span></span></div>
    <div class="t-list" id="tList"></div>
    <div class="pager" id="tPager"></div>
  </div>`;
}
function stratChart(){
  const n={'6M':60,'1Y':120,'All':240}[sRange];const ks=sSel==='all'?SK:[sSel];
  const ser=[...ks.filter(k=>sLines[k]).map(k=>({data:S[k].curve.slice(-n),c:S[k].c,label:S[k].name,area:sSel!=='all'})),...(sLines.spx?[{data:SPX.slice(-n),c:'var(--s-spx)',label:'S&P 500',dash:1}]:[])];
  if(!ser.length)return `<div class="nodata" style="margin:20px 0"><b>All lines are hidden</b><p>Turn one back on above.</p></div>`;
  const xl={'6M':['Apr','May','Jun','Jul','Aug','Sep','Oct'],'1Y':['Oct 25','Jan 26','Apr 26','Jul 26','Oct 26'],'All':['Sep 2024','Mar 2025','Sep 2025','Mar 2026','Oct 2026']}[sRange];
  return lines(ser,{w:960,h:340,endLabels:true,base:sRange==='All'?100:null,xl,label:'Strategy index chart'});
}
function renderTrades(){
  const pool=TR.filter(t=>sSel==='all'||t.s===sSel);
  const c={all:pool.length,open:pool.filter(t=>t.st==='open').length,win:pool.filter(t=>t.st==='win').length,loss:pool.filter(t=>t.st==='loss').length};
  $('#tChips').innerHTML=[['all','All'],['open','Open'],['win','Profitable'],['loss','Loss']].map(([k,l])=>`<button class="chip" aria-pressed="${tFilt===k}" data-tf="${k}">${l}<span class="n num">${c[k]}</span></button>`).join('');
  const list=pool.filter(t=>(tFilt==='all'||t.st===tFilt)&&(!tQ||(t.tk+t.co).toLowerCase().includes(tQ)));
  $('#tList').innerHTML=list.length?list.map(t=>`<a class="tt t-row ${t.st}" href="#trade-${t.tk}">
    <div class="co"><b>${t.co}</b> <span class="tk">${t.tk}</span><div class="row" style="gap:6px;margin-top:6px">${stTag(t.st)}${sideTag(t.side)}</div></div>
    <div>${stratChip(t.s)}</div>
    <div class="cell c3">${t.ep!=null?`<b class="num">${money(t.ep)}</b><small class="num">${t.ed}</small>`:'<b>—</b><small>Not shown</small>'}</div>
    <div class="cell c4"><b style="font-weight:600;color:var(--ink-2)">${t.st==='open'?'Holding':t.days+'d'}</b></div>
    <div class="cell c5">${t.st==='open'?`<b class="num">${money(t.cur)}</b><small>Market</small>`:`<b class="num">${money(t.xp)}</b><small class="num">${t.xd}</small>`}</div>
    <div class="roi num ${cls(t.roi)}">${t.roi===0?'0.00%':pct(t.roi)}</div>
    <div class="muted">${ic('chev',16)}</div></a>`).join(''):`<div class="nodata"><span class="ico">${ic('chart',22)}</span><b>No trades match</b><p>Try another filter or clear the search.</p><button class="btn btn--ghost btn--sm" data-tf="all">Show all</button></div>`;
  const total=sSel==='all'?'1,500+':(S[sSel].counts?S[sSel].counts.all.toLocaleString():'—');
  $('#tPager').innerHTML=`<span class="num">Showing ${list.length} sample trades of ${total}</span><div class="pg"><button>Prev</button><button aria-current="true">1</button><button>2</button><button>3</button><button>…</button><button>Next</button></div>`;
}

/* ================= TRADE DETAIL ================= */
function vTrade(sym){
  const t=TRM[sym];if(!t)return v404();
  const s=S[t.s];const exitP=t.st==='open'?t.cur:t.xp;const entryP=t.ep??(exitP/(1+t.roi/100));
  const n=90;const data=walk(sym.length*13+7,n,entryP*(1+(rng(sym.length)()-.5)*.06),exitP,.03);
  const entryI=18;data[entryI]=entryP;
  const marks=[{i:entryI,c:'var(--blue-ink)',t:'ENTRY'},...(t.st!=='open'?[{i:n-1,c:t.st==='win'?'var(--gain)':'var(--loss)',t:t.st==='win'?'EXIT':'STOP'}]:[])];
  const al=AL.find(a=>a.tk===sym);
  const pl=t.net??(t.sh&&t.ep?(t.side==='SHORT'?-1:1)*(exitP-t.ep)*t.sh:null);
  return `
  <a class="link" href="#strategies" style="display:inline-flex;gap:6px;align-items:center">${ic('back',16)}All trades</a>
  <div class="td-head">
    <div><div class="td-id"><span class="mono lg">${sym}</span><div><h1 class="h1" style="font-size:clamp(28px,3.2vw,40px)">${t.co}</h1><div class="row" style="margin-top:8px">${stratChip(t.s)}${sideTag(t.side)}${stTag(t.st)}</div></div></div></div>
    <div style="text-align:right"><span class="eyebrow">${t.st==='open'?'Unrealised return':'Net return after commissions'}</span><div class="td-big num ${cls(t.roi)}">${t.roi===0?'0.00%':pct(t.roi)}</div></div>
  </div>
  <div class="bento">
    <div class="card pad b-8">
      <div class="sec-h" style="margin-bottom:4px"><h2 class="h2">Price since the signal</h2><span class="muted" style="font-size:12px">Curve illustrative · markers at real prices</span></div>
      <div class="chart-wrap" style="color:${t.roi>=0?'var(--gain)':'var(--loss)'}">${priceChart(data,{w:900,h:300,marks,label:sym+' price since signal'})}</div>
      <div class="timeline">
        <div class="tl done"><i></i><b>Signal fired</b><span>${t.ed||'Before exit'}</span></div>
        <div class="tl done"><i></i><b>Entered ${t.side.toLowerCase()}</b><span class="num">${t.ep?money(t.ep):'Price not shown'}</span></div>
        <div class="tl ${t.st==='open'?'now':'done'}"><i></i><b>${t.st==='open'?'Holding now':'Held '+t.days+(t.days===1?' day':' days')}</b><span class="num">${t.st==='open'?'Market '+money(t.cur):''}</span></div>
        <div class="tl ${t.st==='open'?'':'done'}"><i></i><b>${t.st==='open'?'Exit pending':t.st==='win'?'Exited':'Stopped out'}</b><span class="num">${t.st==='open'?'Exit alert will arrive':money(t.xp)+' · '+t.xd}</span></div>
      </div>
    </div>
    <div class="b-4 stack">
      <div class="card pad">
        <span class="eyebrow">Did you take this trade?</span>
        ${actBtns(al||AL_EXTRA['t-'+sym]||{id:'t-'+sym,k:'entry',me:null})}
        <p class="muted" style="font-size:12.5px;margin:12px 0 0">Answering keeps your streak going and builds your follow-through score. Only you can see it.</p>
      </div>
      <div class="card pad"><span class="eyebrow">Signal</span><div style="font-size:20px;font-weight:800;letter-spacing:-.02em">${t.sig}</div><p class="muted" style="font-size:13px;margin:6px 0 0">${s.short}</p>
        <div class="row" style="margin-top:14px"><button class="btn btn--grad btn--sm" data-ask="Why did ${s.name} ${t.st==='open'?'enter':'exit'} ${sym}? Give me the fundamentals and risk.">${ic('spark',15)}Ask why</button><button class="btn btn--ghost btn--sm" data-share="${sym}">${ic('share',15)}Share</button></div></div>
    </div>
    <div class="card pad b-12"><div class="kv num">
      ${[['Shares',t.sh??'—'],['Invested',t.inv?money(t.inv):'—'],['Entry',t.ep?money(t.ep):'—'],[t.st==='open'?'Market price':'Exit price',money(exitP)],['Gross P/L',t.gross?money(t.gross):'—'],['Commission',t.comm?money(t.comm):'—'],[t.st==='open'?'Unrealised P/L':'Net P/L',pl!=null?`<span class="${cls(pl)}">${sgn(pl)}${money(Math.abs(pl))}</span>`:'—'],['Days held',t.st==='open'?'Open':t.days]].map(([a,b])=>`<div><span>${a}</span><b>${b}</b></div>`).join('')}
    </div></div>
    ${t.alert?`<div class="quote b-6"><strong>Entry alert${t.ed?' · '+t.ed:''}</strong>${t.alert}</div>`:''}
    ${t.exitAlert?`<div class="quote b-6"><strong>Exit alert · ${t.xd}</strong>${t.exitAlert}</div>`:''}
    ${t.tk==='ORCL'?`<div class="quote b-12" style="border:1px dashed var(--open)"><strong style="color:var(--open)">Data note</strong>The live app still labels this trade "Open Position" though it has an exit price and exit alert. Shown here as closed.</div>`:''}
    ${t.tk==='ZS'?`<div class="quote b-12" style="border:1px dashed var(--open)"><strong style="color:var(--open)">Data note</strong>The live app shows $193.05 (ROI 4.45%) on Performance but $212.25 on the ticker page. This mockup uses $212.25 everywhere.</div>`:''}
  </div>
  ${NEWS.some(n=>n.tk.includes(sym))?`<div class="sec"><div class="sec-h"><div class="l"><h2 class="h2">Related headlines</h2><span class="sample">Sample</span></div></div><div class="card pad">${NEWS.filter(n=>n.tk.includes(sym)).map(newsItem).join('')}</div></div>`:''}
  <div class="sec"><a class="btn btn--ghost" href="#ticker-${sym}">Open ${sym} ticker page ${ic('chev',16)}</a></div>`;
}

/* ================= ALERTS ================= */
let aS='all',aType='all',aQ='',aNeed=false;
function vAlerts(){
  return `<div class="page-head"><div><span class="eyebrow">AI Trading Alerts</span><h1 class="h1">Every entry and exit.<br><span class="g">Did you take it?</span></h1><p class="lead">Answer each alert in one tap. It powers your streak, your follow-through score and your rewards.</p></div><button class="btn btn--ghost btn--sm" id="markRead">Mark all as read</button></div>
  <div class="al-layout"><div>
    <div class="row" style="margin-bottom:6px;gap:10px">
      <label class="search" for="aQ" style="flex:0 1 260px">${ic('search')}<input id="aQ" placeholder="Filter by ticker" value="${esc(aQ)}"></label>
      <div class="chips" id="aChips"></div>
    </div>
    <div class="chips" id="aChips2" style="margin-top:8px"></div>
    <div id="feed"></div>
  </div>
  <aside class="side-panel">
    <div class="card pad"><span class="eyebrow">Answered this week</span><div style="font-size:40px;font-weight:800;letter-spacing:-.04em" class="num"><span data-answered>${answered()}</span><span class="muted" style="font-size:20px">/${AL.length}</span></div><div class="bar" style="margin:10px 0 12px"><i data-answered-bar style="width:${answered()/AL.length*100}%"></i></div>
      <div class="mstats" style="grid-template-columns:1fr">${[['Took',AL.filter(a=>a.me==='took').length,'gain'],['Watching',AL.filter(a=>a.me==='watch').length,'open-c'],['Skipped',AL.filter(a=>a.me==='skip').length,'']].map(([l,v,c])=>`<div><span>${l}</span><b class="num ${c}">${v}</b></div>`).join('')}</div></div>
    <div class="card pad"><span class="eyebrow">Push alerts</span>${SK.map(k=>`<div class="row" style="justify-content:space-between;padding:8px 0">${stratChip(k)}<button class="switch" role="switch" aria-checked="true" aria-label="${S[k].name} push alerts" data-switch></button></div>`).join('')}<a class="link" href="#account-notifications" style="display:block;margin-top:8px">More notification settings</a></div>
  </aside></div>`;
}
function renderFeed(){
  $('#aChips').innerHTML=[['all','All'],...SK.map(k=>[k,S[k].name])].map(([k,l])=>`<button class="chip" aria-pressed="${aS===k}" data-as="${k}">${k!=='all'?`<span class="sw" style="background:${S[k].c}"></span>`:''}${l}</button>`).join('');
  const need=AL.filter(a=>!a.me).length;
  $('#aChips2').innerHTML=[['all','Everything'],['entry','Entries'],['exit','Exits & stops']].map(([k,l])=>`<button class="chip" aria-pressed="${aType===k&&!aNeed}" data-at="${k}">${l}</button>`).join('')+`<button class="chip" aria-pressed="${aNeed}" data-need>Needs your answer<span class="n num">${need}</span></button>`;
  const list=AL.filter(a=>(aS==='all'||a.s===aS)&&(aType==='all'||(aType==='entry'?a.k==='entry':a.k!=='entry'))&&(!aQ||a.tk.toLowerCase().includes(aQ))&&(!aNeed||!a.me));
  if(!list.length){$('#feed').innerHTML=`<div class="nodata" style="margin-top:20px"><span class="ico">${ic(aNeed?'check':'bell',22)}</span><b>${aNeed?'All caught up':'No alerts match'}</b><p>${aNeed?'You answered every alert. Your streak is safe for today.':aS==='val'?'No Valuations AI© alerts in the last 7 days. New entries arrive a few times a month.':'Try another filter.'}</p></div>`;return}
  let h='',g='';list.forEach(a=>{if(a.g!==g){g=a.g;h+=`<div class="grp">${g}</div>`}h+=alertRow(a)});
  $('#feed').innerHTML=`<div class="stack" style="gap:10px">${h}</div>`;
}

/* ================= NEWS ================= */
let nCat='all';
function vNews(){
  const lead=NEWS.find(n=>n.lead);
  return `<div class="page-head"><div><span class="eyebrow">News</span><h1 class="h1">Markets and politics,<br><span class="g">filtered for your picks.</span></h1><p class="lead">Financial and policy headlines tagged to the tickers you follow and the trades TruthSayer holds.</p></div><span class="sample">Sample headlines · live feed connects here</span></div>
  <div class="news-layout"><div>
    <div class="card lead-story"><div class="row"><span class="impact ${lead.imp}">${{up:'Tailwind',down:'Headwind',watch:'Watch'}[lead.imp]}</span>${lead.tk.map(t=>`<a class="tkchip" href="#ticker-${t}">${t}</a>`).join('')}<span class="muted" style="font-size:12px">${lead.src} · ${lead.t}</span></div><h2>${lead.h}</h2><p>${lead.b}</p><div class="row"><button class="btn btn--grad btn--sm" data-ask="What does this mean for ${lead.tk[0]}: ${esc(lead.h)}">${ic('spark',15)}What does this mean for me?</button><a class="btn btn--ghost btn--sm" href="#trade-${lead.tk[0]}">Open the ${lead.tk[0]} trade</a></div></div>
    <div class="row sec" style="margin-top:20px"><div class="seg">${[['all','All'],['picks','My picks'],['markets','Markets'],['policy','Policy & politics']].map(([k,l])=>`<button aria-pressed="${nCat===k}" data-ncat="${k}">${l}</button>`).join('')}</div></div>
    <div class="card pad" style="margin-top:14px" id="nList"></div>
  </div>
  <aside class="side-panel">
    <div class="card pad"><span class="eyebrow">This week</span><div class="cal">
      <div><b>Oct 6</b><span>NEOG and STZ report after hours · Earnings AI© is short NEOG, long STZ</span></div>
      <div><b>Oct 6</b><span>APOG reports pre-market · Earnings AI© short from $36.01</span></div>
      <div><b>Sample</b><span>Fed meeting minutes · watch for rate-path language</span></div>
      <div><b>Sample</b><span>CPI release · inflation print for September</span></div></div></div>
    <div class="card pad"><span class="eyebrow">Daily digest</span><p style="margin:0 0 12px;font-size:13.5px;color:var(--ink-2)">One push at 6 PM with the headlines that touch your picks and open trades.</p><div class="row" style="justify-content:space-between"><b style="font-size:14px">Send me the digest</b><button class="switch" role="switch" aria-checked="true" data-switch aria-label="Daily digest"></button></div></div>
  </aside></div>`;
}
function renderNews(){const list=NEWS.filter(n=>!n.lead&&(nCat==='all'||(nCat==='picks'?n.tk.some(t=>PICKS.includes(t)||TRM[t]):n.cat===nCat)));
  $('#nList').innerHTML=list.map(n=>`<div class="news-i"><div class="meta"><span>${n.src}</span><span>·</span><span>${n.t}</span>${n.tk.map(t=>`<a class="tkchip" href="#ticker-${t}">${t}</a>`).join('')}</div><h4>${n.h}</h4><span class="impact ${n.imp} imp">${{up:'Tailwind',down:'Headwind',watch:'Watch'}[n.imp]}</span><p>${n.b}</p></div>`).join('')||`<div class="nodata"><b>No headlines here yet</b></div>`}

/* ================= PICKS ================= */
const pAlerts={ZS:1};
function vPicks(){
  return `<div class="page-head"><div><span class="eyebrow">My picks</span><h1 class="h1">Your watchlist,<br><span class="g">with signals on top.</span></h1><p class="lead">See which TruthSayer strategies hold your picks, what the news says, and set price alerts.</p></div><button class="btn btn--grad" data-addpick>${ic('plus',16)}Add a pick</button></div>
  <div class="pick-grid">${PICKS.map(s=>{const i=tkInfo(s);const t=TRM[s];const nc=NEWS.filter(n=>n.tk.includes(s)).length;
    return `<div class="card pk-card"><div class="t"><a href="#ticker-${s}"><b>${s}</b><span>${i.co}</span></a><button class="icon-btn" style="width:34px;height:34px" data-unpick="${s}" aria-label="Remove ${s}">${ic('close',15)}</button></div>
     <div class="row" style="justify-content:space-between;align-items:flex-end"><span class="px num">${money(i.price)}</span>${i.chgp!=null?`<b class="num ${cls(i.chgp)}">${pct(i.chgp)}</b>`:'<span class="muted" style="font-size:12px">Day change n/a</span>'}</div>
     <a class="sp" href="#ticker-${s}">${spark(walk(i.seed,50,i.price*.9,i.price,.03),56,s)}</a>
     <div class="f">${t?`${stratChip(t.s)}<span class="tag ${cls(t.roi)==='gain'?'win':'loss'}">${pct(t.roi)}</span>`:'<span class="tag neutral">No active signal</span>'}${nc?`<span class="tag neutral">${nc} headline${nc>1?'s':''}</span>`:''}</div>
     <div class="row" style="justify-content:space-between;border-top:1px solid var(--line);padding-top:12px"><span style="font-size:13px;font-weight:700">Price alert</span><button class="switch" role="switch" aria-checked="${!!pAlerts[s]}" data-palert="${s}" aria-label="Price alert for ${s}"></button></div></div>`}).join('')}
    <button class="add-card" data-addpick><span class="plus">${ic('plus',22)}</span>Add a pick<span class="muted" style="font-size:12.5px;font-weight:600">Search 2,200+ US stocks</span></button></div>`;
}

/* ================= TICKER ================= */
let kTab='overview',kRange='1D',kFin='income';
function vTicker(sym){
  const i=tkInfo(sym);if(!i)return v404();const t=TRM[sym];
  const rs=['1D','5D','1M','6M','YTD','1Y','5Y'];const k=rs.indexOf(kRange);
  const bp=i.price??100;const data=walk(i.seed+k*11,120,bp*(kRange==='1D'?.97:.7+k*.04),bp,kRange==='1D'?.006:.025);
  const inPicks=PICKS.includes(sym);
  return `<a class="link" href="#picks" style="display:inline-flex;gap:6px;align-items:center">${ic('back',16)}Back</a>
  <div class="tk-hero"><div><div class="row" style="gap:14px"><span class="mono lg">${sym}</span><div><h1>${i.co}</h1><span class="muted" style="font-size:13px">${sym} · ${i.ex}</span></div></div>
    <div class="tk-px"><b class="num">${i.price!=null?money(i.price):'—'}</b>${i.chg!=null?`<span class="num ${cls(i.chg)}">${sgn(i.chg)}${money(Math.abs(i.chg))} (${pct(i.chgp)})</span>`:''}<span class="muted" style="font-size:12.5px;font-weight:600">Oct 5 close · delayed</span></div></div>
    <div class="row"><button class="btn btn--ghost btn--sm" data-togglepick="${sym}">${ic('star',15)}${inPicks?'In my picks':'Add to picks'}</button><button class="btn btn--ghost btn--sm" data-newalert="${sym}">${ic('bell',15)}Price alert</button><button class="btn btn--grad btn--sm" data-ask="Give me the bull and bear case for ${sym}.">${ic('spark',15)}Ask AI</button></div></div>
  <div class="sig-strip">${SK.map(k=>{const on=t&&t.s===k;return `<div class="sig${on?' on':''}" style="--c:${S[k].c}"><span class="nm">${S[k].name} ©</span>${on?`<b>${t.side} · <span class="${cls(t.roi)} num">${pct(t.roi)}</span></b><span>${t.st==='open'?'Open since '+t.ed:'Closed '+t.xd}</span><a class="link" href="#trade-${sym}">View trade →</a>`:`<b class="muted">No signal</b><span>We'll alert you if one fires</span>`}</div>`}).join('')}</div>
  <div class="card pad"><div class="row" style="justify-content:space-between;margin-bottom:6px"><div class="ranges">${rs.map(r=>`<button aria-pressed="${kRange===r}" data-krange="${r}">${r}</button>`).join('')}</div><span class="muted" style="font-size:12px">Curve illustrative</span></div>
    <div class="chart-wrap" style="color:${(i.chg??1)>=0?'var(--gain)':'var(--loss)'}">${priceChart(data,{w:960,h:300,label:sym+' price',xl:kRange==='1D'?['8 AM','10 AM','12 PM','2 PM','4 PM','6 PM','8 PM']:['','','','','']})}</div></div>
  <div class="tabs" role="tablist">${[['overview','Overview'],['fin','Financials'],['hfi','Hedge Fund Insights'],['signals','Signal history'],['news','News']].map(([k,l])=>`<button role="tab" aria-selected="${kTab===k}" data-ktab="${k}">${l}</button>`).join('')}</div>
  <div>${kPanel(sym,i,t)}</div>`;
}
function kPanel(sym,i,t){
  if(kTab==='overview')return `<div class="two"><div class="card pad"><h2 class="h2" style="margin-bottom:10px">About ${i.co}</h2><p style="margin:0;color:var(--ink-2)">${i.desc}</p>
    <div class="mstats" style="margin-top:16px">${[['Sector',i.sector],['Industry',i.industry],['Employees',i.emp],['HQ',i.hq],['Phone',i.phone||'—'],['Website',i.web?`<a class="link" href="https://${i.web}" target="_blank" rel="noopener">${i.web}</a>`:'—']].map(([a,b])=>`<div><span>${a}</span><b>${b}</b></div>`).join('')}</div></div>
    ${i.ms.length?`<div class="card pad"><h2 class="h2" style="margin-bottom:10px">Market statistics</h2><div class="mstats num" style="grid-template-columns:1fr">${i.ms.map(([a,b])=>`<div><span>${a}</span><b>${b}</b></div>`).join('')}</div></div>`:`<div class="nodata"><span class="ico">${ic('chart',22)}</span><b>Market stats unavailable</b><p>They usually load within a minute of the open.</p></div>`}</div>`;
  if(kTab==='fin'){if(!i.fin)return `<div class="nodata"><span class="ico">${ic('book',22)}</span><b>No statements for ${sym} yet</b><p>The data provider hasn't published financial statements for this company.</p></div>`;
    const sets={income:[['Revenue Q/Q growth','4.96%','5.64%','6.79%','9.25%'],['EBITDA growth','100.48%','81.85%','196.00%','51.53%'],['Net income growth','28.12%','−52.32%','71.48%','48.16%'],['EPS growth','30.77%','−44.44%','72.14%','49.46%']],cash:[['Operating cash flow growth','24.70%','16.17%','68.67%','43.62%'],['Free cash flow (firm) growth','96.76%','−9,039.58%','−195.38%','−12.69%'],['EV / operating cash flow','43.80','20.07','33.14','48.52']],balance:[['Book value per share','11.56','16.07','8.43','4.97'],['Tangible book value per share','8.57','7.21','5.25','4.18'],['Invested capital growth','−1,177.03%','1,233.10%','102.79%','−27.25%']]};
    return `<div class="card pad"><div class="sec-h"><div class="seg sm">${[['income','Income statement'],['cash','Cash flow'],['balance','Balance sheet']].map(([k,l])=>`<button aria-pressed="${kFin===k}" data-kfin="${k}">${l}</button>`).join('')}</div><span class="muted" style="font-size:12px">USD, thousands where noted</span></div>
    <div class="tbl"><table class="fin num"><thead><tr><th></th><th>TTM</th><th>FY Jul 2026</th><th>FY Jul 2024</th><th>FY Jul 2023</th></tr></thead><tbody>${sets[kFin].map(r=>`<tr>${r.map((c,j)=>`<td class="${j&&c.startsWith('−')?'loss':''}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`}
  if(kTab==='hfi'){const qs=INS[sym];if(!qs&&!i.fin)return `<div class="nodata"><span class="ico">${ic('mic',22)}</span><b>No expert interviews on ${sym} yet</b><p>Ask the AI instead. It answers from filings and price data.</p><button class="btn btn--grad btn--sm" data-ask="What should I know about ${sym}?">${ic('spark',15)}Ask about ${sym}</button></div>`;
    if(!qs)return `<div class="card pad"><h2 class="h2" style="margin-bottom:10px">Valuation ratios</h2><div class="tbl"><table class="fin num"><thead><tr><th></th><th>TTM</th><th>FY Jul 2026</th><th>FY Jul 2024</th><th>FY Jul 2023</th></tr></thead><tbody>${[['Price to book','24.71','9.41','21.28','32.27'],['Price to revenue','16.63','7.29','12.51','14.47'],['EV to revenue','15.93','6.76','11.92','13.87'],['EV to EBITDA','300.50','87.97','365.53','—'],['Market cap (k)','44,460,456','24,450,480','27,108,589','23,398,026']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="muted" style="font-size:12px;margin:10px 0 0">Data note: this market cap differs from the $34.61B in Market statistics. The live app shows both.</p></div>`;
    return `<div class="q-grid">${qs.map(q=>qCard(sym,q)).join('')}</div>`}
  if(kTab==='signals'){return t?`<div class="t-list"><a class="tt t-row ${t.st}" href="#trade-${sym}" style="grid-template-columns:minmax(0,2fr) minmax(0,1fr) minmax(0,1fr) 20px"><div class="co"><b>${S[t.s].name}© ${t.side}</b><div class="row" style="margin-top:6px">${stTag(t.st)}</div></div><div class="cell">${t.ep?`<b class="num">${money(t.ep)}</b><small>${t.ed}</small>`:'<b>—</b>'}</div><div class="roi num ${cls(t.roi)}">${pct(t.roi)}</div><div class="muted">${ic('chev',16)}</div></a></div>`:`<div class="nodata"><span class="ico">${ic('bolt',22)}</span><b>No signals on ${sym} so far</b><p>None of the three strategies has traded ${sym}. Turn on a price alert to keep an eye on it.</p><button class="btn btn--ghost btn--sm" data-newalert="${sym}">Set a price alert</button></div>`}
  if(kTab==='news'){const ns=NEWS.filter(n=>n.tk.includes(sym));return ns.length?`<div class="card pad">${ns.map(newsItem).join('')}</div>`:`<div class="nodata"><span class="ico">${ic('news',22)}</span><b>No recent headlines for ${sym}</b><p>We'll add them here as they come in.</p></div>`}
}

/* ================= RESEARCH ================= */
let rTk='all';
function vResearch(){
  const total=Object.values(INS).reduce((a,b)=>a+b.length,0);
  return `<div class="page-head"><div><span class="eyebrow">Hedge Fund Insights AI</span><h1 class="h1">What the experts<br><span class="gv">told the hedge funds.</span></h1></div></div>
  <div class="card r-hero"><div><b class="num">3M+</b><p style="margin:8px 0 0;color:var(--ink-2);max-width:56ch">minutes of one-on-one interviews between hedge funds and subject-matter experts. Pick a question and the AI answers from the transcripts.</p></div><div class="row"><span class="tag neutral num">${total} questions shown</span><span class="tag long">Professional plan</span></div></div>
  <div class="row sec" style="margin-top:22px"><div class="chips">${['all',...Object.keys(INS)].map(k=>`<button class="chip" aria-pressed="${rTk===k}" data-rtk="${k}">${k==='all'?'All companies':k}</button>`).join('')}</div></div>
  <div class="q-grid" style="margin-top:16px">${Object.entries(INS).filter(([k])=>rTk==='all'||rTk===k).flatMap(([k,qs])=>qs.map(q=>qCard(k,q))).join('')}</div>`;
}

/* ================= CHAT ================= */
const CONVOS=[{id:'c1',t:'Tesla battery supply chain',d:'Today'},{id:'c2',t:'Why did ZS fire?',d:'Yesterday'},{id:'c3',t:'What is a 3× ATR stop?',d:'Oct 2'},{id:'c4',t:'NFLX bear case',d:'Sep 28'}];
const CHAT=[{me:1,t:'How has battery demand affected Tesla’s EV supply chain?'},{t:'Battery demand has put real strain on the EV supply chain. The main pressure points:<ul><li>Unstable shipping and longer lead times for cells and raw materials</li><li>Parts delays pushing production schedules back</li><li>Longer approval periods for new supplier capacity</li></ul>',src:['TSLA','Hedge Fund Insights'],embed:'TSLA'}];
function msgHtml(m){if(m.typing)return `<div class="msg ai"><span class="av">${LOGO(16)}</span><div class="bd"><span class="typing"><i></i><i></i><i></i></span></div></div>`;
  if(m.me)return `<div class="msg me">${esc(m.t)}</div>`;
  return `<div class="msg ai"><span class="av">${LOGO(16)}</span><div class="bd">${m.t}${m.embed?`<div class="embed"><div class="t"><span>${m.embed} · 1M</span><span class="muted">Sample</span></div><div class="sp">${spark(walk(42,40,100,92,.03),60,m.embed)}</div></div>`:''}${m.src?`<div class="src">${m.src.map(s=>`<span class="tag neutral">${s}</span>`).join('')}</div>`:''}</div></div>`}
function vChat(){
  return `<div class="chat-page" style="margin-top:6px">
   <div class="card convos"><button class="btn btn--grad btn--sm" style="margin-bottom:8px;width:100%" data-newchat>${ic('plus',15)}New chat</button>${CONVOS.map((c,i)=>`<button aria-pressed="${i===0}"><b>${c.t}</b><span>${c.d}</span></button>`).join('')}</div>
   <div class="card thread"><div class="thread-h"><div><b style="font-size:16px">Tesla battery supply chain</b><div class="muted num" style="font-size:12px" data-left-txt>${ME.left.toLocaleString()} interactions left</div></div><div class="row"><div class="bar" style="width:120px"><i data-left-bar style="width:${ME.left/10}%"></i></div><button class="btn btn--ghost btn--xs" data-upgrade>Need more?</button></div></div>
    <div class="msgs" id="pMsgs"></div>
    <div class="sugg" id="pSugg"></div>
    <div class="composer"><form data-chat-form="p"><input id="pIn" placeholder="Ask about a ticker, trade or headline" autocomplete="off"><button class="send" aria-label="Send">${ic('send')}</button></form><div class="disc">AI answers can be wrong. Not investment advice.</div></div></div></div>`;
}
function renderChats(){const h=CHAT.map(msgHtml).join('');['#pMsgs','#dMsgs'].forEach(s=>{const el=$(s);if(el){el.innerHTML=h;el.scrollTop=1e6}});
  const sg=['Why did ZS fire?','Explain a 3× ATR stop','What changed for MA?','Best open trade right now'].map(s=>`<button data-ask="${s}">${s}</button>`).join('');['#pSugg','#dSugg'].forEach(s=>{const el=$(s);if(el)el.innerHTML=sg});
  $$('[data-left-txt]').forEach(e=>e.textContent=ME.left.toLocaleString()+' interactions left');$$('[data-left-bar]').forEach(e=>e.style.width=ME.left/10+'%')}
function ask(q){if(!$('#v-chat').classList.contains('on'))openDrawer();CHAT.push({me:1,t:q},{typing:1});renderChats();
  setTimeout(()=>{CHAT.pop();ME.left--;CHAT.push({t:'This is a mockup, so the answer is a placeholder. In the live app it streams here with sources, linked tickers and an inline chart when it helps.',src:['Mockup']});renderChats()},900)}

/* ================= REWARDS ================= */
function vRewards(){
  const nx=nextLvl();const prev=LEVELS[ME.level-1][1];const p=Math.round((ME.xp-prev)/(nx[1]-prev)*100);
  const r=rng(5);const cells=Array.from({length:91},(_,i)=>{if(i>=91-ME.streak)return 'l'+(1+Math.floor(r()*3));const v=r();return v<.35?'':v<.6?'l1':v<.85?'l2':'l3'});
  const B=[['bolt','First call','Answered your first alert',1],['flame','On fire','5-day answer streak',1],['flame','Unstoppable','7-day streak · 1 day to go',0],['target','Full coverage','Took a trade from all three strategies',0],['diamond','Diamond hands','Held a taken trade 60+ days',1],['clock','Early bird','Answered within 10 minutes of an alert',1],['layers','Contrarian','Took a SHORT signal',1],['book','Researcher','Asked 25 Hedge Fund Insights questions',0],['owl','Night owl','Answered an after-hours alert',1]];
  return `<div class="page-head"><div><span class="eyebrow">Rewards</span><h1 class="h1">Act on the signals.<br><span class="gv">Level up.</span></h1><p class="lead">Points come from answering alerts, not from profits. We reward follow-through and good habits, never risk-taking.</p></div><span class="sample">Sample progress</span></div>
  <div class="card lvl-hero"><div class="lvl-badge num">${ME.level}</div><div><span class="eyebrow">Level ${ME.level}</span><div class="h1" style="font-size:clamp(28px,3vw,40px)">${lvlName()}</div>
    <div class="row" style="margin-top:12px;justify-content:space-between;max-width:520px"><b class="num" data-xp-num>${ME.xp} XP</b><span class="muted num">${nx[1]-ME.xp} XP to ${nx[0]}</span></div><div class="bar" style="max-width:520px;height:10px;margin-top:8px"><i data-xp-bar style="width:${p}%"></i></div>
    <div class="ladder">${LEVELS.map((l,i)=>`<span class="${i+1<ME.level?'done':i+1===ME.level?'cur':''}">${l[0]}</span>`).join('')}</div></div></div>
  <div class="bento sec">
    <div class="card pad b-7"><div class="sec-h"><div class="l"><h2 class="h2">${ME.streak}-day streak</h2><span class="muted" style="font-size:13px">Last 13 weeks</span></div><span class="tag open">Answer 1 alert today to keep it</span></div>
      <div class="heat" style="grid-template-columns:none;grid-template-rows:repeat(7,minmax(0,1fr));grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)">${cells.map((c,i)=>`<i class="${c}${i===90?' today':''}"></i>`).join('')}</div>
      <div class="row muted" style="font-size:11.5px;margin-top:10px;justify-content:flex-end;gap:6px">Less <i style="width:12px;height:12px;border-radius:4px;background:var(--surface-3)"></i><i style="width:12px;height:12px;border-radius:4px;background:color-mix(in srgb,var(--gain) 30%,var(--surface-3))"></i><i style="width:12px;height:12px;border-radius:4px;background:color-mix(in srgb,var(--gain) 60%,var(--surface-3))"></i><i style="width:12px;height:12px;border-radius:4px;background:var(--gain)"></i> More</div></div>
    <div class="card pad b-5"><span class="eyebrow">Your follow-through</span><div class="vs"><div><b class="num gain">+4.2%</b><span>Avg. return on alerts you took</span></div><div><b class="num">+3.1%</b><span>Avg. return on every alert</span></div><div><b class="num">${follow()}%</b><span>Alerts acted on</span></div><div><b class="num">2h 14m</b><span>Median time to answer</span></div></div></div>
    <div class="card pad b-12"><div class="sec-h"><h2 class="h2">Weekly challenges</h2><span class="muted" style="font-size:13px">Resets Monday</span></div><div class="stack" style="gap:10px">
      ${[['target','Answer 10 alerts',Math.min(answered(),10),10,150],['mic','Ask 3 Hedge Fund Insights questions',1,3,60],['news','Read 5 headlines on your picks',4,5,40]].map(([i,t,a,b,x])=>`<div class="challenge"><span class="ico">${ic(i)}</span><div style="flex:1;min-width:0"><b>${t}</b><span class="num">${a} of ${b} · +${x} XP</span><div class="bar"><i style="width:${a/b*100}%"></i></div></div></div>`).join('')}</div></div>
  </div>
  <div class="sec"><div class="sec-h"><h2 class="h2">Badges</h2><span class="muted num" style="font-size:13px">${B.filter(b=>b[3]).length} of ${B.length} earned</span></div><div class="badges">${B.map(([i,t,d,on])=>`<div class="bdg${on?'':' locked'}"><span class="ico">${ic(on?i:'lock')}</span><b>${t}</b><span>${d}</span></div>`).join('')}</div></div>
  <div class="sec card pad"><div class="sec-h"><h2 class="h2">How points work</h2></div><div class="mstats num">${[['Took an alert','+30 XP'],['Watching an alert','+10 XP'],['Skipped (still counts as answered)','+5 XP'],['Daily streak bonus','+20 XP'],['Weekly challenge','up to +150 XP'],['Profit or loss on a trade','0 XP, by design']].map(([a,b])=>`<div><span>${a}</span><b>${b}</b></div>`).join('')}</div></div>`;
}

/* ================= SOCIAL ================= */
function vSocial(){return `<div class="page-head"><div><span class="eyebrow">Social · coming soon</span><h1 class="h1">Talk trades with<br><span class="g">people who act on them.</span></h1><p class="lead">Share how you played a signal, follow investors with high follow-through, and see what the community is watching.</p></div></div>
  <div class="bento"><div class="card pad b-7"><div class="stack">${[['TraderJane7899','AAPL','I bought a ton at $193 a share and I still smile. I know it’s coming back.','1,221'],['EskimoFlake2023','NVDA','Thank you for this! I was trying to dig for the data.','1,100']].map(([u,t,p,l])=>`<div style="filter:blur(3px);opacity:.7;padding:14px;border-radius:18px;background:var(--surface-2)"><div class="row"><span class="avatar" style="width:30px;height:30px"></span><b>${u}</b><span class="tkchip">${t}</span></div><p style="margin:10px 0 6px">${p}</p><span class="muted" style="font-size:12px">♥ ${l}</span></div>`).join('')}</div></div>
  <div class="card pad b-5" style="display:flex;flex-direction:column;gap:14px;justify-content:center"><span class="tag open dot">In development</span><div class="h2" style="font-size:24px">Be first in.</div><p class="muted" style="margin:0">Early members get the Founding Member badge and +200 XP.</p><button class="btn btn--grad" data-notify>Notify me when Social opens</button></div></div>`}

/* ================= ACCOUNT ================= */
let acct='plan',bill='yearly',themeMode='system',notif={push:{val:1,dp:1,earn:1},email:{val:0,dp:0,earn:1},digest:1,quiet:1,twofa:0};
try{themeMode=localStorage.getItem('ts-v2-theme')||'system'}catch(e){}
const AM=[['plan','card','Plan & billing'],['profile','user','Profile'],['notifications','bell','Notifications'],['alerts','target','Price alerts'],['security','lock','Security'],['display','display','Display'],['help','help','Help center'],['info','info','Legal & about']];
function vAccount(sub){if(sub&&AM.some(m=>m[0]===sub))acct=sub;
  return `<div class="page-head"><div class="row" style="gap:16px"><span class="avatar" style="width:64px;height:64px;font-size:24px;border-radius:22px">H</span><div><span class="eyebrow" style="margin:0">Account</span><h1 class="h1" style="font-size:clamp(28px,3vw,40px)">hassan</h1><span class="muted" style="font-size:13px">Level ${ME.level} ${lvlName()} · Professional plan</span></div></div><a class="btn btn--ghost btn--sm" href="#welcome">Replay onboarding</a></div>
  <div class="acct"><div class="card acct-menu">${AM.map(([k,i,l])=>`<button aria-pressed="${k===acct}" data-acct="${k}">${ic(i)}${l}</button>`).join('')}<hr><button class="out" data-logout>${ic('logout')}Log out</button></div><div>${aPanel()}</div></div>`}
function aPanel(){
  const sw=(on,attr,label)=>`<button class="switch" role="switch" aria-checked="${!!on}" ${attr} aria-label="${label}"></button>`;
  switch(acct){
  case 'plan':return `<div class="stack" style="gap:18px"><div class="card pad row" style="justify-content:space-between"><div><span class="eyebrow" style="margin:0">Current plan</span><b style="font-size:18px">Professional · Yearly</b><div class="muted num" style="font-size:13px">${ME.left.toLocaleString()} of 1,000 AI interactions left this month</div></div><div class="row"><button class="btn btn--ghost btn--sm">Manage billing</button><button class="btn btn--ghost btn--sm" data-upgrade>Preview limit screen</button></div></div>
    <div class="row" style="justify-content:center"><div class="seg">${[['monthly','Monthly'],['yearly','Yearly · save 40%']].map(([k,l])=>`<button aria-pressed="${bill===k}" data-bill="${k}">${l}</button>`).join('')}</div></div>
    <div class="plans"><div class="card plan"><h3>Basic</h3><div class="price num">${bill==='yearly'?'$118.99<small> /yr</small>':'<small>Monthly price not captured</small>'}</div><p class="muted" style="margin:0;font-size:13.5px">For investors just starting. 7-day free trial.</p><ul>${['250 AI alerts & interactions a month','Valuations AI©, Earnings AI© and Dark Pools AI© alerts','50+ Earnings AI© alerts every quarter','Rewards, streaks and badges'].map(x=>`<li>${ic('check',16)}<span>${x}</span></li>`).join('')}</ul><button class="btn btn--ghost">Switch to Basic</button></div>
    <div class="card plan grad-border"><span class="tagl">Your plan · Best value</span><h3>Professional</h3><div class="price num">${bill==='yearly'?'$359<small> /yr</small>':'<small>Monthly price not captured</small>'}</div><p class="muted" style="margin:0;font-size:13.5px">Full coverage for experienced investors. 7-day free trial.</p><ul>${['1,000 AI alerts & interactions a month','100+ Earnings AI© alerts every quarter','Hedge Fund Insights AI©: 3M+ minutes of expert interviews','Financial Statements AI©','Priority support'].map(x=>`<li>${ic('check',16)}<span>${x}</span></li>`).join('')}</ul><button class="btn btn--grad" disabled>Current plan</button></div></div>
    <p class="muted" style="font-size:12px;margin:0">Data note: the marketing site advertises $5.99/mo, and the plan copy claims 80–90% win rates while the app's own stats show 67.7–78.6%. Worth aligning before launch.</p></div>`;
  case 'profile':return `<div class="card pad stack"><div class="field">Display name<input id="pf-name" value="hassan"></div><div class="field">Email<input id="pf-email" value="hassan@truthsayer.com" disabled></div><div class="field">Investor experience<select id="pf-exp"><option>Just starting</option><option selected>A few years</option><option>Professional</option></select></div><div class="row"><button class="btn btn--grad btn--sm" data-save>Save changes</button></div></div>`;
  case 'notifications':return `<div class="stack" style="gap:14px"><div class="card pad"><h2 class="h2" style="margin-bottom:6px">Strategy alerts</h2><div class="tbl"><table class="cmp"><thead><tr><th></th><th>Push</th><th>Email</th></tr></thead><tbody>${SK.map(k=>`<tr><td>${stratChip(k)}</td><td><div style="display:flex;justify-content:flex-end">${sw(notif.push[k],`data-nf="push.${k}"`,S[k].name+' push')}</div></td><td><div style="display:flex;justify-content:flex-end">${sw(notif.email[k],`data-nf="email.${k}"`,S[k].name+' email')}</div></td></tr>`).join('')}</tbody></table></div></div>
    <div class="card pad rows"><div class="r"><div><b>Daily news digest</b><span>Headlines on your picks and open trades, once a day</span></div>${sw(notif.digest,'data-nf="digest"','Daily digest')}</div><div class="r"><div><b>Quiet hours</b><span>No pushes 11 PM – 7 AM your time (exits still come through)</span></div>${sw(notif.quiet,'data-nf="quiet"','Quiet hours')}</div><div class="r"><div><b>Streak reminder</b><span>A nudge at 8 PM if you haven't answered an alert today</span></div>${sw(1,'data-switch','Streak reminder')}</div></div></div>`;
  case 'alerts':return `<div class="stack" style="gap:14px"><div class="card pad"><h2 class="h2" style="margin-bottom:14px">New price alert</h2><form class="row" style="align-items:flex-end;gap:12px" id="paForm"><div class="field" style="flex:1 1 120px">Ticker<input id="pa-tk" placeholder="ZS" required></div><div class="field" style="flex:1 1 140px">When price is<select id="pa-cond"><option>Above</option><option>Below</option></select></div><div class="field" style="flex:1 1 120px">Price<input id="pa-px" type="number" step="0.01" placeholder="220.00" required></div><button class="btn btn--grad">Create alert</button></form></div>
    <div class="card pad"><h2 class="h2" style="margin-bottom:6px">Active</h2><div class="rows" id="paList">${paList()}</div></div></div>`;
  case 'security':return `<div class="card pad rows"><div class="r"><div><b>Password</b><span>Change the password you sign in with</span></div><button class="btn btn--ghost btn--sm">Change</button></div><div class="r"><div><b>Email</b><span>hassan@truthsayer.com</span></div><button class="btn btn--ghost btn--sm">Change</button></div><div class="r"><div><b>Phone</b><span class="num">•••• ••• ••31 · used for sign-in codes</span></div><button class="btn btn--ghost btn--sm">Change</button></div><div class="r"><div><b>Two-step verification</b><span>Ask for a code on new devices</span></div><button class="switch" role="switch" aria-checked="${!!notif.twofa}" data-nf="twofa" aria-label="Two-step verification"></button></div><div class="r"><div><b style="color:var(--loss)">Delete account</b><span>Removes picks, chat history, rewards and alerts</span></div><button class="btn btn--ghost btn--sm" style="color:var(--loss)" data-delete>Delete…</button></div></div>`;
  case 'display':return `<div class="card pad"><h2 class="h2" style="margin-bottom:14px">Theme</h2><div class="theme-pick">${[['system','sw-sys','Match system'],['dark','sw-dark','Dark'],['light','sw-light','Light']].map(([k,c,l])=>`<button aria-pressed="${themeMode===k}" data-theme-set="${k}"><i class="${c}"></i>${l}</button>`).join('')}</div></div>`;
  case 'help':return `<div class="stack" style="gap:14px"><label class="search" for="hQ" style="height:48px">${ic('search')}<input id="hQ" placeholder="Search help"></label><div class="card pad faq">${[['How do alerts work?','Each strategy sends an alert when it enters or exits a position. TruthSayer trades every alert in a funded account, so the performance you see is real.'],['What does "Took it" do?','It records that you acted on the alert. It never places a trade for you. Answers power your streak, follow-through score and rewards.'],['What is a 3× ATR stop?','A stop-loss set three times the average true range below (or above, for shorts) the entry. It gives a trade room to move while capping the loss.'],['How many AI interactions do I get?','Basic includes 250 a month, Professional 1,000. Each alert and each chat answer counts as one.'],['Can I cancel my trial?','Yes, any time in the 7-day trial from Plan & billing. You won\'t be charged.']].map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div><div class="card pad row" style="justify-content:space-between"><div><b style="display:block">Still need help?</b><span class="muted" style="font-size:13px">We usually reply within one business day.</span></div><button class="btn btn--grad btn--sm">Contact support</button></div></div>`;
  case 'info':return `<div class="card pad rows">${['About TruthSayer AI','Terms of service','Privacy policy','GIPS® compliance'].map(x=>`<a class="r" href="#account-info"><div><b>${x}</b></div>${ic('chev',16)}</a>`).join('')}</div>`;
  }}
const PA=[{tk:'ZS',cond:'Above',px:220}];
function paList(){return PA.length?PA.map((p,i)=>`<div class="r"><div><b>${p.tk} ${p.cond.toLowerCase()} ${money(p.px)}</b><span>Now ${money(tkInfo(p.tk)?.price??0)}</span></div><button class="btn btn--ghost btn--xs" data-padel="${i}">Remove</button></div>`).join(''):`<div class="nodata" style="border:0"><b>No price alerts yet</b><p>Create one above, or from any ticker page.</p></div>`}

/* ================= WELCOME ================= */
let ob=0,obS={val:1,earn:1},obT={ZS:1,BURU:1};
function vWelcome(){
  const dots=`<div class="ob-dots">${[0,1,2,3].map(i=>`<i class="${i===ob?'on':''}"></i>`).join('')}</div>`;
  const nav=(next,label)=>`<div class="row" style="justify-content:center;gap:10px">${ob?`<button class="btn btn--ghost" data-ob="${ob-1}">Back</button>`:''}<button class="btn btn--grad" data-ob="${next}">${label}</button></div>`;
  const steps=[
   `<span class="eyebrow">Welcome to TruthSayer AI</span><h1 class="display">Trade like a<br><span class="g">hedge fund.</span></h1><p class="lead" style="margin:16px auto 28px">Three AI strategies. Every alert traded with real money. You decide what to act on, and we keep score.</p>${nav(1,'Get started')}`,
   `<h1 class="display" style="font-size:clamp(30px,4vw,48px)">Which strategies<br>do you want alerts from?</h1><div class="ob-opts">${SK.map(k=>`<button class="ob-opt" aria-pressed="${!!obS[k]}" data-obs="${k}"><span class="strat" style="--c:${S[k].c};align-self:flex-start">${S[k].name}</span><b class="num">${pct(S[k].pct)} since inception</b><span>${S[k].short}</span></button>`).join('')}</div>${nav(2,'Next')}`,
   `<h1 class="display" style="font-size:clamp(30px,4vw,48px)">Pick a few tickers<br>to follow.</h1><div class="ob-tk">${['ZS','BURU','MA','NFLX','ORCL','NVDA','TSLA','AAPL','MSFT','WEAT','ACN','META'].map(t=>`<button aria-pressed="${!!obT[t]}" data-obt="${t}">${t}</button>`).join('')}</div>${nav(3,'Next')}`,
   `<h1 class="display" style="font-size:clamp(30px,4vw,48px)">Answer alerts.<br><span class="gv">Build your streak.</span></h1><p class="lead" style="margin:12px auto 0">When an alert lands, tap Took it, Watching or Skip. It takes a second and earns XP.</p><div class="phone"><div class="notch"></div><div class="nt"><b>TruthSayer AI · now</b>Earnings AI© is long STZ at $115.62 into earnings.</div><div class="act" style="justify-content:center"><button data-a="took" aria-pressed="true">${ic('check',14)}Took it</button><button>Skip</button></div><div class="nt" style="opacity:.6"><b>TruthSayer AI · 2h ago</b>Exited KMX at $54.76 for +3.13%.</div></div>${nav(4,'Start with +50 XP')}`];
  return `<div class="ob">${dots}${steps[ob]}</div>`;
}

/* ================= 404 ================= */
function v404(){return `<div class="ob"><div class="display g" style="font-size:clamp(90px,16vw,200px)">404</div><h1 class="h1" style="font-size:28px;margin-top:10px">This page isn't on the chart.</h1><p class="lead" style="margin:10px auto 24px">The live app's Social link currently lands here. In this design, Social has its own coming-soon page.</p><div class="row" style="justify-content:center"><a class="btn btn--grad" href="#home">Go home</a><a class="btn btn--ghost" href="#social">See Social</a></div></div>`}

/* ================= overlays ================= */
function toast(msg){const t=$('#toast');t.innerHTML=msg;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),2400)}
function scrim(on){$('#scrim').classList.toggle('on',on)}
function closeAll(){['#pal','#modal'].forEach(s=>$(s).classList.remove('on'));$('#drawer').classList.remove('on');closeStories();scrim(false)}
function openDrawer(){closeAll();$('#drawer').classList.add('on');scrim(true);renderChats();setTimeout(()=>$('#dIn').focus(),300)}
function modal(html){closeAll();$('#modal').innerHTML=html;$('#modal').classList.add('on');scrim(true);const f=$('#modal').querySelector('input,button');f&&f.focus()}
const mHead=t=>`<div class="mh"><h2 class="h2">${t}</h2><button class="icon-btn" style="width:36px;height:36px" data-close aria-label="Close">${ic('close')}</button></div>`;

/* command palette */
let palSel=0;
function palItems(q){q=q.trim().toLowerCase();
  const pages=[['Home','#home','home'],['Strategies','#strategies','perf'],['Alerts','#alerts','bell'],['News','#news','news'],['My picks','#picks','star'],['Hedge Fund Insights','#research','mic'],['AI Chat','#chat','spark'],['Rewards','#rewards','trophy'],['Account','#account','user'],['Plan & billing','#account-plan','card'],['Notifications','#account-notifications','bell'],['Replay onboarding','#welcome','refresh']];
  const tks=[...new Set([...Object.keys(TK),...TR.map(t=>t.tk),...Object.keys(INS)])].map(s=>{const i=tkInfo(s);return [s+' · '+i.co,'#ticker-'+s,'chart',i.price!=null?money(i.price):'']});
  const cmds=[['Toggle light / dark','theme','moon'],['Answer new alerts','stories','bolt'],['Show the interactions-limit screen','upgrade','lock']];
  const f=a=>a.filter(x=>!q||x[0].toLowerCase().includes(q));
  return {Tickers:f(tks).slice(0,6),Pages:f(pages),Actions:f(cmds)}}
function renderPal(){const g=palItems($('#palIn').value);let i=0,h='';
  for(const [k,arr] of Object.entries(g)){if(!arr.length)continue;h+=`<div class="grp">${k}</div>`;arr.forEach(x=>{h+=`<button class="${i===palSel?'sel':''}" data-pal="${x[1]}">${ic(x[2])}${x[0]}${x[3]?`<span class="num">${x[3]}</span>`:''}</button>`;i++})}
  $('#palList').innerHTML=h||`<div class="nodata" style="border:0"><b>No matches</b><p>Try ZS, NFLX or "alerts".</p></div>`}
function openPal(){closeAll();$('#pal').classList.add('on');scrim(true);$('#palIn').value='';palSel=0;renderPal();setTimeout(()=>$('#palIn').focus(),50)}
function runPal(v){closeAll();if(v==='theme')cycleTheme();else if(v==='stories')openStories(0);else if(v==='upgrade')upgrade();else location.hash=v.slice(1)}

/* stories */
let svI=0,svT;const svList=()=>AL;
function openStories(i){closeAll();svI=i;$('#sv').classList.add('on');scrim(true);drawStory()}
function closeStories(){$('#sv').classList.remove('on');clearTimeout(svT)}
function drawStory(){const L=svList();const a=L[svI];if(!a){closeStories();scrim(false);return}
  $('#sv').innerHTML=`<div class="sv-card"><div class="sv-prog">${L.map((_,i)=>`<i class="${i<svI?'done':i===svI?'cur':''}"><b></b></i>`).join('')}</div>
   <div class="sv-top"><div class="who"><span class="avatar" style="background:var(--grad);width:32px;height:32px">${LOGO(16)}</span><div>${S[a.s].name} ©<br><small>${a.d} · ${a.t}</small></div></div><button class="sv-close" data-svclose aria-label="Close">${ic('close')}</button></div>
   <button class="sv-nav l" data-svnav="-1" aria-label="Previous"></button><button class="sv-nav r" data-svnav="1" aria-label="Next"></button>
   <div class="sv-body"><div class="tk">${a.tk}</div><div class="hd">${a.head}</div><p>${a.sub}</p><div>${a.k==='entry'?`<span class="tag ${a.side.toLowerCase()}" style="background:rgba(255,255,255,.14);color:#fff">${a.side}</span>`:`<span class="num" style="font-size:40px;font-weight:800;color:${a.r>=0?'#3CFDB5':'#FF6B6B'}">${pct(a.r)}</span>`}</div></div>
   <div class="sv-q">${a.k==='entry'?'Are you taking this one?':'Did you trade this one?'}</div>${actBtns(a)}</div>`;
  clearTimeout(svT);svT=setTimeout(()=>{svI++;drawStory()},6000)}

/* gamification */
function popXp(x,y,txt,good){const p=document.createElement('div');p.className='xp-pop';p.textContent=txt;p.style.left=x+'px';p.style.top=(y-10)+'px';document.body.appendChild(p);setTimeout(()=>p.remove(),1000);
  if(good&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const cs=['#0C56FF','#3CFDB5','#7E48FF','#F6C944'];for(let i=0;i<14;i++){const s=document.createElement('i');s.className='spark-p';s.style.left=x+'px';s.style.top=y+'px';s.style.background=cs[i%4];const a=Math.random()*Math.PI*2,d=40+Math.random()*50;s.style.setProperty('--dx',Math.cos(a)*d+'px');s.style.setProperty('--dy',Math.sin(a)*d-20+'px');document.body.appendChild(s);setTimeout(()=>s.remove(),800)}}}
function answer(id,act,el){
  let a=AL.find(x=>String(x.id)===String(id));
  if(!a){a={id,me:null,k:'entry'};AL_EXTRA[id]=a}
  const first=!a.me;a.me=a.me===act?null:act;a.u=0;
  const r=el.getBoundingClientRect();
  if(a.me&&first){const g=PTS[act]+(!ME.answeredToday?20:0);ME.xp+=g;ME.answeredToday=true;popXp(r.left+r.width/2,r.top,`+${g} XP`,act==='took');toast(`${ic('flame',16)} Logged. ${ME.streak}-day streak is safe for today.`)}
  else if(a.me)popXp(r.left+r.width/2,r.top,'Updated',false);
  if(ME.xp>=nextLvl()[1]&&ME.level<LEVELS.length){ME.level++;setTimeout(()=>toast(`${ic('trophy',16)} Level up: ${lvlName()}`),900)}
  syncGlobal();
  // refresh button group in place everywhere for this alert
  $$(`[data-al="${id}"]`).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.a===a.me)));
  $$(`[data-alrow="${id}"]`).forEach(rw=>rw.classList.remove('unread'));
  if($('#sv').classList.contains('on')&&a.me){clearTimeout(svT);svT=setTimeout(()=>{svI++;drawStory()},650)}
  if($('#v-alerts').classList.contains('on')){$('[data-answered]')&&($('[data-answered]').textContent=answered());$('[data-answered-bar]')&&($('[data-answered-bar]').style.width=answered()/AL.length*100+'%')}
}
const AL_EXTRA={};
function syncGlobal(){const un=AL.filter(a=>a.u).length;$$('[data-unread]').forEach(e=>{e.textContent=un;e.hidden=!un});
  const nx=nextLvl(),pv=LEVELS[ME.level-1][1];$$('[data-xp-txt]').forEach(e=>e.textContent=`${ME.xp.toLocaleString()} / ${nx[1].toLocaleString()} XP`);$$('[data-xp-bar]').forEach(e=>e.style.width=Math.min(100,(ME.xp-pv)/(nx[1]-pv)*100)+'%');$$('[data-xp-num]').forEach(e=>e.textContent=ME.xp+(e.closest('#v-rewards')?' XP':''));
  $$('.lvl-card .t').forEach(e=>e.firstChild.textContent=`Level ${ME.level} · ${lvlName()} `);$$('.story').forEach((s,i)=>s.classList.toggle('seen',!!AL[i]?.me))}

/* modals */
function upgrade(){modal(`${mHead('You’ve used this month’s AI interactions')}<div class="mb stack"><p class="muted" style="margin:0">Alerts keep arriving, but chat answers and Hedge Fund Insights pause until your allowance resets on Nov 1, or you can top up now.</p>
  <div class="plans" style="grid-template-columns:1fr 1fr">${[['250 more','$9.99','one-off'],['Go yearly','$359','1,000 / month']].map(([a,b,c],i)=>`<div class="card plan${i?' grad-border':''}" style="padding:18px"><b>${a}</b><div class="price num" style="font-size:32px">${b}</div><span class="muted" style="font-size:12.5px">${c}</span></div>`).join('')}</div>
  <p class="muted" style="font-size:11.5px;margin:0">Example screen. Top-up prices are placeholders.</p><div class="row" style="justify-content:flex-end"><button class="btn btn--ghost" data-close>Not now</button><button class="btn btn--grad" data-close>Top up</button></div></div>`)}
function addPick(){modal(`${mHead('Add a pick')}<div class="mb stack"><label class="search" for="apIn">${ic('search')}<input id="apIn" placeholder="Ticker, e.g. ORCL"></label><div class="chips">${['ORCL','ACN','CPB','USAR','XAIR','KMX'].filter(t=>!PICKS.includes(t)).map(t=>`<button class="chip" data-pickadd="${t}">${ic('plus',14)}${t}</button>`).join('')}</div><p class="muted" style="font-size:12.5px;margin:0">Suggestions are tickers TruthSayer strategies have traded recently.</p></div>`)}
function newAlert(sym){const i=tkInfo(sym)||{price:100};if(i.price==null)i.price=100;modal(`${mHead('Price alert for '+sym)}<div class="mb stack"><p class="muted" style="margin:0" class="num">Now ${money(i.price)}</p><form class="stack" id="naForm" data-sym="${sym}"><div class="row" style="gap:12px"><div class="field" style="flex:1">When price is<select id="na-c"><option>Above</option><option>Below</option></select></div><div class="field" style="flex:1">Price<input id="na-p" type="number" step="0.01" value="${(i.price*1.05).toFixed(2)}"></div></div><button class="btn btn--grad">Create alert</button></form></div>`)}
function shareCard(sym){const t=TRM[sym];modal(`${mHead('Share this trade')}<div class="mb stack" style="align-items:center"><div class="share-card"><div class="row" style="justify-content:space-between"><span data-logo="26">${LOGO(26)}</span><span style="font-size:12px;font-weight:700;opacity:.7">${S[t.s].name} ©</span></div><div><div style="font-size:30px;font-weight:800;letter-spacing:-.04em">${t.tk}</div><div class="big num" style="color:${t.roi>=0?'#3CFDB5':'#FF6B6B'}">${pct(t.roi,1)}</div><small>${t.st==='open'?'Open since '+t.ed:'in '+t.days+' day'+(t.days>1?'s':'')+' · closed '+t.xd}</small></div><small>truthsayer.com · Every alert traded with real money. Not investment advice.</small></div><div class="row"><button class="btn btn--ghost" data-copylink>Copy link</button><button class="btn btn--grad" data-close>Done</button></div></div>`)}

/* ================= theme ================= */
function applyTheme(){const r=document.documentElement;if(themeMode==='system')r.removeAttribute('data-theme');else r.setAttribute('data-theme',themeMode);try{localStorage.setItem('ts-v2-theme',themeMode)}catch(e){}}
function cycleTheme(){const dark=matchMedia('(prefers-color-scheme: dark)').matches;const isDark=themeMode==='dark'||(themeMode==='system'&&dark);themeMode=isDark?'light':'dark';applyTheme();if($('#v-account').classList.contains('on'))route()}
applyTheme();

/* ================= router ================= */
const VIEWS={home:vHome,strategies:vStrategies,trade:vTrade,alerts:vAlerts,news:vNews,picks:vPicks,ticker:vTicker,research:vResearch,chat:vChat,rewards:vRewards,social:vSocial,account:vAccount,welcome:vWelcome};
let lastView='';
function route(){
  const h=(location.hash||'#home').slice(1);const i=h.indexOf('-');const v=i<0?h:h.slice(0,i),arg=i<0?'':h.slice(i+1);
  const key=VIEWS[v]?v:'404';
  if(v==='strategies'&&S[arg])sSel=arg;
  if(v==='ticker'&&lastView!==h){kTab='overview';kRange='1D'}
  if(v==='welcome'&&lastView!==h)ob=0;
  $$('.view').forEach(s=>s.classList.toggle('on',s.id==='v-'+key));
  const el=$('#v-'+key);el.innerHTML=key==='404'?v404():VIEWS[key](arg);hydrate(el);
  if(key==='strategies')renderTrades();if(key==='alerts')renderFeed();if(key==='news')renderNews();if(key==='chat')renderChats();
  const navKey={trade:'strategies',ticker:'picks'}[key]||key;
  $$('[data-nav]').forEach(a=>{if(a.dataset.nav===navKey)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  $('.launch').hidden=key==='chat'||key==='welcome';
  if(lastView!==h){window.scrollTo(0,0);closeAll()}lastView=h;syncGlobal();
}
addEventListener('hashchange',route);

/* ================= events ================= */
document.addEventListener('click',e=>{
  const el=e.target.closest('button,a,[data-close]');if(!el)return;const d=el.dataset;
  if(d.a&&d.al!==undefined){e.preventDefault();answer(d.al,d.a,el);return}
  if(d.a&&!d.al)return;
  if('openPal' in d)openPal();
  else if(d.pal){runPal(d.pal)}
  else if('openDrawer' in d){e.preventDefault();openDrawer()}
  else if('closeDrawer' in d||'close' in d){if(el.tagName!=='A')e.preventDefault();closeAll()}
  else if('stories' in d){e.preventDefault();openStories(Math.max(0,AL.findIndex(a=>!a.me)))}
  else if(d.story!==undefined){openStories(+d.story)}
  else if('svclose' in d){closeStories();scrim(false)}
  else if(d.svnav){svI=Math.max(0,svI+ +d.svnav);drawStory()}
  else if(d.ask){e.preventDefault();ask(d.ask)}
  else if(d.hl){homeLines[d.hl]=!homeLines[d.hl];el.setAttribute('aria-pressed',!!homeLines[d.hl]);$('#homeChart').innerHTML=homeChart()}
  else if(d.ssel){sSel=d.ssel;tFilt='all';const keep=scrollY;route();scrollTo(0,keep)}
  else if(d.sl){sLines[d.sl]=!sLines[d.sl];const keep=scrollY;route();scrollTo(0,keep)}
  else if(d.srange){sRange=d.srange;const keep=scrollY;route();scrollTo(0,keep)}
  else if(d.tf){tFilt=d.tf;renderTrades()}
  else if('expand' in d){const r=el.closest('.al');r.classList.toggle('exp');el.textContent=r.classList.contains('exp')?'Hide alert':'Full alert'}
  else if(d.as){aS=d.as;renderFeed()}
  else if(d.at){aType=d.at;aNeed=false;renderFeed()}
  else if('need' in d){aNeed=!aNeed;renderFeed()}
  else if(el.id==='markRead'){AL.forEach(a=>a.u=0);syncGlobal();renderFeed();toast('All alerts marked as read')}
  else if(d.ncat){nCat=d.ncat;$$('[data-ncat]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.ncat===nCat));renderNews()}
  else if('addpick' in d)addPick()
  else if(d.pickadd){PICKS.push(d.pickadd);closeAll();toast(`${d.pickadd} added to your picks`);route()}
  else if(d.unpick){PICKS=PICKS.filter(p=>p!==d.unpick);toast(`${d.unpick} removed`);route()}
  else if(d.togglepick){const s=d.togglepick;PICKS=PICKS.includes(s)?PICKS.filter(p=>p!==s):[...PICKS,s];toast(PICKS.includes(s)?`${s} added to your picks`:`${s} removed from your picks`);route()}
  else if(d.palert){pAlerts[d.palert]=!pAlerts[d.palert];el.setAttribute('aria-checked',!!pAlerts[d.palert]);if(pAlerts[d.palert])newAlert(d.palert)}
  else if(d.newalert)newAlert(d.newalert)
  else if(d.ktab){kTab=d.ktab;const k=scrollY;route();scrollTo(0,k)}
  else if(d.krange){kRange=d.krange;const k=scrollY;route();scrollTo(0,k)}
  else if(d.kfin){kFin=d.kfin;const k=scrollY;route();scrollTo(0,k)}
  else if(d.rtk){rTk=d.rtk;route()}
  else if('newchat' in d){CHAT.length=0;renderChats();$('#pIn').focus()}
  else if('upgrade' in d)upgrade()
  else if(d.acct){acct=d.acct;location.hash='account-'+d.acct}
  else if(d.bill){bill=d.bill;route()}
  else if(d.themeSet){themeMode=d.themeSet;applyTheme();route()}
  else if(d.nf){const [a,b]=d.nf.split('.');if(b)notif[a][b]=!notif[a][b];else notif[a]=!notif[a];el.setAttribute('aria-checked',b?!!notif[a][b]:!!notif[a])}
  else if('switch' in d){el.setAttribute('aria-checked',el.getAttribute('aria-checked')!=='true')}
  else if(d.padel){PA.splice(+d.padel,1);$('#paList').innerHTML=paList()}
  else if('save' in d)toast('Profile saved')
  else if('delete' in d)modal(`${mHead('Delete your account?')}<div class="mb stack"><p class="muted" style="margin:0">This removes your picks, chat history, rewards and price alerts. Your subscription is cancelled at the end of the billing period. This can't be undone.</p><div class="row" style="justify-content:flex-end"><button class="btn btn--ghost" data-close>Keep my account</button><button class="btn btn--solid" style="background:var(--loss);color:#fff" data-close>Delete account</button></div></div>`)
  else if('logout' in d)toast('Logged out (mockup)')
  else if('notify' in d){el.textContent='You’re on the list';el.disabled=true;toast('We’ll let you know when Social opens')}
  else if(d.share)shareCard(d.share)
  else if('copylink' in d){const u='https://app.truthsayer.com/trades/'+($('#modal .share-card div div')?.textContent||'');navigator.clipboard?.writeText(u).then(()=>toast('Link copied'),()=>toast('Copy blocked here: '+u))}
  else if(d.ob!==undefined){const n=+d.ob;if(n>3){ME.xp+=50;location.hash='home';setTimeout(()=>toast(`${ic('bolt',16)} You're set. +50 XP`),300)}else{ob=n;route()}}
  else if(d.obs){obS[d.obs]=!obS[d.obs];el.setAttribute('aria-pressed',!!obS[d.obs])}
  else if(d.obt){obT[d.obt]=!obT[d.obt];el.setAttribute('aria-pressed',!!obT[d.obt])}
});
$('#scrim').onclick=()=>{closeAll()};
document.addEventListener('submit',e=>{e.preventDefault();const f=e.target;
  if(f.dataset.chatForm){const inp=f.querySelector('input');const v=inp.value.trim();if(!v)return;inp.value='';ask(v)}
  else if(f.id==='paForm'){PA.push({tk:$('#pa-tk').value.trim().toUpperCase(),cond:$('#pa-cond').value,px:+$('#pa-px').value});$('#paList').innerHTML=paList();f.reset();toast('Price alert created')}
  else if(f.id==='naForm'){const s=f.dataset.sym;PA.push({tk:s,cond:$('#na-c').value,px:+$('#na-p').value});pAlerts[s]=1;closeAll();toast(`Alert set: ${s} ${$('#na-c')?.value?.toLowerCase()||''} ${money(+$('#na-p').value)}`)}
});
document.addEventListener('input',e=>{const id=e.target.id;
  if(id==='tQ'){tQ=e.target.value.trim().toLowerCase();renderTrades()}
  else if(id==='aQ'){aQ=e.target.value.trim().toLowerCase();renderFeed()}
  else if(id==='palIn'){palSel=0;renderPal()}
  else if(id==='apIn'){const v=e.target.value.trim().toUpperCase();const known=[...new Set([...Object.keys(TK),...TR.map(t=>t.tk)])].filter(t=>t.startsWith(v)&&!PICKS.includes(t));$('#modal .chips').innerHTML=known.slice(0,8).map(t=>`<button class="chip" data-pickadd="${t}">${ic('plus',14)}${t}</button>`).join('')||'<span class="muted" style="font-size:13px">Try ORCL, ACN or USAR in this mockup.</span>'}
});
document.addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openPal();return}
  if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();openPal();return}
  if(e.key==='Escape'){closeAll();return}
  if($('#sv').classList.contains('on')){if(e.key==='ArrowRight'){svI++;drawStory()}if(e.key==='ArrowLeft'){svI=Math.max(0,svI-1);drawStory()}}
  if($('#pal').classList.contains('on')){const btns=$$('#palList button');if(e.key==='ArrowDown'){palSel=Math.min(btns.length-1,palSel+1);renderPal();e.preventDefault()}if(e.key==='ArrowUp'){palSel=Math.max(0,palSel-1);renderPal();e.preventDefault()}if(e.key==='Enter'&&btns[palSel]){runPal(btns[palSel].dataset.pal)}}
});
$('#themeBtn').onclick=cycleTheme;

hydrate();route();
