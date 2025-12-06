const reels = [
  {
    ismuted: true,
    username: "travel_with_amy",
    likeCount: 12400,
    isLiked: false,
    commentCount: 320,
    caption: "Exploring the streets of Tokyo 🇯🇵✨",
    video: "./reels/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    shareCount: 120,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "foodie_john",
    likeCount: 8700,
    isLiked: true,
    commentCount: 245,
    caption: "Best ramen bowl of my life 🍜🔥",
    video: "./reels/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d",
    shareCount: 90,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "fitness_lara",
    likeCount: 15700,
    isLiked: false,
    commentCount: 510,
    caption: "Morning workout motivation 💪☀️",
    video: "./reels/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 200,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "tech_dan",
    likeCount: 6400,
    isLiked: true,
    commentCount: 180,
    caption: "Trying the new VR headset 🕶️🤯",
    video: "./reels/video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    shareCount: 65,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "art_by_nina",
    likeCount: 11200,
    isLiked: false,
    commentCount: 395,
    caption: "Speed painting a sunset 🌅🎨",
    video: "./reels/video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    shareCount: 144,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "petlover_max",
    likeCount: 9800,
    isLiked: true,
    commentCount: 260,
    caption: "Puppy reaction to first snow ❄️🐶",
    video: "./reels/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 110,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "gaming_flex",
    likeCount: 20400,
    isLiked: true,
    commentCount: 620,
    caption: "Clutch moment in Valorant 🔥",
    video: "./reels/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    shareCount: 350,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "dance_mia",
    likeCount: 22600,
    isLiked: false,
    commentCount: 840,
    caption: "New choreography drop 💃✨",
    video: "./reels/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 410,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "nature_soul",
    likeCount: 13400,
    isLiked: true,
    commentCount: 290,
    caption: "Calm forest vibes 🌲🍃",
    video: "./reels/video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 130,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "car_enthusiast",
    likeCount: 17800,
    isLiked: false,
    commentCount: 555,
    caption: "Cold start of my GT-R 😍🔥",
    video: "./reels/video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 300,
    isFollowed: false
  }
];

var allReels = document.querySelector('.all-reels')


function addData(){

  var sum = ''

  reels.forEach(function(elem, idx){
    sum = sum + `<div class="reel">
                    <video autoplay loop ${elem.ismuted?'muted':''} src="${elem.video}"></video>
                    <div class="mute" id=${idx}>
                    ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':
                    '<i class="ri-volume-up-fill"></i>'}
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked?'<i class="love ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-send-plane-fill"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`
})

allReels.innerHTML = sum

}

addData();

allReels.addEventListener('click', function(dets) {

  if (dets.target.className == 'like'){
      if (!reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount++
  reels[dets.target.id].isLiked = true
} else {
  reels[dets.target.id].likeCount--
  reels[dets.target.id].isLiked = false
}
addData()
  }


  if (dets.target.className == 'follow'){
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
    }else{
      reels[dets.target.id].isFollowed = false
    }
    addData()
  }


if (dets.target.className == 'mute'){
    if(!reels[dets.target.id].ismuted){
      reels[dets.target.id].ismuted = true
    }else{
      reels[dets.target.id].ismuted = false
    }
    addData()
  }



  
});
