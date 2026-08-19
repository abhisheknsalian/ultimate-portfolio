# 🏗️ AI Portfolio Platform Architecture

> Version: 1.0
>
> Author: Abhishek Nagesh Salian

---

# Overview

The AI Portfolio Platform is a modern, full-stack portfolio application that combines conversational AI, Retrieval-Augmented Generation (RAG), real-time streaming, avatar interactions, and multilingual support into a single interactive experience.

Unlike a traditional portfolio website, this platform allows recruiters and visitors to interact naturally through an AI assistant that understands the portfolio, explains projects, and guides users throughout the website.

---

# High-Level Architecture

```
                Browser
                    │
                    ▼
        Next.js Frontend (React)
                    │
        Streaming HTTP (SSE)
                    │
                    ▼
             FastAPI Backend
                    │
          Assistant Orchestrator
                    │
    ┌───────────────┼───────────────┐
    ▼               ▼               ▼
 Prompt Builder  Knowledge Base   AI Provider
        │               │               │
        └───────────────┴───────────────┘
                        │
                        ▼
               Streaming Response
                        │
                        ▼
                Portfolio Assistant
```

---

# Technology Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Zustand
- Tailwind CSS
- Framer Motion

---

## Backend

- FastAPI
- Python
- Groq API
- Retrieval-Augmented Generation
- Server-Sent Events (SSE)

---

## AI

- Llama 3
- Prompt Engineering
- RAG
- Conversation History
- Streaming Responses

---

# Frontend Architecture

```
frontend/

app/

components/

hooks/

services/

types/

utils/

i18n/
```

---

# Assistant Module

Responsibilities

- Chat Interface
- Streaming Messages
- Speech
- Avatar Control
- Portfolio Actions
- Highlighting
- Conversation State

---

# Avatar Module

Responsibilities

- Idle Animation
- Thinking Animation
- Speaking Animation

---

# Portfolio Module

Responsibilities

- Navigation

- Section Highlight

- Project Highlight

- Resume Actions

- Contact Actions

---

# Backend Architecture

```
backend/

api/

orchestrator/

providers/

prompts/

retriever/

services/

schemas/

tools/
```

---

# Assistant Orchestrator

The Assistant Orchestrator coordinates every AI interaction.

Responsibilities

- Retrieve Context

- Build Prompt

- Call Provider

- Stream Response

- Generate Actions

Future

- Tool Calling

- Memory

- Analytics

---

# Retrieval-Augmented Generation

Current Flow

```
Question

↓

Retriever

↓

Relevant Knowledge

↓

Prompt Builder

↓

LLM

↓

Response
```

Future Improvements

- Metadata Filtering

- Hybrid Search

- Embeddings

- Semantic Ranking

---

# Streaming

The assistant streams responses using Server-Sent Events.

Events

token

action

done

---

# Knowledge Base

Current

knowledge.json

Future

```
knowledge/

profile.json

projects.json

experience.json

education.json

skills.json

certifications.json

faq.json
```

---

# Conversation Memory

Current

Conversation History

Future

Topic Memory

User Preferences

Project Context

Long-Term Memory

---

# Portfolio Actions

Current

Open Projects

Open Experience

Open Contact

Resume

GitHub

LinkedIn

Future

Highlight Project

Open Demo

Download Resume

Project Walkthrough

---

# Speech System

Current

Browser Speech API

Future

OpenAI TTS

ElevenLabs

Voice Cloning

---

# Avatar States

Idle

Thinking

Speaking

---

# AI Providers

Current

Groq

Future

OpenAI

Anthropic

Gemini

Azure OpenAI

---

# Deployment

Frontend

Vercel

Backend

Railway

Render

Docker

Knowledge

JSON

Future

Vector Database

---

# Security

Environment Variables

API Keys

Input Validation

Rate Limiting

Future

Authentication

Analytics

Logging

---

# Roadmap

## Phase 1

✔ Portfolio

✔ AI Assistant

✔ Streaming

✔ Avatar

✔ Speech

✔ RAG

---

## Phase 2

Conversation Memory

Tool Calling

Project Intelligence

Portfolio Navigation

Guided Tour

---

## Phase 3

Voice Providers

Analytics

Admin Dashboard

CI/CD

Docker

Testing

---

# Long-Term Vision

The goal is to transform this portfolio into an AI-powered personal platform where visitors can:

- Learn about projects through conversation
- Navigate the portfolio using natural language
- Explore experience interactively
- Receive guided walkthroughs
- Experience real-time AI interaction

The portfolio serves as both a professional showcase and a demonstration of modern AI application architecture.