import os


print(os.getcwd())
os.chdir("../")
print(os.getcwd())
print(os.listdir(os.getcwd()))