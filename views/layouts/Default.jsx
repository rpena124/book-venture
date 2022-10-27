const React = require('react')

class Default extends React.Component {
    render(){
        const{title} =this.props
        return(
            <html>
                <head>
                    <link re="stylsheet" href="/css/app.css"/>
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/adventures">Home</a>
                        <a href="/adventures/new">Add a trip</a>
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}

                </body>
            </html>
        )
    }
}

module.exports = Default