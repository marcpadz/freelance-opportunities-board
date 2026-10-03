export type SourceDetails = { summary: string; responsibilities: string[]; requirements: string[]; location: string; compensation: string; deadline: string; application: string };
export type SourceMedia = { type: string; url: string; alt: string };
export type SourceEmbed = { supported: boolean; platform: string; url: string; embedUrl: string };
export type Job = { title: string; description: string; category: string; date: string; source: string; newsletter: string; newsletterSubject: string; sourceTitle?: string; sourceStatus?: string; verified?: boolean; sourceDetails?: Partial<SourceDetails>; media?: SourceMedia[]; embed?: Partial<SourceEmbed>; sourceNotes?: string; type?: string; pay?: string };
export const jobs: Job[] = 
[
  {
    "title": "SureHost",
    "description": "(US) needs a founding full-time product manager ($90-$110/hour)",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://app.usebraintrust.com/jobs/17854/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Braintrust | Transforming Hiring with AI Recruiting Braintrust is the new model for how work gets done. We connect organizations with top technical talent to complete strategic projects and drive innovation. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$90-$110/hour",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://d1m1s6un1a8qgj.cloudfront.net/static/logo-symbol.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://app.usebraintrust.com/jobs/17854/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": "$90-$110/hour"
  },
  {
    "title": "Impact Teen Drivers",
    "description": "(Sacramento, CA) needs a part-time administrative and executive assistant ($35/hour)",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.idealist.org/en/nonprofit-job/b27cac724b2f4d2cb648d121525a3198-administrative-executive-assistant-part-time-impact-teen-drivers-sacramento",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$35/hour",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.idealist.org/en/nonprofit-job/b27cac724b2f4d2cb648d121525a3198-administrative-executive-assistant-part-time-impact-teen-drivers-sacramento",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": "$35/hour"
  },
  {
    "title": "Girls Inc. of Long Island",
    "description": "(NYC) needs a part-time development operations and grant administrator ($25-$30/hour, 15 hours/week)",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.idealist.org/en/nonprofit-job/45a4f448f5ce4868b892cba6fa03302a-development-operations-and-grant-administrator-girls-inc-of-long-island-deer-park",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$25-$30/hour",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.idealist.org/en/nonprofit-job/45a4f448f5ce4868b892cba6fa03302a-development-operations-and-grant-administrator-girls-inc-of-long-island-deer-park",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Grant",
    "pay": "$25-$30/hour"
  },
  {
    "title": "The Marie and John Zimmermann Fund",
    "description": "is open to early- and mid-career metalsmiths",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://snagmetalsmith.org/zimmermann-legacy-grants/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://snagmetalsmith.org/zimmermann-legacy-grants/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "The Yéego Action Grant",
    "description": "is open to Native artists and culture bearers ($2.5k)",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.firstpeoplesfund.org/programs/yeego-action-grant",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Yéego Action Grant - First Peoples Fund The Yéego Action Grant provides support for the growing landscape of Native artists and culture bearers who need financial assistance with a professional development opportunity or towards a hardship that is hindering their creative practice. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$2500",
      "deadline": "3:00pm MT on the 10th of every month Grant application FUNDING USAGE GUIDELINES",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://cdn.prod.website-files.com/6480bea85e3e83bf0ca0fefd/64daad2982082a96ece73abd_FPF-Open-Graph.jpg",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.firstpeoplesfund.org/programs/yeego-action-grant",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Grant",
    "pay": "$2500"
  },
  {
    "title": "Melissa Ryan-Hillman",
    "description": "needs a virtual assistant",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.threads.com/@melissaryanhillman/post/DdrFwQpDXTa?xmt=AQG07pBWpr9y9Z59WOwMahi3BWW8q46E5XsyyEN-GjGnzFwouvnWV9bcIaU9GDX7JOKABNg",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Threads • Log in Join Threads to share ideas, ask questions, post random thoughts, find your people and more. Log in with your Instagram. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.cdninstagram.com/rsrc.php/yd/r/kHwIMM5b8PW.webp",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "Threads",
      "url": "https://www.threads.com/@melissaryanhillman/post/DdrFwQpDXTa?xmt=AQG07pBWpr9y9Z59WOwMahi3BWW8q46E5XsyyEN-GjGnzFwouvnWV9bcIaU9GDX7JOKABNg",
      "embedUrl": "https://www.threads.com/@melissaryanhillman/post/DdrFwQpDXTa?xmt=AQG07pBWpr9y9Z59WOwMahi3BWW8q46E5XsyyEN-GjGnzFwouvnWV9bcIaU9GDX7JOKABNg"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "The Asian Cultural Council",
    "description": "(US/Asia) is open to scholars, artists, and arts professionals",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.asianculturalcouncil.org/grant-opportunities",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: RemoteDisconnected.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.asianculturalcouncil.org/grant-opportunities",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "The Southern Artist Spotlight Grant",
    "description": "is open to Southern artists working in literary arts, film, performing arts, visual arts, and traditional arts",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.southarts.org/grants-opportunities/southern-artist-spotlight-grant",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Southern Artist Spotlight Grant | South Arts Southern Artist Spotlight Grants provide funding for arts and community organizations to present Southern artists from the South Arts roster through public performances, screenings, exhibitions, and community engagement activities. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$8,000",
      "deadline": "for this program will not be considered for funding from this grant program unti",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://www.southarts.org/themes/custom/sarts/img/south_arts_default_og.jpg",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.southarts.org/grants-opportunities/southern-artist-spotlight-grant",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Grant",
    "pay": "$8,000"
  },
  {
    "title": "Wide Eye",
    "description": "needs freelance engineers",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.wideeye.co/job/engineering-freelance-pool",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Engineering Freelance PoolWide Eye CreativeCloseWide Eye Creative Wide Eye is a full-service creative agency specializing in interactive design, web development, and digital communications for brands that change the world. Headquartered in Washington, DC. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://mediacdn.wideeyecreative.com/images/s3wtzeqm/production/80863e114f274c64f74a4fc939b081fd24470dfd-1200x630.png?w=1200&h=630",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.wideeye.co/job/engineering-freelance-pool",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Code the Dream",
    "description": "(US) needs a remote full-time senior data engineer",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.idealist.org/en/nonprofit-job/45dc48c85db84746a42e84172eb2ea39-senior-data-engineer-tech-equity-fellowship-code-the-dream-durham",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.idealist.org/en/nonprofit-job/45dc48c85db84746a42e84172eb2ea39-senior-data-engineer-tech-equity-fellowship-code-the-dream-durham",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "KUER",
    "description": "(Salt Lake City, Utah) needs a full-time local host of All Things Considered ($61k-$65k)",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://utah.peopleadmin.com/postings/209631",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Creative Media Producers KUER is looking for a broadcaster and journalist ready to connect with Utahns as local host of NPR’s “All Things Considered.” The host serves as a trusted guide to NPR’s national and international reporting and storytelling. They also give the station its uniquely Utah lens by offering local information to help people navigate their afternoon, sharing KUER’s service-oriented reporting and facilitating conversations that help everyone understand the Beehive State and meet their neighbors.About us:KUER serves Utahns with trustworthy news and information, expertly crafted stories, plus conversations and voices from around our state. To provide this essential public service, we’re dedicated to building an organizational culture that prioritizes collaboration. We seek a team that reflects our entire community, and we encourage contributions from people of varied experiences. We are committed to attracting and retaining a staff whose perspectives are heard and valued. This is essential to our success.Benefits:● Health, dental, and wellness coverage● Employer contribution to personal retirement● Free public transportation pass (Utah Transit Authority)● Paid leave time● Tuition reduction for employee and family membersLearn more about the great benefits of working for University of Utah: benefits.utah.edu Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$61,000 - $65,000",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "social_share.jpg",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://utah.peopleadmin.com/postings/209631",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": "$61,000 - $65,000"
  },
  {
    "title": "WFMT",
    "description": "(Chicago, IL) needs a radio producer ($62k-$80k/year)",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://phe.tbe.taleo.net/phe03/ats/careers/v2/viewRequisition?org=WWCI&cws=46&rid=369",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Hiring Producer - Radio Content, - Chicago, IL View job details and apply now Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$62,700 - $80,000",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://phe.tbe.taleo.net/phe03/ats/careers/v2/viewRequisition?org=WWCI&cws=46&rid=369",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$62,700 - $80,000"
  },
  {
    "title": "American University",
    "description": "needs a full-time podcast producer",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://american.wd1.myworkdayjobs.com/AU/job/4401-Connecticut-Campus-Washington-DC/XMLNAME-1A-Plus-Podcast-Producer--Producer-I-_R4939",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://american.wd1.myworkdayjobs.com/AU/job/4401-Connecticut-Campus-Washington-DC/XMLNAME-1A-Plus-Podcast-Producer--Producer-I-_R4939",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "Chorus America",
    "description": "Music Education Partnership Grants are open now",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://chorusamerica.org/music-ed-grants",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Music Education Partnership Grants | Chorus America We are now accepting proposals for the next grant cycle, and applications are due November 20, 2026.Singing with others in a group is a powerful tool for cross-cultural learning, developing empathy, and building community.Chorus America invites nonprofit organizations and fiscally sponsored projects Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$750",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://chorusamerica.org/music-ed-grants",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Grant",
    "pay": "$750"
  },
  {
    "title": "The Cutting Room Floor",
    "description": "(NYC) needs a creative video editor ($75k)",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://thecuttingroomfloor.typeform.com/video-creative",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Video Editor, Creative Video Editor, Creative at The Cutting Room Floor Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$75",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://images.typeform.com/images/MiKFBoQREqiv/image/default",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://thecuttingroomfloor.typeform.com/video-creative",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$75"
  },
  {
    "title": "ESPN",
    "description": "(Bristol, CT) needs a full-time associate video editor",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.disneycareers.com/en/job/bristol/associate-video-editor/391/101091611616",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.disneycareers.com/en/job/bristol/associate-video-editor/391/101091611616",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "Noah Altink",
    "description": "needs a short-form video editor who edits in Premiere Pro, DaVinci Resolve, or VideoLeap",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.threads.com/share/FwBq3EV_C/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Noah Altink (@noahaltink) on Threads HIRING: High-Level Short-Form Video Editor 🎬 I’m looking for an editor to work with me long-term on fixed, repeatable fashion and creator video formats. You should edit in VideoLeap, Premiere Pro or DaVinci Resolve, understand retention and watch time, and deliver fast without sacrificing quality. You’re detail-oriented, open to feedback and genuinely driven to keep improving. Interested? Send your portfolio, software and availability to info@noah-altink.com Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://instagram.fskt14-1.fna.fbcdn.net/v/t51.82787-15/817742282_17944432470342956_6696145833932006704_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&_nc_map=urlgen_bucketless&ig_cache_key=Mzk5MTkwNjU1MDcwNzkzNjMxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTY3Mi5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=9FxP4WX3dTkQ7kNvwGokf3m&_nc_oc=Adq9VEB3K03KDp7ZoaOjbMK3EvbB-p9XhE0xnX9KVNXXZyqg4b9uSkYbSs-9yp3vTlM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fskt14-1.fna&_nc_gid=kIVgzJwibTcZ6UqzHdOcMA&_nc_ss=7a22e&oh=00_AQNvBl1xMaDm48OZ7KWZbFePXqbbWVnnTqkiqfic1xoKQA&oe=6ABF9EB4",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "Threads",
      "url": "https://www.threads.com/share/FwBq3EV_C/",
      "embedUrl": "https://www.threads.com/share/FwBq3EV_C/"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "VML Health",
    "description": "...new-york) (NYC) needs a part-time social video producer and editor ($50/hour)",
    "category": "Other",
    "date": "2026-09-25",
    "source": "https://www.vml.com/careers/job/8844462002-u...(content truncated",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "The source URL in the imported newsletter data is incomplete or malformed.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$50/hour",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.vml.com/careers/job/8844462002-u...(content truncated",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": "$50/hour"
  },
  {
    "title": "Scientific American",
    "description": "also needs pitches on space, health, chemistry, news, etc.",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://www.linkedin.com/posts/robin-lloyd-b5a320_update-scientific-american-is-alive-and-share-7508182638873038848-gqGI/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Pitch SciAm Editors: Cameron, Frasier, Parshall, Thompson, Billings, Sullivan, Howlett, Satyanarayana | Robin Lloyd posted on the topic | LinkedIn Update: Scientific American is alive and well (post-layoffs and post-sale to LabX). As always, they are taking pitches for online and mag, same freelance budget, same rates. Key editors to pitch: Claire.Cameron@sciam.com (health, breaking online news), Sarah.Frasier@sciam.com (print news, FOB), Allison.Parshall@sciam.com (mind/brain, cognitive sci), Andrea.Thompson@sciam.com (environment, energy, climate), Lee Billings LBillings@sciam.com (space, physics, planetary, physical sciences), Eric Sullivan (tech), Joe Howlett (math), Megha Satyanarayana (health, med, chemistry - meghas@sciam.com. ( Allison Parshall Joseph Howlett, Andrea Thompson, Sarah Lewin Frasier, Claire Cameron) (I'm a contributing ed., got OK to share all this. Don't pitch me, but I'm available to answer some SciAm q's.) Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "is met, the postdoc remains at the bench, and the paper enters the literature wi",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/robin-lloyd-b5a320_update-scientific-american-is-alive-and-share-7508182638873038848-gqGI/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/robin-lloyd-b5a320_update-scientific-american-is-alive-and-share-7508182638873038848-gqGI/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "The Work/Shift Fellowship",
    "description": "will now close applications on October 9",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://r2i-lab.org/work-shift-fellowship/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Work//Shift Fellowship We’re reimagining America’s social safety net to support all people — regardless of work status or wealth — so that diverse communities can thrive with economic resilience, creative freedom, and democratic engagement. Discover our research, investments, experiments, and policy advocacy. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$30,000",
      "deadline": "October 26, 2026 Interviews : November 2-16, 2026 Notification of Decisions: Dec",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://r2i-lab.org/wp-content/uploads/2025/08/undefined.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://r2i-lab.org/work-shift-fellowship/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Fellowship",
    "pay": "$30,000"
  },
  {
    "title": "The Stack",
    "description": "(UK) needs reporters for breaking news with business reporting experience for flexible shifts (“competitive rates” and “full-time equivalent” are red flags here)",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://www.linkedin.com/posts/edwardtargett_journojobs-enterpriseit-tech-share-7508878920377597952-kdLO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: #journojobs #enterpriseit #tech #reporter #journalism #flexiwork #moneyawaits | Edward Targett Jobs Jobs Jobs! We're looking for two more experienced news hounds at The Stack. Freelance basis, full-time-equivalent. Flexible shifts. Join an energetic, growing team! Enterprise technology or business reporting strongly preferred; willingness to geek out about virtual machines/containers/IaaS/infosec/\"digital transformation\" more broadly, without getting sucked into the vendor-hype slipstream greatly favoured. Ability to work independently and with initiative warmly welcomed; openness to feedback likewise. I'd particularly welcome one person willing to work a 4pm - 11pm shift UK time, regularly, reporting in to Tom Krazit, who's on a PT clock. Great features writers with deep technical chops always welcomed, but I'd love to grab someone with a nous and a nose for news, who likes breaking stories, moving stories on, building a solid contacts book and hates being scooped. Don't care where you work, but availability for events at short notice preferred and a willingness and desire to get to them from your own initiative are important. Competitive rates/salary. The Stack is a bootstrapped, journalist-owned media startup: It's scrappy, but that means there is always scope to carve out an important role for yourself and frankly, when you've proved yourself, earn more money, so throw your hat into the ring! DMs open or CV and cover letter to ed at thestack dot technology please #journojobs #enterpriseIT #tech #reporter #journalism #flexiwork #moneyawaits Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://media.licdn.com/dms/image/v2/D4E22AQE9zL-sEMJC7g/feedshare-shrink_1280/B4EaDTlllcIIAQ-/0/1790256241289?e=2147483647&v=beta&t=sLD5sXx6SzAkJPd5kBqnMcw1OxHM1m8-inAEqbnVcJw",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/edwardtargett_journojobs-enterpriseit-tech-share-7508878920377597952-kdLO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/edwardtargett_journojobs-enterpriseit-tech-share-7508878920377597952-kdLO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "The New Transsexual",
    "description": "needs op-eds and essays from trans and allied writers ($150/essay)",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://www.thenewtranssexual.com/p/write-for-the-new-transsexual",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Write for The New Transsexual We pay for published essays. Pitch us. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$150",
      "deadline": "",
      "application": "https://www.thenewtranssexual.com/p/write-for-the-new-transsexual"
    },
    "media": [
      {
        "type": "image",
        "url": "https://substackcdn.com/image/fetch/$s_!4JUh!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F44352fde-2b29-4a47-915a-c99641d6e559_1456x764.png https://substackcdn.com/image/fetch/$s_!azt3!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Faridrennen.substack.com%2Fapi%2Fv1%2Fpost_preview%2F214358653%2Ftwitter.jpg%3Fversion%3D4",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.thenewtranssexual.com/p/write-for-the-new-transsexual",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$150"
  },
  {
    "title": "The Equality Fund Journalism Fellowship",
    "description": "(ODA-eligible countries) is open to working journalists in text, digital, video, and audio ($4k CAD, $500 for reporting expenses)",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://equalityfund.ca/en/posts/journalism-fellowship",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Equality Fund launches inaugural Equality Fund Journalism Fellowship | Equality Fund New opportunity for journalists in Global South countries Equality Fund partners with Canadian Journalists for Free Expression (CJFE) and African Women in Media (AWiM) Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$4000",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://assets.equalityfund.ca/images/v49loltj/production/921defa7028a90f1c083aa846b89d3eea9824777-1536x550.png?rect=244,0,1048,550&w=1200&h=630&q=80&fit=crop",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://equalityfund.ca/en/posts/journalism-fellowship",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Fellowship",
    "pay": "$4000"
  },
  {
    "title": "The New York Times",
    "description": "(US) needs a remote local investigations fellow",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://job-boards.greenhouse.io/thenewyorktimes/jobs/4706618005",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Local Investigations Fellow Remote - USA Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$85,262.84 - $85,262.84",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://s5-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/378/700/original/NYT-WMK-K-RGB_64.png?1769105477",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://job-boards.greenhouse.io/thenewyorktimes/jobs/4706618005",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Fellowship",
    "pay": "$85,262.84 - $85,262.84"
  },
  {
    "title": "Asterisk Magazine",
    "description": "needs pitches for its secrets issue",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://asteriskmag.substack.com/p/write-for-us-now-accepting-pitches-702",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Write for us! Now accepting pitches for Issue 17: Secrets It’s a dark and confusing world out there, and sometimes the hardest part is trying to figure out what’s going on. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": "https://asteriskmag.substack.com/p/write-for-us-now-accepting-pitches-702"
    },
    "media": [
      {
        "type": "image",
        "url": "https://substackcdn.com/image/fetch/$s_!Q3LH!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbe06ccd1-cdf3-48ad-aed9-63edbf3fe13d_2106x2600.jpeg https://substackcdn.com/image/fetch/$s_!yCUE!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fasteriskmag.substack.com%2Fapi%2Fv1%2Fpost_preview%2F216055999%2Ftwitter.jpg%3Fversion%3D4",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Substack",
      "url": "https://asteriskmag.substack.com/p/write-for-us-now-accepting-pitches-702",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "The Media Co-op",
    "description": "(Canada) needs pitches on labour struggles, housing, Indigenous land, Palestine solidarity, disability, etc.",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://mediacoop.ca/node/119373",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Call for Pitches! The Media Co-op is a grassroots media outlet that has been publishing in so-called Canada for more than 20 years. We publish (and pay for) grassroots journalism focused on important issues and struggles based in or related to the Canadian context. Learn how to pitch to us and check out our guidelines, then send your pitch to info@mediacoop.ca. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://mediacoop.ca/sites/mediacoop.ca/files/field/image/MC_logo_orange_1.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://mediacoop.ca/node/119373",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "This Magazine",
    "description": "(Canada) needs features, opinion pieces, news, and arts pieces",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://bsky.app/profile/thismagazine.bsky.social/post/3mwbdnw3xvk23",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: This Magazine (@thismagazine.bsky.social) Attention writers! This Magazine is open for pitches for our next print issue! We're looking for features, opinion and memoir columns, and news and arts pieces. The deadline to get your pitches in is September 30! More information below: this.org/contribute/ https://this.org/contribute/ Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "to get your pitches in is September 30! More information below: this",
      "application": "https://bsky.app/profile/thismagazine.bsky.social/post/3mwbdnw3xvk23"
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Bluesky",
      "url": "https://bsky.app/profile/thismagazine.bsky.social/post/3mwbdnw3xvk23",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "The Washingtonian",
    "description": "always needs new features ($1/word)",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://bsky.app/profile/patrickhruby.bsky.social/post/3mu5xvpbdvc2o",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Patrick Hruby (@patrickhruby.bsky.social) Reminder that I'm always looking for new feature story pitches for @washingtonian.com, and currently assigning pieces for the coming months. If you have a great idea and want to work together, reach out! Email is in my bio. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$1/word",
      "deadline": "",
      "application": "https://bsky.app/profile/patrickhruby.bsky.social/post/3mu5xvpbdvc2o"
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Bluesky",
      "url": "https://bsky.app/profile/patrickhruby.bsky.social/post/3mu5xvpbdvc2o",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$1/word"
  },
  {
    "title": "Scientific American",
    "description": "needs enterprise and news stories on health, mind, brain, tech, and archeology",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://bsky.app/profile/clairehcameron.bsky.social/post/3mw7hiqxrm225",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Claire Cameron (@clairehcameron.bsky.social) Call for pitches! @sciam.bsky.social is commissioning stories of all lengths on all areas of science, but in particular I'd love to hear from journalists with enterprising or newsy stories in: health; mind and brain; technology; and archaeology. claire.cameron@sciam.com, no PR please! Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": "https://bsky.app/profile/clairehcameron.bsky.social/post/3mw7hiqxrm225"
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Bluesky",
      "url": "https://bsky.app/profile/clairehcameron.bsky.social/post/3mw7hiqxrm225",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "The Cut",
    "description": "needs pitches from writers",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://www.threads.com/@stephemcneal/post/DdrNDeykWnI?xmt=AQG0oT1lX4Ri0A4bvjqxyT0cK7RCqGDk1jBDQc5venbPApM5bihMmbuRu3649ZrrXN5loGU",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Stephanie McNeal (@stephemcneal) on Threads Some fun news—I am editing at @thecut for the next 6ish weeks as a maternity leave fill-in! Writers, publicists, etc please pitch me! Let's work together: stephanie.mcneal@voxmedia.com Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://instagram.fskt14-1.fna.fbcdn.net/v/t51.82787-15/822036178_17988875499107506_7212041464736264469_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&ig_cache_key=Mzk5MzM0MjkwODQxNzc5NjU1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuNjM0LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=682dSrAtBZIQ7kNvwGfY4Nx&_nc_oc=AdpLz9vw5faghR4egcaqqHghrQ18Ms3qNxge3pCSIq--9BTuAGCHVgYz7EZy8cb10ts&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fskt14-1.fna&_nc_gid=y3bwVLPn0YYY3ddT75LSpg&_nc_ss=7a22e&oh=00_AQO1X5no065Z6TSjEB5lHrAWNvgU-5otcFzkTgbY6rCx2A&oe=6ABFA326",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "Threads",
      "url": "https://www.threads.com/@stephemcneal/post/DdrNDeykWnI?xmt=AQG0oT1lX4Ri0A4bvjqxyT0cK7RCqGDk1jBDQc5venbPApM5bihMmbuRu3649ZrrXN5loGU",
      "embedUrl": "https://www.threads.com/@stephemcneal/post/DdrNDeykWnI?xmt=AQG0oT1lX4Ri0A4bvjqxyT0cK7RCqGDk1jBDQc5venbPApM5bihMmbuRu3649ZrrXN5loGU"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Stylist Magazine UK",
    "description": "needs first-person pieces and articles for its mistakes series",
    "category": "Journalists",
    "date": "2026-09-25",
    "source": "https://x.com/alipantony/status/2103065408362475841",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Ali Pantony (@alipantony) on X I'm helping out on the @StylistMagazine features desk and I'm looking to commission: • Emotive first-person pieces, particularly with a timely October hook. • Articles for their 'Learn From My Mistakes' series: https://t.co/UGaSQLCTv3 Email alirosepantony@gmail.com. Thanks! Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": true,
      "platform": "X / Twitter",
      "url": "https://x.com/alipantony/status/2103065408362475841",
      "embedUrl": "https://platform.twitter.com/embed/Tweet.html?id=2103065408362475841"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Creative Niche",
    "description": "(Toronto/Canada) needs designers, producers, strategists, etc.",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://www.linkedin.com/posts/brianne-bokla-422b60175_calling-all-torontocanada-freelance-share-7503507862027939840-Z_Wy/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: 🎙️ Calling all Toronto/Canada freelance creatives who are looking to connect/reconnect and are looking for new opportunities, now, soon or later! ⚡art directors ⚡copywriters ⚡designers of all… | Brianne Bokla | 109 comments 🎙️ Calling all Toronto/Canada freelance creatives who are looking to connect/reconnect and are looking for new opportunities, now, soon or later! ⚡art directors ⚡copywriters ⚡designers of all kinds ⚡project managers ⚡producers ⚡accounts people ⚡socials ⚡strategists and beyondddddd! | 109 comments on LinkedIn Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://media.licdn.com/dms/image/v2/D5622AQEHBb2kgrun1A/feedshare-shrink_1280/B56aCHQpIoJgAM-/0/1788975682345?e=2147483647&v=beta&t=H4CNg6a1w4cECLd2mcWIPexrRaKETIasCDE-X78wjb8",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/brianne-bokla-422b60175_calling-all-torontocanada-freelance-share-7503507862027939840-Z_Wy/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/brianne-bokla-422b60175_calling-all-torontocanada-freelance-share-7503507862027939840-Z_Wy/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Movement CFO",
    "description": "(US) needs a remote fractional CFO ($2.5k/month)",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://www.idealist.org/en/consultant-job/1678a0d41c9e480facbbd18630b440cd-fractional-cfo-movement-cfo-tampa",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$2.5",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.idealist.org/en/consultant-job/1678a0d41c9e480facbbd18630b440cd-fractional-cfo-movement-cfo-tampa",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$2.5"
  },
  {
    "title": "The Editorial Freelancers Association",
    "description": "(US) needs a remote part-time community manager ($63k-$67k/year, 30 hours/week)",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://www.idealist.org/en/nonprofit-job/03fed5e3fe0f495d800284c474809ed0-community-manager-part-time-editorial-freelancers-association-new-york",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$63; $67",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.idealist.org/en/nonprofit-job/03fed5e3fe0f495d800284c474809ed0-community-manager-part-time-editorial-freelancers-association-new-york",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": "$63; $67"
  },
  {
    "title": "The Editorial Freelancers Association",
    "description": "(US) needs a remote part-time director of professional development ($72k-$75k/year, 30 hours/week)",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://www.idealist.org/en/nonprofit-job/8a257a4c05e343e99f49bb745153fc5b-director-of-professional-development-part-time-editorial-freelancers-association-new-york",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$72; $75",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.idealist.org/en/nonprofit-job/8a257a4c05e343e99f49bb745153fc5b-director-of-professional-development-part-time-editorial-freelancers-association-new-york",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": "$72; $75"
  },
  {
    "title": "More Perfect Union",
    "description": "(Alexandria, VA) needs an operations fellow ($25/hour)",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://ats.rippling.com/more-perfect-union-action/jobs/2c0b1970-0104-40b1-83fb-5ea434e80e12",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Operations Fellow | Career Opportunities About the Position We are seeking a dynamic and results-driven individual to provide administrative support to our COO and the broader Oper... Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "25 USD",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://ats.rippling.com/more-perfect-union-action/jobs/2c0b1970-0104-40b1-83fb-5ea434e80e12",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Fellowship",
    "pay": "25 USD"
  },
  {
    "title": "Earth Day Initiative",
    "description": "(NYC) needs a remote freelance part-time bookkeeper for a nonprofit (45-50 hours/year)",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://www.idealist.org/en/nonprofit-job/99ae67ba329b4c82a6f24cdbc16e6aed-freelance-part-time-bookkeeper-for-small-nonprofit-earth-day-initiative-new-york",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.idealist.org/en/nonprofit-job/99ae67ba329b4c82a6f24cdbc16e6aed-freelance-part-time-bookkeeper-for-small-nonprofit-earth-day-initiative-new-york",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": ""
  },
  {
    "title": "Double Twizzle Games",
    "description": "needs a remote contract QA tester",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://www.workwithindies.com/careers/double-twizzle-games-qa-tester",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Double Twizzle Games is hiring a QA Tester Double Twizzle Games is looking for a contract QA Tester to help test new features and content for our mobile merge puzzle game Ashe Cove. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "clicking the apply button and filling out the application form",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://cdn.prod.website-files.com/5e94aac2cae3653ce1e66354/6aa202523128f36a831757ed_W9NG1rou0VeYqC3zLqfPqBfzhdno71Zv3V6o8Hu0kUM.webp",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.workwithindies.com/careers/double-twizzle-games-qa-tester",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "America’s Preferred Home Warranty",
    "description": "(US) needs a full-time assistant web dev ($50k)",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=a497c781-4e7e-453f-a304-1abe25a3607c&ccId=19000101_000001&jobId=726658&source=IN&lang=en_US&ittk=0KYDHXB0KX",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Recruitment Recruitment Please switch to a supported browser listed here , or some features may not work correctly. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$50",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=a497c781-4e7e-453f-a304-1abe25a3607c&ccId=19000101_000001&jobId=726658&source=IN&lang=en_US&ittk=0KYDHXB0KX",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": "$50"
  },
  {
    "title": "EmPower You Psychological Services",
    "description": "needs a web developer",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://www.linkedin.com/posts/empower-you-psychological-services_we-need-your-help-recommendations-activity-7504056679777517568-EfBO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: 🖥️ We need your help / recommendations!! 🛜 We’re looking for an experienced website designer / developer or agency to help us develop the website for our health and wellbeing business. We offer… | EmPower You Psychological Services | 43 comments 🖥️ We need your help / recommendations!! 🛜 We’re looking for an experienced website designer / developer or agency to help us develop the website for our health and wellbeing business. We offer a number of different services under one brand umbrella, so we’re looking for someone who has experience creating websites for multi-service businesses and can help us make the overall offer feel clear, cohesive and easy to navigate. SEO is a priority for us, so we’re not looking for design alone. Ideally, we’d like someone who can bring expertise across: • Website strategy, structure and user journey • Design and development • SEO and search strategy • Communicating multiple services clearly under one brand • Performance, analytics and conversion • Ongoing website maintenance and optimisation Experience within health, wellbeing, psychology, coaching or professional services would be a real bonus. We’re looking for someone who can advise us on what we should be doing (and provide us with some challenge!), not just what we ask for! 😊 If you know someone brilliant – or this sounds like you – please comment and tag them below 👍 Emma is out of the office from 11th-23rd September so we won't be able to make any decisions until later in September / early October - so please don't think we're ignoring you if you don't hear from us straight away. Thanks in advance for your help, Em & Em 🌿 | 43 comments on LinkedIn Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/empower-you-psychological-services_we-need-your-help-recommendations-activity-7504056679777517568-EfBO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/empower-you-psychological-services_we-need-your-help-recommendations-activity-7504056679777517568-EfBO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Blue Squared",
    "description": "(Perrysburg, OH) needs an on-site WordPress and Elementor designer/developer ($25-$40/hour)",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://www.indeed.com/viewjob?jk=80edcd14d15a29cf&from=shareddesktop_copy",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$25-$40/hour",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.indeed.com/viewjob?jk=80edcd14d15a29cf&from=shareddesktop_copy",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Hourly",
    "pay": "$25-$40/hour"
  },
  {
    "title": "Geoux Teche",
    "description": "needs a senior full-stack developer ($20-$25/hour)",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://www.indeed.com/viewjob?jk=acb94a3d62aa53ea&from=shareddesktop_copy",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$20-$25/hour",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.indeed.com/viewjob?jk=acb94a3d62aa53ea&from=shareddesktop_copy",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Hourly",
    "pay": "$20-$25/hour"
  },
  {
    "title": "Claim Academy",
    "description": "(St. Louis, MO) needs a part-time WordPress web development and business instructor",
    "category": "Other",
    "date": "2026-09-18",
    "source": "https://claimacademy.org/jobs/wordpress-web-development-business-instructor-part-time-in-person/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://claimacademy.org/jobs/wordpress-web-development-business-instructor-part-time-in-person/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": ""
  },
  {
    "title": "Kemmerer Gazette",
    "description": "nee...(content truncated)...oAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw) (Qatar) needs a full-time head of podcast",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://www.journalismjobs.com/1693665-reporter-kemmerer-gazette",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.journalismjobs.com/1693665-reporter-kemmerer-gazette",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "MPR News",
    "description": "needs a full-time temporary reporter for a one-year position ($35.70-$42.84/hour)",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://recruiting2.ultipro.com/AME1098APMG/JobBoard/4b7ae4eb-a67b-4318-80fc-6d9467f9c542/OpportunityDetail?opportunityId=5536a27a-83c7-45e0-a885-332ef4a94fd4",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: MPR News Post : : : : : : : : : . : : ManyVoices|OneWavelength You are using an unsupported browser. To use this site, please use a supported browser. Download Firefox Download Chrome Download Internet Explorer Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$35.70-$42.84/hour",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://recruiting2.ultipro.com/AME1098APMG/JobBoard/4b7ae4eb-a67b-4318-80fc-6d9467f9c542/OpportunityDetail?opportunityId=5536a27a-83c7-45e0-a885-332ef4a94fd4",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": "$35.70-$42.84/hour"
  },
  {
    "title": "Nelson Media Company",
    "description": "needs a freelance newspaper writer/reporter ($10-$15/hour)",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://www.indeed.com/viewjob?jk=627d780eaab963d0&from=shareddesktop_copy",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$10-$15/hour",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.indeed.com/viewjob?jk=627d780eaab963d0&from=shareddesktop_copy",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Hourly",
    "pay": "$10-$15/hour"
  },
  {
    "title": "Brookline.News",
    "description": "needs a part-time housing reporter ($35-$40k/year)",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://www.journalismjobs.com/1693792-part-time-housing-reporter-brooklinenews",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$35-$40",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.journalismjobs.com/1693792-part-time-housing-reporter-brooklinenews",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": "$35-$40"
  },
  {
    "title": "The Detroit Free Press",
    "description": "needs a grant-funded education reporter (union)",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://jobs.dayforcehcm.com/en-US/gannett/CANDIDATEPORTAL/jobs/90987",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Job Details | Dayforce Jobs Find your next adventure Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://jobs.dayforcehcm.com/en-US/gannett/CANDIDATEPORTAL/jobs/90987",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Grant",
    "pay": ""
  },
  {
    "title": "CBS Boston",
    "description": "needs a freelance web producer",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://careers.paramount.com/job/Boston-Freelance-Web-Producer%2C-CBS-Boston-MA-02134/1409218500/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Freelance Web Producer, CBS Boston Freelance Web Producer, CBS Boston Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://rmkcdn.successfactors.com/44ea18da/237f2670-c032-4ca9-9123-7.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://careers.paramount.com/job/Boston-Freelance-Web-Producer%2C-CBS-Boston-MA-02134/1409218500/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "CBS 62/CW50",
    "description": "(Southfield, MI) needs a freelance sports reporter",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://careers.paramount.com/job/Southfield-Sports-Reporter-%28Freelance%29-MI-48033/1391892900/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Sports Reporter (Freelance) Sports Reporter (Freelance) Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://rmkcdn.successfactors.com/44ea18da/237f2670-c032-4ca9-9123-7.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://careers.paramount.com/job/Southfield-Sports-Reporter-%28Freelance%29-MI-48033/1391892900/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Green Central Banking",
    "description": "needs pitches from freelance journalists",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://greencentralbanking.com/write-for-us/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://greencentralbanking.com/write-for-us/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Jezebel",
    "description": "needs a celebrity and pop culture freelancer to cover celeb news",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://x.com/Jezebel/status/2097701048739610924",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Jezebel (@Jezebel) on X Got some hot takes, juicy gossip, and an eye for dirt to dish? 🗣️ Jezebel is looking for a celebrity and pop culture freelancer to join our fast-paced news team! If interested, send a short intro and a few pitches to submissions[at]jezebel[dot]com with “Celeb News” in the subject line. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": true,
      "platform": "X / Twitter",
      "url": "https://x.com/Jezebel/status/2097701048739610924",
      "embedUrl": "https://platform.twitter.com/embed/Tweet.html?id=2097701048739610924"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Lazo Magazine",
    "description": "needs quirky international stories and essays w/a multicultural angle (Rates range from $300 to $200, depending on length. Pitch: ==**[lazomag@proton.me](mailto:lazomag@proton.me)**)",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://bsky.app/profile/cmaza.bsky.social/post/3mva2o76egs2e",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Cristina Maza (@cmaza.bsky.social) Here to announce that Lazo Magazine has a new #callforpitches open. We're looking for quirky international stories and essays w/a multicultural angle. Rates range from $300 to $200, depending on length. Pitch: lazomag@proton.me. And please share this post widely! lazomagazine.com https://lazomagazine.com/ Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$300",
      "deadline": "",
      "application": "https://bsky.app/profile/cmaza.bsky.social/post/3mva2o76egs2e"
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Bluesky",
      "url": "https://bsky.app/profile/cmaza.bsky.social/post/3mva2o76egs2e",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$300"
  },
  {
    "title": "Queer & Trans Wealth",
    "description": "needs personal essays by two queer and trans writers on freelancing and gig work, navigating money in romantic relationships, worker-owned co-ops, and trans folks living in red states",
    "category": "Journalists",
    "date": "2026-09-18",
    "source": "https://www.queerandtranswealth.org/paid-write-for-queer-trans-wealth/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: 💰[PAID] Write for Queer & Trans Wealth! My sweet community, I have the best news! Queer & Trans Wealth is now accepting pitches for personal essays by queer & trans writers. I’m looking for essays about: * Trans folks who live in red states — especially if you can’t afford to move, or are deliberately building safe spaces where Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$300",
      "deadline": "",
      "application": "https://www.queerandtranswealth.org/paid-write-for-queer-trans-wealth/"
    },
    "media": [
      {
        "type": "image",
        "url": "https://storage.ghost.io/c/af/2e/af2e9e1d-dbd0-4ff0-b88a-e0fbdd237cd5/content/images/2026/08/People-Power.jpg",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.queerandtranswealth.org/paid-write-for-queer-trans-wealth/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$300"
  },
  {
    "title": "Craft",
    "description": "(Western Australia) needs a graphic designer and marketing assistant (10-20 hours/week)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.threads.com/@craftallianceco/post/DdD3Ql9mUal",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Craft Alliance Co. (@craftallianceco) on Threads We are hiring... As we continue to grow and elevate the way we support our clients we are excited to open applications for a Graphic Designer, Digital Ad Expert and Marketing Team Assistant. These are studio based roles in Cowaramup Western Australia. 10-20 hours per week. Link in Bio to find out all the details and apply with cover letter + resume + references - mail@craftalliance.com.au Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://instagram.fskt14-1.fna.fbcdn.net/v/t51.82787-15/790398172_18094980635395149_6846206673437006898_n.webp?_nc_cat=111&_nc_map=urlgen_bucketless&cb=8438d1d6-b026aa3b&ig_cache_key=Mzk4MjI2OTUxNTE3MDQwNjkxMA%3D%3D.3-ccb7-5-cb8438d1d6-b026aa3b&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuOTYwLnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=E0ka9MnDv1UQ7kNvwGYHTDY&_nc_oc=AdqQp-3CBGeuNRcSklelpJxHrCfrcS-1UJ4WZVJ8WvLfRMeYBiql4hQOXAKGJSF4YCc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fskt14-1.fna&_nc_gid=UGeCeVcVxgbwtCkkxBtAvg&_nc_ss=7a22e&oh=00_AQPNmwlxqllcqZdDUU2PQW-FPDUHkSex3eosSh6rL-KfwA&oe=6ABFA8BA",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "Threads",
      "url": "https://www.threads.com/@craftallianceco/post/DdD3Ql9mUal",
      "embedUrl": "https://www.threads.com/@craftallianceco/post/DdD3Ql9mUal"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "TOPPAN Packaging Americas",
    "description": "needs freelance content and social media and a design/presentation development pro",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/justinalbers_freelanceopportunities-contractwork-contentmarketing-activity-7503231281460244480-iOUT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: #freelanceopportunities #contractwork #contentmarketing #socialmediamarketing #graphicdesign #presentationdesign | Justin Albers | 21 comments I’m looking to connect with 1-2 talented freelance/contract professionals (or the right agency) who would be interested in supporting our corporate communications growth at TOPPAN Packaging Americas. I’m currently looking to fill two different needs: Content & Social Media I'm looking for someone who is a strong writer first, but can do much more than write. Ideally, this person is comfortable developing and managing social media content and reporting, creating short-form video for social media, working across digital platforms, and using technology to work efficiently. If you can take an idea and turn it into a strong LinkedIn post, article, video, story, or campaign — and understand how to make content work for the platform it’s on — I’d love to hear from you. Design & Presentation Development I'm also looking for someone with a strong design background who can support PowerPoint template creation, presentation design and development, and other visual communication needs. Experience with video production, editing, or motion graphics would be a big plus. For both roles, I’m looking for people who are creative, dependable, efficient, comfortable working independently, and able to move between strategy and execution. These would be contract positions (or an opportunity for the right agency), and I’d love to hear from people in my network — or anyone you’d recommend. If you’re interested, please email communications@fp.toppan.com with your resume, portfolio/work samples, and a little information about your experience and availability. If someone immediately comes to mind who would be a great fit, I’d appreciate you sharing this with them. Thanks in advance for your help! #FreelanceOpportunities #ContractWork #Conten",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/justinalbers_freelanceopportunities-contractwork-contentmarketing-activity-7503231281460244480-iOUT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/justinalbers_freelanceopportunities-contractwork-contentmarketing-activity-7503231281460244480-iOUT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Poppy Jacobson",
    "description": "needs a social media manager/graphics designer",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.threads.com/@poppyjacobsonbooks/post/DdEZ0nNFM71?xmt=AQG0lBD8KB-JuQVY25lRpbnT3fG_GCUbCa7T0m1T8WEdnsg_nmaz6ymSng0adaHVcgg3Sjg",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Poppy Jacobson (@poppyjacobsonbooks) on Threads I’m hiring a social media manager and graphics designer to run my IG feed starting in January (with a paid trial up front). Author friends, please drop your recommendations! And if you’re taking on new clients, drop a link to your portfolio and your rates. (Please don’t DM me if we’re not mutuals!) Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://instagram.fskt14-1.fna.fbcdn.net/v/t51.82787-19/825322468_17970304905158724_8854781945046887711_n.jpg?stp=dst-jpg_s640x640_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDAwLmMyIn0&_nc_ht=instagram.fskt14-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2gE2pltKRmYfgrGzhSzbHafiXzH982k46LH-6fH8iqHld0twu0QM9j-Tpa036QD12gI&_nc_ohc=6vyXk61WB3AQ7kNvwGA9pGQ&_nc_gid=AMZW4dbpRFU3vHHMXGRnng&edm=APs17CUBAAAA&ccb=7-5&oh=00_AQOEoSrg7A6I5Es-pU-56f5sWemWlKaZf7R3knse1snDog&oe=6ABFBA44&_nc_sid=10d13b",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "Threads",
      "url": "https://www.threads.com/@poppyjacobsonbooks/post/DdEZ0nNFM71?xmt=AQG0lBD8KB-JuQVY25lRpbnT3fG_GCUbCa7T0m1T8WEdnsg_nmaz6ymSng0adaHVcgg3Sjg",
      "embedUrl": "https://www.threads.com/@poppyjacobsonbooks/post/DdEZ0nNFM71?xmt=AQG0lBD8KB-JuQVY25lRpbnT3fG_GCUbCa7T0m1T8WEdnsg_nmaz6ymSng0adaHVcgg3Sjg"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Writer’s Block Bookstore",
    "description": "needs a part-time bookseller",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.threads.com/@writersblockbookstorefl/post/DdFROXaCRSV?xmt=AQG0qbsnGZNqvrLvNKHZzpGac0O3zs2mcd0PmZ3_flmPotLf__0A0qfrnnQHIivIeCMRZMI",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Writer’s Block Bookstore (@writersblockbookstorefl) on Threads 📚 We’re hiring! Do you love books, connecting with readers, and being part of your local indie bookstore community? We’re looking for a part-time bookseller to join the Writer’s Block Bookstore team! If you’re warm, friendly, love helping people find their next great read, and don’t mind being on your feet all day, we’d love to hear from you. Send your resume and cover letter to info@writersblockbookstore.com to apply. #werehiring #hiring #bookseller #indiebookstore #winterparkfl Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://instagram.fskt14-1.fna.fbcdn.net/v/t51.82787-15/802070031_17954795712244539_3824460892530780824_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&cb=8438d1d6-b026aa3b&ig_cache_key=Mzk4MjY2NTE5OTQ3NTI5OTQ3Nw%3D%3D.3-ccb7-5-cb8438d1d6-b026aa3b&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTM1MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=LHQJY-e8-K8Q7kNvwGi4GVU&_nc_oc=AdpnO_ARDXnJEc4OwlsQE5OjB-aji8UcEcajoOVncQmypI_ozU1djjeeN6idDNwIPfk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fskt14-1.fna&_nc_gid=NRpKon_SzmC7Mi4Fpbvrsg&_nc_ss=7a22e&oh=00_AQPqmDI6K_n9PGZ593tdVjeof6n-aX-UetTzN0FjuAOA2A&oe=6ABFADF8",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "Threads",
      "url": "https://www.threads.com/@writersblockbookstorefl/post/DdFROXaCRSV?xmt=AQG0qbsnGZNqvrLvNKHZzpGac0O3zs2mcd0PmZ3_flmPotLf__0A0qfrnnQHIivIeCMRZMI",
      "embedUrl": "https://www.threads.com/@writersblockbookstorefl/post/DdFROXaCRSV?xmt=AQG0qbsnGZNqvrLvNKHZzpGac0O3zs2mcd0PmZ3_flmPotLf__0A0qfrnnQHIivIeCMRZMI"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": ""
  },
  {
    "title": "Betches",
    "description": "(NYC) needs a part-time office and employee experience manager",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://careers.betches.com/jobs/582520-office-employee-experience-manager-part-time",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Office & Employee Experience Manager (Part-Time) - Betches Media About Us: Betches Media is the ultimate digital media and lifestyle destination for women. As a pioneer in the humor and entertainment space, we’ve built a powerful platform that connects with over... Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://screenshots.teamtailor-cdn.com/dd2cf95f-ee55-47f8-8afe-cdb5d5ed59f3-facebook.png?update=1790259468 https://screenshots.teamtailor-cdn.com/dd2cf95f-ee55-47f8-8afe-cdb5d5ed59f3-twitter.png?update=1790259468",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://careers.betches.com/jobs/582520-office-employee-experience-manager-part-time",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": ""
  },
  {
    "title": "The City of Somerville",
    "description": "is offering grants to local artists",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.somervillema.gov/news/applications-now-open-somerville-local-cultural-council-grants-support-arts-and-culture",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Applications Now Open for Somerville Local Cultural Council Grants to Support Arts and Culture | City of Somerville The City of Somerville’s Arts and Culture Division has launched the FY27 cycle of its Local Cultural Council (LCC) Grant Program to support arts, culture, and creative opportunities for community members. Applications for grant funding are open until Thursday, October 15. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$400",
      "deadline": "Thursday, October 15 Wednesday, September 9, 2026 The City of Somerville’s Arts",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.somervillema.gov/news/applications-now-open-somerville-local-cultural-council-grants-support-arts-and-culture",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Grant",
    "pay": "$400"
  },
  {
    "title": "TENEX",
    "description": "(NYC) needs a full-time forward deployed engineer",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://jobs.ashbyhq.com/tenexlabs/2a359a2a-d5ed-48e8-96b8-b93826110ee9",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://jobs.ashbyhq.com/tenexlabs/2a359a2a-d5ed-48e8-96b8-b93826110ee9",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "EA-RS",
    "description": "needs a freelance developer",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/gandolfimiller_freelancedeveloper-intranetdevelopment-webdevelopment-share-7504130865099128832-5UUC/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Sign Up | LinkedIn 500 million+ members | Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/gandolfimiller_freelancedeveloper-intranetdevelopment-webdevelopment-share-7504130865099128832-5UUC/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/gandolfimiller_freelancedeveloper-intranetdevelopment-webdevelopment-share-7504130865099128832-5UUC/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "LAAC-LSCP",
    "description": "needs a freelance front-end developer who can use vue.js, Python, and SQL to work on a support interface",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/kaveri-sheth-651ab114b_freelancer-elsi-job-description-activity-7502682177038479361-94dV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Freelancer ELSI Job Description | Kaveri Sheth 📢 HIRING NOW! 📢 Our team LAAC-LSCP is looking to hire a freelancer to work on the ExELang Legacy Support Interface (ELSI) https://lnkd.in/eMmJhHqM. This is an online platform where users (researchers, students, collaborators, etc.) can upload and standardize large amounts of audio data, run machine learning models on the data, and generate specific metrics. Specifically, we are looking for a freelance front-end developer with full-stack knowledge to help us improve and build on an already existing platform. Some example tasks would be working on the visual display and integrating different annotation types into the platform. 💻 👉 Please see all the info here: https://lnkd.in/eqx_5UUi We anticipate to start the project as soon as possible! Remote work is possible. Interested freelancers should send their resume, references, devis/budget and estimated workflow to ksheth2019@gmail.com. Loann Peurey | Alejandrina Cristia | Sho Tsuji | Emmanuel Dupoux | Laboratoire de Sciences Cognitives et Psycholinguistique d'Ulm (LSCP) #freelancer #hiring #fullstack #machinelearning #ML #frontend #research #programming #contract #remote Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/kaveri-sheth-651ab114b_freelancer-elsi-job-description-activity-7502682177038479361-94dV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/kaveri-sheth-651ab114b_freelancer-elsi-job-description-activity-7502682177038479361-94dV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Magic Dusk",
    "description": "needs a freelance or fractional Shopify developer",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/sarahmchase7_shopify-shopifydeveloper-freelance-share-7503936992607506433-te-p/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: #shopify #shopifydeveloper #freelance #fractional #ecommercejobs | Sarah Chase | 16 comments I'm part of the team at Magic Dusk, an agency working with e-comm luxury beauty, haircare, and accessory brands. We're looking to bring on a senior, US-based freelance Shopify developer, fractional/part-time, not a full-time role. What we’re looking for: - A strategist as much as a builder, someone I can bring a hard problem to and get real technical thinking back, not just execution - Comfortable weighing a few ways to build something, flagging tradeoffs, and helping make the call, not just taking a spec and running - Strong Liquid + Shopify Admin API skills - Freelance/contract, flexible hours, happy to talk specifics If that's you, or you know someone, DM me. Melanie Hutchinson Daniel Kiyoi #Shopify #ShopifyDeveloper #Freelance #Fractional #EcommerceJobs | 16 comments on LinkedIn Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/sarahmchase7_shopify-shopifydeveloper-freelance-share-7503936992607506433-te-p/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/sarahmchase7_shopify-shopifydeveloper-freelance-share-7503936992607506433-te-p/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Distant Meadows",
    "description": "needs a part-time or full-time Godot engineer",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://distantmeadows.com/en/jobs/godot-engineer/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Godot Engineer (Freelance or Full Time, d/f/m) – Distant Meadows Godot Engineer (Freelance or Full Time, d/f/m) – Distant Meadows DE EN Home About Blog Team Jobs Godot Engineer (Freelance or Full Time, d/f/m) Pixel Artist (Freelance or Part-Time, d/f/m) GameDev Workshop Contact Newsletter Waters of Sal Naména Godot Engineer (Freelance or Full-Time, d/f/m) As a Godot Engineer, you will be responsible for building our game worlds using the Godot Game Engine. At the time of your employment, you will be working on our debut game, Waters of Sal Naména, which presents unique challenges for an engineer through its combination of 2D and 3D graphics and its Game Boy Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://distantmeadows.com/en/jobs/godot-engineer/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "Slate",
    "description": "(Brooklyn/Washington, D.C.) needs a full-time associate producer ($75-$81/year)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://jobs.lever.co/slate/1bbb3bab-657a-4506-8d40-bd5a48b1f574",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$75-$81/year",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://jobs.lever.co/slate/1bbb3bab-657a-4506-8d40-bd5a48b1f574",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": "$75-$81/year"
  },
  {
    "title": "Slate",
    "description": "(US) needs a full-time remote podcaster success associate",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://jobs.lever.co/slate/86ebcba7-fc6e-4161-b8e7-ba4141e3b7d2",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://jobs.lever.co/slate/86ebcba7-fc6e-4161-b8e7-ba4141e3b7d2",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "male",
    "description": "voiceover actor and [female voice actor](https://www.backstage.com/casting/story-driven-video-game-episode-1-episodic-series-3246194/female-30-40-5618670/?sid=36a76570-7c63-4116-b81b-ea07a3697969) (30- 40)($300/hour, $900 total)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.backstage.com/casting/story-driven-video-game-episode-1-episodic-series-3246194/male-5618665/?sid=36a76570-7c63-4116-b81b-ea07a3697969",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$300/hour; $900",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.backstage.com/casting/story-driven-video-game-episode-1-episodic-series-3246194/male-5618665/?sid=36a76570-7c63-4116-b81b-ea07a3697969",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Hourly",
    "pay": "$300/hour; $900"
  },
  {
    "title": "A dystopian game",
    "description": "needs multiple voice actors ($150-$300/hour)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.backstage.com/casting/till-debt-do-us-part-3188452/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$150-$300/hour",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.backstage.com/casting/till-debt-do-us-part-3188452/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Hourly",
    "pay": "$150-$300/hour"
  },
  {
    "title": "A video game",
    "description": "(US) needs a remote female voice actor (20-28) ($600 total)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.backstage.com/casting/story-driven-video-game-episode-1-episodic-series-3246194/female-20-28-5618672/?sid=36a76570-7c63-4116-b81b-ea07a3697969",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$600",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.backstage.com/casting/story-driven-video-game-episode-1-episodic-series-3246194/female-20-28-5618672/?sid=36a76570-7c63-4116-b81b-ea07a3697969",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$600"
  },
  {
    "title": "Hadley Clover",
    "description": "needs a freelance podcast editor ($100-$150/episode)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/heathermeister_we-are-hiring-a-freelance-podcast-editor-activity-7500696837050400768-eWBm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: We are hiring a freelance podcast editor. We have a new interview show launching later this year and we are looking for someone to own post-production on an ongoing basis. The shape of it: -Weekly… | Heather Meister Dremak | 41 comments We are hiring a freelance podcast editor. We have a new interview show launching later this year and we are looking for someone to own post-production on an ongoing basis. The shape of it: -Weekly episodes, roughly 45 to 60 minutes of raw audio each -Recorded remotely, so multitrack files with the usual range of home-setup audio -Audio first, with short vertical clips for social Ongoing engagement, paid per episode ($100-$150) What matters most to us is consistency. We would rather work with one person who learns how the show should sound than rotate through cheaper options. If that is your work, comment or send me a message with a sample and your per-episode rate. | 41 comments on LinkedIn Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$100-$150",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/heathermeister_we-are-hiring-a-freelance-podcast-editor-activity-7500696837050400768-eWBm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/heathermeister_we-are-hiring-a-freelance-podcast-editor-activity-7500696837050400768-eWBm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$100-$150"
  },
  {
    "title": "Complexly",
    "description": "needs a music supervisor",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/activity-7501756585338101760-CvbF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Sign Up | LinkedIn 500 million+ members | Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/activity-7501756585338101760-CvbF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/activity-7501756585338101760-CvbF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "An indie animated pilot",
    "description": "needs a male voiceover actor (long-term, $300/2 hours of work)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.backstage.com/casting/hellhounds-3243340/junior-5616202/?sid=36a76570-7c63-4116-b81b-ea07a3697969",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$300/2",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.backstage.com/casting/hellhounds-3243340/junior-5616202/?sid=36a76570-7c63-4116-b81b-ea07a3697969",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$300/2"
  },
  {
    "title": "An indie animated pilot",
    "description": "needs a female voiceover actor (long-term, $100/1 hour of work)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.backstage.com/casting/hellhounds-3243340/suzie-5616206/?sid=36a76570-7c63-4116-b81b-ea07a3697969",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$100/1",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.backstage.com/casting/hellhounds-3243340/suzie-5616206/?sid=36a76570-7c63-4116-b81b-ea07a3697969",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$100/1"
  },
  {
    "title": "HUGE* If True",
    "description": "(US) needs a full-time remote senior producer ($100k-$120k)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://docs.google.com/forms/d/e/1FAIpQLScl2i7WTeJfWwy6NFNRnaexvDssKsvqMV8xj4dxvQZd36xzhg/viewform",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Senior Producer, HUGE* Conversations (FULL TIME) HUGE* is hiring a Senior Producer to help turn the biggest ideas in science and technology into stories millions of people actually understand. About HUGE* At HUGE*, we make optimistic explainer videos about using technology to improve the world. HUGE* is an antidote to the doom-and-gloom tech coverage, helping millions of people see what’s possible – because when they see better futures, they help build them. In just 3 years, HUGE* has grown to more than 14 million subscribers and over 3 billion views across platforms. The show is one of the highest quality and fastest growing science and tech TV series in the world. Our flagship series, HUGE* If True, dives into innovations that could meaningfully shape the future, from humanoid robots at Boston Dynamics, to supersonic planes at NASA, to the Large Hadron Collider at CERN, and more. Our long-form interview series, HUGE* Conversations, features in-depth interviews with the world’s most consequential leaders, including Meta CEO Mark Zuckerberg, NVIDIA CEO Jensen Huang, and Nobel Prize-winning CRISPR pioneer Dr. Jennifer Doudna. Episodes routinely become the most-watched interviews ever recorded with those leaders. Our wildly popular short-form content is published almost every day across YouTube and social platforms. These are thoroughly researched, standalone, produced explainers breaking down complex topics in 60 seconds or less, reaching millions of viewers daily. We are a small team of hard-working creatives who are 100% bought in on our mission. It’s fast-paced, it’s fun, and if you think you’re a good fit we’d love to hear from you. To apply, please fill out the form below and we will reach out if we think it's a good fit. ***** Role Type: Full-Time W2 Location: Remote, US-based ONLY Salary: $100-120k based on experience, plus bonuses About the Role W",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$100-120",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://lh4.googleusercontent.com/oA2oenwrdLAPZqZRd4I1JubwIU3sWaoZNtP4F1l43kn9Zzze0sdEKbvU3VD_K-OqU-8ISRxjtBTX1aY=w1200-h630-p",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://docs.google.com/forms/d/e/1FAIpQLScl2i7WTeJfWwy6NFNRnaexvDssKsvqMV8xj4dxvQZd36xzhg/viewform",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": "$100-120"
  },
  {
    "title": "Wild Alaskan Company",
    "description": "(US) needs a remote senior content and video manager ($125k-$130k/year)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://job-boards.greenhouse.io/wildalaskancompany/jobs/6179469004",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TimeoutError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$125; $130",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://job-boards.greenhouse.io/wildalaskancompany/jobs/6179469004",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$125; $130"
  },
  {
    "title": "Leah Cedeno",
    "description": "needs a remote freelance video editor ($1.5-$3k/month)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://app.joinroster.co/jobs/b194c6f2-32e0-4484-8f95-ebb3dcd307a9/details?referral=kaitlyn-arford",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Join Leah Cedeno's team - Video Editor | Roster I’m looking for a video editor to help edit weekly...joinroster.co Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$1.5-$3",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "/meta_new.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://app.joinroster.co/jobs/b194c6f2-32e0-4484-8f95-ebb3dcd307a9/details?referral=kaitlyn-arford",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$1.5-$3"
  },
  {
    "title": "FutureCanoe",
    "description": "needs a remote freelance assistant editor ($600-$1.2k/month)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://app.joinroster.co/jobs/ff0e5616-42cf-4d08-b0f7-e3176c4607a4/details?referral=kaitlyn-arford",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Join FutureCanoe's team - Assistant Editor | Roster We're looking for someone who can organize a clean timeline...joinroster.co Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$600-$1.2",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "/meta_new.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://app.joinroster.co/jobs/ff0e5616-42cf-4d08-b0f7-e3176c4607a4/details?referral=kaitlyn-arford",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$600-$1.2"
  },
  {
    "title": "Jeej",
    "description": "needs a remote YouTube video editor ($500-$1k/project)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://ytjobs.co/job/44150",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: YT Jobs YT Jobs Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$500-$1",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://ytjobs.co/job/44150",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$500-$1"
  },
  {
    "title": "Pufferfish",
    "description": "(NYC) needs a part-time content editor ($5-$7k/month)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://jobs.thepublishpress.com/job/2519110-content-editor-pufferfish",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$5-$7",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://jobs.thepublishpress.com/job/2519110-content-editor-pufferfish",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": "$5-$7"
  },
  {
    "title": "A new independent journalism podcast",
    "description": "(San Francisco) needs a video producer",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/rachel-cohn-583193138_exciting-news-ive-left-the-times-to-launch-activity-7503529368338501632-7Qsl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Exciting news! I’ve left the Times to launch a new independent podcast with my favs, Kevin Roose and Casey Newton, and we’re now looking for the right person to join our team! The show is going to… | Rachel Cohn | 42 comments Exciting news! I’ve left the Times to launch a new independent podcast with my favs, Kevin Roose and Casey Newton, and we’re now looking for the right person to join our team! The show is going to be a lot like our beloved Hard Fork: smart, irreverent analysis of the most important developments in tech, especially A.I. We’re looking for an experienced, SF-based video producer who can work alongside me in pitching, prepping and cutting full-length episodes of our show on tight deadlines. Our ideal candidate has covered tech, worked on chat show podcasts or other popular YouTube content, and is a whip-fast video editor in Premiere. Bonus points for After Effects expertise and experience shooting in the studio and the field. If you think you’re the right fit or know someone who is, please DM me! | 42 comments on LinkedIn Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/rachel-cohn-583193138_exciting-news-ive-left-the-times-to-launch-activity-7503529368338501632-7Qsl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/rachel-cohn-583193138_exciting-news-ive-left-the-times-to-launch-activity-7503529368338501632-7Qsl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Anna McNulty",
    "description": "(Los Angeles) needs a freelance YouTube producer ($1-$2k)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://app.joinroster.co/jobs/dce2357f-7af9-42d8-85d6-faa53dcc990c/details?referral=kaitlyn-arford",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Join Anna McNulty's team - Youtube producer for Anna McNulty (14M+ subscribers) | Roster Anna McNulty is looking for a producer to assist with...joinroster.co Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$1-$2",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "/meta_new.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://app.joinroster.co/jobs/dce2357f-7af9-42d8-85d6-faa53dcc990c/details?referral=kaitlyn-arford",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$1-$2"
  },
  {
    "title": "8K Clarity",
    "description": "needs a remote 4K nature and wildlife video editor ($100-$600/project)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://ytjobs.co/job/40739",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: YT Jobs YT Jobs Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$100-$600/project",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://ytjobs.co/job/40739",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$100-$600/project"
  },
  {
    "title": "Tenex Media",
    "description": "needs a freelance video editor (ignore the full-time and NYC details, this is fully [remote](https://www.linkedin.com/posts/alex-lieberman_i-need-to-hire-a-cracked-freelance-video-activity-7503529264240168960-rTFK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw))",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://jobs.ashbyhq.com/tenexlabs/fb443d27-abfb-4fe2-82bc-dbe4806ed9e1",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://jobs.ashbyhq.com/tenexlabs/fb443d27-abfb-4fe2-82bc-dbe4806ed9e1",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "Dude Perfect Gaming",
    "description": "needs a remote freelance long-form gaming editor ($800-$2k/month)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://app.joinroster.co/jobs/69cfcef4-c835-445e-83fb-7ff1b589f4ec/details?referral=kaitlyn-arford",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Join Dude Perfect's team - Long | Roster Dude Perfect Gaming is looking for a dedicated, highly reliable...joinroster.co Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$800-$2",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "/meta_new.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://app.joinroster.co/jobs/69cfcef4-c835-445e-83fb-7ff1b589f4ec/details?referral=kaitlyn-arford",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$800-$2"
  },
  {
    "title": "Better Future Media",
    "description": "needs a part-time remote social video producer/editor (20-30 hours/month)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://app.notion.com/p/Podcast-Social-Video-Producer-Editor-at-Better-Future-Media-3ca4e99bfd9f800b93d9d7a1656fca4a",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Notion | Where teams and agents work together A collaborative AI workspace, built on your company context. Build and orchestrate agents right alongside your team's projects, meetings, and connected apps. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://app.notion.com/images/meta/default.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://app.notion.com/p/Podcast-Social-Video-Producer-Editor-at-Better-Future-Media-3ca4e99bfd9f800b93d9d7a1656fca4a",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": ""
  },
  {
    "title": "eSports Andy",
    "description": "needs remote part-time video editors and strategists",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://ytjobs.co/job/11930",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: YT Jobs YT Jobs Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://ytjobs.co/job/11930",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Part-time",
    "pay": ""
  },
  {
    "title": "Night Media",
    "description": "needs a remote podcast clips editor",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://ytjobs.co/job/44156",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: YT Jobs YT Jobs Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://ytjobs.co/job/44156",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Cleveland Clinic",
    "description": "...or ($300-$500/project)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://jobs.clevelandc...(content truncated",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "The source URL in the imported newsletter data is incomplete or malformed.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$300-$500/project",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://jobs.clevelandc...(content truncated",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$300-$500/project"
  },
  {
    "title": "Newsweek",
    "description": "(US) needs a remote full-time associate news editor ($70-$80k)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://job-boards.greenhouse.io/newsweek/jobs/4679468006",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Associate News Editor Remote, United States Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$70,000 - $80,000",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://s6-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/021/300/original/NW_Icon_brand.png?1780003689",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://job-boards.greenhouse.io/newsweek/jobs/4679468006",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": "$70,000 - $80,000"
  },
  {
    "title": "Semrush",
    "description": "needs freelance editors",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/alex-lindley-50823437_im-hiring-freelance-editors-for-the-semrush-activity-7504156421047934976-KBUW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: I'm hiring freelance editors for the Semrush blog. If you're interested, DM me. If you know someone, tag them in the comments. If you just want to help me out, please share this post :) The… | Alex Lindley | 308 comments I'm hiring freelance editors for the Semrush blog. If you're interested, DM me. If you know someone, tag them in the comments. If you just want to help me out, please share this post :) The basics: – Amazing at what you do. And what you do should be substantive editing, primarily. – Serious about deadlines. – Deeply SEO-knowledgeable and genuinely curious about AI. The extras: – Background in SaaS, journalism, or (ideally) both. – Low ego, with the heart of a teacher or coach. – Comfortable challenging briefs, positioning, and editorial approach. If that sounds like you, let's chat. In your DM, please tell me what makes you great, your rates, and your availability. | 308 comments on LinkedIn Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/alex-lindley-50823437_im-hiring-freelance-editors-for-the-semrush-activity-7504156421047934976-KBUW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/alex-lindley-50823437_im-hiring-freelance-editors-for-the-semrush-activity-7504156421047934976-KBUW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Trek The Himalayas",
    "description": "(India) needs an experienced travel book writer",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/rakesh-pant-33aaa429_travelwriter-travelwriting-storytelling-activity-7501293953867145216-2Q8q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: #travelwriter #travelwriting #storytelling #bookproject #contentwriter #traveljobs #hiring #adventuretravel #writingjobs | Rakesh Pant | 17 comments 📚 Looking for a Experienced Travel Book Writer We’re working on an exciting upcoming project that will bring together travel, exploration, people, places and stories from the mountain and I’m looking for someone who can help turn these experiences into a beautifully crafted book. I’m looking for a person who has a strong flair for travel writing and storytelling, along with a good understanding of editing, content curation and book design. This is definitely not a desk-only assignment. ✈️🏔️ The project will involve a lot of travel, exploring destinations, meeting people, understanding local stories and documenting experiences firsthand. If travel excites you, storytelling comes naturally to you, and you know how to transform experiences into words that people want to keep reading, I’d love to connect. Please DM me your CV/portfolio along with a few samples of your writing. Email - hr@trekthehimalayas.com And if you know someone who would be perfect for this, please tag them or share this post with them. #TravelWriter #TravelWriting #Storytelling #BookProject #ContentWriter #TravelJobs #Hiring #AdventureTravel #WritingJobs | 17 comments on LinkedIn Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/rakesh-pant-33aaa429_travelwriter-travelwriting-storytelling-activity-7501293953867145216-2Q8q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/rakesh-pant-33aaa429_travelwriter-travelwriting-storytelling-activity-7501293953867145216-2Q8q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "STEMCELL Technologies",
    "description": "(US) needs two content editors/corporate writers",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://jobs.stemcell.com/job/burnaby/content-editor-and-corporate-writer/8172/100133793648",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://jobs.stemcell.com/job/burnaby/content-editor-and-corporate-writer/8172/100133793648",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Origin",
    "description": "(Porthleven, Cornwall) needs a full-time brand copywriter",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://careers.origincoffee.co.uk/jobs/8324418-brand-copywriter?promotion=2185983-trackable-share-link-linkedin",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://careers.origincoffee.co.uk/jobs/8324418-brand-copywriter?promotion=2185983-trackable-share-link-linkedin",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "Sneak Peak",
    "description": "needs a full-time sports editor/writer",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/gaslin_good-news-im-building-up-the-team-looking-share-7503496829892866048-4NCp/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Sign Up | LinkedIn 500 million+ members | Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/gaslin_good-news-im-building-up-the-team-looking-share-7503496829892866048-4NCp/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/gaslin_good-news-im-building-up-the-team-looking-share-7503496829892866048-4NCp/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": ""
  },
  {
    "title": "PostHog",
    "description": ") needs a remote technical staff writer for blogs and newsletters",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://posthog.com/careers/technical-staff-writer-(blogs-and-newsletters",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Careers - PostHog We're working to increase the number of successful products in the world. Adventurers needed. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$270,750 - $296,400",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://d36j3rcgc2qfsv.cloudfront.net/careers-og.jpeg?1790208000000",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://posthog.com/careers/technical-staff-writer-(blogs-and-newsletters",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$270,750 - $296,400"
  },
  {
    "title": "Mint & Lemon",
    "description": "needs a remote full-time LinkedIn content writer",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/jobs/view/4453091962/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Mint & Lemon hiring LinkedIn Content Writer in City of Johannesburg, Gauteng, South Africa | LinkedIn Posted 10:54:01 AM. Job descriptionMint & Lemon is growing, and we’re looking for a sharp, creative content writer to…See this and similar jobs on LinkedIn. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$500.00 - $2,500.00",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/xlk678jv0tjp79pv10kglzkf",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/jobs/view/4453091962/",
      "embedUrl": "https://www.linkedin.com/jobs/view/4453091962/"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Full-time",
    "pay": "$500.00 - $2,500.00"
  },
  {
    "title": "ServiceStories",
    "description": "needs an AI writer/prompt engineer",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://servicestories.com/careers/ai-writer-prompt-engineer",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: AI Writer / Prompt Engineer | Careers at Service Stories Join Service Stories as a contract-to-hire AI Writer and Prompt Engineer. Own customer content, improve AI visibility, and help build prompting systems and agentic workflows. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://cdn.ploy.ai/4153c107-6bf3-40a9-b1f0-afb1d60119b9/user/e1ea2f3b-69eebc847b773e7900dbddb8-service-stories-web-previ.webp",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://servicestories.com/careers/ai-writer-prompt-engineer",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Brand Hackers",
    "description": "(London) needs a freelance copywriter (£275/day)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://careers.up-world.co/jobs/8254830-copywriter-freelance-brand-hackers",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Copywriter (Freelance) - Brand Hackers - Up Collective We're building a bench of exceptional freelance Copywriters to plug into projects as briefs land. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "£275/day",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://screenshots.teamtailor-cdn.com/00f3fc22-490d-4d64-88ac-da7ec71691a1-facebook.png?update=1790153046 https://screenshots.teamtailor-cdn.com/00f3fc22-490d-4d64-88ac-da7ec71691a1-twitter.png?update=1790153046",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://careers.up-world.co/jobs/8254830-copywriter-freelance-brand-hackers",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "£275/day"
  },
  {
    "title": "Main Character",
    "description": "needs a freelance finance writer for short-form videos",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://jobs.thepublishpress.com/job/2528748-freelancecontract-finance-writer-main-character",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: TypeError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://jobs.thepublishpress.com/job/2528748-freelancecontract-finance-writer-main-character",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Universal Resilience with JT Yu",
    "description": "needs a remote freelance script writer/researcher ($300-$800/month)",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://app.joinroster.co/jobs/19b11393-2863-4524-9da7-297966212273/details?referral=kaitlyn-arford",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Join Universal Resilience with JT Yu's team - Script Writer / Researcher for a Systems Science YouTube Channel | Roster I make research-heavy narrative explainers about technology, economics, geopolitics, history,...joinroster.co Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$300-$800/month",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "/meta_new.png",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://app.joinroster.co/jobs/19b11393-2863-4524-9da7-297966212273/details?referral=kaitlyn-arford",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$300-$800/month"
  },
  {
    "title": "Platypus Digital",
    "description": "needs freelance copywriters for marketing projects",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/platypus-digital_charity-copywriter-callout-we-activity-7504091679524597760-jXyF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: 📣 Charity copywriter callout! 📣 We’re building a small talent pool of experienced freelance copywriters to work with us on future digital marketing projects. We’re looking for copywriters who… | Platypus Digital | B Corp | 33 comments 📣 Charity copywriter callout! 📣 We’re building a small talent pool of experienced freelance copywriters to work with us on future digital marketing projects. We’re looking for copywriters who know the charity world, understand charity audiences and can turn ideas into nice clear, engaging ad and landing page copy. If that sounds like you, we’d love to hear from you! Fill in our short form linked to in the comments. We've kept it really quick and simple - we just need a few details so we can get a feel for your experience and keep you in mind when the right project comes up. And if you know a brilliant freelance copywriter who should be on our radar, feel free to tag them or share this post with them. | 33 comments on LinkedIn Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/platypus-digital_charity-copywriter-callout-we-activity-7504091679524597760-jXyF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/platypus-digital_charity-copywriter-callout-we-activity-7504091679524597760-jXyF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "SenovvA",
    "description": "(Canada) needs a freelance scriptwriter",
    "category": "Other",
    "date": "2026-09-11",
    "source": "https://www.senovva.com/ca/scriptwriter/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Scriptwriter - SenovvA Scriptwriter - SenovvA Work Capabilities About Connect STUDIO 1401 SENOVVA CANADA Scriptwriter We’re looking for a sharp, story-driven Scriptwriter to join our SenovvA Canada freelance team. In this role, you’ll craft documentary-style videos and corporate narratives for a wide range of clients—turning real human stories, company missions, and complex business insights into engaging films. Under the direction of our Creative Director, you’ll dive into pre-interviews, develop story outlines and pre-scripts, steer live on-set conversations, and pull all those interview pieces together into clear Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://www.senovva.com/wp-content/uploads/2019/01/SenovvA-Abstract-BG-DkGrey3-screen.jpg",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.senovva.com/ca/scriptwriter/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "The Food Section",
    "description": "is taking pitches by phone",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/hannaraskin_the-food-sections-pitch-by-phone-era-is-share-7504160017202458624-GI_H/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Ring of truth - The Food Section | Hanna Raskin | 22 comments The Food Section's pitch-by-phone era is underway! This morning, we retired our online pitch form, and published the phone number that journalists have to dial if they want to sell us on a story idea. To read more about our bid to expunge AI from the assignment process, check out today's newsletter: https://lnkd.in/e3FfmaBz | 22 comments on LinkedIn Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://media.licdn.com/dms/image/sync/v2/D4E27AQEYY-u216BoEQ/articleshare-shrink_800/B4EaCQhoj3JQAg-/0/1789131131915?e=2147483647&v=beta&t=vd2tHsuMDAoeke25aVy4kWvjugO_RQdTWAiOkQAbc0Q",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/hannaraskin_the-food-sections-pitch-by-phone-era-is-share-7504160017202458624-GI_H/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/hannaraskin_the-food-sections-pitch-by-phone-era-is-share-7504160017202458624-GI_H/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "The Persephone Miel Fellowships",
    "description": "support journalists outside of the U.S. and Western Europe",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://pulitzercenter.org/grants-fellowships/opportunities-journalists/persephone-miel-fellowships",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Persephone Miel Fellowships The Persephone Miel Fellowship supports journalists from outside the U.S. and Western Europe who are pursuing ambitious reporting projects and enable them to bring their work to a broader global... Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$5,000",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://pulitzercenter.org/grants-fellowships/opportunities-journalists/persephone-miel-fellowships",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Fellowship",
    "pay": "$5,000"
  },
  {
    "title": "The Richard C. Longworth Media Fellowships",
    "description": "promote international reporting by Midwest journalists ($10-$20k)",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://pulitzercenter.org/grants-fellowships/opportunities-journalists/longworth-media-fellowships",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: The Richard C. Longworth Media Fellowships This grant aims to promote international reporting by Midwestern journalists. How to Apply Applications are now closed for the 2026 Longworth Fellowships. Thank you for your interest. Subscribe to our... Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$10,000",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://pulitzercenter.org/grants-fellowships/opportunities-journalists/longworth-media-fellowships",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Fellowship",
    "pay": "$10,000"
  },
  {
    "title": "The Kitchissippi Times",
    "description": "(Ottawa) needs local freelance writers",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/charlie-senack-83a801309_calling-all-journalism-students-recent-grads-activity-7503166123199303682-qFCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Calling all journalism students, recent grads and emerging writers! Who wants to get some published experience in a newspaper that’s seen by more than 16,000 locals? The Kitchissippi Times is… | Charlie Senack Calling all journalism students, recent grads and emerging writers! Who wants to get some published experience in a newspaper that’s seen by more than 16,000 locals? The Kitchissippi Times is investing even further in local journalism, and we’re looking to expand our roster of freelance writers — with the possibility of a contract position in the future. If you’re interested and would like to learn more, send a few writing samples to editor@kitchissippi.com. You must be based in Ottawa. Previous journalism experience isn’t required, but is encouraged! Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://media.licdn.com/dms/image/v2/D5622AQEJ9bAU79ir0w/feedshare-shrink_800/B56aCCZ1GWK0Ac-/0/1788894204703?e=2147483647&v=beta&t=PdLxLuOhRl91RGK96b8cPksf3hR00oRX0vbhzZnQ0Wg",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/charlie-senack-83a801309_calling-all-journalism-students-recent-grads-activity-7503166123199303682-qFCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/charlie-senack-83a801309_calling-all-journalism-students-recent-grads-activity-7503166123199303682-qFCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Matador Network",
    "description": "needs journalists for a press trip to the Riviera Maya (flights, hotel, meals, activities covered)",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://creators.matadornetwork.com/paid-gigs/0v2kv7e8/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Reset in the Riviera Maya: A Maya-Inspired Wellness Escape (Journalist) – Matador Creators Reset in the Riviera Maya: A Maya-Inspired Wellness Escape (Journalist) – Matador Creators Discover Creator Opportunities Members Sign In Join ✖ Sign In Join Discover Creator Opportunities Members All Opportunities Discover your next gig! Write about Your Disneyland Adventure with your Child: $1 per Word Writing Pays $1000 USD Apply Experience the New Hyatt Vivid Cancun Creator Trips Apply Experience Lake Tahoe Like a Local Through Luxury Home Exchange Creator Trips Apply Discover the Unexpected Side of Springfield, Missouri (Journalist) Creator Trips Apply Discover Olde Naples Hotel: A New Ch Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$1",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://creators.matadornetwork.com/paid-gigs/0v2kv7e8/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$1"
  },
  {
    "title": "The Benjamin C. Bradlee Editor of the Year Award",
    "description": "is open now ($5k)",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://nationalpress.org/awards/benjamin-c-bradlee-editor-of-the-year-award/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: APPLY: Benjamin C. Bradlee Editor of the Year Award - National Press Foundation The National Press Foundation has bestowed the Benjamin C. Bradlee Editor of the Year Award since 1984 for achievements in journalism. Apply by Sept. 30, 2026. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$5,000",
      "deadline": "Sept",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://nationalpress.org/wp-content/uploads/2026/01/Picture1.jpg",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://nationalpress.org/awards/benjamin-c-bradlee-editor-of-the-year-award/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Grant",
    "pay": "$5,000"
  },
  {
    "title": "Reiner",
    "description": "needs freelance equine writers",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/614-media-group_are-you-a-talented-equine-writer-looking-activity-7503091688945623043-90Pw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Are you a talented equine writer looking to get back in the saddle? We're looking for freelance contributors for Reiner, the official magazine of the National Reining Horse Association, to cover a… | 614 Media Group Are you a talented equine writer looking to get back in the saddle? We're looking for freelance contributors for Reiner, the official magazine of the National Reining Horse Association, to cover a wide array of top industry events and human/equine interest topics. If you're interested, email your resume and relevant writing samples to Jack@614mediagroup.com. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/614-media-group_are-you-a-talented-equine-writer-looking-activity-7503091688945623043-90Pw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/614-media-group_are-you-a-talented-equine-writer-looking-activity-7503091688945623043-90Pw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Green Living Magazine",
    "description": "needs pitches on energy",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://www.linkedin.com/posts/alice-hafer-a9b6b229_pitches-activity-7503363126076309504-l0gy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: #pitches | Alice Hafer | 92 comments Green Living Magazine is open for #pitches for our online platform. I'd love to see ideas on: energy in any form, whether physical or otherwise, the climate, what fuels you for fall, technology that helps with sustainability or anything that inspires you. We are open for writers looking to get published for the first time, students or hobbyists passionate about sustainability. To pitch: comment below your story idea in 2 sentences and I'll reach out. | 92 comments on LinkedIn Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": true,
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/posts/alice-hafer-a9b6b229_pitches-activity-7503363126076309504-l0gy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw",
      "embedUrl": "https://www.linkedin.com/posts/alice-hafer-a9b6b229_pitches-activity-7503363126076309504-l0gy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2pXugBmA42lRdIvVTivTyaCLV2BZZO_bw"
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "The Pulitzer Center",
    "description": "is offering Work/Environment Reporting Grants",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://pulitzercenter.org/grants-fellowships/opportunities-journalists/our-work-environment-grants",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Our Work/Environment Reporting Grants The Pulitzer Center is now accepting applications for its initiative focused on climate change and its effects on workers and work. As the world heats up, what jobs and employment sectors, what... Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$10,000-20,000,",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://pulitzercenter.org/grants-fellowships/opportunities-journalists/our-work-environment-grants",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Grant",
    "pay": "$10,000-20,000,"
  },
  {
    "title": "The Sunday Long Read",
    "description": "needs longform nonfiction journalism ($2k floor)",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://sundaylongread.com/sunday-long-read-seeking-original-story-pitches/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Pitching the SLR - The Sunday Long Read The Sunday Long Read is seeking pitches for two original longform stories, with an eye toward publication in the second half of 2021. We're looking for ideas specifically from part-time, freelance, unemployed, or recently laid-off writers who have stories that they'd like to tell with us. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$2,000",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://sundaylongread.com/sunday-long-read-seeking-original-story-pitches/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$2,000"
  },
  {
    "title": "Cake Zine",
    "description": "needs pitches on frozen desserts and frozen dessert recipes for its issue Ice Cream Time",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://cakezine.substack.com/p/call-for-pitches-ice-cream-time",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Call for Pitches: Ice Cream Time Our next issue is now open for pitches Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": "https://cakezine.substack.com/p/call-for-pitches-ice-cream-time"
    },
    "media": [
      {
        "type": "image",
        "url": "https://substackcdn.com/image/fetch/$s_!RfiD!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06e06b8b-bca7-4314-868a-4703cebe2620_1440x1440.png https://substackcdn.com/image/fetch/$s_!1lMn!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fcakezine.substack.com%2Fapi%2Fv1%2Fpost_preview%2F214948844%2Ftwitter.jpg%3Fversion%3D4",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Substack",
      "url": "https://cakezine.substack.com/p/call-for-pitches-ice-cream-time",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Matador Network",
    "description": "(US East Coast) is offering a press trip to Scotland during the Tour de France (flights, hotel, meals, and activities covered)",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://creators.matadornetwork.com/paid-gigs/017mngg0/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Tour de Scotland: Discover the Stories Behind Scotland’s Regions – Matador Creators Tour de Scotland: Discover the Stories Behind Scotland’s Regions – Matador Creators Discover Creator Opportunities Members Sign In Join ✖ Sign In Join Discover Creator Opportunities Members All Opportunities Discover your next gig! Write about Your Disneyland Adventure with your Child: $1 per Word Writing Pays $1000 USD Apply Experience the New Hyatt Vivid Cancun Creator Trips Apply Experience Lake Tahoe Like a Local Through Luxury Home Exchange Creator Trips Apply Discover the Unexpected Side of Springfield, Missouri (Journalist) Creator Trips Apply Discover Olde Naples Hotel: A New Chapter i Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$1",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://creators.matadornetwork.com/paid-gigs/017mngg0/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$1"
  },
  {
    "title": "The Fund for Indigenous Journalists",
    "description": "supports reporting on Missing and Murdered Indigenous Journalists with a concentration on women, girls, Two-Spirit, and transgender people",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://iwmf.submittable.com/submit",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: IWMF Submission Manager IWMF Submission Manager Powered By Submittable - Accept and Curate Digital Content Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$2,500",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://images.submittable.com/s3/publisher-files.submittable.com/10044/submit-header.png?width=982&height=220&mode=crop&anchor=middlecenter&v=1510929188&signature=neSPMmB9zvAomHB7SytdLjefRNzcaXIFUBhRVOwVvPA%3d",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://iwmf.submittable.com/submit",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$2,500"
  },
  {
    "title": "Bustle",
    "description": "is always open to freelance pitches",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://www.bustle.com/news/how-to-submit-freelance-pitches-to-bustle-11914601",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: How To Submit Freelance Pitches To Bustle If you're a writer who wants to submit a freelance article to Bustle, here are our pitching guidelines for our Life, Style, Wellness, and Entertainment sections. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://imgix.bustle.com/uploads/image/2022/3/17/79dc0cb1-52d1-4598-9783-a477f0e36d8d-bustle-black.svg",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.bustle.com/news/how-to-submit-freelance-pitches-to-bustle-11914601",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Family Business Magazine",
    "description": "needs freelance writers for the family side of the family business",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://www.familybusinessmagazine.com/uncategorized/writers-guidelines/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Writers' Guidelines Information For: Family Business Advisers Freelance Writers Company/Public Relations Representatives Thank you for your interest! Family Business Magazine welcomes contributed articles from family business advisers and consultants. Please take note of the guidelines below, which are designed to help you determine whether your expertise is a good fit for our pages. The articles we publish […] Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$9/month",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.familybusinessmagazine.com/uncategorized/writers-guidelines/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$9/month"
  },
  {
    "title": "The Fault Lines Reporting Fund",
    "description": "(US) is open to freelance journalists reporting on hate ($2.5-$10k)",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://iwmf.submittable.com/submit",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: IWMF Submission Manager IWMF Submission Manager Powered By Submittable - Accept and Curate Digital Content Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$2,500",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://images.submittable.com/s3/publisher-files.submittable.com/10044/submit-header.png?width=982&height=220&mode=crop&anchor=middlecenter&v=1510929188&signature=neSPMmB9zvAomHB7SytdLjefRNzcaXIFUBhRVOwVvPA%3d",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://iwmf.submittable.com/submit",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$2,500"
  },
  {
    "title": "Spirituality and Health",
    "description": "needs pitches on profiles, faith, health, etc.",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://www.spiritualityhealth.com/submissions",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Submissions | Spirituality+Health Spirituality & Health Magazine provides inspiration for conscious living, healthy diet and lifestyle, social action, spiritual wisdom, and sustainability. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$24.95",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "http://storage.googleapis.com/spirituality-health/images/_1200x630_crop_center-center_82_none/Spirit-Health_2025-0506_noBarcode-1.jpg?mtime=1744663902 http://storage.googleapis.com/spirituality-health/images/_800x418_crop_center-center_82_none/Spirit-Health_2025-0506_noBarcode-1.jpg?mtime=1744663902",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.spiritualityhealth.com/submissions",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$24.95"
  },
  {
    "title": "The Times & The Sunday Times",
    "description": "(London) needs a sports production journalist",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://www.newscareers.co.uk/vacancies/4537/sports-production-journalist-casual.html",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": false,
    "sourceDetails": {
      "summary": "Source could not be fetched automatically: HTTPError.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "",
      "deadline": "",
      "application": ""
    },
    "media": [],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.newscareers.co.uk/vacancies/4537/sports-production-journalist-casual.html",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": ""
  },
  {
    "title": "Mother Jones",
    "description": "always needs freelance writers",
    "category": "Journalists",
    "date": "2026-09-11",
    "source": "https://www.motherjones.com/contribute/writer-guidelines/",
    "newsletter": "",
    "newsletterSubject": "",
    "sourceTitle": "",
    "sourceStatus": "Active",
    "verified": true,
    "sourceDetails": {
      "summary": "Source title: Freelance Writer Guidelines Freelance Writer Guidelines – Mother Jones Skip to main content Donate Donate Subscribe Got tips? Get in touch confidentially. Newsletters Politics Environment Criminal Justice Guns Race Gender + Sexuality Food Podcast Video Magazine Got tips? Get in touch confidentially. Subscribe to our magazine Donate Monthly Donate 50 Years of Fearless Journalism Politics Environment Criminal Justice Guns Race Gender Food Podcast Video Magazine Newsletters Membership Ticker Donate Journalism is under attack. Russian trolls push fake videos with our name on them in order to sow chaos ahead of the election. Metadata and structured data extracted from the source page.",
      "responsibilities": [],
      "requirements": [],
      "location": "",
      "compensation": "$50,000",
      "deadline": "",
      "application": ""
    },
    "media": [
      {
        "type": "image",
        "url": "https://www.motherjones.com/wp-content/themes/motherjones/img/mj-nomaster-2000-1124.jpg",
        "alt": "Media from source"
      }
    ],
    "embed": {
      "supported": false,
      "platform": "Web page",
      "url": "https://www.motherjones.com/contribute/writer-guidelines/",
      "embedUrl": ""
    },
    "sourceNotes": "Synced from the Notion headless database at build time.",
    "type": "Freelance",
    "pay": "$50,000"
  }
];
export const coverageNotes = [
  { subject: "120 Ways to Get Paid as a Creative", date: "2026-09-17", source: "https://www.findfreelanceopportunities.com/p/120-ways-to-get-paid-as-a-creative-7295" },
  { subject: "Get Paid to Write Speculative Fiction, Promote a Newsletter Company, Design American Brandy Merch", date: "2026-09-10", source: "https://www.findfreelanceopportunities.com/p/get-paid-to-write-speculative-fiction-promote-a-newsletter-company-design-american-brandy-merch-41d2" },
];
