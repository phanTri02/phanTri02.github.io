var jwt = null;
jwt = localStorage.getItem("jwt");
function logOut(e) {
    e.preventDefault();
        localStorage.removeItem("jwt");
        localStorage.removeItem("uid");
        localStorage.removeItem("client");
        localStorage.removeItem("selectedFolder");
        localStorage.removeItem("selectedUpdateFolderText");
        localStorage.removeItem("password");

        window.location.href = 'login.html'
}