let body = document.querySelector('.body');
let btn  = document.querySelector('.btn');
let insert = document.querySelector('.insert');
let clear = document.querySelector('.clear');


btn.addEventListener('click',function(){
    if(insert.value === '')
    {
        alert('Enter your Task');
    }
    else
    {
    const display = document.createElement('div');
    display.className = 'display'
    body.appendChild(display);
    display.textContent = insert.value;
    clear.addEventListener('click',function(){
        display.remove();
    })

    if(display)
    {
        const done = document.createElement('button');
        done.className = 'done'
        done.innerText = 'Done'
        display.appendChild(done);
        done.addEventListener('click',function(){
            display.remove();
        })
    }
}
})

