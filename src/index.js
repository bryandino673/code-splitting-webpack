
document.getElementById('btn-page1').addEventListener('click',function(){
    import('./page1').then(module => {
        module.default();
    });
});

document.getElementById('btn-page2').addEventListener('click', function() {
    import('./page2').then(module => {
        module.default();
    });
});