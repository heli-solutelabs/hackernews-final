import React from 'react'
import {fetchStories} from '../api'
import Stories from '../pages/Stories'
import Nav from '../pages/Nav'


const Index = (props) => {
  const {stories} = props
    return (
      <div className="appStyle">
        <Nav />
        <Stories stories={stories} />

        <style>{`
                  .appStyle{
                      font-family:'Verdana,sans-serif,Geneva';
                      color:#333;
                      width:80%;
                      margin:auto;
                  }
                `}</style>
      </div>
   )
}
Index.getInitialProps = async({query:{category = 'top'}}) => {
  return fetchStories(category)
}

export default Index;
