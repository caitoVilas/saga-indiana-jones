const d = document;
const ls = localStorage;

d.addEventListener('DOMContentLoaded',e => {
        verNosotros('.nos_button', '.panel__nosotros','.close__panel')
        verGaleria('#btngaleria1','galeria1','.close__panel');
        verGaleria('#btngaleria2','galeria2','.close__panel');
        verGaleria('#btngaleria3','galeria3','.close__panel');
        verGaleria('#btngaleria4','galeria4','.close__panel'); 
    
});

switchMode('#switch');

function verNosotros(button,panel,cierra){

    d.addEventListener('click', e =>{
       
        if(e.target.matches(button)){
            d.querySelector(panel).classList.toggle(`is-active`);
          }
        if(e.target.matches(cierra)) d.querySelector(panel).classList.remove(`is-active`);
    });
}

function verGaleria(btn,panel,cierra){

    d.addEventListener('click', e => {
        const $panel = d.getElementById(panel);
        if(e.target.matches(btn)){
            //  console.log($panel);
             $panel.classList.toggle('is-active');
        }
        if(e.target.matches(cierra)) $panel.classList.remove('is-active');
    });
}

function switchMode(sw){
     const btnSwich = d.querySelector('#switch');

    btnSwich.addEventListener('click',e =>{
        d.body.classList.toggle('dark_mode');
        btnSwich.classList.toggle('active');

        if(d.body.classList.contains('dark_mode')){
        ls.setItem('dark-mode','true');
        } else{
            ls.setItem('dark-mode','false');
        }
    });

    if(ls.getItem('dark-mode') === 'true'){
        d.body.classList.add('dark_mode');
        btnSwich.classList.add('active');
    } else {
        d.body.classList.remove('dark_mode');
        btnSwich.classList.remove('ative');
    }
}