import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
        <nav style={{position:"absolute", top:0, left:0, width:'100%', zIndex:99, background:"#fff", padding:20,}}>
        <ul style={{display:'flex', alignItems:'center', justifyContent:'center', listStyle:'none', gap:20}}>
          <li>
            <Link to="assignment3">Assignment 3</Link>
          </li>
          <li>
            <Link to="/assignment2">Assignment 2</Link>
          </li>
          <li>
            <Link to="/">Assignment 1</Link>
          </li>
        </ul>
      </nav>
      <main style={{paddingTop:60, background: "#e3e2e2", minHeight:'100vh'}}>

        <Outlet />
      </main>
            
        </>
    );
}

export default Layout;

