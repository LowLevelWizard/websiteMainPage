import requests
from bs4 import BeautifulSoup


def getTempBlacksVa()->int:
    # Making a GET request
    r = requests.get('https://weather.com/weather/today/l/37.23,-80.41?par=google')

    # Parsing the HTML
    soup = BeautifulSoup(r.content, 'html.parser')

    temp = soup.find(attrs={'data-testid':'TemperatureValue'})

    temp = str(temp)

    temp = str(temp[91])+str(temp[92])

    temp = int(temp)

    return temp


blackTemp = getTempBlacksVa()

print(blackTemp)