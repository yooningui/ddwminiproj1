from org.transcrypt.stubs.browser import *
import random

def gen_random_int(number, seed): #defining the gen_random_int function
	random.seed(seed)
	random_list = []
	for i in range(0,number): #for loop to generate random numbers
		random_list.append(i)
	random.shuffle(random_list)
	return random_list

def generate():
	number = 10
	seed = 200
	array= gen_random_int(number,seed) #calling the gen_random_int function
	array_str = ",".join(str(anumber) for anumber in array) + "."	#converting the array to a string
	document.getElementById("generate").innerHTML = array_str

def insertion_sort(array):
	for i in range(1,len(array)): #for loop to sort the array using insertion sort
		temp = array[i] 
		j = i-1
		while j>=0 and temp<array[j]: #while there is an element on the left and it is greater than the element on the right
			array[j+1] = array[j] #swap the elements
			j-=1
		array[j+1] = temp #put the element in the correct position
	return array

def sortnumber1():
	numberstring = document.getElementById("generate").innerHTML
	arraystring = numberstring[:-1].split(",") #splitting the string into an array
	arrayinteger = []
	for i in arraystring: #converting the array to integers
		arrayinteger.append(int(i))
	sortedarray = insertion_sort(arrayinteger) #calling the insertion_sort function

	array_str = ",".join(str(anumber) for anumber in sortedarray) + "." #converting the array to a string

	
	document.getElementById("sorted").innerHTML = array_str

def sortnumber2():

	value = document.getElementsByName("numbers")[0].value 

	if value == "":
		window.alert("Your textbox is empty") #if the textbox is empty, alert the user
		return

	arraystring = value.split(",") #splitting the string into an array
	arrayinteger = []
	for i in arraystring: 
		arrayinteger.append(int(i)) 

	insertion_sort(arrayinteger) 

	array_sorted = ",".join(str(anumber) for anumber in arrayinteger) + "."


	document.getElementById("sorted").innerHTML = array_sorted


