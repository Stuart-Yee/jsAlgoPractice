import os
import random

CAPITALS = {'Alabama': 'Montgomery', 
'Alaska': 'Juneau', 
'Arizona': 'Phoenix',
'Arkansas': 'Little Rock', 
'California': 'Sacramento', 
'Colorado': 'Denver', 
'Connecticut': 'Hartford', 
'Delaware': 'Dover', 
'Florida': 'Tallahassee',
'Georgia': 'Atlanta', 
'Hawaii': 'Honolulu', 
'Idaho': 'Boise', 'Illinois':
'Springfield', 
'Indiana': 'Indianapolis', 
'Iowa': 'Des Moines', 
'Kansas':'Topeka', 
'Kentucky': 'Frankfort', 
'Louisiana': 'Baton Rouge', 
'Maine': 'Augusta', 
'Maryland': 'Annapolis', 
'Massachusetts': 'Boston', 
'Michigan':'Lansing', 
'Minnesota': 'Saint Paul', 
'Mississippi': 'Jackson', 
'Missouri': 'Jefferson City', 
'Montana': 'Helena', 
'Nebraska': 'Lincoln', 
'Nevada':'Carson City', 
'New Hampshire': 'Concord', 
'New Jersey': 'Trenton', 
'New Mexico': 'Santa Fe', 
'New York': 'Albany',
'North Carolina': 'Raleigh', 
'North Dakota': 'Bismarck', 
'Ohio': 'Columbus', 
'Oklahoma': 'Oklahoma City',
'Oregon': 'Salem', 
'Pennsylvania': 'Harrisburg', 
'Rhode Island': 'Providence',
'South Carolina': 'Columbia', 
'South Dakota': 'Pierre', 
'Tennessee':'Nashville', 
'Texas': 'Austin', 
'Utah': 'Salt Lake City', 
'Vermont':'Montpelier', 
'Virginia': 'Richmond', 
'Washington': 'Olympia', 
'West Virginia': 'Charleston', 
'Wisconsin': 'Madison', 
'Wyoming': 'Cheyenne'}

KEYS = list(CAPITALS.keys())

if not os.path.isdir(r"./quizzes"):
    os.mkdir("quizzes")
    print("making the directory")
os.chdir(r"./quizzes")
print(os.getcwd())

for quizNum in range(10):
    try:
        quizFile = open(f"capitalquiz{quizNum+1}.txt", "x")
        answerKeyFile = open(f"capitalquiz{quizNum+1}Key.txt", "x")
    except:
        print("writing over old quiz...")
    finally:
        quizFile = open(f"capitalquiz{quizNum+1}.txt", "w")
        answerKeyFile = open(f"capitalquiz{quizNum+1}Key.txt", "w")
    header = f"Name: \t Date:\nQuiz Number {quizNum+1}\n\n"
    keyHeader = "QUIZ KEY\n" + header
    random.shuffle(KEYS)
    questions = {}
    i = 1
    for key in KEYS:
        if i == 11:
            break
        questions[key] = CAPITALS[key]
        i += 1
    questionsText = ""
    questionsWithAnswer = ""
    for key in questions:
        questionsText += f"What is the capital of {key}?\n\n"
        questionsWithAnswer += f"What is the capital of {key}? (ANSWER) {questions[key]}\n\n"
    quizFile.write(header + questionsText)
    quizFile.close()
    answerKeyFile.write(keyHeader + questionsWithAnswer)
    quizFile.close()


