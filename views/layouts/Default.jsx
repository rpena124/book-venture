const React = require('react')

class Default extends React.Component {
    render(){
        // const{book, title} =this.props.book

        // console.log(book._id)

        return(
            <html>
                <head>
                    <link rel='stylesheet' href='/css/app.css' />
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <div className='defaultHeader'>
                        <div className='navBarDiv'>
                                <nav>
                                    <a href="/adventures">Home</a>
                                    <a href="/adventures/new">Add Book</a>
                                    {this.props.book && this.props.book.book ? <a href={`/adventures/${this.props.book.book._id}/edit`}> Edit Page</a> : ''}
                                    {this.props.book && this.props.book.book ? <a href={`/adventures/${this.props.book.book._id}`}>Show Page</a> : ''}
                                </nav> 
                            </div> 
                            <div className='defaultTitle'>
                                <h1>
                                    {this.props.title}
                                </h1>
                        </div>
                    </div>

                    {this.props.children}

                </body>
            </html>
        )
    }
}

module.exports = Default