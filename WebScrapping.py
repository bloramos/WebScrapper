import requests
from bs4 import BeautifulSoup
URL = 'https://www.monster.com/jobs/search/?q=Software-Developer&where=Australia'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
results = soup.find(id='ResultsContainer')
job_elems = results.find_all('section', class_='card-content')
python_jobs = results.find_all('h2',string=lambda text: 'consultant' in text.lower())
print(len(python_jobs))


