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
  Brain
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-yellow-400 font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              AI Automations for Local Businesses
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
              Stop Losing Leads You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400">Already Have</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              You worked hard to get the phone to ring. Our AI automations engage instantly, turning missed calls and form fills into booked appointments while you focus on the actual work. We fix the leaks in your pipeline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-4xl"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full rounded-2xl bg-slate-950 border border-white/10 p-6 md:p-8 shadow-2xl flex flex-col gap-6 mt-4"
            >
              {/* Background glows */}
              <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500/5 blur-[80px] pointer-events-none rounded-2xl" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-[80px] pointer-events-none rounded-2xl" />

              <div className="flex flex-col md:flex-row gap-8 md:gap-4 relative mt-4">
                
                {/* Left Side: NOW */}
                <div className="flex-1 bg-slate-900/80 border border-white/5 rounded-xl p-5 flex flex-col relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="bg-slate-800 text-slate-300 px-6 py-1.5 rounded-full font-semibold text-sm border border-white/10 shadow-lg whitespace-nowrap">Now</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4 mb-4 flex-1">
                    <div className="bg-slate-950 border border-white/5 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-3 relative group">
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">9+</div>
                      <PhoneMissed className="w-8 h-8 text-slate-400 group-hover:text-red-400 transition-colors" />
                      <span className="text-xs font-semibold text-slate-300">MISSED CALLS</span>
                    </div>
                    <div className="bg-slate-950 border border-white/5 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-3 group">
                      <Frown className="w-8 h-8 text-slate-400 group-hover:text-red-400 transition-colors" />
                      <span className="text-xs font-semibold text-slate-300">FRUSTRATION</span>
                    </div>
                  </div>
                  <div className="text-center mt-auto pt-3 border-t border-white/5">
                    <p className="text-sm text-slate-300">Missed calls, dealing with chaos</p>
                    <p className="text-sm font-bold text-red-400 mt-0.5">every day</p>
                  </div>
                </div>



                {/* Right Side: WITH AI */}
                <div className="flex-[1.2] bg-blue-950/30 border border-blue-500/30 rounded-xl p-5 flex flex-col relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 pointer-events-none rounded-xl" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-1.5 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400/50 whitespace-nowrap">With Digital Handyman</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4 mb-4 flex-1 relative z-10">
                    <div className="bg-slate-900/80 border border-blue-500/30 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-3 shadow-[inset_0_0_15px_rgba(59,130,246,0.15)] group hover:border-blue-400/50 transition-colors">
                      <Bot className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-bold text-blue-100">AI ANSWERS</span>
                    </div>
                    <div className="bg-slate-900/80 border border-blue-500/30 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-3 shadow-[inset_0_0_15px_rgba(59,130,246,0.15)] group hover:border-blue-400/50 transition-colors">
                      <ClipboardCheck className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-bold text-blue-100">QUALIFIED LEADS</span>
                    </div>
                    <div className="bg-slate-900/80 border border-blue-500/30 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-3 shadow-[inset_0_0_15px_rgba(59,130,246,0.15)] group hover:border-blue-400/50 transition-colors">
                      <Coffee className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-bold text-blue-100">PEACE OF MIND</span>
                    </div>
                    <div className="bg-slate-900/80 border border-blue-500/30 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-3 shadow-[inset_0_0_15px_rgba(59,130,246,0.15)] group hover:border-blue-400/50 transition-colors">
                      <TrendingUp className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-bold text-blue-100">GROWTH</span>
                    </div>
                  </div>
                  <div className="text-center mt-auto pt-3 border-t border-blue-500/20 relative z-10">
                    <p className="text-sm text-blue-100">Consistent leads, <span className="font-bold text-yellow-400">smooth operation</span></p>
                    <p className="text-sm font-bold text-yellow-400 mt-0.5">& predictable revenue</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full mt-2"
          >
            <motion.a 
              href="https://api.digitalhandyman.xyz/payment-link/69beae18b5622a509ebe3311"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] flex items-center justify-center gap-2"
            >
              Get access today!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold text-slate-300 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              See how it works
            </motion.a>
          </motion.div>
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

      {/* Comparison Chart Section */}
      <section id="pricing" className="py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400">automation level</span></h2>
            <p className="text-lg text-slate-400">
              Whether you're just starting to automate or ready for a full-scale AI workforce, we have the right toolkit for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Lite Column */}
            <FadeIn delay={0.1} className="h-full">
              <div className="h-full rounded-3xl bg-slate-900/40 border border-white/5 p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Digital Handyman Automation Toolkit</h3>
                      <p className="text-slate-400 text-sm">Automated systems that capture and follow up on leads</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 tracking-widest uppercase">Lite</span>
                </div>

                <div className="space-y-8 mb-12 flex-grow">
                  <div className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mb-6">Lead Capture & Automation</div>
                  
                  {[
                    { icon: PhoneMissed, title: "Missed Call Text-Back", desc: "Instantly texts anyone who calls when you're busy. Turns missed calls into text conversations automatically." },
                    { icon: MessageSquare, title: "24/7 AI Website Chat Widget", desc: "Engages visitors on your site around the clock and collects their contact info." },
                    { icon: Send, title: "Instant SMS Follow-Up", desc: "Automatically texts leads the second they submit a form. Strike while the iron is hot." },
                    { icon: CalendarCheck, title: "Seamless Booking", desc: "AI handles back-and-forth scheduling directly onto your calendar — no phone tag required." },
                    { icon: RefreshCw, title: "Database Reactivation", desc: "ECHO uses AI-powered SMS to re-engage dead leads and past clients, turning your existing list into booked appointments." },
                    { icon: TrendingUp, title: "Reputation Rocket (Auto Reviews)", desc: "ECHO triggers Google review requests via SMS the moment you finish a job — driving map rankings and organic calls on autopilot." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <item.icon className="w-5 h-5 text-slate-500 shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.a 
                  href="https://api.digitalhandyman.xyz/payment-link/69beae18b5622a509ebe3311"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  Get Access to Digital Handyman Automation Toolkit <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </FadeIn>

            {/* Pro Column */}
            <FadeIn delay={0.2} className="h-full">
              <div className="h-full rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/20 p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-blue-500/40 transition-colors shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px]" />
                
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Digital Handyman Pro</h3>
                      <p className="text-slate-400 text-sm">Everything in the Toolkit, plus a 24/7 AI employee that closes</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-[10px] font-bold text-blue-400 tracking-widest uppercase">Pro</span>
                </div>

                <div className="space-y-8 mb-12 flex-grow relative z-10">
                  <div className="text-[10px] font-bold text-blue-400/60 tracking-[0.2em] uppercase mb-6">Everything in the Toolkit, Plus...</div>
                  
                  {[
                    { icon: Mic, title: "AI Voice Agent (Echo)", desc: "ECHO answers calls live, holds natural conversations, and handles inquiries — just like a real employee. Available every hour of every day." },
                    { icon: UserCheck, title: "Real-Time Lead Qualification", desc: "ECHO asks the right questions, determines fit and intent, and filters out time-wasters — so your team only talks to serious prospects." },
                    { icon: Handshake, title: "Warm Handoff To Your Team", desc: "When ECHO qualifies a lead, it hands off a full summary — their needs, urgency, and intent — so your team steps in ready to close." },
                    { icon: Brain, title: "Trained On Your Business", desc: "ECHO is custom-trained on your services, your pricing, and the way you communicate. It sounds like a knowledgeable member of your team — not a robot." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-white font-semibold">{item.title}</h4>
                          <span className="text-[8px] font-bold text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20 uppercase tracking-tighter">Pro Only</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.a 
                  href="https://buy.stripe.com/4gw9Cq6yN43m3YI9AA"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 relative z-10"
                >
                  Look at Digital Handyman Pro <ArrowRight className="w-4 h-4" />
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
          
          <div className="pt-8 border-t border-white/10 text-center md:text-left text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Digital Handyman. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for local business growth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
