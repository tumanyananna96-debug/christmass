<script>
// Ստեղծում ենք ձյուն
const snowCount = 50;
for(let i=0;i<snowCount;i++){
    let snow = document.createElement('div');
    snow.classList.add('snowflake');
    let size = Math.random()*5 + 2; // 2px-7px
    snow.style.width = size+'px';
    snow.style.height = size+'px';
    snow.style.left = Math.random()*100 + 'vw';
    snow.style.animationDuration = (Math.random()*5 + 5) + 's'; // 5-10 վայրկյան
    snow.style.opacity = Math.random();
    document.body.appendChild(snow);
}
</script>
