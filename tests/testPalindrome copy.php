<?php
include("function.php");
use PHPUnit\Framework\TestCase;
class PalindromeTest extends TestCase
{
    public function testPalindrome()
    {
        $this->assertEquals(true, estPalindrome('racecar'));
        $this->assertEquals(true, estPalindrome('madam'));
        $this->assertNotEquals(false, estPalindrome('hello'));
    }
}

?>