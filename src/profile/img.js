

function Photo(props){
     const stlyleObject= {width : "30vw"}
return  (
     <img style={stlyleObject} src={props.children}></img>
)



}
export default Photo 