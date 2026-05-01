import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  MessageSquare,
  PhoneMissed,
  CalendarCheck,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Send,
  Facebook,
  Youtube,
  User,
  Wrench,
  UserCheck,
  RefreshCw,
  Bot,
  ClipboardCheck,
  Coffee,
  Frown,
  Phone,
  Mail,
  Mic,
  Handshake,
  Brain,
  Monitor,
  Layout,
  Sparkles,
  Server,
  Palette,
  Settings,
  Users,
  Activity,
  Bell,
  Search,
  Star
} from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 300]);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    industry: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/IFOKwamOedRqCGzWsqmD/webhook-trigger/fdd515b4-a4c0-4470-82b9-472b64800e91', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', industry: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-yellow-400/30 overflow-hidden relative">
      {/* Techy Animated Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          animate={{ backgroundPosition: ["0px 0px", "0px 64px"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Global Parallax Glows */}
      <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <motion.div style={{ y: y3 }} className="absolute top-[60%] left-[20%] w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/d/1O0D--D5ee8HtZEeMNTmcab4xdg_TXTVK" 
              alt="Digital Handyman Logo" 
              className="h-12 md:h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#digital-workforce" className="hover:text-white transition-colors">Digital Workforce</a>
            <a href="#features" className="hover:text-white transition-colors">Losing Leads?</a>
            <a href="#pricing" className="hover:text-white transition-colors">Automation Level</a>
          </div>
          <motion.a 
            href="https://api.digitalhandyman.xyz/payment-link/69beae18b5622a509ebe3311"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-slate-950 border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-slate-950 transition-all flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.nav>

      {/* ---------------- NEW HERO SECTION ---------------- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Build a workhorse site
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-2xl">
                Turn your Website into your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-400">Best Employee.</span>
              </h1>
              
              <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
                A good-looking website is just a brochure. We pair premium branding with intelligent AI automations to build a 24/7 lead-generating engine. Stop losing leads you already have.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.a 
                  href="#how-it-works"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 font-semibold text-slate-300 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  See how it works
                  <ArrowDown className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Visual / Interactive Website Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full min-h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-[80px]" />
              
              <div className="relative w-full aspect-[4/3] bg-slate-900 border border-slate-700/50 flex flex-col rounded-xl shadow-2xl overflow-hidden mt-8 lg:mt-0">
                {/* Browser Header */}
                <div className="h-10 bg-slate-800/80 border-b border-slate-700/50 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-4 flex-1 h-6 bg-slate-900/50 rounded-md border border-slate-700/50 flex items-center justify-center px-3">
                     <span className="text-[10px] text-slate-400 font-mono">yourbusiness.com</span>
                  </div>
                </div>
                
                {/* Simulated Website UI */}
                <div className="flex-1 bg-slate-950 p-6 relative overflow-hidden flex flex-col items-center">
                   
                    <div className="w-full flex justify-between items-center mb-10 opacity-60">
                        <div className="w-24 h-6 bg-slate-800 rounded" />
                        <div className="flex gap-4">
                           <div className="w-12 h-2 bg-slate-800 rounded" />
                           <div className="w-12 h-2 bg-slate-800 rounded" />
                           <div className="w-12 h-2 bg-slate-800 rounded" />
                        </div>
                    </div>

                    <div className="w-3/4 h-10 bg-slate-800/50 rounded-lg mb-6" />
                    <div className="w-2/3 h-4 bg-slate-800/30 rounded mb-3" />
                    <div className="w-1/2 h-4 bg-slate-800/30 rounded mb-10" />

                    <div className="w-32 h-10 bg-blue-600/50 rounded-full" />

                    {/* Interactive Elements / Automations Popping Up */}
                    
                    {/* Missed Call Notification */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute top-20 right-4 bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-xl w-48 flex items-start gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                           <PhoneMissed className="w-4 h-4 text-yellow-500" />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-300 font-semibold mb-1">Missed Call: 555-0192</div>
                            <div className="text-[9px] text-slate-500">Auto text-back sent.</div>
                        </div>
                    </motion.div>

                    {/* New Lead Booking */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.5 }}
                        className="absolute bottom-24 left-4 bg-slate-900 border border-blue-500/30 rounded-lg p-3 shadow-xl w-52 flex items-start gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                           <CalendarCheck className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                            <div className="text-[10px] text-blue-100 font-semibold mb-1">New Estimate Booked</div>
                            <div className="text-[9px] text-slate-400">Sarah M. selected 2:00 PM</div>
                        </div>
                    </motion.div>

                    {/* AI Chat Widget */}
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
                        className="absolute bottom-4 right-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="relative cursor-pointer">
                            <div className="absolute -top-12 right-0 bg-blue-600 text-white text-[10px] font-medium py-1.5 px-3 rounded-t-xl text-center rounded-bl-xl shadow-lg border border-blue-500 whitespace-nowrap">
                                Hi! Need a quote? 👋
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-colors">
                            <MessageSquare className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 relative z-10 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <FadeIn className="order-2 md:order-1 relative">
              <div className="aspect-square w-full max-w-xs md:max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-blue-500/20 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-slate-900 border border-white/10 rounded-full flex flex-col items-center justify-center p-6 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] relative z-10">
                    <Server className="w-10 h-10 text-blue-400 mb-3" />
                    <div className="font-bold text-white tracking-tight">The Workhorse</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Brand + Engine</div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-950 border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  <Palette className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-slate-950 border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.2)]">
                  <Settings className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why just look good when you can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">perform?</span></h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Most agencies build "brochure websites"—they look nice, but sit idly waiting for customers to do the work. The problem? When local business owners are on a job site, they miss phone calls, and forms go unanswered for hours. 
              </p>
              <p className="text-lg font-semibold text-white mb-8 border-l-2 border-blue-500 pl-4 py-1">
                We believe your website should be an active employee. 
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Premium Branding", desc: "Establishes instant credibility and authority before you even speak.", icon: Palette, color: "text-blue-400" },
                  { title: "AI Lead Capture", desc: "Instantly engages missed calls and web form fills so leads don't go cold.", icon: Zap, color: "text-cyan-400" },
                  { title: "Automated Nurture", desc: "Qualifies prospects and books appointments directly onto your calendar.", icon: CalendarCheck, color: "text-yellow-400" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                    <div className="mt-1">
                      {item.icon === Palette && <Palette className="w-6 h-6 text-blue-400" />}
                      {item.icon === Zap && <Sparkles className="w-6 h-6 text-cyan-400" />}
                      {item.icon === CalendarCheck && <CalendarCheck className="w-6 h-6 text-yellow-400" />}
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-sm text-slate-400">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
            
          </div>
        </div>
      </section>


      {/* Stats Bar */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeIn delay={0.1}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">45%</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">More Revenue Captured</div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">&lt; 1m</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Response Time</div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Lead Engagement</div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10x</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">ROI on Ad Spend</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">We build the automation. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400">You reap the rewards.</span></h2>
            <p className="text-lg text-slate-400">
              You don't need to be a tech expert. Digital Handyman takes care of the entire setup, training, and deployment of your AI automations. We custom-fit them to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-white/5 overflow-hidden rounded-full">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-400"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ originX: 0 }}
              />
              <motion.div
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                initial={{ x: "-200%" }}
                whileInView={{ x: "200%" }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
              />
            </div>

            {[
              {
                step: "01",
                title: "We Learn Your Business",
                desc: "We consult with you to understand your services, pricing, and how you want leads handled. We do the heavy lifting."
              },
              {
                step: "02",
                title: "We Deploy Your AI",
                desc: "We connect your Google Business number, website forms, and ad campaigns to your custom-trained AI automation."
              },
              {
                step: "03",
                title: "You Watch Leads Convert",
                desc: "The AI instantly engages every missed call and form fill, qualifying leads and booking them directly onto your calendar."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2} className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-950 border-2 border-yellow-400/50 flex items-center justify-center text-xl font-bold text-yellow-400 mb-6 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Never let a lead <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400">go cold again.</span></h2>
            <p className="text-lg text-slate-400">
              40% of local businesses miss qualified leads because they can't answer the phone or reply to forms fast enough. We deploy a digital workforce to fix that automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: PhoneMissed,
                title: "Missed Call Text-Back",
                desc: "Instantly text back anyone who calls your business when you're busy on a job site. Turn a missed call into a text conversation.",
                color: "text-blue-400",
                bg: "bg-blue-400/10"
              },
              {
                icon: Send,
                title: "Instant SMS Follow-Up",
                desc: "Automatically text leads the second they submit a form to book a meeting. Strike while the iron is hot.",
                color: "text-yellow-400",
                bg: "bg-yellow-400/10"
              },
              {
                icon: MessageSquare,
                title: "24/7 AI Website Chat",
                desc: "Engage visitors on your site and collect their information around the clock. Your website never sleeps.",
                color: "text-emerald-400",
                bg: "bg-emerald-400/10"
              },
              {
                icon: CalendarCheck,
                title: "Seamless Booking",
                desc: "Let the AI handle the back-and-forth scheduling directly on your calendar, eliminating friction.",
                color: "text-cyan-400",
                bg: "bg-cyan-400/10"
              },
              {
                icon: TrendingUp,
                title: "Stop Wasting Ad Spend",
                desc: "Ensure every lead from Google or Facebook gets an immediate, personalized response to maximize your ROI.",
                color: "text-rose-400",
                bg: "bg-rose-400/10"
              },
              {
                icon: Clock,
                title: "Focus on Your Craft",
                desc: "Stop playing phone tag and get back to running your local business. We handle the front lines.",
                color: "text-amber-400",
                bg: "bg-amber-400/10"
              }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all h-full"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="digital-workforce" className="py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet your new <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400">digital workforce</span></h2>
            <p className="text-lg text-slate-400">
              We don't just provide a chatbot. We build specialized AI agents designed to take over the specific bottlenecks in your local business, so you can focus on the work that actually pays.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "The 24/7 Receptionist",
                desc: "Missed calls cost you money. When you're on a job site or it's after hours, your AI receptionist instantly texts back missed calls, answers common questions about your services, and keeps the lead warm until you're ready.",
              },
              {
                icon: UserCheck,
                title: "The Lead Qualifier",
                desc: "Stop wasting time driving to unqualified estimates. Your AI automation engages new leads via SMS or web chat, asks your specific qualifying questions, and filters out the tire-kickers before they ever reach your desk.",
              },
              {
                icon: CalendarCheck,
                title: "The Scheduling Assistant",
                desc: "Eliminate the endless back-and-forth of finding a time that works. The AI integrates directly with your calendar to book estimates and appointments automatically based on your real-time availability.",
              },
              {
                icon: RefreshCw,
                title: "The Follow-Up Machine",
                desc: "Sent a quote but haven't heard back? Finished a job and need a Google review? Your AI automation automatically follows up with customers via text or email at the perfect time, increasing your close rate and boosting your local SEO.",
              }
            ].map((role, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-yellow-400/30 transition-colors h-full flex flex-col sm:flex-row gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center shrink-0">
                    <role.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{role.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{role.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ACRM Section */}
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
              <div className="w-full md:w-48 lg:w-64 bg-slate-900 border-r border-slate-800 flex flex-col hidden md:flex">
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
                     <div key={i} className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${item.active ? 'bg-blue-600/10 text-blue-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}>
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
                        <div className="text-xs text-slate-500 truncate max-w-[100px]">admin@localbiz.com</div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Main Dashboard Area */}
              <div className="flex-1 bg-[#090C15] flex flex-col relative overflow-hidden">
                 {/* Top Navigation */}
                 <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 relative z-10">
                    <div className="relative w-48 sm:w-64">
                       <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                       <input type="text" placeholder="Search leads..." className="w-full bg-slate-950 border border-slate-800 rounded-full py-1.5 pl-9 pr-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors cursor-not-allowed" readOnly />
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="relative cursor-pointer">
                         <Bell className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                         <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-900" />
                       </div>
                    </div>
                 </div>

                 {/* Content Grid */}
                 <div className="flex-1 p-6 overflow-y-auto relative z-10">
                    <div className="flex items-center justify-between mb-6">
                       <h3 className="text-xl font-bold text-white">Overview</h3>
                       <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                          <span>Last 7 Days</span>
                          <ArrowDown className="w-4 h-4" />
                       </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                       {/* Stat Card 1 */}
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500/30 transition-colors">
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
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500/30 transition-colors">
                          <div className="flex items-center justify-between mb-4">
                             <span className="text-sm font-medium text-slate-400">Estimates Booked</span>
                             <CalendarCheck className="w-5 h-5 text-yellow-400" />
                          </div>
                          <div className="text-3xl font-bold text-white mb-1">8</div>
                          <div className="text-xs text-slate-500 font-medium">$4,200 potential value</div>
                       </div>

                       {/* Stat Card 3 */}
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500/30 transition-colors sm:col-span-2 lg:col-span-1">
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
                       <div className="bg-slate-900 border border-slate-800 rounded-xl flex flex-col hover:border-slate-700 transition-[border-color]">
                          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                             <h4 className="font-semibold text-white">Live Automations</h4>
                             <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                             </span>
                          </div>
                          <div className="p-4 flex-1 flex flex-col gap-4">
                             <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:0.2}} viewport={{once:true}} className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/30"><MessageSquare className="w-4 h-4 text-blue-400"/></div>
                                <div className="flex-1"><div className="text-sm text-slate-200">Auto text-back sent to <span className="font-bold">John D.</span></div><div className="text-xs text-slate-500 mt-1">Just now</div></div>
                             </motion.div>
                             
                             <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:0.4}} viewport={{once:true}} className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-yellow-500/30"><CalendarCheck className="w-4 h-4 text-yellow-400"/></div>
                                <div className="flex-1"><div className="text-sm text-slate-200">AI booked <span className="font-bold">Sarah M.</span> for estimate at 2 PM</div><div className="text-xs text-slate-500 mt-1">15 mins ago</div></div>
                             </motion.div>
                             
                             <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:0.6}} viewport={{once:true}} className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30"><Star className="w-4 h-4 text-emerald-400"/></div>
                                <div className="flex-1"><div className="text-sm text-slate-200">Review request sent to <span className="font-bold">Mike</span> (Job completed)</div><div className="text-xs text-slate-500 mt-1">1 hr ago</div></div>
                             </motion.div>
                          </div>
                       </div>

                       {/* Live Chat Preview */}
                       <div className="bg-slate-900 border border-slate-800 rounded-xl flex flex-col hover:border-slate-700 transition-[border-color]">
                            <div className="p-5 border-b border-slate-800 flex items-center gap-3">
                               <Bot className="w-5 h-5 text-blue-400" />
                               <h4 className="font-semibold text-white">Unified Inbox</h4>
                            </div>
                            <div className="flex-1 p-5 flex flex-col justify-end gap-4 min-h-[250px]">
                                {/* AI Message */}
                                <div className="flex gap-3 max-w-[85%]">
                                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700"><Bot className="w-4 h-4 text-slate-300"/></div>
                                  <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3 text-sm text-slate-200 border border-slate-700 shadow-sm">
                                     Hi Mark! I noticed we missed your call. How can we help you today?
                                  </div>
                                </div>
                                {/* Customer Reply */}
                                <div className="flex gap-3 max-w-[85%] self-end">
                                  <div className="bg-blue-600 rounded-2xl rounded-tr-none p-3 text-sm text-white shadow-sm border border-blue-500">
                                     I need an estimate for a bathroom remodel.
                                  </div>
                                </div>
                                {/* AI Message */}
                                <div className="flex gap-3 max-w-[85%]">
                                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700"><Bot className="w-4 h-4 text-slate-300"/></div>
                                  <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3 text-sm text-slate-200 border border-slate-700 shadow-sm">
                                     Absolutely! We'd love to help. We have availability this Wednesday at 10 AM or Thursday at 2 PM. Does either work for you?
                                  </div>
                                </div>
                            </div>
                       </div>
                    </div>
                 </div>

                 {/* Gradient Overlay for style */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none" />
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* Website Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 relative z-10 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Workhorse Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400">Investment</span></h2>
            <p className="text-lg text-slate-400">
              Choose the level of power you need for your online presence. Let us build your brand and your engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Website Design */}
            <FadeIn delay={0.1} className="h-full">
              <div className="h-full rounded-3xl bg-slate-900/50 border border-white/10 p-8 flex flex-col hover:bg-slate-900/80 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Website Design</h3>
                <div className="text-4xl font-bold text-white mb-2">$1,000 <span className="text-lg text-slate-400 font-normal">Setup</span></div>
                <div className="text-xl text-blue-400 font-semibold mb-8">+$77 / month <span className="text-sm text-slate-400 font-normal">hosting fee</span></div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "Custom, Professional Design",
                    "Mobile-Responsive Layouts",
                    "SEO Optimized Structure",
                    "High-Speed Hosting",
                    "Basic Contact Forms",
                    "Connect Your Custom Domain"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a 
                  href="https://api.digitalhandyman.xyz/payment-link/69beae18b5622a509ebe3311"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  Get Website Design <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </FadeIn>

            {/* Card 2: Website + Automations */}
            <FadeIn delay={0.2} className="h-full">
              <div className="h-full rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/20 p-8 flex flex-col relative overflow-hidden group hover:border-blue-500/40 transition-colors shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                <div className="absolute top-0 right-0 bg-blue-500/10 w-64 h-64 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500" />
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 w-fit">
                  The Workhorse
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Website + Automations</h3>
                <div className="text-4xl font-bold text-white mb-2">$1,500 <span className="text-lg text-slate-400 font-normal">Setup</span></div>
                <div className="text-xl text-cyan-400 font-semibold mb-8">+$249 / month <span className="text-sm text-slate-400 font-normal">hosting & automation</span></div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "Everything in Website Design",
                    "Lead Capture Automations",
                    "Missed Call Text-Back",
                    "Automated Nurture Sequences",
                    "CRM Integration",
                    "Designed to Grow Your Business"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a 
                  href="https://buy.stripe.com/4gw9Cq6yN43m3YI9AA"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 relative z-10"
                >
                  Get Website + Automations <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400">local business owners</span></h2>
            <p className="text-lg text-slate-400">
              See how Digital Handyman is transforming local service businesses by plugging the leaks in their sales funnels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 relative h-full flex flex-col justify-between"
              >
                <div>
                  <div className="absolute top-8 right-8 text-yellow-400/20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21L16.41 14.592C16.641 13.92 16.756 13.216 16.756 12.5C16.756 9.462 14.294 7 11.256 7V10C12.637 10 13.756 11.119 13.756 12.5C13.756 12.695 13.733 12.887 13.689 13.073L11.256 21H14.017ZM6.017 21L8.41 14.592C8.641 13.92 8.756 13.216 8.756 12.5C8.756 9.462 6.294 7 3.256 7V10C4.637 10 5.756 11.119 5.756 12.5C5.756 12.695 5.733 12.887 5.689 13.073L3.256 21H6.017Z" />
                    </svg>
                  </div>
                  <p className="text-lg text-slate-300 mb-8 relative z-10">
                    "We used to miss 5-10 calls a day while on the job site. Now, Digital Handyman texts them back instantly and books the estimate. It's like having a full-time receptionist that never sleeps."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                    <User className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Alan S.</div>
                    <div className="text-sm text-slate-400">Owner, Icon Graphics</div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 relative h-full flex flex-col justify-between"
              >
                <div>
                  <div className="absolute top-8 right-8 text-yellow-400/20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21L16.41 14.592C16.641 13.92 16.756 13.216 16.756 12.5C16.756 9.462 14.294 7 11.256 7V10C12.637 10 13.756 11.119 13.756 12.5C13.756 12.695 13.733 12.887 13.689 13.073L11.256 21H14.017ZM6.017 21L8.41 14.592C8.641 13.92 8.756 13.216 8.756 12.5C8.756 9.462 6.294 7 3.256 7V10C4.637 10 5.756 11.119 5.756 12.5C5.756 12.695 5.733 12.887 5.689 13.073L3.256 21H6.017Z" />
                    </svg>
                  </div>
                  <p className="text-lg text-slate-300 mb-8 relative z-10">
                    "Our Facebook ad leads were going cold because we couldn't call them fast enough. The AI SMS follow-up engages them immediately. Our conversion rate tripled in the first month."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                    <User className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Thomas Carver</div>
                    <div className="text-sm text-slate-400">Summit Cleaning Services</div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-24 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-[80px]" 
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" 
            />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to stop losing leads?</h2>
                <p className="text-lg text-slate-400 mb-8">
                  Get access today and let us build your AI automation. Start turning missed opportunities into booked jobs and hidden revenue.
                </p>
                <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  {['We handle the setup', 'Integrates with your tools', 'Cancel anytime'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-12 items-start text-left">
                {/* Contact Info */}
                <div className="lg:col-span-1 flex flex-col gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Get in touch</h3>
                    <p className="text-slate-400">Have questions? Reach out to us directly.</p>
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-400 mb-1">Phone Number</div>
                        <a href="tel:8063369830" className="text-lg font-semibold text-white hover:text-yellow-400 transition-colors">(806) 336-9830</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-400 mb-1">Email</div>
                        <a href="mailto:hello@digitalhandyman.xyz" className="text-lg font-semibold text-white hover:text-blue-400 transition-colors">hello@digitalhandyman.xyz</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-2">
                  <form className="w-full bg-slate-950/50 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-sm" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-slate-400 mb-1">Industry</label>
                    <input 
                      type="text" 
                      id="industry" 
                      required
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
                      placeholder="e.g. Plumbing, Roofing, HVAC"
                    />
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-4 font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Submitting...</span>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Success! We'll be in touch.
                    </>
                  ) : (
                    'Get access today!'
                  )}
                </motion.button>
              </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/d/1O0D--D5ee8HtZEeMNTmcab4xdg_TXTVK" 
                  alt="Digital Handyman Logo" 
                  className="h-14 md:h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-slate-400 max-w-sm mb-6">
                Building AI automations for local businesses to stop lead leakage and drive revenue growth.
              </p>
              <div className="flex items-center gap-4 text-slate-400">
                <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="https://digitalhandyman.xyz/privacy-policy--terms-and-conditions" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="https://digitalhandyman.xyz/privacy-policy--terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center md:text-left text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Digital Handyman. All rights reserved.</p>
            <p className="font-medium text-slate-400">Automations powered by Digital Handyman</p>
            <p className="mt-2 md:mt-0">Designed for local business growth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
