const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component{
    render(){
        return(
            <Default title='Add a Book'>
                <form method="POST" action="/adventures">
                    Book Title:<input type="text" name="title" placeholder='...'></input><br/>
                    Author:<input type="text" name="author" placeholder='...'></input><br />
                    Favorite Quote:<input type="text" name="quote" placeholder='...'></input><br />
                    Book Cover Art:<input type="text" name="bookCoverArt" placeholder='...'></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>

            </Default>
        )
    }
}

module.exports = New