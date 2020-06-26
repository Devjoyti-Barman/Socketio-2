let socket=io()


$('#loginBox').show()
$('#chatBox').hide()


$('#btnStart').click( ()=>{
   
    socket.emit('login',{
        username:$('#inpUsername').val(),
        password:$('#inpPass').val()
    })
   
})

socket.on('logged_in',()=>{
    $('#loginBox').hide()
    $('#chatBox').show()

})

socket.on('logged_failed',()=>{
   window.alert('Username or Password wrong')
})

$('#btnSendMsg').click(()=>{
    socket.emit('msg_Send',{
        to:$('#inpToUser').val(),
        msg:$('#inpNewMsg').val()
    })
})

socket.on('msg_rcvd',(data)=>{
    $('#ulMsgs').append($('<li>').text(
        `[${data.from}]:${data.msg}`
    ))
})