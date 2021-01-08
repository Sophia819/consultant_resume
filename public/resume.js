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
                url = row[field.index].value;
                if (url != null && url !== "") {
                    $('#logo').wrap('<a href="' + url + '" target="_blank"></a>');
                }
            };

            });
            
        });
        
        
      });
       
       
    });
       
       /*$('#logo').click(
            
       )*/
   })();
