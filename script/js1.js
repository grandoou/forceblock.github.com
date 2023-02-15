window.onload=function(){
    let myImage = document.querySelector('img');
    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'img/pic1.png') {
          myImage.setAttribute('src', 'img/pic3.JPG');
        } else {
          myImage.setAttribute('src', 'img/pic1.png');
        }
    }
    function setHeading(Lisa) {
        let myHeading = document.querySelector('h1');
        myHeading.textContent = 'Hello!' + Lisa + '!';
      }   
      function setUserName() {
        let myName = prompt('请输入你的名字');
        localStorage.setItem('name', myName);
        setHeading(myName);
      }    
      let storedName = localStorage.getItem('name');
      if(!storedName) {
         setUserName();
      } else {
         setHeading(storedName);
      }    
      let myButton = document.querySelector('button'); 
      myButton.onclick = setUserName;
  };