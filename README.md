# regex-form
This project takes a basic form and adds advanced interactivity by using JavaScript to filter through data, display certain parts of the website according to user interaction and it uses regex to add form validation

Real Time Form Validation:
This form provides real time validation for the name field starting on line 310 of script.js, the function uses regex and an event listener that listens for keyup on the form, everytime the user types, the form fields value is put through a regex test and provides real time results for this section of the form.


Conditional Error Messages:
This form provides different error messages for the email field which is written in script.js starting on line 324. The function uses an event listener that listens for the blur event, the keyup event resulted in messy user experience as the first letter typed into the email field would result in error, because one letter does not fit an email format. This function displays different messages which warn the user if they missed the "@" symbol, forgot the top level domain (.com/.net/.org etc.) or did not enter an email at all.
