window.onload = function(){
   
    // Home animation phone
    homeAnimationPhone();
   
    //Video Ad Timer
    addVideoAdTimer();
	
	linkSource();
	
}
function linkSource() {
   const searchParams = window.location.search;
  const signupLink = document.querySelectorAll('#console-signup-btn>div>div>a')[0];
  const getStartedLink = document.querySelectorAll('#get-started-with-sdkx>div>div>a')[0];
   const oldHref = signupLink.href;
  if (searchParams) {
    const newHRef = oldHref + searchParams;
    signupLink.href = newHRef;
	getStartedLink.href = newHRef;
  }
}
	
homeAnimationPhone = () => {
    let animationBlock = document.getElementsByClassName('home-animation-block')[0]
    let imagesBlock
    if (animationBlock) {
        imagesBlock = animationBlock.getElementsByClassName('elementor-widget-wrap')[0]
        let click = 0;
        animationBlock.addEventListener('click', function() {
            click++
            if(click % 2 == 1) {
                imagesBlock.style.transform = 'rotateY(180deg)'
            } 
            else if(click % 2 == 0) {
                imagesBlock.style.transform = 'rotateY(0deg)'
            }
        });
    }
}
 addVideoAdTimer = () => {
    // Video timer
    let videoblock = document.getElementsByClassName('advertiser-video-1')[0]
    let videoblock2 = document.getElementsByClassName('advertiser-video-2')[0]
    //Video 1
    if(videoblock || videoblock2) {
        let firstTimerBlock = document.getElementById('first-video-timer')
        let video1 = videoblock.getElementsByClassName('elementor-video')[0]
        let firstTimerInit = firstTimerBlock.innerText = fancyTimeFormat(0)
        firstTimerBlock.getElementsByTagName('p').innerHTML = firstTimerInit
        video1.addEventListener('timeupdate', getAdVideo1Duration)
		
		
        function getAdVideo1Duration() {
			let firstTimerInitPlayNullable;
            let firstTimerInitPlay;
			let currentTime;
			
				if(video1.paused == true) {
					firstTimerInitPlay = firstTimerBlock.innerText = fancyTimeFormat(Math.round(0))
					
				} else {
					currentTime = video1.currentTime - 1
					firstTimerInitPlay = firstTimerBlock.innerText = fancyTimeFormat(Math.round(video1.currentTime - (video1.currentTime - 1)))
				}
			
            firstTimerBlock.getElementsByTagName('p').innerHTML = firstTimerInitPlay
        }

        //Video2
        let secondTimerBlock = document.getElementById('second-video-timer')
        let video2 = videoblock2.getElementsByClassName('elementor-video')[0]
        let secondTimerInit = secondTimerBlock.innerText = fancyTimeFormat(0)
        secondTimerBlock.getElementsByTagName('p').innerHTML = secondTimerInit
        video2.addEventListener('timeupdate', getAdVideo2Duration)

         function getAdVideo2Duration() {
            let secondTimerInitPlay = secondTimerBlock.innerText = fancyTimeFormat(Math.round(video2.currentTime))
            let secondTimer =  secondTimerBlock.getElementsByTagName('p')
            secondTimer.innerHTML = secondTimerInitPlay
        }
    }
}
 fancyTimeFormat = (time) =>
{   
    // Hours, minutes and seconds
    var hrs = Math.round(time / 3600);
    var mins = Math.round((time % 3600) / 60);
    var secs = Math.round(time % 60);

    var currentTime = "";
    if (hrs > 0) {
        currentTime +=  hrs + ":" + (mins < 10 ? "0" + mins : mins)  + ":" + (secs < 10 ? "0" + secs : secs);
    } 
    currentTime += "00:" + (mins < 10 ? "0" + mins : mins)  + ":" + (secs < 10 ? "0" + secs : secs);
    return currentTime;
}