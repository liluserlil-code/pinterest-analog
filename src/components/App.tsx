import AppRouter from "../router"
import MasterProvider from "../provider/MasterProvider"

function App() {
  return (
    <MasterProvider>
      <AppRouter/>
    </MasterProvider>
  )
}

export default App
