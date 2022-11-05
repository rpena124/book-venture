const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
    render(){
        const {title, author, bookCoverArt,_id, quote} = this.props.book.book
        const capName = title[0].toUpperCase() + title.substring(1)
        const [...adventures] = this.props.book.adventureList
     
        // console.log(`The title key is : ${title}`)
        // console.log(this.props.book.adventureList)

        return(
    
            <Default title={`${capName} Adventure`} book={this.props.book}>
                <div className='showPageHeader'>
                    <div id='bookCover'>
                         <img src={bookCoverArt} width="150"></img>
                    </div>
                    <div id='bookInfo'>
                        <h2> Title: {title}</h2>
                        <h2> Author: {author}</h2>
                        <p>{quote}</p>
                    </div>
   
                </div>
                <div id='showPageBodyDiv'>
                    <div id='showPageFormDiv'>
                        <form method="POST" action={`/adventures/${_id}`}>
                            Date:<input type="text" name="date" placeholder='Jan 24 , 2022'></input><br/>
                            Name:<input type="text" name="name" placeholder='Location'></input><br />
                            Location:<input type="text" name="location" placeholder='...'></input><br/>
                            Activity:<input type="text" name="activity" placeholder='...'></input><br/>
                            Photo:<input type="text" name="image" placeholder='...'></input><br/>
                            <input type="hidden" name="bookId" value={_id} ></input>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                    <div id='showPageAdventureListDiv'>
                        
                            {
                                    adventures.map((adventure)=>{
                                        // console.log(adventure + "hello")
                                    const {date, name, location, activity, _id, image} = adventure
                                    return(

                                            <div key={_id} className='adventureDiv'>
                                                <div className='adventureImageDiv'>
                                                    <img src={image}></img>
                                                </div>
                                                <div className='adventureFormDetailsDiv'>
                                                    Date: {date}<br />
                                                    Name: {name}<br />
                                                    Location: {location}<br />
                                                    Activity: {activity}<br />
                                                </div>
                                                <div class='showButtons'>
                                                    <div className='adventureDeleteButton'>
                                                        <form method="POST" action={`/adventures/${adventure._id}/adventure?_method=DELETE`}>
                                                            <input type="submit" value="Delete"></input>
                                                        </form>
                                                    </div>
                                                    <div className='adventureEditButton'>
                                                        <a href={`/adventures/${this.props.book.book._id}/${adventure._id}/adventure/edit`}  id='editLink'>
                                                            <input type="submit" value="  Edit  "></input>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })
                            }
                        
                    </div>
                </div>


            </Default>
        )
    }
}

module.exports = Show
