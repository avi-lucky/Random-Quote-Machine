function getQuote (){
    const quotes=[[["Do not get upset with people or situations, both are powerless without your reaction."],["-Avikal Shukla"]],[["If you really want to be successful, stop worrying about what you can get and start focusing on what you can do."],["-Avikal Shukla"]],[["Sacrifice means spending less time on entertainment and more time on ipmroving your life and family."],["-Avikal Shukla"]],
    [["The biggest adventrure you can take is to live the life of your dreams."],["-Avikal Shukla"]],[["Books are the ultimate dumpees: put them down and they'll wait for you forever; pay attention to them and they always love you back."],["-Avikal Shukla"]]];
    let l= quotes.length;
    let i= Math.floor(Math.random()*l);
    return [quotes[i][0],quotes[i][1]];
    }
    function getColor(){
    let color=["#78281F","#4A235A","#1B4F72","#0B5345","#186A3B","#7D6608","#7E5109","#943126"];
    let l= color.length;
    let i= Math.floor(Math.random()*l);
    return color[i];
    }
    let quote=[];
    let lastColor="";
    const main =document.getElementById("main");
    const text =document.getElementById("text");
    const author=document.getElementById("author");
    const btn=document.getElementById("new-quote");
    const tweet=document.getElementById("tweet-quote");
    const wrapper=document.getElementById("wrapper");
    
    let textAnimationKeyframes = new KeyframeEffect(
        text, 
        [
          { opacity: '0' }, 
           { opacity: '0.25' },
          { opacity: '1' }
        ], 
        { duration: 500, fill: 'forwards' }
      );
    
    let textAnimation = new Animation(textAnimationKeyframes, document.timeline);
    
    let wrapperAnimationKeyframes = new KeyframeEffect(
        wrapper, 
        [
          { filter: 'brightness(0.2)' }, 
           { filter: 'brightness(0.6)' },
          { filter: 'brightness(1)'}
        ], 
        { duration: 1500, fill: 'forwards' }
      );
    let wrapperAnimation = new Animation(wrapperAnimationKeyframes, document.timeline);
    //Initial State
     quote=getQuote();
     author.innerHTML= quote[1];
     text.innerHTML=quote[0];
     lastColor=getColor();
     wrapper.style.backgroundColor = lastColor;
     let currentQuote=text.value;
     let currentAuthor=author.value;
     tweet.setAttribute("href",'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
          encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    
    btn.onclick=function(){
      main.style.backgroundColor = lastColor;
      quote=getQuote();
     
      author.innerHTML= quote[1];
      text.innerHTML=quote[0];
      
      lastColor= getColor();
      wrapper.style.backgroundColor = lastColor;
    
      currentQuote=text.value;
      currentAuthor=author.value;
      tweet.setAttribute("href",'https://twitter.com/intent/tweet?   hashtags=quotes&related=freecodecamp&text=' +
          encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      
      wrapperAnimation.play();
      textAnimation.play();
    
    
    
    };
    
    