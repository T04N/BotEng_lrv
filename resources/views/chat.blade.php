<!DOCTYPE html>
<html>
<head>
    <title>Tev bot (Testing) </title>
    <style>
        /* CSS styling for chat interface */
        .chat-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-family: Arial, sans-serif;
        }
        .messages {
            list-style-type: none;
            padding: 0;
            margin: 0;
            max-height: 300px;
            overflow-y: auto;
            border: 1px solid #eee;
            border-radius: 5px;
            background-color: #f9f9f9;
            padding: 10px;
        }
        .message {
            padding: 8px 12px;
            margin-bottom: 5px;
            border-radius: 5px;
        }
        .user-message {
            background-color: #4CAF50;
            color: white;
            align-self: flex-end;
        }
        .bot-message {
            background-color: #008CBA;
            color: white;
        }
        .input-message {
            width: calc(100% - 80px);
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px 0 0 5px;
        }
        .send-button {
            width: 80px;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 0 5px 5px 0;
            background-color: #008CBA;
            color: white;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="chat-container">
        <h2>Tev bot Testing </h2>
        <ul class="messages" id="message-list">
            @foreach ($initialMessages as $message)
                <li class="message bot-message">{{ $message }}</li>
            @endforeach
        </ul>
        <form id="message-form">
            <input type="text" id="message-input" class="input-message" placeholder="Type your message...">
            <button type="submit" class="send-button">Send</button>
        </form>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            // Handle form submission
            $('#message-form').submit(function(event) {
                event.preventDefault(); // Prevent default form submission

                var message = $('#message-input').val().trim();

                if (message !== '') {
                    // Add user message to UI
                    appendMessage('user', message);

                    // Send message to server via AJAX
                    $.ajax({
                        type: 'POST',
                        url: '{{ route('chat.send_message') }}', // Ensure this route is correct
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        data: {
                            message: message
                        },
                        success: function(response) {
                            console.log(response);
                            // Add bot's response to UI
                            appendMessage('bot', response.response);
                        },
                        error: function() {
                            // Handle error
                            alert('Error communicating with server.');
                        }
                    });

                    // Clear input field
                    $('#message-input').val('');
                }
            });

            // Function to append messages to message list
            function appendMessage(sender, text) {
                var senderClass = (sender === 'user') ? 'user-message' : 'bot-message';
                var messageHTML = '<li class="message ' + senderClass + '">' + text + '</li>';
                $('#message-list').append(messageHTML);
                // Scroll to bottom of messages
                $('#message-list').scrollTop($('#message-list')[0].scrollHeight);
            }
        });
    </script>
</body>
</html>
