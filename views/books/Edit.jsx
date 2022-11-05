const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component{
    render() {
        const {title, _id, author, bookCoverArt, quote} = this.props.book
        return(
            <Default title={`${title} Edit Page`} book={this.props.book}>
                 <form method="POST" action={`/adventures/${_id}?_method=PUT`}>
                    Title:<input type="text" name="title" defaultValue={title}></input><br/>
                    Author:<input type="text" name="author" defaultValue={author}></input><br />
                    Favorite Quote:<input type="text" name="quote" defaultValue={quote}></input><br />
                    Book Cover Art:<input type="text" name="bookCoverArt" defaultValue={bookCoverArt}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </Default>
        )
    }
}

module.exports = Edit