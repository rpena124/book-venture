const React = require('react')

class Default extends React.Component {
    render(){
        // const{book, title} =this.props.book

        // console.log(book._id)

        return(
            <html>
                <head>
                    <link re="stylsheet" href="/css/app.css"/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/adventures">Home</a>
                        <a href="/adventures/new">Add a trip</a>
                        {this.props.book && this.props.book.book ? <a href={`/adventures/${this.props.book.book._id}/edit`}>{this.props.title} Edit Page</a> : ''}
                        {this.props.book && this.props.book.book ? <a href={`/adventures/${this.props.book.book._id}`}>{this.props.title} Show Page</a> : ''}
                    </nav>
                    <h1>
                        {this.props.title}
                    </h1>
                    {this.props.children}

                </body>
            </html>
        )
    }
}

module.exports = Default