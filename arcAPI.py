import requests

clientId = "EdwardsLS"
clientSecret ="7fe7122b-ccb6-4a15-aa90-7f3cff91af9e"
databaseId="3827"

authTokenURL="https://api.autocrib.net/v1/Auth"
issueQueryURL="https://api.autocrib.net/v1/Transaction/issue"

# Query parameters set up as a dictionary
auth_params = {"clientId" : clientId, "clientSecret": clientSecret}

#Headers including authorization go here
auth_headers = {
    "Accept": "application/json",
    "Authorization": "Basic"
}



#Example with bearer token {"Authorization": "Bearer [TOKEN]"}

# Response is the raw data returned from the request
response = requests.request("GET", authTokenURL, headers=auth_headers, params=auth_params)
print("request: ", response.request.path_url)

bearerToken = response.text[1:-1]
print(bearerToken)
# print(response.JSON()) # get response as JSON

issue_params={"DateRange": r"12/12/2020,12/12/2020"}
issue_headers={"Authorization": bearerToken, "accept": "text/json", "dbId": databaseId}



results = requests.request("GET", issueQueryURL, headers=issue_headers, params=issue_params).json()


print(type(results))
print("results: ", results)

for result in results:
    for key in result:
        print(key, result[key])