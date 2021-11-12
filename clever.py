import requests
# import json

## I used the API explore to generate the Python code here and copied with the limit parameter of 1000

url = "https://api.clever.com/v3.0/sections"

querystring = {"limit":"1000"}

headers = {
    "Accept": "application/json",
    "Authorization": "Bearer DEMO_TOKEN"
}

response = requests.request("GET", url, headers=headers, params=querystring)


##Instead of using 'response.text', I wanted to manipulate it as a JSON:
responseJSON = response.json()

## This next area of code is 'scaffolding' to help me interpret the data being returned in the response

#print(responseJSON) - this printed a large output so I need to parse the response to see what I need to work with

# # I want to confirm the data type that the response is sending:
# print("datatype of response", type(responseJSON))
# this returned: datatype of response <class 'dict'>

#having confirmed it's a dictionary, I'm going to print the keys
# for key in responseJSON:
#     print(key)
# The output is:
# >> links
# >> data

# print(responseJSON["links"])
# This outputs a single line and the data I'm looking for is not here: [{'rel': 'self', 'uri': '/v3.0/sections?limit=1000'}]

# print(responseJSON["data"])
#The output is a lot of information in what appears to be a dictionary. I'm going to encapsulate this in a single variable:

data = responseJSON.get("data")

# #Confirming this is a list:
# print("variable 'data' is a", type(data))

# #confirming this is a list
# #I'm going to print a single element which will be easier to read
# print(data[0])

#It appears to be a dictionary:

# for key in data[0]:
#     print(key)

# #There are only two keys, 'data' and 'uri'. I believe what I'm looking for is in data[0]['data']

# print(type(data[0]['data']))

#It's a nested dictionary

# for key in data[0]['data']:
#     print(key)

# #There are a number of keys and it looks like 'students' is the one I need

# print(data[0]['data']['students'])

#This appears to be a list of what I think are hash values, I'm going to assume each value corresponds to a single studen

#Going to test print to demonstrate I can get the number of students in a given section:
# print("number of students", len(data[0]['data']['students']))

### Now that I've identified a way to get the number of students for a section, my 'scaffolding' code is finished
### and I'm commenting out the above print statements

## A section is going to be a single element in the data variable which is a list
## The list of students is going to be in data[x]['data']['students']

numSections = len(data)   #the length of the data list should be the same as the number of sections

# initializin variables to keep a running count
totStudents = 0 
sectionNum = 0

for section in data:
    sectionNum += 1
    # print("section", sectionNum, "students", len(section['data']['students']))
    # I wanted to confirm that 379 sectiosn were being found
    students = len(section['data']['students']) # in this particular section, I assume the number of students corresponds
    # to the length of the student list
    totStudents += students # add to the running total

print("total student count", totStudents)
print("number of sections", numSections)
avg = totStudents/numSections #Python's '/' operator automatically returns a float
avg_rounded = round(avg, 0)
print("Average per section as a float", avg)
print("Average per section rounded", avg_rounded)  ## THIS IS THE ANSWER!!!

##Final output:
""" 
total student count 8966
number of sections 379
Average per section as a float 23.65699208443272
Average per section rounded 24.0
"""

