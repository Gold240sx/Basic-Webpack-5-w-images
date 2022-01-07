/*-----------------------------------------------------------------------------------------------------------
-------------------------------------         TESTS         -------------------------------------------------
-----------------------------------------------------------------------------------------------------------*/
import { freedom } from './functionality/freedom';      //Tests: Website File Structure
    console.log('hello from index');                        //Tests: Index.JS -> Main.JS Webpack Link and that it's current
    console.log(freedom);                                   //Tests: Imports
const firstImport = document.getElementById('firstImport'); 
firstImport.style.color = "orange";                         //Tests: shows this file's ability to manipulate DOM objects
firstImport.innerText = freedom;                            //Tests: shows full link between this file, exports and other JS Files

/*-----------------------------------------------------------------------------------------------------------
-----------------------------------         BACKEND: FIREBASE         ---------------------------------------
-----------------------------------------------------------------------------------------------------------*/

import { firebaseAlert } from './libraries/firebase/firebase.js';
    console.log( firebaseAlert );

    /*-------- Additional Firebase Files ------*/



/*-----------------------------------------------------------------------------------------------------------
------------------------------------         SCSS and CSS         -------------------------------------------
-----------------------------------------------------------------------------------------------------------*/

import "../styles/main.css";
import "../styles/main.scss";

console.log("hey yall");