$(document).ready(function() {
    $('#sendButton').click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        var phoneNumber = "6281222223496"; // Gantilah dengan nomor WhatsApp yang Anda inginkan

        var whatsappMessage = "Nama: " + name + "%0AEmail: " + email + "%0ASubject: " + subject + "%0AMessage: " + message;
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // Jika perangkat seluler, buka aplikasi WhatsApp
            var whatsappLink = "whatsapp://send?phone=" + phoneNumber + "&text=" + whatsappMessage;
            window.location.href = whatsappLink;
        } else {
            // Jika bukan perangkat seluler, tampilkan pesan WhatsApp Web di browser
            var whatsappWebLink = "https://web.whatsapp.com/send?phone=" + phoneNumber + "&text=" + whatsappMessage;
            window.open(whatsappWebLink);
        }
    });
});