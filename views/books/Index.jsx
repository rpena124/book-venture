const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component{
    render(){
        const {books} = this.props
        return(
            <Default title="Book List" >
                <ul>
                    {
                        books.map((book)=>{
                            const {title, author, _id} = book
                            return(

                                    <li key={_id}>
                                       Title: <a href={`/adventures/${_id}`}>{title}</a><br />
                                        Author: {author}<br />
                                        <form method="POST" action={`/adventures/${_id}?_method=DELETE`}>
                                            <input type="submit" value="Delete"></input>
                                        </form>
                                    </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}
module.exports = Index