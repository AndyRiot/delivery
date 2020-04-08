<html lang="ru">
<?php include 'parts/meta.phtml' ?>
<body>
<?php include 'parts/header.phtml' ?>
<main>
    <div class="container slider">
        <div class="promo">
            <img src="assets/img/promo1.png" alt="Promo 1">
        </div>
    </div>
</main>
<?php include 'parts/footer.phtml' ?>
<script src="assets/js/app.js?<?= filemtime(__DIR__ . '/assets/js/app.js') ?>"></script>
</body>
</html>
