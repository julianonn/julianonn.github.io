// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-started-my-ms-phd-at-uw-madison",
          title: 'I started my MS/PhD at UW-Madison.',
          description: "",
          section: "News",},{id: "news-our-lab-attended-the-midwest-security-workshop-at-purdue",
          title: 'Our lab attended the Midwest Security Workshop at Purdue.',
          description: "",
          section: "News",},{id: "news-our-paper-about-identifying-account-compromise-using-gdpr-data-exports-got-accepted-to-acm-ccs-2025",
          title: 'Our paper about identifying account compromise using GDPR data exports got accepted to...',
          description: "",
          section: "News",},{id: "news-i-m-co-organizing-the-mads-amp-amp-p-seminar-this-year-interested-in-being-a-guest-speaker-email-me",
          title: 'I’m co-organizing the MadS&amp;amp;amp;P Seminar this year. Interested in being a guest speaker?...',
          description: "",
          section: "News",},{id: "news-i-presented-our-paper-hidden-in-plain-bytes-at-acm-ccs-in-taipei",
          title: 'I presented our paper, Hidden in Plain Bytes, at ACM CCS in Taipei....',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-about-the-madison-tech-clinic-at-uchicago-s-first-ever-tech-for-good-conference-very-grateful-to-the-organizers-for-putting-it-together",
          title: 'I gave a talk about the Madison Tech Clinic at UChicago’s first ever...',
          description: "",
          section: "News",},{id: "news-very-excited-that-our-paper-on-accessible-security-notifications-led-by-the-wonderful-hailey-johnson-is-conditionally-accepted-to-assets-2026",
          title: 'Very excited that our paper on accessible security notifications (led by the wonderful...',
          description: "",
          section: "News",},];
