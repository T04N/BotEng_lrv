<?php

namespace App\Http\Controllers;

use Gemini\Laravel\Facades\Gemini;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function startChat()
    {
        $initialMessages = [
            'hello?',
            'Xinchao',
        ];
        // Example initialization of Gemini chat session
        $chat = Gemini::chat()->startChat(
            $initialMessages
        );

        return $chat; // Return the ChatSession object
    }

    public function sendMessage(Request $request)
    {
        try {
            // Start the chat session
            $chat = $this->startChat(); // Assuming this initializes and returns a valid chat session

            // Extract message from request
            $message = $request->input('message');

            // Send message to the chat and get response
            $response = $chat->sendMessage($message);

            // Return the response text as JSON
            return response()->json([
                'response' => $response->text(),
            ]);
        } catch (\Exception $e) {
            // Handle any exceptions that occur during sendMessage
            return response()->json([
                'error' => $e->getMessage(),
            ], 500); // Return a 500 Internal Server Error status
        }
    }

    public function showChatView()
    {
        // Truyền dữ liệu khởi đầu vào view
        $initialMessages = [
            'hello?',
            'Xinchao',
        ];

        // Trả về view 'chat' và truyền dữ liệu khởi đầu
        return view('chat', compact('initialMessages'));
    }
}
