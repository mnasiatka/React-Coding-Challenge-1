import ReportsDashboardComponent from './ReportsDashboardComponent'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route 
        path='/'
        component={ReportsDashboardComponent}
      />
    </div>
  );
}

export default App;
