// lang.js

/* =========================
   TEXTS: Page (EN / HE / AR)
   ========================= */
const LANG_TEXTS = {
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      title: "Turning Curiosity into Code ✨",
      intro:
        "Hi, I’m Bashar — a passionate software engineering student driven by curiosity and the thrill of building things that matter. I’m constantly learning, experimenting, and crafting web apps that blend clean code, performance, and great user experience.",
      tagline: "↓ Explore my projects and see my journey in action ↓",
      cta1: "See My Projects",
      cta2: "Contact Me",
    },
    about: {
      title: "About Me",
      text: "My name is Bashar Shoumali, I’m 26 years old and currently a third-year Software Engineering student at Braude College. I’m passionate about learning new technologies, exploring programming languages, and improving my coding skills every day.",
    },
    work: {
      title: "Work Experience",
      items: [
        "Worked as <strong>Deputy Manager</strong> at Rami Levy, Akko, leading operations and team coordination.",
        "Sales and customer service experience at an <strong>e-cigarette shop</strong>, helping people transition away from smoking.",
        "Served as <strong>Python Exercise Checker</strong> for the 'Introduction to Computer Science' course at Braude College for 2 semesters.",
        "Gained skills in communication, discipline, and problem-solving while balancing work and studies.",
      ],
    },
    education: {
      title: "Education",
      items: [
        "Studied <strong>Automotive Engineering</strong> in Germany for 3 years before COVID-19 disrupted plans.",
        "Currently in the <strong>3rd year of Software Engineering</strong> at Braude College.",
        "Maintaining a <strong>GPA of 83.52</strong> across <strong>93.5 credit points</strong>.",
      ],
    },
    projects: {
      title: "Projects",
      note: "Click any project logo to view its source code on GitHub.",
    },
    skills: {
      title: "Skills",
      strengths: [
        "💡 <strong>Able to work</strong> under <strong>pressure</strong> and meet tight deadlines",
        "🤖 <strong>Use AI</strong> tools to enhance code quality and accelerate development",
        "🧠 Constantly leverage <strong>AI</strong> (e.g. ChatGPT) for learning and debugging",
        "👥 <strong>Led a 5-person team</strong> to deliver a successful mid-term academic project (BPrark Project)",
        "📚 <strong>Self-learner</strong> with strong motivation and discipline",
        "🎓 Learned <strong>React.js</strong> and <strong>Node.js</strong> independently through Udemy courses",
        "🛠️ Self-taught in <strong>MySQL</strong>, <strong>GitHub</strong>, and other modern development tools",
      ],
    },
    contact: {
      title: "Contact Me",
      email: "Email Me",
      call: "Call Me",
      whatsapp: "WhatsApp",
    },
  },

  he: {
    dir: "rtl",
    nav: {
      home: "בית",
      about: "עליי",
      projects: "פרויקטים",
      skills: "כישורים",
      contact: "צור קשר",
    },
    hero: {
      title: "הופך סקרנות לקוד ✨",
      intro:
        "היי, אני בשאר — סטודנט להנדסת תוכנה מלא תשוקה, מונע מסקרנות ומהרצון לבנות דברים משמעותיים. אני כל הזמן לומד, מתנסה, ובונה יישומי ווב שמשלבים קוד נקי, ביצועים וחוויית משתמש מעולה.",
      tagline: "↓ גלו את הפרויקטים שלי וראו את המסע שלי בפעולה ↓",
      cta1: "ראו את הפרויקטים שלי",
      cta2: "צרו קשר",
    },
    about: {
      title: "עליי",
      text: "שמי בשאר שומאלי, בן 26, סטודנט שנה שלישית להנדסת תוכנה במכללת בראודה. אני אוהב ללמוד טכנולוגיות חדשות, לחקור שפות תכנות ולשפר את כישורי התכנות שלי בכל יום.",
    },
    work: {
      title: "ניסיון תעסוקתי",
      items: [
        "עבדתי כסגן מנהל בסניף <strong>רמי לוי בעכו</strong>, הובלת תפעול ותיאום צוותים.",
        "ניסיון במכירות ושירות לקוחות ב<strong>חנות לסיגריות אלקטרוניות</strong>, סיוע לאנשים להפסיק לעשן.",
        "כיהנתי כ<strong>בודק תרגילי פייתון</strong> בקורס 'מבוא למדעי המחשב' בבראודה במשך שני סמסטרים.",
        "חיזוק תקשורת, משמעת ופתרון בעיות — תוך איזון בין עבודה ללימודים.",
      ],
    },
    education: {
      title: "השכלה",
      items: [
        "למדתי <strong>הנדסת רכב</strong> בגרמניה במשך שלוש שנים עד שהקורונה שיבשה את התוכניות.",
        "כיום בשנה <strong>שלישית</strong> להנדסת תוכנה במכללת בראודה.",
        "ממוצע <strong>83.52</strong> ב-<strong>93.5 נקודות זכות</strong>.",
      ],
    },
    projects: {
      title: "פרויקטים",
      note: "לחץ על לוגו של כל פרויקט כדי לראות את הקוד ב-GitHub.",
    },
    skills: {
      title: "כישורים",
      strengths: [
        "💡 <strong>יכולת עבודה</strong> תחת <strong>לחץ</strong> ועמידה בלוחות זמנים צפופים",
        "🤖 שימוש ב<strong>כלי AI</strong> לשיפור איכות הקוד והאצת הפיתוח",
        "🧠 הסתמכות קבועה על <strong>AI</strong> (למשל ChatGPT) ללמידה ודיבוג",
        "👥 <strong>ניהול צוות של 5 סטודנטים</strong> והובלת פרויקט אקדמי מוצלח (BPrark Project)",
        "📚 <strong>לומד עצמאי</strong> עם מוטיבציה גבוהה ומשמעת עצמית",
        "🎓 למדתי <strong>React.js</strong> ו-<strong>Node.js</strong> בקורסים ב-Udemy",
        "🛠️ לימוד עצמי של <strong>MySQL</strong>, <strong>GitHub</strong> וכלים מודרניים נוספים",
      ],
    },
    contact: {
      title: "צור קשר",
      email: "שלחו לי מייל",
      call: "התקשרו אליי",
      whatsapp: "וואטסאפ",
    },
  },

  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "عني",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "اتصل",
    },
    hero: {
      title: "تحويل الفضول إلى كود ✨",
      intro:
        "مرحباً، أنا بشار — طالب هندسة برمجيات شغوف، مدفوع بالفضول وحب بناء الأشياء التي تحدث فرقاً. أتعلم باستمرار وأجرب وأطوّر تطبيقات ويب تجمع بين الكود النظيف والأداء وتجربة المستخدم الرائعة.",
      tagline: "↓ اكتشف مشاريعي وشاهد رحلتي قيد التنفيذ ↓",
      cta1: "شاهد مشاريعي",
      cta2: "اتصل بي",
    },
    about: {
      title: "عني",
      text: "اسمي بشار شومالي، عمري 26 سنة وأدرس حالياً في السنة الثالثة هندسة البرمجيات في كلية براودة. أحب تعلّم التقنيات الجديدة واستكشاف لغات البرمجة وتطوير مهاراتي يومياً.",
    },
    work: {
      title: "الخبرة العملية",
      items: [
        "عملت كنائب مدير في <strong>رامي ليفي، عكّا</strong>، مسؤولاً عن التشغيل وتنسيق الفرق.",
        "خبرة في المبيعات وخدمة الزبائن في <strong>متجر للسجائر الإلكترونية</strong>، ومساعدة الناس على الإقلاع عن التدخين.",
        "راجعت تمارين <strong>بايثون</strong> لمساق 'مقدمة لعلوم الحاسوب' في كلية براودة لمدة فصلين.",
        "طوّرت مهارات التواصل والانضباط وحلّ المشكلات أثناء الموازنة بين العمل والدراسة.",
      ],
    },
    education: {
      title: "التعليم",
      items: [
        "درست <strong>هندسة السيارات</strong> في ألمانيا لمدة 3 سنوات قبل أن تعطل الجائحة خططي.",
        "حالياً في <strong>السنة الثالثة</strong> من هندسة البرمجيات في كلية براودة.",
        "أحافظ على معدل <strong>83.52</strong> عبر <strong>93.5 نقطة</strong>.",
      ],
    },
    projects: {
      title: "المشاريع",
      note: "اضغط على شعار أي مشروع لعرض الكود على GitHub.",
    },
    skills: {
      title: "المهارات",
      strengths: [
        "💡 <strong>القدرة على العمل</strong> تحت <strong>الضغط</strong> والوفاء بالمواعيد النهائية الصعبة",
        "🤖 استخدام <strong>أدوات الذكاء الاصطناعي</strong> لتحسين جودة الكود وتسريع التطوير",
        "🧠 الاستفادة المستمرة من <strong>الذكاء الاصطناعي</strong> (مثل ChatGPT) للتعلم وتصحيح الأخطاء",
        "👥 <strong>قيادة فريق مكوّن من 5 أشخاص</strong> لتنفيذ مشروع أكاديمي ناجح (BPrark Project)",
        "📚 <strong>متعطش للتعلم الذاتي</strong> باندفاع قوي وانضباط عالي",
        "🎓 تعلمت <strong>React.js</strong> و<strong>Node.js</strong> بشكل مستقل عبر دورات Udemy",
        "🛠️ علّمت نفسي <strong>MySQL</strong>، <strong>GitHub</strong>، وأدوات تطوير حديثة أخرى",
      ],
    },
    contact: {
      title: "اتصل بي",
      email: "راسلني بالبريد",
      call: "اتصل بي",
      whatsapp: "واتساب",
    },
  },
};

/* =====================================
   TEXTS: Projects per slug (EN / HE / AR)
   ===================================== */
const PROJECT_TEXTS = {
  en: {
    bpark: {
      title: "BPark Parking System",
      stack: "JavaFX • MySQL • OCSF",
      description:
        "A college project: a smart parking system built using JavaFX, MySQL, and OCSF for client-server communication.",
    },
    nailsbychristeen: {
      title: "Nails by Christeen",
      stack: "React • Node.js • MySQL",
      description:
        "An appointment booking and stock management system for a nail salon, designed to help the owner run the business smoothly and clearly.",
    },
  },
  he: {
    bpark: {
      title: "מערכת החניה BPark",
      stack: "JavaFX • MySQL • OCSF",
      description:
        "פרויקט אקדמי: מערכת חניה חכמה שנבנתה עם JavaFX,‏ MySQL ו-OCSF לתקשורת לקוח-שרת.",
    },
    nailsbychristeen: {
      title: "Nails by Christeen",
      stack: "React • Node.js • MySQL",
      description:
        "מערכת לקביעת תורים וניהול מלאי לסלון ציפורניים, המסייעת לבעלת העסק לנהל הכול בצורה פשוטה וברורה.",
    },
  },
  ar: {
    bpark: {
      title: "نظام مواقف BPark",
      stack: "JavaFX • MySQL • OCSF",
      description:
        "مشروع جامعي: نظام مواقف ذكي مبني باستخدام JavaFX وMySQL وOCSF لاتصال العميل-الخادم.",
    },
    nailsbychristeen: {
      title: "Nails by Christeen",
      stack: "React • Node.js • MySQL",
      description:
        "نظام لحجز المواعيد وإدارة المخزون لصالون أظافر يساعد صاحبة الصالون على إدارة العمل بسهولة ووضوح.",
    },
  },
};

/* ==========================================
   Safe getters (avoid errors if nodes missing)
   ========================================== */
function $(sel) {
  return document.querySelector(sel);
}
function $all(sel) {
  return Array.from(document.querySelectorAll(sel));
}

/* ==========================================
   Apply language to the static page sections
   Also sets dir/lang on <html> and notifies app
   ========================================== */
function applyLanguage(lang) {
  const pack = LANG_TEXTS[lang] || LANG_TEXTS.en;

  // <html> attributes
  document.documentElement.dir =
    pack.dir || (lang === "he" || lang === "ar" ? "rtl" : "ltr");
  document.documentElement.lang = lang;

  // Navbar
  [
    ["#site-nav a[href='#home']", pack.nav?.home],
    ["#site-nav a[href='#about']", pack.nav?.about],
    ["#site-nav a[href='#projects']", pack.nav?.projects],
    ["#site-nav a[href='#skills']", pack.nav?.skills],
    ["#site-nav a[href='#contact']", pack.nav?.contact],
  ].forEach(([sel, txt]) => {
    const el = document.querySelector(sel);
    if (el && txt) el.textContent = txt;
  });

  // Hero
  const heroTitle = document.querySelector("#home-title");
  if (heroTitle && pack.hero?.title) heroTitle.textContent = pack.hero.title;

  const heroIntroP = document.querySelector(".hero-text p");
  if (heroIntroP && pack.hero?.intro) heroIntroP.textContent = pack.hero.intro;

  const tag = document.querySelector(".tagline");
  if (tag && pack.hero?.tagline) tag.textContent = pack.hero.tagline;

  const cta1 = document.querySelector(".cta-row a.cta");
  if (cta1 && pack.hero?.cta1) cta1.textContent = pack.hero.cta1;

  const cta2 = document.querySelector(".cta-row a.secondary");
  if (cta2 && pack.hero?.cta2) cta2.textContent = pack.hero.cta2;

  // About
  const aboutTitle = document.querySelector("#about-title");
  if (aboutTitle && pack.about?.title)
    aboutTitle.textContent = pack.about.title;

  const aboutText = document.querySelector("#about p");
  if (aboutText && pack.about?.text) aboutText.textContent = pack.about.text;

  // Work (bullets)
  const workTitle = document.querySelector("#work-title");
  if (workTitle && pack.work?.title) workTitle.textContent = pack.work.title;

  const workList = document.querySelector("#work ul");
  if (workList && Array.isArray(pack.work?.items)) {
    workList.innerHTML = pack.work.items.map((li) => `<li>${li}</li>`).join("");
  }

  // Education (bullets)
  const eduTitle = document.querySelector("#education-title");
  if (eduTitle && pack.education?.title)
    eduTitle.textContent = pack.education.title;

  const eduList = document.querySelector("#education ul");
  if (eduList && Array.isArray(pack.education?.items)) {
    eduList.innerHTML = pack.education.items
      .map((li) => `<li>${li}</li>`)
      .join("");
  }

  // Projects (title + note)
  const projTitle = document.querySelector("#projects-title");
  if (projTitle && pack.projects?.title)
    projTitle.textContent = pack.projects.title;

  const projNote = document.querySelector(".projects-note");
  if (projNote && pack.projects?.note)
    projNote.textContent = pack.projects.note;

  // Skills (section title)
  const skillsTitle = document.querySelector("#skills-title");
  if (skillsTitle && pack.skills?.title)
    skillsTitle.textContent = pack.skills.title;

  // **NEW: Professional Strengths (title + list)**
  const strengthsH3 = document.querySelector(
    ".skills-category.soft-skills-block h3"
  );
  if (strengthsH3 && pack.skills?.strengthsTitle)
    strengthsH3.textContent = pack.skills.strengthsTitle;

  const strengthsUl = document.querySelector(".soft-skills-list");
  if (strengthsUl && Array.isArray(pack.skills?.strengths)) {
    strengthsUl.innerHTML = pack.skills.strengths
      .map((li) => `<li>${li}</li>`)
      .join("");
  }

  // Contact
  const contactTitle = document.querySelector("#contact-title");
  if (contactTitle && pack.contact?.title)
    contactTitle.textContent = pack.contact.title;

  const contactBtns = Array.from(
    document.querySelectorAll("#contact .contact-buttons a")
  );
  if (contactBtns[0] && pack.contact?.email)
    contactBtns[0].innerHTML = `<img src="./icons/mail.jpg" alt="Email icon" /> ${pack.contact.email}`;
  if (contactBtns[1] && pack.contact?.call)
    contactBtns[1].innerHTML = `<img src="./icons/call.jpg" alt="Phone icon" /> ${pack.contact.call}`;
  if (contactBtns[2] && pack.contact?.whatsapp)
    contactBtns[2].innerHTML = `<img src="./icons/whatsapp.jpg" alt="WhatsApp icon" /> ${pack.contact.whatsapp}`;

  // Notify others (e.g., app.js) to re-render dynamic content (Projects)
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}
// init + flag handlers
(function () {
  let lang = "en";
  try {
    lang = localStorage.getItem("selectedLang") || "en";
  } catch {}
  applyLanguage(lang);

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-switcher [data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = btn.dataset.lang;
        applyLanguage(chosen);
        try {
          localStorage.setItem("selectedLang", chosen);
        } catch {}
      });
    });
  });
})();
