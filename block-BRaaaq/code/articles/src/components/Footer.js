function Footer (){
    return(
        <footer>
            <div className="container flex footer">
                <small>&copy; 2020  All rights reserved</small>
                <nav>    
           <ul className="flex"> 
               <li> <a href="#"> <i className="fab fa-facebook-square"></i> </a></li>
               <li> <a href="#"><i className="fab fa-instagram-square"></i></a></li>
               <li> <a href="#"><i className="fab fa-twitter-square"></i> </a></li>
           </ul>
       </nav>
            </div>
        </footer>
    );
}

export default Footer;