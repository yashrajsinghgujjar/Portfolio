# This code will cut the taxes of salary 
import time
Name=input("Please enter your name : ")
time.sleep(2)
salary=float(input("Please enter your annual Salary in India : "))
# Tax cutting 
if salary<400001:
    tax = 0#0% tax 
elif salary<800001:
    tax = 10#10%
elif salary<1200001:
    tax = 15#15%
elif salary<1600001:
    tax = 20#20%
elif salary<2000001:
    tax = 20#20%                    
elif salary<2400001:     
    tax = 25#25%
elif salary>2400001:
    tax = 30#30%    
calculation = salary* (1 - tax / 100)
time.sleep(2)
print(f" Mr/Mrs.{Name} your salary after tax deduction :{ calculation}")
time.sleep(2)
print(f" Mr/Mrs.{Name} your tax deduction is : {salary-calculation}")
time.sleep(2)
print(f"Mr/Mrs.{Name} Thank you! Tax calculation is complete.")