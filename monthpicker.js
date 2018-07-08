  const isHidden = (e) => {
    
    let getNameIdInputGnrl = e.target.getAttribute('data-id');
    let inputCalendar = document.getElementById(getNameIdInputGnrl);
    //let getNameYear = e.target.getAttribute('data-year');
    //console.log(getNameYear)
    let id =  e.target.getAttribute('data-target');
    let el = document.getElementById(id);
    //el.style.display = (el.style.display === 'none') ? 'block' : 'none'; 


    let inputCalendarValue = inputCalendar.value.split('/');
    inputCalendar.value = inputCalendarValue[0] + '/' + document.getElementById('yearpicker').value;
    
  }


  document.addEventListener("click", function(e){
     console.log('clic');
     let clic = e.target;
       const yearSelected = document.getElementById('yearpicker');
       const calendarPicker = document.getElementsByClassName('picker-container');
       const input = document.getElementsByClassName('monthpicker');
       if(calendarPicker[0].style.display == "block" && clic != yearSelected){
        let flag = false;
        for (var i = 0; i < input.length; i++) {
          if (clic == input[i]) flag = true;
        };
        console.log(flag);
         if (!flag) calendarPicker[0].style.display = "none";
       }

   }, false);

  const createElementDOM = (e) => {
    // obtiene la distancia izquierda del input en el que se clickea
    let idInput = document.getElementById(e.target.getAttribute('data-id'));
    let idInputLeft = idInput.getBoundingClientRect().left;
    console.log(idInputLeft)
    if(document.getElementById(e.target.getAttribute('data-target')) != null){
      let top = document.getElementById(e.target.getAttribute('data-target')).parentElement;
      let nested = document.getElementById(e.target.getAttribute('data-target'));
      top.removeChild(nested);
    };
    
    const calendarPicker = document.getElementsByClassName('picker-container');
    for(let i = 0; i < calendarPicker.length; i++) {
      let top = calendarPicker[i].parentElement;
      let nested = calendarPicker[i];
      top.removeChild(nested);
    }

    let child = document.createElement("div");
    let father = document.getElementById(e.target.getAttribute('data-id'));
    
    child.setAttribute("class","picker-container");
    child.setAttribute('left', `${idInputLeft}px`);
    let idpicker = 'calendarPicker';

    e.target.setAttribute('data-target', idpicker);

    child.setAttribute("id", idpicker);
    child.setAttribute("style", 'display: block');
    
    let title = document.createElement("div");
    title.setAttribute('class', 'title-header');

    let year = document.createElement("select");
    let idyear = 'yearpicker';
    year.setAttribute('id',idyear);
    year.setAttribute('class', 'yearpicker');

    for (var i = 2015; i <= 2020 ; i++) {
      let option = document.createElement("option");
      option.setAttribute('value', i);
      option.innerHTML = i;

      year.appendChild(option);
    };

    title.appendChild(year);

    let body = document.createElement("div");
    body.setAttribute('class', 'body-picker');


    var meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'];
    var mesesval = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    for (var i = 0; i < 12; i++) {
      let month = document.createElement("button");
      month.setAttribute('class', 'elm-picker');
      month.setAttribute('data-target', e.target.getAttribute('data-id'));
      month.setAttribute('data-year', idyear);
      month.setAttribute('value', mesesval[i]);  
      month.innerHTML = meses[i];

      body.appendChild(month);
    };
        
    child.appendChild(title);
    child.appendChild(body);
    console.log(father);
    father.after(child);


    

    let month = document.getElementsByClassName('elm-picker');

    for(let i = 0; i < month.length; i++) {
      month[i].addEventListener('click', (e) => {
        document.getElementById(e.target.getAttribute('data-target')).value = e.target.value + '/' 
            + document.getElementById(e.target.getAttribute('data-year')).value;
      });
    }
  };

  
  let monthPicker = document.getElementsByClassName('monthpicker');
  for(let i = 0; i < monthPicker.length; i++) {
    monthPicker[i].addEventListener('click', createElementDOM);
  }
  
  const inputPrueba = document.getElementById('calendar1');
  const inputPrueba2 = document.getElementById('calendar2');
  const inputPrueba3 = document.getElementById('calendar3');

  