import streamlit as st
import subprocess
import os
import requests

st.title('Playwright Test Runner')



# Initialize logs storage
if 'logs' not in st.session_state:
    st.session_state['logs'] = ''

col1, col2 = st.columns(2)

# Run UI Tests
with col1:
    if st.button('Run UI tests'):
        st.session_state['logs'] = ''
        with st.spinner('Running UI tests...'):
            proc = subprocess.Popen(
                ['npm', 'test'],
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True
            )
            output = ''
            for line in proc.stdout:
                output += line
            st.session_state['logs'] = output

# Run API Tests
with col2:
    if st.button('Run API tests'):
        st.session_state['logs'] = ''
        with st.spinner('Running API tests...'):
            proc = subprocess.Popen(
                ['npx', 'jest'],
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True
            )
            output = ''
            for line in proc.stdout:
                output += line
            st.session_state['logs'] = output

# Show output
st.text_area('Logs', value=st.session_state['logs'], height=400)
