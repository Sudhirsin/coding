## EDITORIAL
### FSD.JS.5.7
- File `newUser.js` 
- Write a function which takes name, email and password as arguments
- return an Object of the new user
```
    CREATE A FUNCTION THAT ACCEPTS ARGUMENTS NAME, EMAIL AND PASSWORD
        INITIALISE AN OBJECT WITH KEY VALUE PAIR OF EACH ARGUMENT
        RETURN OBJECT
```
### FSD.JS.5.8
- File `hasEmail.js` 
- Write a function which will check if the property value of email is valid
- return true if valid, else false
Example of valid email id
    mysite@masaischool.com
    my.name@masaischool.org
    mysite@masai.school.net
Example of invalid email id
    masai.school.com [@ is not present]
    masai@.com.my [ tld (Top Level domain) can not start with dot "." ]
    @masai.school.net [ No character before @ ]
    name@gmail.b [ ".b" is not a valid tld ]
    name@.org.org [ tld can not start with dot "." ]
    .name@masaischool.org [ an email should not be start with "." ]
    masaischool()*@gmail.com [ only allows character, digit, underscore, and dash ]
    name..1234@yahoo.com [double dots are not allowed]
```
THIS PROBLEM STATEMENT HAS TO BE SPLIT INTO MANY FUNCTIONS.
FIRSTLY IT IS UNDERSTOOD THAT THERE IS ARE TWO PARTS TO AN EMAIL ID
FIRST PART CONTAINS THE ALIAS 
SECOND PART CONTAINS THE DOMAIN
IT IS JOINED WITH '@'
USE THE SPLIT FUNCTION THAT YOU HAVE CREATED ALREADY
CREATE A FUNCTION THAT ACCEPTS THE USER EMAIL:
    SPLIT THE EMAIL WITH '@'
    RETURN VALUE IS AN ARRAY
    IF RETURN ARRAY HAS ANYTHING OTHER THAN SIZE 2:
        RETURN FALSE
    CHECK ALIAS FOR ERRORS:
        CHECK IF ALIAS IS EMPTY
        CHECK IF ALIAS STARTS WITH "."
        CHECK IF ALIAS CONTAINS ANYTHING OTHER THAN CHARACTER, DIGIT, UNDERSCORE AND DASH
        CHECK IF THERE ARE DOUBLE DOTS
    CHECK DOMAIN FOR ERRORS:
        CHECK IF DOMAIN IS EMPTY
        CHECK IF DOMAIN STARTS WITH . (REUSE FUNCTIONS HERE)
        SPLIT THE DOMAIN AGAIN WITH "."
            CHECK SIZE OF SPLIT DOMAIN
                IF 1, THEN FALSE
                <!-- ASSUMING THAT YOU HAVE ALLOWED TOP LEVEL DOMAINS WHERE MORE THAN 1 TLD EXIST FOR EXAMPLE. MASAI.SCHOOL.NET, -->
                IF >3 FALSE
                <!-- IF YOU HAVE ONLY ALLOWED A SINGLE TLD, FOR EX. MASAI.COM  -->
                THEN >2 FALSE
            CHECK IF TLD ARE VALID
            CHECK IF DOMAIN IS VALID
            CHECK IF DOMAIN/TLD CONTAINS UNACCPTABLE CHARACTERS
    IF ALL PASS THEN RETURN TRUE
    ELSE FALSE
```
### FSD.JS.5.9
- File `propertyCheck.js` 
- Write a function which will check if the property/key exists in an object
- return true if valid, else false
```
    CREATE A FUNCTION THAT ACCEPTS AN OBJECT AND A KEY TO CHECK
        CHECK IF THE PARTICULAR KEY EXISTS:
            IF FALSE, RETURN FALSE
            ELSE RETURN TRUE
```
### FSD.JS.5.10
- File `passwordVerify.js` 
- Write a function which will accept a user object, and a password as arguments
- Check if the users passwrod and the password is matching
- return true if its a match, else false
```
    CREATE A FUNCTION THAT ACCEPTS AN OBJECT CONTAINER USER INFO, AND PASSWORD:
        CHECK IF THE PASSWORD MATCHES THE PASSWORD KEY INSIDE THE OBJECT
            IF TRUE: 
                RETURN TRUE
            ELSE:
                RETURN FALSE
```
### FSD.JS.5.11
- File `propertyUpdate.js` 
- Write a function which will accept a user object, and property name, and a value for the property
- Update the user object key with the new value
- If the key value doesnt exist, create a new one
```
    CREATE A FUNCTION THAT ACCEPTS A USER OBJECT, A PROPERTY NAME, AND THE VALUE:
        UPDATE THE KEY OF THE OBJECT WITH THE NEW VALUE
```
### FSD.JS.5.12
- File `addSkills.js` 
- Write a function which will accept a user object, and a skill
- Update/Add the user Skill property with the new value
- If the key value doesnt exist, create a new one
### FSD.JS.5.13
- File `changeStatus.js` 
- Write a function which will accept a user object, value for status
- Each user will have a status property, and a credit limit property
- If there is no status property in the user, then return invalid input as response
- Status can have the following options : `Basic`, `Premium`, `Platinum`
- `Basic` user will have a credit limit of Rs. 80,000
- `Premium` user will have a credit limit of Rs. 3,00,000
- `Platinum` user will have a credit limit of Rs. 6,00,000
- Update the credit limit according to the new status
- return the new object
```
    CREATE A FUNCTION THAT ACCEPTS USER OBJECT, STATUS VALUE:
        CHECK IF STATUS PROPERTY EXISTS IN USER:
            IF FALSE:
                RETURN "INVALID INPUT"
        UPDATE STATUS PROPERTY OF THE USER
        BASED ON CATEGORY OF USER:
            UPDATE CREDIT LIMIT PROPERTY OF USER
        RETURN NEW USER
```