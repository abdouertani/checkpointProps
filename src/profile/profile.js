import Photo from './img.js'
import qq from './img.jpg'


function Profile(props){
    const stlyleObject= {display : "flex", flexDirection:"column",alignItems:"center",backgroundColor:"grey"}
    const syleObject2={display :"flex", alignItems:"center",justifyContent:"center"}
    function HandleName(){
        alert(props.user)
    }
return <div style={syleObject2}>
    <div style={stlyleObject} >
  <Photo >{qq}</Photo>
   { props.fullname }
    {props.bio}
     {props.profession} 
     
     <a onClick={HandleName}>click to check user</a>
</div>

</div>








}
Profile.defaultProps = {
    user: "user"
   };
export default Profile