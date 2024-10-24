import ProfileHeader from './component/ProfileHeader'
import Content from './component/Content'
import CommentsSection from './component/CommentsSection'
import './App.css'
import './about.css'


function App() {
  return (
    <>
      <div id='app'>
        <ProfileHeader />
        <Content />
        <CommentsSection />
      </div>
    </>
  )
}

export default App
