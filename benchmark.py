#!/usr/bin/env python
# coding: utf-8

# In[4]:


import streamlit as st
import pandas as pd


# In[5]:


df = pd.read_csv("titanic.csv")


# In[7]:


col1, col2, col3 = st.columns([2, 3, 2])
col1.markdown("# Welcome to my app!")
col2.markdown(" This is a datadriven application...")

