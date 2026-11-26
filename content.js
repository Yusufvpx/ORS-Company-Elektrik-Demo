/* =========================================================
   ORS Company — site məzmunu / site içeriği / site content
   İletişim bilgilerini ve metinleri buradan değiştirin.
   ========================================================= */

window.ORS_CONFIG = {
  name: "ORS Company",
  // ÖRNEK (UYDURMA) BİLGİLER — gerçek şirket bilgileri gelince değiştirin.
  phone1: "+994 12 400 00 01",
  phone2: "+994 50 400 00 02",
  whatsapp: "994504000002",
  email1: "sales@ors-company.az",
  email2: "info@ors-company.az",
  website: "www.ors-company.az",
  address: {
    az: "Heydər Əliyev prospekti 115, ORS Biznes Mərkəzi, 7-ci mərtəbə, Bakı AZ1029",
    tr: "Haydar Aliyev Prospekti 115, ORS İş Merkezi, 7. Kat, Bakü AZ1029",
    en: "115 Heydar Aliyev Avenue, ORS Business Centre, 7th floor, Baku AZ1029"
  },
  mapQuery: "Heydər Əliyev prospekti 115, Bakı",
  // Fotoğraflar: CC0 / kamu malı (kaynaklar CREDITS.md içinde)
  heroImages: ["panel-terminals", "robotic-automation", "transformer", "scada-engineers", "substation-yard"],
  aboutImage: "electrician-panel",
  brands: {
    automation: ["Siemens", "ABB", "Schneider Electric", "Danfoss", "Wago"],
    motors: ["Siemens", "ABB", "Danfoss", "Hamak", "Emtaş", "Watt", "Volt"],
    transformers: ["Eren", "Best", "Ulusoy", "Atef"],
    generators: ["Cat", "Aksa", "Genpower"]
  },
  projects: [
    { id: "panels", images: ["panel-terminals", "circuit-breakers"] },
    { id: "substation", images: ["substation-yard", "substation-equipment", "substation-insulators"] },
    { id: "transformer", images: ["transformer", "transformer-bushings"] },
    { id: "cabling", images: ["substation-cables", "cable-reel"] },
    { id: "automation", images: ["robotic-automation", "indicator-lights"] },
    { id: "scada", images: ["scada-engineers", "engineer-pcb"] }
  ]
};

window.ORS_I18N = {
  /* ------------------------------ AZƏRBAYCAN ------------------------------ */
  az: {
    langName: "AZ",
    meta: { title: "ORS Company — Elektrik avadanlıqları və avtomatika" },
    nav: { services: "Xidmətlər", products: "Məhsullar", projects: "Layihələr", brands: "Brendlər", about: "Haqqımızda", contact: "Əlaqə" },
    common: { quote: "Qiymət təklifi alın", write: "Bizə yazın", more: "Ətraflı", photos: "foto" },
    hero: {
      eyebrow: "Elektrik avadanlıqları · Panel istehsalı · Sənaye avtomatikası",
      title: "Elektrik avadanlığı və avtomatika —",
      accent: "bir mənbədən.",
      text: "ORS sənaye müəssisələrinə, enerji və infrastruktur obyektlərinə elektrik avadanlıqları tədarük edir, paylayıcı və MCC panellərini hazırlayır, PLC/SCADA əsaslı avtomatika sistemlərini layihələndirib proqramlaşdırır. Montajı, istismara verməni və sonrakı texniki servisi də özümüz həyata keçiririk.",
      cta2: "Xidmətlərə bax",
      pills: ["Elektrik avadanlıqları", "PLC və SCADA", "MCC panelləri", "Tezlik çeviriciləri", "Servis"],
      captions: ["Panel daxilində klemm birləşmələri", "Robotlaşdırılmış istehsal xətti", "Güc transformatoru", "SCADA və idarəetmə sistemləri", "Açıq paylayıcı qurğu"]
    },
    sectors: {
      title: "Kimlər üçün işləyirik",
      items: [
        ["Enerji", "Paylayıcı qurğular, transformator yarımstansiyaları və generatorlar."],
        ["Sənaye müəssisələri", "Zavodlar, emal sexləri və istehsal xətləri."],
        ["Mədən və emal", "Nasos, konveyer və proses xətlərinin elektrik və avtomatikası."],
        ["Bina və infrastruktur", "Ticarət obyektləri, su təchizatı və nasos stansiyaları."]
      ]
    },
    services: {
      eyebrow: "Xidmətlər",
      title: "Tədarükdən istismara qədər elektrik və avtomatika",
      lead: "Avadanlığı seçir və tədarük edirik, panelləri hazırlayırıq, sistemi proqramlaşdırıb obyektdə işə salırıq — sonra da ehtiyat hissələri və servislə yanınızda oluruq.",
      items: [
        { icon: "bolt", title: "Elektrik avadanlıqlarının satışı", text: "Aparıcı istehsalçılardan aşağı və orta gərginlik avadanlıqlarının tədarükü.", list: ["Avtomatik açarlar və kontaktorlar", "Rele və qoruma avadanlığı", "Kabel və kabel trasları", "Ölçü cihazları"] },
        { icon: "cpu", title: "Sənaye avtomatikası", text: "PLC, HMI və SCADA əsaslı idarəetmə sistemlərinin layihələndirilməsi və proqramlaşdırılması.", list: ["PLC proqramlaşdırma", "HMI / SCADA ekranları", "Uzaqdan monitorinq", "Mövcud sistemlərin modernləşdirilməsi"] },
        { icon: "panel", title: "Panel istehsalı", text: "Layihəyə uyğun paylayıcı, MCC və avtomatika panellərinin yığılması və sınağı.", list: ["Əsas paylayıcı panellər (MDP)", "Mühərrik idarəetmə mərkəzləri (MCC)", "PLC və avtomatika panelləri", "Kompensasiya panelləri"] },
        { icon: "motor", title: "İntiqallar və mühərrik idarəsi", text: "Mühərriklər üçün tezlik çeviriciləri, yumşaq işəsalma və enerjiyə qənaət həlləri.", list: ["Tezlik çeviriciləri (VFD)", "Yumşaq işəsalıcılar", "Elektrik mühərrikləri", "Enerji səmərəliliyi auditi"] },
        { icon: "wrench", title: "Elektrik montajı", text: "Obyektdə panellərin quraşdırılması, kabel trasları, kabelləmə və qoşulma işləri.", list: ["Panel montajı", "Kabel traslarının çəkilməsi", "Kabelləmə və terminasiya", "Torpaqlama və ildırımdan mühafizə"] },
        { icon: "shield", title: "İstismara vermə və servis", text: "Sınaq, işə salma, texniki xidmət və ehtiyat hissələri ilə uzunmüddətli dəstək.", list: ["Sınaq və işə salma", "Planlı texniki xidmət", "Ehtiyat hissələrinin tədarükü", "Qəza zamanı operativ dəstək"] }
      ]
    },
    products: {
      eyebrow: "Məhsullar",
      title: "Elektrik avadanlıqları kataloqu",
      lead: "Anbardan və sifarişlə tədarük etdiyimiz əsas məhsul qrupları. Siyahıda olmayan avadanlıq üçün sorğu göndərin.",
      cta: "Məhsul sorğusu göndərin",
      groups: [
        ["Avtomatika", ["PLC və I/O modulları", "HMI operator panelləri", "Sənaye kommunikasiya modulları", "Enerji təchizatı blokları"]],
        ["İntiqallar", ["Tezlik çeviriciləri (VFD)", "Yumşaq işəsalıcılar", "Servo sürücülər", "Filtr və drossellər"]],
        ["Kommutasiya və qoruma", ["Avtomatik açarlar (MCB, MCCB, ACB)", "Kontaktorlar və termik relelər", "Diferensial qoruma", "Qoruyucu releləri"]],
        ["Panellər", ["Paylayıcı panellər", "MCC panelləri", "OG kamera və panelləri", "Kompensasiya panelləri"]],
        ["Mühərrik və generatorlar", ["Asinxron elektrik mühərrikləri", "Partlayışdan qorunan mühərriklər", "Dizel generatorlar", "ATS panelləri"]],
        ["Transformatorlar", ["Güc transformatorları", "Quru tip transformatorlar", "Ölçü transformatorları", "Kompakt yarımstansiyalar"]],
        ["Kabel və montaj", ["Güc və idarəetmə kabelləri", "Kabel trasları", "Kabel muftaları", "Klemmlər və aksesuarlar"]],
        ["Ölçmə və sensorlar", ["Enerji analizatorları", "Təzyiq və səviyyə sensorları", "Temperatur ötürücüləri", "Yanğın və təhlükəsizlik sistemləri"]]
      ]
    },
    brands: {
      eyebrow: "Brendlər",
      title: "Aparıcı istehsalçıların avadanlıqları",
      lead: "Etibarlı qlobal və regional brendlərin avadanlıqlarını tədarük edir, layihənizə uyğun olanı seçməyə kömək edirik.",
      automation: "Avtomatika və intiqallar",
      motors: "Elektrik mühərrikləri",
      transformers: "Transformatorlar",
      generators: "Generatorlar"
    },
    projects: {
      eyebrow: "Layihələr",
      title: "Obyektlərdən işlərimiz",
      items: {
        panels: ["Paylayıcı panellərin istehsalı", "Avtomatik açarlar, klemmlər və kabelləmə ilə paylayıcı və avtomatika panellərinin yığılması."],
        substation: ["Yarımstansiya və açıq paylayıcı qurğu", "Yüksək gərginlik avadanlığının, açarların və izolyatorların montajı və sınağı."],
        transformer: ["Güc transformatorlarının quraşdırılması", "Transformatorların tədarükü, yerində quraşdırılması, qoşulması və istismara verilməsi."],
        cabling: ["Kabel xətləri və kabelləmə", "Güc və idarəetmə kabellərinin çəkilməsi, kabel kanalları və terminasiya işləri."],
        automation: ["İstehsal xəttinin avtomatlaşdırılması", "Robot və mexanizmlərin PLC ilə idarəsi, siqnalizasiya və operator panelləri."],
        scada: ["SCADA və idarəetmə sistemləri", "Proses məlumatlarının toplanması, uzaqdan monitorinq və idarəetmə proqramlarının hazırlanması."]
      }
    },
    about: {
      eyebrow: "Haqqımızda",
      title: "Elektrik və avtomatika üzrə təcrübəli mühəndis komandası",
      text: "ORS Company Azərbaycan və Türkiyədə elektrik enerjisi və sənaye avtomatikası sahələrində çalışan mühəndislərdən ibarətdir. Avadanlıq tədarükü, panel istehsalı, proqramlaşdırma, montaj və servisi bir yerdən təqdim edirik — layihənin hər mərhələsində bir məsul mühəndis sizinlə əlaqədə olur.",
      points: ["Azərbaycan və Türkiyədə təcrübə", "Aparıcı brendlərin orijinal avadanlığı", "Panel istehsalı və sınağı", "PLC / SCADA proqramlaşdırma", "Obyektdə montaj və işə salma", "Ehtiyat hissələri və servis"],
      imageCaption: "Paylayıcı panel üzərində iş"
    },
    process: {
      eyebrow: "İş prosesi",
      title: "Müraciətdən istismara qədər",
      steps: [
        ["Müraciət və tələblər", "Obyektin şəraitini, yükləri və texniki tələbləri birlikdə müəyyən edirik."],
        ["Layihə və təklif", "Elektrik sxemlərini hazırlayır, avadanlığı seçir, texniki-kommersiya təklifi veririk."],
        ["Tədarük, istehsal və montaj", "Avadanlığı tədarük edir, panelləri yığır və obyektdə quraşdırırıq."],
        ["İşə salma və servis", "Sistemi sınaqdan keçirir, proqramlaşdırır, sonra servis və ehtiyat hissələri ilə dəstəkləyirik."]
      ]
    },
    contact: {
      eyebrow: "Əlaqə",
      title: "Layihənizi müzakirə edək",
      lead: "Avadanlıq seçimi, qiymət təklifi və ya texniki sual üçün sizə rahat olan yolla yazın — mütəxəssisimiz sizinlə əlaqə saxlayacaq.",
      phone: "Telefon", email: "E-poçt", address: "Ünvan", map: "Xəritədə aç",
      formTitle: "Sorğu göndərin",
      formText: "Mesaj WhatsApp-da hazır açılacaq — sizə yalnız göndərmək qalacaq.",
      name: "Ad, soyad", company: "Şirkət", optional: "istəyə bağlı", phoneField: "Telefon",
      message: "Avadanlıq, miqdar, obyekt və ya texniki tələblər",
      send: "WhatsApp ilə göndər",
      required: "Bu sahəni doldurun", phoneInvalid: "Telefon nömrəsini düzgün yazın",
      sent: "Mesaj yeni pəncərədə hazırlandı — göndərməyi unutmayın.",
      greeting: "Salam, ORS Company!"
    },
    footer: {
      about: "Elektrik avadanlıqlarının satışı, panel istehsalı, sənaye avtomatikası, montaj və texniki servis.",
      menu: "Menyu", services: "Xidmətlər", contact: "Əlaqə", rights: "Bütün hüquqlar qorunur."
    }
  },

  /* -------------------------------- TÜRKÇE -------------------------------- */
  tr: {
    langName: "TR",
    meta: { title: "ORS Company — Elektrik ekipmanları ve otomasyon" },
    nav: { services: "Hizmetler", products: "Ürünler", projects: "Projeler", brands: "Markalar", about: "Hakkımızda", contact: "İletişim" },
    common: { quote: "Teklif alın", write: "Bize yazın", more: "Detaylı", photos: "fotoğraf" },
    hero: {
      eyebrow: "Elektrik ekipmanları · Pano imalatı · Endüstriyel otomasyon",
      title: "Elektrik ekipmanı ve otomasyon —",
      accent: "tek noktadan.",
      text: "ORS; sanayi tesislerine, enerji ve altyapı projelerine elektrik ekipmanları tedarik eder, dağıtım ve MCC panolarını imal eder, PLC/SCADA tabanlı otomasyon sistemlerini tasarlayıp programlar. Montaj, devreye alma ve sonrasındaki teknik servisi de kendimiz yürütürüz.",
      cta2: "Hizmetleri gör",
      pills: ["Elektrik ekipmanları", "PLC ve SCADA", "MCC panoları", "Frekans invertörleri", "Servis"],
      captions: ["Pano içi klemens bağlantıları", "Robotik üretim hattı", "Güç transformatörü", "SCADA ve kontrol sistemleri", "Açık şalt sahası"]
    },
    sectors: {
      title: "Kimlere hizmet veriyoruz",
      items: [
        ["Enerji", "Şalt sahaları, trafo merkezleri ve jeneratörler."],
        ["Endüstriyel tesisler", "Fabrikalar, işleme tesisleri ve üretim hatları."],
        ["Maden ve proses", "Pompa, konveyör ve proses hatlarının elektrik ve otomasyonu."],
        ["Bina ve altyapı", "Ticari yapılar, su temini ve pompa istasyonları."]
      ]
    },
    services: {
      eyebrow: "Hizmetler",
      title: "Tedarikten işletmeye elektrik ve otomasyon",
      lead: "Ekipmanı seçer ve tedarik ederiz, panoları imal ederiz, sistemi programlayıp sahada devreye alırız — ardından yedek parça ve servisle yanınızda oluruz.",
      items: [
        { icon: "bolt", title: "Elektrik ekipmanı satışı", text: "Önde gelen üreticilerden alçak ve orta gerilim ekipman tedariki.", list: ["Devre kesiciler ve kontaktörler", "Röle ve koruma ekipmanları", "Kablo ve kablo tavaları", "Ölçü cihazları"] },
        { icon: "cpu", title: "Endüstriyel otomasyon", text: "PLC, HMI ve SCADA tabanlı kontrol sistemlerinin tasarımı ve programlanması.", list: ["PLC programlama", "HMI / SCADA ekranları", "Uzaktan izleme", "Mevcut sistemlerin modernizasyonu"] },
        { icon: "panel", title: "Pano imalatı", text: "Projeye özel dağıtım, MCC ve otomasyon panolarının montajı ve testi.", list: ["Ana dağıtım panoları (ADP)", "Motor kontrol merkezleri (MCC)", "PLC ve otomasyon panoları", "Kompanzasyon panoları"] },
        { icon: "motor", title: "Sürücüler ve motor kontrol", text: "Motorlar için frekans invertörleri, yumuşak yolverme ve enerji verimliliği çözümleri.", list: ["Frekans invertörleri (VFD)", "Yumuşak yol vericiler", "Elektrik motorları", "Enerji verimliliği analizi"] },
        { icon: "wrench", title: "Elektrik taahhüt ve montaj", text: "Sahada pano montajı, kablo tavaları, kablolama ve bağlantı işleri.", list: ["Pano montajı", "Kablo tavası montajı", "Kablolama ve terminasyon", "Topraklama ve yıldırımdan korunma"] },
        { icon: "shield", title: "Devreye alma ve servis", text: "Test, devreye alma, bakım ve yedek parça ile uzun vadeli destek.", list: ["Test ve devreye alma", "Periyodik bakım", "Yedek parça tedariki", "Arıza durumunda hızlı destek"] }
      ]
    },
    products: {
      eyebrow: "Ürünler",
      title: "Elektrik ekipmanları kataloğu",
      lead: "Stoktan ve siparişe göre tedarik ettiğimiz başlıca ürün grupları. Listede olmayan ekipman için talep gönderin.",
      cta: "Ürün talebi gönderin",
      groups: [
        ["Otomasyon", ["PLC ve I/O modülleri", "HMI operatör panelleri", "Endüstriyel haberleşme modülleri", "Güç kaynakları"]],
        ["Sürücüler", ["Frekans invertörleri (VFD)", "Yumuşak yol vericiler", "Servo sürücüler", "Filtre ve reaktörler"]],
        ["Şalt ve koruma", ["Devre kesiciler (MCB, MCCB, ACB)", "Kontaktörler ve termik röleler", "Kaçak akım koruma", "Koruma röleleri"]],
        ["Panolar", ["Dağıtım panoları", "MCC panoları", "OG hücre ve panoları", "Kompanzasyon panoları"]],
        ["Motor ve jeneratörler", ["Asenkron elektrik motorları", "Ex-proof motorlar", "Dizel jeneratörler", "Transfer (ATS) panoları"]],
        ["Transformatörler", ["Güç transformatörleri", "Kuru tip transformatörler", "Ölçü transformatörleri", "Kompakt trafo merkezleri"]],
        ["Kablo ve montaj", ["Güç ve kontrol kabloları", "Kablo tavaları", "Kablo ekleri", "Klemens ve aksesuarlar"]],
        ["Ölçüm ve sensörler", ["Enerji analizörleri", "Basınç ve seviye sensörleri", "Sıcaklık transmitterleri", "Yangın ve güvenlik sistemleri"]]
      ]
    },
    brands: {
      eyebrow: "Markalar",
      title: "Önde gelen üreticilerin ekipmanları",
      lead: "Güvenilir global ve bölgesel markaların ekipmanlarını tedarik ediyor, projenize uygun olanı seçmenize yardımcı oluyoruz.",
      automation: "Otomasyon ve sürücüler",
      motors: "Elektrik motorları",
      transformers: "Transformatörler",
      generators: "Jeneratörler"
    },
    projects: {
      eyebrow: "Projeler",
      title: "Sahadan çalışmalarımız",
      items: {
        panels: ["Dağıtım panosu imalatı", "Devre kesiciler, klemensler ve kablolama ile dağıtım ve otomasyon panolarının montajı."],
        substation: ["Trafo merkezi ve şalt sahası", "Yüksek gerilim ekipmanlarının, kesicilerin ve izolatörlerin montajı ve testleri."],
        transformer: ["Güç transformatörü kurulumu", "Transformatörlerin tedariki, yerinde kurulumu, bağlantısı ve devreye alınması."],
        cabling: ["Kablo hatları ve kablolama", "Güç ve kontrol kablolarının çekilmesi, kablo kanalları ve terminasyon işleri."],
        automation: ["Üretim hattı otomasyonu", "Robot ve mekanizmaların PLC ile kontrolü, sinyalizasyon ve operatör panelleri."],
        scada: ["SCADA ve kontrol sistemleri", "Proses verilerinin toplanması, uzaktan izleme ve kontrol yazılımlarının hazırlanması."]
      }
    },
    about: {
      eyebrow: "Hakkımızda",
      title: "Elektrik ve otomasyonda deneyimli mühendislik ekibi",
      text: "ORS Company, Azerbaycan ve Türkiye'de elektrik enerjisi ve endüstriyel otomasyon alanlarında çalışan mühendislerden oluşur. Ekipman tedariki, pano imalatı, programlama, montaj ve servisi tek noktadan sunuyoruz — projenin her aşamasında sizinle bir sorumlu mühendis iletişimde olur.",
      points: ["Azerbaycan ve Türkiye'de deneyim", "Önde gelen markaların orijinal ekipmanları", "Pano imalatı ve testleri", "PLC / SCADA programlama", "Sahada montaj ve devreye alma", "Yedek parça ve servis"],
      imageCaption: "Dağıtım panosunda çalışma"
    },
    process: {
      eyebrow: "Çalışma süreci",
      title: "Talepten işletmeye kadar",
      steps: [
        ["Talep ve gereksinimler", "Tesisin koşullarını, yükleri ve teknik gereksinimleri birlikte belirleriz."],
        ["Proje ve teklif", "Elektrik şemalarını hazırlar, ekipmanı seçer, teknik ve ticari teklif sunarız."],
        ["Tedarik, imalat ve montaj", "Ekipmanı tedarik eder, panoları imal eder ve sahada kurarız."],
        ["Devreye alma ve servis", "Sistemi test eder, programlar; ardından servis ve yedek parçayla destekleriz."]
      ]
    },
    contact: {
      eyebrow: "İletişim",
      title: "Projenizi konuşalım",
      lead: "Ekipman seçimi, fiyat teklifi veya teknik bir soru için size uygun yoldan yazın — uzmanımız sizinle iletişime geçecektir.",
      phone: "Telefon", email: "E-posta", address: "Adres", map: "Haritada aç",
      formTitle: "Talep gönderin",
      formText: "Mesaj WhatsApp'ta hazır açılacak — size yalnızca göndermek kalacak.",
      name: "Ad soyad", company: "Firma", optional: "isteğe bağlı", phoneField: "Telefon",
      message: "Ekipman, miktar, tesis veya teknik gereksinimler",
      send: "WhatsApp ile gönder",
      required: "Bu alanı doldurun", phoneInvalid: "Telefon numarasını doğru yazın",
      sent: "Mesaj yeni pencerede hazırlandı — göndermeyi unutmayın.",
      greeting: "Merhaba, ORS Company!"
    },
    footer: {
      about: "Elektrik ekipmanı satışı, pano imalatı, endüstriyel otomasyon, montaj ve teknik servis.",
      menu: "Menü", services: "Hizmetler", contact: "İletişim", rights: "Tüm hakları saklıdır."
    }
  },

  /* -------------------------------- ENGLISH ------------------------------- */
  en: {
    langName: "EN",
    meta: { title: "ORS Company — Electrical equipment and automation" },
    nav: { services: "Services", products: "Products", projects: "Projects", brands: "Brands", about: "About", contact: "Contact" },
    common: { quote: "Request a quote", write: "Email us", more: "View", photos: "photos" },
    hero: {
      eyebrow: "Electrical equipment · Panel building · Industrial automation",
      title: "Electrical equipment and automation —",
      accent: "from a single source.",
      text: "ORS supplies electrical equipment to industrial plants, energy and infrastructure projects, builds distribution and MCC panels, and designs and programs PLC/SCADA automation systems. We also handle installation, commissioning and after-sales technical service ourselves.",
      cta2: "View services",
      pills: ["Electrical equipment", "PLC & SCADA", "MCC panels", "Variable frequency drives", "Service"],
      captions: ["Terminal wiring inside a panel", "Robotic production line", "Power transformer", "SCADA and control systems", "Outdoor switchyard"]
    },
    sectors: {
      title: "Who we work for",
      items: [
        ["Energy", "Switchgear, transformer substations and generators."],
        ["Industrial plants", "Factories, processing plants and production lines."],
        ["Mining & process", "Electrical and automation for pumps, conveyors and process lines."],
        ["Buildings & infrastructure", "Commercial buildings, water supply and pumping stations."]
      ]
    },
    services: {
      eyebrow: "Services",
      title: "Electrical and automation, from supply to operation",
      lead: "We select and supply the equipment, build the panels, program the system and commission it on site — then stay with you with spare parts and service.",
      items: [
        { icon: "bolt", title: "Electrical equipment sales", text: "Low and medium voltage equipment from leading manufacturers.", list: ["Circuit breakers and contactors", "Relays and protection devices", "Cables and cable trays", "Metering devices"] },
        { icon: "cpu", title: "Industrial automation", text: "Design and programming of PLC, HMI and SCADA based control systems.", list: ["PLC programming", "HMI / SCADA screens", "Remote monitoring", "Upgrades of existing systems"] },
        { icon: "panel", title: "Panel building", text: "Assembly and testing of project-specific distribution, MCC and automation panels.", list: ["Main distribution panels (MDP)", "Motor control centres (MCC)", "PLC and automation panels", "Power factor correction panels"] },
        { icon: "motor", title: "Drives & motor control", text: "Variable frequency drives, soft starters and energy-saving solutions for motors.", list: ["Variable frequency drives (VFD)", "Soft starters", "Electric motors", "Energy efficiency audits"] },
        { icon: "wrench", title: "Electrical installation", text: "On-site panel installation, cable trays, cabling and terminations.", list: ["Panel installation", "Cable tray installation", "Cabling and terminations", "Earthing and lightning protection"] },
        { icon: "shield", title: "Commissioning & service", text: "Testing, commissioning, maintenance and long-term support with spare parts.", list: ["Testing and commissioning", "Scheduled maintenance", "Spare parts supply", "Fast breakdown support"] }
      ]
    },
    products: {
      eyebrow: "Products",
      title: "Electrical equipment catalogue",
      lead: "The main product groups we supply from stock and to order. Send us a request for anything not listed.",
      cta: "Send a product request",
      groups: [
        ["Automation", ["PLC and I/O modules", "HMI operator panels", "Industrial communication modules", "Power supplies"]],
        ["Drives", ["Variable frequency drives (VFD)", "Soft starters", "Servo drives", "Filters and reactors"]],
        ["Switching & protection", ["Circuit breakers (MCB, MCCB, ACB)", "Contactors and overload relays", "Residual current protection", "Protection relays"]],
        ["Panels", ["Distribution panels", "MCC panels", "MV switchgear panels", "Power factor correction panels"]],
        ["Motors & generators", ["Induction motors", "Explosion-proof motors", "Diesel generators", "ATS panels"]],
        ["Transformers", ["Power transformers", "Dry-type transformers", "Instrument transformers", "Compact substations"]],
        ["Cables & installation", ["Power and control cables", "Cable trays", "Cable joints", "Terminals and accessories"]],
        ["Metering & sensors", ["Power analysers", "Pressure and level sensors", "Temperature transmitters", "Fire and safety systems"]]
      ]
    },
    brands: {
      eyebrow: "Brands",
      title: "Equipment from leading manufacturers",
      lead: "We supply equipment from trusted global and regional brands and help you choose the right fit for your project.",
      automation: "Automation & drives",
      motors: "Electric motors",
      transformers: "Transformers",
      generators: "Generators"
    },
    projects: {
      eyebrow: "Projects",
      title: "Our work on site",
      items: {
        panels: ["Distribution panel building", "Assembly of distribution and automation panels with circuit breakers, terminals and wiring."],
        substation: ["Substation and switchyard", "Installation and testing of high-voltage equipment, breakers and insulators."],
        transformer: ["Power transformer installation", "Supply, on-site installation, connection and commissioning of transformers."],
        cabling: ["Cable routes and cabling", "Laying of power and control cables, cable ducts and terminations."],
        automation: ["Production line automation", "PLC control of robots and machinery, signalling and operator panels."],
        scada: ["SCADA and control systems", "Process data acquisition, remote monitoring and control software development."]
      }
    },
    about: {
      eyebrow: "About us",
      title: "An experienced electrical and automation engineering team",
      text: "ORS Company is a team of engineers working in electrical power and industrial automation across Azerbaijan and Türkiye. We provide equipment supply, panel building, programming, installation and service from a single source — with one responsible engineer in touch with you at every stage.",
      points: ["Experience in Azerbaijan and Türkiye", "Genuine equipment from leading brands", "Panel building and testing", "PLC / SCADA programming", "On-site installation and commissioning", "Spare parts and service"],
      imageCaption: "Working on a distribution panel"
    },
    process: {
      eyebrow: "How we work",
      title: "From request to operation",
      steps: [
        ["Request and requirements", "Together we define the site conditions, loads and technical requirements."],
        ["Design and offer", "We prepare the electrical drawings, select the equipment and send a technical and commercial offer."],
        ["Supply, building and installation", "We supply the equipment, build the panels and install everything on site."],
        ["Commissioning and service", "We test and program the system, then support it with service and spare parts."]
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's discuss your project",
      lead: "For equipment selection, a quote or a technical question, reach us whichever way suits you — our specialist will get back to you.",
      phone: "Phone", email: "Email", address: "Address", map: "Open in maps",
      formTitle: "Send a request",
      formText: "The message opens ready in WhatsApp — you only need to send it.",
      name: "Full name", company: "Company", optional: "optional", phoneField: "Phone",
      message: "Equipment, quantity, site or technical requirements",
      send: "Send via WhatsApp",
      required: "Please fill in this field", phoneInvalid: "Please enter a valid phone number",
      sent: "Your message is ready in a new window — don't forget to send it.",
      greeting: "Hello, ORS Company!"
    },
    footer: {
      about: "Electrical equipment sales, panel building, industrial automation, installation and technical service.",
      menu: "Menu", services: "Services", contact: "Contact", rights: "All rights reserved."
    }
  }
};

/* =========================================================
   Ek bölümler (ypt.com.tr'den esinlenildi):
   sayaçlar, yetkinlikler, ülkeler, iş ortakları şeridi, bilgi kutuları
   Sayılar ÖRNEKTİR — gerçek verilerle değiştirin.
   ========================================================= */
Object.assign(window.ORS_CONFIG, {
  stats: [
    { value: 15, suffix: "+" },   // yıl
    { value: 60, suffix: "+" },   // ekip
    { value: 320, suffix: "+" },  // proje
    { value: 9, suffix: "" }      // ülke
  ],
  countries: ["az", "tr", "ge", "kz", "uz", "tm", "iq", "ru", "ae"],
  hours: "09:00 – 18:00"
});

const ORS_EXTRA = {
  az: {
    stats: { eyebrow: "Etibarlı təcrübə", title: "İllərin mühəndislik təcrübəsinə əsaslanırıq", labels: ["İllik təcrübə", "Komanda üzvü", "Tamamlanmış layihə", "Fəaliyyət ölkəsi"] },
    expertise: {
      eyebrow: "İnteqrasiya olunmuş təcrübə",
      title: "Bir komanda — tam məsuliyyət",
      items: [
        ["Mühəndislik", "Yük hesablamalarını, tək xətli sxemləri və avtomatika arxitekturasını layihənin tələblərinə uyğun hazırlayırıq. Hər çertyoj və spesifikasiya təhlükəsizlik, səmərəlilik və uzunömürlülük üçün işlənir."],
        ["Tədarük", "Aparıcı istehsalçılarla birbaşa əməkdaşlıq sayəsində avadanlığı orijinal, izlənə bilən və vaxtında çatdırırıq. Hər komponent yoxlanılır və sənədləşdirilir."],
        ["Montaj", "Panellərin quraşdırılmasından kabelləməyə qədər obyektdəki bütün elektrik işlərini təhlükəsizlik qaydalarına uyğun özümüz aparırıq və sistemi istismara hazır təhvil veririk."],
        ["İstehsal", "Öz emalatxanamızda paylayıcı, MCC və avtomatika panellərini yığır, sınaqdan keçirir və IEC 61439 tələblərinə uyğun sənədləşdiririk."],
        ["Keyfiyyət idarəetməsi", "Keyfiyyət bizdə ayrıca şöbə deyil, hər mərhələyə hopmuş intizamdır. ISO 9001 əsaslı sistemimiz nəticələri ölçür, yoxlayır və davamlı təkmilləşdirir."]
      ]
    },
    world: { eyebrow: "Coğrafiya", title: "Regionda fəaliyyət göstəririk", lead: "Bakıdakı ofisimizdən Qafqaz, Mərkəzi Asiya və Yaxın Şərqdəki layihələrə xidmət göstəririk.",
      names: { az: "Azərbaycan", tr: "Türkiyə", ge: "Gürcüstan", kz: "Qazaxıstan", uz: "Özbəkistan", tm: "Türkmənistan", iq: "İraq", ru: "Rusiya", ae: "BƏƏ" } },
    partners: { title: "Etimada əsaslanan tərəfdaşlıqlar" },
    info: { question: "Sualınız var?", support: "Dəstək lazımdır?", hoursTitle: "İş saatlarımız", hoursText: "Bazar ertəsi – Cümə" }
  },
  tr: {
    stats: { eyebrow: "Güvenilir deneyim", title: "Yılların mühendislik birikimi üzerine kurulu", labels: ["Yıllık deneyim", "Ekip üyesi", "Tamamlanan proje", "Faaliyet ülkesi"] },
    expertise: {
      eyebrow: "Entegre uzmanlık",
      title: "Tek ekip — tam güven",
      items: [
        ["Mühendislik", "Yük hesaplarını, tek hat şemalarını ve otomasyon mimarisini projenin gereksinimlerine göre hazırlarız. Her çizim ve şartname güvenlik, verimlilik ve uzun ömür için geliştirilir."],
        ["Tedarik", "Önde gelen üreticilerle doğrudan çalışarak ekipmanı orijinal, izlenebilir ve zamanında teslim ederiz. Her bileşen kontrol edilir ve belgelenir."],
        ["Montaj", "Pano kurulumundan kablolamaya kadar sahadaki tüm elektrik işlerini iş güvenliği kurallarına uygun şekilde kendimiz yürütür, sistemi işletmeye hazır teslim ederiz."],
        ["İmalat", "Kendi atölyemizde dağıtım, MCC ve otomasyon panolarını imal eder, test eder ve IEC 61439 gerekliliklerine uygun olarak belgeleriz."],
        ["Kalite yönetimi", "Kalite bizde bir departman değil, her adıma işlenmiş bir disiplindir. ISO 9001 tabanlı sistemimiz sonuçları ölçer, doğrular ve sürekli iyileştirir."]
      ]
    },
    world: { eyebrow: "Coğrafya", title: "Bölge genelinde çalışıyoruz", lead: "Bakü ofisimizden Kafkasya, Orta Asya ve Orta Doğu'daki projelere hizmet veriyoruz.",
      names: { az: "Azerbaycan", tr: "Türkiye", ge: "Gürcistan", kz: "Kazakistan", uz: "Özbekistan", tm: "Türkmenistan", iq: "Irak", ru: "Rusya", ae: "BAE" } },
    partners: { title: "Güvene dayalı iş ortaklıkları" },
    info: { question: "Sorunuz mu var?", support: "Desteğe mi ihtiyacınız var?", hoursTitle: "Çalışma saatlerimiz", hoursText: "Pazartesi – Cuma" }
  },
  en: {
    stats: { eyebrow: "Trusted experience", title: "Built on years of engineering expertise", labels: ["Years of experience", "Team members", "Completed projects", "Countries served"] },
    expertise: {
      eyebrow: "Integrated expertise",
      title: "One team — complete confidence",
      items: [
        ["Engineering", "We prepare load calculations, single-line diagrams and automation architecture to fit each project. Every drawing and specification is developed for safety, efficiency and long service life."],
        ["Procurement", "Working directly with leading manufacturers, we deliver genuine, traceable equipment on time. Every component is inspected and documented."],
        ["Installation", "From panel installation to cabling, we carry out all electrical work on site in line with safety rules and hand over a system ready for operation."],
        ["Manufacturing", "In our own workshop we build, test and document distribution, MCC and automation panels in line with IEC 61439."],
        ["Quality management", "Quality is not a department at ORS — it is a discipline built into every step. Our ISO 9001 based system measures, verifies and continuously improves the results."]
      ]
    },
    world: { eyebrow: "Coverage", title: "We operate across the region", lead: "From our Baku office we serve projects across the Caucasus, Central Asia and the Middle East.",
      names: { az: "Azerbaijan", tr: "Türkiye", ge: "Georgia", kz: "Kazakhstan", uz: "Uzbekistan", tm: "Turkmenistan", iq: "Iraq", ru: "Russia", ae: "UAE" } },
    partners: { title: "Partnerships built on trust" },
    info: { question: "Have a question?", support: "Need support?", hoursTitle: "Working hours", hoursText: "Monday – Friday" }
  }
};
for (const l in ORS_EXTRA) Object.assign(window.ORS_I18N[l], ORS_EXTRA[l]);
