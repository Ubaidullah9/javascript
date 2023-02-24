
//     <button onclick="dateandtime()">Date&Time</button>
//    <p id="ubaid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab totam cupiditate vitae ex culpa sunt illo excepturi doloremque eos, ut quis ipsa quibusdam perspiciatis dolor quia provident necessitatibus ratione.</p>
//    <button onclick="eventgenerat()">show/hide</button>
    let ubaid = document.getElementById('ubaid');
    ubaid.addEventListener('mouseout' , function run(){
        alert('hello ubaid')
    });

    function eventgenerat(){
        let ubaid = document.getElementById('ubaid');
        if(ubaid.style.display != 'none'){
            ubaid.style.display = "none";
        }else{
            ubaid.style.display = 'block';
        }
    }
    function dateandtime(){
        document.getElementById('demo').innerHTML = Date();
    }