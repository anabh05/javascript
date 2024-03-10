//const eliminar = document.querySelectorAll('.fn-remove-me')


// const padre = eliminar[0][3].parentNode;

// padre.remove(eliminar[0][3])padre.remove(eliminar[0][3])


[].forEach.call(document.querySelectorAll(".fn-remove-me"),
    function (regla) {
        regla.parentNode.removeChild(regla);
    });
