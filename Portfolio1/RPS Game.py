import random
import time
you =input("""Please Enter Your Name
""")
computers =input("""Please Enter opponent Name
""")
print("                  STARTING THE STONE,PAPER,SCISSOR *GAME* =")
time.sleep(2)
user=input("""
           1. STONE = st
           2. PAPER = pa
           3. SCISSOR = sc
           Type here : """)
option=["st","pa","sc"]
computer=random.choice(option)
print(f"{computers} choose {computer} :")
print(f"You choose {user} :")
time.sleep(2)
if user == computer:
    print("This is a Game Draw")
elif user == "st" and  computer == "pa":
    print (f"{computers} wins")
elif user == "st" and computer == "sc":
    print (f" {you}  you win ! HURRY !")
elif user == "pa" and computer == "sc":
     print (f"{computers} wins")
elif user == "pa" and computer == "st":
    print (f" {you}  you win ! HURRY !")
elif user == "sc" and computer == "st":
   print (f"{computers} wins !!")
elif user == "sc" and computer == "pa":
    print (f" {you}  you win ! HURRY !")
else:
    print ("In valid option")