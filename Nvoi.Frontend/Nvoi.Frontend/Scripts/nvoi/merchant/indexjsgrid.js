
$("#jsGrid").jsGrid({
    
    autoload:true,
    controller: {
        loadData: function (filter) {
            var data = $.Deferred();
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: "http://localhost:50134/api/merchants",
                dataType: "json"
            }).done(function (response) {
                data.resolve(response);
            });
            return data.promise();
        }
    },

    width: "100%",
    height: "400px",
    sorting: true,
    paging: true,
    fields: [
        { name:"id", title: "ID", type: "text", width: 150 },
        { name:"displayName", title: "Display Name", type: "text", width: 150, validate: "required" },
        { name:"registeredName", title: "Regd Name", type: "text", width: 150 },
        { name:"email", title: "Email", type: "text", width: 250 },
        { name:"phone", title: "Phone", type: "text", width: 250 },
        { name:"status", title: "Is Active", type: "checkbox", sorting: false },
       
    ]
});

