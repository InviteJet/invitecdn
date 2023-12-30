function invitejetsignup(hid) {
    var ijEmail = document.getElementById("ij-email").value
    var url = "https://www.invitejet.com/optinsignup?c=" + hid + "&email=" + ijEmail
    window.open(url, "_blank").focus();
}