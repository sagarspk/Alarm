    var a_hour=window.prompt("Enter the hour:");
    var a_minute=window.prompt("Enter the minutes:");
    var a_second=window.prompt("Enter the seconds:");
    /*var conf= window.confirm("You want to confirm");
    document.write(conf);*/
    


    current_time();
    var audio=new Audio('super.mp3');

    function current_time(){
        const d=new Date();
        dta=d;
        dta.toLocaleTimeString();
        //document.querySelector('.current_time').textContent= .current_time.textContent+ dta;
        let c_hour=d.getHours();
        let c_minute=d.getMinutes();
        let c_second=d.getSeconds();
        document.querySelector(".current_time").textContent=c_hour+":"+c_minute+":"+c_second;
        document.querySelector(".alarm_time").textContent=a_hour+":"+a_minute+":"+a_second;
        setTimeout(current_time,1000);
        if((a_hour==c_hour) && (a_minute==c_minute) && (a_second==c_second))
        {
            document.querySelector(".alarm").textContent="It's the time";
            //new Audio('super.mp3').play();
            //document.getElementByID('welcom').play();
            audio.play();
        }
    }
    function action(comman){
        if(comman=="reset"){
            location.reload();
        }
        else if(comman=="snooze"){
            a_minute++;
            audio.pause();
        }
        else if(comman=="kill")
            audio.pause();
    }
    
