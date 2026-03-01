<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Jejak Nasab') }} — Silsilah Keluarga Digital</title>

        <!-- SEO Meta -->
        <meta name="description" content="Aplikasi pencatatan silsilah keluarga besar (Bani) yang kolaboratif, modern, dan mudah digunakan.">
        <meta name="keywords" content="silsilah, keluarga, nasab, bani, pohon keluarga, family tree">
        <meta name="author" content="Jejak Nasab">

        <!-- Open Graph -->
        <meta property="og:title" content="Jejak Nasab — Silsilah Keluarga Digital">
        <meta property="og:description" content="Aplikasi pencatatan silsilah keluarga besar (Bani) yang kolaboratif, modern, dan mudah digunakan.">
        <meta property="og:type" content="website">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
