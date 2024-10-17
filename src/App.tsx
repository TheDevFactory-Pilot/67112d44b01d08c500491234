import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [goals, setGoals] = useState<string[]>([])
  const [currentExp, setCurrentExp]=useState<string>('')

  const onSubmitExpense=()=>{
    if(!currentExp)return
    setGoals((goals)=>[...goals,currentExp])
    setCurrentExp('')
  }

  const deleteGoal=(id:number)=>{
    //assuming indexes are the same
    setGoals((currentGoals)=>currentGoals.filter((goal,index)=>index!=id))
    
  }



  return (
    <div  data-testId="MainApp">
      {/*Don't remove the data-testId as it's required for the system to detect that the app is live */}
      <h1>Vite + React</h1>
      <div>
        <h1>Add new goal</h1>
      </div>
        <input 
        data-testId='GoalInput'
        onChange={(event)=>setCurrentExp(event.target.value)} 
        value={currentExp}/>
      <div className="card">
        <button 
        data-testId='Add Goal'
        onClick={onSubmitExpense}>
          Submit Expensve
        </button>
      </div>
      <div>
        {goals.map((goal,goalId)=>{
          return(
            <button data-testId={goal} onClick={()=>deleteGoal(goalId)}>
              {goal}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default App
