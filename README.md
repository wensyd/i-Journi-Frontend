# i-Journi - Capstone Project
#### By Wensy DeSousa

## Project Summary

I-Journi is a journal application with a Reactjs Frontend. The frontend has an index, show, create, update, and delete routes. The frontend is styled using tailwindCSS and heroicons. 
## Schema


{
    table.increments("id")
    table.string("date")
    table.string("title")
    table.string("body", length= 3000)
    table.timestamps()
}

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /entry | get | get all entries (index)|
| /entry/:id | get | get a particular entry (show)|
| /entry/new | get | return form to create a new entry (new)|
| / | post | get post request to /entry, create new and redirect to index (create)|
| /entry/:id/edit | get | edit a particular entry (edit)|
| /entry/:id | put | put request to /entry/:id (update)|
| /entry/:id | delete | deletes a particular entry (destroy)|

## User Stories

-user can view all entries on main page (index).
-user can select entry and it redirects to show page for that particular entry. 
-user can edit entry, title, and body of each entry.
-user can delete entry.
-user can update entry.
-user can create new entry. 


## List of Technologies

-React
-JS
-tailwindCSS


## Challenges

- The biggest challenge was learning how to style with tailwindCSS. It was the first time using the styling library. The cards were a challenge to align properly on the main page to display all journal entries. Once I was able to figure it out I was able to style the cards horizontally. On the show page the background was a challenge to display in full width as it will not adjust unless there is more content added. The footer was also a challenge due to the lack of content on the page.
