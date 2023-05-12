# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.


reposts1 = 7
# # Expected output: '7 is odd'
reposts2 = 42
# # Expected output: '42 is even'
reposts3 = 221
# # Expected output: '221 is odd'

# by using the modulo operator, I can check if the remainder of the num divided by 2 is equal to 0 then it is an even number
def even_or_odd(num)
    if num % 2 == 0
        return "#{num} is even"
    else
        return "#{num} is odd"
end
end
puts even_or_odd(reposts1)
puts even_or_odd(reposts2)
puts even_or_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 

beatles_album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

# the delete method removes the characters within the parentheses and contains both uppercase and lowercase letters to get every vowel
def no_vowels(str)
    return str.delete('aeiouAEIOU')
end

puts no_vowels(beatles_album1)
puts no_vowels(beatles_album2)
puts no_vowels(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# I had to use downcase to make every letter lowercased. This makes it easier to compare the original word and its reversed version. Since there's two outcomes, I had to use if/else statements.
def palindrome(str)
    str.downcase == str.downcase.reverse ? "#{str} is a palindrome" : "#{str} is not a palindrome"
    end

puts palindrome(palindrome_test_case1)
puts palindrome(palindrome_test_case2)
puts palindrome(palindrome_test_case3)