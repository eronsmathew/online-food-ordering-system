$(function() {

    // on submit
    $('#submit').on('click', function(event) {
        event.preventDefault();

        var order = {
            name: $('#name').val(),
            surname: $('#surname').val(),
            email: $('#email').val(),
           phonenumber: $('#phone').val(),
           location: $('#location').val(),
           selectafood: $('#myselect').val(),
           gender: $("input[name='gender']:checked").val(),



        }
6
        
        $.ajax({
            type: 'POST',
            data: JSON.stringify(order),
            url: 'http://localhost:3000/customer',
            dataType: 'json',
            contentType: 'application/json',
            success: function(result) {
                console.log('success', result)
            },
            error: function(err) {
                console.log(err)
            }
        });
    })

//function login check
          $('#login').click(function(){
            var userName = $('#uname').val();
            var  passWord = $('#psw').val();
            let check = 'http://localhost:3000/user';

           
            $.ajax({
                type: 'GET',
                data: JSON.stringify(order),
                url: 'http://localhost:3000/user',
                dataType: 'json',
                contentType: 'application/json',
                success: function(result) {
                    console.log('success', result)
                    for (i in check) {
                        if (userName === check[i].username && passWord === check[i].password) {
                         window.location.replace("http://google.com");
                        } else {
                            return;
                        } 
                     } 
                },
                error: function(err) {
                    console.log(err)
                }
            });

          })
















});