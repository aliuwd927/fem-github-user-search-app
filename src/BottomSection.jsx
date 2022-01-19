import React from "react";


function BottomSection(){
  return(
    <div className="BottomSection">
    {/*LEFT SIDE */}
      <div className ='UserProfilePictureContainer'>
        <img src="https://via.placeholder.com/117" alt="" title="profile_picture" className = 'UserProfilePicture_117'/>
      </div>



        {/*RIGHT SIDE */}
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


        <div className="UserProfile_LocationSocialMedia"></div>

        
      </div>

    </div>
  )
}

export default BottomSection;