import moment from 'moment'

const Story = ({story}) => (
    <div className="storyStyle">
      <h4>
            <a href={story.url}>{story.title}</a>
      </h4>
      <span className="s1">{story.score} points </span >
      <span className="s2">{moment(story.timeISO).fromNow()}</span>
      <span className="s3"><i> by {story.by.id}</i></span> 

      <style>{`
            .storyStyle{
                border:1px solid grey;
                border-radius:1em;
                border-box: 1px 2px #000000;
                padding:10px;
                margin:10px;
            }
            span{
              font:8px;
            }
            .s1{
              color:green;
            }
            .s2{
              color:red;
            }
            .s3{
              color:blue;
            }
      `}    
      </style>
    </div>
  )

export default Story;