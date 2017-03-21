import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are the best', color: 'peru'}),
        MyTitleFactory({title: 'so you say', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'but i who knows', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'no really they are', color: 'dodgerblue'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
