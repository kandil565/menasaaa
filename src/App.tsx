import { useState } from 'react';
import {
  ArrowLeft,
  Award,
  BarChart3,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  Clock3,
  CreditCard,
  Crown,
  FileText,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Video,
  X,
} from 'lucide-react';

const navigation = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'الخصائص', href: '#features' },
  { label: 'باقات الأسعار', href: '#pricing' },
  { label: 'عن المنصة', href: '#about' },
];

const features = [
  { icon: ShieldCheck, title: 'حماية المحتوى', desc: 'تشفير DRM وعلامة مائية رقمية تمنع تسريب دوراتك وتحمي حقوقك الفكرية بالكامل.', color: '#f47e26', bg: '#fff1e6' },
  { icon: Play, title: 'مشغّل دروس احترافي', desc: 'مشغّل فيديو بتقدّم تلقائي، إشارات مرجعية، وسرعة قابلة للتحكم مع تتبع دقيق لتقدّم الطالب.', color: '#2a66d2', bg: '#e8f0fe' },
  { icon: LayoutDashboard, title: 'لوحة تحكم متقدمة', desc: 'إحصاءات حية لأداء الدورات، الإيرادات، ونشاط الطلاب في لوحة واحدة واضحة وبسيطة.', color: '#23a878', bg: '#e6f7f0' },
  { icon: Users, title: 'إدارة الطلاب', desc: 'تابع تسجيل الطلاب، تقدّمهم، وشهاداتهم، وتواصل معهم مباشرة من مكان واحد.', color: '#7c4dd8', bg: '#f1ebfd' },
  { icon: Video, title: 'البث المباشر', desc: 'أقِم دروسك المباشرة وتفاعل مع طلابك في الوقت الفعلي مع تسجيل تلقائي للجلسات.', color: '#e84c88', bg: '#fde8f0' },
  { icon: CreditCard, title: 'بوابات دفع متعددة', desc: 'اقبل المدفوعات محلياً وعالمياً عبر بطاقات مدى وVisa وMastercard وتحويل بنكي.', color: '#0ea5b7', bg: '#e0f7fa' },
];

const showcaseFeatures = [
  {
    badge: 'حماية المحتوى',
    title: 'محتواك محمي بالكامل من القرصنة والتسريب',
    desc: 'تقنية تشفير متقدمة وعلامة مائية تحمل اسم الطالب تمنع تسجيل الشاشة وتحمي كل فيديو وملف ترفعه على المنصة.',
    points: ['تشفير DRM على مستوى البث', 'علامة مائية ديناميكية باسم المشترك', 'منع التحميل والتسجيل التلقائي'],
    icon: Lock,
  },
  {
    badge: 'تحليلات ذكية',
    title: 'قرارات أفضل ببيانات واضحة',
    desc: 'افهم سلوك طلابك وأداء دوراتك من خلال تقارير تفصيلية مرئية تساعدك على تحسين محتواك وزيادة إيراداتك.',
    points: ['معدلات إكمال الدورات', 'تتبع وقت المشاهدة', 'تنبيهات انخفاض التفاعل'],
    icon: TrendingUp,
  },
];

const stats = [
  { value: '+2,000,000', label: 'ساعات المحتوى المحمي', icon: Clock3 },
  { value: '+500,000', label: 'الطلاب', icon: Users },
  { value: '+12,500', label: 'المدرسون', icon: GraduationCap },
];

type BillingCycle = 'monthly' | 'yearly';

type PricingPlan = {
  name: string;
  price: { monthly: number; yearly: number };
  desc: string;
  features: string[];
  cta: string;
  ctaStyle: 'outline' | 'primary' | 'dark';
  icon: typeof GraduationCap;
  popular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: 'المجانية',
    price: { monthly: 0, yearly: 0 },
    desc: 'للمدرسين الجدد وتجربة المنصة.',
    features: ['حتى 50 طالب', 'حماية أساسية للفيديوهات', 'دعم عبر البريد', 'عمولة 5% على المبيعات'],
    cta: 'ابدأ مجاناً',
    ctaStyle: 'outline',
    icon: GraduationCap,
  },
  {
    name: 'المعلم',
    price: { monthly: 499, yearly: 399 },
    desc: 'للمدرسين المستقلين وأصحاب الأعداد المتوسطة.',
    features: ['حتى 1,000 طالب', 'منع تسجيل الشاشة وعلامة مائية برقم الطالب', 'تطبيق مشترك برمز خاص', 'عمولة 2%', 'دعم واتساب مباشر'],
    cta: 'اشترك الآن',
    ctaStyle: 'primary',
    popular: true,
    icon: Sparkles,
  },
  {
    name: 'المؤسسات',
    price: { monthly: 1299, yearly: 1039 },
    desc: 'للأكاديميات والسناتر والمجموعات الكبيرة.',
    features: ['عدد طلاب غير محدود', 'تشفير متقدم (DRM) وسيرفرات خاصة', 'تطبيق خاص باسمك ولوجو خاص على المتجر', '0% عمولة', 'مدير حساب خاص 24/7'],
    cta: 'تواصل معنا',
    ctaStyle: 'dark',
    icon: Crown,
  },
];

const faqs = [
  { q: 'هل يمكنني تغيير الباقة لاحقاً؟', a: 'نعم، يمكنك الترقية أو التخفيض في أي وقت من لوحة التحكم. يتم احتساب الفرق في السعر تلقائياً حسب المدة المتبقية من اشتراكك، دون أي رسوم إضافية.' },
  { q: 'كيف يتم حماية الفيديوهات؟', a: 'نستخدم تقنيات تشفير متقدمة (DRM) وعلامة مائية ديناميكية تحمل رقم الطالب، مع منع تسجيل الشاشة والتحميل غير المصرح به. كل فيديو ترفعه يُحمى تلقائياً عند نشره.' },
  { q: 'هل هناك عقود طويلة الأجل؟', a: 'لا توجد أي عقود ملزمة. يمكنك الاشتراك شهرياً أو سنوياً وإلغاء اشتراكك في أي وقت. الدفع السنوي يمنحك خصماً 20% مقارنة بالدفع الشهري.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'AR' | 'EN'>('AR');
  const [billing, setBilling] = useState<BillingCycle>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#f7faff] text-[#12213d]">
      <div className="relative isolate">
        <div className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[600px] w-[600px] rounded-full bg-[#eaf2ff] blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-[480px] -z-10 h-80 w-80 rounded-full bg-[#fff1e6] blur-3xl" />

        <header className="relative z-20 mx-auto flex max-w-[1320px] items-center justify-between px-8 py-6 lg:px-12">
          <a href="#home" className="flex items-center gap-3 text-[#132441]" aria-label="EduDou الرئيسية">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12356c] text-white shadow-lg shadow-[#12356c]/20">
              <BookOpen size={28} strokeWidth={2.2} />
            </span>
            <span className="text-[32px] font-extrabold tracking-[-0.06em]">EduDou</span>
          </a>

          <nav className="hidden items-center gap-12 text-[18px] font-bold text-[#50617b] lg:flex" aria-label="التنقل الرئيسي">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-3 transition-colors hover:text-[#173d7a] ${item.href === '#home' ? 'text-[#173d7a] after:absolute after:inset-x-0 after:-bottom-2 after:h-[3px] after:rounded-full after:bg-[#f47e26]' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <button
              type="button"
              onClick={() => setLanguage(language === 'AR' ? 'EN' : 'AR')}
              className="text-[16px] font-bold text-[#53627a] transition-colors hover:text-[#173d7a]"
              aria-label="تغيير اللغة"
            >
              {language} <span className="mx-1 text-[#c1cad6]">/</span> {language === 'AR' ? 'EN' : 'AR'}
            </button>
            <a href="#start" className="rounded-xl bg-[#f47e26] px-7 py-3.5 text-[16px] font-extrabold text-white shadow-[0_8px_20px_rgba(244,126,38,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#e96e16]">
              ابدأ الآن مجاناً
            </a>
          </div>

          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl p-2 text-[#173d7a] lg:hidden" aria-label="فتح القائمة">
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </header>

        {menuOpen && (
          <div className="absolute inset-x-6 top-[88px] z-30 rounded-2xl border border-[#e1e9f3] bg-white p-6 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-1 text-right text-lg font-bold text-[#30435f]">
              {navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3.5 hover:bg-[#f3f7fc]">{item.label}</a>)}
              <a href="#start" className="mt-3 rounded-xl bg-[#f47e26] px-4 py-3.5 text-center text-white">ابدأ الآن مجاناً</a>
            </nav>
          </div>
        )}

        <section id="home" className="mx-auto grid max-w-[1320px] items-center gap-14 px-8 pb-24 pt-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-12 lg:pb-32 lg:pt-20">
          <div className="order-2 text-center lg:order-1 lg:text-right">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#dce8f8] bg-white px-5 py-2.5 text-[15px] font-bold text-[#3662a1] shadow-sm">
              <ShieldCheck size={18} className="text-[#f47e26]" />
              كل ما تحتاجه لبناء مدرستك الرقمية
            </div>
            <h1 className="mx-auto max-w-[700px] text-[48px] font-extrabold leading-[1.15] tracking-[-0.055em] text-[#12213d] sm:text-6xl lg:mx-0 lg:text-[72px]">
              ابْنِ منصتك التعليمية<br className="hidden sm:block" /> <span className="text-[#1f5dcc]">بنفسك في دقائق</span>
            </h1>
            <p className="mx-auto mt-7 max-w-[620px] text-[20px] leading-9 text-[#62718a] lg:mx-0">
              منصة EduDou توفر لك كل ما تحتاجه لإطلاق مدرستك الرقمية الخاصة وحماية محتواك، بسهولة وبدون أي خبرة برمجية.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row lg:justify-start">
              <a href="#start" className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#f47e26] px-9 py-5 text-[18px] font-extrabold text-white shadow-[0_12px_24px_rgba(244,126,38,0.23)] transition-all hover:-translate-y-1 hover:bg-[#e96e16]">
                أنشئ منصتك مجاناً <ArrowLeft size={22} className="transition-transform group-hover:-translate-x-1" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#cbdaf1] bg-white px-9 py-5 text-[18px] font-extrabold text-[#2458ad] shadow-sm transition-all hover:-translate-y-1 hover:border-[#9db9e5] hover:bg-[#f6f9ff]">
                شاهد الخصائص <ChevronLeft size={22} />
              </a>
            </div>
            <div className="mt-12 grid max-w-[680px] grid-cols-3 border-t border-[#dfe7f0] pt-8">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex flex-col items-center gap-2.5 border-l border-[#e1e8f1] px-3 last:border-0 lg:items-start">
                  <Icon size={24} className="text-[#f47e26]" />
                  <strong className="text-[26px] font-extrabold text-[#1c3c70]">{value}</strong>
                  <span className="text-center text-[15px] font-bold leading-6 text-[#7b8798] lg:text-right">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 flex min-h-[460px] items-center justify-center lg:order-2 lg:min-h-[620px]">
            <div className="relative h-[380px] w-full max-w-[640px] sm:h-[480px] lg:max-w-[700px]">
              {/* Desktop / iMac mockup */}
              <div className="absolute right-[1%] top-[2%] w-[92%] rounded-[20px] border-[8px] border-[#172239] bg-[#14213a] p-1.5 shadow-[0_28px_55px_rgba(26,50,87,0.25)] sm:rounded-[26px] sm:border-[11px] sm:p-2">
                <div className="overflow-hidden rounded-[10px] bg-white sm:rounded-[14px]">
                  {/* Top bar */}
                  <div className="flex h-12 items-center justify-between border-b border-[#e8edf4] px-4 text-[11px] text-[#8190a5] sm:h-14 sm:px-5 sm:text-[13px]">
                    <div className="flex items-center gap-2.5 font-bold text-[#243756]">
                      <span className="h-6 w-6 rounded-md bg-[#f47e26] sm:h-7 sm:w-7" /> لوحة تحكم المدرس
                    </div>
                    <div className="flex items-center gap-3">
                      <span>مساعدة</span>
                      <span className="h-6 w-6 rounded-full bg-[#dce6f4]" />
                    </div>
                  </div>
                  {/* Body */}
                  <div className="flex h-[260px] sm:h-[360px]">
                    {/* Sidebar */}
                    <div className="w-[24%] bg-[#14294d] p-3 sm:p-4">
                      <div className="mb-6 flex items-center gap-1.5 text-[11px] font-bold text-white sm:text-[14px]">
                        <BookOpen size={14} /> EduDou
                      </div>
                      {['نظرة عامة', 'دوراتي', 'الطلاب', 'التحليلات', 'الإعدادات'].map((item, index) => (
                        <div key={item} className={`mb-2.5 rounded-md px-2 py-1.5 text-[10px] sm:px-3 sm:py-2 sm:text-[12px] ${index === 0 ? 'bg-[#27548f] text-white' : 'text-[#8da0bd]'}`}>
                          {item}
                        </div>
                      ))}
                    </div>
                    {/* Main content */}
                    <div className="flex-1 bg-[#f7f9fc] p-4 sm:p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <div className="text-[14px] font-extrabold text-[#1d3459] sm:text-[18px]">مرحباً، أحمد</div>
                          <div className="mt-1 text-[10px] text-[#9ba7b8] sm:text-[12px]">إليك ملخص أداء منصتك اليوم</div>
                        </div>
                        <div className="rounded-lg bg-[#f47e26] px-3 py-1.5 text-[10px] text-white sm:px-4 sm:py-2 sm:text-[12px]">+ إضافة دورة</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                        {[['الدورات', '24', '↑ 12%'], ['الطلاب', '1,284', '↑ 8%'], ['الإيرادات', '12,450', '↑ 18%']].map(([a, b, c]) => (
                          <div key={a} className="rounded-xl border border-[#e8edf4] bg-white p-3 sm:p-4">
                            <div className="text-[10px] text-[#9aa7b7] sm:text-[12px]">{a}</div>
                            <div className="mt-1.5 text-[18px] font-extrabold text-[#1c3c70] sm:text-[24px]">{b}</div>
                            <div className="mt-1 text-[10px] font-bold text-[#23a878] sm:text-[12px]">{c}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 grid grid-cols-[1.2fr_0.8fr] gap-3 sm:mt-5 sm:gap-4">
                        <div className="rounded-xl border border-[#e8edf4] bg-white p-3 sm:p-4">
                          <div className="mb-3 text-[11px] font-bold text-[#314766] sm:text-[13px]">نشاط الطلاب</div>
                          <div className="flex h-24 items-end justify-around gap-1.5 sm:h-36">
                            {[32, 45, 37, 60, 52, 70, 48, 78, 64, 83].map((height, i) => (
                              <div key={i} className="w-full rounded-t bg-[#b9d0f7]" style={{ height: `${height}%` }} />
                            ))}
                          </div>
                        </div>
                        <div className="rounded-xl border border-[#e8edf4] bg-white p-3 sm:p-4">
                          <div className="text-[11px] font-bold text-[#314766] sm:text-[13px]">نسبة الإكمال</div>
                          <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-[#2a66d2] border-l-[#e6edf8] text-[15px] font-extrabold text-[#1c3c70] sm:h-28 sm:w-28 sm:text-[20px]">
                            76%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Stand */}
                <div className="mx-auto h-1.5 w-1/4 rounded-b-full bg-[#374052]" />
              </div>

              {/* Tablet mockup */}
              <div className="absolute bottom-[0%] left-[-1%] z-10 w-[42%] rounded-[16px] border-[7px] border-[#162137] bg-white shadow-[0_22px_35px_rgba(19,38,70,0.22)] sm:rounded-[22px] sm:border-[10px]">
                <div className="overflow-hidden rounded-[9px] sm:rounded-[13px]">
                  {/* Video area */}
                  <div className="relative h-[170px] bg-[#1b3d4a] sm:h-[240px]">
                    <div className="absolute inset-0 bg-[linear-gradient(130deg,#244e5b,#0e292f)] opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#f47e26] shadow-lg sm:h-16 sm:w-16">
                        <Play size={22} fill="currentColor" className="mr-[-2px]" />
                      </div>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 rounded-md bg-[#f47e26] px-2 py-1 text-[9px] font-bold text-white sm:bottom-3.5 sm:right-3.5 sm:px-2.5 sm:py-1.5 sm:text-[11px]">
                      جاري التشغيل
                    </div>
                  </div>
                  {/* Course info */}
                  <div className="bg-white p-3 sm:p-4">
                    <div className="text-[11px] font-extrabold text-[#1c3459] sm:text-[14px]">أساسيات التسويق الرقمي</div>
                    <div className="mt-1 text-[9px] text-[#9ba7b8] sm:text-[11px]">الدرس 4 من 12</div>
                    <div className="mt-2.5 h-1.5 rounded bg-[#e9eef5]">
                      <div className="h-1.5 w-[62%] rounded bg-[#f47e26]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shadow under tablet */}
              <div className="absolute -bottom-2 left-[34%] -z-10 h-10 w-[38%] rounded-full bg-[#dce7f5] blur-xl" />
              {/* Floating chart badge */}
              <div className="absolute -right-2 bottom-[16%] flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d9e6f6] bg-white text-[#2a66d2] shadow-lg sm:h-16 sm:w-16">
                <BarChart3 size={26} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Trust bar */}
      <section className="border-t border-[#e6edf6] bg-white py-14">
        <div className="mx-auto flex max-w-[1320px] flex-wrap justify-center gap-5 px-8 text-[16px] font-bold text-[#62718a] lg:justify-between lg:px-12">
          {[['إدارة سهلة وبسيطة', LayoutDashboard], ['تجربة تعليمية متكاملة', Smartphone], ['محتوى آمن ومحمي', ShieldCheck], ['طلاب أكثر، نمو أسرع', Check]].map(([label, Icon]) => (
            <div key={label as string} className="flex items-center gap-2.5 rounded-full bg-[#f5f8fc] px-6 py-3.5">
              <Icon size={20} className="text-[#2a66d2]" /> {label as string}
            </div>
          ))}
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="relative overflow-hidden bg-[#f7faff] py-24 lg:py-32">
        <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-[#eaf2ff] blur-3xl" />
        <div className="mx-auto max-w-[1320px] px-8 lg:px-12">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#dce8f8] bg-white px-5 py-2.5 text-[15px] font-bold text-[#3662a1] shadow-sm">
              <LayoutDashboard size={18} className="text-[#f47e26]" />
              خصائص المنصة
            </div>
            <h2 className="text-[38px] font-extrabold leading-[1.2] tracking-[-0.04em] text-[#12213d] sm:text-5xl lg:text-[54px]">
              كل ما تحتاجه لإدارة مدرستك الرقمية
            </h2>
            <p className="mx-auto mt-6 max-w-[620px] text-[19px] leading-8 text-[#62718a]">
              أدوات قوية وسهلة الاستخدام تساعدك على إطلاق دوراتك وإدارتها وحمايتها وتنمية إيراداتك — كل ذلك في منصة واحدة.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc, color, bg }) => (
              <article
                key={title}
                className="group relative rounded-3xl border border-[#e6eef8] bg-white p-8 shadow-[0_4px_20px_rgba(18,40,80,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#d0e0f5] hover:shadow-[0_20px_40px_rgba(18,40,80,0.1)]"
              >
                <span
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: bg, color }}
                >
                  <Icon size={30} strokeWidth={2.2} />
                </span>
                <h3 className="text-[22px] font-extrabold text-[#1c3459]">{title}</h3>
                <p className="mt-3 text-[16px] leading-7 text-[#6b788f]">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2a66d2] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  اعرف المزيد <ChevronLeft size={16} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase features */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] space-y-28 px-8 lg:space-y-36 lg:px-12">
          {showcaseFeatures.map(({ badge, title, desc, points, icon: Icon }, index) => (
            <div key={title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-[#fff1e6] px-5 py-2.5 text-[14px] font-bold text-[#c25a0c]">
                  <Icon size={18} /> {badge}
                </div>
                <h3 className="text-[32px] font-extrabold leading-[1.25] tracking-[-0.03em] text-[#12213d] sm:text-[40px]">{title}</h3>
                <p className="mt-5 max-w-[520px] text-[18px] leading-8 text-[#62718a]">{desc}</p>
                <ul className="mt-8 space-y-4">
                  {points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-[17px] font-bold text-[#2c3e5d]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e6f7f0] text-[#23a878]">
                        <Check size={16} strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl border border-[#e6eef8] bg-gradient-to-br from-[#f3f7fc] to-[#eaf2ff] p-8 shadow-[0_20px_45px_rgba(18,40,80,0.08)]">
                  {index === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center gap-5">
                      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#12356c] text-white shadow-xl">
                        <Lock size={44} strokeWidth={2} />
                      </div>
                      <div className="w-full space-y-3">
                        {[['الفيديو الأول.mp4', 'محمي'], ['الدرس الثاني.pdf', 'محمي'], ['ملحق إضافي.zip', 'محمي']].map(([file, status]) => (
                          <div key={file} className="flex items-center justify-between rounded-xl border border-[#dce8f8] bg-white px-4 py-3 text-[14px] font-bold text-[#3a4d6b] shadow-sm">
                            <span className="flex items-center gap-2.5"><FileText size={16} /> {file}</span>
                            <span className="flex items-center gap-1.5 rounded-full bg-[#e6f7f0] px-3 py-1 text-[12px] text-[#23a878]"><ShieldCheck size={13} /> {status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full flex-col justify-center gap-5">
                      <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">
                        <div>
                          <div className="text-[13px] text-[#9ba7b8]">معدل الإكمال</div>
                          <div className="mt-1 text-[28px] font-extrabold text-[#1c3c70]">76%</div>
                        </div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e6f7f0] text-[#23a878]"><TrendingUp size={26} /></div>
                      </div>
                      <div className="rounded-2xl bg-white p-5 shadow-sm">
                        <div className="mb-3 text-[13px] font-bold text-[#314766]">نمو الإيرادات</div>
                        <div className="flex h-32 items-end justify-around gap-2">
                          {[40, 55, 48, 70, 62, 85, 78, 95].map((h, i) => (
                            <div key={i} className="w-full rounded-t bg-gradient-to-t from-[#b9d0f7] to-[#2a66d2]" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[['ساعات المشاهدة', '4,280'], ['طلاب نشطون', '1,284']].map(([label, val]) => (
                          <div key={label} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                            <div className="text-[22px] font-extrabold text-[#1c3c70]">{val}</div>
                            <div className="mt-1 text-[12px] text-[#9ba7b8]">{label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="relative overflow-hidden bg-[#f7faff] py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full bg-[#fff1e6] blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#eaf2ff] blur-3xl" />
        <div className="mx-auto max-w-[1320px] px-8 lg:px-12">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#dce8f8] bg-white px-5 py-2.5 text-[15px] font-bold text-[#3662a1] shadow-sm">
              <CreditCard size={18} className="text-[#f47e26]" />
              باقات الأسعار
            </div>
            <h2 className="text-[38px] font-extrabold leading-[1.2] tracking-[-0.04em] text-[#12213d] sm:text-5xl lg:text-[54px]">
              خطط أسعار مرنة تناسب رحلتك التعليمية
            </h2>
            <p className="mx-auto mt-6 max-w-[640px] text-[19px] leading-8 text-[#62718a]">
              اختر الباقة المناسبة لشغفك وأعداد طلابك، وابدأ في تنمية تجارتك الرقمية بدون تكاليف خفية.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="relative flex items-center rounded-full border border-[#dce8f8] bg-white p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setBilling('monthly')}
                className={`relative z-10 rounded-full px-7 py-3 text-[16px] font-extrabold transition-colors ${billing === 'monthly' ? 'text-white' : 'text-[#53627a]'}`}
              >
                دفع شهري
              </button>
              <button
                type="button"
                onClick={() => setBilling('yearly')}
                className={`relative z-10 rounded-full px-7 py-3 text-[16px] font-extrabold transition-colors ${billing === 'yearly' ? 'text-white' : 'text-[#53627a]'}`}
              >
                دفع سنوي
              </button>
              <span
                className="absolute inset-y-1.5 rounded-full bg-[#12356c] transition-all duration-300 ease-in-out"
                style={{ width: 'calc(50% - 6px)', right: billing === 'yearly' ? '6px' : 'calc(50% + 0px)' }}
              />
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff1e6] px-4 py-2 text-[14px] font-bold text-[#c25a0c]">
              <Sparkles size={15} /> خصم 20% عند الدفع السنوي
            </span>
          </div>

          {/* Pricing cards */}
          <div className="mt-16 grid items-start gap-7 lg:grid-cols-3">
            {pricingPlans.map((plan) => {
              const price = billing === 'monthly' ? plan.price.monthly : plan.price.yearly;
              const isOutline = plan.ctaStyle === 'outline';
              const isPrimary = plan.ctaStyle === 'primary';
              const isDark = plan.ctaStyle === 'dark';
              const Icon = plan.icon;
              return (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 lg:p-10 ${
                    plan.popular
                      ? 'border-[#f47e26] bg-white shadow-[0_20px_50px_rgba(244,126,38,0.15)] lg:-translate-y-4 lg:scale-[1.03]'
                      : 'border-[#e6eef8] bg-white shadow-[0_4px_20px_rgba(18,40,80,0.04)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(18,40,80,0.08)]'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 right-1/2 translate-x-1/2 rounded-full bg-[#f47e26] px-5 py-1.5 text-[13px] font-extrabold text-white shadow-lg">
                      الأكثر طلباً
                    </span>
                  )}
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${plan.popular ? 'bg-[#fff1e6] text-[#f47e26]' : 'bg-[#e8f0fe] text-[#2a66d2]'}`}>
                    <Icon size={28} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-[24px] font-extrabold text-[#1c3459]">{plan.name}</h3>
                  <p className="mt-2 min-h-[48px] text-[15px] leading-7 text-[#7b8798]">{plan.desc}</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-[44px] font-extrabold leading-none text-[#12213d]">{price.toLocaleString('en-US')}</span>
                    <span className="mb-1 text-[17px] font-bold text-[#7b8798]">ج.م / شهرياً</span>
                  </div>
                  {billing === 'yearly' && plan.price.yearly > 0 && (
                    <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-[#e6f7f0] px-3 py-1 text-[12px] font-bold text-[#23a878]">
                      <Check size={13} strokeWidth={3} /> وفّر {(plan.price.monthly - plan.price.yearly) * 12} ج.م سنوياً
                    </span>
                  )}
                  <ul className="mt-7 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[16px] font-bold text-[#3a4d6b]">
                        <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${plan.popular ? 'bg-[#fff1e6] text-[#f47e26]' : 'bg-[#e6f7f0] text-[#23a878]'}`}>
                          <Check size={14} strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#start"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-[16px] font-extrabold transition-all hover:-translate-y-0.5 ${
                      isOutline
                        ? 'border-2 border-[#2a66d2] bg-transparent text-[#2a66d2] hover:bg-[#f3f7fc]'
                        : isPrimary
                          ? 'bg-[#f47e26] text-white shadow-[0_10px_24px_rgba(244,126,38,0.28)] hover:bg-[#e96e16]'
                          : 'bg-[#12356c] text-white hover:bg-[#0e2a54]'
                    }`}
                  >
                    {plan.cta} {isPrimary && <ArrowLeft size={18} />}
                  </a>
                </article>
              );
            })}
          </div>

          {/* Payment methods note */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px] font-bold text-[#9ba7b8]">
            <span className="flex items-center gap-2"><Mail size={16} /> دعم عبر البريد</span>
            <span className="flex items-center gap-2"><MessageCircle size={16} /> دعم واتساب</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} /> دفع آمن ومشفّر</span>
            <span className="flex items-center gap-2"><CreditCard size={16} /> مدى وVisa وMastercard</span>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section id="about" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[820px] px-8 lg:px-12">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#dce8f8] bg-[#f7faff] px-5 py-2.5 text-[15px] font-bold text-[#3662a1] shadow-sm">
              <HelpCircle size={18} className="text-[#f47e26]" />
              الأسئلة الشائعة
            </div>
            <h2 className="text-[34px] font-extrabold leading-[1.25] tracking-[-0.03em] text-[#12213d] sm:text-[44px]">
              هل لديك سؤال؟ لدينا الإجابة
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-8 text-[#62718a]">
              جمعنا لك أكثر الأسئلة شيوعاً حول منصة EduDou وباقات الأسعار.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[#f0d8c0] bg-[#fffaf5] shadow-sm' : 'border-[#e6eef8] bg-[#f7faff] hover:border-[#d0e0f5]'}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[18px] font-extrabold text-[#1c3459]">{faq.q}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#f47e26] text-white' : 'bg-white text-[#2a66d2]'}`}>
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[16px] leading-8 text-[#62718a]">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[16px] text-[#7b8798]">لم تجد إجابتك؟</p>
            <a href="#start" className="mt-3 inline-flex items-center gap-2 text-[17px] font-extrabold text-[#2a66d2] hover:text-[#173d7a]">
              تواصل مع فريق الدعم <ChevronLeft size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="relative overflow-hidden bg-[#12356c] py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#1f5dcc]/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#f47e26]/20 blur-3xl" />
        <div className="relative mx-auto max-w-[820px] px-8 text-center lg:px-12">
          <Award size={40} className="mx-auto mb-6 text-[#f47e26]" />
          <h2 className="text-[36px] font-extrabold leading-[1.25] tracking-[-0.03em] text-white sm:text-[46px]">
            جاهز لإطلاق مدرستك الرقمية؟
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[19px] leading-8 text-[#bcd0ee]">
            انضم إلى آلاف المدرسين الذين يثقون بـ EduDou لإدارة وحماية محتواهم التعليمي.
          </p>
          <a href="#home" className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#f47e26] px-10 py-5 text-[18px] font-extrabold text-white shadow-[0_12px_30px_rgba(244,126,38,0.35)] transition-all hover:-translate-y-1 hover:bg-[#e96e16]">
            ابدأ الآن مجاناً <ArrowLeft size={22} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
