import './App.css';
import * as d3 from 'd3'
import { arc } from 'd3'

function App() {

  const width = 960
  const height = 500
  const centerX = width / 2
  const centerY = height / 2
  const strokeWidth = 10
  const eyeOffset = 90
  const eyeOffsetY = 100
  const eyeRadius = 40
  const mouthWidth = 20
  const mouthRadius = 200

  let mouthArc = arc()
    .innerRadius(mouthRadius - 50)
    .outerRadius(mouthRadius + mouthWidth - 50)
    .startAngle(Math.PI / 2)
    .endAngle(3 * Math.PI / 2)


  return (
    <div className="App">
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          {/* Could also put a rotate(45) command into a transform line */}
          <circle r={centerY - strokeWidth / 2} fill="yellow" stroke="black" strokeWidth={strokeWidth} />
          <circle cx={ -eyeOffset} cy={ -eyeOffsetY} r={eyeRadius} />
          <circle cx={ +eyeOffset} cy={ -eyeOffsetY} r={eyeRadius} />
          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
}
export default App;
