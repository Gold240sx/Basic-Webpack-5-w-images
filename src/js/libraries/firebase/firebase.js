/*-----------------------------------------------------------------------------------------
--------------------//              Database FromTheNetNinja V9             //----------------------
-----------------------------------------------------------------------------------------*/
export const firebaseAlert = `hello, from firebase`;

import { initializeApp } from 'firebase/app';

import { 
    getAuth,
    //GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { 
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    where,
    orderBy,
    serverTimestamp,
    getDoc,
    updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTvA52q6xFDf36qx8zQjQjlI-pl_THN84",
    authDomain: "spt-clean.firebaseapp.com",
    projectId: "spt-clean",
    storageBucket: "spt-clean.appspot.com",
    messagingSenderId: "1083345288398",
    appId: "1:1083345288398:web:e6563c1a8f3036e96f249f"
}

/*----------------------//       Initialize App       //--------------------------*/
initializeApp(firebaseConfig);

/*--------------------//       Initialize Services       //----------------------*/
const db = getFirestore();
const auth = getAuth();

/*--------------------//       Collection Reference       //----------------------*/
const colRef = collection(db, 'Projects');
const userRef = collection(db, 'userData');

//queries
const q = query(colRef, orderBy('createdAt'));

/*--------------------//       Realtime Collection Data       //-------------------*/

onSnapshot(colRef, (snapshot) => {
    let Projects = [];
        snapshot.docs.forEach((doc) => {
            Projects.push({ ...doc.data(), id: doc.id })
        })
        console.log(Projects);
});

onSnapshot(q, (snapshot) => {
    //let Projects = [];
    let Search = [];
        snapshot.docs.forEach((doc) => {
            Search.push({ ...doc.data(), id: doc.id })
        })
        console.log(Search);
})


/*--------------------//       Adding Projects       //-------------------*/
const addProjectForm = document.querySelector('.addProject');
addProjectForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const projectStatus = document.getElementById('statusDisplay').innerText;
    const projectAddedAlertOutput = document.getElementById('addProject-alert');
    const projectAddedAlertNameOutput = document.getElementById('addProject-alert-name');
    //const showSubmitAlert = projectAddedAlertOutput.classList.remove("hidden");
    //setTimeout( function(showSubmitAlert) {projectAddedAlertOutput.classList.add("hidden"), 3000});

    addDoc(colRef, {
        name: addProjectForm.name.value,
        address: addProjectForm.address.value,
        city: addProjectForm.city.value,
        phoneNumber: addProjectForm.phoneNumber.value,
        email: addProjectForm.newProjectEmail.value,
        salesRep: addProjectForm.salesRep.value,
        status: projectStatus,
        createdAt: serverTimestamp(),
    })
    .then(() => {
        addProjectForm.reset();
    })

});


/*--------------------//       Deleting Projects       //-------------------*/
const deleteProjectForm = document.querySelector('.deleteProject');
deleteProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'Projects', deleteProjectForm.id.value)

    deleteDoc(docRef)
        .then(() => {
            deleteProjectForm.reset();
        })
});

/*--------------------//       Get a single Document      //-------------------*/
const docRef = doc(db, 'Projects', 'vyDxdi1CFGVsMSEBu651');

onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
});

/*--------------------//       Updating a Document      //-------------------*/
const editProjectForm = document.querySelector('.editProject');
editProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'Projects', editProjectForm.id.value);

    updateDoc(docRef, {
        name: 'updated name'
    })
    .then (() => {
        editProjectForm.reset();
    })
})

/*-----------------------------------------------------------------------------------------
---------------------------//              AUTH             //-----------------------------
-----------------------------------------------------------------------------------------*/

/*--------------------//      Signing Users Up      //-------------------*/

const signupForm = document.getElementById('signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const username = document.getElementById('signup-name').value;

    createUserWithEmailAndPassword(auth, email, password, name)
        .then((cred) => {
            console.log('user created:', cred.user)
            signupForm.reset();
        }, function(error, authData) {
            if (error) {
                console.log("Error creating User:", error);
            } else {
                // save the user's profile into the database so we can list users,
                // use them in Security and Firebase Rules, and show profiles
                ref.child("users").child(authData.uid).set({
                    provider: authData.provider,
                    name: userName,
                });
            }
        })
});

/*--------------------//      Logging Users In & Out     //-------------------*/

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', (e) => {

    const username = document.getElementById('nav-username-display');
    const logout = document.getElementById('logout');
    const welcome = document.getElementById('welcome');
    
    signOut( auth)
        .then(() => {
            //console.log("user has signed out")
            welcome.classList.add('hidden');
            logout.classList.add('hidden');
        })
        .catch((err) => {
            //console.log(err.message)
        })
});


const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        //console.log(cred.user.email , 'has signed in!')
        loginForm.reset();
    })
    .catch((err) => {
        //console.log(err.message)
    })
});

/*--------------------//      Subscribing to Auth Changes      //-------------------*/

onAuthStateChanged(auth, (user) => {

    /*--------------------//      Displaying Username      //-------------------*/
    const usernameSpot = document.getElementById('nav-username-display');
    const logout = document.getElementById('logout');
    const welcome = document.getElementById('welcome');
    const username = auth.currentUser.email;
    
    if (auth != "null" ) {
        usernameSpot.innerText = username;
        logout.classList.remove('hidden');
        welcome.classList.remove('hidden');
    } else {
        welcome.classList.add('hidden');
        logout.classList.add('hidden');
    }
});




/*
// from the firebase video 2018 (V8):
import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import 'firebase/firebase-storage';
import 'firebase/firebase-functions';

const firebaseConfig = {
    apiKey: "AIzaSyCTvA52q6xFDf36qx8zQjQjlI-pl_THN84",
    authDomain: "spt-clean.firebaseapp.com",
    projectId: "spt-clean",
    storageBucket: "spt-clean.appspot.com",
    messagingSenderId: "1083345288398",
    appId: "1:1083345288398:web:e6563c1a8f3036e96f249f"
},

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.collection('books);

//Storage
const storage = firebaseConfig.storage();
const ref = storage.ref('path');
*/


/*-----------------------------------------------------------------------------------------
----------------------//              FrontEnd UI              //--------------------------
-----------------------------------------------------------------------------------------

const mobileMenuChecked = document.getElementById('hamburger');
const mobileNavList = document.getElementById('mobile-nav-list');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuChecked.addEventListener('click', (e) => {
    if (mobileNavList.classList.contains('hidden')) {
        mobileNavList.classList.remove('hidden');
        mobileNav.style.right = "0";
        mobileNav.style.width = "80%";
        mobileNav.style.maxwidth = "300px";
        mobileNav.style.marginLeft = "20%";

    } else if (!mobileNavList.classList.contains('hidden')) {
        mobileMenuChecked.checked = false;
        mobileNavList.classList.add('hidden');
        mobileNav.style.right = "0";
        mobileNav.style.width = "0%";
        mobileNav.style.maxwidth = "300px";
        mobileNav.style.marginLeft = "0%";
    }
})

*/