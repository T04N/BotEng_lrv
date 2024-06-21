<?php

namespace App\Helpers;

class Content
{
    public static function parse($part)
    {
        // Thực hiện các bước xử lý nội dung tin nhắn nếu cần
        return [
            'content' => $part,
            'timestamp' => now(), 
        ];
    }
}
