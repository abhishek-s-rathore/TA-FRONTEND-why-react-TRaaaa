function Header(){
    return (
<header>
    <div className="container flex header">
     <a className="logo">Articles</a>   
     <nav>    
         <ul className="flex"> 
             <li> <a href="#"> Home</a></li>
             <li> <a href="#">About</a></li>
             <li> <a href="#"> Contact</a></li>
         </ul>
     </nav>
     </div>
</header>
    );
}
export default Header;