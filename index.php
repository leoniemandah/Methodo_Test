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

// Début du programme
echo salutation() . "\n";

do {
    echo "Entrez un mot : ";
    $mot = trim(fgets(STDIN));
    
    // Test du palindrome
    $resultat = testerPalindrome($mot);
    
    // Affichage du résultat
    echo $resultat . "\n";
} while ($resultat == "Bien dit!");

//a l'arrêt dire au revoir

echo "Au revoir!\n";

?>