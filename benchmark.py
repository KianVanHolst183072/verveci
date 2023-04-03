#!/usr/bin/env python
# coding: utf-8

# In[114]:


import streamlit as st
import plotly.figure_factory as ff
import pandas as pd
import numpy as np


# In[115]:


df = pd.read_csv("titanic.csv")


# In[116]:


del df['Cabin']


# In[117]:


df = df.dropna()


# In[118]:


df['Age'] = df['Age'].astype(int)


# In[119]:


st.title("Results")


# In[120]:


user_input = df.iloc[10]


# In[121]:


tab1, tab2, tab3 = st.tabs(["Demographics", "Dog", "Owl"])

with tab1:
   st.header("Demographics")
   with st.container():
      col1, col2, col3 = st.columns([2,3,1])
      with col1:
         st.subheader(f"Passenger name: {user_input[3]}")
         st.subheader(f"Passenger age: {user_input[5]}")
         st.subheader(f"Passenger sex: {user_input[4]}")
      with col2:
         st.subheader("Data")
         
         x1 = df.loc[df['Sex'] == 'male'].loc[:, 'Fare']
         x2 = df.loc[df['Sex'] == 'female'].loc[:, 'Fare']

         hist_data = [x1, x2]
         group_labels = ['Male fare', 'Female fare']
         fig = ff.create_distplot(
            hist_data, group_labels, bin_size=[.1, .25,])
         st.plotly_chart(fig, use_container_width=True)
      with col3:
         st.text("Text")


with tab2:
   st.header("Competency 2")


with tab3:
   st.header("An owl")

