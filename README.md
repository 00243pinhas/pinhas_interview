**Tasks :**
       
• Request the data located at `https://api.baubuddy.de/dev/index.php/v1/tasks/select` from PHP

• Display the downloaded data in a table showing `task`, `title`, `description` and `colorCode`. The displayed HTML element for the `colorCode` should have its color set accordingly

• Create a search which allows searching for any of the data in the table

• Implement auto-refresh functionality which requests the data from above every 60 minutes and updates the table with the new data without reloading the web page. The data should be fetched via PHP

- Outside the table, create a button that opens a modal. In this modal, there should be another button that allows you to select any image from the file system. When you have selected the image, it will be displayed in the modal

**Installation Dependencies:** 

   **** PHP, curl, and Apache 

**Usage Instructions**

 You can run the http://localhost/home.html once apache's installed .

 home.html (The Entry point)

**Known Issues**

- implement auto-refresh functionality which requests the data from above every 60 minutes and updates the table with the new data without reloading the web page. The data should be fetched via PHP
    
    **Not Really an issue, i just wanna precise that the functionality above has been done Via Php and javascript. THE data requets has been done with javascript, and the fecthing was done with Php . Due to the nature of php, there was not a way to implement this whole functionality using php (Cron was needed). if there is any further Clarifications, i will be open to it . THank YOU .**