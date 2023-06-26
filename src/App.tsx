import { useState } from 'react'
import Button from './components/Button.tsx'
interface Wow {

}
interface DisplayProps {
  count: number;
}

const Display = (props: DisplayProps) => {
  return (
    <>
      <div>Display</div>
      <p>{props.count}</p>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => setCount(count + 1);
  const decrementCounter = () => setCount(count - 1);
  return (
    <>
      <h1> This is using React and Vite</h1>
      <div className="card">
      </div>
      <Button onClickFunction={decrementCounter} buttonText='-' />
      <Button onClickFunction={incrementCounter} buttonText='+' />
      <Display count={count} />
    </>
  )
}

export default App
