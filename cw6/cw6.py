import http.client
import requests

url = "http://localhost:8098/buckets/'s17036'/keys/Red"
val1 = {'name':'Zangief', 'nationality':'USSR', 'height':214, 'weight':181}
par = {"Content-type": "application/json"}

requests.post(url, val1, par)

r = requests.get(url)
print(r.text)

val2 = {'name':'Zangief', 'nationality':'Russia', 'height':214, 'weight':181}
requests.post(url, val2, par)

r = requests.get(url)
print(r.text)

requests.delete(url)

r = requests.get(url)
print(r.text)
