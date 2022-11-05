const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component{
    render() {
        const {date, _id, name, location, activity, image} = this.props.adventure
        return(
            <Default title={`${name} Edit Page`} book={this.props.book}>
                <form method="POST" action={`/adventures/${_id}/adventure?_method=PUT`}>
                    Date:<input type="text" name="date" defaultValue={date}></input><br/>
                    Name:<input type="text" name="name" defaultValue={name}></input><br />
                    Location:<input type="text" name="location" defaultValue={location}></input><br/>
                    Activity:<input type="text" name="activity" defaultValue={activity}></input><br/>
                    Photo:<input type="text" name="image" defaultValue={image}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </Default>
        )
    }
}

module.exports = Edit