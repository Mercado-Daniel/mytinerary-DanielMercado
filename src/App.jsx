import Main from './layouts/Main'
import Carrousel from './components/Carrousel'
import Card from './components/Card'
import './App.css'
import './styles/Header.css'

function App(){

  return (
  <>
    <Main>
      <main>
      <div>
          <Carrousel/>
      </div>
      <div>
        <Card></Card>
      </div>
      </main>
    </Main>
  </>
  )
}

export default App
