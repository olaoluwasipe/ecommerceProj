<?php 

class ContactController
{
    public function submit()
    {
        // Handle the POST request for the contact form
        print_r( json_encode([
            'money' => 'owo',
            'vibe' => 'viber'
        ]));
    }
}