import React from 'react';
import Topbar from './components/topbar/Topbar'; 
import Sidebar from './components/sidebar/Sidebar';
import Home from './home/Home';
import "./app.css"

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

/*Widget followers @instagram*/
const followers= document.getElementById('followers');
async function getFollowers(profileId){
  const url= 'https://instagram.com/${profileId}/?__a=1';
  const response= await fetch(url);
  const data=await response.json();

  return data.graphql.user.edge_followed_by.count;
}
async function setFollowers(profileId) {
  followers.textContent = await getFollowers(profileId);
  console.log(await getFollowers(profileId));
}
setInterval(()=>
setFollowers('instagram'),1000);



export default App;
