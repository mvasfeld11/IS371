// function that will return an element with a given ID

function r_e(id) {
  return document.querySelector(`#${id}`);
}
// change page when home page selected
r_e("home").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("main").innerHTML = `<div class="column">
  <div class="content is-medium">
    <h1
      style="color: #452700"
      ;
      class="has-text-centered has-text-weight-bold"
    >
      Recent Events
    </h1>
    <p class="has-text-centered brown-text">
      M Levy Rozman, a.k.a "GothamChess" the world's biggest chess
      Youtuber, talked about his incredible growth over the last six
      months, reactions from other top players, an amusing one-line
      response from Magnus Carlsen, and his thoughts about the upc...
    </p>
    <div class="is-centered">
      <figure class="image">
        <img src="pawn.jpg" alt="pawn" />
      </figure>
    </div>
  </div>
</div>
<div class="column">
  <div class="content is-large">
    <img
      id="chess-board"
      src="dark-wooden-chess-pieces-against-a-black-background.jpeg"
      alt="cool chess photo"
    />
    <h2
      style="color: #452700"
      ;
      class="has-text-centered has-text-weight-bold"
    >
      Chess Quote
    </h2>
    <p id="quote" class="has-text-centered brown-text">
      “Chess is played with the mind and not with the hands!”
    </p>
    <p class="has-text-centered brown-text">(Renaud and Kahn)</p>
  </div>
</div>
<div class="column">
  <div class="content is-medium">
    <h1
      style="color: #452700"
      ;
      class="has-text-centered has-text-weight-bold"
    >
      Tip of the Day
    </h1>
    <p class="has-text-centered brown-text">
      Every move should improve the quality of the position, gain material
      or gain time.
    </p>
    <div class="is-centered">
      <figure class="image">
        <img src="queen.jpg" alt="queen's gambit" />
      </figure>
    </div>
  </div>
</div>`;
});
// change page when openings page selected
r_e("openings").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("main").innerHTML = `<section class="hero is-warning">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Popular Chess Openings</h1>
      <h2 class="subtitle">Here are some of the most popular chess openings:</h2>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <table class="table is-bordered is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Opening Name</th>
          <th>Description</th>
          <th>Notable Players</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Queen's Gambit</td>
          <td>A popular opening that involves white offering a pawn in exchange for control of the center of the board.</td>
          <td>Garry Kasparov, Anatoly Karpov, Bobby Fischer</td>
        </tr>
        <tr>
          <td>Sicilian Defense</td>
          <td>A popular defense for black that involves playing ...c5 to attack white's center pawns.</td>
          <td>Garry Kasparov, Magnus Carlsen, Vishy Anand</td>
        </tr>
        <tr>
          <td>King's Indian Defense</td>
          <td>A solid defense for black that involves playing ...d6 and ...e5 to control the center and attack white's pawn structure.</td>
          <td>Bobby Fischer, Gary Kasparov, Viswanathan Anand</td>
        </tr>
        <tr>
          <td>French Defense</td>
          <td>A popular defense for black that involves playing ...e6 and ...d5 to control the center and limit white's pawn advances.</td>
          <td>Anatoly Karpov, Viswanathan Anand, Magnus Carlsen</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>`;
});

// change page when tutorials page selected
r_e("tutorials").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("main").innerHTML = `   <section class="hero is-warning">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Chess Tutorial
      </h1>
      <h2 class="subtitle">
        Learn the basics of chess
      </h2>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <h2 class="title">Introduction</h2>
    <p>Chess is a two-player strategy game played on a checkered board with 64 squares arranged in an 8x8 grid. Each player starts with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. The goal of the game is to checkmate the opponent's king, which means the king is in a position to be captured and cannot escape capture on the next move.</p>
    <h2 class="title">Pieces and Movement</h2>
    <p>The king can move one square in any direction. The queen can move any number of squares diagonally, horizontally, or vertically. The rook can move any number of squares horizontally or vertically. The knight moves in an L-shape pattern, two squares in a horizontal or vertical direction and then one square in a perpendicular direction. The bishop moves any number of squares diagonally. Pawns can move one or two squares forward on their first move and one square forward on subsequent moves, and can only capture diagonally.</p>
    <h2 class="title">Gameplay</h2>
    <p>The game begins with white moving first. Players take turns moving their pieces with the goal of putting the opponent's king in checkmate. If a player's king is under attack, they must make a move to get out of check. If a player's king is not in check but they have no legal move, the game is a draw. The game can also end in a draw by mutual agreement, stalemate, threefold repetition, or the 50-move rule.</p>
  </div>
</section>`;
});

// change page when rankings page selected
r_e("rankings").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("main").innerHTML = ` <section class="hero is-warning">
  <div class="hero-body">
    <div class="container">
    <h1 class="title">Current and All Time Chess Rankings</h1>
    <h2 class="subtitle">
      Here are some of the current and all time greats of Chess
    </h2>
    </div>
  </div>
</section><section class="section">
  <div class="container">
    <h1 class="title has-text-centered">Top 10 All-Time Chess Rankings</h1>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Country</th>
          <th>Elo Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Garry Kasparov</td>
          <td>Russia</td>
          <td>2851</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Magnus Carlsen</td>
          <td>Norway</td>
          <td>2847</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Fabiano Caruana</td>
          <td>United States</td>
          <td>2820</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Levon Aronian</td>
          <td>Armenia</td>
          <td>2805</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Wesley So</td>
          <td>United States</td>
          <td>2799</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Vladimir Kramnik</td>
          <td>Russia</td>
          <td>2790</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Viswanathan Anand</td>
          <td>India</td>
          <td>2776</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Hikaru Nakamura</td>
          <td>United States</td>
          <td>2774</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Peter Svidler</td>
          <td>Russia</td>
          <td>2770</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Maxime Vachier-Lagrave</td>
          <td>France</td>
          <td>2760</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <div class="container">
    <h1 class="title has-text-centered">Current Chess Rankings</h1>
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Country</th>
          <th>Elo Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Magnus Carlsen</td>
          <td>Norway</td>
          <td>2847</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Fabiano Caruana</td>
          <td>USA</td>
          <td>2827</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ding Liren</td>
          <td>China</td>
          <td>2801</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Ian Nepomniachtchi</td>
          <td>Russia</td>
          <td>2792</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Levon Aronian</td>
          <td>Armenia</td>
          <td>2781</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Wesley So</td>
          <td>USA</td>
          <td>2772</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Anish Giri</td>
          <td>Netherlands</td>
          <td>2764</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Shakhriyar Mamedyarov</td>
          <td>Azerbaijan</td>
          <td>2762</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Alexander Grischuk</td>
          <td>Russia</td>
          <td>2761</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Teimour Radjabov</td>
          <td>Azerbaijan</td>
          <td>2760</td>
        </tr>
      </tbody>
    </table>
  </div>
</section> <footer>
<p>Source: <cite><a href="https://ratings.fide.com/top_lists.phtml">FIDE Top 100 Players</a></cite></p>
</footer>
`;
});

// change page when About Us page selected
r_e("about").addEventListener("click", () => {
  // overwrite exsiting content
  r_e("main").innerHTML = `<section class="hero is-warning">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">About ChessMind</h1>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <h2 class="title">Welcome to ChessMind</h2>
    <p>
      Welcome to ChessMind, an informative and interactive website
      designed for chess enthusiasts and beginners alike. My website aims
      to provide a community-based platform where players can learn, play,
      and keep up to date with the latest chess news and events.
    </p><br>
    <p>
      As part of an Info Systems course to learn JavaScript, Bulma, HTML,
      CSS, and Firebase, my website  showcases some skills
      that employers may appreciate. With a focus on clean design and
      user-friendly interface, my website offers a range of features,
      including resources and tutorials for beginners, a forum for users
      to share ideas and strategies, and potentially in the future, an interactive board
      to play against the computer and other users.
    </p><br>
    <p>
      My objective is to increase the popularity and interest in the game
      of chess while creating a welcoming community for users to share
      their experiences and tips. I believe that by offering a unique
      experience that caters to the needs of chess enthusiasts and
      beginners, ChessMind can be the go-to destination for all things
      chess-related.
    </p> <br>
    <p>
      Similar to Chess.com and Lichess.com, my website aims to provide a
      range of features that are both informative and engaging. The website offer
      history and current event articles/headlines related to chess,
      general tutorials and resources for beginners, and potentially in the future, a
      unique game of the day feature.
    </p> <br>
    <p>
      The database stores user profiles, real-life rankings of players in
      the world, and potential rankings in the website's community if
      interactive games are implemented into the website. By providing a
      range of features and experiences, I hope to create a vibrant
      community where chess players and enthusiasts can learn, play, and
      connect with others who share their passion for the game.
    </p><br>
    <p>
      Thank you for visiting ChessMind, and I hope you enjoy your stay!
    </p>
  </div>
</section>`;
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

let signupButton = document.getElementById("signup-button");
let modal = document.getElementById("signup-modal");
let cancelButton = document.getElementById("cancel");
let closeButton = document.querySelector(".delete");

let loginButton = document.getElementById("login-button");
let loginModal = document.getElementById("login-modal");
let cancelLoginButton = document.getElementById("cancel-login");
let closeLoginButton = document.querySelector(".delete-login");

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
