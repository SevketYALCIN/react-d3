// Modules
import * as React from 'react';

// Sass
import './app.scss';

// Components
import BarChart from '../bar-chart/bar-chart';
import LineChart from '../line-chart/line-chart';

class App extends React.Component<AppProps> {
  render() {
    const chartProps = {
      data: [19, 5, 14, 25, 9, 10],
      width: 415,
      height: 400
    };

    return (
      <div className="app">
        <h1>{this.props.title}</h1>
        <h2>Bar chart</h2>
        <BarChart {...chartProps}/>
        <h2>Line chart</h2>
        <LineChart {...chartProps}/>
      </div>
    );
  }
}

interface AppProps {
  title: string;
}

export default App;
