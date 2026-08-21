# Abhishek Nagesh Salian — AI-Powered Portfolio

A modern, production-oriented personal portfolio built with Next.js and FastAPI, featuring an AI-powered portfolio assistant with RAG, multilingual interaction, and voice responses.

The portfolio presents my experience, projects, skills, certifications, and technical background through an interactive web experience rather than a traditional static resume.

## ✨ Features

- 🎨 Modern responsive portfolio UI
- 🤖 AI-powered portfolio assistant
- 🧠 Retrieval-Augmented Generation (RAG)
- 📚 Project and experience knowledge base
- 🌍 Multilingual interface
- 🔊 Text-to-speech responses
- 🎙️ Voice-friendly AI assistant experience
- 💼 Experience, projects, skills, and certifications sections
- 📱 Responsive design for desktop and mobile
- ⚡ Next.js App Router
- 🔐 Environment-based configuration
- 🌐 Separate frontend and backend architecture
- ☁️ Deployment-ready frontend and FastAPI backend

## 🏗️ Architecture

The application is split into two main services:

    ┌──────────────────────────────┐
    │          Frontend            │
    │          Next.js             │
    │                              │
    │  Portfolio UI                │
    │  AI Chat Interface           │
    │  Language Provider           │
    │  Voice / TTS UI              │
    └──────────────┬───────────────┘
                   │
                   │ HTTP API
                   ▼
    ┌──────────────────────────────┐
    │           Backend            │
    │           FastAPI            │
    │                              │
    │  Assistant Orchestrator      │
    │  RAG Retrieval               │
    │  LLM Integration             │
    │  Knowledge Processing        │
    └──────────────┬───────────────┘
                   │
                   ▼
    ┌──────────────────────────────┐
    │       Knowledge Base         │
    │                              │
    │  Projects                    │
    │  Experience                  │
    │  Skills                      │
    │  Certifications              │
    │  Education                   │
    └──────────────────────────────┘

The frontend is responsible for the user experience, while the backend handles AI assistant requests, retrieval, orchestration, and model interaction.

## 🤖 AI Portfolio Assistant

The portfolio includes an AI assistant designed specifically around my professional background.

Instead of relying only on the language model's general knowledge, the assistant can retrieve relevant information from the portfolio knowledge base before generating a response.

### Example Questions

- Tell me about Abhishek.
- What is his strongest project?
- Tell me about his experience at Revature.
- What technologies does he work with?
- What machine learning projects has he built?
- Tell me about his cloud data engineering project.
- What certifications does he have?

The assistant is designed to provide answers grounded in the information contained within the portfolio.

## 🧠 RAG Pipeline

The assistant follows a retrieval-based architecture:

    User Question
          │
          ▼
    Assistant API
          │
          ▼
    Query Processing
          │
          ▼
    Knowledge Retrieval
          │
          ▼
    Relevant Portfolio Context
          │
          ▼
    LLM
          │
          ▼
    Generated Response
          │
          ├──────────────► Text Response
          │
          └──────────────► Voice Response

This allows the assistant to answer questions about my background using structured portfolio knowledge rather than depending entirely on the model's pretrained knowledge.

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Responsive UI
- Next.js App Router

### Backend

- Python
- FastAPI
- Pydantic
- Uvicorn

### AI / Machine Learning

- Large Language Models
- Retrieval-Augmented Generation (RAG)
- Groq API
- Text-to-Speech
- Knowledge retrieval
- Context injection

### Development

- Git
- GitHub
- npm
- Python virtual environments

### Deployment

- Vercel — Frontend
- Render — Backend

## 📂 Project Structure

    ultimate-portfolio/
    │
    ├── backend/
    │   ├── app/
    │   │   ├── core/
    │   │   ├── orchestrator/
    │   │   └── ...
    │   ├── requirements.txt
    │   └── .env.example
    │
    ├── frontend/
    │   ├── app/
    │   ├── components/
    │   ├── i18n/
    │   ├── scripts/
    │   ├── services/
    │   ├── public/
    │   ├── package.json
    │   └── .env.example
    │
    ├── knowledge/
    │   └── portfolio knowledge base
    │
    ├── .gitignore
    └── README.md

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js
- npm
- Python 3.11+
- Git
- A Groq API key if you want to run the AI assistant

### 1. Clone the Repository

    git clone https://github.com/abhisheknsalian/ultimate-portfolio.git
    cd ultimate-portfolio

### 2. Frontend Setup

Navigate to the frontend:

    cd frontend

Install dependencies:

    npm install

Create your local environment file:

    cp .env.example .env.local

Set:

    NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

Start the development server:

    npm run dev

The frontend will be available at:

    http://localhost:3000

### 3. Backend Setup

Open another terminal and navigate to the backend:

    cd backend

Create a virtual environment:

    python -m venv .venv

Activate it on macOS/Linux:

    source .venv/bin/activate

On Windows:

    .venv\Scripts\activate

Install dependencies:

    pip install -r requirements.txt

Create the environment file:

    cp .env.example .env

Configure the required variables:

    AI_PROVIDER=groq
    GROQ_API_KEY=your_groq_api_key
    GROQ_MODEL=your_groq_model
    ALLOWED_ORIGINS=http://localhost:3000

Start the FastAPI server:

    uvicorn app.main:app --reload

The backend will run at:

    http://127.0.0.1:8000

## 🔐 Environment Variables

### Frontend

    NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

For production, this should point to the deployed backend URL.

### Backend

    AI_PROVIDER=groq
    GROQ_API_KEY=your_groq_api_key
    GROQ_MODEL=your_groq_model
    ALLOWED_ORIGINS=http://localhost:3000

For production, ALLOWED_ORIGINS should contain the deployed frontend domain.

### Important

Never commit real API keys or secrets to GitHub.

Use the provided `.env.example` files as templates.

## 🧪 Development

Run the frontend:

    cd frontend
    npm run dev

Run the backend:

    cd backend
    uvicorn app.main:app --reload

### Lint

    cd frontend
    npm run lint

### Production Build

    cd frontend
    npm run build

## ☁️ Deployment

The application uses separate frontend and backend deployments.

### Frontend

The Next.js application can be deployed to Vercel.

Set:

    NEXT_PUBLIC_API_URL=<deployed-backend-url>

### Backend

The FastAPI application can be deployed as a web service on Render.

Configure:

    AI_PROVIDER=groq
    GROQ_API_KEY=<your-secret-key>
    GROQ_MODEL=<your-model>
    ALLOWED_ORIGINS=<deployed-frontend-url>

The frontend then communicates with the deployed FastAPI API.

## 📌 Projects

Some of the technical work presented in the portfolio includes:

### Modern Cloud Data Engineering Pipeline

A layered data engineering pipeline built around the Bronze/Silver/Gold architecture for processing large-scale retail transaction data.

Technologies include:

- Python
- Pandas
- Parquet
- Data validation
- ETL pipelines
- Analytics transformations

### Machine Learning & Data Science

Projects covering:

- Predictive modeling
- Classification
- Regression
- Exploratory data analysis
- Feature engineering
- Model evaluation
- Data visualization

### AI & RAG Systems

Projects exploring:

- Large Language Models
- Retrieval-Augmented Generation
- AI agents
- Knowledge retrieval
- AI-powered applications
- Intelligent assistants

## 👨‍💻 About Me

I'm a Machine Learning Engineer and Data Science Master's student interested in building intelligent, scalable software systems.

My technical interests include:

- Machine Learning
- Generative AI
- RAG systems
- AI agents
- Data Engineering
- Cloud Computing
- Backend Engineering
- Production ML systems

I enjoy turning data and machine learning concepts into practical applications.

## 📫 Connect

- GitHub: https://github.com/abhisheknsalian
- LinkedIn: https://www.linkedin.com/in/abhisheknsalian/

## 📄 License

This repository contains my personal portfolio and project work.

Please do not reuse personal content, images, or portfolio material without permission.
