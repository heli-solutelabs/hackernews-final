import Story from './Story'

const Stories = ({stories}) => (
    <ol>
      {stories.map((story, index) => (
        <li key={index}>
          <Story story={story} />
        </li>
      ))}
    </ol>
  )

export default Stories