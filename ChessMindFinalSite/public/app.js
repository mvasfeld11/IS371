let signupButton = document.getElementById("signup-button");
let modal = document.getElementById("signup-modal");
let cancelButton = document.getElementById("cancel");
let closeButton = document.querySelector(".delete");

let loginButton = document.getElementById("login-button");
let loginModal = document.getElementById("login-modal");
let cancelLoginButton = document.getElementById("cancel-login");
let closeLoginButton = document.querySelector(".delete-login");

// function that will return an element with a given ID

function r_e(id) {
  return document.querySelector(`#${id}`);
}

function configure_message_bar(message) {
  // show a confirmation message for the user

  // show the message bar for only 2 seconds and then hide it back

  r_e("message_bar").classList.remove("is-hidden");

  r_e("message_bar").innerHTML = `${message}!`;

  // hide the message bar after 2 seconds

  setTimeout(() => {
    r_e("message_bar").classList.add("is-hidden");

    // clear the message bar
    r_e("message_bar").innerHTML = "";
  }, 5000);
}

function configure_nav_bar(user) {
  let signedinlinks = document.querySelectorAll(".signedin");
  let signedoutlinks = document.querySelectorAll(".signedout");

  // console.log(signedinlinks, signedoutlinks);

  // check if user already exists

  if (user) {
    // show all elements needed for when signed in
    // AND hide all elements that shouldn't be show when signed in

    signedinlinks.forEach((link) => {
      link.classList.add("is-hidden");
    });

    signedoutlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    });
  } else {
    // no user

    // hide all elements that can't be seen when not signed in
    // AND show all elements that need to be displayed when not signed in

    signedinlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    });

    signedoutlinks.forEach((link) => {
      link.classList.add("is-hidden");
    });
  }
}

// Retrieve posts from Firestore for the Chess Community

// Function to create a Bulma-styled post element
function createPostElement(author, title, description, timestamp) {
  const postElement = document.createElement("article");
  postElement.classList.add("media");

  const postContent = `
  <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="images.jpeg" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">${title}</p>
        <p class="subtitle is-6">${author}</p>
      </div>
    </div>

    <div class="content">
       ${description}
    </div>
  </div>
</div>

  `;

  postElement.innerHTML = postContent;
  return postElement;
}

// Get a random quote from Firestore
function getRandomQuote() {
  return quotesRef
    .get()
    .then((querySnapshot) => {
      const quotes = [];
      querySnapshot.forEach((doc) => {
        quotes.push(doc.data());
      });
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    })
    .catch((error) => {
      console.error("Error getting quotes:", error);
    });
}

// Display the quote on the webpage
function showQuote(quote) {
  quoteElement.innerHTML = `<p>${quote.quote}</p><p>- ${quote.author}</p>`;
}

// Get a random tip from Firestore
function getRandomTip() {
  return tipsRef
    .get()
    .then((querySnapshot) => {
      const tips = [];
      querySnapshot.forEach((doc) => {
        tips.push(doc.data());
      });
      const randomIndex = Math.floor(Math.random() * tips.length);
      return tips[randomIndex];
    })
    .catch((error) => {
      console.error("Error getting tips:", error);
    });
}

// Display the tip on the webpage
function showTip(tip) {
  tipElement.innerHTML = `<p>${tip.tip}</p>`;
}

// Get a random current event from Firestore
function getRandomCurrEvent() {
  return eventRef
    .get()
    .then((querySnapshot) => {
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push(doc.data());
      });
      const randomIndex = Math.floor(Math.random() * events.length);
      return events[randomIndex];
    })
    .catch((error) => {
      console.error("Error getting current events:", error);
    });
}

// Display the tip on the webpage
function showCurrEvent(currEvent) {
  eventElement.innerHTML = `${currEvent.title}<p>${currEvent.desc}</p>`;
}
// change page when home page selected
r_e("home").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("main").classList.remove("is-hidden");
  r_e("tutorial-main").classList.add("is-hidden");
  r_e("openings-main").classList.add("is-hidden");
  r_e("rankings-main").classList.add("is-hidden");
  r_e("about-main").classList.add("is-hidden");
  r_e("report-main").classList.add("is-hidden");
  r_e("community-main").classList.add("is-hidden");
});
// change page when openings page selected
r_e("openings").addEventListener("click", () => {
  console.log("hllo");
  // overwrite exsiting content
  r_e("openings-main").classList.remove("is-hidden");
  r_e("main").classList.add("is-hidden");
  r_e("tutorial-main").classList.add("is-hidden");
  r_e("rankings-main").classList.add("is-hidden");
  r_e("about-main").classList.add("is-hidden");
  r_e("report-main").classList.add("is-hidden");
  r_e("community-main").classList.add("is-hidden");
});

// change page when tutorials page selected
r_e("tutorials").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("tutorial-main").classList.remove("is-hidden");
  r_e("main").classList.add("is-hidden");
  r_e("openings-main").classList.add("is-hidden");
  r_e("rankings-main").classList.add("is-hidden");
  r_e("about-main").classList.add("is-hidden");
  r_e("report-main").classList.add("is-hidden");
  r_e("community-main").classList.add("is-hidden");
});

// change page when rankings page selected
r_e("rankings").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("rankings-main").classList.remove("is-hidden");
  r_e("main").classList.add("is-hidden");
  r_e("openings-main").classList.add("is-hidden");
  r_e("tutorial-main").classList.add("is-hidden");
  r_e("about-main").classList.add("is-hidden");
  r_e("report-main").classList.add("is-hidden");
  r_e("community-main").classList.add("is-hidden");
});

// change page when About Us page selected
r_e("about").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("about-main").classList.remove("is-hidden");
  r_e("main").classList.add("is-hidden");
  r_e("openings-main").classList.add("is-hidden");
  r_e("tutorial-main").classList.add("is-hidden");
  r_e("rankings-main").classList.add("is-hidden");
  r_e("report-main").classList.add("is-hidden");
  r_e("community-main").classList.add("is-hidden");
});

// change page when Report an Issue  page selected
r_e("report").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("report-main").classList.remove("is-hidden");
  r_e("main").classList.add("is-hidden");
  r_e("openings-main").classList.add("is-hidden");
  r_e("tutorial-main").classList.add("is-hidden");
  r_e("rankings-main").classList.add("is-hidden");
  r_e("about-main").classList.add("is-hidden");
  r_e("community-main").classList.add("is-hidden");
});

// change page when Community page selected
r_e("community").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("community-main").classList.remove("is-hidden");
  r_e("main").classList.add("is-hidden");
  r_e("openings-main").classList.add("is-hidden");
  r_e("tutorial-main").classList.add("is-hidden");
  r_e("rankings-main").classList.add("is-hidden");
  r_e("about-main").classList.add("is-hidden");
  r_e("report-main").classList.add("is-hidden");
});
// generate quote of the day
// async function fetchRandomQuote() {
//   const response = await fetch("https://quotesfreeapi.com/api/quotes/random");
//   const data = await response.json();
//   console.log(data.quote);
//   return data.quote;
// }

// setInterval(async function () {
//   const quote = await fetchRandomQuote();
//   document.getElementById("quote").textContent = quote;
// }, 30 * 1000); // Call every 30 seconds

// sign up
signupButton.addEventListener("click", function () {
  modal.classList.add("is-active");
});

cancelButton.addEventListener("click", function () {
  modal.classList.remove("is-active");
});

closeButton.addEventListener("click", function () {
  modal.classList.remove("is-active");
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("is-active");
  }
});

// log in
loginButton.addEventListener("click", function () {
  loginModal.classList.add("is-active");
});

cancelLoginButton.addEventListener("click", function () {
  loginModal.classList.remove("is-active");
});

closeLoginButton.addEventListener("click", function () {
  loginModal.classList.remove("is-active");
});

window.addEventListener("click", function (event) {
  if (event.target === loginModal) {
    loginModal.classList.remove("is-active");
  }
});

// user sign up

// user fills out the form
// user clicks the submit button
// get the user email/password
// send email/password for firestore

r_e("signup_form").addEventListener("submit", (e) => {
  // prevent the page from auto-refresh
  e.preventDefault();

  // get the email/password from the form

  let email = r_e("email").value;
  let password = r_e("password").value;

  console.log(email, password);

  auth.createUserWithEmailAndPassword(email, password).then((user) => {
    // console.log(user.user.email + " is signed up!");

    // clear the form
    // reset()

    r_e("signup_form").reset();

    // close the modal
    // remove the is-active class from the modal

    r_e("signup-modal").classList.remove("is-active");

    // // configure the message bar

    // configure_message_bar(user.user.email);
  });
});
// user log in

// user fills out the form
// user clicks the submit button
// get the user email/password
// send email/password for firestore

r_e("login_submit").addEventListener("click", (e) => {
  // prevent the page from auto-refresh
  e.preventDefault();

  // get the email/password from the form

  let email = r_e("email_").value;
  let password = r_e("password_").value;

  // console.log(email, password);

  auth.signInWithEmailAndPassword(email, password).then((user) => {
    //console.log(user.user.email + " is signed in!");

    // clear the form
    // reset()

    r_e("login_form").reset();

    // close the modal
    // remove the is-active class from the modal

    r_e("login-modal").classList.remove("is-active");
  });
});

// sign out

r_e("logout-button").addEventListener("click", () => {
  auth.signOut().then(() => {
    configure_message_bar("You are now signed out");
  });

  // change to home page
  r_e("main").classList.remove("is-hidden");
  r_e("tutorial-main").classList.add("is-hidden");
  r_e("openings-main").classList.add("is-hidden");
  r_e("rankings-main").classList.add("is-hidden");
  r_e("about-main").classList.add("is-hidden");
  r_e("report-main").classList.add("is-hidden");
  r_e("community-main").classList.add("is-hidden");
});

auth.onAuthStateChanged((user) => {
  // check if a user exists
  if (user) {
    // configure the message bar

    configure_message_bar("Welcome  " + user.email);

    // add user's email address to the nav bar

    r_e("currentuser").innerHTML = auth.currentUser.email;

    // configure nav bar

    configure_nav_bar(user);
    show_posts();
  } else {
    // no user

    // clear the user's email address from the nav bar

    //r_e("currentuser").innerHTML = "";

    // configure nav bar

    configure_nav_bar(user);
  }
});

//Report an Issue in the database

// Get a reference to the form
const form = r_e("report-issue-form");

// Add a listener for the form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the form data
  const issueType = r_e("issue-type").value;
  const issueDescription = r_e("issue-description").value;
  const reporterEmail = r_e("reporter-email").value;

  // Create a new document in the "issues" collection with the form data
  db.collection("issues")
    .add({
      issueType,
      issueDescription,
      reporterEmail,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // Add a timestamp field
    })
    .then(() => {
      // Reset the form
      form.reset();
      alert("Issue reported successfully!");
    })
    .catch((error) => {
      console.error("Error reporting issue:", error);
      alert("There was an error reporting the issue. Please try again later.");
    });
});

// Community Chess page: making and sorting posts

// Get a reference to the post form
const post = r_e("post-form");

// Get a reference to the posts container
//const postsContainer = document.querySelector("#posts");

// Add a listener for the form submit event
post.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting via HTTP

  // Get the form data
  const name = document.querySelector("#name-input").value;
  const title = document.querySelector("#title-input").value;
  const description = document.querySelector("#description-input").value;

  // Create a new document in the "posts" collection with the form data
  db.collection("posts")
    .add({
      name,
      title,
      description,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // Add a timestamp field
    })
    .then(() => {
      // Reset the form post sheet
      post.reset();
      alert("Post created successfully!");
    })
    .catch((error) => {
      console.error("Error creating post:", error);
      alert("There was an error creating the post. Please try again later.");
    });
});

// Allow for the posts to be show

// Get a reference to the post container element
const postContainer = document.getElementById("posts-container");

// Get a reference to the posts collection in Firestore
const postsCollection = firebase.firestore().collection("posts");

// Query the last 6 posts based on timestamp
postsCollection
  .orderBy("timestamp", "desc")
  .limit(6)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // For each post, create a Bulma-styled post element and add it to the post container
      const post = doc.data();
      const postElement = createPostElement(
        post.name,
        post.title,
        post.description
      );
      postContainer.appendChild(postElement);
    });
  });

// Quote of the Day javascript

// Get a reference to the quotes collection in Firestore
const quotesRef = db.collection("quotes");

// Get a reference to the HTML element that will display the quote
const quoteElement = r_e("quote");

// Get a new quote and display it on the webpage every day
//setInterval(() => {
getRandomQuote().then((quote) => {
  showQuote(quote);
});
//}, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

// Tip of the Day javascript

// Get a reference to the quotes collection in Firestore
const tipsRef = db.collection("tips");

// Get a reference to the HTML element that will display the quote
const tipElement = r_e("tip");

// Get a new tip and display it on the webpage every day
//setInterval(() => {
getRandomTip().then((tip) => {
  showTip(tip);
});
//}, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

// Current Event of the Day javascript

// Get a reference to the quotes collection in Firestore
const eventRef = db.collection("currentEvents");

// Get a reference to the HTML element that will display the quote
const eventElement = r_e("currEvent");

// Get a new tip and display it on the webpage every day
//setInterval(() => {
getRandomCurrEvent().then((currEvent) => {
  showCurrEvent(currEvent);
});
//}, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
