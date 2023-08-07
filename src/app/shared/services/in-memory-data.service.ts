import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const pages = [
      {
        id: 1,
        name: "intro",
        tagline: "SUCCESS",
        title: "How We Help You To Sell Your Product",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      },
      {
        id: 2,
        name: "clients",
        tagline: "TRUST",
        title: "Companies who use our services",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      },
      {
        id: 3,
        name: "services",
        tagline: "BELIEVING",
        title: "Focusing On What Matters Most",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      },
      {
        id: 4,
        name: "testimonials",
        tagline: "FEEDBACK",
        title: "What our customers are saying",
        description: "",
      },
      {
        id: 5,
        name: "pricing",
        tagline: "YOUR CHOICE",
        title: "We have the right package for you",
        description: "",
      },
      {
        id: 6,
        name: "footer",
        tagline: "Designed by ",
        developer: "F-mode ",
        developerlink: "andrewbateman.org",
      },
      {
        id: 7,
        name: "header",
        tagline: "SİZ DÜŞÜNÜN BİZ YAPALIM",
        title:
          "",
        buttontext: "BUGÜN TASARIMA BAŞLA",
        buttonlink: "/home",
        image: "ww1.jpg",
      },
    ];
    const features = [
      {
        id: 1,
        icon: "html5",
        title: "Misyonumuz ",
        description:
          "                El sanatları ve ahşap işleri alanında yaratıcı ve özgün ürünler üreterek, müşterilerimize kaliteli ve estetik bir deneyim sunmayı hedefliyoruz. Müşteri memnuniyetini en üst düzeyde tutarak el emeği ile yapılan ürünlerimizle, yaşam alanlarını güzelleştirirken aynı zamanda kültürel mirasımıza da katkı sağlamayı amaçlıyoruz.",
      },
      {
        id: 2,
        icon: "bolt",
        title: "Vizyonumuz ",
        description:
          "                     El sanatları ve ahşap işleri alanında lider bir marka olmayı ve sektörde öncü bir konuma sahip olmayı hedefliyoruz. Yenilikçi tasarımlarımız, kaliteli malzemelerimiz ve ustalıkla yapılan işçiliğimiz ile müşterilerimizin tercih ettiği bir marka olmak için sürekli gelişmeye ve yeniliklere açık olacağız. Müşterilerimize özgün ve kişiye özel ürünler sunarak onların hayallerini gerçeğe dönüştürmeyi amaçlıyoruz. Aynı zamanda el sanatlarının ve ahşap işçiliğinin değerini koruyarak gelecek nesillere aktarılmasına katkıda bulunmayı hedefliyoruz.",
      },

    ];
    const services = [
      { id: 1, title: "Tasarım", description: "Ahşap ürünleriniz için en iyi tasarımları sunuyoruz. Özgün ve etkileyici çözümlerle ahşap ürünlerinizi ön plana çıkarıyoruz. Trendleri takip ederek yeni ve yaratıcı projeler sunuyoruz. Size özel hizmet ve başarı için buradayız. ." },
      { id: 2, title: "Ahşap CNC", description: "Uzman ekibimizle benzersiz ahşap CNC ürünleri sunuyoruz. Hayallerinizi gerçeğe dönüştürmek için buradayız. Tasarımın sınırlarını zorlayın, özgün ve kaliteli ürünlerle tanışın!" },
      { id: 3, title: "Alüminyum CNC", description: "Deneyimli ekibimizle alüminyum CNC ürünlerini size sunuyoruz. Sağlamlık ve estetiği bir arada yaşayın. Hayal gücünüzü gerçeğe dönüştürmek için buradayız. Özgünlüğü alüminyumun dayanıklılığıyla buluşturuyoruz." },
      { id: 4, title: "Plexiglass CNC", description: "Uzman ekibimizle plexiglass CNC ürünleriyle şıklığı yakalayın. Şeffaf tasarımlarla mekanlarınıza farklılık katın. İhtişamı ve zarafeti plexiglass ile bir araya getiriyoruz. Sıra dışı tasarımlar için bizimle iletişime geçin." },
      { id: 4, title: "Plexiglass CNC", description: "Uzman ekibimizle plexiglass CNC ürünleriyle şıklığı yakalayın. Şeffaf tasarımlarla mekanlarınıza farklılık katın. İhtişamı ve zarafeti plexiglass ile bir araya getiriyoruz. Sıra dışı tasarımlar için bizimle iletişime geçin." },

      { id: 4, title: "Plexiglass CNC", description: "Uzman ekibimizle plexiglass CNC ürünleriyle şıklığı yakalayın. Şeffaf tasarımlarla mekanlarınıza farklılık katın. İhtişamı ve zarafeti plexiglass ile bir araya getiriyoruz. Sıra dışı tasarımlar için bizimle iletişime geçin." },
      { id: 4, title: "Plexiglass CNC", description: "Uzman ekibimizle plexiglass CNC ürünleriyle şıklığı yakalayın. Şeffaf tasarımlarla mekanlarınıza farklılık katın. İhtişamı ve zarafeti plexiglass ile bir araya getiriyoruz. Sıra dışı tasarımlar için bizimle iletişime geçin." },
      { id: 4, title: "Plexiglass CNC", description: "Uzman ekibimizle plexiglass CNC ürünleriyle şıklığı yakalayın. Şeffaf tasarımlarla mekanlarınıza farklılık katın. İhtişamı ve zarafeti plexiglass ile bir araya getiriyoruz. Sıra dışı tasarımlar için bizimle iletişime geçin." },
      { id: 4, title: "Plexiglass CNC", description: "Uzman ekibimizle plexiglass CNC ürünleriyle şıklığı yakalayın. Şeffaf tasarımlarla mekanlarınıza farklılık katın. İhtişamı ve zarafeti plexiglass ile bir araya getiriyoruz. Sıra dışı tasarımlar için bizimle iletişime geçin." },


    ]
    const images = [
      { id: 1, name: "gallery-image-1.jpg" },
      { id: 2, name: "gallery-image-2.jpg" },
      { id: 3, name: "gallery-image-3.jpg" },
      { id: 4, name: "gallery-image-4.jpg" },
      { id: 5, name: "gallery-image-5.jpg" },
      { id: 6, name: "gallery-image-6.jpg" },
    ];
    const menu = [
      { id: 1, title: "anasayfa", link: "/home"},
      { id: 2, title: "hakkımızda", link: "/about"},
      { id: 3, title: "Hizmetlerimiz", link: "/services"},
      { id: 4, title: "galeri", link: "/gallery"},
      { id: 7, title: "Iletişim", link: "/contact"},
    ];
    const companies = [
      {
        id: 1,
        name: "Tree",
        weblink: "company-logo1.png",
        logo: "company-logo1.png",
      },
      {
        id: 2,
        name: "Fingerprint",
        weblink: "company-logo2.png",
        logo: "company-logo2.png",
      },
      {
        id: 3,
        name: "The Man",
        weblink: "company-logo3.png",
        logo: "company-logo3.png",
      },
      {
        id: 4,
        name: "Mustache",
        weblink: "company-logo4.png",
        logo: "company-logo4.png",
      },
      {
        id: 5,
        name: "Goat",
        weblink: "company-logo5.png",
        logo: "company-logo5.png",
      },
      {
        id: 6,
        name: "Justice",
        weblink: "company-logo6.png",
        logo: "company-logo6.png",
      },
      {
        id: 7,
        name: "Ball",
        weblink: "company-logo7.png",
        logo: "company-logo7.png",
      },
      {
        id: 8,
        name: "Cold",
        weblink: "company-logo8.png",
        logo: "company-logo8.png",
      },
      {
        id: 9,
        name: "Cold",
        weblink: "company-logo9.png",
        logo: "company-logo9.png",
      },
    ];
    const feedback = [
      {
        id: 1,
        name: "John Doe",
        userimage: "user-1.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "ABC",
      },
      {
        id: 2,
        name: "Roslyn Doe",
        userimage: "user-2.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "Happy Customer",
      },
      {
        id: 3,
        name: "Thomas Doe",
        userimage: "user-3.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "Happy Customer",
      },
    ];
    const plans = [
      {
        id: 1,
        title: "PERSONAL",
        subtitle: "The standard version",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "19",
        currency: "₹",
        downloads: "5 Downloads",
        extensions: "2 Extensions",
        tutorials: "Tutorials",
        support: "Forum Support",
        updates: "1 year free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: false,
      },
      {
        id: 2,
        title: "STUDENT",
        subtitle: "Most popular choice",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "29",
        currency: "₹",
        downloads: "15 Downloads",
        extensions: "5 Extensions",
        tutorials: "Tutorials with files",
        support: "Forum Support",
        updates: "2 year free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: true,
      },
      {
        id: 3,
        title: "BUSINESS",
        subtitle: "For the whole team",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "49",
        currency: "₹",
        downloads: "Unlimited Downloads",
        extensions: "Unlimited Downloads",
        tutorials: "HD Video Tutorials",
        support: "Chat Support",
        updates: "Lifetime free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: false,
      },
    ];
    const websites = [
      {
        id: 1,
        link: "https://instagram.com/",
        title: "Instagram",
        target: "_blank",
        username: "atolyekabuk",
        icon: "instagram",
      },
      {
        id: 1,
        link: "https://www.facebook.com",
        title: "Facebook",
        target: "_blank",
        username: "kabukahsap",
        icon: "facebook",
      },
      {
        id: 3,
        link: "https://googleplus.com/",
        title: "Google+",
        target: "_blank",
        username: "+jagmohan",
        icon: "linkedin",
      },
      {
        id: 4,
        link: "https://twitter.com/",
        title: "Twitter",
        target: "_blank",
        username: "joker",
        icon: "twitter",
      },
      {
        id: 2,
        link: "https://googleplus.com/",
        title: "Google+",
        target: "_blank",
        username: "+jagmohan",
        icon: "google-plus",
      },

    ];

    return {
      menu,
      pages,
      features,
      images,
      companies,
      feedback,
      plans,
      websites,
      services,
    };
  }
}
