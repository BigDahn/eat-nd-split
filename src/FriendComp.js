import FriendList from "./FriendList"

const FriendComp = ({friends,onSelectedFriend,selectedFriend}) => {
 
  return <ul>
    {friends.map((friend)=>{
    return (
      <FriendList
        {...friend}
        key={friend.id}
        onSelectedFriend={onSelectedFriend}
        selectedFriend={selectedFriend}
      />
    )
    })}
  </ul>
}

export default FriendComp
