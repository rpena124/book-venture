# Restful table

| # | Action | URL | HTTP Verb | JSX view filename | mongoose method|
|---|--------|-----|-----------|-------------------|----------------|
| 1 | Index  | /adventures/| GET | Index.jsx|Adventure.find()|
|2| Show|/adventures/:id | GET|Show.jsx | Adventure.findById()|
|3| New | /adventures/new | NEW | New.jsx | none|
|4|Create| /adventures/ | POST | none | Adventure.create(req.body)|
|5|Edit | /adventures/:id/edit| GET| Edit.jsx | Adventure.findById()|
|6|Update|/adventures/:id | PUT | none |Adventure.findByIdAndUpdate(req.params.id, req.body)|
|7| Destroy | /adventures/:id | DELETE | none | findByIdAndDelete(req.params.id)|