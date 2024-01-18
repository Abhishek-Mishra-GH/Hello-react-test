export default function Profile() {
  return (
  <>
  <Username 
    name="Abhishek Mishra"
    uname="abhishek.cse"/>
  
  <Username 
    name="Tushar Sharma"
    uname="Flash" />
  </>
  )
  
}

function Username({name, uname}) {
  return (
    <div>
    <div> @{uname}  </div>
    <br/>
    <div> {name} </div>
    </div>
  )
}