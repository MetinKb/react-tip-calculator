import './Assets/tailwind.css'
import { useState } from 'react'
import Title from './Components/Title'
import Bill from './Components/Bill'
import Percentage from './Components/Percentage'
import Reset from './Components/Reset'
import Output from './Components/Output'

function App() {

  const [percentage, setPercentage] = useState(0)
  const [amount, setAmount] = useState("")
  const bill = amount + ((amount * percentage) / 100)

  return (
    <>
      <Title />
      <div className='w-80 h-80 lg:h-96 absolute transform -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 flex flex-col items-center justify-center gap-8 p-6 rounded-lg shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]'>
        <Bill amount={amount} setAmount={setAmount} />
        <Percentage percentage={percentage} calcPercentage={setPercentage} />
        <Output percentage={percentage} amount={amount} bill={bill} />
        <Reset resetAmount={setAmount} resetPercentage={setPercentage} />
      </div>
    </>
  )
}

export default App