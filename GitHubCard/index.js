/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const myGit = '';
let resArray = [];
axios
  .get(`https://api.github.com/users/TommyGunzz`)
  .then((res) => {
      console.log('Here is the res: ', res);
      resArray = res.data;
    })
  .catch((err) => {
      console.log('Here is the err: ', err);
  });


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// component


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
 // My Code

 function myCard(data){
  const myCardMaker=
      document.createElement('.card');
  const myImgMaker=
      document.createElement('img');
  const cardInfoMaker=
      document.createElement('.card-info');
  const userNameMaker=
      document.createElement('h3');
  const usersNikNameMaker=
      document.createElement('p');
  const locationMaker=
      document.createElement('p');
  const profileMaker=
      document.createElement('p');
  const followersMaker=
      document.createElement('p');
  const followingMaker=
      document.createElement('p');
  const bioMaker=
      document.createElement('p');

myCardMaker.append(myCardMaker);
  myCardMaker.append.card(myCard);
  myImgMaker.append.card(img);
  cardInfoMaker.append.card();
  myImgMaker.append.card(img);
  myCardMaker.classList.add('card');
  cardInfoMaker.classList.add('card-info');
  userNameMaker.classList.add('name');
  usersNikNameMaker.classList.add('user-name');
  profileMaker.append.card.data(Profile);
  followersMaker.append.card.data(followersArray);
  followingMaker.append.card.data(followingMaker);
  bioMaker.append.card.data(bio);

  console.log (data);
  return myCardMaker;
};