$(document).ready(function() {
    $('.tablaTickets').DataTable(
        {
            colReorder: {
                fixedColumnsRight: 2
            },
            "lengthMenu": [ 2, 5, 7, 10, 20]
              
        }
    );
} );