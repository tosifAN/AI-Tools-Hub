export interface AITool {
  name: string;
  website: string;
  description: string;
  category: string;
}

export interface Category {
  name: string;
  description: string;
  tools: AITool[];
}

export const categories: Category[] = [
  {
    name: "Text Generation",
    description: "AI tools for creating and editing written content",
    tools: [
      {
        name: "ChatGPT",
        website: "https://chat.openai.com",
        description: "Advanced language model for conversation and content creation",
        category: "Text Generation"
      },
      {
        name: "Claude",
        website: "https://claude.ai",
        description: "Anthropic's AI assistant for analysis and writing",
        category: "Text Generation"
      },
      {
        name: "Jasper",
        website: "https://jasper.ai",
        description: "AI writing assistant for marketing and content teams",
        category: "Text Generation"
      },
      {
        name: "Claude 3",
        website: "https://anthropic.com/claude",
        description: "Next-gen AI assistant with 200K context window",
        category: "Text Generation"
      },
      {
        name: "Gemini Advanced",
        website: "https://deepmind.google/gemini",
        description: "Google's most capable AI model",
        category: "Text Generation"
      }
    ]
  },
  {
    name: "Image Generation",
    description: "Create and edit images using AI",
    tools: [
      {
        name: "Midjourney",
        website: "https://midjourney.com",
        description: "Create stunning artwork and illustrations with AI",
        category: "Image Generation"
      },
      {
        name: "DALL-E",
        website: "https://openai.com/dall-e-3",
        description: "OpenAI's image generation model",
        category: "Image Generation"
      },
      {
        name: "Stable Diffusion",
        website: "https://stability.ai",
        description: "Open-source image generation model",
        category: "Image Generation"
      }
    ]
  },
  {
    name: "Video Creation",
    description: "AI-powered video editing and generation tools",
    tools: [
      {
        name: "Runway",
        website: "https://runway.ml",
        description: "AI video editing and generation platform",
        category: "Video Creation"
      },
      {
        name: "Synthesia",
        website: "https://synthesia.io",
        description: "AI video creation from text",
        category: "Video Creation"
      },
      {
        name: "Pika Labs",
        website: "https://pika.art",
        description: "Text-to-video generation platform",
        category: "Video Creation"
      },
      {
        name: "HeyGen",
        website: "https://heygen.com",
        description: "AI avatar video generation",
        category: "Video Creation"
      }
    ]
  },
  {
    name: "Code Generation",
    description: "AI tools for software development",
    tools: [
      {
        name: "GitHub Copilot",
        website: "https://github.com/features/copilot",
        description: "AI pair programmer for code suggestions",
        category: "Code Generation"
      },
      {
        name: "Amazon CodeWhisperer",
        website: "https://aws.amazon.com/codewhisperer",
        description: "AI-powered code companion",
        category: "Code Generation"
      },
      {
        name: "Tabnine",
        website: "https://tabnine.com",
        description: "AI code completion for multiple IDEs",
        category: "Code Generation"
      },
      {
        name: "Codeium",
        website: "https://codeium.com",
        description: "Free AI-powered code completion",
        category: "Code Generation"
      }
    ]
  },
  {
    name: "Audio Generation",
    description: "Create and edit audio using AI",
    tools: [
      {
        name: "Mubert",
        website: "https://mubert.com",
        description: "AI music generation platform",
        category: "Audio Generation"
      },
      {
        name: "Elevenlabs",
        website: "https://elevenlabs.io",
        description: "AI voice generation and cloning",
        category: "Audio Generation"
      }
    ]
  },
  {
    name: "Data Analysis",
    description: "AI tools for analyzing and visualizing data",
    tools: [
      {
        name: "Obviously AI",
        website: "https://obviously.ai",
        description: "No-code AI platform for data analysis",
        category: "Data Analysis"
      },
      {
        name: "MindsDB",
        website: "https://mindsdb.com",
        description: "AI database for predictive analytics",
        category: "Data Analysis"
      }
    ]
  },
  {
    name: "Customer Service",
    description: "AI-powered customer support solutions",
    tools: [
      {
        name: "Intercom",
        website: "https://intercom.com",
        description: "AI customer messaging platform",
        category: "Customer Service"
      },
      {
        name: "Ada",
        website: "https://ada.cx",
        description: "AI customer service automation",
        category: "Customer Service"
      }
    ]
  },
  {
    name: "Email Assistant",
    description: "AI tools for email management and writing",
    tools: [
      {
        name: "Superhuman",
        website: "https://superhuman.com",
        description: "AI-powered email client",
        category: "Email Assistant"
      },
      {
        name: "Lavender",
        website: "https://lavender.ai",
        description: "AI email writing assistant",
        category: "Email Assistant"
      }
    ]
  },
  {
    name: "Social Media",
    description: "AI tools for social media management",
    tools: [
      {
        name: "Buffer",
        website: "https://buffer.com",
        description: "AI-powered social media scheduler",
        category: "Social Media"
      },
      {
        name: "Hootsuite",
        website: "https://hootsuite.com",
        description: "Social media management platform with AI",
        category: "Social Media"
      }
    ]
  },
  {
    name: "SEO Tools",
    description: "AI-powered search engine optimization",
    tools: [
      {
        name: "Surfer SEO",
        website: "https://surferseo.com",
        description: "AI content optimization platform",
        category: "SEO Tools"
      },
      {
        name: "MarketMuse",
        website: "https://marketmuse.com",
        description: "AI content planning and optimization",
        category: "SEO Tools"
      }
    ]
  },
  {
    name: "Design Tools",
    description: "AI-powered design and creative tools",
    tools: [
      {
        name: "Canva",
        website: "https://canva.com",
        description: "AI-enhanced design platform",
        category: "Design Tools"
      },
      {
        name: "Figma",
        website: "https://figma.com",
        description: "Design platform with AI features",
        category: "Design Tools"
      }
    ]
  },
  {
    name: "3D Modeling",
    description: "AI tools for 3D content creation",
    tools: [
      {
        name: "Point-E",
        website: "https://github.com/openai/point-e",
        description: "AI 3D model generation from text",
        category: "3D Modeling"
      },
      {
        name: "GET3D",
        website: "https://nv-tlabs.github.io/GET3D",
        description: "NVIDIA's AI 3D model generator",
        category: "3D Modeling"
      }
    ]
  },
  {
    name: "Translation",
    description: "AI-powered language translation tools",
    tools: [
      {
        name: "DeepL",
        website: "https://deepl.com",
        description: "AI translation platform",
        category: "Translation"
      },
      {
        name: "Translate.com",
        website: "https://translate.com",
        description: "AI-powered translation service",
        category: "Translation"
      }
    ]
  },
  {
    name: "Research Assistant",
    description: "AI tools for academic and market research",
    tools: [
      {
        name: "Elicit",
        website: "https://elicit.org",
        description: "AI research assistant",
        category: "Research Assistant"
      },
      {
        name: "Consensus",
        website: "https://consensus.app",
        description: "AI-powered research paper analysis",
        category: "Research Assistant"
      }
    ]
  },
  {
    name: "Legal Tools",
    description: "AI tools for legal research and documentation",
    tools: [
      {
        name: "Harvey",
        website: "https://harvey.ai",
        description: "AI legal research assistant",
        category: "Legal Tools"
      },
      {
        name: "Casetext",
        website: "https://casetext.com",
        description: "AI legal research platform",
        category: "Legal Tools"
      }
    ]
  },
  {
    name: "Healthcare",
    description: "AI tools for healthcare and medical analysis",
    tools: [
      {
        name: "Ada Health",
        website: "https://ada.com",
        description: "AI-powered symptom assessment",
        category: "Healthcare"
      },
      {
        name: "Babylon Health",
        website: "https://babylonhealth.com",
        description: "AI healthcare platform",
        category: "Healthcare"
      }
    ]
  },
  {
    name: "Education",
    description: "AI tools for learning and teaching",
    tools: [
      {
        name: "Duolingo",
        website: "https://duolingo.com",
        description: "AI language learning platform",
        category: "Education"
      },
      {
        name: "Gradescope",
        website: "https://gradescope.com",
        description: "AI grading and feedback system",
        category: "Education"
      }
    ]
  },
  {
    name: "Finance",
    description: "AI tools for financial analysis and planning",
    tools: [
      {
        name: "Alpaca",
        website: "https://alpaca.markets",
        description: "AI-powered trading platform",
        category: "Finance"
      },
      {
        name: "Plaid",
        website: "https://plaid.com",
        description: "AI financial data platform",
        category: "Finance"
      }
    ]
  },
  {
    name: "Sales",
    description: "AI tools for sales and lead generation",
    tools: [
      {
        name: "Gong",
        website: "https://gong.io",
        description: "AI sales intelligence platform",
        category: "Sales"
      },
      {
        name: "Chorus",
        website: "https://chorus.ai",
        description: "AI sales conversation analysis",
        category: "Sales"
      }
    ]
  },
  {
    name: "Marketing",
    description: "AI tools for marketing automation",
    tools: [
      {
        name: "Persado",
        website: "https://persado.com",
        description: "AI content generation for marketing",
        category: "Marketing"
      },
      {
        name: "Pattern89",
        website: "https://pattern89.com",
        description: "AI marketing creative analysis",
        category: "Marketing"
      }
    ]
  },
  {
    name: "HR & Recruitment",
    description: "AI tools for human resources",
    tools: [
      {
        name: "HiredScore",
        website: "https://hiredscore.com",
        description: "AI recruitment platform",
        category: "HR & Recruitment"
      },
      {
        name: "Pymetrics",
        website: "https://pymetrics.ai",
        description: "AI-based talent matching",
        category: "HR & Recruitment"
      }
    ]
  },
  {
    name: "Game Development",
    description: "AI tools for game creation and enhancement",
    tools: [
      {
        name: "Unity Sentis",
        website: "https://unity.com/products/sentis",
        description: "AI-powered game development tools",
        category: "Game Development"
      },
      {
        name: "NVIDIA GameGAN",
        website: "https://nvidia.com/gamegan",
        description: "AI game physics and environment generation",
        category: "Game Development"
      }
    ]
  },
  {
    name: "Cybersecurity",
    description: "AI-powered security solutions",
    tools: [
      {
        name: "Darktrace",
        website: "https://darktrace.com",
        description: "AI-powered network threat detection",
        category: "Cybersecurity"
      },
      {
        name: "CrowdStrike Falcon",
        website: "https://crowdstrike.com",
        description: "AI-driven endpoint protection",
        category: "Cybersecurity"
      },
      {
        name: "SentinelOne",
        website: "https://sentinelone.com",
        description: "Autonomous AI endpoint security",
        category: "Cybersecurity"
      }
    ]
  },
  {
    name: "Threat Intelligence",
    description: "AI threat detection and analysis",
    tools: [
      {
        name: "Recorded Future",
        website: "https://recordedfuture.com",
        description: "AI-powered threat intelligence",
        category: "Threat Intelligence"
      },
      {
        name: "Vectra AI",
        website: "https://vectra.ai",
        description: "AI network detection and response",
        category: "Threat Intelligence"
      }
    ]
  },
  {
    name: "Vulnerability Management",
    description: "AI security assessment tools",
    tools: [
      {
        name: "CyCognito",
        website: "https://cycognito.com",
        description: "AI-powered attack surface management",
        category: "Vulnerability Management"
      },
      {
        name: "Pentera",
        website: "https://pentera.io",
        description: "AI automated security validation",
        category: "Vulnerability Management"
      }
    ]
  },
  {
    name: "Phishing Detection",
    description: "AI anti-phishing solutions",
    tools: [
      {
        name: "IRONSCALES",
        website: "https://ironscales.com",
        description: "AI-powered phishing protection",
        category: "Phishing Detection"
      },
      {
        name: "Cofense",
        website: "https://cofense.com",
        description: "AI email security and phishing detection",
        category: "Phishing Detection"
      }
    ]
  },
  {
    name: "Cloud Security",
    description: "AI cloud security solutions",
    tools: [
      {
        name: "Wiz",
        website: "https://wiz.io",
        description: "AI-powered cloud security",
        category: "Cloud Security"
      },
      {
        name: "Orca Security",
        website: "https://orca.security",
        description: "AI cloud security posture management",
        category: "Cloud Security"
      }
    ]
  },
  {
    name: "Identity Security",
    description: "AI identity protection tools",
    tools: [
      {
        name: "Silverfort",
        website: "https://silverfort.com",
        description: "AI identity threat detection",
        category: "Identity Security"
      },
      {
        name: "Authomize",
        website: "https://authomize.com",
        description: "AI identity and access management",
        category: "Identity Security"
      }
    ]
  },
  {
    name: "Incident Response",
    description: "AI security operations tools",
    tools: [
      {
        name: "IBM QRadar",
        website: "https://ibm.com/qradar",
        description: "AI security incident analysis",
        category: "Incident Response"
      },
      {
        name: "Exabeam",
        website: "https://exabeam.com",
        description: "AI-driven security operations",
        category: "Incident Response"
      }
    ]
  },
  {
    name: "IoT Security",
    description: "AI-powered IoT protection",
    tools: [
      {
        name: "Armis",
        website: "https://armis.com",
        description: "AI IoT/OT device security",
        category: "IoT Security"
      },
      {
        name: "Claroty",
        website: "https://claroty.com",
        description: "Industrial IoT security platform",
        category: "IoT Security"
      }
    ]
  },
  {
    name: "Security Orchestration",
    description: "AI security automation tools",
    tools: [
      {
        name: "Palo Alto Cortex XSOAR",
        website: "https://paloaltonetworks.com/cortex/xsoar",
        description: "AI security orchestration platform",
        category: "Security Orchestration"
      },
      {
        name: "Splunk Phantom",
        website: "https://splunk.com",
        description: "AI security automation and orchestration",
        category: "Security Orchestration"
      }
    ]
  },
  {
    name: "AI Security Testing",
    description: "Tools for securing AI systems",
    tools: [
      {
        name: "HiddenLayer",
        website: "https://hiddenlayer.com",
        description: "AI model security platform",
        category: "AI Security Testing"
      },
      {
        name: "Protect AI",
        website: "https://protectai.com",
        description: "AI/ML security monitoring",
        category: "AI Security Testing"
      }
    ]
  },
  {
    name: "Real Estate",
    description: "AI tools for property analysis and management",
    tools: [
      {
        name: "HouseCanary",
        website: "https://housecanary.com",
        description: "AI real estate valuation platform",
        category: "Real Estate"
      },
      {
        name: "Skyline AI",
        website: "https://skyline.ai",
        description: "AI-powered real estate investment",
        category: "Real Estate"
      }
    ]
  },
  {
    name: "Agriculture",
    description: "AI solutions for farming and agriculture",
    tools: [
      {
        name: "Prospera",
        website: "https://prospera.ag",
        description: "AI-powered agriculture management",
        category: "Agriculture"
      },
      {
        name: "Blue River",
        website: "https://bluerivertechnology.com",
        description: "AI precision agriculture platform",
        category: "Agriculture"
      }
    ]
  },
  {
    name: "Manufacturing",
    description: "AI tools for industrial automation",
    tools: [
      {
        name: "Sight Machine",
        website: "https://sightmachine.com",
        description: "AI manufacturing analytics platform",
        category: "Manufacturing"
      },
      {
        name: "Augury",
        website: "https://augury.com",
        description: "AI predictive maintenance platform",
        category: "Manufacturing"
      }
    ]
  },
  {
    name: "Supply Chain",
    description: "AI-powered supply chain optimization",
    tools: [
      {
        name: "Blue Yonder",
        website: "https://blueyonder.com",
        description: "AI supply chain management platform",
        category: "Supply Chain"
      },
      {
        name: "o9 Solutions",
        website: "https://o9solutions.com",
        description: "AI-powered supply chain planning",
        category: "Supply Chain"
      }
    ]
  },
  {
    name: "Scientific Research",
    description: "AI tools for scientific discovery",
    tools: [
      {
        name: "DeepMind AlphaFold",
        website: "https://deepmind.com/research/case-studies/alphafold",
        description: "AI protein structure prediction",
        category: "Scientific Research"
      },
      {
        name: "Insilico Medicine",
        website: "https://insilico.com",
        description: "AI drug discovery platform",
        category: "Scientific Research"
      }
    ]
  },
  {
    name: "Climate Tech",
    description: "AI solutions for environmental challenges",
    tools: [
      {
        name: "ClimateAI",
        website: "https://climate.ai",
        description: "AI climate risk assessment platform",
        category: "Climate Tech"
      },
      {
        name: "Pachama",
        website: "https://pachama.com",
        description: "AI-powered carbon offset verification",
        category: "Climate Tech"
      }
    ]
  },
  {
    name: "Robotics",
    description: "AI-powered robotics solutions",
    tools: [
      {
        name: "Berkshire Grey",
        website: "https://berkshiregrey.com",
        description: "AI-powered robotic automation",
        category: "Robotics"
      },
      {
        name: "Covariant",
        website: "https://covariant.ai",
        description: "AI robotics for manufacturing",
        category: "Robotics"
      }
    ]
  },
  {
    name: "Personal Finance",
    description: "AI tools for personal financial management",
    tools: [
      {
        name: "Tally",
        website: "https://meettally.com",
        description: "AI debt management assistant",
        category: "Personal Finance"
      },
      {
        name: "Digit",
        website: "https://digit.co",
        description: "AI-powered savings automation",
        category: "Personal Finance"
      }
    ]
  },
  {
    name: "Fitness & Wellness",
    description: "AI-powered health and fitness tools",
    tools: [
      {
        name: "Tonal",
        website: "https://tonal.com",
        description: "AI-powered smart gym",
        category: "Fitness & Wellness"
      },
      {
        name: "Whoop",
        website: "https://whoop.com",
        description: "AI fitness and recovery tracking",
        category: "Fitness & Wellness"
      }
    ]
  },
  {
    name: "Music Production",
    description: "AI tools for music creation and production",
    tools: [
      {
        name: "AIVA",
        website: "https://aiva.ai",
        description: "AI music composer",
        category: "Music Production"
      },
      {
        name: "Amper Music",
        website: "https://ampermusic.com",
        description: "AI music creation platform",
        category: "Music Production"
      }
    ]
  },
  {
    name: "Event Planning",
    description: "AI solutions for event management",
    tools: [
      {
        name: "Grip",
        website: "https://grip.events",
        description: "AI-powered event networking",
        category: "Event Planning"
      },
      {
        name: "Bizzabo",
        website: "https://bizzabo.com",
        description: "AI event management platform",
        category: "Event Planning"
      }
    ]
  },
  {
    name: "Travel",
    description: "AI tools for travel planning and booking",
    tools: [
      {
        name: "Hopper",
        website: "https://hopper.com",
        description: "AI travel price prediction",
        category: "Travel"
      },
      {
        name: "SnapTravel",
        website: "https://snaptravel.com",
        description: "AI-powered travel booking",
        category: "Travel"
      }
    ]
  },
  {
    name: "Automotive",
    description: "AI solutions for automotive industry",
    tools: [
      {
        name: "Waymo",
        website: "https://waymo.com",
        description: "AI autonomous driving technology",
        category: "Automotive"
      },
      {
        name: "Cruise",
        website: "https://getcruise.com",
        description: "AI self-driving car platform",
        category: "Automotive"
      }
    ]
  },
  {
    name: "Smart Home",
    description: "AI-powered home automation",
    tools: [
      {
        name: "Josh.ai",
        website: "https://josh.ai",
        description: "AI home automation assistant",
        category: "Smart Home"
      },
      {
        name: "Nest",
        website: "https://nest.com",
        description: "AI-powered smart home devices",
        category: "Smart Home"
      }
    ]
  },
  {
    name: "Content Moderation",
    description: "AI tools for content filtering and moderation",
    tools: [
      {
        name: "Hive",
        website: "https://thehive.ai",
        description: "AI content moderation platform",
        category: "Content Moderation"
      },
      {
        name: "Clarifai",
        website: "https://clarifai.com",
        description: "AI visual content moderation",
        category: "Content Moderation"
      }
    ]
  },
  {
    name: "Astronomy",
    description: "AI tools for space exploration and research",
    tools: [
      {
        name: "Morpheus",
        website: "https://morpheus.space",
        description: "AI space mission planning",
        category: "Astronomy"
      },
      {
        name: "AstroML",
        website: "https://astroml.org",
        description: "AI astronomy data analysis",
        category: "Astronomy"
      }
    ]
  },
  {
    name: "Sports Analytics",
    description: "AI tools for sports performance analysis",
    tools: [
      {
        name: "Second Spectrum",
        website: "https://secondspectrum.com",
        description: "AI sports analytics platform",
        category: "Sports Analytics"
      },
      {
        name: "Stats Perform",
        website: "https://statsperform.com",
        description: "AI-powered sports data analysis",
        category: "Sports Analytics"
      }
    ]
  },
  {
    name: "Fashion",
    description: "AI tools for fashion design and retail",
    tools: [
      {
        name: "Vue.ai",
        website: "https://vue.ai",
        description: "AI fashion retail platform",
        category: "Fashion"
      },
      {
        name: "Stitch Fix",
        website: "https://stitchfix.com",
        description: "AI-powered personal styling",
        category: "Fashion"
      }
    ]
  },
  {
    name: "Quantum Computing",
    description: "AI tools for quantum computing",
    tools: [
      {
        name: "QC Ware",
        website: "https://qcware.com",
        description: "AI quantum computing platform",
        category: "Quantum Computing"
      },
      {
        name: "Zapata Computing",
        website: "https://zapatacomputing.com",
        description: "AI quantum software solutions",
        category: "Quantum Computing"
      }
    ]
  },
  {
    name: "AI Agents",
    description: "Autonomous AI agents for task automation",
    tools: [
      {
        name: "AutoGPT",
        website: "https://autogpt.net",
        description: "Open-source autonomous AI agent",
        category: "AI Agents"
      },
      {
        name: "BabyAGI",
        website: "https://babyagi.org",
        description: "Task-driven autonomous AI agent",
        category: "AI Agents"
      },
      {
        name: "Devika",
        website: "https://devika.ai",
        description: "AI software engineer agent",
        category: "AI Agents"
      }
    ]
  },
  {
    name: "Dev Tools",
    description: "AI-powered developer tools",
    tools: [
      {
        name: "Replit Ghostwriter",
        website: "https://replit.com/site/ghostwriter",
        description: "AI pair programmer in your IDE",
        category: "Dev Tools"
      },
      {
        name: "Cody by Sourcegraph",
        website: "https://sourcegraph.com/cody",
        description: "AI code assistant with context awareness",
        category: "Dev Tools"
      },
      {
        name: "Cursor.sh",
        website: "https://cursor.sh",
        description: "AI-first code editor",
        category: "Dev Tools"
      },
      {
        name: "Continue",
        website: "https://continue.dev",
        description: "Open-source AI coding assistant",
        category: "Dev Tools"
      },
      {
        name: "BladeRunner",
        website: "https://bladerunner.app",
        description: "AI CLI command generator",
        category: "Dev Tools"
      }
    ]
  },
  {
    name: "Podcasting",
    description: "AI tools for podcast creation",
    tools: [
      {
        name: "Descript",
        website: "https://descript.com",
        description: "AI audio/video editing with text-to-speech",
        category: "Podcasting"
      },
      {
        name: "Adobe Podcast",
        website: "https://podcast.adobe.com",
        description: "AI audio enhancement and transcription",
        category: "Podcasting"
      }
    ]
  },
  {
    name: "3D Avatars",
    description: "AI-generated digital humans",
    tools: [
      {
        name: "Synthesys",
        website: "https://synthesys.io",
        description: "AI-generated video avatars",
        category: "3D Avatars"
      },
      {
        name: "D-ID",
        website: "https://d-id.com",
        description: "Talking avatar creation platform",
        category: "3D Avatars"
      }
    ]
  },
  {
    name: "Architecture",
    description: "AI for architectural design",
    tools: [
      {
        name: "ArkDesign.ai",
        website: "https://arkdesign.ai",
        description: "AI architectural concept generation",
        category: "Architecture"
      },
      {
        name: "Maket",
        website: "https://maket.ai",
        description: "AI-powered architectural planning",
        category: "Architecture"
      }
    ]
  },
  {
    name: "AI Safety",
    description: "Tools for responsible AI development",
    tools: [
      {
        name: "Anthropic Constitutional AI",
        website: "https://anthropic.com",
        description: "Safety-focused AI alignment framework",
        category: "AI Safety"
      },
      {
        name: "Hugging Face Safetensors",
        website: "https://huggingface.co/docs/safetensors",
        description: "Secure tensor storage format",
        category: "AI Safety"
      }
    ]
  },
  {
    name: "Bioinformatics",
    description: "AI for biological data analysis",
    tools: [
      {
        name: "DeepVariant",
        website: "https://github.com/google/deepvariant",
        description: "AI-powered genomic variant caller",
        category: "Bioinformatics"
      },
      {
        name: "AlphaFold DB",
        website: "https://alphafold.ebi.ac.uk",
        description: "AI-predicted protein structures database",
        category: "Bioinformatics"
      }
    ]
  },
  {
    name: "AI Testing",
    description: "AI-powered software testing tools",
    tools: [
      {
        name: "Diffblue Cover",
        website: "https://diffblue.com",
        description: "AI-generated unit tests for Java",
        category: "AI Testing"
      },
      {
        name: "Applitools",
        website: "https://applitools.com",
        description: "AI-powered visual testing",
        category: "AI Testing"
      },
      {
        name: "Bugasura",
        website: "https://bugasura.com",
        description: "AI test case generation",
        category: "AI Testing"
      }
    ]
  },
  {
    name: "DevOps & MLOps",
    description: "AI for deployment and operations",
    tools: [
      {
        name: "Datadog AI Monitoring",
        website: "https://datadoghq.com",
        description: "AI-powered infrastructure monitoring",
        category: "DevOps & MLOps"
      },
      {
        name: "Kubeflow",
        website: "https://kubeflow.org",
        description: "ML orchestration on Kubernetes",
        category: "DevOps & MLOps"
      },
      {
        name: "Weights & Biases",
        website: "https://wandb.ai",
        description: "AI experiment tracking",
        category: "DevOps & MLOps"
      }
    ]
  },
  {
    name: "Code Review",
    description: "AI-assisted code analysis",
    tools: [
      {
        name: "DeepCode (Snyk Code)",
        website: "https://snyk.io",
        description: "AI-powered code review",
        category: "Code Review"
      },
      {
        name: "CodeClimate",
        website: "https://codeclimate.com",
        description: "Automated code review platform",
        category: "Code Review"
      }
    ]
  },
  {
    name: "Documentation",
    description: "AI documentation tools",
    tools: [
      {
        name: "Mintlify",
        website: "https://mintlify.com",
        description: "AI-powered code documentation",
        category: "Documentation"
      },
      {
        name: "Swimm",
        website: "https://swimm.io",
        description: "AI-generated code documentation",
        category: "Documentation"
      }
    ]
  },
  {
    name: "API Development",
    description: "AI tools for API creation",
    tools: [
      {
        name: "Postman AI",
        website: "https://postman.com",
        description: "AI-powered API development",
        category: "API Development"
      },
      {
        name: "Akita",
        website: "https://akita.com",
        description: "AI API behavior monitoring",
        category: "API Development"
      }
    ]
  },
  {
    name: "Database Optimization",
    description: "AI tools for database performance tuning",
    tools: [
      {
        name: "EverSQL",
        website: "https://www.eversql.com",
        description: "AI-powered SQL query optimization",
        category: "Database Optimization"
      },
      {
        name: "pgHero",
        website: "https://github.com/ankane/pghero",
        description: "AI-driven PostgreSQL insights",
        category: "Database Optimization"
      }
    ]
  },
  {
    name: "AI Query Assistants",
    description: "Natural language to SQL tools",
    tools: [
      {
        name: "Vanna.ai",
        website: "https://vanna.ai",
        description: "AI SQL agent for analytics",
        category: "AI Query Assistants"
      },
      {
        name: "Text2SQL",
        website: "https://text2sql.ai",
        description: "Generate SQL from natural language",
        category: "AI Query Assistants"
      }
    ]
  },
  {
    name: "Database Migration",
    description: "AI-assisted database migration tools",
    tools: [
      {
        name: "DBMate",
        website: "https://dbmate.com",
        description: "AI-powered schema migrations",
        category: "Database Migration"
      },
      {
        name: "Flyway",
        website: "https://flywaydb.org",
        description: "Intelligent database versioning",
        category: "Database Migration"
      }
    ]
  },
  {
    name: "Vector Databases",
    description: "AI-optimized vector databases",
    tools: [
      {
        name: "Pinecone",
        website: "https://pinecone.io",
        description: "AI-native vector database",
        category: "Vector Databases"
      },
      {
        name: "Weaviate",
        website: "https://weaviate.io",
        description: "Open-source vector search engine",
        category: "Vector Databases"
      },
      {
        name: "Chroma",
        website: "https://chromadb.dev",
        description: "AI-native open-source embedding store",
        category: "Vector Databases"
      }
    ]
  },
  {
    name: "Database Security",
    description: "AI-powered database protection",
    tools: [
      {
        name: "IBM Guardium",
        website: "https://ibm.com/guardium",
        description: "AI-driven database security",
        category: "Database Security"
      },
      {
        name: "DataSunrise",
        website: "https://datasunrise.com",
        description: "AI database security & masking",
        category: "Database Security"
      }
    ]
  },
  {
    name: "NoSQL Optimization",
    description: "AI tools for NoSQL databases",
    tools: [
      {
        name: "MongoDB Atlas AI",
        website: "https://mongodb.com/atlas/ai",
        description: "AI-powered query optimization for MongoDB",
        category: "NoSQL Optimization"
      },
      {
        name: "Cassandra.AI",
        website: "https://cassandra.ai",
        description: "AI-driven Apache Cassandra tuning",
        category: "NoSQL Optimization"
      }
    ]
  },
  {
    name: "Logo Design",
    description: "AI tools for creating professional logos",
    tools: [
      {
        name: "Looka",
        website: "https://looka.com",
        description: "AI-powered logo maker with brand kits",
        category: "Logo Design"
      },
      {
        name: "Designs.ai",
        website: "https://designs.ai",
        description: "AI logo generator with style matching",
        category: "Logo Design"
      },
      {
        name: "Hatchful",
        website: "https://hatchful.shopify.com",
        description: "Free AI logo generator by Shopify",
        category: "Logo Design"
      }
    ]
  },
  {
    name: "Icon Design",
    description: "AI tools for creating custom icons",
    tools: [
      {
        name: "Iconify AI",
        website: "https://iconify.design",
        description: "AI-generated icons in multiple styles",
        category: "Icon Design"
      },
      {
        name: "Icons8",
        website: "https://icons8.com",
        description: "AI-powered icon generator and library",
        category: "Icon Design"
      },
      {
        name: "Glyphfinder",
        website: "https://glyphfinder.com",
        description: "AI icon search and design tool",
        category: "Icon Design"
      }
    ]
  },
  {
    name: "Brand Identity",
    description: "AI tools for complete brand design",
    tools: [
      {
        name: "Brandmark",
        website: "https://brandmark.io",
        description: "AI logo and brand identity designer",
        category: "Brand Identity"
      },
      {
        name: "Tailor Brands",
        website: "https://tailorbrands.com",
        description: "AI-powered brand identity platform",
        category: "Brand Identity"
      },
      {
        name: "Canva Brand Kit",
        website: "https://canva.com",
        description: "AI-assisted brand identity design",
        category: "Brand Identity"
      }
    ]
  },
  {
    name: "Graphic Design",
    description: "AI tools for visual content creation",
    tools: [
      {
        name: "Adobe Firefly",
        website: "https://adobe.com/firefly",
        description: "AI graphic design tool suite",
        category: "Graphic Design"
      },
      {
        name: "Khroma",
        website: "https://khroma.co",
        description: "AI color palette generator",
        category: "Graphic Design"
      },
      {
        name: "Designs.ai",
        website: "https://designs.ai",
        description: "AI-powered graphic design suite",
        category: "Graphic Design"
      }
    ]
  }
];