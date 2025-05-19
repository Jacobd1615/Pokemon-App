# Solution 1: Count Vowels in a String
# -------------------------------------
def get_count(sentence):
    count = 0
    vowels = "a", "e", "i", "o", "u"
    for char in sentence:
        if char in vowels:
            count += 1
    return count

# Instruction:
# Return the number (count) of vowels in the given string.
# We will consider a, e, i, o, u as vowels for this Kata (but not y).
# The input string will only consist of lower case letters and/or spaces.
# For example, the input string "aeiou" contains 5 vowels.

# -------------------------------------
# Solution 2: Number to String Conversion
# -------------------------------------
def number_to_string(num):
    # convert the number to a string
    # and return it
    return str(num)

# -------------------------------------
# Solution 3: Even or Odd Checker
# -------------------------------------
def even_or_odd(number):
    if number % 2 == 0: # checking if the number is even
        return "Even"   # This number is even
    else:
        return "Odd"    # This number is odd
# -------------------------------------

