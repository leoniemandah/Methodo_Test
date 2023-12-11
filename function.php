<?php

function estPalindrome($mot)
{
    $mot = strtolower(str_replace(' ', '', $mot));
    return $mot == strrev($mot);
}

function salutation()
{
    $heure = date("H");
    if ($heure < 12) {
        return "Bonjour";
    } else {
        return "Bonsoir";
    }
}

function testerPalindrome($mot)
{
    if (estPalindrome($mot)) {
        return "Bien dit!";
    } else {
        return "Pas un palindrome.";
    }
}
 ?>