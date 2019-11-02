import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
       <section>
         <Link>
            <img src="./" alt="./"/>
         </Link>
         <nav>
           <div className="button-menu">

              <div></div>
              <div></div>
              <div></div>
           </div>
           <ul>
             <li>
               <Link>item 1</Link>
             </li>
             <li>
               <Link>item 2</Link>
             </li>
             <li>
               <Link>item 3</Link>
             </li>
             <li>
               <Link>item 4</Link>
             </li>
             <li>
               <Link>item 5</Link>
             </li>
           </ul>
         </nav>
       </section>
    </header>
  );
}