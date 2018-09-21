// Modules
import * as React from 'react';

// Sass
import './app.scss';

// Components
import BarChart from '../bar-chart/bar-chart';

class App extends React.Component<AppProps> {
  render() {
    const chartProps = {
      data: [12, 5, 6, 6, 9, 10],
      width: 415,
      height: 200
    };

    return (
      <div className="app">
        <h1>{this.props.title}</h1>
        <h2>Bar chart</h2>
        <BarChart {...chartProps}/>
      </div>
    );
  }
}

interface AppProps {
  title: string;
}

export default App;
