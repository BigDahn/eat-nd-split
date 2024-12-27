import AddNewFriendForm from "./AddNewFriendForm";
import Button from "./Button";
import FriendComp from "./FriendComp";
import { useState } from 'react'
import SplitFormBill from "./SplitFormBill";
const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
]

function App() {
   const [friends, setFriends] = useState(initialFriends)
   const [openForm,setOpenForm] = useState(false)
   const [selectedFriend,setSelectedFriend] = useState(null)

   const [selectedName,setSelectedName] = useState("")
   function handleFormOpen (){
    setOpenForm(!openForm)
   }
console.log(selectedFriend)
   function handleSelectedFriend (id,name){
    setSelectedFriend(selectedFriend === id ? null : id)
    setSelectedName(name)

   }

   function handleSplitBill (value){
    
    setFriends(friends.map((friend)=>friend.id === selectedFriend ? {...friend, balance: friend.balance + value} : friend  ))
    setSelectedFriend(null)
   }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendComp
          friends={friends}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {openForm && (
          <>
            <AddNewFriendForm
              friends={friends}
              addFriends={setFriends}
              openForm={setOpenForm}
            />
          </>
        )}
        <Button onClick={handleFormOpen}>
          {openForm ? 'Close' : 'Add New Friend'}
        </Button>
      </div>
      {selectedFriend && (
        <SplitFormBill
          selectedName={selectedName}
          onSplitBill={handleSplitBill}
          key={selectedFriend}
        />
      )}
    </div>
  )
}

export default App;
