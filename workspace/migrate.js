const fs = require('fs');

const acrmSection = `      {/* ACRM Section */}
      <section id="acrm" className="py-24 md:py-32 relative z-10 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 font-semibold mb-6">
                Your Command Center
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What is an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ACRM?</span></h2>
              <p className="text-lg text-slate-400">
                A traditional CRM just stores names and emails. Our <strong>Automated Customer Relationship Manager (ACRM)</strong> actually works the leads for you. Everything from missed calls to appointment reminders happens in one place, automatically.
              </p>
            </FadeIn>
          </div>

          {/* Interactive ACRM Dashboard Showcase */}
          <FadeIn delay={0.2}>
            <div className="relative w-full max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto min-h-[600px]">
              
              {/* Sidebar */}
              <div className="w-full md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col hidden md:flex">
                <div className="p-6 border-b border-slate-800 flex items-center gap-2">
                   <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <Zap className="w-5 h-5 text-white" />
                   </div>
                   <span className="font-bold text-white tracking-wide">WorkhorseOS</span>
                </div>
                <div className="flex-1 p-4 flex flex-col gap-2">
                   {[
                     { icon: Activity, label: "Dashboard", active: true },
                     { icon: MessageSquare, label: "Conversations", badge: "3" },
                     { icon: Users, label: "Contacts" },
                     { icon: CalendarCheck, label: "Calendar" },
                     { icon: RefreshCw, label: "Automations" }
                   ].map((item, i) => (
                     <div key={i} className={\`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors \${item.active ? 'bg-blue-600/10 text-blue-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}\`}>
                        <div className="flex items-center gap-3">
                           <item.icon className="w-5 h-5" />
                           <span className="font-medium text-sm">{item.label}</span>
                        </div>
                        {item.badge && <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{item.badge}</span>}
                     </div>
                   ))}
                </div>
                <div className="p-4 border-t border-slate-800">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden">
                        <User className="w-5 h-5 text-slate-400" />
                     </div>
                     <div>
                        <div className="text-sm font-semibold text-white">Demo User</div>
                        <div className="text-xs text-slate-500">admin@localbiz.com</div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Main Dashboard Area */}
              <div className="flex-1 bg-[#090C15] flex flex-col relative overflow-hidden">
                 {/* Top Navigation */}
                 <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50">
                    <div className="relative w-64">
                       <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                       <input type="text" placeholder="Search leads..." className="w-full bg-slate-950 border border-slate-800 rounded-full py-1.5 pl-9 pr-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors" disabled />
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="relative cursor-pointer">
                         <Bell className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                         <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-900" />
                       </div>
                    </div>
                 </div>

                 {/* Content Grid */}
                 <div className="flex-1 p-6 overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                       <h3 className="text-xl font-bold text-white">Overview</h3>
                       <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                          <span>Last 7 Days</span>
                          <ArrowDown className="w-4 h-4" />
                       </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                       {/* Stat Card 1 */}
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                          <div className="flex items-center justify-between mb-4">
                             <span className="text-sm font-medium text-slate-400">Missed Calls Recovered</span>
                             <PhoneMissed className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="text-3xl font-bold text-white mb-1">14</div>
                          <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> +3 from last week
                          </div>
                       </div>
                       
                       {/* Stat Card 2 */}
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                          <div className="flex items-center justify-between mb-4">
                             <span className="text-sm font-medium text-slate-400">Estimates Booked</span>
                             <CalendarCheck className="w-5 h-5 text-yellow-400" />
                          </div>
                          <div className="text-3xl font-bold text-white mb-1">8</div>
                          <div className="text-xs text-slate-500 font-medium">$4,200 potential value</div>
                       </div>

                       {/* Stat Card 3 */}
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                          <div className="flex items-center justify-between mb-4">
                             <span className="text-sm font-medium text-slate-400">Review Rqsts Sent</span>
                             <Star className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div className="text-3xl font-bold text-white mb-1">22</div>
                          <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                            +4 new 5-star reviews
                          </div>
                       </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                       {/* Recent Activity / Automations */}
                       <div className="bg-slate-900 border border-slate-800 rounded-xl flex flex-col">
                          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                             <h4 className="font-semibold text-white">Live AI Automations</h4>
                             <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                             </span>
                          </div>
                          <div className="p-2 flex-1 flex flex-col gap-2">
                             <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay:0.5}} className="p-3 rounded-lg bg-slate-950 flex items-center gap-3 border border-slate-800/50">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0"><MessageSquare className="w-4 h-4 text-blue-400"/></div>
                                <div className="flex-1"><div className="text-sm text-slate-200">Texted back missed call from <span className="font-bold">John D.</span></div><div className="text-xs text-slate-500">Just now</div></div>
                             </motion.div>
                             
                             <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay:1.5}} className="p-3 rounded-lg bg-slate-950 flex items-center gap-3 border border-slate-800/50">
                                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0"><CalendarCheck className="w-4 h-4 text-yellow-400"/></div>
                                <div className="flex-1"><div className="text-sm text-slate-200">Booked <span className="font-bold">Sarah M.</span> for estimate at 2 PM</div><div className="text-xs text-slate-500">15 mins ago</div></div>
                             </motion.div>
                             
                             <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay:2.5}} className="p-3 rounded-lg bg-slate-950 flex items-center gap-3 border border-slate-800/50">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Star className="w-4 h-4 text-emerald-400"/></div>
                                <div className="flex-1"><div className="text-sm text-slate-200">Sent review request to <span className="font-bold">Mike</span> (Job completed)</div><div className="text-xs text-slate-500">1 hr ago</div></div>
                             </motion.div>
                          </div>
                       </div>

                       {/* Live Chat Preview */}
                       <div className="bg-slate-900 border border-slate-800 rounded-xl flex flex-col">
                            <div className="p-5 border-b border-slate-800">
                               <h4 className="font-semibold text-white">Unified Inbox</h4>
                            </div>
                            <div className="flex-1 p-5 flex flex-col gap-4">
                                {/* AI Message */}
                                <div className="flex gap-3 max-w-[85%]">
                                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg"><Bot className="w-4 h-4 text-white"/></div>
                                  <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3 text-sm text-slate-200 border border-slate-700">
                                     Hi Mark! I noticed we missed your call. How can we help you today?
                                  </div>
                                </div>
                                {/* Customer Reply */}
                                <div className="flex gap-3 max-w-[85%] self-end">
                                  <div className="bg-blue-600 rounded-2xl rounded-tr-none p-3 text-sm text-white shadow-lg">
                                     I need an estimate for a bathroom remodel.
                                  </div>
                                </div>
                                {/* AI Message */}
                                <div className="flex gap-3 max-w-[85%]">
                                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg"><Bot className="w-4 h-4 text-white"/></div>
                                  <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3 text-sm text-slate-200 border border-slate-700">
                                     Absolutely! We'd love to help. We have availability this Wednesday at 10 AM or Thursday at 2 PM. Does either work for you?
                                  </div>
                                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{repeat: Infinity, repeatType: "reverse", duration: 1}} className="self-center ml-2 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">Booking in progress</motion.div>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>

                 {/* Gradient Overlay for style */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none" />
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* Website Pricing Section */}`;

let code = fs.readFileSync('src/App.tsx', 'utf8');

const importsMatch = code.match(/import \{([\s\S]*?)\} from 'lucide-react';/);
if (importsMatch) {
  let imports = importsMatch[1];
  if (!imports.includes('Users')) imports += '  Users,\n';
  if (!imports.includes('Activity')) imports += '  Activity,\n';
  if (!imports.includes('Bell')) imports += '  Bell,\n';
  if (!imports.includes('Search')) imports += '  Search,\n';
  if (!imports.includes('Star')) imports += '  Star,\n';
  
  code = code.replace(importsMatch[0], `import {${imports}} from 'lucide-react';`);
}

const searchString = '      {/* Website Pricing Section */}';
code = code.replace(searchString, acrmSection);

fs.writeFileSync('src/App.tsx', code);
console.log('Appended ACRM Section successfully');
