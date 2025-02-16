export interface AITool {
  name: string;
  website: string;
  description: string;
  category: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  tools: AITool[];
}

export const categories: Category[] = [
  {
    name: "Text Generation",
    slug: "text-generation",
    description: "AI tools for creating and editing written content",
    tools: [
      {
        name: "ChatGPT",
        website: "https://chat.openai.com",
        description: "Advanced language model for conversation and content creation",
        category: "text-generation"
      },
      {
        name: "Claude",
        website: "https://claude.ai",
        description: "Anthropic's AI assistant for analysis and writing",
        category: "text-generation"
      },
      {
        name: "Jasper",
        website: "https://jasper.ai",
        description: "AI writing assistant for marketing and content teams",
        category: "text-generation"
      },
      {
        name: "Claude 3",
        website: "https://anthropic.com/claude",
        description: "Next-gen AI assistant with 200K context window",
        category: "text-generation"
      },
      {
        name: "Gemini Advanced",
        website: "https://deepmind.google/gemini",
        description: "Google's most capable AI model",
        category: "text-generation"
      }
    ]
  },
  {
    name: "Image Generation",
    slug: "image-generation",
    description: "Create and edit images using AI",
    tools: [
      {
        name: "Midjourney",
        website: "https://midjourney.com",
        description: "Create stunning artwork and illustrations with AI",
        category: "image-generation"
      },
      {
        name: "DALL-E",
        website: "https://openai.com/dall-e-3",
        description: "OpenAI's image generation model",
        category: "image-generation"
      },
      {
        name: "Stable Diffusion",
        website: "https://stability.ai",
        description: "Open-source image generation model",
        category: "image-generation"
      }
    ]
  },
  {
    name: "Video Creation",
    slug: "video-creation",
    description: "AI-powered video editing and generation tools",
    tools: [
      {
        name: "Runway",
        website: "https://runway.ml",
        description: "AI video editing and generation platform",
        category: "video-creation"
      },
      {
        name: "Synthesia",
        website: "https://synthesia.io",
        description: "AI video creation from text",
        category: "video-creation"
      },
      {
        name: "Pika Labs",
        website: "https://pika.art",
        description: "Text-to-video generation platform",
        category: "video-creation"
      },
      {
        name: "HeyGen",
        website: "https://heygen.com",
        description: "AI avatar video generation",
        category: "video-creation"
      }
    ]
  },
  {
    name: "Code Generation",
    slug: "code-generation",
    description: "AI tools for software development",
    tools: [
      {
        name: "GitHub Copilot",
        website: "https://github.com/features/copilot",
        description: "AI pair programmer for code suggestions",
        category: "code-generation"
      },
      {
        name: "Amazon CodeWhisperer",
        website: "https://aws.amazon.com/codewhisperer",
        description: "AI-powered code companion",
        category: "code-generation"
      },
      {
        name: "Tabnine",
        website: "https://tabnine.com",
        description: "AI code completion for multiple IDEs",
        category: "code-generation"
      },
      {
        name: "Codeium",
        website: "https://codeium.com",
        description: "Free AI-powered code completion",
        category: "code-generation"
      }
    ]
  },
  {
    name: "Audio Generation",
    slug: "audio-generation",
    description: "Create and edit audio using AI",
    tools: [
      {
        name: "Mubert",
        website: "https://mubert.com",
        description: "AI music generation platform",
        category: "audio-generation"
      },
      {
        name: "Elevenlabs",
        website: "https://elevenlabs.io",
        description: "AI voice generation and cloning",
        category: "audio-generation"
      }
    ]
  },
  {
    name: "Data Analysis",
    slug: "data-analysis",
    description: "AI tools for analyzing and visualizing data",
    tools: [
      {
        name: "Obviously AI",
        website: "https://obviously.ai",
        description: "No-code AI platform for data analysis",
        category: "data-analysis"
      },
      {
        name: "MindsDB",
        website: "https://mindsdb.com",
        description: "AI database for predictive analytics",
        category: "data-analysis"
      }
    ]
  },
  {
    name: "Customer Service",
    slug: "customer-service",
    description: "AI-powered customer support solutions",
    tools: [
      {
        name: "Intercom",
        website: "https://intercom.com",
        description: "AI customer messaging platform",
        category: "customer-service"
      },
      {
        name: "Ada",
        website: "https://ada.cx",
        description: "AI customer service automation",
        category: "customer-service"
      }
    ]
  },
  {
    name: "Email Assistant",
    slug: "email-assistant",
    description: "AI tools for email management and writing",
    tools: [
      {
        name: "Superhuman",
        website: "https://superhuman.com",
        description: "AI-powered email client",
        category: "email-assistant"
      },
      {
        name: "Lavender",
        website: "https://lavender.ai",
        description: "AI email writing assistant",
        category: "email-assistant"
      }
    ]
  },
  {
    name: "Social Media",
    slug: "social-media",
    description: "AI tools for social media management",
    tools: [
      {
        name: "Buffer",
        website: "https://buffer.com",
        description: "AI-powered social media scheduler",
        category: "social-media"
      },
      {
        name: "Hootsuite",
        website: "https://hootsuite.com",
        description: "Social media management platform with AI",
        category: "social-media"
      }
    ]
  },
  {
    name: "SEO Tools",
    slug: "seo-tools",
    description: "AI-powered search engine optimization",
    tools: [
      {
        name: "Surfer SEO",
        website: "https://surferseo.com",
        description: "AI content optimization platform",
        category: "seo-tools"
      },
      {
        name: "MarketMuse",
        website: "https://marketmuse.com",
        description: "AI content planning and optimization",
        category: "seo-tools"
      }
    ]
  },
  {
    name: "Design Tools",
    slug: "design-tools",
    description: "AI-powered design and creative tools",
    tools: [
      {
        name: "Canva",
        website: "https://canva.com",
        description: "AI-enhanced design platform",
        category: "design-tools"
      },
      {
        name: "Figma",
        website: "https://figma.com",
        description: "Design platform with AI features",
        category: "design-tools"
      }
    ]
  },
  {
    name: "3D Modeling",
    slug: "3d-modeling",
    description: "AI tools for 3D content creation",
    tools: [
      {
        name: "Point-E",
        website: "https://github.com/openai/point-e",
        description: "AI 3D model generation from text",
        category: "3d-modeling"
      },
      {
        name: "GET3D",
        website: "https://nv-tlabs.github.io/GET3D",
        description: "NVIDIA's AI 3D model generator",
        category: "3d-modeling"
      }
    ]
  },
  {
    name: "Translation",
    slug: "translation",
    description: "AI-powered language translation tools",
    tools: [
      {
        name: "DeepL",
        website: "https://deepl.com",
        description: "AI translation platform",
        category: "translation"
      },
      {
        name: "Translate.com",
        website: "https://translate.com",
        description: "AI-powered translation service",
        category: "translation"
      }
    ]
  },
  {
    name: "Research Assistant",
    slug: "research-assistant",
    description: "AI tools for academic and market research",
    tools: [
      {
        name: "Elicit",
        website: "https://elicit.org",
        description: "AI research assistant",
        category: "research-assistant"
      },
      {
        name: "Consensus",
        website: "https://consensus.app",
        description: "AI-powered research paper analysis",
        category: "research-assistant"
      }
    ]
  },
  {
    name: "Legal Tools",
    slug: "legal-tools",
    description: "AI tools for legal research and documentation",
    tools: [
      {
        name: "Harvey",
        website: "https://harvey.ai",
        description: "AI legal research assistant",
        category: "legal-tools"
      },
      {
        name: "Casetext",
        website: "https://casetext.com",
        description: "AI legal research platform",
        category: "legal-tools"
      }
    ]
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "AI tools for healthcare and medical analysis",
    tools: [
      {
        name: "Ada Health",
        website: "https://ada.com",
        description: "AI-powered symptom assessment",
        category: "healthcare"
      },
      {
        name: "Babylon Health",
        website: "https://babylonhealth.com",
        description: "AI healthcare platform",
        category: "healthcare"
      }
    ]
  },
  {
    name: "Education",
    slug: "education",
    description: "AI tools for learning and teaching",
    tools: [
      {
        name: "Duolingo",
        website: "https://duolingo.com",
        description: "AI language learning platform",
        category: "education"
      },
      {
        name: "Gradescope",
        website: "https://gradescope.com",
        description: "AI grading and feedback system",
        category: "education"
      }
    ]
  },
  {
    name: "Finance",
    slug: "finance",
    description: "AI tools for financial analysis and planning",
    tools: [
      {
        name: "Alpaca",
        website: "https://alpaca.markets",
        description: "AI-powered trading platform",
        category: "finance"
      },
      {
        name: "Plaid",
        website: "https://plaid.com",
        description: "AI financial data platform",
        category: "finance"
      }
    ]
  },
  {
    name: "Sales",
    slug: "sales",
    description: "AI tools for sales and lead generation",
    tools: [
      {
        name: "Gong",
        website: "https://gong.io",
        description: "AI sales intelligence platform",
        category: "sales"
      },
      {
        name: "Chorus",
        website: "https://chorus.ai",
        description: "AI sales conversation analysis",
        category: "sales"
      }
    ]
  },
  {
    name: "Marketing",
    slug: "marketing",
    description: "AI tools for marketing automation",
    tools: [
      {
        name: "Persado",
        website: "https://persado.com",
        description: "AI content generation for marketing",
        category: "marketing"
      },
      {
        name: "Pattern89",
        website: "https://pattern89.com",
        description: "AI marketing creative analysis",
        category: "marketing"
      }
    ]
  },
  {
    name: "HR & Recruitment",
    slug: "hr-recruitment",
    description: "AI tools for human resources",
    tools: [
      {
        name: "HiredScore",
        website: "https://hiredscore.com",
        description: "AI recruitment platform",
        category: "hr-recruitment"
      },
      {
        name: "Pymetrics",
        website: "https://pymetrics.ai",
        description: "AI-based talent matching",
        category: "hr-recruitment"
      }
    ]
  },
  {
    name: "Game Development",
    slug: "game-development",
    description: "AI tools for game creation and enhancement",
    tools: [
      {
        name: "Unity Sentis",
        website: "https://unity.com/products/sentis",
        description: "AI-powered game development tools",
        category: "game-development"
      },
      {
        name: "NVIDIA GameGAN",
        website: "https://nvidia.com/gamegan",
        description: "AI game physics and environment generation",
        category: "game-development"
      }
    ]
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    description: "AI-powered security solutions",
    tools: [
      {
        name: "Darktrace",
        website: "https://darktrace.com",
        description: "AI-powered network threat detection",
        category: "cybersecurity"
      },
      {
        name: "CrowdStrike Falcon",
        website: "https://crowdstrike.com",
        description: "AI-driven endpoint protection",
        category: "cybersecurity"
      },
      {
        name: "SentinelOne",
        website: "https://sentinelone.com",
        description: "Autonomous AI endpoint security",
        category: "cybersecurity"
      }
    ]
  },
  {
    name: "Threat Intelligence",
    slug: "threat-intelligence",
    description: "AI threat detection and analysis",
    tools: [
      {
        name: "Recorded Future",
        website: "https://recordedfuture.com",
        description: "AI-powered threat intelligence",
        category: "threat-intelligence"
      },
      {
        name: "Vectra AI",
        website: "https://vectra.ai",
        description: "AI network detection and response",
        category: "threat-intelligence"
      }
    ]
  },
  {
    name: "Vulnerability Management",
    slug: "vulnerability-management",
    description: "AI security assessment tools",
    tools: [
      {
        name: "CyCognito",
        website: "https://cycognito.com",
        description: "AI-powered attack surface management",
        category: "vulnerability-management"
      },
      {
        name: "Pentera",
        website: "https://pentera.io",
        description: "AI automated security validation",
        category: "vulnerability-management"
      }
    ]
  },
  {
    name: "Phishing Detection",
    slug: "phishing-detection",
    description: "AI anti-phishing solutions",
    tools: [
      {
        name: "IRONSCALES",
        website: "https://ironscales.com",
        description: "AI-powered phishing protection",
        category: "phishing-detection"
      },
      {
        name: "Cofense",
        website: "https://cofense.com",
        description: "AI email security and phishing detection",
        category: "phishing-detection"
      }
    ]
  },
  {
    name: "Cloud Security",
    slug: "cloud-security",
    description: "AI cloud security solutions",
    tools: [
      {
        name: "Wiz",
        website: "https://wiz.io",
        description: "AI-powered cloud security",
        category: "cloud-security"
      },
      {
        name: "Orca Security",
        website: "https://orca.security",
        description: "AI cloud security posture management",
        category: "cloud-security"
      }
    ]
  },
  {
    name: "Identity Security",
    slug: "identity-security",
    description: "AI identity protection tools",
    tools: [
      {
        name: "Silverfort",
        website: "https://silverfort.com",
        description: "AI identity threat detection",
        category: "identity-security"
      },
      {
        name: "Authomize",
        website: "https://authomize.com",
        description: "AI identity and access management",
        category: "identity-security"
      }
    ]
  },
  {
    name: "Incident Response",
    slug: "incident-response",
    description: "AI security operations tools",
    tools: [
      {
        name: "IBM QRadar",
        website: "https://ibm.com/qradar",
        description: "AI security incident analysis",
        category: "incident-response"
      },
      {
        name: "Exabeam",
        website: "https://exabeam.com",
        description: "AI-driven security operations",
        category: "incident-response"
      }
    ]
  },
  {
    name: "IoT Security",
    slug: "iot-security",
    description: "AI-powered IoT protection",
    tools: [
      {
        name: "Armis",
        website: "https://armis.com",
        description: "AI IoT/OT device security",
        category: "iot-security"
      },
      {
        name: "Claroty",
        website: "https://claroty.com",
        description: "Industrial IoT security platform",
        category: "iot-security"
      }
    ]
  },
  {
    name: "Security Orchestration",
    slug: "security-orchestration",
    description: "AI security automation tools",
    tools: [
      {
        name: "Palo Alto Cortex XSOAR",
        website: "https://paloaltonetworks.com/cortex/xsoar",
        description: "AI security orchestration platform",
        category: "security-orchestration"
      },
      {
        name: "Splunk Phantom",
        website: "https://splunk.com",
        description: "AI security automation and orchestration",
        category: "security-orchestration"
      }
    ]
  },
  {
    name: "AI Security Testing",
    slug: "ai-security-testing",
    description: "Tools for securing AI systems",
    tools: [
      {
        name: "HiddenLayer",
        website: "https://hiddenlayer.com",
        description: "AI model security platform",
        category: "ai-security-testing"
      },
      {
        name: "Protect AI",
        website: "https://protectai.com",
        description: "AI/ML security monitoring",
        category: "ai-security-testing"
      }
    ]
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "AI tools for property analysis and management",
    tools: [
      {
        name: "HouseCanary",
        website: "https://housecanary.com",
        description: "AI real estate valuation platform",
        category: "real-estate"
      },
      {
        name: "Skyline AI",
        website: "https://skyline.ai",
        description: "AI-powered real estate investment",
        category: "real-estate"
      }
    ]
  },
  {
    name: "Agriculture",
    slug: "agriculture",
    description: "AI solutions for farming and agriculture",
    tools: [
      {
        name: "Prospera",
        website: "https://prospera.ag",
        description: "AI-powered agriculture management",
        category: "agriculture"
      },
      {
        name: "Blue River",
        website: "https://bluerivertechnology.com",
        description: "AI precision agriculture platform",
        category: "agriculture"
      }
    ]
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    description: "AI tools for industrial automation",
    tools: [
      {
        name: "Sight Machine",
        website: "https://sightmachine.com",
        description: "AI manufacturing analytics platform",
        category: "manufacturing"
      },
      {
        name: "Augury",
        website: "https://augury.com",
        description: "AI predictive maintenance platform",
        category: "manufacturing"
      }
    ]
  },
  {
    name: "Supply Chain",
    slug: "supply-chain",
    description: "AI-powered supply chain optimization",
    tools: [
      {
        name: "Blue Yonder",
        website: "https://blueyonder.com",
        description: "AI supply chain management platform",
        category: "supply-chain"
      },
      {
        name: "o9 Solutions",
        website: "https://o9solutions.com",
        description: "AI-powered supply chain planning",
        category: "supply-chain"
      }
    ]
  },
  {
    name: "Scientific Research",
    slug: "scientific-research",
    description: "AI tools for scientific discovery",
    tools: [
      {
        name: "DeepMind AlphaFold",
        website: "https://deepmind.com/research/case-studies/alphafold",
        description: "AI protein structure prediction",
        category: "scientific-research"
      },
      {
        name: "Insilico Medicine",
        website: "https://insilico.com",
        description: "AI drug discovery platform",
        category: "scientific-research"
      }
    ]
  },
  {
    name: "Climate Tech",
    slug: "climate-tech",
    description: "AI solutions for environmental challenges",
    tools: [
      {
        name: "ClimateAI",
        website: "https://climate.ai",
        description: "AI climate risk assessment platform",
        category: "climate-tech"
      },
      {
        name: "Pachama",
        website: "https://pachama.com",
        description: "AI-powered carbon offset verification",
        category: "climate-tech"
      }
    ]
  },
  {
    name: "Robotics",
    slug: "robotics",
    description: "AI-powered robotics solutions",
    tools: [
      {
        name: "Berkshire Grey",
        website: "https://berkshiregrey.com",
        description: "AI-powered robotic automation",
        category: "robotics"
      },
      {
        name: "Covariant",
        website: "https://covariant.ai",
        description: "AI robotics for manufacturing",
        category: "robotics"
      }
    ]
  },
  {
    name: "Personal Finance",
    slug: "personal-finance",
    description: "AI tools for personal financial management",
    tools: [
      {
        name: "Tally",
        website: "https://meettally.com",
        description: "AI debt management assistant",
        category: "personal-finance"
      },
      {
        name: "Digit",
        website: "https://digit.co",
        description: "AI-powered savings automation",
        category: "personal-finance"
      }
    ]
  },
  {
    name: "Fitness & Wellness",
    slug: "fitness-wellness",
    description: "AI-powered health and fitness tools",
    tools: [
      {
        name: "Tonal",
        website: "https://tonal.com",
        description: "AI-powered smart gym",
        category: "fitness-wellness"
      },
      {
        name: "Whoop",
        website: "https://whoop.com",
        description: "AI fitness and recovery tracking",
        category: "fitness-wellness"
      }
    ]
  },
  {
    name: "Music Production",
    slug: "music-production",
    description: "AI tools for music creation and production",
    tools: [
      {
        name: "AIVA",
        website: "https://aiva.ai",
        description: "AI music composer",
        category: "music-production"
      },
      {
        name: "Amper Music",
        website: "https://ampermusic.com",
        description: "AI music creation platform",
        category: "music-production"
      }
    ]
  },
  {
    name: "Event Planning",
    slug: "event-planning",
    description: "AI solutions for event management",
    tools: [
      {
        name: "Grip",
        website: "https://grip.events",
        description: "AI-powered event networking",
        category: "event-planning"
      },
      {
        name: "Bizzabo",
        website: "https://bizzabo.com",
        description: "AI event management platform",
        category: "event-planning"
      }
    ]
  },
  {
    name: "Travel",
    slug: "travel",
    description: "AI tools for travel planning and booking",
    tools: [
      {
        name: "Hopper",
        website: "https://hopper.com",
        description: "AI travel price prediction",
        category: "travel"
      },
      {
        name: "SnapTravel",
        website: "https://snaptravel.com",
        description: "AI-powered travel booking",
        category: "travel"
      }
    ]
  },
  {
    name: "Automotive",
    slug: "automotive",
    description: "AI solutions for automotive industry",
    tools: [
      {
        name: "Waymo",
        website: "https://waymo.com",
        description: "AI autonomous driving technology",
        category: "automotive"
      },
      {
        name: "Cruise",
        website: "https://getcruise.com",
        description: "AI self-driving car platform",
        category: "automotive"
      }
    ]
  },
  {
    name: "Smart Home",
    slug: "smart-home",
    description: "AI-powered home automation",
    tools: [
      {
        name: "Josh.ai",
        website: "https://josh.ai",
        description: "AI home automation assistant",
        category: "smart-home"
      },
      {
        name: "Nest",
        website: "https://nest.com",
        description: "AI-powered smart home devices",
        category: "smart-home"
      }
    ]
  },
  {
    name: "Content Moderation",
    slug: "content-moderation",
    description: "AI tools for content filtering and moderation",
    tools: [
      {
        name: "Hive",
        website: "https://thehive.ai",
        description: "AI content moderation platform",
        category: "content-moderation"
      },
      {
        name: "Clarifai",
        website: "https://clarifai.com",
        description: "AI visual content moderation",
        category: "content-moderation"
      }
    ]
  },
  {
    name: "Astronomy",
    slug: "astronomy",
    description: "AI tools for space exploration and research",
    tools: [
      {
        name: "Morpheus",
        website: "https://morpheus.space",
        description: "AI space mission planning",
        category: "astronomy"
      },
      {
        name: "AstroML",
        website: "https://astroml.org",
        description: "AI astronomy data analysis",
        category: "astronomy"
      }
    ]
  },
  {
    name: "Sports Analytics",
    slug: "sports-analytics",
    description: "AI tools for sports performance analysis",
    tools: [
      {
        name: "Second Spectrum",
        website: "https://secondspectrum.com",
        description: "AI sports analytics platform",
        category: "sports-analytics"
      },
      {
        name: "Stats Perform",
        website: "https://statsperform.com",
        description: "AI-powered sports data analysis",
        category: "sports-analytics"
      }
    ]
  },
  {
    name: "Fashion",
    slug: "fashion",
    description: "AI tools for fashion design and retail",
    tools: [
      {
        name: "Vue.ai",
        website: "https://vue.ai",
        description: "AI fashion retail platform",
        category: "fashion"
      },
      {
        name: "Stitch Fix",
        website: "https://stitchfix.com",
        description: "AI-powered personal styling",
        category: "fashion"
      }
    ]
  },
  {
    name: "Quantum Computing",
    slug: "quantum-computing",
    description: "AI tools for quantum computing",
    tools: [
      {
        name: "QC Ware",
        website: "https://qcware.com",
        description: "AI quantum computing platform",
        category: "quantum-computing"
      },
      {
        name: "Zapata Computing",
        website: "https://zapatacomputing.com",
        description: "AI quantum software solutions",
        category: "quantum-computing"
      }
    ]
  },
  {
    name: "AI Agents",
    slug: "ai-agents",
    description: "Autonomous AI agents for task automation",
    tools: [
      {
        name: "AutoGPT",
        website: "https://autogpt.net",
        description: "Open-source autonomous AI agent",
        category: "ai-agents"
      },
      {
        name: "BabyAGI",
        website: "https://babyagi.org",
        description: "Task-driven autonomous AI agent",
        category: "ai-agents"
      },
      {
        name: "Devika",
        website: "https://devika.ai",
        description: "AI software engineer agent",
        category: "ai-agents"
      }
    ]
  },
  {
    name: "Dev Tools",
    slug: "dev-tools",
    description: "AI-powered developer tools",
    tools: [
      {
        name: "Replit Ghostwriter",
        website: "https://replit.com/site/ghostwriter",
        description: "AI pair programmer in your IDE",
        category: "dev-tools"
      },
      {
        name: "Cody by Sourcegraph",
        website: "https://sourcegraph.com/cody",
        description: "AI code assistant with context awareness",
        category: "dev-tools"
      },
      {
        name: "Cursor.sh",
        website: "https://cursor.sh",
        description: "AI-first code editor",
        category: "dev-tools"
      },
      {
        name: "Continue",
        website: "https://continue.dev",
        description: "Open-source AI coding assistant",
        category: "dev-tools"
      },
      {
        name: "BladeRunner",
        website: "https://bladerunner.app",
        description: "AI CLI command generator",
        category: "dev-tools"
      }
    ]
  },
  {
    name: "Podcasting",
    slug: "podcasting",
    description: "AI tools for podcast creation",
    tools: [
      {
        name: "Descript",
        website: "https://descript.com",
        description: "AI audio/video editing with text-to-speech",
        category: "podcasting"
      },
      {
        name: "Adobe Podcast",
        website: "https://podcast.adobe.com",
        description: "AI audio enhancement and transcription",
        category: "podcasting"
      }
    ]
  },
  {
    name: "3D Avatars",
    slug: "3d-avatars",
    description: "AI-generated digital humans",
    tools: [
      {
        name: "Synthesys",
        website: "https://synthesys.io",
        description: "AI-generated video avatars",
        category: "3d-avatars"
      },
      {
        name: "D-ID",
        website: "https://d-id.com",
        description: "Talking avatar creation platform",
        category: "3d-avatars"
      }
    ]
  },
  {
    name: "Architecture",
    slug: "architecture",
    description: "AI for architectural design",
    tools: [
      {
        name: "ArkDesign.ai",
        website: "https://arkdesign.ai",
        description: "AI architectural concept generation",
        category: "architecture"
      },
      {
        name: "Maket",
        website: "https://maket.ai",
        description: "AI-powered architectural planning",
        category: "architecture"
      }
    ]
  },
  {
    name: "AI Safety",
    slug: "ai-safety",
    description: "Tools for responsible AI development",
    tools: [
      {
        name: "Anthropic Constitutional AI",
        website: "https://anthropic.com",
        description: "Safety-focused AI alignment framework",
        category: "ai-safety"
      },
      {
        name: "Hugging Face Safetensors",
        website: "https://huggingface.co/docs/safetensors",
        description: "Secure tensor storage format",
        category: "ai-safety"
      }
    ]
  },
  {
    name: "Bioinformatics",
    slug: "bioinformatics",
    description: "AI for biological data analysis",
    tools: [
      {
        name: "DeepVariant",
        website: "https://github.com/google/deepvariant",
        description: "AI-powered genomic variant caller",
        category: "bioinformatics"
      },
      {
        name: "AlphaFold DB",
        website: "https://alphafold.ebi.ac.uk",
        description: "AI-predicted protein structures database",
        category: "bioinformatics"
      }
    ]
  },
  {
    name: "AI Testing",
    slug: "ai-testing",
    description: "AI-powered software testing tools",
    tools: [
      {
        name: "Diffblue Cover",
        website: "https://diffblue.com",
        description: "AI-generated unit tests for Java",
        category: "ai-testing"
      },
      {
        name: "Applitools",
        website: "https://applitools.com",
        description: "AI-powered visual testing",
        category: "ai-testing"
      },
      {
        name: "Bugasura",
        website: "https://bugasura.com",
        description: "AI test case generation",
        category: "ai-testing"
      }
    ]
  },
  {
    name: "DevOps & MLOps",
    slug: "devops-mlops",
    description: "AI for deployment and operations",
    tools: [
      {
        name: "Datadog AI Monitoring",
        website: "https://datadoghq.com",
        description: "AI-powered infrastructure monitoring",
        category: "devops-mlops"
      },
      {
        name: "Kubeflow",
        website: "https://kubeflow.org",
        description: "ML orchestration on Kubernetes",
        category: "devops-mlops"
      },
      {
        name: "Weights & Biases",
        website: "https://wandb.ai",
        description: "AI experiment tracking",
        category: "devops-mlops"
      }
    ]
  },
  {
    name: "Code Review",
    slug: "code-review",
    description: "AI-assisted code analysis",
    tools: [
      {
        name: "DeepCode (Snyk Code)",
        website: "https://snyk.io",
        description: "AI-powered code review",
        category: "code-review"
      },
      {
        name: "CodeClimate",
        website: "https://codeclimate.com",
        description: "Automated code review platform",
        category: "code-review"
      }
    ]
  },
  {
    name: "Documentation",
    slug: "documentation",
    description: "AI documentation tools",
    tools: [
      {
        name: "Mintlify",
        website: "https://mintlify.com",
        description: "AI-powered code documentation",
        category: "documentation"
      },
      {
        name: "Swimm",
        website: "https://swimm.io",
        description: "AI-generated code documentation",
        category: "documentation"
      }
    ]
  },
  {
    name: "API Development",
    slug: "api-development",
    description: "AI tools for API creation",
    tools: [
      {
        name: "Postman AI",
        website: "https://postman.com",
        description: "AI-powered API development",
        category: "api-development"
      },
      {
        name: "Akita",
        website: "https://akita.com",
        description: "AI API behavior monitoring",
        category: "api-development"
      }
    ]
  },
  {
    name: "Database Optimization",
    slug: "database-optimization",
    description: "AI tools for database performance tuning",
    tools: [
      {
        name: "EverSQL",
        website: "https://www.eversql.com",
        description: "AI-powered SQL query optimization",
        category: "database-optimization"
      },
      {
        name: "pgHero",
        website: "https://github.com/ankane/pghero",
        description: "AI-driven PostgreSQL insights",
        category: "database-optimization"
      }
    ]
  },
  {
    name: "AI Query Assistants",
    slug: "ai-query-assistants",
    description: "Natural language to SQL tools",
    tools: [
      {
        name: "Vanna.ai",
        website: "https://vanna.ai",
        description: "AI SQL agent for analytics",
        category: "ai-query-assistants"
      },
      {
        name: "Text2SQL",
        website: "https://text2sql.ai",
        description: "Generate SQL from natural language",
        category: "ai-query-assistants"
      }
    ]
  },
  {
    name: "Database Migration",
    slug: "database-migration",
    description: "AI-assisted database migration tools",
    tools: [
      {
        name: "DBMate",
        website: "https://dbmate.com",
        description: "AI-powered schema migrations",
        category: "database-migration"
      },
      {
        name: "Flyway",
        website: "https://flywaydb.org",
        description: "Intelligent database versioning",
        category: "database-migration"
      }
    ]
  },
  {
    name: "Vector Databases",
    slug: "vector-databases",
    description: "AI-optimized vector databases",
    tools: [
      {
        name: "Pinecone",
        website: "https://pinecone.io",
        description: "AI-native vector database",
        category: "vector-databases"
      },
      {
        name: "Weaviate",
        website: "https://weaviate.io",
        description: "Open-source vector search engine",
        category: "vector-databases"
      },
      {
        name: "Chroma",
        website: "https://chromadb.dev",
        description: "AI-native open-source embedding store",
        category: "vector-databases"
      }
    ]
  },
  {
    name: "Database Security",
    slug: "database-security",
    description: "AI-powered database protection",
    tools: [
      {
        name: "IBM Guardium",
        website: "https://ibm.com/guardium",
        description: "AI-driven database security",
        category: "database-security"
      },
      {
        name: "DataSunrise",
        website: "https://datasunrise.com",
        description: "AI database security & masking",
        category: "database-security"
      }
    ]
  },
  {
    name: "NoSQL Optimization",
    slug: "nosql-optimization",
    description: "AI tools for NoSQL databases",
    tools: [
      {
        name: "MongoDB Atlas AI",
        website: "https://mongodb.com/atlas/ai",
        description: "AI-powered query optimization for MongoDB",
        category: "nosql-optimization"
      },
      {
        name: "Cassandra.AI",
        website: "https://cassandra.ai",
        description: "AI-driven Apache Cassandra tuning",
        category: "nosql-optimization"
      }
    ]
  },
  {
    name: "Logo Design",
    slug: "logo-design",
    description: "AI tools for creating professional logos",
    tools: [
      {
        name: "Looka",
        website: "https://looka.com",
        description: "AI-powered logo maker with brand kits",
        category: "logo-design"
      },
      {
        name: "Designs.ai",
        website: "https://designs.ai",
        description: "AI logo generator with style matching",
        category: "logo-design"
      },
      {
        name: "Hatchful",
        website: "https://hatchful.shopify.com",
        description: "Free AI logo generator by Shopify",
        category: "logo-design"
      }
    ]
  },
  {
    name: "Icon Design",
    slug: "icon-design",
    description: "AI tools for creating custom icons",
    tools: [
      {
        name: "Iconify AI",
        website: "https://iconify.design",
        description: "AI-generated icons in multiple styles",
        category: "icon-design"
      },
      {
        name: "Icons8",
        website: "https://icons8.com",
        description: "AI-powered icon generator and library",
        category: "icon-design"
      },
      {
        name: "Glyphfinder",
        website: "https://glyphfinder.com",
        description: "AI icon search and design tool",
        category: "icon-design"
      }
    ]
  },
  {
    name: "Brand Identity",
    slug: "brand-identity",
    description: "AI tools for complete brand design",
    tools: [
      {
        name: "Brandmark",
        website: "https://brandmark.io",
        description: "AI logo and brand identity designer",
        category: "brand-identity"
      },
      {
        name: "Tailor Brands",
        website: "https://tailorbrands.com",
        description: "AI-powered brand identity platform",
        category: "brand-identity"
      },
      {
        name: "Canva Brand Kit",
        website: "https://canva.com",
        description: "AI-assisted brand identity design",
        category: "brand-identity"
      }
    ]
  },
  {
    name: "Graphic Design",
    slug: "graphic-design",
    description: "AI tools for visual content creation",
    tools: [
      {
        name: "Adobe Firefly",
        website: "https://adobe.com/firefly",
        description: "AI graphic design tool suite",
        category: "graphic-design"
      },
      {
        name: "Khroma",
        website: "https://khroma.co",
        description: "AI color palette generator",
        category: "graphic-design"
      },
      {
        name: "Designs.ai",
        website: "https://designs.ai",
        description: "AI-powered graphic design suite",
        category: "graphic-design"
      }
    ]
  }
];