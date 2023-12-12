<?php
include("function.php");
use PHPUnit\Framework\TestCase;
class PalindromeTest extends TestCase
{
    public function TestSalutation()
    {
        $timezone1 = date_default_timezone_get();
        
        date_default_timezone_set('America/New_York');
        $this->assertEquals("Bonjour", salutation());
        date_default_timezone_set('Australia/Sydney');
        $this->assertEquals("Bonsoir", salutation());
        date_default_timezone_set($timezone1);
    }
}

?>