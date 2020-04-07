

var feedback = function(res) {
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success');
        document.querySelector('.status').innerHTML =
            'Image : ' + '<br><input class="image-url" value=\"' + get_link + '\"/>' + '<img class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/>';
        postimage(get_link);
     }
};

new Imgur({
    clientid: '891e93cedf2d5cc', //You can change this ClientID
    callback: feedback
});

function postimage(linkimage){
      $.ajax({
                type: "Post",
                url: "https://maximus-ver2.glitch.me/girl/create",
                data: {
                    "Url": linkimage
                },
                 dataType:"text",
                success: function (d) {
                  console.log('Success')
                },
                error: function (x, y, z) {
                    console.log('Error')
                }
   });
}