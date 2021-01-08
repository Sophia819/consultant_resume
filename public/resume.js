// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
    
   $(document).ready(function () {
    
     tableau.extensions.initializeAsync().then(function() {
       var url = "";
    // Gets all the worksheets in a Tableau Dashboard
        const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
    
        var worksheet = worksheets.find(w => w.name === "resume");
        
        worksheet.getUnderlyingTablesAsync().then(logicalTables => {
            
            worksheet.getUnderlyingTableDataAsync(logicalTables[0].id).then(dataTable => {
            
            let field = dataTable.columns.find(column => column.fieldName === "Resume");
            
            for (let row of dataTable.data) {
                if (row[field.index].value !== null && row[field.index].value !== "") {
                    url = row[field.index].value;
                    $('#logo').wrap('<a id="' + row[field.index].value + '" href="' + url + '" target="_blank"></a>');
                }
            };

            });
            
        });
        
        
      });
       
       
    });
       
       /*$('#logo').click(
            
       )*/
   })();
