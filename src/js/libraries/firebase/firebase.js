/*-----------------------------------------------------------------------------------------
--------------------//              FromTheNetNinja V9             //----------------------
-----------------------------------------------------------------------------------------*/
export const firebaseAlert = `hello, from firebase`;

import { initializeApp } from 'firebase/app';

import { 
    //getAuth,
    //GoogleAuthProvider,
    //createUserWithEmailAndPassword,
    //onAuthStateChanged,
} from 'firebase/auth';
import { 
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    //getDoc,
    //query,
    //where,
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
//const auth = getAuth();

/*--------------------//       Collection Reference       //----------------------*/
const colRef = collection(db, 'Projects')

/*--------------------//       Realtime Collection Data       //-------------------*/

onSnapshot(colRef, (snapshot) => {
    let Projects = []
        snapshot.docs.forEach((doc) => {
            Projects.push({ ...doc.data(), id: doc.id })
        })
        console.log(Projects)
})


/*--------------------//       Adding Projects       //-------------------*/
const addProjectForm = document.querySelector('.addProject');
addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addDoc(colRef, {
        name: addProjectForm.name.value,
        address: addProjectForm.address.value,
        phoneNumber: addProjectForm.phoneNumber.value,
        email: addProjectForm.email.value,
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












/*

module.exports = {

    const firebaseConfig = {
        apiKey: "AIzaSyCTvA52q6xFDf36qx8zQjQjlI-pl_THN84",
        authDomain: "spt-clean.firebaseapp.com",
        projectId: "spt-clean",
        storageBucket: "spt-clean.appspot.com",
        messagingSenderId: "1083345288398",
        appId: "1:1083345288398:web:e6563c1a8f3036e96f249f"
    },
    initializeApp(firebaseConfig);
};

*/

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
//------------------------------------------------------------------------------------------
*/



/*
// from the reference documents with Webpack: 

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseApp = initializeApp({ 
    
    apiKey: "AIzaSyCTvA52q6xFDf36qx8zQjQjlI-pl_THN84",
    authDomain: "spt-clean.firebaseapp.com",
    projectId: "spt-clean",
    storageBucket: "spt-clean.appspot.com",
    messagingSenderId: "1083345288398",
    appId: "1:1083345288398:web:e6563c1a8f3036e96f249f"

});

const db = getFirestore(firebaseApp);

async function loadCity(name) {
    const cityDoc = doc(db, `cities/${name}`);
    const snapshot = await getDoc(cityDoc);
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
}





*/

//------------------------------------------------------------------------------------------
// From my older (working firebase file)
/*

import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'
import { 
    getFirestore,
    collection,
    getDocs,
    getDoc,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    query,
    where,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQE8TxazL_86Vwd6OrrTvsV-QEGaK9BxM",
    authDomain: "firesettings.firebaseapp.com",
    projectId: "firesettings",
    storageBucket: "firesettings.appspot.com",
    messagingSenderId: "24133868223",
    appId: "1:24133868223:web:8b73512c4537c47e79440a",
    measurementId: "G-87MXNJ1KQH",
};

/*------------------------------------------------------------------------------
----------------------//       Initialize App       //--------------------------
------------------------------------------------------------------------------
initializeApp(firebaseConfig);

/*-----------------------------------------------------------------------------------------
----------------------//       Initialize Services       //--------------------------------
-----------------------------------------------------------------------------------------
const db = getFirestore();
//const auth = getAuth();

/*-----------------------------------------------------------------------------------------
--------------------------//       Collection Ref       //---------------------------------
-----------------------------------------------------------------------------------------
const colRef = collection(db, 'blogs')
const subRef = collection(db, 'subscribers')
const q = query(colRef, where("author", "==", "Nikki"))


/*-----------------------------------------------------------------------------------------
----------------------//       Get Collection Data       //--------------------------------
----------------------------------------------------------------------------------------

//Real Time Collection Data (Replaces getDocs with onSnapshot)

onSnapshot(colRef, (snapshot) => {  // replace "colRef" with "q"  to make a query selection.
    let blogs = []
    snapshot.docs.forEach((doc) => {
        blogs.push({ ...doc.data(), id: doc.id })
    })
    console.log(blogs);

});

onSnapshot(subRef, (snapshot) => {
    let subscribers = []
    snapshot.docs.forEach((doc) => {
        subscribers.push({ ...doc.data(), id: doc.id })
    })
    console.log(subscribers)
});

/*-----------------------------------------------------------------------------------------
----------------------//       Adding and Deleting BLOGS       //--------------------------
-----------------------------------------------------------------------------------------
const addBlog = document.querySelector('#add-blog-form');
const deleteBlog = document.querySelector('#delete-blog-form');
const addSub = document.querySelector('#subscribe-form');

// Adding Blogs
addBlog.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        title: addBlog.title.value,
        content: addBlog.content.value,
    })
    .then(() => {
        addBlog.reset()
    })
})

// Deleting Blogs
deleteBlog.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'blogs', deleteBlog.id.value)

    deleteDoc(docRef)
    .then(() => {
        deleteBlog.reset()
    })
})

// Adding Subscribers
addSub.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(subRef, {
        name: addSub.subname.value,
        email: addSub.subemail.value,
    })
    .then(() => {
        addSub.reset()
    })
})



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