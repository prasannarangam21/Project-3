# Project 3
Group members
* Jake Andrasovsky
* Lakshmi Prasana Rangam
* Jua Han
* Leah Stucky
## Project Overview:
We created several models to predict academic achievement based off the various factors we find are most influential. We ran analysis on the data and provided some visualizations. We deployed our findings on Heroku and included a form where the user can input new data that runs through our model and predict the grade score.
## Data:
Two datasets are provided regarding the performance in two subjects: Mathematics (mat) and Portuguese language (por). Each contains student academic performance and contributing factors including age, sex, parental education level, study time, and various other demographic and social attributes (30 in total). The data was acquired using school reports and student questionaires for two schools in Portugal. We combined the two datasets (total of 1044 rows) to create machine learning models and visualizations.
Source: https://archive.ics.uci.edu/ml/datasets/student+performance
## Machine Learning Models
We created machine learning models - Logistic Regression, Decision Trees , Random Forests and Deep Learning - to find out which model has the highest accuracy. We chose to use the Logistic Regression model which has the highest accuracy of 0.67 to predict the student performance.
The five most influential factors were free time, age, health status, weekend alcohol consumption, going out with friends, which we later integrated into our final model to make the prediction.