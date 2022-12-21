# SQL commands

1.  ```sql
    CREATE TABLE datacamp_courses(
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR (50) UNIQUE NOT NULL,
    course_instructor VARCHAR (100) NOT NULL,
    topic VARCHAR (20) NOT NULL
    );
    ```
2.  ```sql
    INSERT INTO datacamp_courses(course_name, course_instructor, topic)
    VALUES('Deep Learning in Python','Dan Becker','Python');
    ```
3.  ```sql
    SELECT * FROM datacamp_courses;
    ```
4.  ```sql
    select course_name,course_id from datacamp_courses
    ```
5.  ```sql
    UPDATE datacamp_courses SET course_name = 'Joining Data in SQL'
    WHERE course_instructor = 'Zia Khan';
    ```
6.  ```sql
    delete from datacamp_courses where topic  = 'JS'
    ```
