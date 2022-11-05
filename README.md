
# ReadVenture

This application allows users to create an itinerary based on their favorite book. 
I love reading, and on many occasions, I found myself wanting to be in the place the character has been. Visit the places the characters have visited. So this application was inspired by the literary adventures I would like to bring to life. 

# Screenshots

<img src="">

# Technologies Used

-   HTML
-   CSS
-   JavaScript
-   Express
-   MongoDB
-   JXS View Engine
-   CRUD
-   INDUCES
-   MVC
-   NPM
-   NodeJS
-   Google Fonts

https://fdossena.com/?p=html5cool/buttons/i.frag

# Getting Started

1. Input the information of your favorite book that you would like as inspiration for your next trip.

    1a. You can create, edit and delete a book.
2. In the book show page you can add multiple activities/adventures/etc.

    2a. You can create, edit and delete your adventures.


# Restful table

| # | Action | URL | HTTP Verb | JSX view filename | mongoose method|
|---|--------|-----|-----------|-------------------|----------------|
| 1 | Index  | /adventures/| GET | Index.jsx|Book.find()|
|2| Show|/adventures/:id | GET|Show.jsx | Book.findById()|
|3| New | /adventures/new | NEW | New.jsx | none|
|4|Create| /adventures/ | POST | none | Book.create(req.body)|
|5|Edit | /adventures/:id/edit| GET| Edit.jsx | Book.findById()|
|6|Update|/adventures/:id | PUT | none |Book.findByIdAndUpdate(req.params.id, req.body)|
|7| Destroy | /adventures/:id | DELETE | none | Book.findByIdAndDelete(req.params.id)|
|8|Update|/adventures/:id/adventure | PUT | none |Adventure.findByIdAndUpdate(req.params.id, req.body)|
|9| Destroy | /adventures/:id/adventure | DELETE | none | Adventure.findByIdAndDelete(req.params.id)|
|10|Create| /adventures/:id | POST | none | Adventure.create(req.body)|
|11|Edit | /adventures/:id/:id/adventure/edit| GET| Edit.jsx | Adventure.findById()|