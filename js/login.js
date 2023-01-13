        var jwt = localStorage.getItem("jwt");
        var uid = null;
        var client = null;

        function alo123() {
            console.log(jwt);
            
        }    

        
        if (jwt != null) {
            window.location.href = 'dashboard.html';
        }

        function loginFunction() {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email == "") {
                Swal.fire({
                    text: 'Login failed! Your email is null',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return false;
            } else if (password == "") {
                Swal.fire({
                    text: 'Login failed! Your password is null',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return false;
            } else {
                const request = new XMLHttpRequest();
                request.open("POST", "https://dev.thanqminh.com:3001/auth/sign_in");
                request.setRequestHeader("Content-Type", "application/json");
                
                request.send(JSON.stringify({
                    "email": email,
                    "password": password
                }));
                request.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        jwt = request.getResponseHeader('Access-Token');
                        uid = request.getResponseHeader('Uid');
                        client = request.getResponseHeader('Client');
                        var text = JSON.parse(this.responseText);
                        localStorage.setItem('jwt', jwt);
                        localStorage.setItem('uid', uid);
                        localStorage.setItem('client', client);
                        localStorage.setItem('password', password);
                        localStorage.setItem('name', text['data']['name']);
                        console.log(jwt);
                        console.log(uid);
                        console.log(client);
                        console.log(text);
                        if (this.status == 200) {
                            Swal.fire({
                                text: 'Login successful',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location.href = 'task.html';
                                }
                            });
                        } else {
                            Swal.fire({
                                text: 'Login failed! Your account is not existed. Check your email or password again',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                        }
                    }

                    
                }
                return false;
            }

            
        };
