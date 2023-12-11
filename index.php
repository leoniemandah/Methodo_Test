<?php

include ("./function.php");
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

// // Tests individuels
// $motTest = "radar";
// echo "Le mot '$motTest' est un palindrome? " . (estPalindrome($motTest) ? "Oui" : "Non") . "\n";

// echo "Salutation: " . salutation() . "\n";

// $motTest2 = "test";
// echo "Résultat du test pour '$motTest2': " . testerPalindrome($motTest2) . "\n";

?>