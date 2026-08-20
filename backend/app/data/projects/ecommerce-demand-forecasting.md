---
title: E-Commerce Demand Forecasting
category: project
featured: true
status: completed
difficulty: Intermediate

topics:
  - Machine Learning
  - Demand Forecasting
  - Time Series Forecasting
  - Feature Engineering
  - Predictive Analytics
  - Business Intelligence

technologies:
  - Python
  - Pandas
  - XGBoost
  - Scikit-learn
  - Streamlit
  - Hugging Face Spaces
  - Matplotlib

type: machine-learning-project
---

# E-Commerce Demand Forecasting

## Project Summary

This project predicts weekly product demand using real-world e-commerce transaction data collected from the UCI Online Retail II dataset. The objective was to build an end-to-end machine learning solution capable of forecasting future sales while demonstrating practical skills in data cleaning, feature engineering, model development, evaluation, and deployment.

The final model was developed using XGBoost and deployed as an interactive Streamlit application on Hugging Face Spaces, allowing users to visualize demand forecasts through a web interface.

---

# Project Overview

Demand forecasting plays a crucial role in inventory management, supply chain optimization, and business planning for e-commerce companies. Accurate forecasts help organizations reduce stock shortages, minimize excess inventory, and improve operational efficiency.

This project builds a complete forecasting pipeline using historical retail transaction data from a UK-based online retailer. The workflow includes extensive data preprocessing, feature engineering, model training, evaluation, and deployment as an interactive web application.

---

# Why I Built This Project

I wanted to gain practical experience with real-world forecasting problems commonly encountered in retail and e-commerce industries.

Unlike many machine learning classification projects, demand forecasting introduces unique challenges such as temporal dependencies, feature engineering for sequential data, and evaluating predictions on unseen future periods.

Building this project allowed me to understand how traditional machine learning algorithms like XGBoost can be adapted for time-series forecasting through engineered lag-based features.

---

# Problem Statement

Retail businesses rely on accurate demand forecasts to make informed decisions regarding inventory management, purchasing, staffing, and logistics.

The objective of this project was to develop a machine learning model capable of forecasting weekly product demand by:

- Cleaning raw transaction data
- Aggregating sales into weekly demand
- Engineering time-series features
- Training a regression model
- Evaluating forecasting accuracy
- Deploying the solution as an interactive web application

---

# Dataset

## Source

UCI Online Retail II Dataset

The dataset contains transactional records from a UK-based online retailer between 2009 and 2011.

---

# Dataset Statistics

| Metric | Value |
|---------|------:|
| Original Transactions | 1,067,371 |
| Time Period | 2009–2011 |
| Cleaned Records | 805,549 |

Dataset features include:

- Invoice Number
- Stock Code
- Product Description
- Quantity
- Invoice Date
- Unit Price
- Customer ID
- Country

---

# Data Cleaning

Several preprocessing steps were performed before model training.

The pipeline included:

- Removing missing Customer IDs
- Removing missing product descriptions
- Removing cancelled orders
- Removing negative quantities
- Removing zero quantities
- Removing invalid prices
- Handling inconsistent records

Approximately 20% of the original dataset was removed during the cleaning process to improve data quality.

---

# Feature Engineering

To convert transactional data into a forecasting problem, weekly sales were aggregated into time-series observations.

The following predictive features were created:

## Lag Features

Historical demand from:

- Previous week
- Two weeks ago
- Three weeks ago
- Four weeks ago

These features allow the model to learn temporal dependencies from historical demand patterns.

---

## Rolling Mean

A four-week moving average was calculated to capture longer-term demand trends and reduce short-term fluctuations.

---

# Machine Learning Model

The forecasting model was built using the XGBoost Regressor.

Model configuration included:

- 200 estimators
- Learning rate of 0.05

The last eight weeks of historical data were reserved as the test set to simulate forecasting on unseen future periods.

---

# Model Evaluation

The model was evaluated using standard regression metrics.

| Metric | Value |
|--------|------:|
| Mean Absolute Error (MAE) | 30,035 units |
| Mean Absolute Percentage Error (MAPE) | 20.0% |

The model successfully captured the increasing demand trend leading into the holiday shopping season.

---

# Deployment

After training, the model was deployed as an interactive Streamlit web application.

The application allows users to:

- Visualize historical demand
- View predicted future demand
- Interactively explore forecasting results

Deployment Platform:

- Hugging Face Spaces

---

# Project Structure

```
.
├── app.py
├── 01_eda.ipynb
├── weekly_demand.csv
├── README.md
└── requirements.txt
```

---

# Technologies Used

## Programming

- Python

## Data Processing

- Pandas

## Machine Learning

- XGBoost
- Scikit-learn

## Visualization

- Matplotlib

## Deployment

- Streamlit
- Hugging Face Spaces

---

# Project Links

## Live Demo

https://huggingface.co/spaces/Abhishek3411/ecommerce-demand-forecasting

## GitHub Repository

(Add your GitHub repository link here.)

---

# Skills Demonstrated

This project demonstrates practical experience with:

- Machine Learning
- Time-Series Forecasting
- Regression Models
- Feature Engineering
- Data Cleaning
- Exploratory Data Analysis
- Predictive Analytics
- XGBoost
- Streamlit
- Model Deployment
- Python
- Business Analytics

---

# Key Learnings

This project strengthened my understanding of practical forecasting techniques using machine learning.

Some of the key lessons included:

- Real-world datasets require extensive preprocessing before model development.
- Feature engineering is one of the most important components of forecasting using traditional machine learning.
- Lag features significantly improve predictive performance by capturing historical dependencies.
- Increasing the amount of historical training data substantially improved forecasting accuracy.
- Deploying machine learning models with Streamlit provides an effective way to demonstrate projects interactively.

---

# Future Improvements

Potential future enhancements include:

- Prophet forecasting comparison
- LSTM and Transformer-based forecasting models
- Hyperparameter optimization
- Product-level demand forecasting
- Real-time dashboard integration
- Automated retraining pipeline
- Cloud deployment

---

# What I Learned

This project provided valuable experience in solving real-world business forecasting problems using machine learning.

Beyond model development, I learned how to transform raw transactional data into meaningful forecasting datasets, engineer temporal features, evaluate regression models, and deploy an interactive application for end users.

The project also improved my understanding of predictive analytics workflows commonly used in retail, supply chain, and e-commerce industries.