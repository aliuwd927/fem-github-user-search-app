import React from "react";
import LocationImg from "./assets/icon-location.svg";
import CompanyImg from "./assets/icon-company.svg";
import WebsiteImg from "./assets/icon-website.svg";
import TwitterImg from "./assets/icon-twitter.svg";


function BottomSection({userData}){
  console.log(Object.keys(userData).length);
  console.log(userData);

  const renderStockProfile = () =>{
    return(
      <img src="https://via.placeholder.com/117" alt="" title="profile_picture" className = 'UserProfilePicture_117'/>
    )
  }

  const renderUserProfile = () => {
    return(
      <img src={userData.avatar_url} alt="" title="profile_picture" className = 'UserProfilePicture_117'/>
    )
  }

  const ifshitnotvalid =()=>{

    return(
    
      <div className ='UserProfileInformationContainer'>

      <div className="UserProfile_Header">
        <h4>The Octocat</h4>
        <p>Joined 25 Jan 2011</p>
      </div>

      <div className="UserProfile_Handle">
        <p>@octocat</p>
      </div>

      <div className="UserProfile_Bio">
        <p>This Profile has no bio</p>
      </div>

      <div className="innerBtm">
        <div className="UserProfile_RepoFollow">
          <div className='RepoContainer'>
            <h5>Repos</h5>
            <h3>8</h3>
          </div>
          <div className='FollowerContainer'>
            <h5>Followers</h5>
            <h3>3938</h3>
          </div>
          <div className="FollowingContainer">
            <h5>Following</h5>
            <h3>9</h3>
          </div>
      </div>
      </div>
      <div className="UserProfile_LocationSocialMedia_Container">
       <div className="UserProfile_LocationSocialMedia_Left">
         <div className="UserProfile_LocationSocialMedia_Location">
           <img src={LocationImg} alt="" title="Location"/>
           <p>San Francisco</p>
         </div>
         <div className="UserProfile_LocationSocialMedia_Website">
           <img src={WebsiteImg} alt="" title="Website"/>
           <p>https://github.blog</p>
         </div>
       </div>
       <div className="UserProfile_LocationSocialMedia_Right">
         <div className="UserProfile_LocationSocialMedia_Twitter">
           <img src={TwitterImg} alt="" title="Twitter"/>
           <p>Not Availiable</p>
         </div>
         <div className="UserProfile_LocationSocialMedia_Company">
           <img src={CompanyImg} alt="" title="Company"/>
           <p>@github</p>
         </div>
       </div>
      </div>
    </div>
    );
  }

  const ifshitisvalid = () =>{
    return(
      <div className ='UserProfileInformationContainer'>

      <div className="UserProfile_Header">
        <h4>{userData.login}</h4>
        <p>Joined {userData.created_at}</p>
      </div>

      <div className="UserProfile_Handle">
        <p>@{userData.login}</p>
      </div>

      <div className="UserProfile_Bio">
        <p>{userData.bio}</p>
      </div>

      <div className="innerBtm">
       <div className="UserProfile_RepoFollow">
          <div className='RepoContainer'>
           <h5>Repos</h5>
            <h3>{userData.public_repos}</h3>
         </div>
          <div className='FollowerContainer'>
            <h5>Followers</h5>
            <h3>{userData.followers}</h3>
          </div>
          <div className="FollowingContainer">
            <h5>Following</h5>
            <h3>{userData.following}</h3>
          </div>
        </div>
      </div>


      <div className="UserProfile_LocationSocialMedia_Container">
       <div className="UserProfile_LocationSocialMedia_Left">
         <div className="UserProfile_LocationSocialMedia_Location">
           <img src={LocationImg} alt="" title="Location"/>
           <p>{userData.location}</p>
         </div>
         <div className="UserProfile_LocationSocialMedia_Website">
           <img src={WebsiteImg} alt="" title="Website"/>
           <p>{userData.url}</p>
         </div>
       </div>
       <div className="UserProfile_LocationSocialMedia_Right">
         <div className="UserProfile_LocationSocialMedia_Twitter">
           <img src={TwitterImg} alt="" title="Twitter"/>
           <p>{userData.twitter_username}</p>
         </div>
         <div className="UserProfile_LocationSocialMedia_Company">
           <img src={CompanyImg} alt="" title="Company"/>
           <p>{userData.company}</p>
         </div>
       </div>
      </div>

      
    </div>
  
    )
  };









  return(
    <div className="BottomSection">
    {/*LEFT SIDE */}
      <div className ='UserProfilePictureContainer'>
      {Object.keys(userData).length === 0 ? renderStockProfile() : renderUserProfile()}
      </div>


    {Object.keys(userData).length === 0 ? ifshitnotvalid() : ifshitisvalid()}

    </div>//End of BottomSection Div
  );
}

export default BottomSection;

/* 
Step 1:
Figure out how to set a default child

Step 2:
Render Child if username is valid.


if(objisempty.length = 0)
const ifshitnotvalid =()=>{

return(

<div className ='UserProfileInformationContainer'>

        <div className="UserProfile_Header">
          <h4>{userData.login}</h4>
          <p>Joined {userData.created_at}</p>
        </div>

        <div className="UserProfile_Handle">
          <p>@{userData.login}</p>
        </div>

        <div className="UserProfile_Bio">
          <p>{userData.bio}</p>
        </div>

        <div className="UserProfile_RepoFollow">
          <div className='RepoContainer'>
            <h5>Repos</h5>
            <h3>{userData.public_repos}</h3>
          </div>
          <div className='FollowerContainer'>
            <h5>Followers</h5>
            <h3>{userData.followers}</h3>
          </div>
          <div className="FollowingContainer">
            <h5>Following</h5>
            <h3>{userData.following}</h3>
          </div>
        </div>

        <div className="UserProfile_LocationSocialMedia_Container">
         <div className="UserProfile_LocationSocialMedia_Left">
           <div className="UserProfile_LocationSocialMedia_Location">
             <img src={LocationImg} alt="" title="Location"/>
             <p>{userData.location}</p>
           </div>
           <div className="UserProfile_LocationSocialMedia_Website">
             <img src={WebsiteImg} alt="" title="Website"/>
             <p>{userData.url}</p>
           </div>
         </div>
         <div className="UserProfile_LocationSocialMedia_Right">
           <div className="UserProfile_LocationSocialMedia_Twitter">
             <img src={TwitterImg} alt="" title="Twitter"/>
             <p>{userData.twitter_username}</p>
           </div>
           <div className="UserProfile_LocationSocialMedia_Company">
             <img src={CompanyImg} alt="" title="Company"/>
             <p>{userData.company}</p>
           </div>
         </div>
        </div>

        
      </div>

);

:

const ifshitisvalid = (){
  return(
    <div className ='UserProfileInformationContainer'>

        <div className="UserProfile_Header">
          <h4>{userData.userName}</h4>
          <p>Joined 25 Jan 2011</p>
        </div>

        <div className="UserProfile_Handle">
          <p>@octocat</p>
        </div>

        <div className="UserProfile_Bio">
          <p>This Profile has no bio</p>
        </div>

        <div className="UserProfile_RepoFollow">
          <div className='RepoContainer'>
            <h5>Repos</h5>
            <h3>8</h3>
          </div>
          <div className='FollowerContainer'>
            <h5>Followers</h5>
            <h3>3938</h3>
          </div>
          <div className="FollowingContainer">
            <h5>Following</h5>
            <h3>9</h3>
          </div>
        </div>

        <div className="UserProfile_LocationSocialMedia_Container">
         <div className="UserProfile_LocationSocialMedia_Left">
           <div className="UserProfile_LocationSocialMedia_Location">
             <img src={LocationImg} alt="" title="Location"/>
             <p>San Francisco</p>
           </div>
           <div className="UserProfile_LocationSocialMedia_Website">
             <img src={WebsiteImg} alt="" title="Website"/>
             <p>https://github.blog</p>
           </div>
         </div>
         <div className="UserProfile_LocationSocialMedia_Right">
           <div className="UserProfile_LocationSocialMedia_Twitter">
             <img src={TwitterImg} alt="" title="Twitter"/>
             <p>Not Availiable</p>
           </div>
           <div className="UserProfile_LocationSocialMedia_Company">
             <img src={CompanyImg} alt="" title="Company"/>
             <p>@github</p>
           </div>
         </div>
        </div>

        
      </div>

  )
}











Revert to default.
 <div className ='UserProfileInformationContainer'>

 <div className="UserProfile_Header">
   <h4>The Octocat</h4>
   <p>Joined 25 Jan 2011</p>
 </div>

 <div className="UserProfile_Handle">
   <p>@octocat</p>
 </div>

 <div className="UserProfile_Bio">
   <p>This Profile has no bio</p>
 </div>

 <div className="UserProfile_RepoFollow">
   <div className='RepoContainer'>
     <h5>Repos</h5>
     <h3>8</h3>
   </div>
   <div className='FollowerContainer'>
     <h5>Followers</h5>
     <h3>3938</h3>
   </div>
   <div className="FollowingContainer">
     <h5>Following</h5>
     <h3>9</h3>
   </div>
 </div>

 <div className="UserProfile_LocationSocialMedia_Container">
  <div className="UserProfile_LocationSocialMedia_Left">
    <div className="UserProfile_LocationSocialMedia_Location">
      <img src={LocationImg} alt="" title="Location"/>
      <p>San Francisco</p>
    </div>
    <div className="UserProfile_LocationSocialMedia_Website">
      <img src={WebsiteImg} alt="" title="Website"/>
      <p>https://github.blog</p>
    </div>
  </div>
  <div className="UserProfile_LocationSocialMedia_Right">
    <div className="UserProfile_LocationSocialMedia_Twitter">
      <img src={TwitterImg} alt="" title="Twitter"/>
      <p>Not Availiable</p>
    </div>
    <div className="UserProfile_LocationSocialMedia_Company">
      <img src={CompanyImg} alt="" title="Company"/>
      <p>@github</p>
    </div>
  </div>
 </div>

 
</div>

    
















}




































*/