import { Project } from "@/types/project";

export const projects: Project[] = [
  // ⭐ Featured Projects
  {
  slug: "cyber-ai-platform",

  title: {
    en: "AI-Powered Cyber Threat Intelligence Platform",
    de: "KI-gestützte Plattform für Cyber-Bedrohungsanalyse",
  },

  category: {
    en: "Generative AI",
    de: "Generative KI",
  },

  featured: true,
  featuredOrder: 1,

  year: "2026",

  status: "Completed",

  description: {
    en: "End-to-end Retrieval-Augmented Generation (RAG) platform that analyzes cybersecurity threats by combining semantic search with local large language models to generate contextual threat intelligence reports and mitigation recommendations.",
    de: "Eine End-to-End-Plattform auf Basis von Retrieval-Augmented Generation (RAG), die Cyberbedrohungen analysiert. Durch die Kombination von semantischer Suche mit lokal ausgeführten Large Language Models erstellt sie kontextbezogene Bedrohungsanalysen und Handlungsempfehlungen.",
  },

  challenge: {
    en: "Design a scalable AI system capable of retrieving accurate cybersecurity knowledge from multiple threat intelligence sources while minimizing hallucinations and generating context-aware threat analysis.",
    de: "Entwicklung eines skalierbaren KI-Systems, das zuverlässige Informationen aus verschiedenen Cyber-Threat-Intelligence-Quellen abruft, Halluzinationen minimiert und kontextbezogene Bedrohungsanalysen erstellt.",
  },

  solution: {
    en: "Built a modular RAG pipeline using LangChain for document ingestion, Hugging Face embeddings, ChromaDB for semantic retrieval, Ollama-hosted Llama 3.2 for local inference, and a FastAPI backend for AI-powered threat intelligence generation.",
    de: "Entwicklung einer modularen RAG-Pipeline mit LangChain zur Dokumentenverarbeitung, Hugging Face Embeddings, ChromaDB für semantische Suche, lokal gehostetem Llama 3.2 über Ollama sowie einem FastAPI-Backend zur KI-gestützten Analyse von Cyberbedrohungen.",
  },

  impact: {
    en: "Built a production-style AI architecture demonstrating vector search, retrieval-augmented generation, local LLM inference, and REST API integration for contextual cybersecurity analysis.",
    de: "Implementierung einer produktionsnahen KI-Architektur mit Vektorsuche, Retrieval-Augmented Generation, lokaler LLM-Inferenz und REST-API-Integration zur kontextbezogenen Analyse von Cyberbedrohungen.",
  },

  metrics: [
    {
      en: "LangChain RAG",
      de: "LangChain RAG",
    },
    {
      en: "Local Llama 3.2",
      de: "Lokales Llama 3.2",
    },
    {
      en: "ChromaDB",
      de: "ChromaDB",
    },
    {
      en: "FastAPI",
      de: "FastAPI",
    },
  ],

  technologies: [
    "Python",
    "FastAPI",
    "LangChain",
    "ChromaDB",
    "Ollama",
    "Llama 3.2",
    "Hugging Face",
    "Sentence Transformers",
    "Vector Search",
    "RAG",
  ],

  github:
    "https://github.com/abhisheknsalian/cyber-ai-platform",
},

  {
  slug: "modern-cloud-data-engineering-pipeline",

  title: {
    en: "Modern Cloud Data Engineering Pipeline",
    de: "Moderne Cloud-Datenpipeline",
  },

  category: {
    en: "Data Engineering",
    de: "Data Engineering",
  },

  featured: true,
  featuredOrder: 2,

  year: "2026",

  status: "Completed",

  description: {
    en: "Production-ready cloud data pipeline built using AWS, Terraform, Docker, and Python following the Medallion Architecture.",
    de: "Produktionsreife Cloud-Datenpipeline mit AWS, Terraform, Docker und Python nach der Medallion-Architektur.",
  },

  challenge: {
    en: "Design a scalable end-to-end data engineering pipeline capable of ingesting, validating, transforming, and serving analytics-ready datasets.",
    de: "Entwicklung einer skalierbaren End-to-End-Datenpipeline zur Datenaufnahme, Validierung, Transformation und Bereitstellung analysebereiter Datensätze.",
  },

  solution: {
    en: "Implemented a Bronze-Silver-Gold architecture with modular ETL workflows, infrastructure as code using Terraform, Docker-based execution, and automated validation.",
    de: "Implementierung einer Bronze-Silver-Gold-Architektur mit modularen ETL-Workflows, Infrastructure as Code mittels Terraform, Docker-basierter Ausführung und automatisierter Datenvalidierung.",
  },

  impact: {
    en: "Demonstrates production-ready data engineering practices including reproducible infrastructure, scalable processing, and analytics-ready outputs.",
    de: "Demonstriert produktionsreife Data-Engineering-Praktiken mit reproduzierbarer Infrastruktur, skalierbarer Datenverarbeitung und analysebereiten Ergebnissen.",
  },

  metrics: [
    {
      en: "1M+ Transactions",
      de: "Über 1 Mio. Transaktionen",
    },
    {
      en: "AWS",
      de: "AWS",
    },
    {
      en: "Terraform",
      de: "Terraform",
    },
    {
      en: "Docker",
      de: "Docker",
    },
  ],

  technologies: [
    "Python",
    "AWS",
    "Terraform",
    "Docker",
    "Pandas",
    "Parquet",
    "GitHub Actions",
  ],

  github:
    "https://github.com/abhisheknsalian/modern-cloud-data-engineering-pipeline",
},

  {
  slug: "function-level-vulnerability-detection",

  title: {
    en: "Function-Level Software Vulnerability Detection",
    de: "Erkennung von Softwareschwachstellen auf Funktionsebene",
  },

  category: {
    en: "Machine Learning",
    de: "Maschinelles Lernen",
  },

  featured: true,
  featuredOrder: 3,

  year: "2026",

  status: "Completed",

  description: {
    en: "End-to-end software vulnerability detection pipeline that reconstructs function-level datasets from real-world GitHub repositories and compares traditional machine learning models with a fine-tuned CodeBERT transformer.",
    de: "End-to-End-Pipeline zur Erkennung von Softwareschwachstellen, die Datensätze auf Funktionsebene aus realen GitHub-Repositories erstellt und klassische Machine-Learning-Modelle mit einem feinabgestimmten CodeBERT-Transformer vergleicht.",
  },

  challenge: {
    en: "Develop an automated vulnerability detection system capable of extracting vulnerable and patched C/C++ functions from real-world repositories while preventing information leakage.",
    de: "Entwicklung eines automatisierten Systems zur Erkennung von Schwachstellen, das verwundbare und gepatchte C/C++-Funktionen aus realen Repositories extrahiert und gleichzeitig Datenlecks verhindert.",
  },

  solution: {
    en: "Built a complete dataset extraction pipeline with repository mining, patch analysis, function extraction, duplicate removal, and CVE-aware evaluation. Compared TF-IDF baselines with a fine-tuned Microsoft CodeBERT model.",
    de: "Entwicklung einer vollständigen Pipeline zur Datensatzgenerierung mit Repository-Mining, Patch-Analyse, Funktionsextraktion, Duplikatentfernung und CVE-basierter Bewertung. Vergleich von TF-IDF-Baselines mit einem feinabgestimmten Microsoft CodeBERT-Modell.",
  },

  impact: {
    en: "Generated a dataset of 6,334 function-level samples from 3,805 processed CVEs. CodeBERT achieved the highest Recall (98.38%) and F1-score (63.24%).",
    de: "Erstellung eines Datensatzes mit 6.334 Funktionsbeispielen aus 3.805 verarbeiteten CVEs. CodeBERT erzielte den höchsten Recall (98,38 %) sowie den besten F1-Score (63,24 %).",
  },

  metrics: [
    {
      en: "6,334 Samples",
      de: "6.334 Datensätze",
    },
    {
      en: "3,805 CVEs",
      de: "3.805 CVEs",
    },
    {
      en: "98.38% Recall",
      de: "98,38 % Recall",
    },
    {
      en: "63.24% F1",
      de: "63,24 % F1",
    },
  ],

  technologies: [
    "Python",
    "PyTorch",
    "CodeBERT",
    "Hugging Face",
    "Scikit-learn",
    "TF-IDF",
    "Linear SVM",
    "GridSearchCV",
    "Pandas",
    "NumPy",
  ],

  github:
    "https://github.com/abhisheknsalian/function-level-vulnerability-detection",
},

  {
  slug: "ecommerce-demand-forecasting",

  title: {
    en: "E-Commerce Demand Forecasting",
    de: "Bedarfsprognose im E-Commerce",
  },

  category: {
    en: "Machine Learning",
    de: "Maschinelles Lernen",
  },

  featured: true,
  featuredOrder: 4,

  year: "2026",

  status: "Completed",

  description: {
    en: "Machine learning project that forecasts weekly product demand from over one million retail transactions using XGBoost and advanced feature engineering.",
    de: "Machine-Learning-Projekt zur Vorhersage der wöchentlichen Produktnachfrage anhand von über einer Million Einzelhandelstransaktionen mit XGBoost und fortgeschrittenem Feature Engineering.",
  },

  challenge: {
    en: "Forecast weekly demand accurately using historical retail transaction data while capturing seasonality and temporal trends.",
    de: "Präzise Vorhersage der wöchentlichen Nachfrage auf Basis historischer Verkaufsdaten unter Berücksichtigung saisonaler und zeitlicher Trends.",
  },

  solution: {
    en: "Built an end-to-end forecasting pipeline with extensive data cleaning, lag features, rolling averages, and an XGBoost Regressor deployed as a Streamlit application.",
    de: "Entwicklung einer vollständigen Prognosepipeline mit Datenbereinigung, Lag-Features, gleitenden Durchschnitten und einem XGBoost-Regressor, bereitgestellt als Streamlit-Anwendung.",
  },

  impact: {
    en: "Reduced forecasting error to 20% MAPE on real-world retail data while accurately capturing seasonal demand trends.",
    de: "Reduzierung des Prognosefehlers auf 20 % MAPE bei realen Einzelhandelsdaten und zuverlässige Abbildung saisonaler Nachfragetrends.",
  },

  metrics: [
    {
      en: "1M+ Transactions",
      de: "Über 1 Mio. Transaktionen",
    },
    {
      en: "20% MAPE",
      de: "20 % MAPE",
    },
    {
      en: "XGBoost",
      de: "XGBoost",
    },
    {
      en: "Time Series",
      de: "Zeitreihen",
    },
  ],

  technologies: [
    "Python",
    "Pandas",
    "XGBoost",
    "Scikit-learn",
    "Streamlit",
    "Matplotlib",
  ],

  github:
    "https://github.com/abhisheknsalian/ecommerce-demand-forecasting",
},

  {
  slug: "tweet-sentiment-analyzer",

  title: {
    en: "Tweet Sentiment Analyzer",
    de: "Tweet-Sentimentanalyse",
  },

  category: {
    en: "Natural Language Processing",
    de: "Verarbeitung natürlicher Sprache",
  },

  featured: false,

  year: "2026",

  status: "Completed",

  description: {
    en: "Sentiment analysis application comparing a rule-based TextBlob baseline with a Twitter-trained RoBERTa transformer model.",
    de: "Anwendung zur Sentimentanalyse, die einen regelbasierten TextBlob-Ansatz mit einem auf Twitter-Daten trainierten RoBERTa-Transformer vergleicht.",
  },

  challenge: {
    en: "Compare traditional sentiment analysis techniques with transformer-based NLP models.",
    de: "Vergleich klassischer Verfahren der Sentimentanalyse mit transformerbasierten NLP-Modellen.",
  },

  solution: {
    en: "Built a Streamlit application integrating TextBlob and a pretrained Twitter RoBERTa model for real-time tweet sentiment classification.",
    de: "Entwicklung einer Streamlit-Anwendung, die TextBlob und ein vortrainiertes Twitter-RoBERTa-Modell für die Echtzeitklassifikation von Tweets kombiniert.",
  },

  impact: {
    en: "Demonstrated the benefits of transformer-based NLP for social media sentiment analysis.",
    de: "Demonstrierte die Vorteile transformerbasierter NLP-Modelle für die Sentimentanalyse in sozialen Medien.",
  },

  metrics: [
    {
      en: "RoBERTa",
      de: "RoBERTa",
    },
    {
      en: "82% Baseline",
      de: "82 % Basislinie",
    },
    {
      en: "HF Spaces",
      de: "HF Spaces",
    },
  ],

  technologies: [
    "Python",
    "Transformers",
    "RoBERTa",
    "TextBlob",
    "Scikit-learn",
    "Streamlit",
  ],

  github:
    "https://github.com/abhisheknsalian/tweet-sentiment-analyzer",
},

  {
  slug: "customer-behaviour-analysis",

  title: {
    en: "Customer Behaviour Analysis",
    de: "Analyse des Kundenverhaltens",
  },

  category: {
    en: "Data Analytics",
    de: "Datenanalyse",
  },

  featured: false,

  year: "2026",

  status: "Completed",

  description: {
    en: "Exploratory data analysis and machine learning project for understanding customer purchasing behaviour and generating business insights.",
    de: "Projekt zur explorativen Datenanalyse und zum maschinellen Lernen, um das Kaufverhalten von Kunden zu verstehen und geschäftsrelevante Erkenntnisse zu gewinnen.",
  },

  challenge: {
    en: "Identify purchasing patterns and customer segments.",
    de: "Erkennung von Kaufmustern und Kundensegmenten.",
  },

  solution: {
    en: "Performed exploratory data analysis, visualization, feature engineering, and predictive modelling using Python.",
    de: "Durchführung explorativer Datenanalysen, Visualisierungen, Feature Engineering und prädiktiver Modellierung mit Python.",
  },

  impact: {
    en: "Generated actionable business insights from customer transaction data.",
    de: "Gewinnung umsetzbarer Geschäftserkenntnisse aus Kundentransaktionsdaten.",
  },

  metrics: [
    {
      en: "EDA",
      de: "EDA",
    },
    {
      en: "Business Insights",
      de: "Geschäftserkenntnisse",
    },
    {
      en: "ML",
      de: "ML",
    },
  ],

  technologies: [
    "Python",
    "Pandas",
    "Scikit-learn",
    "Matplotlib",
    "Plotly",
  ],

  github:
    "https://github.com/abhisheknsalian/customer_behaviour_analysis",
},

  {
  slug: "climate-risk-prediction",

  title: {
    en: "Climate Risk Prediction",
    de: "Vorhersage von Klimarisiken",
  },

  category: {
    en: "Machine Learning",
    de: "Maschinelles Lernen",
  },

  featured: false,

  year: "2026",

  status: "Completed",

  description: {
    en: "Predictive machine learning system for assessing climate-related risks using historical environmental datasets.",
    de: "Prädiktives Machine-Learning-System zur Bewertung klimabezogener Risiken anhand historischer Umweltdaten.",
  },

  challenge: {
    en: "Predict environmental risk using historical climate data.",
    de: "Vorhersage von Umweltrisiken auf Basis historischer Klimadaten.",
  },

  solution: {
    en: "Applied feature engineering, exploratory analysis, and ensemble machine learning models.",
    de: "Einsatz von Feature Engineering, explorativer Datenanalyse und Ensemble-Machine-Learning-Modellen.",
  },

  impact: {
    en: "Built an interpretable predictive model for climate risk assessment.",
    de: "Entwicklung eines interpretierbaren Vorhersagemodells zur Bewertung von Klimarisiken.",
  },

  metrics: [
    {
      en: "XGBoost",
      de: "XGBoost",
    },
    {
      en: "EDA",
      de: "EDA",
    },
    {
      en: "Prediction",
      de: "Vorhersage",
    },
  ],

  technologies: [
    "Python",
    "XGBoost",
    "Pandas",
    "Plotly",
  ],

  github:
    "https://github.com/abhisheknsalian/climate_risk_pred",
},
];