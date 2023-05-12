# ASSESSMENT 4: Interview Practice Questions

1. What is object-oriented programming? How is it different than functional programming?

<!-- Your answer: -->
    Object-oriented programming is based on the concept of objects. Objects are containers for data and functions. While functional programming is based on the concept of functions and are containers for data.

<!-- Researched answer: -->
    Object-oriented programming is based on the concept of objects. Everything is represented as an object and each have their own properties and methods. Object could also interact with other objects through method calls. 
    Unlike functional programming, in OOP, objects can be changed at any time since it is mutable, whereas in FP, the data passed between functions are immutable and new values are made by applying transformation to existing values.

2. What is the difference between a Float and an Integer in Ruby?

<!-- Your answer:  -->
    Floats include decimals, whereas integers are only whole numbers.

<!-- Researched answer: -->
    Floats are numbers that have decimal points, while integers are whole numbers without decimal points.

3. Ruby has an implicit return. What does that mean?

<!-- Your answer:  -->
    It means that you don't have to declare the return because it's already included.

<!-- Researched answer: -->
    Implicit return in Ruby means that the value of the last expression evaluated within a method is automatically returned as a result of the method.

4. What is a block in Ruby?

<!-- Your answer: -->
    A block is a group of code that can be re-used.

<!-- Researched answer: -->
    A block is a piece of code that could be passed to a method as an argument and then executed within the context of the method. It is used extensively in Ruby like filtering and transforming data.

5. How do you extract a value in a Ruby hash?

<!-- Your answer: -->
    By using the .[] method

<!-- Researched answer: -->
    By using the square bracket notation `[]` to extract a value from a hash.
    .fetch can also be used, but if the key isn't in the hash, it could result into an error and return `nil` instead of the value you originally wanted to extract. 


## Looking Ahead: Terms for Next Week

1. RSpec:
        A testing framework for Ruby and allows users to write automated tests for code. It also provides a domain-specific language (DSL) for describing the expected behavior of the code.

2. Test-driven development:
        A software development process where tests are written before the code is written.

3. PostgreSQL:
        An open-source relational database management system used in web applications

4. CRUD:
        Create, Read, Update, Delete are the basic operations that can be performed on a database or other data storage systems.

5. HTTP:
        The underlying protocol used by the World Wide Web to exchange data between servers and users. It also defines how requests and responses should be formatted and transmitted over the Internet. 
