import { useState } from "react"
import Button from "./Button"


const SplitFormBill = ({selectedName,onSplitBill}) => {
  const [bills,setBills] = useState(" ")
  const [yourExpenses,setYourExpenses] = useState(" ")
  const [whoIsPaying,setWhoIsPaying] = useState("user")

  const FriendsBill = bills ? bills - yourExpenses : " ";

  function handleSubmit (e){
     e.preventDefault()
    if (!bills || !yourExpenses) return;
    onSplitBill(whoIsPaying === "user" ? FriendsBill : -yourExpenses )
  } 
  return (
    <form className="form-split-bill" onSubmit={handleSubmit} >
      <h2>Split a bill with {selectedName}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bills}
        onChange={(e) => setBills(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={yourExpenses}
        onChange={(e) => setYourExpenses(Number(e.target.value) > bills ? yourExpenses : Number(e.target.value) )}
      />

      <label>👫{selectedName}'s expense</label>
      <input type="text" disabled value={FriendsBill} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedName}</option>
      </select>

      <Button>Split The Bill</Button>
    </form>
  )
}

export default SplitFormBill
