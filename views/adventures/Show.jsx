const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
    render(){
        const {title, author, bookCoverArt,_id} = this.props.book
        const capName = title[0].toUpperCase() + title.substring(1)

        return(
            <Default title={`${capName} Adventure`} book={this.props.book}>
                <div>
                    <div>
                         <img src={bookCoverArt} width="150"></img>
                    </div>
                    <div>
                         <h2> Author: {author}</h2>
                    </div>
                </div>
                <form method="POST" action={`/adventures/:${_id}`}>
                    Date:<input type="text" name="date" placeholder='Project Hail Mary'></input><br/>
                    Name:<input type="text" name="name" placeholder='Andy Weir'></input><br />
                    Location:<input type="text" name="location" placeholder='...'></input><br/>
                    Activity:<input type="text" name="activity" placeholder='...'></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>


            </Default>
        )
    }
}

module.exports = Show
