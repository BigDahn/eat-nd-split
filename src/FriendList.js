import Button from "./Button"


const FriendList = ({ id, name, image, balance, onSelectedFriend,selectedFriend }) => {

let isSelected = selectedFriend === id
  return (
    <li className={isSelected ? "selected" : null}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You Owe {name} {Math.abs(balance)}€
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you {Math.abs(balance)}€
        </p>
      )}{' '}
      {balance === 0 && <p>You And {name} are even</p>}
      <Button onClick={() => onSelectedFriend(id,name)}>
        
        {isSelected ? 'close' : 'select'}
      </Button>
    </li>
  )
}

export default FriendList
