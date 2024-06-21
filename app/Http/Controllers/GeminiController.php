<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Gemini\Laravel\Facades\Gemini;

class GeminiController extends Controller
{
    public function sendTestQuestion(Request $request) { 
        if ($request->hasFile('audio')  && $request->question)  { 
            $speechController = new SpeechRecognitionController();
            $transcriptionResult = $speechController->transcribe($request);
            return 
            response()->json([
                "transcrip_Key" => $transcriptionResult,
                "question_Key"  => $request->question
            ]);
            
            // $transcriptionResult ;
        }
       
    }
    
    public function sendQuestion(Request $request)
    {
        // Initialize variables
        $geminiResult = "";
        $transcriptionResult = "";

        $speechController = new SpeechRecognitionController();
        $transcriptionResult = $speechController->transcribe($request)->getData()->transcription ?? null;
        // Check if request has file and does not have text question
        if ($request->hasFile('audio') && empty($request->question)) {
            // Instantiate SpeechRecognitionController and call transcribe method
            if ($transcriptionResult!=null) {
                return  response()->json(['transcriptionResult' => $transcriptionResult], 200);
            } else {
                return response()->json(['error' => 'Transcription failed'], 500);
            }
        }

      
        $question = $request->question ?? "";
        
        // If both text question and file are present, append them
        if ($request->question != null  && $request->hasFile('audio')) {
            $question .= ' ' . $transcriptionResult;
        } elseif ($request->question && ! $request->hasFile('audio')) {
            $question = $request->question;
        }      
        $geminiResult = Gemini::geminiPro()->generateContent($question);
        $welcome = "Hello! How can I assist you today?";
        // Return response with both Gemini and transcription results if available
        return response()->json([
            'welcome' => $welcome,
            'transcription_result' => $transcriptionResult,
            'gemini_result' => $geminiResult->text(),
            // 'question_reuslt' =>  $question,
        ]);
    }
}
