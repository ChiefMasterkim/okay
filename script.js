        function show(){
            document.querySelector('.header .navbar').classList.toggle('active');
            document.getElementById('menu-btn').style.display="none";
            document.getElementById('close-btn').style.display="block";

        };
        function close(){
            document.querySelector('.header .navbar').classList.toggle('active');
            document.getElementById('menu-btn').style.display="block";
            document.getElementById('close-btn').style.display="none";
        }

