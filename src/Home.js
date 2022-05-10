const Home =() =>{
    return(
        <div className ="app">
        <form>
        <label> Teachers  Full name</label><input itemType="text"/><br></br>
         <label> Enter Your Program </label><input itemType="text"/><br></br>
         <label> Email</label><input itemType="email"/><br></br>
         <label> Enter your password</label><input itemType="text"/><br></br>
         <button className="sub">submit</button>
        </form>
         
     </div>
    )

}
export default Home;