import requests
import json

api_url = "http://api.openweathermap.org/data/2.5/weather"
params = {
    'q': 'Novosibirsk',
    'appid': '11c0d3dc6093f7442898ee49d2430d20',
    'units': 'metric'
}

res = requests.get(api_url, params=params)
data = res.json()
print(f'🌩️ Температура в Новосибирске: {round(data["main"]["temp"])}°С. Ощущается как {round(data["main"]["feels_like"])}°С.')
print(f'Давление - {data["main"]["pressure"]} мм рт. ст., влажность - {data["main"]["humidity"]}%.')
# print(data)