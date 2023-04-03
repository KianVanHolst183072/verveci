#!/usr/bin/env python
# coding: utf-8

# In[11]:


import streamlit as st
import pandas as pd


# In[5]:


df = pd.read_csv("titanic.csv")


# In[18]:


st.title("Benchmark")


# In[21]:


section_1 = (
st.header("Competency 1"),
st.markdown("This will be the content of section 1")
)


# In[19]:


section_2 = (
st.header("Competency 2"),
st.markdown("This will be the content of section 2")
)


# In[22]:


current_page = section_1


# In[23]:


current_page


# In[25]:


if st.button('Next page'):
    current_page = section_2
    current_page

