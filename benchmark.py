#!/usr/bin/env python
# coding: utf-8

# In[59]:


import streamlit as st
import pandas as pd
import numpy as np


# In[60]:


df = pd.read_csv("titanic.csv")


# In[62]:


del df['Cabin']


# In[63]:


df = df.dropna()


# In[64]:


df['Age'] = df['Age'].astype(int)


# In[65]:


st.title("Results")


# In[66]:


user_input = df.iloc[10]


# In[69]:


import streamlit as st

tab1, tab2, tab3 = st.tabs(["Demographics", "Dog", "Owl"])

with tab1:
   st.header("Demographics")
   with st.container():
      col1, col2, col3 = st.columns([2,3,1])
      with col1:
         st.subheader(f"Passenger name: {user_input[3]}")
         st.subheader(f"Passenger age: {user_input[5]}")
         st.subheader(f"Passenger sex: {user_input[1]}")
      with col2:
         st.text("Data")
      with col3:
         st.text("Text")


with tab2:
   st.header("Competency 2")


with tab3:
   st.header("An owl")

