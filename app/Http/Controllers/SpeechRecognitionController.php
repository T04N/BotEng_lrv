<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SpeechRecognitionController extends Controller
{ 
    private  $api_key;
    public function transcribe(Request $request)
    {
        $api_key = "ad4b84748aae4ecba589eb88e8d122f5";

        $request->validate([
            'audio' => 'required|file|mimes:flac,wav,mp3,mp4',
        ]);

        // Get the audio file from the request
        $audioFile = $request->file('audio');

        // Step 1: Upload audio file to AssemblyAI
        $response = Http::withHeaders([
            'authorization' => $api_key,
        ])->attach(
            'file', file_get_contents($audioFile), $audioFile->getClientOriginalName()
        )->post('https://api.assemblyai.com/v2/upload');

        $uploadUrl = $response->json()['upload_url'];

        // Step 2: Request transcription from AssemblyAI
        $response = Http::withHeaders([
            'authorization' => $api_key,
        ])->post('https://api.assemblyai.com/v2/transcript', [
            'audio_url' => $uploadUrl,
        ]);

        $transcriptionId = $response->json()['id'];

        // Step 3: Check transcription status until completed or failed
        do {
            sleep(1); // Wait for 1 second before checking again
            $response = Http::withHeaders([
                'authorization' => $api_key,
            ])->get("https://api.assemblyai.com/v2/transcript/$transcriptionId");

            $status = $response->json()['status'];
        } while ($status !== 'completed' && $status !== 'failed');

        // Step 4: Handle the final transcription result
        if ($status === 'completed') {
            $transcriptionText = $response->json()['text'];
            // Return the transcription as JSON response
            return response()->json(['transcription' => $transcriptionText]);
        } else {
            // If transcription failed, return error response
            return response()->json(['error' => 'Transcription failed'], 500);
        }
    }
}
