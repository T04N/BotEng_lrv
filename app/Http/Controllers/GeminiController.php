<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Gemini\Laravel\Facades\Gemini;

class GeminiController extends Controller
{
    public function sendTestQuestion(Request $request) { 
        // if ($request->hasFile('audio') )  { 
            $speechController = new SpeechRecognitionController();
            $transcriptionResult = $speechController->transcribe($request);
            return $transcriptionResult ;
        // }
       
    }
    
    public function sendQuestion(Request $request)
    {
        // Initialize variables
        $geminiResult = "";
        $transcriptionResult = "";

        // Check if request has file and does not have text question
        if ($request->hasFile('audio') && empty($request->input('textQuestion'))) {
            // Instantiate SpeechRecognitionController and call transcribe method
            $speechController = new SpeechRecognitionController();
            $transcriptionResult = $speechController->transcribe($request);
        
            // Check if transcription result is available
            if (isset($transcriptionResult['transcription'])) {
                return response()->json(['transcription_result' => $transcriptionResult['transcription']]);
            } else {
                return response()->json(['error' => 'Transcription failed'], 500);
            }
        }

        // Merge text request into question if present
        $question = $request->textQuestion ?? "";
        
        // If both text question and file are present, append them
        if ($request->has('text') && $request->hasFile('file')) {
            $question .= ' ' . $transcriptionResult;
        } elseif ($request->has('text') && !empty($question)) {
            $question = $request->textQuestion;
        }

        // Generate content using Gemini
        $geminiResult = Gemini::geminiPro()->generateContent($question);

        // Return response with both Gemini and transcription results if available
        return response()->json([
            'gemini_result' => $geminiResult->text(),
            'transcription_result' => $transcriptionResult,
        ]);
    }
}
