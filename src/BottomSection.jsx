import React from "react";
import LocationImg from "./assets/icon-location.svg";
import CompanyImg from "./assets/icon-company.svg";
import WebsiteImg from "./assets/icon-website.svg";
import TwitterImg from "./assets/icon-twitter.svg";

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

        
      </div>{/* End of User Profile Container */}

    </div>//End of BottomSection Div
  );
}

export default BottomSection;