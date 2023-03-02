<?php
if(isset($_POST['imie'], $_POST['nazwisko'], $_POST['data_urodzenia'], $_POST['adres'], $_POST['miejscowosc'], $_POST['kod_pocztowy'], $_POST['kontakt_telefoniczny'], $_POST['email'], $_POST['klasa'])) {
  $imie = $_POST['imie'];
  $nazwisko = $_POST['nazwisko'];
  $data_urodzenia = $_POST['data_urodzenia'];
  $adres = $_POST['adres'];
  $miejscowosc = $_POST['miejscowosc'];
  $kod_pocztowy = $_POST['kod_pocztowy'];
  $kontakt_telefoniczny = $_POST['kontakt_telefoniczny'];
  $email = $_POST['email'];
  $klasa = $_POST['klasa'];

  if(empty($imie) || empty($nazwisko) || empty($data_urodzenia) || empty($adres) || empty($miejscowosc) || empty($kod_pocztowy) || empty($kontakt_telefoniczny) || empty($email) || empty($klasa)) {
    echo '<p>Wypełnij wszystkie pola formularza!</p>';
  } else {
    echo '<p>Dane zostały przesłane i przetworzone pomyślnie!</p>';
  }
}
?>
|