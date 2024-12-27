import Button from "./Button"
import { useState } from "react"

const AddNewFriendForm = ({addFriends,friends,openForm}) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  function handleForm (e){
    e.preventDefault()
    if(!name || !image) return;
    const id = crypto.randomUUID()
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }
    addFriends([...friends,newFriend])
    setName("")
    setImage('https://i.pravatar.cc/48')
    openForm(false)
  }
  return (
    <form className="form-add-friend" onSubmit={handleForm}>
      <label>👫Friend name</label>
      <input type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)} />
      <label>🌄Image URL</label>
      <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
      <Button>Add</Button>
    </form>
  )
}

export default AddNewFriendForm
