import { Project } from "@/types/project";

export const projects: Project[] = [
  // ⭐ Featured Projects
  {
    slug: "cyber-ai-platform",

    title: "AI-Powered Cyber Threat Intelligence Platform",

    category: "Generative AI",

    featured: true,
    featuredOrder: 1,

    year: "2026",

    status: "Completed",

    description:
      "End-to-end Retrieval-Augmented Generation (RAG) platform that analyzes cybersecurity threats by combining semantic search with local large language models to generate contextual threat intelligence reports and mitigation recommendations.",

    challenge:
      "Design a scalable AI system capable of retrieving accurate cybersecurity knowledge from multiple threat intelligence sources while minimizing hallucinations and generating context-aware threat analysis.",

    solution:
      "Built a modular RAG pipeline using LangChain for document ingestion, Hugging Face embeddings, ChromaDB for semantic retrieval, Ollama-hosted Llama 3.2 for local inference, and a FastAPI backend for AI-powered threat intelligence generation.",

    impact:
      "Built a production-style AI architecture demonstrating vector search, retrieval-augmented generation, local LLM inference, and REST API integration for contextual cybersecurity analysis.",

    metrics: [
      "LangChain RAG",
      "Local Llama 3.2",
      "ChromaDB",
      "FastAPI",
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

    title: "Modern Cloud Data Engineering Pipeline",

    category: "Data Engineering",

    featured: true,
    featuredOrder: 2,

    year: "2026",

    status: "Completed",

    description:
      "Production-ready cloud data pipeline built using AWS, Terraform, Docker, and Python following the Medallion Architecture.",

    challenge:
      "Design a scalable end-to-end data engineering pipeline capable of ingesting, validating, transforming, and serving analytics-ready datasets.",

    solution:
      "Implemented a Bronze-Silver-Gold architecture with modular ETL workflows, infrastructure as code using Terraform, Docker-based execution, and automated validation.",

    impact:
      "Demonstrates production-ready data engineering practices including reproducible infrastructure, scalable processing, and analytics-ready outputs.",

    metrics: [
      "1M+ Transactions",
      "AWS",
      "Terraform",
      "Docker",
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

    title: "Function-Level Software Vulnerability Detection",

    category: "Machine Learning",

    featured: true,
    featuredOrder: 3,

    year: "2026",

    status: "Completed",

    description:
      "End-to-end software vulnerability detection pipeline that reconstructs function-level datasets from real-world GitHub repositories and compares traditional machine learning models with a fine-tuned CodeBERT transformer.",

    challenge:
      "Develop an automated vulnerability detection system capable of extracting vulnerable and patched C/C++ functions from real-world repositories while preventing information leakage.",

    solution:
      "Built a complete dataset extraction pipeline with repository mining, patch analysis, function extraction, duplicate removal, and CVE-aware evaluation. Compared TF-IDF baselines with a fine-tuned Microsoft CodeBERT model.",

    impact:
      "Generated a dataset of 6,334 function-level samples from 3,805 processed CVEs. CodeBERT achieved the highest Recall (98.38%) and F1-score (63.24%).",

    metrics: [
      "6,334 Samples",
      "3,805 CVEs",
      "98.38% Recall",
      "63.24% F1",
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

    title: "E-Commerce Demand Forecasting",

    category: "Machine Learning",

    featured: true,
    featuredOrder: 4,

    year: "2026",

    status: "Completed",

    description:
      "Machine learning project that forecasts weekly product demand from over one million retail transactions using XGBoost and advanced feature engineering.",

    challenge:
      "Forecast weekly demand accurately using historical retail transaction data while capturing seasonality and temporal trends.",

    solution:
      "Built an end-to-end forecasting pipeline with extensive data cleaning, lag features, rolling averages, and an XGBoost Regressor deployed as a Streamlit application.",

    impact:
      "Reduced forecasting error to 20% MAPE on real-world retail data while accurately capturing seasonal demand trends.",

    metrics: [
      "1M+ Transactions",
      "20% MAPE",
      "XGBoost",
      "Time Series",
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

  // Other Projects
  {
    slug: "tweet-sentiment-analyzer",

    title: "Tweet Sentiment Analyzer",

    category: "Natural Language Processing",

    featured: false,

    year: "2026",

    status: "Completed",

    description:
      "Sentiment analysis application comparing a rule-based TextBlob baseline with a Twitter-trained RoBERTa transformer model.",

    challenge:
      "Compare traditional sentiment analysis techniques with transformer-based NLP models.",

    solution:
      "Built a Streamlit application integrating TextBlob and a pretrained Twitter RoBERTa model for real-time tweet sentiment classification.",

    impact:
      "Demonstrated the benefits of transformer-based NLP for social media sentiment analysis.",

    metrics: [
      "RoBERTa",
      "82% Baseline",
      "HF Spaces",
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

    title: "Customer Behaviour Analysis",

    category: "Data Analytics",

    featured: false,

    year: "2026",

    status: "Completed",

    description:
      "Exploratory data analysis and machine learning project for understanding customer purchasing behaviour and generating business insights.",

    challenge: "Identify purchasing patterns and customer segments.",

    solution:
      "Performed EDA, visualization, feature engineering, and predictive modelling using Python.",

    impact:
      "Generated actionable business insights from customer transaction data.",

    metrics: [
      "EDA",
      "Business Insights",
      "ML",
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

    title: "Climate Risk Prediction",

    category: "Machine Learning",

    featured: false,

    year: "2026",

    status: "Completed",

    description:
      "Predictive machine learning system for assessing climate-related risks using historical environmental datasets.",

    challenge:
      "Predict environmental risk using historical climate data.",

    solution:
      "Applied feature engineering, exploratory analysis, and ensemble machine learning models.",

    impact:
      "Built an interpretable predictive model for climate risk assessment.",

    metrics: [
      "XGBoost",
      "EDA",
      "Prediction",
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